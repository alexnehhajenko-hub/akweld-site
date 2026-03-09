import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale } from "@/src/i18n";

const SUPPORTED = ["ru", "en"] as const;
type CareersLocale = (typeof SUPPORTED)[number];

function isSupportedLocale(locale: Locale): locale is CareersLocale {
  return locale === "ru" || locale === "en";
}

const TITLE: Record<CareersLocale, string> = {
  ru: "Ищем сварщиков и слесарей",
  en: "We are looking for welders and fitters",
};

const LEAD: Record<CareersLocale, string> = {
  ru: "Ищем сварщиков, слесарей, монтажников металлоконструкций и монтажников трубопровода для проектов в Эстонии и Швеции. Ниже вы можете выбрать нужное направление или сразу отправить анкету.",
  en: "We are looking for welders, fitters, metal structure installers and pipe installers for projects in Estonia and Sweden. Below you can choose the relevant position or send your application right away.",
};

const BACK_LABEL: Record<CareersLocale, string> = {
  ru: "Назад на главную",
  en: "Back to home",
};

const SERVICES_LABEL: Record<CareersLocale, string> = {
  ru: "Наши услуги",
  en: "Our services",
};

const PROJECTS_LABEL: Record<CareersLocale, string> = {
  ru: "Наши проекты",
  en: "Our projects",
};

const OPENINGS_TITLE: Record<CareersLocale, string> = {
  ru: "Кого ищем",
  en: "Open positions",
};

const OPENINGS: Record<
  CareersLocale,
  Array<{ title: string; text: string; href: string }>
> = {
  ru: [
    {
      title: "Сварщик",
      text: "Нужны сварщики для работы с металлоконструкциями, сборкой узлов, производством и объектами в Эстонии и Швеции.",
      href: "/ru/careers/welder",
    },
    {
      title: "Слесарь-сборщик",
      text: "Ищем слесарей для сборки металлоконструкций, подгонки деталей, чтения чертежей и работы в цеху и на объекте.",
      href: "/ru/careers/fitter",
    },
    {
      title: "Монтажник металлоконструкций",
      text: "Требуются монтажники для установки лестниц, площадок, рам, ограждений и других металлоконструкций.",
      href: "/ru/careers/metal-erector",
    },
    {
      title: "Монтажник трубопровода",
      text: "Ищем специалистов по трубопроводу: сборка, подгонка, монтаж, работа по схемам и изометрии.",
      href: "/ru/careers/pipe-installer",
    },
  ],
  en: [
    {
      title: "Welder",
      text: "We are looking for welders for steel structures, assembly work, workshop production and site projects in Estonia and Sweden.",
      href: "/en/careers/welder",
    },
    {
      title: "Fitter",
      text: "We need fitters for steel assembly, part fitting, drawing-based work and workshop or site tasks.",
      href: "/en/careers/fitter",
    },
    {
      title: "Metal structure installer",
      text: "We are hiring installers for stairs, platforms, frames, railings and other steel structure installation work.",
      href: "/en/careers/metal-erector",
    },
    {
      title: "Pipe installer",
      text: "We are looking for pipe installers: fitting, assembly, installation and work by drawings and isometrics.",
      href: "/en/careers/pipe-installer",
    },
  ],
};

const WHY_TITLE: Record<CareersLocale, string> = {
  ru: "Что важно для кандидатов",
  en: "What matters for candidates",
};

const WHY_ITEMS: Record<CareersLocale, string[]> = {
  ru: [
    "Работа по проектам в Эстонии и Швеции.",
    "Нужны специалисты по металлоконструкциям и монтажу.",
    "Интересуют кандидаты с опытом, пониманием чертежей и готовностью работать в Европе.",
    "Отдельно рассматриваем сварщиков, слесарей, монтажников металлоконструкций и трубопровода.",
  ],
  en: [
    "Projects in Estonia and Sweden.",
    "We need specialists in steel structures and installation work.",
    "We are interested in candidates with experience, drawing-reading skills and readiness to work in Europe.",
    "We are separately looking for welders, fitters, metal structure installers and pipe installers.",
  ],
};

const FORM_TITLE: Record<CareersLocale, string> = {
  ru: "Короткая анкета",
  en: "Quick application form",
};

