import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactBody = {
  locale?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;

    const locale = String(body.locale || "en");
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !resendFromEmail) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY or RESEND_FROM_EMAIL" },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone || "—");
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const subject =
      locale === "ru"
        ? `Новая заявка с сайта AKWELD от ${name}`
        : `New AKWELD website request from ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">${locale === "ru" ? "Новая заявка с сайта" : "New website request"}</h2>
        <p><strong>${locale === "ru" ? "Имя" : "Name"}:</strong> ${safeName}</p>
        <p><strong>${locale === "ru" ? "Телефон / WhatsApp" : "Phone / WhatsApp"}:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>${locale === "ru" ? "Язык страницы" : "Page locale"}:</strong> ${escapeHtml(locale)}</p>
        <p><strong>${locale === "ru" ? "Сообщение" : "Message"}:</strong></p>
        <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
          ${safeMessage}
        </div>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: ["info@akweldsteel.com"],
        reply_to: email,
        subject,
        html,
      }),
    });

    const resendData = await resendRes.json().catch(() => null);

    if (!resendRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: resendData?.message || resendData?.error || "Resend request failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 500 }
    );
  }
}
