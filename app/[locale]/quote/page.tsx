import type { Metadata } from "next";
import QuoteCalculatorForm from "../../../src/components/QuoteCalculatorForm";
import { type Locale } from "@/src/i18n";

function getQuoteMetadata(locale: Locale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "Запрос цены",
        description:
          "Запросите цену у AKWELD на изготовление металлоконструкций, монтаж, сварочные работы и поддержку рабочей силой.",
      };
    case "sv":
      return {
        title: "Begär offert",
        description:
          "Begär offert från AKWELD för stålkonstruktioner, montage, svetsarbeten och arbetskraftsstöd.",
      };
    default:
      return {
        title: "Request a Quote",
        description:
          "Request a quote from AKWELD for steel structures, fabrication, installation, welding services and workforce support.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getQuoteMetadata(locale);
}

export default function QuotePage() {
  return <QuoteCalculatorForm />;
}
