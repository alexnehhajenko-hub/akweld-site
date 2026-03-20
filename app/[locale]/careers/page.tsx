"use client";

import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { upload } from "@vercel/blob/client";
import { type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";

const SUPPORTED = ["ru", "en"] as const;
type CareersLocale = (typeof SUPPORTED)[number];

type UploadedFile = {
  name: string;
  url: string;
};

type FormState = {
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
  languages: string;
  englishLevel: string;
  germanLevel: string;
  driverLicense: string;
  about: string;
};

const initialForm: FormState = {
  name: "",
  age: "",
  phone: "",
  email: "",
  city: "",
  passport: "",
  job: "",
  experience: "",
  skills: "",
  drawings: "",
  work: "",
  languages: "",
  englishLevel: "",
  germanLevel: "",
  driverLicense: "",
  about: "",
};

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

const OPENINGS: Record<CareersLocale, Array<{ title: string; text: string }>> = {
  ru: [
    {
      title: "Сварщик",
      text: "Нужны сварщики для работы с металлоконструкциями, сборкой узлов, производством и объектами в Эстонии и Швеции.",
    },
    {
      title: "Слесарь-сборщик",
      text: "Ищем слесарей для сборки металлоконструкций, подгонки деталей, чтения чертежей и работы в цеху и на объекте.",
    },
    {
      title: "Монтажник металлоконструкций",
      text: "Требуются монтажники для установки лестниц, площадок, рам, ограждений и других металлоконструкций.",
    },
    {
      title: "Монтажник трубопровода",
      text: "Ищем специалистов по трубопроводу: сборка, подгонка, монтаж, работа по схемам и изометрии.",
    },
  ],
  en: [
    {
      title: "Welder",
      text: "We are looking for welders for steel structures, assembly work, workshop production and site projects in Estonia and Sweden.",
    },
    {
      title: "Fitter",
      text: "We need fitters for steel assembly, part fitting, drawing-based work and workshop or site tasks.",
    },
    {
      title: "Metal structure installer",
      text: "We are hiring installers for stairs, platforms, frames, railings and other steel structure installation work.",
    },
    {
      title: "Pipe installer",
      text: "We are looking for pipe installers: fitting, assembly, installation and work by drawings and isometrics.",
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
  ru: "Анкета кандидата",
  en: "Candidate application form",
};

const FORM_LEAD: Record<CareersLocale, string> = {
  ru: "Заполните анкету и прикрепите CV, сертификаты, допуски, разрешения на работу или другие документы.",
  en: "Fill in the application form and attach your CV, certificates, permits or other documents.",
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
    languages: string;
    englishLevel: string;
    germanLevel: string;
    driverLicense: string;
    about: string;
    files: string;
    send: string;
    note: string;
    error: string;
    required: string;
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
    languages: "Какими языками вы владеете?",
    englishLevel: "Какой у вас уровень английского?",
    germanLevel: "Какой у вас уровень немецкого?",
    driverLicense: "Какая у вас категория прав?",
    about: "Кратко расскажите о себе",
    files: "Прикрепить CV, сертификаты, разрешения, фото документов",
    send: "Отправить анкету",
    note: "Документы загружаются отдельно, а в письмо приходят прямые ссылки на файлы.",
    error: "Не удалось отправить анкету.",
    required: "Заполните имя, телефон, должность и опыт.",
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
    languages: "Which languages do you speak?",
    englishLevel: "What is your English level?",
    germanLevel: "What is your German level?",
    driverLicense: "Which driver’s license category do you have?",
    about: "Tell us about yourself",
    files: "Attach CV, certificates, permits, document photos",
    send: "Send application",
    note: "Documents are uploaded separately and the email contains direct file links.",
    error: "Could not send the application.",
    required: "Please fill in name, phone, position and experience.",
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
  const formSectionRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  const [form, setForm] = useState<FormState>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function selectOpening(title: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setStatus(null);
    requestAnimationFrame(() => {
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const fileListText = useMemo(() => {
    if (!files.length) return "";
    return files.map((file) => `${file.name} (${Math.round(file.size / 1024)} KB)`).join("\n");
  }, [files]);

  async function uploadFilesToBlob(selectedFiles: File[]): Promise<UploadedFile[]> {
    const uploaded: UploadedFile[] = [];

    for (const file of selectedFiles) {
      const blob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/careers/upload",
      });

      uploaded.push({
        name: file.name,
        url: blob.url,
      });
    }

    return uploaded;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.phone.trim() || !form.job.trim() || !form.experience.trim()) {
      setStatus({
        ok: false,
        text: l.required,
      });
      return;
    }

    setIsSending(true);

    try {
      let uploadedFiles: UploadedFile[] = [];

      if (files.length > 0) {
        uploadedFiles = await uploadFilesToBlob(files);
      }

      const res = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          ...form,
          uploadedFiles,
        }),
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
      const message = error instanceof Error ? error.message : l.error;
      setStatus({
        ok: false,
        text: `${l.error} ${message}`,
      });
    } finally {
      setIsSending(false);
    }
  }

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
          <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
            Email: {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">{OPENINGS_TITLE[locale]}</h2>
        <div className="cards">
          {OPENINGS[locale].map((item) => (
            <button
              key={item.title}
              type="button"
              className="card"
              onClick={() => selectOpening(item.title)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "rgba(255,255,255,0.05)",
                color: "inherit",
                border: "1px solid rgba(255,255,255,0.14)",
                cursor: "pointer",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </button>
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

      <section ref={formSectionRef} className="section">
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

          <form className="form" onSubmit={onSubmit} style={{ marginTop: 18 }}>
            <div>
              {fieldLabel(l.name)}
              <input
                className="input"
                type="text"
                name="name"
                placeholder={l.name}
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
              />
            </div>

            <div>
              {fieldLabel(l.age)}
              <input
                className="input"
                type="text"
                name="age"
                placeholder={l.age}
                value={form.age}
                onChange={(e) => updateField("age", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.phone)}
              <input
                className="input"
                type="text"
                name="phone"
                placeholder={l.phone}
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                required
              />
            </div>

            <div>
              {fieldLabel(l.email)}
              <input
                className="input"
                type="email"
                name="email"
                placeholder={l.email}
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.city)}
              <input
                className="input"
                type="text"
                name="city"
                placeholder={l.city}
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.passport)}
              <textarea
                className="textarea"
                name="passport"
                placeholder={l.passport}
                value={form.passport}
                onChange={(e) => updateField("passport", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.job)}
              <textarea
                className="textarea"
                name="job"
                placeholder={l.job}
                value={form.job}
                onChange={(e) => updateField("job", e.target.value)}
                required
              />
            </div>

            <div>
              {fieldLabel(l.experience)}
              <input
                className="input"
                type="text"
                name="experience"
                placeholder={l.experience}
                value={form.experience}
                onChange={(e) => updateField("experience", e.target.value)}
                required
              />
            </div>

            <div>
              {fieldLabel(l.skills)}
              <textarea
                className="textarea"
                name="skills"
                placeholder={l.skills}
                value={form.skills}
                onChange={(e) => updateField("skills", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.drawings)}
              <textarea
                className="textarea"
                name="drawings"
                placeholder={l.drawings}
                value={form.drawings}
                onChange={(e) => updateField("drawings", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.work)}
              <textarea
                className="textarea"
                name="work"
                placeholder={l.work}
                value={form.work}
                onChange={(e) => updateField("work", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.languages)}
              <textarea
                className="textarea"
                name="languages"
                placeholder={l.languages}
                value={form.languages}
                onChange={(e) => updateField("languages", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.englishLevel)}
              <input
                className="input"
                type="text"
                name="englishLevel"
                placeholder={l.englishLevel}
                value={form.englishLevel}
                onChange={(e) => updateField("englishLevel", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.germanLevel)}
              <input
                className="input"
                type="text"
                name="germanLevel"
                placeholder={l.germanLevel}
                value={form.germanLevel}
                onChange={(e) => updateField("germanLevel", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.driverLicense)}
              <input
                className="input"
                type="text"
                name="driverLicense"
                placeholder={l.driverLicense}
                value={form.driverLicense}
                onChange={(e) => updateField("driverLicense", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.about)}
              <textarea
                className="textarea"
                name="about"
                placeholder={l.about}
                value={form.about}
                onChange={(e) => updateField("about", e.target.value)}
              />
            </div>

            <div>
              {fieldLabel(l.files)}
              <input
                className="input"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />
            </div>

            {files.length > 0 ? (
              <textarea
                className="textarea"
                readOnly
                value={fileListText}
                style={{ minHeight: 100 }}
              />
            ) : null}

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
              <button className="btn" type="submit" disabled={isSending}>
                {isSending ? (locale === "ru" ? "Отправляем..." : "Sending...") : l.send}
              </button>

              <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
                Email: {CONTACT_EMAIL}
              </a>
            </div>

            {status ? (
              <p
                style={{
                  marginTop: 14,
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: status.ok ? "rgba(255,255,255,0.82)" : "#ffb4b4",
                }}
              >
                {status.text}
              </p>
            ) : null}
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