import type { Metadata } from "next";
import type { Locale } from "@/src/i18n";

const BASE_URL = "https://www.akweldsteel.com";

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

function getProjectsMeta(locale: Locale) {
  if (locale === "ru") {
    return {
      title: "Проекты металлоконструкций и сварочных работ | AKWELD",
      description:
        "Примеры проектов AKWELD: металлоконструкции, промышленные площадки, лестницы, ограждения, монтаж, ремонтные работы и поддержка рабочей силой.",
    };
  }

  return {
    title: "Steel Structure and Welding Projects | AKWELD",
    description:
      "AKWELD project examples: steel structures, industrial platforms, staircases, railings, installation, repair works and workforce support.",
  };
}

export function generateMetadata({ params }: Props): Metadata {
  const meta = getProjectsMeta(params.locale);
  const canonical = `${BASE_URL}/${params.locale}/projects`;

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/projects`,
        ru: `${BASE_URL}/ru/projects`,
        "x-default": `${BASE_URL}/en/projects`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "AKWELD",
      type: "website",
    },
  };
}

export default function ProjectsLayout({ children }: Props) {
  return children;
}
