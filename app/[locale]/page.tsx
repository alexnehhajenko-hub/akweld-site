"use client";

import React from "react";
import Image from "next/image";
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

const CAREERS_LABEL: Record<"ru" | "en", string> = {
  ru: "Ищем работников",
  en: "We are hiring",
};

const PARTNERS_LABEL: Record<Locale, string> = {
  ru: "Ищем партнёров",
  en: "Looking for partners",
  et: "Otsime partnereid",
  sv: "Söker partner",
  fi: "Etsimme kumppaneita",
  no: "Vi søker partnere",
  da: "Vi søger partnere",
};

function getTrustUi(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        title: "Партнёрство и сертификация",
        partnerTitle: "Партнёр в Швеции",
        partnerText:
          "Работаем вместе с партнёрами по проектам в Швеции и по региону.",
        certTitle: "Сертифицированные сварщики и допуски",
        certText:
          "У нас работают сертифицированные сварщики. Есть допуски и сертификаты на сварку в разных положениях, а также практический опыт работы по производственным и монтажным задачам.",
        certItems: [
          "сертифицированные сварщики",
          "сварка в разных положениях",
          "опыт по производству и монтажу",
        ],
      };
    case "sv":
      return {
        title: "Partnerskap och certifiering",
        partnerTitle: "Partner i Sverige",
        partnerText:
          "Vi arbetar tillsammans med partner för projekt i Sverige och i regionen.",
        certTitle: "Certifierade svetsare och godkännanden",
        certText:
          "Vi arbetar med certifierade svetsare. Vi har godkännanden och certifikat för svetsning i olika positioner samt praktisk erfarenhet av produktion och montage.",
        certItems: [
          "certifierade svetsare",
          "svetsning i olika positioner",
          "erfarenhet från produktion och montage",
        ],
      };
    case "no":
      return {
        title: "Partnerskap og sertifisering",
        partnerTitle: "Partner i Sverige",
        partnerText:
          "Vi samarbeider med partnere om prosjekter i Sverige og i regionen.",
        certTitle: "Sertifiserte sveisere og godkjenninger",
        certText:
          "Vi arbeider med sertifiserte sveisere. Vi har godkjenninger og sertifikater for sveising i ulike posisjoner, samt praktisk erfaring fra produksjon og montasje.",
        certItems: [
          "sertifiserte sveisere",
          "sveising i ulike posisjoner",
          "erfaring fra produksjon og montasje",
        ],
      };
    case "da":
      return {
        title: "Partnerskab og certificering",
        partnerTitle: "Partner i Sverige",
        partnerText:
          "Vi arbejder sammen med partnere på projekter i Sverige og i regionen.",
        certTitle: "Certificerede svejsere og godkendelser",
        certText:
          "Vi arbejder med certificerede svejsere. Vi har godkendelser og certifikater til svejsning i forskellige positioner samt praktisk erfaring fra produktion og montage.",
        certItems: [
          "certificerede svejsere",
          "svejsning i forskellige positioner",
          "erfaring fra produktion og montage",
        ],
      };
    case "fi":
      return {
        title: "Kumppanuus ja sertifiointi",
        partnerTitle: "Yhteistyökumppani Ruotsissa",
        partnerText:
          "Teemme yhteistyötä kumppaneiden kanssa projekteissa Ruotsissa ja koko alueella.",
        certTitle: "Sertifioidut hitsaajat ja hyväksynnät",
        certText:
          "Työskentelemme sertifioitujen hitsaajien kanssa. Meillä on hyväksynnät ja sertifikaatit hitsaukseen eri asennoissa sekä käytännön kokemusta tuotanto- ja asennustöistä.",
        certItems: [
          "sertifioidut hitsaajat",
          "hitsaus eri asennoissa",
          "kokemus tuotannosta ja asennuksesta",
        ],
      };
    case "et":
      return {
        title: "Partnerlus ja sertifitseerimine",
        partnerTitle: "Partner Rootsis",
        partnerText:
          "Teeme koostööd partneritega projektides Rootsis ja kogu piirkonnas.",
        certTitle: "Sertifitseeritud keevitajad ja load",
        certText:
          "Meil töötavad sertifitseeritud keevitajad. Olemas on load ja sertifikaadid keevitamiseks erinevates asendites ning praktiline kogemus tootmis- ja paigaldustöödes.",
        certItems: [
          "sertifitseeritud keevitajad",
          "keevitamine erinevates asendites",
          "kogemus tootmises ja paigalduses",
        ],
      };
    case "en":
    default:
      return {
        title: "Partnership and certification",
        partnerTitle: "Partner in Sweden",
        partnerText:
          "We work together with partners on projects in Sweden and across the region.",
        certTitle: "Certified welders and approvals",
        certText:
          "We work with certified welders. We have approvals and welding certificates for different welding positions, together with practical experience in workshop and site work.",
        certItems: [
          "certified welders",
          "welding in different positions",
          "workshop and site experience",
        ],
      };
  }
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);
  const trust = getTrustUi(params.locale);
  const HERO_BG = "/hero-bg.png";

  const showHiringLink = params.locale === "ru" || params.locale === "en";

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

              {showHiringLink ? (
                <Link className="btnGhost" href={`/${params.locale}/careers`}>
                  {CAREERS_LABEL[params.locale as "ru" | "en"]}
                </Link>
              ) : null}

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
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {trust.title}
          </h2>

          <div className="trustGrid">
            <div className="trustPartner">
              <div className="trustLogoWrap">
                <Image
                  src="/partner-sk-licenssvets.png"
                  alt="SK Licenssvets"
                  width={96}
                  height={96}
                  className="trustLogo"
                />
              </div>

              <div className="trustText">
                <h3>{trust.partnerTitle}</h3>
                <p>{trust.partnerText}</p>
              </div>
            </div>

            <div className="trustCerts">
              <h3>{trust.certTitle}</h3>
              <p>{trust.certText}</p>

              <ul className="trustList">
                {trust.certItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
