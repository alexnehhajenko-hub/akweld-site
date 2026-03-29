"use client";

import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/src/i18n";

const WORK_PHOTOS = [
  {
    src: "/project_industrial_platforms_01.webp",
    titleRu: "Промышленная площадка",
    titleEn: "Industrial platform",
  },
  {
    src: "/project_staircases_railings_01.webp",
    titleRu: "Лестницы и ограждения",
    titleEn: "Stairs and railings",
  },
  {
    src: "/project_steel_frames_01.webp",
    titleRu: "Металлокаркас",
    titleEn: "Steel frame",
  },
  {
    src: "/project_supports_brackets_01.webp",
    titleRu: "Опоры и кронштейны",
    titleEn: "Supports and brackets",
  },
  {
    src: "/work_platform_site_01.webp",
    titleRu: "Монтаж на объекте",
    titleEn: "Site installation",
  },
  {
    src: "/work_repairs_01.webp",
    titleRu: "Ремонтные работы",
    titleEn: "Repair works",
  },
];

const TEAM_PHOTOS = [
  "/team-worker-01.jpg",
  "/team-worker-02.jpg",
  "/team-worker-03.jpg",
  "/team-worker-04.jpg",
  "/team-worker-05.jpg",
  "/team-worker-06.jpg",
];

function isRu(locale: Locale) {
  return locale === "ru";
}

export default function PhotosPage({ params }: { params: { locale: Locale } }) {
  const ru = isRu(params.locale);

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {ru ? "На главную" : "Home"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {ru ? "Проекты" : "Projects"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/contact`}>
          {ru ? "Контакты" : "Contact"}
        </Link>
      </div>

      <section className="heroCard">
        <h1 className="heroTitle" style={{ maxWidth: "none" }}>
          {ru ? "Фотографии" : "Photos"}
        </h1>

        <p className="heroText" style={{ maxWidth: "none" }}>
          {ru
            ? "Здесь собраны фотографии наших работ и команды. Позже можно будет добавлять новые объекты, сотрудников и отдельные альбомы."
            : "Here you can see photos of our work and team. Later, more projects, employees and separate galleries can be added."}
        </p>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ru ? "Наши работы" : "Our work"}
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {WORK_PHOTOS.map((item) => {
              const title = ru ? item.titleRu : item.titleEn;

              return (
                <div
                  key={item.src}
                  className="card"
                  style={{ padding: 0, overflow: "hidden" }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4 / 3",
                      background: "#0a1017",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ padding: 14 }}>
                    <div style={{ fontWeight: 700 }}>{title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ru ? "Наша команда" : "Our team"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {ru
              ? "Ниже подготовлены места под фотографии сотрудников. Когда добавишь реальные фото в папку public, они сразу начнут отображаться."
              : "Below are prepared slots for employee photos. Once you add real files into the public folder, they will appear here immediately."}
          </p>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {TEAM_PHOTOS.map((src, index) => (
              <div
                key={src}
                className="card"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 5",
                    background: "#0a1017",
                  }}
                >
                  <Image
                    src={src}
                    alt={ru ? `Работник ${index + 1}` : `Worker ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: 14 }}>
                  <div style={{ fontWeight: 700 }}>
                    {ru ? `Работник ${index + 1}` : `Worker ${index + 1}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
