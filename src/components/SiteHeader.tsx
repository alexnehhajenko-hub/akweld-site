"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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
      // Safari fallback
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  const centerText = useMemo(() => {
    // ВАЖНО: скажи какой точный текст нужен — сейчас поставил безопасный плейсхолдер
    return "AKWELD";
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
      {/* СЛЕВА: эмблема */}
      <Link
        href={`/${locale}`}
        aria-label="AKWELD"
        style={{ display: "flex", alignItems: "center", minWidth: 90 }}
      >
        <Image
          src="/akweld-emblem.png.PNG"
          alt="AKWELD"
          width={160}
          height={56}
          priority
          className="brandLogo"
          sizes="(min-width: 900px) 160px, 90px"
          style={{
            width: "clamp(90px, 10vw, 160px)",
            height: "clamp(44px, 4vw, 56px)",
            objectFit: "contain",
          }}
        />
      </Link>

      {/* ЦЕНТР: только на ПК */}
      {isDesktop ? (
        <div
          className="headerCenter"
          style={{
            flex: 1,
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: "0.02em",
            fontSize: 18,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: "0 12px",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {centerText}
        </div>
      ) : (
        <div style={{ flex: 1 }} />
      )}

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