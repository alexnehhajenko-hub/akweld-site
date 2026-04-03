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
          "У нас работают сертифицированные сварщики. Есть практический опыт производственных и монтажных работ, а также аттестации по европейским требованиям.",
        certItems: [
          "TIG сварка",
          "MIG / MAG сварка",
          "MMA сварка",
          "сертифицированные сварщики",
          "европейские стандарты аттестации",
        ],
        heroPartner: "Партнёр в Швеции",
        heroCerts: "Сертифицированные сварщики",
        heroWelding: "TIG / MIG / MAG / MMA",
        heroStandards: "Европейские стандарты",
      };
    case "sv":
      return {
        title: "Partnerskap och certifiering",
        partnerTitle: "Partner i Sverige",
        partnerText:
          "Vi arbetar tillsammans med partner för projekt i Sverige och i regionen.",
        certTitle: "Certifierade svetsare och godkännanden",
        certText:
          "Vi arbetar med certifierade svetsare. Vi har praktisk erfarenhet av produktion och montage samt certifiering enligt europeiska krav.",
        certItems: [
          "TIG-svetsning",
          "MIG / MAG-svetsning",
          "MMA-svetsning",
          "certifierade svetsare",
          "europeiska certifieringsstandarder",
        ],
        heroPartner: "Partner i Sverige",
        heroCerts: "Certifierade svetsare",
        heroWelding: "TIG / MIG / MAG / MMA",
        heroStandards: "Europeiska standarder",
      };
    case "no":
      return {
        title: "Partnerskap og sertifisering",
        partnerTitle: "Partner i Sverige",
        partnerText:
          "Vi samarbeider med partnere om prosjekter i Sverige og i regionen.",
        certTitle: "Sertifiserte sveisere og godkjenninger",
        certText:
          "Vi arbeider med sertifiserte sveisere. Vi har praktisk erfaring fra produksjon og montasje samt sertifisering etter europeiske krav.",
        certItems: [
          "TIG-sveising",
          "MIG / MAG-sveising",
          "MMA-sveising",
          "sertifiserte sveisere",
          "europeiske sertifiseringsstandarder",
        ],
        heroPartner: "Partner i Sverige",
        heroCerts: "Sertifiserte sveisere",
        heroWelding: "TIG / MIG / MAG / MMA",
        heroStandards: "Europeiske standarder",
      };
    case "da":
      return {
        title: "Partnerskab og certificering",
        partnerTitle: "Partner i Sverige",
        partnerText:
          "Vi arbejder sammen med partnere på projekter i Sverige og i regionen.",
        certTitle: "Certificerede svejsere og godkendelser",
        certText:
          "Vi arbejder med certificerede svejsere. Vi har praktisk erfaring fra produktion og montage samt certificering efter europæiske krav.",
        certItems: [
          "TIG-svejsning",
          "MIG / MAG-svejsning",
          "MMA-svejsning",
          "certificerede svejsere",
          "europæiske certificeringsstandarder",
        ],
        heroPartner: "Partner i Sverige",
        heroCerts: "Certificerede svejsere",
        heroWelding: "TIG / MIG / MAG / MMA",
        heroStandards: "Europæiske standarder",
      };
    case "fi":
      return {
        title: "Kumppanuus ja sertifiointi",
        partnerTitle: "Yhteistyökumppani Ruotsissa",
        partnerText:
          "Teemme yhteistyötä kumppaneiden kanssa projekteissa Ruotsissa ja koko alueella.",
        certTitle: "Sertifioidut hitsaajat ja hyväksynnät",
        certText:
          "Työskentelemme sertifioitujen hitsaajien kanssa. Meillä on käytännön kokemusta tuotanto- ja asennustöistä sekä eurooppalaisten vaatimusten mukaisia pätevyyksiä.",
        certItems: [
          "TIG-hitsaus",
          "MIG / MAG -hitsaus",
          "MMA-hitsaus",
          "sertifioidut hitsaajat",
          "eurooppalaiset sertifiointistandardit",
        ],
        heroPartner: "Kumppani Ruotsissa",
        heroCerts: "Sertifioidut hitsaajat",
        heroWelding: "TIG / MIG / MAG / MMA",
        heroStandards: "Eurooppalaiset standardit",
      };
    case "et":
      return {
        title: "Partnerlus ja sertifitseerimine",
        partnerTitle: "Partner Rootsis",
        partnerText:
          "Teeme koostööd partneritega projektides Rootsis ja kogu piirkonnas.",
        certTitle: "Sertifitseeritud keevitajad ja load",
        certText:
          "Meil töötavad sertifitseeritud keevitajad. Olemas on praktiline kogemus tootmises ja paigalduses ning pädevused vastavalt Euroopa nõuetele.",
        certItems: [
          "TIG-keevitus",
          "MIG / MAG-keevitus",
          "MMA-keevitus",
          "sertifitseeritud keevitajad",
          "Euroopa sertifitseerimisstandardid",
        ],
        heroPartner: "Partner Rootsis",
        heroCerts: "Sertifitseeritud keevitajad",
        heroWelding: "TIG / MIG / MAG / MMA",
        heroStandards: "Euroopa standardid",
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
          "We work with certified welders. We have practical workshop and site experience together with certification according to European requirements.",
        certItems: [
          "TIG welding",
          "MIG / MAG welding",
          "MMA welding",
          "certified welders",
          "European certification standards",
        ],
        heroPartner: "Partner in Sweden",
        heroCerts: "Certified welders",
        heroWelding: "TIG / MIG / MAG / MMA",
        heroStandards: "European standards",
      };
  }
}

