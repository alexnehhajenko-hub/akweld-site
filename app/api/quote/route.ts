import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const TO_EMAILS = ["info@akweldsteel.com", "aleksandr@akweldsteel.com"];

function safe(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY is not set" },
        { status: 500 }
      );
    }

    if (!resendFromEmail) {
      return NextResponse.json(
        { ok: false, error: "RESEND_FROM_EMAIL is not set" },
        { status: 500 }
      );
    }

    const locale = safe(body?.locale) || "ru";
    const name = safe(body?.name);
    const company = safe(body?.company);
    const phone = safe(body?.phone);
    const email = safe(body?.email);
    const estimateEur = safe(body?.estimateEur);
    const requestText = safe(body?.requestText);
    const createdAt = safe(body?.createdAt) || new Date().toISOString();

    const subject =
      locale === "ru"
        ? `AKWELD | Запрос цены | ${name || company || "Новый лид"}`
        : `AKWELD | Quote request | ${name || company || "New lead"}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2 style="margin: 0 0 16px;">${locale === "ru" ? "Новая заявка на расчёт" : "New quote request"}</h2>

        <p><strong>${locale === "ru" ? "Дата" : "Created at"}:</strong> ${createdAt}</p>
        <p><strong>${locale === "ru" ? "Язык" : "Locale"}:</strong> ${locale}</p>
        <p><strong>${locale === "ru" ? "Имя" : "Name"}:</strong> ${name || "-"}</p>
        <p><strong>${locale === "ru" ? "Компания" : "Company"}:</strong> ${company || "-"}</p>
        <p><strong>${locale === "ru" ? "Телефон" : "Phone"}:</strong> ${phone || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>${locale === "ru" ? "Оценка бюджета / суммы" : "Estimate / budget"}:</strong> ${estimateEur || "-"}</p>

        <div style="margin-top: 20px;">
          <strong>${locale === "ru" ? "Описание запроса" : "Request details"}:</strong>
          <div style="margin-top: 8px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">
${requestText || "-"}
          </div>
        </div>
      </div>
    `;

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `AKWELD <${resendFromEmail}>`,
        to: TO_EMAILS,
        reply_to: email || "info@akweldsteel.com",
        subject,
        html,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("RESEND_QUOTE_ERROR", resendData);

      return NextResponse.json(
        {
          ok: false,
          error: resendData?.message || "Failed to send email",
        },
        { status: 500 }
      );
    }

    console.log("QUOTE_REQUEST_SENT", {
      createdAt,
      locale,
      name,
      company,
      phone,
      email,
      estimateEur,
      resendId: resendData?.id || null,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("QUOTE_REQUEST_EXCEPTION", e);

    return NextResponse.json(
      { ok: false, error: e?.message || "Bad request" },
      { status: 400 }
    );
  }
}
