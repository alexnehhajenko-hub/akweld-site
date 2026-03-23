import type { Metadata } from "next";
import HomePageContent from "@/src/components/HomePageContent";
import { type Locale } from "@/src/i18n";

function getHomeMetadata(locale: Locale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "Металлоконструкции, монтаж и сварочные работы",
        description:
          "AKWELD выполняет изготовление металлоконструкций, монтаж, сварочные работы и поддержку рабочей силой для проектов в Прибалтике и Скандинавии.",
      };
    case "sv":
      return {
        title: "Stålkonstruktioner, montage och svetsarbeten",
        description:
          "AKWELD erbjuder stålkonstruktioner, montage, svetsarbeten och arbetskraftsstöd för projekt i Baltikum och Skandinavien.",
      };
    default:
      return {
        title: "Steel Structures, Installation and Welding Services",
        description:
          "AKWELD provides steel structures, fabrication, installation, welding services and workforce support for projects in the Baltics and Scandinavia.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getHomeMetadata(locale);
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <HomePageContent locale={locale} />;
}
