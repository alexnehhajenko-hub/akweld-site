import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";
const CONTACT_PHONE = "+372 5561 5108";

function isRu(locale: Locale) {
  return locale === "ru";
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);

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
              <a className="btnGhost" href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}>
                {isRu(params.locale) ? "Позвонить" : "Call"}: {CONTACT_PHONE}
              </a>
            </div>

            {/* Placeholder form (no JS handlers in Server Component) */}
            <form className="form" action="#" method="post">
              <input className="input" name="name" placeholder={t.contact.formName} />
              <input className="input" name="phone" placeholder={t.contact.formPhone} />
              <input className="input" name="email" placeholder={t.contact.formEmail} />
              <textarea className="textarea" name="message" placeholder={t.contact.formMessage} />

              <button className="btn" type="submit">
                {t.contact.formSend}
              </button>

              <div className="small">{t.contact.formHint}</div>
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