const FORM_LEAD: Record<CareersLocale, string> = {
  ru: "Если вы хотите откликнуться сразу, заполните форму ниже. Потом мы свяжемся с вами и обсудим детали.",
  en: "If you want to apply right away, fill in the form below. After that we will contact you and discuss the details.",
};

const NAME_LABEL: Record<CareersLocale, string> = {
  ru: "Имя и фамилия",
  en: "Full name",
};

const AGE_LABEL: Record<CareersLocale, string> = {
  ru: "Возраст",
  en: "Age",
};

const PHONE_LABEL: Record<CareersLocale, string> = {
  ru: "Телефон / WhatsApp",
  en: "Phone / WhatsApp",
};

const EMAIL_LABEL: Record<CareersLocale, string> = {
  ru: "Email",
  en: "Email",
};

const CITY_LABEL: Record<CareersLocale, string> = {
  ru: "Страна / город",
  en: "Country / city",
};

const PASSPORT_LABEL: Record<CareersLocale, string> = {
  ru: "Гражданство / паспорт / право на работу в ЕС",
  en: "Citizenship / passport / right to work in the EU",
};

const JOB_LABEL: Record<CareersLocale, string> = {
  ru: "На какую должность вы откликаетесь?",
  en: "Which position are you applying for?",
};

const EXPERIENCE_LABEL: Record<CareersLocale, string> = {
  ru: "Сколько у вас лет опыта работы?",
  en: "How many years of experience do you have?",
};

const SKILLS_LABEL: Record<CareersLocale, string> = {
  ru: "Какие виды сварки / сборки / слесарных работ вы умеете?",
  en: "What welding / fitting / assembly skills do you have?",
};

const DRAWINGS_LABEL: Record<CareersLocale, string> = {
  ru: "Умеете ли читать чертежи?",
  en: "Can you read drawings?",
};

const WORK_LABEL: Record<CareersLocale, string> = {
  ru: "Готовы ли работать в Эстонии / Швеции?",
  en: "Are you ready to work in Estonia / Sweden?",
};

const ABOUT_LABEL: Record<CareersLocale, string> = {
  ru: "Кратко расскажите о себе",
  en: "Tell us about yourself",
};

const SEND_LABEL: Record<CareersLocale, string> = {
  ru: "Отправить анкету",
  en: "Send application",
};

const NOTE_LABEL: Record<CareersLocale, string> = {
  ru: "Пока это временный вариант: форма открывает почтовое приложение. Потом подключим полноценную отправку на email или сервер.",
  en: "This is a temporary version: the form opens your email app. Later we can connect full sending to email or server.",
};

export default function CareersPage({ params }: { params: { locale: Locale } }) {
  if (!isSupportedLocale(params.locale)) return notFound();

  const locale = params.locale;

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${locale}`}>
          ← {BACK_LABEL[locale]}
        </Link>
        <Link className="btnGhost" href={`/${locale}/services`}>
          {SERVICES_LABEL[locale]}
        </Link>
        <Link className="btnGhost" href={`/${locale}/projects`}>
          {PROJECTS_LABEL[locale]}
        </Link>
      </div>

      <section className="heroCard">
        <h1 className="heroTitle" style={{ maxWidth: "none" }}>
          {TITLE[locale]}
        </h1>

        <p className="heroText" style={{ maxWidth: "none" }}>
          {LEAD[locale]}
        </p>

        <div className="heroActions">
          <a className="btn" href="mailto:Akwelder87@gmail.com">
            Email: Akwelder87@gmail.com
          </a>
          <a className="btnGhost" href="tel:+37255615108">
            +372 5561 5108
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">{OPENINGS_TITLE[locale]}</h2>
        <div className="cards">
          {OPENINGS[locale].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card"
              style={{ display: "block" }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {WHY_TITLE[locale]}
          </h2>

          <ul
            style={{
              margin: "14px 0 0",
              paddingLeft: 18,
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.7,
            }}
          >
            {WHY_ITEMS[locale].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {FORM_TITLE[locale]}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {FORM_LEAD[locale]}
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
        </div>
      </section>
    </div>
  );
}
