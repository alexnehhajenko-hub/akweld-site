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

  return (
    <header
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      {/* СЛЕВА: пусто (держим место, чтобы справа не прыгало) */}
      <div style={{ minWidth: 90 }} />

      {/* ЦЕНТР: пусто */}
      {isDesktop ? <div style={{ flex: 1 }} /> : <div style={{ flex: 1 }} />}

      {/* СПРАВА: язык + кнопка */}
      <div
        className="actions"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          justifyContent: "flex-end",
          minWidth: 200,
        }}
      >
        <LanguageSwitcher currentLocale={locale} />

        <Link href={`/${locale}/quote`} className="cta">
          {CTA_LABEL[locale]}
        </Link>
      </div>
    </header>
  );
}