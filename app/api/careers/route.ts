import { NextResponse } from "next/server";

export const runtime = "nodejs";

type UploadedFile = {
  name?: string;
  url?: string;
};

type CareersBody = {
  locale?: string;
  name?: string;
  age?: string;
  phone?: string;
  email?: string;
  city?: string;
  passport?: string;
  job?: string;
  experience?: string;
  skills?: string;
  drawings?: string;
  work?: string;
  languages?: string;
  englishLevel?: string;
  germanLevel?: string;
  driverLicense?: string;
  about?: string;
  uploadedFiles?: UploadedFile[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "—")}</p>`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CareersBody;

    const locale = String(body.locale || "en");
    const name = String(body.name || "").trim();
    const age = String(body.age || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const city = String(body.city || "").trim();
    const passport = String(body.passport || "").trim();
    const job = String(body.job || "").trim();
    const experience = String(body.experience || "").trim();
    const skills = String(body.skills || "").trim();
    const drawings = String(body.drawings || "").trim();
    const work = String(body.work || "").trim();
    const languages = String(body.languages || "").trim();
    const englishLevel = String(body.englishLevel || "").trim();
    const germanLevel = String(body.germanLevel || "").trim();
    const driverLicense = String(body.driverLicense || "").trim();
    const about = String(body.about || "").trim();
    const uploadedFiles = Array.isArray(body.uploadedFiles) ? body.uploadedFiles : [];

    if (!name || !phone || !job || !experience) {
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

    const isRu = locale === "ru";

    const filesHtml =
      uploadedFiles.length > 0
        ? `
          <p><strong>${isRu ? "Файлы" : "Files"}:</strong></p>
          <ul>
            ${uploadedFiles
              .map((file) => {
                const fileName = escapeHtml(String(file.name || "file"));
                const fileUrl = String(file.url || "").trim();
                if (!fileUrl) return "";
                return `<li><a href="${fileUrl}" target="_blank" rel="noreferrer">${fileName}</a></li>`;
              })
              .join("")}
          </ul>
        `
        : `<p><strong>${isRu ? "Файлы" : "Files"}:</strong> —</p>`;

    const subject = isRu
      ? `Новая анкета кандидата AKWELD от ${name}`
      : `New AKWELD candidate application from ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">
          ${isRu ? "Новая анкета кандидата" : "New candidate application"}
        </h2>

        ${row(isRu ? "Имя и фамилия" : "Full name", name)}
        ${row(isRu ? "Возраст" : "Age", age)}
        ${row(isRu ? "Телефон / WhatsApp" : "Phone / WhatsApp", phone)}
        ${row("Email", email)}
        ${row(isRu ? "Страна / город" : "Country / city", city)}
        ${row(isRu ? "Гражданство / паспорт / право на работу в ЕС" : "Citizenship / passport / right to work in the EU", passport)}
        ${row(isRu ? "Должность" : "Position", job)}
        ${row(isRu ? "Опыт работы" : "Experience", experience)}
        ${row(isRu ? "Навыки" : "Skills", skills)}
        ${row(isRu ? "Чтение чертежей" : "Drawing reading", drawings)}
        ${row(isRu ? "Готовность работать в Эстонии / Швеции" : "Ready to work in Estonia / Sweden", work)}
        ${row(isRu ? "Языки" : "Languages", languages)}
        ${row(isRu ? "Уровень английского" : "English level", englishLevel)}
        ${row(isRu ? "Уровень немецкого" : "German level", germanLevel)}
        ${row(isRu ? "Категория прав" : "Driver’s license category", driverLicense)}

        <p><strong>${isRu ? "О себе" : "About"}:</strong></p>
        <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
          ${escapeHtml(about || "—").replace(/\n/g, "<br />")}
        </div>

        <div style="margin-top: 16px;">
          ${filesHtml}
        </div>

        <p style="margin-top: 16px; color: #666; font-size: 13px;">
          ${isRu ? "Язык страницы" : "Page locale"}: ${escapeHtml(locale)}
        </p>
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
        to: ["info@akweldsteel.com", "aleksandr@akweldsteel.com"],
        reply_to: email || "info@akweldsteel.com",
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
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Invalid request",
      },
      { status: 500 }
    );
  }
}
