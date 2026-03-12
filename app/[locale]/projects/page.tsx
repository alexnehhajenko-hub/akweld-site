import Link from "next/link";
import Image from "next/image";
import { getT, type Locale } from "@/src/i18n";

const PROJECT_SLUGS = [
  "industrial-platforms",
  "staircases-railings",
  "steel-frames",
  "supports-brackets",
  "repair-works",
  "workforce-projects",
];

const PROJECT_GALLERY = [
  {
    src: "/project_industrial_platforms_01.png",
    altRu: "Промышленная площадка",
    altEn: "Industrial platform",
  },
  {
    src: "/project_staircases_railings_01.png",
    altRu: "Лестницы и ограждения",
    altEn: "Stairs and railings",
  },
  {
    src: "/project_steel_frames_01.png",
    altRu: "Металлокаркас",
    altEn: "Steel frame",
  },
  {
    src: "/project_supports_brackets_01.png",
    altRu: "Опоры и кронштейны",
    altEn: "Supports and brackets",
  },
  {
    src: "/work_repairs_01.png",
    altRu: "Ремонтные работы",
    altEn: "Repair works",
  },
];

function isRu(locale: Locale) {
  return locale === "ru";
}

export default function ProjectsPage({ params }: { params: { locale: Locale } }) {
  const t = getT(params.locale);
  const ru = isRu(params.locale);

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {ru ? "На главную" : "Home"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {ru ? "Услуги" : "Services"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/contact`}>
          {ru ? "Контакты" : "Contact"}
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
            {ru ? "Запросить цену" : "Get a quote"}
          </Link>
          <Link className="btnGhost" href={`/${params.locale}/services`}>
            {ru ? "Посмотреть услуги" : "View services"}
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
            {ru ? "Фотографии работ" : "Work photos"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {ru
              ? "Ниже показаны примеры работ по металлоконструкциям, монтажу, изготовлению и ремонту. Позже здесь можно добавить больше фотографий по каждому направлению отдельно."
              : "Below are examples of steelwork, installation, fabrication and repair projects. Later, more photos can be added for each direction separately."}
          </p>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {PROJECT_GALLERY.map((item) => (
              <div
                key={item.src}
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "#0a1017",
                }}
              >
                <Image
                  src={item.src}
                  alt={ru ? item.altRu : item.altEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ru ? "Описание проектов" : "Project overview"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {ru
              ? "На этой странице собраны проекты по изготовлению, сборке, ремонту и монтажу металлоконструкций. Здесь можно посмотреть примеры промышленных площадок, лестниц и ограждений, каркасов, опор, ремонтных работ и проектов с подключением сварщиков, слесарей и монтажных бригад."
              : "This page brings together projects related to steel fabrication, assembly, repair and installation. Here you can review examples of industrial platforms, stairs and railings, frames, supports, repair works and projects completed with welders, fitters and installation crews."}
          </p>

          <p style={{ marginTop: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.80)" }}>
            {ru
              ? "Если вам нужен похожий объём работ, вы можете открыть нужный проект, посмотреть краткое описание и затем отправить нам запрос по своей задаче. Постепенно эта страница будет дополняться новыми примерами и фотографиями выполненных работ."
              : "If you need similar work, you can open the relevant project, review the short description and then send us your request. Over time, this page can be expanded with more examples and photos of completed work."}
          </p>
        </div>
      </section>
    </div>
  );
}