"use client";

import Link from "next/link";
import { useState } from "react";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";

function isRu(locale: Locale) {
  return locale === "ru";
}

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);
  const ru = isRu(params.locale);

  const [form, setForm] = useState<FormState>(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale: params.locale,
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setStatus({
        ok: true,
        text: ru
          ? "Запрос отправлен. Мы свяжемся с вами по email."
          : "Request sent. We will contact you by email.",
      });
      setForm(initialForm);
    } catch {
      setStatus({
        ok: false,
        text: ru
          ? "Не удалось отправить запрос. Проверьте настройки почты на сервере."
          : "Could not send the request. Please check the server email settings.",
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

              <textarea
                className="textarea"
                name="message"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder={t.contact.formMessage}
              />

              <button className="btn" type="submit" disabled={isSending}>
                {isSending
                  ? ru
                    ? "Отправляем..."
                    : "Sending..."
                  : t.contact.formSend}
              </button>

              <div className="small">
                {ru
                  ? "Форма отправляет заявку на email info@akweldsteel.com."
                  : "This form sends the request to info@akweldsteel.com."}
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