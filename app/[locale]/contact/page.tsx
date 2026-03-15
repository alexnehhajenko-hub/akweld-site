"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";
const MAX_FILES = 5;
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

function isRu(locale: Locale) {
  return locale === "ru";
}

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

function formatFileSize(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
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
    return files.map((file) => `${file.name} (${formatFileSize(file.size)})`).join("\n");
  }, [files]);

  function validateFiles(selectedFiles: File[]) {
    if (selectedFiles.length > MAX_FILES) {
      return ru
        ? `Можно прикрепить максимум ${MAX_FILES} файлов.`
        : `You can attach up to ${MAX_FILES} files.`;
    }

    for (const file of selectedFiles) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return ru
          ? `Недопустимый тип файла: ${file.name}. Разрешены PDF, JPG, PNG, WEBP.`
          : `Unsupported file type: ${file.name}. Allowed: PDF, JPG, PNG, WEBP.`;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        return ru
          ? `Файл слишком большой: ${file.name}. Максимум ${MAX_FILE_SIZE_MB} MB на файл.`
          : `File is too large: ${file.name}. Maximum ${MAX_FILE_SIZE_MB} MB per file.`;
      }
    }

    return null;
  }

  function handleFilesChange(nextFiles: File[]) {
    const validationError = validateFiles(nextFiles);

    if (validationError) {
      setFiles([]);
      setStatus({
        ok: false,
        text: validationError,
      });
      return;
    }

    setFiles(nextFiles);
    setStatus(null);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSending) return;

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

    const validationError = validateFiles(files);
    if (validationError) {
      setStatus({
        ok: false,
        text: validationError,
      });
      return;
    }

    setIsSending(true);

    try {
      const body = new FormData();
      body.append("locale", params.locale);
      body.append("name", form.name.trim());
      body.append("phone", form.phone.trim());
      body.append("email", form.email.trim());
      body.append("location", form.location.trim());
      body.append("message", form.message.trim());

      for (const file of files) {
        body.append("files", file, file.name);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string; uploadedFiles?: number }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setStatus({
        ok: true,
        text: ru
          ? files.length > 0
            ? "Запрос отправлен. Файлы загружены, ссылки добавлены в письмо."
            : "Запрос отправлен."
          : files.length > 0
            ? "Request sent. Files were uploaded and links were added to the email."
            : "Request sent.",
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
                  ? `Прикрепите чертежи, PDF-файлы, фотографии (до ${MAX_FILES} файлов, до ${MAX_FILE_SIZE_MB} MB каждый)`
                  : `Attach drawings, PDF files, photos (up to ${MAX_FILES} files, up to ${MAX_FILE_SIZE_MB} MB each)`}
              </label>

              <input
                className="input"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={(e) => handleFilesChange(Array.from(e.target.files || []))}
              />

              {files.length > 0 ? (
                <textarea
                  className="textarea"
                  readOnly
                  value={fileListText}
                  style={{ minHeight: 110 }}
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
                  ? "Форма отправляет заявку на email info@akweldsteel.com. Если прикреплены файлы, в письмо добавляются ссылки на них."
                  : "This form sends the request to info@akweldsteel.com. If files are attached, links to them are added to the email."}
              </div>

              {status ? (
                <div
                  className="small"
                  style={{
                    color: status.ok ? "rgba(255,255,255,0.92)" : "#ffb4b4",
                    marginTop: 4,
                    whiteSpace: "pre-wrap",
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
