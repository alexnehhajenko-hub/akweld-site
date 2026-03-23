import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";
import { type Locale } from "@/src/i18n";

function getProjectsMetadata(locale: Locale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "Проекты по металлоконструкциям и монтажу",
        description:
          "Примеры проектов AKWELD: металлоконструкции, монтаж, изготовление, ремонтные работы и промышленная поддержка для объектов в Прибалтике и Скандинавии.",
      };
    case "sv":
      return {
        title: "Projekt inom stålkonstruktioner och montage",
        description:
          "Se exempel på AKWELD-projekt inom stålkonstruktioner, montage, tillverkning, reparationsarbeten och industriellt stöd i Baltikum och Skandinavien.",
      };
    default:
      return {
        title: "Steel Structure and Installation Projects",
        description:
          "See AKWELD project examples in steel structures, installation, fabrication, repair works and industrial support across the Baltics and Scandinavia.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getProjectsMetadata(locale);
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ProjectsPageClient locale={locale} />;
}
