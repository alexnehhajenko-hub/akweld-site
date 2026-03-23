"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";
const PARTNER_NAME = "SK Licenssvets Frölunda AB";
const MAX_FILES = 5;
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  location: string;
  partnershipType: string;
  services: string;
  message: string;
};

const initialForm: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  location: "",
  partnershipType: "",
  services: "",
  message: "",
};

function getUi(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        home: "На главную",
        services: "Услуги",
        projects: "Проекты",
        contactUs: "Связаться с нами",
        whoWeWorkWith: "С кем хотим работать",
        whatWeCanHandle: "Что мы можем взять на себя",
        partnerInSweden: "Наш партнёр в Швеции",
        openToCoop: "Открыты к сотрудничеству",
        formTitle: "Заявка на партнёрство",
        formLead:
          "Если вы хотите сотрудничать с AKWELD, заполните форму ниже и при необходимости прикрепите презентацию, сертификаты, примеры работ или документы.",
        companyName: "Название компании",
        contactName: "Контактное лицо",
        email: "Email",
        phone: "Телефон / WhatsApp",
        location: "Страна / город",
        partnershipType: "Тип сотрудничества",
        servicesOffered: "Что вы предлагаете / чем занимаетесь",
        message: "Комментарий / сообщение",
        files: `Прикрепите PDF, фото, документы (до ${MAX_FILES} файлов, до ${MAX_FILE_SIZE_MB} MB каждый)`,
        sendRequest: "Отправить заявку",
        required: "Заполните название компании, контактное лицо, email и сообщение.",
        note:
          "Форма отправляет заявку на email info@akweldsteel.com. Если есть файлы, в письмо добавляются ссылки на них.",
        badType:
          "Недопустимый тип файла. Разрешены PDF, JPG, PNG, WEBP, DOC, DOCX.",
        tooManyFiles: `Можно прикрепить максимум ${MAX_FILES} файлов.`,
        tooBig: `Файл слишком большой. Максимум ${MAX_FILE_SIZE_MB} MB на файл.`,
      };
    case "sv":
      return {
        home: "Hem",
        services: "Tjänster",
        projects: "Projekt",
        contactUs: "Kontakta oss",
        whoWeWorkWith: "Vilka vi vill arbeta med",
        whatWeCanHandle: "Vad vi kan ta ansvar för",
        partnerInSweden: "Vår partner i Sverige",
        openToCoop: "Öppna för samarbete",
        formTitle: "Partnerskapsförfrågan",
        formLead:
          "Om du vill samarbeta med AKWELD, fyll i formuläret nedan och bifoga vid behov presentation, certifikat, referenser eller dokument.",
        companyName: "Företagsnamn",
        contactName: "Kontaktperson",
        email: "Email",
        phone: "Telefon / WhatsApp",
        location: "Land / stad",
        partnershipType: "Typ av samarbete",
        servicesOffered: "Vad erbjuder ni / vad arbetar ni med",
        message: "Kommentar / meddelande",
        files: `Bifoga PDF, bilder, dokument (upp till ${MAX_FILES} filer, upp till ${MAX_FILE_SIZE_MB} MB per fil)`,
        sendRequest: "Skicka förfrågan",
        required: "Fyll i företagsnamn, kontaktperson, email och meddelande.",
        note:
          "Formuläret skickar förfrågan till info@akweldsteel.com. Om filer bifogas läggs länkar till dem i mailet.",
        badType:
          "Ogiltig filtyp. Tillåtna format: PDF, JPG, PNG, WEBP, DOC, DOCX.",
        tooManyFiles: `Du kan bifoga högst ${MAX_FILES} filer.`,
        tooBig: `Filen är för stor. Max ${MAX_FILE_SIZE_MB} MB per fil.`,
      };
    case "no":
      return {
        home: "Hjem",
        services: "Tjenester",
        projects: "Prosjekter",
        contactUs: "Kontakt oss",
        whoWeWorkWith: "Hvem vi ønsker å jobbe med",
        whatWeCanHandle: "Hva vi kan ta ansvar for",
        partnerInSweden: "Vår partner i Sverige",
        openToCoop: "Åpne for samarbeid",
        formTitle: "Partnerskapsforespørsel",
        formLead:
          "Hvis du ønsker samarbeid med AKWELD, fyll ut skjemaet nedenfor og legg ved presentasjon, sertifikater, referanser eller dokumenter ved behov.",
        companyName: "Firmanavn",
        contactName: "Kontaktperson",
        email: "Email",
        phone: "Telefon / WhatsApp",
        location: "Land / by",
        partnershipType: "Type samarbeid",
        servicesOffered: "Hva tilbyr dere / hva jobber dere med",
        message: "Kommentar / melding",
        files: `Legg ved PDF, bilder, dokumenter (opptil ${MAX_FILES} filer, opptil ${MAX_FILE_SIZE_MB} MB per fil)`,
        sendRequest: "Send forespørsel",
        required: "Fyll inn firmanavn, kontaktperson, email og melding.",
        note:
          "Skjemaet sender forespørselen til info@akweldsteel.com. Hvis filer er vedlagt, legges lenker til dem i e-posten.",
        badType:
          "Ugyldig filtype. Tillatt: PDF, JPG, PNG, WEBP, DOC, DOCX.",
        tooManyFiles: `Du kan legge ved maks ${MAX_FILES} filer.`,
        tooBig: `Filen er for stor. Maks ${MAX_FILE_SIZE_MB} MB per fil.`,
      };
    case "da":
      return {
        home: "Hjem",
        services: "Ydelser",
        projects: "Projekter",
        contactUs: "Kontakt os",
        whoWeWorkWith: "Hvem vi ønsker at arbejde med",
        whatWeCanHandle: "Hvad vi kan tage ansvar for",
        partnerInSweden: "Vores partner i Sverige",
        openToCoop: "Åbne for samarbejde",
        formTitle: "Partnerskabsanmodning",
        formLead:
          "Hvis du vil samarbejde med AKWELD, udfyld formularen nedenfor og vedhæft om nødvendigt præsentation, certifikater, referencer eller dokumenter.",
        companyName: "Firmanavn",
        contactName: "Kontaktperson",
        email: "Email",
        phone: "Telefon / WhatsApp",
        location: "Land / by",
        partnershipType: "Type samarbejde",
        servicesOffered: "Hvad tilbyder I / hvad arbejder I med",
        message: "Kommentar / besked",
        files: `Vedhæft PDF, billeder, dokumenter (op til ${MAX_FILES} filer, op til ${MAX_FILE_SIZE_MB} MB hver)`,
        sendRequest: "Send forespørgsel",
        required: "Udfyld firmanavn, kontaktperson, email og besked.",
        note:
          "Formularen sender forespørgslen til info@akweldsteel.com. Hvis filer vedhæftes, tilføjes links til dem i emailen.",
        badType:
          "Ugyldig filtype. Tilladt: PDF, JPG, PNG, WEBP, DOC, DOCX.",
        tooManyFiles: `Du kan vedhæfte højst ${MAX_FILES} filer.`,
        tooBig: `Filen er for stor. Maks ${MAX_FILE_SIZE_MB} MB pr. fil.`,
      };
    case "fi":
      return {
        home: "Etusivu",
        services: "Palvelut",
        projects: "Projektit",
        contactUs: "Ota yhteyttä",
        whoWeWorkWith: "Keiden kanssa haluamme työskennellä",
        whatWeCanHandle: "Mitä voimme ottaa vastuullemme",
        partnerInSweden: "Yhteistyökumppanimme Ruotsissa",
        openToCoop: "Avoinna yhteistyölle",
        formTitle: "Yhteistyöpyyntö",
        formLead:
          "Jos haluat tehdä yhteistyötä AKWELDin kanssa, täytä alla oleva lomake ja liitä tarvittaessa esittely, sertifikaatit, referenssit tai muut dokumentit.",
        companyName: "Yrityksen nimi",
        contactName: "Yhteyshenkilö",
        email: "Email",
        phone: "Puhelin / WhatsApp",
        location: "Maa / kaupunki",
        partnershipType: "Yhteistyön tyyppi",
        servicesOffered: "Mitä tarjoatte / mitä teette",
        message: "Kommentti / viesti",
        files: `Liitä PDF, kuvat, dokumentit (enintään ${MAX_FILES} tiedostoa, enintään ${MAX_FILE_SIZE_MB} MB per tiedosto)`,
        sendRequest: "Lähetä pyyntö",
        required: "Täytä yrityksen nimi, yhteyshenkilö, email ja viesti.",
        note:
          "Lomake lähettää pyynnön osoitteeseen info@akweldsteel.com. Jos tiedostoja liitetään, niiden linkit lisätään sähköpostiin.",
        badType:
          "Virheellinen tiedostotyyppi. Sallitut: PDF, JPG, PNG, WEBP, DOC, DOCX.",
        tooManyFiles: `Voit liittää enintään ${MAX_FILES} tiedostoa.`,
        tooBig: `Tiedosto on liian suuri. Enintään ${MAX_FILE_SIZE_MB} MB per tiedosto.`,
      };
    case "et":
      return {
        home: "Avaleht",
        services: "Teenused",
        projects: "Projektid",
        contactUs: "Võtke ühendust",
        whoWeWorkWith: "Kellega tahame koostööd teha",
        whatWeCanHandle: "Mille eest saame vastutada",
        partnerInSweden: "Meie partner Rootsis",
        openToCoop: "Avatud koostööle",
        formTitle: "Partnerluse päring",
        formLead:
          "Kui soovite teha koostööd AKWELDiga, täitke allolev vorm ja lisage vajadusel esitlus, sertifikaadid, referentsid või dokumendid.",
        companyName: "Ettevõtte nimi",
        contactName: "Kontaktisik",
        email: "Email",
        phone: "Telefon / WhatsApp",
        location: "Riik / linn",
        partnershipType: "Koostöö tüüp",
        servicesOffered: "Mida pakute / millega tegelete",
        message: "Kommentaar / sõnum",
        files: `Lisage PDF, pildid, dokumendid (kuni ${MAX_FILES} faili, kuni ${MAX_FILE_SIZE_MB} MB iga fail)`,
        sendRequest: "Saada päring",
        required: "Täitke ettevõtte nimi, kontaktisik, email ja sõnum.",
        note:
          "Vorm saadab päringu aadressile info@akweldsteel.com. Kui failid on lisatud, lisatakse kirjale nende lingid.",
        badType:
          "Lubamatu failitüüp. Lubatud: PDF, JPG, PNG, WEBP, DOC, DOCX.",
        tooManyFiles: `Saate lisada kuni ${MAX_FILES} faili.`,
        tooBig: `Fail on liiga suur. Maksimaalselt ${MAX_FILE_SIZE_MB} MB faili kohta.`,
      };
    case "en":
    default:
      return {
        home: "Home",
        services: "Services",
        projects: "Projects",
        contactUs: "Contact us",
        whoWeWorkWith: "Who we want to work with",
        whatWeCanHandle: "What we can take responsibility for",
        partnerInSweden: "Our partner in Sweden",
        openToCoop: "Open to cooperation",
        formTitle: "Partnership request",
        formLead:
          "If you want to cooperate with AKWELD, fill in the form below and attach your presentation, certificates, references or documents if needed.",
        companyName: "Company name",
        contactName: "Contact person",
        email: "Email",
        phone: "Phone / WhatsApp",
        location: "Country / city",
        partnershipType: "Type of partnership",
        servicesOffered: "What you offer / what you do",
        message: "Comment / message",
        files: `Attach PDF, images, documents (up to ${MAX_FILES} files, up to ${MAX_FILE_SIZE_MB} MB each)`,
        sendRequest: "Send request",
        required: "Please fill in company name, contact person, email and message.",
        note:
          "This form sends the request to info@akweldsteel.com. If files are attached, links to them are added to the email.",
        badType:
          "Unsupported file type. Allowed: PDF, JPG, PNG, WEBP, DOC, DOCX.",
        tooManyFiles: `You can attach up to ${MAX_FILES} files.`,
        tooBig: `File is too large. Maximum ${MAX_FILE_SIZE_MB} MB per file.`,
      };
  }
}

