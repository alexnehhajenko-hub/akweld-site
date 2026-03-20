import HomePageContent from "@/src/components/HomePageContent";
import { type Locale } from "@/src/i18n";

export default function LocaleHomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  return <HomePageContent locale={params.locale} />;
}