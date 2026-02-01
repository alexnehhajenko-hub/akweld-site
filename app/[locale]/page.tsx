"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getT, type Locale } from "@/src/i18n";

type ModalItem = {
  kind: "service" | "project";
  title: string;
  text: string;
  imageSrc: string;
  detailsHref?: string;
};

const CONTACT_PHONE = "+372 5561 5108";
const CONTACT_EMAIL = ""; // <-- сюда вставим, когда ты дашь email

function labels(locale: Locale) {
  const map: Record<
    Locale,
    {
      call: string;
      close: string;
      service: string;
      project: string;
      quote: string;
      details: string;
      email: string;
      emailMissing: string;
    }
  > = {
    ru: {
      call: "Позвонить",
      close: "Закрыть",
      service: "Услуга",
      project: "Проект",
      quote: "Запросить цену",
      details: "Подробнее",
      email: "Email",
      emailMissing: "Email: (дай адрес — вставлю)",
    },
    en: {
      call: "Call",
      close: "Close",
      service: "Service",
      project: "Project",
      quote: "Get a quote",
      details: "Details",
      email: "Email",
      emailMissing: "Email: (send me the address — I’ll add it)",
    },
    et: {
      call: "Helista",
      close: "Sulge",
      service: "Teenus",
      project: "Projekt",
      quote: "Küsi pakkumist",
      details: "Loe lähemalt",
      email: "E-post",
      emailMissing: "E-post: (anna aadress — lisan)",
    },
    sv: {
      call: "Ring",
      close: "Stäng",
      service: "Tjänst",
      project: "Projekt",
      quote: "Begär offert",
      details: "Detaljer",
      email: "E-post",
      emailMissing: "E-post: (skicka adressen — jag lägger in)",
    },
    fi: {
      call: "Soita",
      close: "Sulje",
      service: "Palvelu",
      project: "Projekti",
      quote: "Pyydä tarjous",
      details: "Lisätiedot",
      email: "Sähköposti",
      emailMissing: "Sähköposti: (anna osoite — lisään)",
    },
    no: {
      call: "Ring",
      close: "Lukk",
      service: "Tjeneste",
      project: "Prosjekt",
      quote: "Be om tilbud",
      details: "Detaljer",
      email: "E-post",
      emailMissing: "E-post: (send adressen — så legger jeg den inn)",
    },
    da: {
      call: "Ring",
      close: "Luk",
      service: "Ydelse",
      project: "Projekt",
      quote: "Få et tilbud",
      details: "Detaljer",
      email: "Email",
      emailMissing: "Email: (send adressen — så indsætter jeg den)",
    },
  };

  // если вдруг придёт неизвестная локаль — fallback на EN
  return map[locale] ?? map.en;
}

