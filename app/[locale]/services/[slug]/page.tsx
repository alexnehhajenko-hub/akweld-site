import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_PHONE = "+372 5561 5108";
const CONTACT_EMAIL = "Akwelder87@gmail.com";

const HERO_BG = "/work_custom_01.png";

const SERVICE_IMAGE_BY_SLUG: Record<string, string> = {
  fabrication: "/service_fabrication_01.png",
  installation: "/work_custom_01.png",
  workforce: "/workforce_dino_team_01.png",
  repairs: "/work_repairs_01.png",
  capacity: "/work_custom_01.png",
  custom: "/work_custom_01.png",
};

function isRu(locale: Locale) {
  return locale === "ru";
}

function getLeadBySlug(slug: string, locale: Locale) {
  const ru = isRu(locale);

  switch (slug) {
    case "fabrication":
      return ru
        ? "Изготавливаем металлоконструкции по чертежам и размерам: рамы, площадки, лестницы, опоры, нестандартные узлы и детали."
        : "We fabricate steel structures by drawings and dimensions: frames, platforms, stairs, supports and custom steel parts.";
    case "installation":
      return ru
        ? "Выполняем монтаж металлоконструкций на объекте: сборка, подгонка, выверка, контроль и сдача работ."
        : "We install steel structures on site: assembly, fitting, alignment, control and handover.";
    case "workforce":
      return ru
        ? "Предоставляем сварщиков, слесарей и монтажников для цеха и объекта на короткий или длительный срок."
        : "We provide welders, fitters and installers for workshop and site work on short-term and long-term basis.";
    case "repairs":
      return ru
        ? "Делаем ремонт, усиление и доработки существующих металлоконструкций на объекте и в цеху."
        : "We handle repairs, reinforcement and modifications of existing steel structures on site and in workshop.";
    case "capacity":
      return ru
        ? "Поддерживаем регулярные заказы, серийные партии и загрузку по производству с понятными сроками."
        : "We support recurring orders, serial production and stable workshop capacity with clear timelines.";
    case "custom":
      return ru
        ? "Берёмся за нестандартные задачи, сложные детали и индивидуальные проекты с понятным объёмом работ."
        : "We handle custom requests, difficult parts and individual steel projects with clear scope and timing.";
    default:
      return ru
        ? "Работаем с металлоконструкциями для проектов в Эстонии, Швеции и по Скандинавии."
        : "We work with steel structures for projects in Estonia, Sweden and across Scandinavia.";
  }
}

function getProcess(locale: Locale) {
  return isRu(locale)
    ? [
        "Получаем запрос, чертежи, размеры или фото объекта.",
        "Уточняем объём, материалы, сроки и требования по монтажу.",
        "Согласовываем формат работы: изготовление, монтаж, персонал или ремонт.",
        "Выполняем работу и держим связь по ходу проекта.",
      ]
    : [
        "We receive your request, drawings, dimensions or site photos.",
        "We clarify scope, materials, timing and site requirements.",
        "We agree the work format: fabrication, installation, workforce or repairs.",
        "We complete the job and keep communication clear during the project.",
      ];
}

function getRegions(locale: Locale) {
  return isRu(locale)
    ? [
        "Эстония — база, производство и часть объектов.",
        "Швеция — поддержка проектов и выездные работы.",
        "Скандинавия и Прибалтика — обсуждаем по проекту и объёму.",
      ]
    : [
        "Estonia — base, workshop and part of site work.",
        "Sweden — project support and installation work.",
        "Scandinavia and Baltics — discussed per project and scope.",
      ];
}

