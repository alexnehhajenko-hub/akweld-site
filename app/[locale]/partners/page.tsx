import type { Metadata } from "next";
import PartnersPageClient from "./PartnersPageClient";
import { type Locale } from "@/src/i18n";

function getPartnersMetadata(locale: Locale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "Партнёры и сотрудничество",
        description:
          "Сотрудничество с AKWELD: поддержка проектов, рабочая сила, металлоконструкции, монтаж и партнёрские запросы для работы в Прибалтике и Скандинавии.",
      };
    case "sv":
      return {
        title: "Partners och samarbete",
        description:
          "Samarbeta med AKWELD inom projektstöd, arbetskraft, stålkonstruktioner, montage och partnerförfrågningar i Baltikum och Skandinavien.",
      };
    default:
      return {
        title: "Partners and Cooperation",
        description:
          "Work with AKWELD on project support, workforce, steel structures, installation and partnership requests across the Baltics and Scandinavia.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPartnersMetadata(locale);
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <PartnersPageClient locale={locale} />;
}
