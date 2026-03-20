"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Locale = "en" | "sv" | "fi" | "no" | "da" | "ru" | "et";

const LOCALES: Locale[] = ["en", "ru", "et", "sv", "fi", "no", "da"];
const CAREERS_LOCALES: Locale[] = ["en", "ru"];

const FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  ru: "🇷🇺",
  et: "🇪🇪",
  sv: "🇸🇪",
  fi: "🇫🇮",
  no: "🇳🇴",
  da: "🇩🇰",
};

const NAMES: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  et: "Eesti",
  sv: "Svenska",
  fi: "Suomi",
  no: "Norsk",
  da: "Dansk",
};

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const pathInfo = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    let currentPathLocale: Locale | null = null;

    if (parts.length > 0 && LOCALES.includes(parts[0] as Locale)) {
      currentPathLocale = parts[0] as Locale;
      parts.shift();
    }

    const tail = parts.join("/");
    const restPath = tail ? `/${tail}` : "";
    const firstSegment = parts[0] || "";

    return {
      currentPathLocale,
      restPath,
      firstSegment,
    };
  }, [pathname]);

  const availableLocales = useMemo(() => {
    if (pathInfo.firstSegment === "careers") {
      return CAREERS_LOCALES;
    }
    return LOCALES;
  }, [pathInfo.firstSegment]);

  function go(nextLocale: Locale) {
    const search = typeof window !== "undefined" ? window.location.search : "";
    window.location.href = `/${nextLocale}${pathInfo.restPath}${search}`;
  }

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const safeCurrentLocale = availableLocales.includes(currentLocale)
    ? currentLocale
    : availableLocales[0];

  return (
    <div className="lang" aria-label="Language switcher" ref={wrapRef}>
      <button
        type="button"
        className="langButton"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="flag" aria-hidden="true">
          {FLAGS[safeCurrentLocale]}
        </span>
      </button>

      {open ? (
        <div className="langModal" role="dialog" aria-label="Choose language">
          <div className="langModalTitle">Language</div>

          <div className="langList">
            {availableLocales.map((lc) => (
              <button
                key={lc}
                type="button"
                className={`langItem ${lc === safeCurrentLocale ? "active" : ""}`}
                onClick={() => go(lc)}
                aria-label={NAMES[lc]}
              >
                <span className="langItemLeft">
                  <span className="flag" aria-hidden="true">
                    {FLAGS[lc]}
                  </span>
                  <span>{NAMES[lc]}</span>
                </span>
                {lc === safeCurrentLocale ? <span className="check">•</span> : null}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <style jsx>{`
        .lang {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .langButton {
          height: 40px;
          min-width: 56px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(11, 15, 20, 0.92);
          color: rgba(255, 255, 255, 0.92);
          outline: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .langButton:hover {
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(11, 15, 20, 0.96);
        }

        .langButton:focus-visible {
          box-shadow: 0 0 0 3px rgba(255, 196, 0, 0.22);
          border-color: rgba(255, 196, 0, 0.55);
        }

        .langModal {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          z-index: 50;
          width: 220px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(11, 15, 20, 0.98);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          padding: 12px;
          backdrop-filter: blur(8px);
        }

        .langModalTitle {
          padding: 6px 8px 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
        }

        .langList {
          display: grid;
          gap: 6px;
        }

        .langItem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.92);
          border-radius: 12px;
          padding: 12px 12px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          text-align: left;
        }

        .langItem:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.06);
        }

        .langItem.active {
          border-color: rgba(255, 196, 0, 0.35);
          background: rgba(255, 196, 0, 0.08);
        }

        .langItemLeft {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .flag {
          font-size: 18px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .check {
          color: rgba(255, 196, 0, 0.92);
          font-size: 18px;
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
