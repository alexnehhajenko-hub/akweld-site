import type { ReactNode } from "react";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";

type Locale = "en" | "sv" | "fi" | "no" | "da" | "ru" | "et";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale;

  return (
    <>
      <div className="topbar">
        <div className="container">
          <SiteHeader locale={locale} />
        </div>
      </div>

      <main>{children}</main>

      <SiteFooter locale={locale} />
    </>
  );
}