function getPartnerPitchUi(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        title: "Почему с AKWELD удобно работать",
        items: [
          {
            title: "Готовые бригады",
            text: "Свои сварщики с аттестацией, слесари и foreman, который говорит по-английски.",
          },
          {
            title: "Быстрый выезд",
            text: "Базируемся в Эстонии и готовы выехать на объект в течение 7–10 дней.",
          },
          {
            title: "Шведский налоговый номер",
            text: "У компании есть шведский налоговый номер для работы по проектам в Швеции.",
          },
          {
            title: "Работа по требованиям объекта",
            text: "Работаем по чертежам, требованиям площадки, технике безопасности и согласованным срокам.",
          },
        ],
      };
    case "sv":
      return {
        title: "Varför det är enkelt att arbeta med AKWELD",
        items: [
          {
            title: "Kompletta team",
            text: "Egna certifierade svetsare, montörer och en foreman som talar engelska.",
          },
          {
            title: "Snabb mobilisering",
            text: "Vi är baserade i Estland och kan mobilisera till site inom 7–10 dagar.",
          },
          {
            title: "Svenskt skattenummer",
            text: "Företaget har svenskt skattenummer för arbete i Sverige.",
          },
          {
            title: "Arbete enligt platskrav",
            text: "Vi arbetar enligt ritningar, sitekrav, säkerhetsregler och överenskomna tidsplaner.",
          },
        ],
      };
    case "no":
      return {
        title: "Hvorfor det er enkelt å jobbe med AKWELD",
        items: [
          {
            title: "Komplette team",
            text: "Egne sertifiserte sveisere, montører og en foreman som snakker engelsk.",
          },
          {
            title: "Rask mobilisering",
            text: "Vi er basert i Estland og kan mobilisere til prosjekt innen 7–10 dager.",
          },
          {
            title: "Svensk skattenummer",
            text: "Selskapet har svensk skattenummer for arbeid i Sverige.",
          },
          {
            title: "Arbeid etter sitekrav",
            text: "Vi arbeider etter tegninger, krav på stedet, sikkerhetsregler og avtalte tidsplaner.",
          },
        ],
      };
    case "da":
      return {
        title: "Hvorfor det er nemt at arbejde med AKWELD",
        items: [
          {
            title: "Komplette teams",
            text: "Egne certificerede svejsere, montører og en foreman, der taler engelsk.",
          },
          {
            title: "Hurtig mobilisering",
            text: "Vi er baseret i Estland og kan mobilisere til projektet inden for 7–10 dage.",
          },
          {
            title: "Svensk skattenummer",
            text: "Virksomheden har svensk skattenummer til arbejde i Sverige.",
          },
          {
            title: "Arbejde efter sitekrav",
            text: "Vi arbejder efter tegninger, sitekrav, sikkerhedsregler og aftalte tidsplaner.",
          },
        ],
      };
    case "fi":
      return {
        title: "Miksi AKWELDin kanssa on helppo työskennellä",
        items: [
          {
            title: "Valmiit tiimit",
            text: "Omat sertifioidut hitsaajat, asentajat ja foreman, joka puhuu englantia.",
          },
          {
            title: "Nopea mobilisointi",
            text: "Toimimme Virosta ja voimme lähteä kohteeseen 7–10 päivän sisällä.",
          },
          {
            title: "Ruotsalainen veronumero",
            text: "Yrityksellä on ruotsalainen veronumero työskentelyyn Ruotsissa.",
          },
          {
            title: "Työmaan vaatimusten mukaan",
            text: "Työskentelemme piirustusten, työmaavaatimusten, turvallisuussääntöjen ja sovittujen aikataulujen mukaan.",
          },
        ],
      };
    case "et":
      return {
        title: "Miks on AKWELDiga lihtne töötada",
        items: [
          {
            title: "Valmis meeskonnad",
            text: "Oma sertifitseeritud keevitajad, paigaldajad ja foreman, kes räägib inglise keelt.",
          },
          {
            title: "Kiire väljasõit",
            text: "Asume Eestis ja saame objektile liikuda 7–10 päeva jooksul.",
          },
          {
            title: "Rootsi maksunumber",
            text: "Ettevõttel on Rootsi maksunumber projektidel töötamiseks Rootsis.",
          },
          {
            title: "Töö objekti nõuete järgi",
            text: "Töötame jooniste, objekti nõuete, ohutusreeglite ja kokkulepitud tähtaegade järgi.",
          },
        ],
      };
    case "en":
    default:
      return {
        title: "Why AKWELD is easy to work with",
        items: [
          {
            title: "All-in-one teams",
            text: "Own certified welders, fitters and a foreman who speaks English.",
          },
          {
            title: "Fast mobilization",
            text: "Based in Estonia, ready to mobilize to site within 7–10 days.",
          },
          {
            title: "Swedish tax number",
            text: "The company has a Swedish tax number for work in Sweden.",
          },
          {
            title: "Compliance-focused work",
            text: "We work to drawings, site requirements, safety rules and agreed timelines.",
          },
        ],
      };
  }
}

