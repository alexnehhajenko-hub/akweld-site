import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function safe(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

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
    const formData = await req.formData();

    const locale = safe(formData.get("locale")) || "en";
    const name = safe(formData.get("name"));
    const phone = safe(formData.get("phone"));
    const email = safe(formData.get("email"));
    const location = safe(formData.get("location"));
    const message = safe(formData.get("message"));

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

    const files = formData
      .getAll("files")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    const uploadedFiles: Array<{ name: string; url: string }> = [];

    for (const file of files) {
      const safeFileName = file.name.replace(/\s+/g, "-");
      const blob = await put(`contact/${Date.now()}-${safeFileName}`, file, {
        access: "private" as any,
        addRandomSuffix: true,
      });

      uploadedFiles.push({
        name: file.name,
        url: blob.url,
      });
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone || "—");
    const safeEmail = escapeHtml(email);
    const safeLocation = escapeHtml(location || "—");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const filesHtml =
      uploadedFiles.length > 0
        ? `
          <p><strong>${locale === "ru" ? "Файлы" : "Files"}:</strong></p>
          <ul>
            ${uploadedFiles
              .map(
                (file) =>
                  `<li><a href="${file.url}" target="_blank" rel="noreferrer">${escapeHtml(file.name)}</a></li>`
              )
              .join("")}
          </ul>
        `
        : `<p><strong>${locale === "ru" ? "Файлы" : "Files"}:</strong> —</p>`;

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
        <p><strong>${locale === "ru" ? "Где находится проект" : "Project location"}:</strong> ${safeLocation}</p>
        <p><strong>${locale === "ru" ? "Язык страницы" : "Page locale"}:</strong> ${escapeHtml(locale)}</p>
        <p><strong>${locale === "ru" ? "Сообщение" : "Message"}:</strong></p>
        <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
          ${safeMessage}
        </div>
        <div style="margin-top: 16px;">
          ${filesHtml}
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

    return NextResponse.json({
      ok: true,
      uploadedFiles: uploadedFiles.length,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Invalid request";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}