function getSeoText(slug: string, locale: Locale) {
  const ru = isRu(locale);

  switch (slug) {
    case "fabrication":
      return ru
        ? "Услуга изготовления металлоконструкций подходит для заказчиков, которым нужен понятный производственный процесс, аккуратная сборка и готовность работать по чертежам. Мы изготавливаем элементы для объектов, производственных площадок, лестниц, рам, опор и нестандартных изделий. Для SEO и для реальных клиентов важно, чтобы страница сразу показывала: чем именно мы занимаемся, в каких странах работаем и как с нами связаться."
        : "Our steel fabrication service is for clients who need a clear production process, clean assembly and work by drawings. We fabricate elements for industrial sites, stairs, frames, supports and custom steel products. For both SEO and real clients, the page should clearly show what we do, where we work and how to contact us.";
    case "installation":
      return ru
        ? "Монтаж металлоконструкций включает сборку, подгонку, выверку и финальные работы на объекте. Такая страница должна быть полезной и для клиента, и для поиска: человек сразу должен понять, что мы можем отправить бригаду на объект, работать по площадке и соблюдать требования по срокам и безопасности."
        : "Steel installation includes assembly, fitting, alignment and finishing work on site. This page should help both real clients and search engines: it must clearly show that we can send crews to site, work under project requirements and keep timelines and safety in mind.";
    case "workforce":
      return ru
        ? "Аренда квалифицированного персонала — это отдельное направление: сварщики, слесари, монтажники и специалисты по металлоконструкциям. Для SEO важно, чтобы эта страница содержала понятные ключевые смыслы: рабочие в Эстонии, рабочие в Швеции, монтажные бригады, сварщики на проект и слесари-сборщики на производство."
        : "Qualified workforce rental is a separate service: welders, fitters, installers and steel structure specialists. For SEO this page should clearly cover topics like workers in Estonia, workers in Sweden, installation crews, project welders and workshop fitters.";
    case "repairs":
      return ru
        ? "Ремонт и доработки металлоконструкций нужны там, где важно быстро усилить, исправить или адаптировать уже существующее решение. На практике это может быть переделка узлов, усиление конструкции, исправление геометрии или доработка под новые требования."
        : "Repairs and steel structure modifications are needed when an existing solution must be reinforced, corrected or adapted. In practice this can mean joint rework, structural reinforcement, geometry correction or adjustment for new requirements.";
    case "capacity":
      return ru
        ? "Производственные мощности важны для заказчиков, которым нужен не один разовый элемент, а регулярная поддержка по изготовлению деталей и серийных партий. Здесь важно показать стабильность, прогнозируемость и возможность брать повторяемые заказы."
        : "Workshop capacity matters for clients who need not only one-off elements, but stable support for repeat parts and serial production. This page should communicate stability, predictability and the ability to handle recurring orders.";
    case "custom":
      return ru
        ? "Нестандартные задачи — это то, что часто ищут по запросам, связанным с индивидуальным изготовлением, сложными деталями и работой по месту. Поэтому на такой странице важно показать, что мы умеем обсуждать нестандарт, быстро считать объём и предлагать понятное решение."
        : "Custom steel work is often searched through queries about individual fabrication, difficult parts and special projects. This page should show that we can discuss custom work, estimate scope quickly and offer a clear solution.";
    default:
      return ru
        ? "Мы работаем с проектами по металлоконструкциям, монтажу и производству."
        : "We work with steel structure, installation and production projects.";
  }
}

export default function ServicePage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getT(params.locale);
  const card = t.services.cards.find((c) => c.slug === params.slug);

  if (!card) return notFound();

  const img = SERVICE_IMAGE_BY_SLUG[card.slug] ?? HERO_BG;
  const process = getProcess(params.locale);
  const regions = getRegions(params.locale);
  const lead = getLeadBySlug(card.slug, params.locale);
  const seoText = getSeoText(card.slug, params.locale);

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {isRu(params.locale) ? "На главную" : "Home"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {isRu(params.locale) ? "Все услуги" : "All services"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {isRu(params.locale) ? "Проекты" : "Projects"}
        </Link>
      </div>

      <section className="heroCard" style={{ padding: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 360,
            borderBottom: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <Image
            src={img}
            alt={card.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.72) 85%)",
            }}
          />
        </div>

        <div style={{ padding: 24 }}>
          <h1 className="heroTitle" style={{ maxWidth: "none" }}>
            {card.title}
          </h1>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {lead}
          </p>

          <div className="heroActions">
            <a className="btn" href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}>
              {isRu(params.locale) ? "Позвонить" : "Call"}: {CONTACT_PHONE}
            </a>
            <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
              Email: {CONTACT_EMAIL}
            </a>
            <Link className="btnGhost" href={`/${params.locale}/contact`}>
              {isRu(params.locale) ? "Запросить цену" : "Get a quote"}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 20 }}>
              {isRu(params.locale) ? "Что входит" : "What’s included"}
            </h2>
            <ul
              style={{
                margin: "14px 0 0",
                paddingLeft: 18,
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.7,
              }}
            >
              {card.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 20 }}>
              {isRu(params.locale) ? "Как работаем" : "How we work"}
            </h2>
            <ul
              style={{
                margin: "14px 0 0",
                paddingLeft: 18,
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.7,
              }}
            >
              {process.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 20 }}>
              {isRu(params.locale) ? "Где работаем" : "Where we work"}
            </h2>
            <ul
              style={{
                margin: "14px 0 0",
                paddingLeft: 18,
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.7,
              }}
            >
              {regions.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 20 }}>
              {isRu(params.locale) ? "Описание услуги" : "Service overview"}
            </h2>
            <p style={{ marginTop: 14 }}>{seoText}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {isRu(params.locale)
              ? "Нужен расчёт или обсуждение проекта?"
              : "Need an estimate or want to discuss the project?"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {isRu(params.locale)
              ? "Отправьте запрос, описание задачи или чертежи. Мы посмотрим объём, уточним детали и предложим следующий шаг."
              : "Send us your request, task description or drawings. We will review the scope, уточним детали and suggest the next step."}
          </p>

          <div className="heroActions">
            <Link className="btn" href={`/${params.locale}/contact`}>
              {isRu(params.locale) ? "Запросить цену" : "Get a quote"}
            </Link>
            <Link className="btnGhost" href={`/${params.locale}/projects`}>
              {isRu(params.locale) ? "Посмотреть проекты" : "View projects"}
            </Link>
            <Link className="btnGhost" href={`/${params.locale}/services`}>
              {isRu(params.locale) ? "Другие услуги" : "Other services"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
