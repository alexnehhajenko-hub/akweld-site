"use client";

import Link from "next/link";
import { useState } from "react";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);
  const isRu = params.locale === "ru";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      createdAt: new Date().toISOString(),
      locale: params.locale,
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      estimateEur: String(formData.get("estimateEur") || ""),
      requestText: String(formData.get("message") || ""),
    };

    try {
      setIsSubmitting(true);
      setStatus("sending");

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("CONTACT_FORM_SUBMIT_ERROR", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
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

            <p className="small" style={{ marginBottom: 14 }}>
              Email: {CONTACT_EMAIL}
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <input className="input" name="name" placeholder={t.contact.formName} required />
              <input
                className="input"
                name="company"
                placeholder={isRu ? "Компания" : "Company"}
              />
              <input className="input" name="phone" placeholder={t.contact.formPhone} />
              <input
                className="input"
                name="email"
                type="email"
                placeholder={t.contact.formEmail}
                required
              />
              <input
                className="input"
                name="estimateEur"
                placeholder={isRu ? "Оценка бюджета / суммы" : "Estimated budget / amount"}
              />
              <textarea
                className="textarea"
                name="message"
                placeholder={t.contact.formMessage}
                required
              />

              <button className="btn" type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? isRu
                    ? "Отправляем..."
                    : "Sending..."
                  : t.contact.formSend}
              </button>

              {status !== "idle" ? (
                <div
                  className="small"
                  style={{
                    color:
                      status === "success"
                        ? "#8ee28e"
                        : status === "error"
                        ? "#ff8d8d"
                        : "rgba(255,255,255,0.72)",
                  }}
                >
                  {status === "sending"
                    ? isRu
                      ? "Отправляем запрос..."
                      : "Sending request..."
                    : status === "success"
                    ? isRu
                      ? "Запрос отправлен. Мы свяжемся с вами."
                      : "Request sent. We will contact you."
                    : isRu
                    ? "Не удалось отправить запрос. Попробуйте ещё раз."
                    : "Failed to send the request. Please try again."}
                </div>
              ) : (
                <div className="small">{t.contact.formHint}</div>
              )}
            </form>

            <div style={{ marginTop: 12 }}>
              <Link className="btnGhost" href={`/${params.locale}/services`}>
                {t.common.viewServices}
              </Link>
            </div>
          </div>

          <p className="small" style={{ marginTop: 12 }}>
            {t.contact.note}
          </p>
        </div>
      </section>
    </div>
  );
}