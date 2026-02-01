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
      {/* СЛЕВА: только эмблема (больше и шире) */}
      <Link
        href={`/${locale}`}
        aria-label="AKWELD"
        style={{ display: "flex", alignItems: "center" }}
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