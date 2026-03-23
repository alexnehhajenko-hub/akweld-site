import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { type Locale } from "@/src/i18n";

function getContactMetadata(locale: Locale): Metadata {
  switch (locale) {
    case "ru":
      return {
        title: "Контакты и запрос цены",
        description:
          "Свяжитесь с AKWELD по вопросам металлоконструкций, монтажа, сварочных работ и поддержки рабочей силой. Отправьте запрос и файлы через форму.",
      };
    case "sv":
      return {
        title: "Kontakt och offertförfrågan",
        description:
          "Kontakta AKWELD om stålkonstruktioner, montage, svetsarbeten och arbetskraftsstöd. Skicka förfrågan och filer via formuläret.",
      };
    default:
      return {
        title: "Contact and Quote Request",
        description:
          "Contact AKWELD about steel structures, installation, welding services and workforce support. Send your request and files through the form.",
      };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getContactMetadata(locale);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ContactPageClient locale={locale} />;
}
