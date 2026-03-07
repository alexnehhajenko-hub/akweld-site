import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_PHONE = "+372 5561 5108";
const CONTACT_EMAIL = "Akwelder87@gmail.com";

// Динозавры уже .png (маленькими)
const PROJECT_IMAGE_BY_SLUG: Record<string, string> = {
  "industrial-platforms": "/work_custom_01.jpg.PNG",
  "staircases-railings": "/work_repairs_01.jpg.PNG",
  "steel-frames": "/workforce_dino_team_01.png",
  "supports-brackets": "/workforce_dino_electrodes_01.png",
  "repair-works": "/work_repairs_01.jpg.PNG",
  "workforce-projects": "/workforce_dino_team_01.png",
};

export default function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getT(params.locale);

  const idx = projectIndexBySlug(params.slug);
  if (idx === -1) return notFound();

  const p = t.projects.items[idx];
  const img = PROJECT_IMAGE_BY_SLUG[params.slug] ?? "/hero-bg.jpg.PNG";

  return (
    <div className="container" style={{ paddingTop: 18, paddingBottom: 40 }}>
      <div style={{ marginBottom: 12 }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {params.locale === "ru" ? "На главную" : "Home"}
        </Link>{" "}
        <Link className="btnGhost" href={`/${params.locale}/projects`} style={{ marginLeft: 10 }}>
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
        <Image src={img} alt={p.title} fill style={{ objectFit: "cover" }} priority />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.70) 85%)",
          }}
        />
      </div>

      <h1 style={{ margin: "16px 0 6px", fontSize: 34 }}>{p.title}</h1>
      <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
        {p.text}
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

function projectIndexBySlug(slug: string) {
  const slugs = [
    "industrial-platforms",
    "staircases-railings",
    "steel-frames",
    "supports-brackets",
    "repair-works",
    "workforce-projects",
  ];
  return slugs.indexOf(slug);
}
