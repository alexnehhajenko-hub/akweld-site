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

function getSafeFileName(file: File, index: number) {
  const parts = file.name.split(".");
  const ext = parts.length > 1 ? `.${parts.pop()!.toLowerCase()}` : "";
  const rawBase = parts.join(".").trim();

  const safeBase =
    rawBase
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 40) || "file";

  return `partners/${Date.now()}-${index + 1}-${safeBase}${ext}`;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const locale = safe(formData.get("locale")) || "en";
    const companyName = safe(formData.get("companyName"));
    const contactName = safe(formData.get("contactName"));
    const email = safe(formData.get("email"));
    const phone = safe(formData.get("phone"));
    const location = safe(formData.get("location"));
    const partnershipType = safe(formData.get("partnershipType"));
    const services = safe(formData.get("services"));
    const message = safe(formData.get("message"));

    if (!companyName || !contactName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;
    const blobToken =
      process.env.FILES_BLOB_READ_WRITE_TOKEN ||
      process.env.BLOB_READ_WRITE_TOKEN;

    if (!resendApiKey || !resendFromEmail) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY or RESEND_FROM_EMAIL" },
        { status: 500 }
      );
    }

    if (!blobToken) {
      return NextResponse.json(
        { ok: false, error: "Missing FILES_BLOB_READ_WRITE_TOKEN or BLOB_READ_WRITE_TOKEN" },
        { status: 500 }
      );
    }

    const files = formData
      .getAll("files")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    const uploadedFiles: Array<{ name: string; url: string }> = [];

    for (const [index, file] of files.entries()) {
      const blob = await put(getSafeFileName(file, index), file, {
        token: blobToken,
        access: "public",
        addRandomSuffix: true,
      });

      uploadedFiles.push({
        name: file.name,
        url: blob.url,
      });
    }

    const isRu = locale === "ru";

    const filesHtml =
      uploadedFiles.length > 0
        ? `
          <p><strong>${isRu ? "Файлы" : "Files"}:</strong></p>
          <ul>
            ${uploadedFiles
              .map(
                (file) =>
                  `<li><a href="${file.url}" target="_blank" rel="noreferrer">${escapeHtml(file.name)}</a></li>`
              )
              .join("")}
          </ul>
        `
        : `<p><strong>${isRu ? "Файлы" : "Files"}:</strong> —</p>`;

    const subject = isRu
      ? `Новая заявка на партнёрство от ${companyName}`
      : `New partnership request from ${companyName}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">${isRu ? "Новая заявка на партнёрство" : "New partnership request"}</h2>

        <p><strong>${isRu ? "Компания" : "Company"}:</strong> ${escapeHtml(companyName)}</p>
        <p><strong>${isRu ? "Контактное лицо" : "Contact person"}:</strong> ${escapeHtml(contactName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>${isRu ? "Телефон / WhatsApp" : "Phone / WhatsApp"}:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>${isRu ? "Страна / город" : "Country / city"}:</strong> ${escapeHtml(location || "—")}</p>
        <p><strong>${isRu ? "Тип сотрудничества" : "Type of partnership"}:</strong> ${escapeHtml(partnershipType || "—")}</p>

        <p><strong>${isRu ? "Что предлагает компания" : "What the company offers"}:</strong></p>
        <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
          ${escapeHtml(services || "—").replace(/\n/g, "<br />")}
        </div>

        <p style="margin-top: 16px;"><strong>${isRu ? "Сообщение" : "Message"}:</strong></p>
        <div style="padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa;">
          ${escapeHtml(message).replace(/\n/g, "<br />")}
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

    return NextResponse.json({ ok: true, uploadedFiles: uploadedFiles.length });
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
