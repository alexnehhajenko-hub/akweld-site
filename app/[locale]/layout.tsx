import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";

type Locale = "en" | "sv" | "fi" | "no" | "da" | "ru" | "et";

function getLocaleMetadata(locale: Locale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "AKWELD",
        description:
          "Металлоконструкции, изготовление, монтаж и поддержка рабочей силой для промышленных проектов.",
      };
    case "sv":
      return {
        title: "AKWELD",
        description:
          "Stålkonstruktioner, tillverkning, montage och arbetskraftsstöd för industriprojekt.",
      };
    default:
      return {
        title: "AKWELD",
        description:
          "Steel structures, fabrication, installation and workforce support for industrial projects.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getLocaleMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <div className="topbar">
        <div className="container">
          <SiteHeader locale={locale} />
        </div>
      </div>

      <main>{children}</main>

      <SiteFooter locale={locale} />
    </>
  );
}