function getPartnerText(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        intro:
          "Наш партнёр в Швеции — SK Licenssvets Frölunda AB. Компания работает в сфере сварочных, монтажных, производственных, ремонтных и сервисных работ.",
        body:
          "Среди направлений — промышленные трубопроводы, энергетика и тепло, охлаждение, нефтехимия, водоснабжение, готовые модули и металлоконструкции.",
      };
    case "sv":
      return {
        intro:
          "Vår partner i Sverige är SK Licenssvets Frölunda AB. Företaget arbetar med svetsning, montage, produktion, reparation och service.",
        body:
          "Deras områden omfattar industrirör, energi och värme, kylsystem, petrokemi, vatten och avlopp, färdiga moduler och stålkonstruktioner.",
      };
    case "no":
      return {
        intro:
          "Vår partner i Sverige er SK Licenssvets Frölunda AB. Selskapet arbeider med sveising, montering, produksjon, reparasjon og service.",
        body:
          "Områdene deres omfatter industrielle rørsystemer, energi og varme, kjøling, petrokjemi, vann og avløp, prefabrikkerte moduler og stålkonstruksjoner.",
      };
    case "da":
      return {
        intro:
          "Vores partner i Sverige er SK Licenssvets Frölunda AB. Virksomheden arbejder med svejsning, montage, produktion, reparation og service.",
        body:
          "Deres områder omfatter industrielle rørsystemer, energi og varme, køling, petrokemi, vand og afløb, præfabrikerede moduler og stålkonstruktioner.",
      };
    case "fi":
      return {
        intro:
          "Yhteistyökumppanimme Ruotsissa on SK Licenssvets Frölunda AB. Yritys toimii hitsaus-, asennus-, tuotanto-, korjaus- ja huoltotöissä.",
        body:
          "Heidän osaamisalueisiinsa kuuluvat teollisuusputkistot, energia ja lämpö, jäähdytys, petrokemia, vesi- ja viemärijärjestelmät, valmiit moduulit ja teräsrakenteet.",
      };
    case "et":
      return {
        intro:
          "Meie partner Rootsis on SK Licenssvets Frölunda AB. Ettevõte tegutseb keevituse, paigalduse, tootmise, remondi ja hoolduse valdkonnas.",
        body:
          "Nende tegevus hõlmab tööstuslikke torustikke, energiat ja soojust, jahutust, naftakeemiat, vee- ja kanalisatsioonisüsteeme, valmismooduleid ja teraskonstruktsioone.",
      };
    case "en":
    default:
      return {
        intro:
          "Our partner in Sweden is SK Licenssvets Frölunda AB. The company works in welding, installation, manufacturing, repair and maintenance.",
        body:
          "Their areas include industrial piping, power and heat, cooling, petrochemistry, water and sewer systems, prefab modules and steel constructions.",
      };
  }
}

