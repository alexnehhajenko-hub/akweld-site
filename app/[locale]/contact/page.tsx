"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { upload } from "@vercel/blob/client";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";
const UPLOAD_TIMEOUT_MS = 45000;

function isRu(locale: Locale) {
  return locale === "ru";
}

type UploadedFile = {
  name: string;
  url: string;
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  location: "",
  message: "",
};

function withTimeout<T>(promise: Promise<T>, ms: number, errorText: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error(errorText)), ms);
    }),
  ]);
}

function getSafeUploadPath(file: File, index: number) {
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

  return `contact/${Date.now()}-${index + 1}-${safeBase}${ext}`;
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);
  const ru = isRu(params.locale);

  const [form, setForm] = useState<FormState>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const fileListText = useMemo(() => {
    if (!files.length) return "";
    return files.map((file) => `${file.name} (${Math.round(file.size / 1024)} KB)`).join("\n");
  }, [files]);

  async function uploadFilesToBlob(selectedFiles: File[]): Promise<UploadedFile[]> {
    const uploaded: UploadedFile[] = [];

    for (const [index, file] of selectedFiles.entries()) {
      setStatus({
        ok: true,
        text: ru
          ? `Загружаем файл ${index + 1} из ${selectedFiles.length}...`
          : `Uploading file ${index + 1} of ${selectedFiles.length}...`,
      });

      const blob = await withTimeout(
        upload(getSafeUploadPath(file, index), file, {
          access: "public",
          handleUploadUrl: "/api/contact/upload",
        }),
        UPLOAD_TIMEOUT_MS,
        ru
          ? `Таймаут загрузки файла: ${file.name}`
          : `Upload timeout for file: ${file.name}`
      );

      uploaded.push({
        name: file.name,
        url: blob.url,
      });
    }

    return uploaded;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        ok: false,
        text: ru
          ? "Заполните имя, email и сообщение."
          : "Please fill in name, email and message.",
      });
      return;
    }

    setIsSending(true);

    try {
      let uploadedFiles: UploadedFile[] = [];

      if (files.length > 0) {
        uploadedFiles = await uploadFilesToBlob(files);
      }

      setStatus({
        ok: true,
        text: ru ? "Файлы загружены. Отправляем заявку..." : "Files uploaded. Sending request...",
      });

      const res = await withTimeout(
        fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            locale: params.locale,
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            location: form.location.trim(),
            message: form.message.trim(),
            uploadedFiles,
          }),
        }),
        20000,
        ru ? "Таймаут отправки заявки" : "Request timeout"
      );

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setStatus({
        ok: true,
        text: ru
          ? "Запрос отправлен. Ссылки на файлы добавлены в письмо."
          : "Request sent. File links were added to the email.",
      });

      setForm(initialForm);
      setFiles([]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Request failed";

      setStatus({
        ok: false,
        text: ru
          ? `Не удалось отправить запрос: ${message}`
          : `Could not send the request: ${message}`,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="container">
      <section className="section">
        <h1 className="heroTitle" style={{ fontSize: 30, marginBottom: 10 }}>
          {t.contact.title}
        </h1>

        <p className="heroText">{t.contact.lead}</p>

        <div className="cards" style={{ marginTop: 14 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>{t.contact.block1Title}</h3>
            <p>{t.contact.block1Text}</p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>{t.contact.block2Title}</h3>
            <p>{t.contact.block2Text}</p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>{t.contact.block3Title}</h3>
            <p>{t.contact.block3Text}</p>
          </div>
        </div>

        <div className="section" style={{ paddingTop: 18 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>{t.common.getQuote}</h3>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
              <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
                Email: {CONTACT_EMAIL}
              </a>
            </div>

            <form className="form" onSubmit={onSubmit}>
              <input
                className="input"
                name="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder={t.contact.formName}
                autoComplete="name"
              />

              <input
                className="input"
                name="phone"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder={t.contact.formPhone}
                autoComplete="tel"
              />

              <input
                className="input"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder={t.contact.formEmail}
                autoComplete="email"
              />

              <input
                className="input"
                name="location"
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder={ru ? "Где находится проект / страна / город" : "Project location / country / city"}
              />

              <textarea
                className="textarea"
                name="message"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder={t.contact.formMessage}
              />

              <label className="small" style={{ marginTop: 4 }}>
                {ru
                  ? "Прикрепите чертежи, PDF-файлы, фотографии"
                  : "Attach drawings, PDF files, photos"}
              </label>

              <input
                className="input"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />

              {files.length > 0 ? (
                <textarea
                  className="textarea"
                  readOnly
                  value={fileListText}
                  style={{ minHeight: 100 }}
                />
              ) : null}

              <button className="btn" type="submit" disabled={isSending}>
                {isSending
                  ? ru
                    ? "Отправляем..."
                    : "Sending..."
                  : t.contact.formSend}
              </button>

              <div className="small">
                {ru
                  ? "Форма отправляет заявку на email info@akweldsteel.com. Файлы будут доступны по прямой ссылке."
                  : "This form sends the request to info@akweldsteel.com. Files will be available by direct link."}
              </div>

              {status ? (
                <div
                  className="small"
                  style={{
                    color: status.ok ? "rgba(255,255,255,0.92)" : "#ffb4b4",
                    marginTop: 4,
                  }}
                >
                  {status.text}
                </div>
              ) : null}
            </form>

            <div style={{ marginTop: 12 }}>
              <Link className="btnGhost" href={`/${params.locale}/services`}>
                {t.common.viewServices}
              </Link>
            </div>
          </div>

          <p className="small" style={{ marginTop: 12 }}>
            {ru
              ? "Основной канал связи — email: info@akweldsteel.com."
              : "Main contact channel: info@akweldsteel.com."}
          </p>
        </div>
      </section>
    </div>
  );
}
