import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const TO_EMAIL = "Akwelder87@gmail.com";

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
    const age = safe(body?.age);
    const phone = safe(body?.phone);
    const email = safe(body?.email);
    const city = safe(body?.city);
    const passport = safe(body?.passport);
    const job = safe(body?.job);
    const experience = safe(body?.experience);
    const skills = safe(body?.skills);
    const drawings = safe(body?.drawings);
    const work = safe(body?.work);
    const about = safe(body?.about);
    const createdAt = new Date().toISOString();

    const subject =
      locale === "ru"
        ? `AKWELD | Работа | Новая анкета | ${name || "Без имени"}`
        : `AKWELD | Careers | New application | ${name || "No name"}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2 style="margin: 0 0 16px;">
          ${locale === "ru" ? "Новая анкета на работу" : "New job application"}
        </h2>

        <p><strong>${locale === "ru" ? "Дата" : "Created at"}:</strong> ${createdAt}</p>
        <p><strong>${locale === "ru" ? "Язык" : "Locale"}:</strong> ${locale}</p>
        <p><strong>${locale === "ru" ? "Имя" : "Full name"}:</strong> ${name || "-"}</p>
        <p><strong>${locale === "ru" ? "Возраст" : "Age"}:</strong> ${age || "-"}</p>
        <p><strong>${locale === "ru" ? "Телефон / WhatsApp" : "Phone / WhatsApp"}:</strong> ${phone || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>${locale === "ru" ? "Страна / город" : "Country / city"}:</strong> ${city || "-"}</p>

        <div style="margin-top: 14px;">
          <strong>${locale === "ru" ? "Гражданство / паспорт / право на работу в ЕС" : "Citizenship / passport / right to work in the EU"}:</strong>
          <div style="margin-top: 6px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">${passport || "-"}</div>
        </div>

        <div style="margin-top: 14px;">
          <strong>${locale === "ru" ? "На какую должность откликается" : "Position applied for"}:</strong>
          <div style="margin-top: 6px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">${job || "-"}</div>
        </div>

        <p style="margin-top: 14px;"><strong>${locale === "ru" ? "Опыт" : "Experience"}:</strong> ${experience || "-"}</p>

        <div style="margin-top: 14px;">
          <strong>${locale === "ru" ? "Навыки" : "Skills"}:</strong>
          <div style="margin-top: 6px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">${skills || "-"}</div>
        </div>

        <div style="margin-top: 14px;">
          <strong>${locale === "ru" ? "Чтение чертежей" : "Can read drawings"}:</strong>
          <div style="margin-top: 6px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">${drawings || "-"}</div>
        </div>

        <div style="margin-top: 14px;">
          <strong>${locale === "ru" ? "Готовность работать в Эстонии / Швеции" : "Ready to work in Estonia / Sweden"}:</strong>
          <div style="margin-top: 6px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">${work || "-"}</div>
        </div>

        <div style="margin-top: 14px;">
          <strong>${locale === "ru" ? "О себе" : "About"}:</strong>
          <div style="margin-top: 6px; padding: 12px; border: 1px solid #ddd; border-radius: 8px; white-space: pre-wrap;">${about || "-"}</div>
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
        to: [TO_EMAIL],
        reply_to: email || TO_EMAIL,
        subject,
        html,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("RESEND_CAREERS_ERROR", resendData);

      return NextResponse.json(
        {
          ok: false,
          error: resendData?.message || "Failed to send email",
        },
        { status: 500 }
      );
    }

    console.log("CAREERS_REQUEST_SENT", {
      locale,
      name,
      phone,
      email,
      job,
      resendId: resendData?.id || null,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("CAREERS_REQUEST_EXCEPTION", e);

    return NextResponse.json(
      { ok: false, error: e?.message || "Bad request" },
      { status: 400 }
    );
  }
}
