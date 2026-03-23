import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareersPageClient from "./CareersPageClient";
import { type Locale } from "@/src/i18n";

const SUPPORTED = ["ru", "en"] as const;
type CareersLocale = (typeof SUPPORTED)[number];

function isSupportedLocale(locale: Locale): locale is CareersLocale {
  return locale === "ru" || locale === "en";
}

function getCareersMetadata(locale: CareersLocale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "Вакансии сварщиков и слесарей",
        description:
          "AKWELD ищет сварщиков, слесарей, монтажников металлоконструкций и трубопровода для проектов в Эстонии и Швеции. Отправьте анкету онлайн.",
      };
    case "en":
    default:
      return {
        title: "Careers for Welders and Fitters",
        description:
          "AKWELD is hiring welders, fitters, steel structure installers and pipe installers for projects in Estonia and Sweden. Apply online.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {
      title: "Careers",
      description: "AKWELD careers and job applications.",
    };
  }

  return getCareersMetadata(locale);
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) return notFound();

  return <CareersPageClient locale={locale} />;
}
