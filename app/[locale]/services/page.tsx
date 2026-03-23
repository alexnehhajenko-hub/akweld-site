import type { Metadata } from "next";
import Link from "next/link";
import { getT, type Locale } from "@/src/i18n";

function getServicesMetadata(locale: Locale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "Услуги по металлоконструкциям и монтажу",
        description:
          "Услуги AKWELD: изготовление металлоконструкций, монтаж, сварочные работы и поддержка рабочей силой для промышленных проектов.",
      };
    case "sv":
      return {
        title: "Tjänster inom stålkonstruktioner och montage",
        description:
          "AKWELD erbjuder tillverkning av stålkonstruktioner, montage, svetsarbeten och arbetskraftsstöd för industriprojekt.",
      };
    default:
      return {
        title: "Steel Fabrication, Installation and Workforce Services",
        description:
          "Explore AKWELD services: steel fabrication, installation, welding and workforce support for industrial and construction projects.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getServicesMetadata(locale);
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getT(locale);

  return (
    <div className="container">
      <section className="section">
        <h1 className="heroTitle" style={{ fontSize: 30, marginBottom: 10 }}>
          {t.services.title}
        </h1>
        <p className="heroText">{t.services.lead}</p>

        <div className="section" style={{ paddingTop: 14 }}>
          <div className="cards">
            {t.services.cards.map((c) => (
              <Link
                key={c.slug}
                href={`/${locale}/services/${c.slug}`}
                className="card"
                style={{ display: "block" }}
              >
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Link>
            ))}
          </div>
        </div>

        <p className="small">{t.services.note}</p>
      </section>
    </div>
  );
}
