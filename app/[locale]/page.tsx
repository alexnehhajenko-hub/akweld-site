// app/[locale]/page.tsx
import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);

  // ФОН главной (как у тебя в public на скрине)
  const HERO_BG = "/hero-bg.jpg.PNG";

  return (
    <div className="container">
      <section className="hero">
        {/* фоновая картинка на главной */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(1.05) saturate(1.05)",
            opacity: 0.35,
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
              "radial-gradient(1200px 700px at 20% 10%, rgba(255,196,0,0.12), transparent 60%), linear-gradient(180deg, rgba(11,15,20,0.65) 0%, rgba(7,10,14,0.92) 100%)",
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

            {/* УСЛУГИ: теперь это ссылки на SEO-страницы */}
            <div className="cards">
              {t.services.cards.slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  className="card"
                  href={`/${params.locale}/services/${c.slug}`}
                  style={{ display: "block" }}
                >
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </Link>
              ))}
            </div>

            <p className="small" style={{ marginTop: 12, position: "relative" }}>
              {t.home.complianceNote}
            </p>
          </div>
        </div>
      </section>

      {/* ПРОЕКТЫ: тоже ссылки на SEO-страницы */}
      <section className="section">
        <h2 className="sectionTitle">{t.home.projectsTitle}</h2>
        <div className="cards">
          {t.projects.items.slice(0, 6).map((p, idx) => (
            <Link
              key={p.title}
              className="card"
              href={`/${params.locale}/projects/${projectSlugByIndex(idx)}`}
              style={{ display: "block" }}
            >
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Link>
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

function projectSlugByIndex(idx: number) {
  const slugs = [
    "industrial-platforms",
    "staircases-railings",
    "steel-frames",
    "supports-brackets",
    "repair-works",
    "workforce-projects",
  ];
  return slugs[idx] ?? "project";
}