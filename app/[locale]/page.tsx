"use client";

import React from "react";
import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

const PROJECT_SLUGS = [
  "industrial-platforms",
  "staircases-railings",
  "steel-frames",
  "supports-brackets",
  "repair-works",
  "workforce-projects",
];

const CAREERS_LABEL: Record<Locale, string> = {
  ru: "Ищем работников",
  en: "We are hiring",
  sv: "We are hiring",
  fi: "We are hiring",
  da: "We are hiring",
  no: "We are hiring",
};

const PARTNERS_LABEL: Record<Locale, string> = {
  ru: "Ищем партнёров",
  en: "Looking for partners",
  sv: "Looking for partners",
  fi: "Looking for partners",
  da: "Looking for partners",
  no: "Looking for partners",
};

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);
  const HERO_BG = "/service_fabrication_01.png";

  return (
    <div className="container">
      <section className="hero">
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(1.02) saturate(1.02)",
            opacity: 0.28,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "radial-gradient(1200px 700px at 20% 10%, rgba(255,196,0,0.12), transparent 60%), linear-gradient(180deg, rgba(11,15,20,0.58) 0%, rgba(7,10,14,0.92) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="heroGrid" style={{ position: "relative", zIndex: 1 }}>
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

              <Link className="btnGhost" href={`/${params.locale}/careers`}>
                {CAREERS_LABEL[params.locale]}
              </Link>

              <Link className="btnGhost" href={`/${params.locale}/partners`}>
                {PARTNERS_LABEL[params.locale]}
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
              {t.services.cards.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  href={`/${params.locale}/services/${c.slug}`}
                  className="card"
                  style={{ display: "block" }}
                >
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </Link>
              ))}
            </div>

            <p className="small" style={{ marginTop: 14, position: "relative" }}>
              {t.home.complianceNote}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">{t.home.projectsTitle}</h2>

        <div className="cards">
          {t.projects.items.slice(0, 6).map((p, idx) => (
            <Link
              key={p.title}
              href={`/${params.locale}/projects/${PROJECT_SLUGS[idx] ?? "project"}`}
              className="card"
              style={{ display: "block" }}
            >
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 14 }}>
          <Link className="btnGhost" href={`/${params.locale}/projects`}>
            {t.common.viewProjects}
          </Link>
        </div>
      </section>
    </div>
  );
}