function formatFileSize(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default function PartnersPageClient({ locale }: { locale: Locale }) {
  const t = getT(locale);
  const ui = getUi(locale);
  const partner = getPartnerText(locale);
  const router = useRouter();

  const [form, setForm] = useState<FormState>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const fileListText = useMemo(() => {
    if (!files.length) return "";
    return files.map((file) => `${file.name} (${formatFileSize(file.size)})`).join("\n");
  }, [files]);

  function validateFiles(selectedFiles: File[]) {
    if (selectedFiles.length > MAX_FILES) {
      return ui.tooManyFiles;
    }

    for (const file of selectedFiles) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return ui.badType;
      }
      if (file.size > MAX_FILE_SIZE_BYTES) {
        return ui.tooBig;
      }
    }

    return null;
  }

  function handleFilesChange(nextFiles: File[]) {
    const error = validateFiles(nextFiles);

    if (error) {
      setFiles([]);
      setStatus({
        ok: false,
        text: error,
      });
      return;
    }

    setFiles(nextFiles);
    setStatus(null);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSending) return;

    setStatus(null);

    if (
      !form.companyName.trim() ||
      !form.contactName.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        ok: false,
        text: ui.required,
      });
      return;
    }

    const filesError = validateFiles(files);
    if (filesError) {
      setStatus({
        ok: false,
        text: filesError,
      });
      return;
    }

    setIsSending(true);

    try {
      const body = new FormData();
      body.append("locale", locale);
      body.append("companyName", form.companyName.trim());
      body.append("contactName", form.contactName.trim());
      body.append("email", form.email.trim());
      body.append("phone", form.phone.trim());
      body.append("location", form.location.trim());
      body.append("partnershipType", form.partnershipType.trim());
      body.append("services", form.services.trim());
      body.append("message", form.message.trim());

      for (const file of files) {
        body.append("files", file, file.name);
      }

      const res = await fetch("/api/partners", {
        method: "POST",
        body,
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setForm(initialForm);
      setFiles([]);
      router.push(`/${locale}/success`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Request failed";
      setStatus({
        ok: false,
        text: `${ui.contactUs}: ${message}`,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${locale}`}>
          ← {ui.home}
        </Link>
        <Link className="btnGhost" href={`/${locale}/services`}>
          {ui.services}
        </Link>
        <Link className="btnGhost" href={`/${locale}/projects`}>
          {ui.projects}
        </Link>
      </div>

      <section className="heroCard" style={{ overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            minHeight: 360,
            borderRadius: 22,
            background: "#08111b",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(157,199,255,0.14) 1px, transparent 1px),
                linear-gradient(90deg, rgba(157,199,255,0.14) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(900px 420px at 20% 10%, rgba(255,196,0,0.08), transparent 55%), linear-gradient(180deg, rgba(5,10,16,0.08) 0%, rgba(5,10,16,0.26) 55%, rgba(6,10,16,0.92) 100%)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "34px 24px 28px",
              maxWidth: 980,
            }}
          >
            <h1 className="heroTitle" style={{ maxWidth: "none", marginBottom: 14 }}>
              {t.partners.title}
            </h1>

            <p className="heroText" style={{ maxWidth: "none", marginBottom: 12 }}>
              {t.partners.lead}
            </p>

            <p
              style={{
                margin: "0 0 12px",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.75,
                fontSize: 18,
              }}
            >
              {t.partners.text1}
            </p>

            <div className="heroActions" style={{ marginTop: 18 }}>
              <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
                Email: {CONTACT_EMAIL}
              </a>
              <a className="btn" href="#partner-request-form">
                {ui.sendRequest}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>{ui.whoWeWorkWith}</h2>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              {t.partners.text2}
            </p>
          </div>

          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>{ui.whatWeCanHandle}</h2>
            <p style={{ marginTop: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
              {t.partners.text3}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ui.partnerInSweden}
          </h2>

          <div
            style={{
              marginTop: 14,
              padding: 18,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.96)",
                fontWeight: 800,
                fontSize: 22,
                lineHeight: 1.3,
              }}
            >
              {PARTNER_NAME}
            </p>

            <p
              style={{
                marginTop: 12,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.75,
              }}
            >
              {partner.intro}
            </p>

            <p
              style={{
                marginTop: 10,
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.75,
              }}
            >
              {partner.body}
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="partner-request-form">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ui.formTitle}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {ui.formLead}
          </p>

          <form className="form" onSubmit={onSubmit} style={{ marginTop: 16 }}>
            <input
              className="input"
              value={form.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              placeholder={ui.companyName}
            />

            <input
              className="input"
              value={form.contactName}
              onChange={(e) => updateField("contactName", e.target.value)}
              placeholder={ui.contactName}
            />

            <input
              className="input"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder={ui.email}
              autoComplete="email"
            />

            <input
              className="input"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder={ui.phone}
              autoComplete="tel"
            />

            <input
              className="input"
              value={form.location}
              onChange={(e) => updateField("location", e.target.value)}
              placeholder={ui.location}
            />

            <input
              className="input"
              value={form.partnershipType}
              onChange={(e) => updateField("partnershipType", e.target.value)}
              placeholder={ui.partnershipType}
            />

            <textarea
              className="textarea"
              value={form.services}
              onChange={(e) => updateField("services", e.target.value)}
              placeholder={ui.servicesOffered}
            />

            <textarea
              className="textarea"
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder={ui.message}
            />

            <label className="small" style={{ marginTop: 4 }}>
              {ui.files}
            </label>

            <input
              className="input"
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
              onChange={(e) => handleFilesChange(Array.from(e.target.files || []))}
            />

            {files.length > 0 ? (
              <textarea
                className="textarea"
                readOnly
                value={fileListText}
                style={{ minHeight: 110 }}
              />
            ) : null}

            <button className="btn" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : ui.sendRequest}
            </button>

            <div className="small">{ui.note}</div>

            {status ? (
              <div
                className="small"
                style={{
                  color: status.ok ? "rgba(255,255,255,0.92)" : "#ffb4b4",
                  marginTop: 4,
                  whiteSpace: "pre-wrap",
                }}
              >
                {status.text}
              </div>
            ) : null}
          </form>
        </div>
      </section>

      <section className="section">
        <div
          className="heroCard"
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 className="sectionTitle" style={{ fontSize: 24 }}>
              {ui.openToCoop}
            </h2>

            <p className="heroText" style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
              {t.partners.closing}
            </p>

            <div
              className="heroActions"
              style={{
                justifyContent: "center",
                width: "100%",
              }}
            >
              <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
                Email: {CONTACT_EMAIL}
              </a>
              <a className="btn" href="#partner-request-form">
                {ui.sendRequest}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
