import Link from "next/link";
import { type Locale } from "@/src/i18n";

const TITLE: Record<Locale, string> = {
  en: "We are looking for welders and fitters",
  sv: "We are looking for welders and fitters",
  fi: "We are looking for welders and fitters",
  da: "We are looking for welders and fitters",
  no: "We are looking for welders and fitters",
  ru: "Ищем сварщиков и слесарей",
};

const LEAD: Record<Locale, string> = {
  en: "We are looking for welders, fitters and metal structure workers for projects in Estonia and Sweden. Fill in the short form below and tell us about your experience.",
  sv: "We are looking for welders, fitters and metal structure workers for projects in Estonia and Sweden. Fill in the short form below and tell us about your experience.",
  fi: "We are looking for welders, fitters and metal structure workers for projects in Estonia and Sweden. Fill in the short form below and tell us about your experience.",
  da: "We are looking for welders, fitters and metal structure workers for projects in Estonia and Sweden. Fill in the short form below and tell us about your experience.",
  no: "We are looking for welders, fitters and metal structure workers for projects in Estonia and Sweden. Fill in the short form below and tell us about your experience.",
  ru: "Ищем сварщиков, слесарей и специалистов по металлоконструкциям для работы в Эстонии и Швеции. Заполните короткую анкету и расскажите о себе.",
};

const BACK_LABEL: Record<Locale, string> = {
  en: "Back to home",
  sv: "Back to home",
  fi: "Back to home",
  da: "Back to home",
  no: "Back to home",
  ru: "Назад на главную",
};

const NAME_LABEL: Record<Locale, string> = {
  en: "Full name",
  sv: "Full name",
  fi: "Full name",
  da: "Full name",
  no: "Full name",
  ru: "Имя и фамилия",
};

const AGE_LABEL: Record<Locale, string> = {
  en: "Age",
  sv: "Age",
  fi: "Age",
  da: "Age",
  no: "Age",
  ru: "Возраст",
};

const PHONE_LABEL: Record<Locale, string> = {
  en: "Phone / WhatsApp",
  sv: "Phone / WhatsApp",
  fi: "Phone / WhatsApp",
  da: "Phone / WhatsApp",
  no: "Phone / WhatsApp",
  ru: "Телефон / WhatsApp",
};

const EMAIL_LABEL: Record<Locale, string> = {
  en: "Email",
  sv: "Email",
  fi: "Email",
  da: "Email",
  no: "Email",
  ru: "Email",
};

const CITY_LABEL: Record<Locale, string> = {
  en: "Country / city",
  sv: "Country / city",
  fi: "Country / city",
  da: "Country / city",
  no: "Country / city",
  ru: "Страна / город",
};

const PASSPORT_LABEL: Record<Locale, string> = {
  en: "Citizenship / passport / work permit in EU",
  sv: "Citizenship / passport / work permit in EU",
  fi: "Citizenship / passport / work permit in EU",
  da: "Citizenship / passport / work permit in EU",
  no: "Citizenship / passport / work permit in EU",
  ru: "Гражданство / паспорт / право на работу в ЕС",
};

const JOB_LABEL: Record<Locale, string> = {
  en: "What position are you applying for?",
  sv: "What position are you applying for?",
  fi: "What position are you applying for?",
  da: "What position are you applying for?",
  no: "What position are you applying for?",
  ru: "На какую должность вы откликаетесь?",
};

const EXPERIENCE_LABEL: Record<Locale, string> = {
  en: "How many years of experience do you have?",
  sv: "How many years of experience do you have?",
  fi: "How many years of experience do you have?",
  da: "How many years of experience do you have?",
  no: "How many years of experience do you have?",
  ru: "Сколько у вас лет опыта работы?",
};

const SKILLS_LABEL: Record<Locale, string> = {
  en: "What welding / fitting / assembly skills do you have?",
  sv: "What welding / fitting / assembly skills do you have?",
  fi: "What welding / fitting / assembly skills do you have?",
  da: "What welding / fitting / assembly skills do you have?",
  no: "What welding / fitting / assembly skills do you have?",
  ru: "Какие виды сварки / сборки / слесарных работ вы умеете?",
};

