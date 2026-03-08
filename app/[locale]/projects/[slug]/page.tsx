import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_PHONE = "+372 5561 5108";
const CONTACT_EMAIL = "Akwelder87@gmail.com";

const HERO_BG = "/work_custom_01.png";

// Маппинг по slug страницы проекта (SEO slug), независим от языка
const PROJECT_IMAGE_BY_SLUG: Record<string, string> = {
  "industrial-platforms": "/work_custom_01.png",
  "staircases-railings": "/work_repairs_01.png",
  "steel-frames": "/workforce_dino_team_01.png",
  "supports-brackets": "/workforce_dino_electrodes_01.png",
  "repair-works": "/work_repairs_01.png",
  "workforce-projects": "/workforce_dino_team_01.png",
};

export default function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getT(params.locale);

  const project = t.projects.items.find((p) => {
    // страницы у нас фикс-слугами, а items в i18n просто список.
    // Тут мы показываем страницу по slug без привязки к title.
    return true;
  });

  if (!project) return notFound();

  const img = PROJECT_IMAGE_BY_SLUG[params.slug] ?? HERO_BG;

  // Заголовок/описание берём из текущего языка по индексу slug
  const SLUG_ORDER = [
    "industrial-platforms",
    "staircases-railings",
    "steel-frames",
    "supports-brackets",
    "repair-works",
    "workforce-projects",
  ];
  const idx = Math.max(0, SLUG_ORDER.indexOf(params.slug));
  const safeItem = t.projects.items[idx] ?? t.projects.items[0];

  return (
    <div className="container" style={{ paddingTop: 18, paddingBottom: 40 }}>
      <div style={{ marginBottom: 12 }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {params.locale === "ru" ? "На главную" : "Home"}
        </Link>
        <Link
          className="btnGhost"
          href={`/${params.locale}/projects`}
          style={{ marginLeft: 10 }}
        >
          {params.locale === "ru" ? "Все проекты" : "All projects"}
        </Link>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 260,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.14)",
        }}
      >
        <Image
          src={img}
          alt={safeItem.title}
          fill
          sizes="(max-width: 900px) 100vw, 980px"
          style={{ objectFit: "cover" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.70) 85%)",
          }}
        />
      </div>

      <h1 style={{ margin: "16px 0 6px", fontSize: 34 }}>{safeItem.title}</h1>
      <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
        {safeItem.text}
      </p>

      <h2 style={{ margin: "18px 0 8px", fontSize: 18 }}>
        {params.locale === "ru" ? "Описание работ" : "Work description"}
      </h2>

      <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.65 }}>
        {params.locale === "ru"
          ? "Добавим сюда подробности: объём, материалы, сроки, процесс монтажа/сборки, требования по безопасности, фото до/после, результаты."
          : "We’ll add details here: scope, materials, timelines, installation steps, safety requirements, before/after photos, results."}
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a className="btn" href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}>
          {params.locale === "ru" ? "Позвонить" : "Call"}: {CONTACT_PHONE}
        </a>
        <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
          Email: {CONTACT_EMAIL}
        </a>
        <Link className="btnGhost" href={`/${params.locale}/contact`}>
          {params.locale === "ru" ? "Запросить цену" : "Get a quote"}
        </Link>
      </div>
    </div>
  );
}
