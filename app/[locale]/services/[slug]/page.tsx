import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_PHONE = "+372 5561 5108";
const CONTACT_EMAIL = "Akwelder87@gmail.com";

// Пока фон берём из существующего файла
const HERO_BG = "/work_custom_01.png";

// ВАЖНО: строго как в public/
const SERVICE_IMAGE_BY_SLUG: Record<string, string> = {
  fabrication: "/service_fabrication_01.png",
  installation: "/work_custom_01.png", // пока нет отдельного фото монтажа
  workforce: "/workforce_dino_team_01.png",
  repairs: "/work_repairs_01.png",
  capacity: "/work_custom_01.png", // пока нет work_capacity_01.png
  custom: "/work_custom_01.png",
};

export default function ServicePage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getT(params.locale);
  const card = t.services.cards.find((c) => c.slug === params.slug);
  if (!card) return notFound();

  const img = SERVICE_IMAGE_BY_SLUG[card.slug] ?? HERO_BG;

  return (
    <div className="container" style={{ paddingTop: 18, paddingBottom: 40 }}>
      <div style={{ marginBottom: 12 }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {params.locale === "ru" ? "На главную" : "Home"}
        </Link>
        <Link
          className="btnGhost"
          href={`/${params.locale}/services`}
          style={{ marginLeft: 10 }}
        >
          {params.locale === "ru" ? "Все услуги" : "All services"}
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
          alt={card.title}
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

      <h1 style={{ margin: "16px 0 6px", fontSize: 34 }}>{card.title}</h1>
      <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
        {card.text}
      </p>

      <h2 style={{ margin: "18px 0 8px", fontSize: 18 }}>
        {params.locale === "ru" ? "Что входит" : "What’s included"}
      </h2>

      <ul
        style={{
          margin: 0,
          paddingLeft: 18,
          color: "rgba(255,255,255,0.78)",
          lineHeight: 1.65,
        }}
      >
        {card.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

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