const DRAWINGS_LABEL: Record<Locale, string> = {
  en: "Can you read drawings?",
  sv: "Can you read drawings?",
  fi: "Can you read drawings?",
  da: "Can you read drawings?",
  no: "Can you read drawings?",
  ru: "Умеете ли читать чертежи?",
};

const WORK_LABEL: Record<Locale, string> = {
  en: "Are you ready to work in Estonia / Sweden?",
  sv: "Are you ready to work in Estonia / Sweden?",
  fi: "Are you ready to work in Estonia / Sweden?",
  da: "Are you ready to work in Estonia / Sweden?",
  no: "Are you ready to work in Estonia / Sweden?",
  ru: "Готовы ли работать в Эстонии / Швеции?",
};

const ABOUT_LABEL: Record<Locale, string> = {
  en: "Tell us about yourself",
  sv: "Tell us about yourself",
  fi: "Tell us about yourself",
  da: "Tell us about yourself",
  no: "Tell us about yourself",
  ru: "Кратко расскажите о себе",
};

const SEND_LABEL: Record<Locale, string> = {
  en: "Send application",
  sv: "Send application",
  fi: "Send application",
  da: "Send application",
  no: "Send application",
  ru: "Отправить анкету",
};

const NOTE_LABEL: Record<Locale, string> = {
  en: "Temporary version: this form opens your email app. Later we can connect full form sending to email or server.",
  sv: "Temporary version: this form opens your email app. Later we can connect full form sending to email or server.",
  fi: "Temporary version: this form opens your email app. Later we can connect full form sending to email or server.",
  da: "Temporary version: this form opens your email app. Later we can connect full form sending to email or server.",
  no: "Temporary version: this form opens your email app. Later we can connect full form sending to email or server.",
  ru: "Пока это временный вариант: форма открывает почтовое приложение. Потом можно подключить полноценную отправку на email или сервер.",
};

export default function CareersPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;

  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <div style={{ marginBottom: 14 }}>
        <Link className="btnGhost" href={`/${locale}`}>
          ← {BACK_LABEL[locale]}
        </Link>
      </div>

      <section
        className="heroCard"
        style={{
          maxWidth: 860,
          margin: "0 auto",
        }}
      >
        <h1 className="heroTitle" style={{ maxWidth: "none" }}>
          {TITLE[locale]}
        </h1>

        <p className="heroText" style={{ maxWidth: "none" }}>
          {LEAD[locale]}
        </p>

        <form
          className="form"
          action="mailto:Akwelder87@gmail.com"
          method="post"
          encType="text/plain"
          style={{ marginTop: 18 }}
        >
          <input className="input" type="text" name="name" placeholder={NAME_LABEL[locale]} required />
          <input className="input" type="text" name="age" placeholder={AGE_LABEL[locale]} required />
          <input className="input" type="text" name="phone" placeholder={PHONE_LABEL[locale]} required />
          <input className="input" type="email" name="email" placeholder={EMAIL_LABEL[locale]} />
          <input className="input" type="text" name="city" placeholder={CITY_LABEL[locale]} />
          <textarea className="textarea" name="passport" placeholder={PASSPORT_LABEL[locale]} required />
          <textarea className="textarea" name="job" placeholder={JOB_LABEL[locale]} required />
          <input className="input" type="text" name="experience" placeholder={EXPERIENCE_LABEL[locale]} required />
          <textarea className="textarea" name="skills" placeholder={SKILLS_LABEL[locale]} required />
          <textarea className="textarea" name="drawings" placeholder={DRAWINGS_LABEL[locale]} />
          <textarea className="textarea" name="work" placeholder={WORK_LABEL[locale]} required />
          <textarea className="textarea" name="about" placeholder={ABOUT_LABEL[locale]} />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
            <button className="btn" type="submit">
              {SEND_LABEL[locale]}
            </button>

            <a className="btnGhost" href="mailto:Akwelder87@gmail.com">
              Email: Akwelder87@gmail.com
            </a>
          </div>
        </form>

        <p className="small" style={{ marginTop: 14 }}>
          {NOTE_LABEL[locale]}
        </p>
      </section>
    </div>
  );
}
