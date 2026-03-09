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

function isRu(locale: Locale) {
  return locale === "ru";
}

export default function ProjectsPage({ params }: { params: { locale: Locale } }) {
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
        <Link className="btnGhost" href={`/${params.locale}/contact`}>
          {isRu(params.locale) ? "Контакты" : "Contact"}
        </Link>
      </div>

      <section className="heroCard">
        <h1 className="heroTitle" style={{ maxWidth: "none" }}>
          {t.projects.title}
        </h1>

        <p className="heroText" style={{ maxWidth: "none" }}>
          {t.projects.lead}
        </p>

        <div className="heroActions">
          <Link className="btn" href={`/${params.locale}/contact`}>
            {isRu(params.locale) ? "Запросить цену" : "Get a quote"}
          </Link>
          <Link className="btnGhost" href={`/${params.locale}/services`}>
            {isRu(params.locale) ? "Посмотреть услуги" : "View services"}
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          {t.projects.items.map((p, idx) => (
            <Link
              key={p.title}
              href={`/${params.locale}/projects/${PROJECT_SLUGS[idx] ?? "industrial-platforms"}`}
              className="card"
              style={{ display: "block" }}
            >
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {isRu(params.locale) ? "Проекты по металлоконструкциям" : "Steel structure projects"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {isRu(params.locale)
              ? "На этой странице собраны проекты по изготовлению, сборке, ремонту и монтажу металлоконструкций. Здесь будут примеры промышленных площадок, лестниц и перил, каркасов, опор, ремонтных работ и проектов с привлечением сварщиков, слесарей и монтажников."
              : "This page collects projects related to fabrication, assembly, repair and installation of steel structures. Here you will find examples of industrial platforms, stairs and railings, steel frames, supports, repair works and projects completed with welders, fitters and installation crews."}
          </p>

          <p style={{ marginTop: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.80)" }}>
            {isRu(params.locale)
              ? "Для SEO и для клиента важно, чтобы список проектов был отдельной страницей с понятными переходами на каждую работу. Так пользователь может перейти в нужный проект, посмотреть описание, фото, объём работ и сразу связаться с нами по похожей задаче."
              : "For SEO and for real clients, it is important that the project list exists as a separate page with clear links to each case. This allows a visitor to open the relevant project, review photos and scope, and contact us about similar work."}
          </p>
        </div>
      </section>
    </div>
  );
}
