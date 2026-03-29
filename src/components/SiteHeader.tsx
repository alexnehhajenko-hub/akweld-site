"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

type Locale = "en" | "sv" | "fi" | "no" | "da" | "ru" | "et";

const CTA_LABEL: Record<Locale, string> = {
  ru: "Запросить цену",
  en: "Get a quote",
  et: "Request a quote",
  sv: "Begär offert",
  fi: "Pyydä tarjous",
  no: "Be om tilbud",
  da: "Få et tilbud",
};

const NAV_LABELS: Record<
  Locale,
  {
    services: string;
    projects: string;
    photos: string;
    careers: string;
    partners: string;
  }
> = {
  ru: {
    services: "Услуги",
    projects: "Проекты",
    photos: "Фотографии",
    careers: "Работа",
    partners: "Партнёры",
  },
  en: {
    services: "Services",
    projects: "Projects",
    photos: "Photos",
    careers: "Careers",
    partners: "Partners",
  },
  et: {
    services: "Services",
    projects: "Projects",
    photos: "Photos",
    careers: "Careers",
    partners: "Partners",
  },
  sv: {
    services: "Services",
    projects: "Projects",
    photos: "Photos",
    careers: "Careers",
    partners: "Partners",
  },
  fi: {
    services: "Services",
    projects: "Projects",
    photos: "Photos",
    careers: "Careers",
    partners: "Partners",
  },
  no: {
    services: "Services",
    projects: "Projects",
    photos: "Photos",
    careers: "Careers",
    partners: "Partners",
  },
  da: {
    services: "Services",
    projects: "Projects",
    photos: "Photos",
    careers: "Careers",
    partners: "Partners",
  },
};

export default function SiteHeader({ locale }: { locale: Locale }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const update = () => setIsDesktop(mq.matches);
    update();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  const nav = NAV_LABELS[locale] ?? NAV_LABELS.en;
  const showHiringLinks = locale === "ru" || locale === "en";

  return (
    <header className="headerRow">
      <Link
        href={`/${locale}`}
        className="brand"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="brandText">
          <span className="brandName">AKWELD</span>
          <span className="brandTag">Steel fabrication · Installation · Workforce</span>
        </div>
      </Link>

      {isDesktop ? (
        <nav className="nav" aria-label="Main navigation">
          <Link href={`/${locale}/services`}>{nav.services}</Link>
          <Link href={`/${locale}/projects`}>{nav.projects}</Link>
          <Link href={`/${locale}/photos`}>{nav.photos}</Link>
          {showHiringLinks && <Link href={`/${locale}/careers`}>{nav.careers}</Link>}
          {showHiringLinks && <Link href={`/${locale}/partners`}>{nav.partners}</Link>}
        </nav>
      ) : (
        <div style={{ flex: 1 }} />
      )}

      <div
        className="headerRight"
        style={{
          marginLeft: "auto",
        }}
      >
        <LanguageSwitcher currentLocale={locale} />

        <Link href={`/${locale}/quote`} className="btn">
          {CTA_LABEL[locale]}
        </Link>
      </div>
    </header>
  );
}
