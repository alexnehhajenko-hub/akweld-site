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

function safe(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CareersBody;

    const locale = safe(body.locale) || "ru";
    const name = safe(body.name);
    const age = safe(body.age);
    const phone = safe(body.phone);
    const email = safe(body.email);
    const city = safe(body.city);
    const passport = safe(body.passport);
    const job = safe(body.job);
    const experience = safe(body.experience);
    const skills = safe(body.skills);
    const drawings = safe(body.drawings);
    const work = safe(body.work);
    const languages = safe(body.languages);
    const englishLevel = safe(body.englishLevel);
    const germanLevel = safe(body.germanLevel);
    const driverLicense = safe(body.driverLicense);
    const about = safe(body.about);
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

    const filesHtml =
      uploadedFiles.length > 0
        ? `
          <p><strong>${locale === "ru" ? "Файлы" : "Files"}:</strong></p>
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
        : `<p><strong>${locale === "ru" ? "Файлы" : "Files"}:</strong> —</p>`;

    const subject =
      locale === "ru"
        ? `Новая анкета кандидата AKWELD | ${name}`
        : `New AKWELD candidate application | ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">${locale === "ru" ? "Новая анкета кандидата" : "New candidate application"}</h2>

        <p><strong>${locale === "ru" ? "Имя" : "Name"}:</strong> ${escapeHtml(name || "-")}</p>
        <p><strong>${locale === "ru" ? "Возраст" : "Age"}:</strong> ${escapeHtml(age || "-")}</p>
        <p><strong>${locale === "ru" ? "Телефон / WhatsApp" : "Phone / WhatsApp"}:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "-")}</p>
        <p><strong>${locale === "ru" ? "Страна / город" : "Country / city"}:</strong> ${escapeHtml(city || "-")}</p>
        <p><strong>${locale === "ru" ? "Гражданство / право на работу" : "Citizenship / right to work"}:</strong> ${escapeHtml(passport || "-")}</p>
        <p><strong>${locale === "ru" ? "Должность" : "Position"}:</strong> ${escapeHtml(job || "-")}</p>
        <p><strong>${locale === "ru" ? "Опыт" : "Experience"}:</strong> ${escapeHtml(experience || "-")}</p>
        <p><strong>${locale === "ru" ? "Навыки" : "Skills"}:</strong> ${escapeHtml(skills || "-").replace(/\n/g, "<br />")}</p>
        <p><strong>${locale === "ru" ? "Чтение чертежей" : "Drawing reading"}:</strong> ${escapeHtml(drawings || "-").replace(/\n/g, "<br />")}</p>
        <p><strong>${locale === "ru" ? "Готовность к работе" : "Ready to work"}:</strong> ${escapeHtml(work || "-").replace(/\n/g, "<br />")}</p>
        <p><strong>${locale === "ru" ? "Языки" : "Languages"}:</strong> ${escapeHtml(languages || "-").replace(/\n/g, "<br />")}</p>
        <p><strong>${locale === "ru" ? "Английский" : "English level"}:</strong> ${escapeHtml(englishLevel || "-")}</p>
        <p><strong>${locale === "ru" ? "Немецкий" : "German level"}:</strong> ${escapeHtml(germanLevel || "-")}</p>
        <p><strong>${locale === "ru" ? "Категория прав" : "Driver license"}:</strong> ${escapeHtml(driverLicense || "-")}</p>

        <div style="margin-top: 16px;">
          <strong>${locale === "ru" ? "О кандидате" : "About candidate"}:</strong>
          <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
            ${escapeHtml(about || "-").replace(/\n/g, "<br />")}
          </div>
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