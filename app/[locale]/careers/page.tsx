import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale } from "@/src/i18n";

const SUPPORTED = ["ru", "en"] as const;
type CareersLocale = (typeof SUPPORTED)[number];

const CONTACT_EMAIL = "info@akweldsteel.com";
const CONTACT_PHONE = "+372 5561 5108";

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

const LABELS: Record<
  CareersLocale,
  {
    name: string;
    age: string;
    phone: string;
    email: string;
    city: string;
    passport: string;
    job: string;
    experience: string;
    skills: string;
    drawings: string;
    work: string;
    about: string;
    send: string;
    note: string;
  }
> = {
  ru: {
    name: "Имя и фамилия",
    age: "Возраст",
    phone: "Телефон / WhatsApp",
    email: "Email",
    city: "Страна / город",
    passport: "Гражданство / паспорт / право на работу в ЕС",
    job: "На какую должность вы откликаетесь?",
    experience: "Сколько у вас лет опыта работы?",
    skills: "Какие виды сварки / сборки / слесарных работ вы умеете?",
    drawings: "Умеете ли читать чертежи?",
    work: "Готовы ли работать в Эстонии / Швеции?",
    about: "Кратко расскажите о себе",
    send: "Отправить анкету",
    note: "Пока это временный вариант: форма открывает почтовое приложение. Потом подключим полноценную отправку на email или сервер.",
  },
  en: {
    name: "Full name",
    age: "Age",
    phone: "Phone / WhatsApp",
    email: "Email",
    city: "Country / city",
    passport: "Citizenship / passport / right to work in the EU",
    job: "Which position are you applying for?",
    experience: "How many years of experience do you have?",
    skills: "What welding / fitting / assembly skills do you have?",
    drawings: "Can you read drawings?",
    work: "Are you ready to work in Estonia / Sweden?",
    about: "Tell us about yourself",
    send: "Send application",
    note: "This is a temporary version: the form opens your email app. Later we can connect full sending to email or server.",
  },
};

function fieldLabel(text: string) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: 700,
        marginBottom: 6,
        color: "rgba(255,255,255,0.92)",
      }}
    >
      {text}
    </div>
  );
}

export default function CareersPage({ params }: { params: { locale: Locale } }) {
  if (!isSupportedLocale(params.locale)) return notFound();

  const locale = params.locale;
  const l = LABELS[locale];

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
          <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
            Email: {CONTACT_EMAIL}
          </a>
          <a className="btnGhost" href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}>
            {CONTACT_PHONE}
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
        <div className="card" style={{ minHeight: "unset", padding: 22 }}>
          <h2 style={{ margin: 0, fontSize: 24 }}>{WHY_TITLE[locale]}</h2>

          <ul
            style={{
              margin: "14px 0 0",
              paddingLeft: 18,
              color: "rgba(255,255,255,0.84)",
              lineHeight: 1.75,
            }}
          >
            {WHY_ITEMS[locale].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div
          style={{
            background: "#0d1218",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 18,
            padding: 22,
            boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 24,
              color: "rgba(255,255,255,0.96)",
            }}
          >
            {FORM_TITLE[locale]}
          </h2>

          <p
            style={{
              marginTop: 12,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            {FORM_LEAD[locale]}
          </p>

          <form
            className="form"
            action={`mailto:${CONTACT_EMAIL}`}
            method="post"
            encType="text/plain"
            style={{ marginTop: 18 }}
          >
            <div>
              {fieldLabel(l.name)}
              <input className="input" type="text" name="name" placeholder={l.name} required />
            </div>

            <div>
              {fieldLabel(l.age)}
              <input className="input" type="text" name="age" placeholder={l.age} required />
            </div>

            <div>
              {fieldLabel(l.phone)}
              <input className="input" type="text" name="phone" placeholder={l.phone} required />
            </div>

            <div>
              {fieldLabel(l.email)}
              <input className="input" type="email" name="email" placeholder={l.email} />
            </div>

            <div>
              {fieldLabel(l.city)}
              <input className="input" type="text" name="city" placeholder={l.city} />
            </div>

            <div>
              {fieldLabel(l.passport)}
              <textarea className="textarea" name="passport" placeholder={l.passport} required />
            </div>

            <div>
              {fieldLabel(l.job)}
              <textarea className="textarea" name="job" placeholder={l.job} required />
            </div>

            <div>
              {fieldLabel(l.experience)}
              <input className="input" type="text" name="experience" placeholder={l.experience} required />
            </div>

            <div>
              {fieldLabel(l.skills)}
              <textarea className="textarea" name="skills" placeholder={l.skills} required />
            </div>

            <div>
              {fieldLabel(l.drawings)}
              <textarea className="textarea" name="drawings" placeholder={l.drawings} />
            </div>

            <div>
              {fieldLabel(l.work)}
              <textarea className="textarea" name="work" placeholder={l.work} required />
            </div>

            <div>
              {fieldLabel(l.about)}
              <textarea className="textarea" name="about" placeholder={l.about} />
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
              <button className="btn" type="submit">
                {l.send}
              </button>

              <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
                Email: {CONTACT_EMAIL}
              </a>
            </div>
          </form>

          <p
            style={{
              marginTop: 14,
              fontSize: 12,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            {l.note}
          </p>
        </div>
      </section>
    </div>
  );
}
