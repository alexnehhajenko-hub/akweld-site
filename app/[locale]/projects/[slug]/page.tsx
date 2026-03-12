import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";

function isRu(locale: Locale) {
  return locale === "ru";
}

export default function PartnersPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getT(params.locale);

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {isRu(params.locale) ? "На главную" : "Home"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {isRu(params.locale) ? "Услуги" : "Services"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {isRu(params.locale) ? "Проекты" : "Projects"}
        </Link>
      </div>

      <section className="heroCard" style={{ overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            minHeight: 360,
            borderRadius: 22,
            background: "#08111b",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(157,199,255,0.14) 1px, transparent 1px),
                linear-gradient(90deg, rgba(157,199,255,0.14) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(900px 420px at 20% 10%, rgba(255,196,0,0.08), transparent 55%), linear-gradient(180deg, rgba(5,10,16,0.08) 0%, rgba(5,10,16,0.26) 55%, rgba(6,10,16,0.92) 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "34px 24px 28px",
              maxWidth: 980,
            }}
          >
            <h1 className="heroTitle" style={{ maxWidth: "none", marginBottom: 14 }}>
              {t.partners.title}
            </h1>

            <p className="heroText" style={{ maxWidth: "none", marginBottom: 12 }}>
              {t.partners.lead}
            </p>

            <p
              style={{
                margin: "0 0 12px",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.75,
                fontSize: 18,
              }}
            >
              {t.partners.text1}
            </p>

            <div className="heroActions" style={{ marginTop: 18 }}>
              <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
                Email: {CONTACT_EMAIL}
              </a>
              <Link className="btn" href={`/${params.locale}/contact`}>
                {isRu(params.locale) ? "Связаться с нами" : "Contact us"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>
              {isRu(params.locale) ? "С кем хотим работать" : "Who we want to work with"}
            </h2>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              {t.partners.text2}
            </p>
          </div>

          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>
              {isRu(params.locale) ? "Что мы можем взять на себя" : "What we can take responsibility for"}
            </h2>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              {t.partners.text3}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {isRu(params.locale) ? "Наш партнёр в Швеции" : "Our partner in Sweden"}
          </h2>

          <div
            style={{
              marginTop: 14,
              padding: 18,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.92)",
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              {isRu(params.locale) ? "Название компании будет добавлено" : "Company name will be added"}
            </p>

            <p
              style={{
                marginTop: 12,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.75,
              }}
            >
              {isRu(params.locale)
                ? "Здесь разместим логотип, короткое описание компании и текст о сотрудничестве после того, как вы пришлёте точные данные."
                : "The logo, company description and cooperation text will be added here after you send the exact partner details."}
            </p>

            <p
              style={{
                marginTop: 10,
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.75,
              }}
            >
              {isRu(params.locale)
                ? "Можно добавить: логотип, название, сайт, направление работ и 2–4 строки о совместных проектах."
                : "We can add: logo, company name, website, field of work and 2–4 lines about joint projects."}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div
          className="heroCard"
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 className="sectionTitle" style={{ fontSize: 24 }}>
              {isRu(params.locale)
                ? "Открыты к сотрудничеству"
                : "Open to cooperation"}
            </h2>

            <p className="heroText" style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
              {t.partners.closing}
            </p>

            <div
              className="heroActions"
              style={{
                justifyContent: "center",
                width: "100%",
              }}
            >
              <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
                Email: {CONTACT_EMAIL}
              </a>
              <Link className="btn" href={`/${params.locale}/contact`}>
                {isRu(params.locale) ? "Отправить запрос" : "Send request"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}