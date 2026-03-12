import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";
const PARTNER_NAME = "SK Licenssvets Frölunda AB";
const PARTNER_SITE = "https://www.sklicenssvets.se/en/";

function isRu(locale: Locale) {
  return locale === "ru";
}

function getUi(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        home: "На главную",
        services: "Услуги",
        projects: "Проекты",
        contactUs: "Связаться с нами",
        whoWeWorkWith: "С кем хотим работать",
        whatWeCanHandle: "Что мы можем взять на себя",
        partnerInSweden: "Наш партнёр в Швеции",
        partnerSite: "Сайт партнёра",
        openToCoop: "Открыты к сотрудничеству",
        sendRequest: "Отправить запрос",
      };
    case "sv":
      return {
        home: "Hem",
        services: "Tjänster",
        projects: "Projekt",
        contactUs: "Kontakta oss",
        whoWeWorkWith: "Vilka vi vill arbeta med",
        whatWeCanHandle: "Vad vi kan ta ansvar för",
        partnerInSweden: "Vår partner i Sverige",
        partnerSite: "Partnerns webbplats",
        openToCoop: "Öppna för samarbete",
        sendRequest: "Skicka förfrågan",
      };
    case "no":
      return {
        home: "Hjem",
        services: "Tjenester",
        projects: "Prosjekter",
        contactUs: "Kontakt oss",
        whoWeWorkWith: "Hvem vi ønsker å jobbe med",
        whatWeCanHandle: "Hva vi kan ta ansvar for",
        partnerInSweden: "Vår partner i Sverige",
        partnerSite: "Partnerens nettside",
        openToCoop: "Åpne for samarbeid",
        sendRequest: "Send forespørsel",
      };
    case "da":
      return {
        home: "Hjem",
        services: "Ydelser",
        projects: "Projekter",
        contactUs: "Kontakt os",
        whoWeWorkWith: "Hvem vi ønsker at arbejde med",
        whatWeCanHandle: "Hvad vi kan tage ansvar for",
        partnerInSweden: "Vores partner i Sverige",
        partnerSite: "Partnerens website",
        openToCoop: "Åbne for samarbejde",
        sendRequest: "Send forespørgsel",
      };
    case "fi":
      return {
        home: "Etusivu",
        services: "Palvelut",
        projects: "Projektit",
        contactUs: "Ota yhteyttä",
        whoWeWorkWith: "Keiden kanssa haluamme työskennellä",
        whatWeCanHandle: "Mitä voimme ottaa vastuullemme",
        partnerInSweden: "Yhteistyökumppanimme Ruotsissa",
        partnerSite: "Kumppanin sivusto",
        openToCoop: "Avoinna yhteistyölle",
        sendRequest: "Lähetä pyyntö",
      };
    case "en":
    default:
      return {
        home: "Home",
        services: "Services",
        projects: "Projects",
        contactUs: "Contact us",
        whoWeWorkWith: "Who we want to work with",
        whatWeCanHandle: "What we can take responsibility for",
        partnerInSweden: "Our partner in Sweden",
        partnerSite: "Partner website",
        openToCoop: "Open to cooperation",
        sendRequest: "Send request",
      };
  }
}

function getPartnerText(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        intro:
          "Наш партнёр в Швеции — SK Licenssvets Frölunda AB. Компания работает в сфере сварочных, монтажных, производственных, ремонтных и сервисных работ.",
        body:
          "Среди направлений — промышленные трубопроводы, энергетика и тепло, охлаждение, нефтехимия, водоснабжение, готовые модули и металлоконструкции.",
      };
    case "sv":
      return {
        intro:
          "Vår partner i Sverige är SK Licenssvets Frölunda AB. Företaget arbetar med svetsning, montage, produktion, reparation och service.",
        body:
          "Deras områden omfattar industrirör, energi och värme, kylsystem, petrokemi, vatten och avlopp, färdiga moduler och stålkonstruktioner.",
      };
    case "no":
      return {
        intro:
          "Vår partner i Sverige er SK Licenssvets Frölunda AB. Selskapet arbeider med sveising, montering, produksjon, reparasjon og service.",
        body:
          "Områdene deres omfatter industrielle rørsystemer, energi og varme, kjøling, petrokjemi, vann og avløp, prefabrikkerte moduler og stålkonstruksjoner.",
      };
    case "da":
      return {
        intro:
          "Vores partner i Sverige er SK Licenssvets Frölunda AB. Virksomheden arbejder med svejsning, montage, produktion, reparation og service.",
        body:
          "Deres områder omfatter industrielle rørsystemer, energi og varme, køling, petrokemi, vand og afløb, præfabrikerede moduler og stålkonstruktioner.",
      };
    case "fi":
      return {
        intro:
          "Yhteistyökumppanimme Ruotsissa on SK Licenssvets Frölunda AB. Yritys toimii hitsaus-, asennus-, tuotanto-, korjaus- ja huoltotöissä.",
        body:
          "Heidän osaamisalueisiinsa kuuluvat teollisuusputkistot, energia ja lämpö, jäähdytys, petrokemia, vesi- ja viemärijärjestelmät, valmiit moduulit ja teräsrakenteet.",
      };
    case "en":
    default:
      return {
        intro:
          "Our partner in Sweden is SK Licenssvets Frölunda AB. The company works in welding, installation, manufacturing, repair and maintenance.",
        body:
          "Their areas include industrial piping, power and heat, cooling, petrochemistry, water and sewer systems, prefab modules and steel constructions.",
      };
  }
}

export default function PartnersPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getT(params.locale);
  const ui = getUi(params.locale);
  const partner = getPartnerText(params.locale);

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {ui.home}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {ui.services}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {ui.projects}
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
                {ui.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>{ui.whoWeWorkWith}</h2>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              {t.partners.text2}
            </p>
          </div>

          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>{ui.whatWeCanHandle}</h2>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              {t.partners.text3}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ui.partnerInSweden}
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
                color: "rgba(255,255,255,0.96)",
                fontWeight: 800,
                fontSize: 22,
                lineHeight: 1.3,
              }}
            >
              {PARTNER_NAME}
            </p>

            <p
              style={{
                marginTop: 12,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.75,
              }}
            >
              {partner.intro}
            </p>

            <p
              style={{
                marginTop: 10,
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.75,
              }}
            >
              {partner.body}
            </p>

            <div className="heroActions" style={{ marginTop: 16 }}>
              <a
                className="btnGhost"
                href={PARTNER_SITE}
                target="_blank"
                rel="noreferrer"
              >
                {ui.partnerSite}
              </a>
            </div>
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
              {ui.openToCoop}
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
                {ui.sendRequest}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}