import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

type Locale = "en" | "sv" | "fi" | "no" | "da" | "ru";

export default function SiteHeader({ locale }: { locale: Locale }) {
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
      {/* СЛЕВА: только эмблема */}
      <Link
        href={`/${locale}`}
        aria-label="AKWELD"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image
          src="/akweld-emblem.png.PNG"
          alt="AKWELD"
          width={72}
          height={72}
          className="brandLogo"
          priority
          style={{
            width: "clamp(44px, 5vw, 72px)",
            height: "clamp(44px, 5vw, 72px)",
          }}
        />
      </Link>

      {/* СПРАВА: язык + кнопка */}
      <div
        className="actions"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <LanguageSwitcher currentLocale={locale} />

        <Link href={`/${locale}/quote`} className="cta">
          {locale === "ru" ? "Запросить цену" : "Get a quote"}
        </Link>
      </div>
    </header>
  );
}