function Modal({
  item,
  onClose,
  locale,
}: {
  item: ModalItem;
  onClose: () => void;
  locale: Locale;
}) {
  if (!item) return null;

  const L = labels(locale);

  const phoneNoSpaces = CONTACT_PHONE.replace(/\s+/g, "");
  const callTitle = `${L.call}: ${CONTACT_PHONE}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(980px, 100%)",
          maxHeight: "85vh",
          overflow: "auto",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(11, 15, 20, 0.96)",
          boxShadow: "0 20px 70px rgba(0,0,0,0.55)",
        }}
      >
        <div style={{ position: "relative" }}>
          <div style={{ position: "relative", width: "100%", height: 280 }}>
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              sizes="(max-width: 900px) 100vw, 980px"
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.78) 85%)",
              }}
            />
          </div>

          <button
            onClick={onClose}
            aria-label={L.close}
            title={L.close}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 40,
              height: 40,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.92)",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: "40px",
            }}
          >
            ✕
          </button>

          <div style={{ position: "absolute", left: 16, right: 16, bottom: 14 }}>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  border: "1px solid rgba(255,196,0,0.30)",
                  background: "rgba(255,196,0,0.10)",
                  borderRadius: 999,
                  padding: "6px 10px",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {item.kind === "service" ? L.service : L.project}
              </span>
            </div>
            <h2 style={{ margin: "10px 0 0", fontSize: 24 }}>{item.title}</h2>
          </div>
        </div>

        <div style={{ padding: 16 }}>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.65,
              fontSize: 15,
            }}
          >
            {item.text}
          </p>

          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              className="btn"
              href={`tel:${phoneNoSpaces}`}
              title={callTitle}
              aria-label={callTitle}
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              {L.call}: {CONTACT_PHONE}
            </a>

            {CONTACT_EMAIL ? (
              <a
                className="btnGhost"
                href={`mailto:${CONTACT_EMAIL}`}
                title={`${L.email}: ${CONTACT_EMAIL}`}
                aria-label={`${L.email}: ${CONTACT_EMAIL}`}
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                {L.email}: {CONTACT_EMAIL}
              </a>
            ) : (
              <span className="small">{L.emailMissing}</span>
            )}

            <Link className="btnGhost" href={`/${locale}/contact`}>
              {L.quote}
            </Link>

            {item.detailsHref ? (
              <Link className="btnGhost" href={item.detailsHref}>
                {L.details}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);

  const topServices = t.services.cards.slice(0, 3);

  const [modalItem, setModalItem] = useState<ModalItem | null>(null);

  // Пока у нас нет отдельных картинок на каждую услугу/проект —
  // используем одну подложку. Позже заменим на реальные файлы из public/.
  const DEFAULT_IMAGE = "/hero-bg.jpg";

  const openService = (s: { slug: string; title: string; text: string }) => {
    setModalItem({
      kind: "service",
      title: s.title,
      text: s.text,
      imageSrc: DEFAULT_IMAGE,
      detailsHref: `/${params.locale}/services/${s.slug}`,
    });
  };

  const openProject = (p: { title: string; text: string }) => {
    setModalItem({
      kind: "project",
      title: p.title,
      text: p.text,
      imageSrc: DEFAULT_IMAGE,
      detailsHref: `/${params.locale}/projects`,
    });
  };

  return (
    <div className="container">
      {modalItem ? (
        <Modal
          item={modalItem}
          onClose={() => setModalItem(null)}
          locale={params.locale}
        />
      ) : null}

      <section className="hero">
        <div className="heroGrid">
          <div className="heroCard">
            <h1 className="heroTitle">
              {t.home.heroTitle1} <span>{t.home.heroTitle2}</span>
            </h1>
            <p className="heroText">{t.home.heroText}</p>

            <div className="heroActions">
              <Link className="btn" href={`/${params.locale}/contact`}>
                {t.common.getQuote}
              </Link>
              <Link className="btnGhost" href={`/${params.locale}/services`}>
                {t.common.viewServices}
              </Link>
            </div>

            <div className="kpis">
              <div className="kpi">
                <strong>{t.home.kpi1Top}</strong>
                <span>{t.home.kpi1Bottom}</span>
              </div>
              <div className="kpi">
                <strong>{t.home.kpi2Top}</strong>
                <span>{t.home.kpi2Bottom}</span>
              </div>
              <div className="kpi">
                <strong>{t.home.kpi3Top}</strong>
                <span>{t.home.kpi3Bottom}</span>
              </div>
              <div className="kpi">
                <strong>{t.home.kpi4Top}</strong>
                <span>{t.home.kpi4Bottom}</span>
              </div>
            </div>
          </div>

          <div className="heroCard">
            <h2 className="sectionTitle">{t.home.focusTitle}</h2>

            <div className="cards">
              {topServices.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  className="card"
                  onClick={() => openService(c)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </button>
              ))}
            </div>

            <p
              className="small"
              style={{ marginTop: 12, position: "relative" }}
            >
              {t.home.complianceNote}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">{t.home.servicesTitle}</h2>
        <div className="cards">
          {t.services.cards.slice(0, 6).map((s) => (
            <button
              key={s.slug}
              type="button"
              className="card"
              onClick={() => openService(s)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">{t.home.projectsTitle}</h2>
        <div className="cards">
          {t.projects.items.slice(0, 6).map((p) => (
            <button
              key={p.title}
              type="button"
              className="card"
              onClick={() => openProject(p)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </button>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <Link className="btnGhost" href={`/${params.locale}/projects`}>
            {t.common.viewProjects}
          </Link>
        </div>
      </section>
    </div>
  );
}