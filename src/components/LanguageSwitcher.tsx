"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

type Locale = "en" | "sv" | "fi" | "no" | "da" | "ru" | "et";

const LOCALES: Locale[] = ["en", "ru", "et", "sv", "fi", "no", "da"];

const LABELS: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  et: "ET",
  sv: "SV",
  fi: "FI",
  no: "NO",
  da: "DA",
};

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname() || "/";

  const restPath = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length > 0 && LOCALES.includes(parts[0] as Locale)) {
      parts.shift();
    }
    const tail = parts.join("/");
    return tail ? `/${tail}` : "";
  }, [pathname]);

  function go(nextLocale: Locale) {
    const search = typeof window !== "undefined" ? window.location.search : "";
    window.location.href = `/${nextLocale}${restPath}${search}`;
  }

  return (
    <div className="lang" aria-label="Language">
      <select
        className="langSelect"
        value={currentLocale}
        onChange={(e) => go(e.target.value as Locale)}
        aria-label="Language"
      >
        {LOCALES.map((lc) => (
          <option key={lc} value={lc}>
            {LABELS[lc]}
          </option>
        ))}
      </select>

      <style jsx>{`
        .lang {
          display: inline-flex;
          align-items: center;
        }

        .langSelect {
          -webkit-appearance: none;
          appearance: none;

          height: 40px;
          min-width: 72px;

          padding: 0 34px 0 12px;
          border-radius: 999px;

          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(11, 15, 20, 0.92);

          color: rgba(255, 255, 255, 0.92);
          font-weight: 800;
          letter-spacing: 0.6px;

          outline: none;
          cursor: pointer;

          /* arrow */
          background-image: linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.8) 50%),
            linear-gradient(135deg, rgba(255,255,255,0.8) 50%, transparent 50%);
          background-position: calc(100% - 16px) 16px, calc(100% - 11px) 16px;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
        }

        .langSelect:hover {
          border-color: rgba(255, 255, 255, 0.28);
          background-color: rgba(11, 15, 20, 0.96);
        }

        .langSelect:focus-visible {
          box-shadow: 0 0 0 3px rgba(255, 196, 0, 0.22);
          border-color: rgba(255, 196, 0, 0.55);
        }
      `}</style>
    </div>
  );
}