import type { Metadata } from "next";
import type { Locale } from "@/src/i18n";

const BASE_URL = "https://www.akweldsteel.com";

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

function getContactMeta(locale: Locale) {
  if (locale === "ru") {
    return {
      title: "Контакты и запрос цены | AKWELD",
      description:
        "Свяжитесь с AKWELD для расчёта металлоконструкций, сварочных работ, монтажа и поддержки рабочей силой в Эстонии, Швеции и Скандинавии.",
    };
  }

  return {
    title: "Contact and Project Request | AKWELD",
    description:
      "Contact AKWELD for steel fabrication, welding, installation, project estimates and workforce support across Estonia, Sweden and Scandinavia.",
  };
}

export function generateMetadata({ params }: Props): Metadata {
  const meta = getContactMeta(params.locale);
  const canonical = `${BASE_URL}/${params.locale}/contact`;

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
        en: `${BASE_URL}/en/contact`,
        ru: `${BASE_URL}/ru/contact`,
        "x-default": `${BASE_URL}/en/contact`,
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

export default function ContactLayout({ children }: Props) {
  return children;
}
