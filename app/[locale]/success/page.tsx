import Link from "next/link";
import { type Locale } from "@/src/i18n";

function getUi(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        title: "Заявка отправлена",
        lead:
          "Спасибо. Мы получили ваш запрос и свяжемся с вами после проверки информации.",
        note:
          "Если вы прикрепляли файлы, ссылки на них были добавлены в письмо. Обычно мы отвечаем в рабочее время.",
        home: "На главную",
        services: "Услуги",
        projects: "Проекты",
        contact: "Контакты",
      };
    case "sv":
      return {
        title: "Förfrågan skickad",
        lead:
          "Tack. Vi har tagit emot din förfrågan och återkommer efter att ha granskat informationen.",
        note:
          "Om du bifogade filer lades länkar till dem till i mailet. Vi svarar vanligtvis under arbetstid.",
        home: "Hem",
        services: "Tjänster",
        projects: "Projekt",
        contact: "Kontakt",
      };
    case "no":
      return {
        title: "Forespørsel sendt",
        lead:
          "Takk. Vi har mottatt forespørselen din og kommer tilbake etter å ha gjennomgått informasjonen.",
        note:
          "Hvis du la ved filer, ble lenker til dem lagt inn i e-posten. Vi svarer vanligvis i arbeidstiden.",
        home: "Hjem",
        services: "Tjenester",
        projects: "Prosjekter",
        contact: "Kontakt",
      };
    case "da":
      return {
        title: "Forespørgsel sendt",
        lead:
          "Tak. Vi har modtaget din forespørgsel og vender tilbage efter at have gennemgået oplysningerne.",
        note:
          "Hvis du vedhæftede filer, blev links til dem tilføjet til emailen. Vi svarer normalt i arbejdstiden.",
        home: "Hjem",
        services: "Ydelser",
        projects: "Projekter",
        contact: "Kontakt",
      };
    case "fi":
      return {
        title: "Pyyntö lähetetty",
        lead:
          "Kiitos. Olemme vastaanottaneet pyyntösi ja palaamme asiaan tarkistettuamme tiedot.",
        note:
          "Jos liitit tiedostoja, niiden linkit lisättiin sähköpostiin. Vastaamme yleensä työaikana.",
        home: "Etusivu",
        services: "Palvelut",
        projects: "Projektit",
        contact: "Yhteys",
      };
    case "et":
      return {
        title: "Päring on saadetud",
        lead:
          "Aitäh. Saime teie päringu kätte ja võtame pärast andmete ülevaatamist ühendust.",
        note:
          "Kui lisasite faile, lisati nende lingid kirjale. Tavaliselt vastame tööajal.",
        home: "Avaleht",
        services: "Teenused",
        projects: "Projektid",
        contact: "Kontakt",
      };
    case "en":
    default:
      return {
        title: "Request sent",
        lead:
          "Thank you. We have received your request and will get back to you after reviewing the information.",
        note:
          "If you attached files, links to them were added to the email. We usually reply during working hours.",
        home: "Home",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
      };
  }
}

export default function SuccessPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const ui = getUi(params.locale);

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {ui.home}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {ui.services}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {ui.projects}
        </Link>
      </div>

      <section className="heroCard">
        <h1 className="heroTitle" style={{ maxWidth: "none" }}>
          {ui.title}
        </h1>

        <p className="heroText" style={{ maxWidth: "none" }}>
          {ui.lead}
        </p>

        <p
          style={{
            marginTop: 16,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          {ui.note}
        </p>

        <div className="heroActions" style={{ marginTop: 18 }}>
          <Link className="btn" href={`/${params.locale}`}>
            {ui.home}
          </Link>
          <Link className="btnGhost" href={`/${params.locale}/contact`}>
            {ui.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
