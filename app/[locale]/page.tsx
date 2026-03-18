import { notFound } from "next/navigation";
import HomePageContent from "@/src/components/HomePageContent";
import type { Locale } from "@/src/i18n";

const SUPPORTED_LOCALES: Locale[] = ["ru", "en", "et", "sv", "fi", "no", "da"];

export default function HomePage({ params }: { params: { locale: Locale } }) {
  if (!SUPPORTED_LOCALES.includes(params.locale)) {
    notFound();
  }

  return <HomePageContent locale={params.locale} />;
}