export default function HomePageContent({ locale }: { locale: Locale }) {
  const t = getT(locale);
  const trust = getTrustUi(locale);
  const pitch = getPartnerPitchUi(locale);
  const HERO_BG = "/hero-bg.webp";

  const showHiringLink = locale === "ru" || locale === "en";

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
              <Link className="btn" href={`/${locale}/contact`}>
                {t.common.getQuote}
              </Link>

              <Link className="btnGhost" href={`/${locale}/services`}>
                {t.common.viewServices}
              </Link>

              {showHiringLink ? (
                <Link className="btnGhost" href={`/${locale}/careers`}>
                  {CAREERS_LABEL[locale as "ru" | "en"]}
                </Link>
              ) : null}

              <Link className="btnGhost" href={`/${locale}/partners`}>
                {PARTNERS_LABEL[locale]}
              </Link>
            </div>

            <div
              style={{
                marginTop: 18,
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 10,
                position: "relative",
              }}
            >
              {[trust.heroPartner, trust.heroCerts, trust.heroWelding, trust.heroStandards].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      border: "1px solid rgba(255,255,255,0.14)",
                      background: "rgba(0,0,0,0.24)",
                      borderRadius: 14,
                      padding: "12px 14px",
                      fontSize: 13,
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    {item}
                  </div>
                )
              )}
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
                  href={`/${locale}/services/${c.slug}`}
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
            {pitch.title}
          </h2>

          <div className="pitchGrid">
            {pitch.items.map((item) => (
              <div key={item.title} className="pitchCard">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
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
              href={`/${locale}/projects/${PROJECT_SLUGS[idx] ?? "project"}`}
              className="card"
              style={{ display: "block" }}
            >
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 14 }}>
          <Link className="btnGhost" href={`/${locale}/projects`}>
            {t.common.viewProjects}
          </Link>
        </div>
      </section>

      <style jsx>{`
        .pitchGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 14px;
        }

        .pitchCard {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 18px;
          padding: 18px;
        }

        .pitchCard h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.25;
        }

        .pitchCard p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
        }

        .trustGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 14px;
        }

        .trustPartner,
        .trustCerts {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 18px;
          padding: 18px;
        }

        .trustPartner {
          display: grid;
          grid-template-columns: 84px 1fr;
          gap: 14px;
          align-items: center;
        }

        .trustLogoWrap {
          width: 84px;
          height: 84px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .trustLogo {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .trustText h3,
        .trustCerts h3 {
          margin: 0;
          font-size: 18px;
          line-height: 1.25;
        }

        .trustText p,
        .trustCerts p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
        }

        .trustList {
          margin: 14px 0 0;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.86);
          line-height: 1.7;
        }

        @media (min-width: 900px) {
          .pitchGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .trustGrid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 18px;
          }
        }
      `}</style>
    </div>
  );
}