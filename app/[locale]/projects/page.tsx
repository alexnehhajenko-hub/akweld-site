"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  const [openedImage, setOpenedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);

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
            {PROJECT_GALLERY.map((item) => {
              const alt = ru ? item.altRu : item.altEn;

              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setOpenedImage({ src: item.src, alt })}
                  aria-label={alt}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3",
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "#0a1017",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {openedImage ? (
        <div
          onClick={() => setOpenedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1200,
            }}
          >
            <button
              type="button"
              onClick={() => setOpenedImage(null)}
              aria-label={ru ? "Закрыть" : "Close"}
              style={{
                position: "absolute",
                top: -8,
                right: -8,
                zIndex: 2,
                width: 44,
                height: 44,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(9,13,18,0.95)",
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 10",
                borderRadius: 18,
                overflow: "hidden",
                background: "#0a1017",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Image
                src={openedImage.src}
                alt={openedImage.alt}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}