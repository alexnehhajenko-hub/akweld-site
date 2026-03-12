import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_PHONE = "+372 5561 5108";
const CONTACT_EMAIL = "info@akweldsteel.com";

const HERO_BG = "/hero-bg.png";

const SERVICE_IMAGE_BY_SLUG: Record<string, string> = {
  fabrication: "/service_fabrication_01.png",
  installation: "/work_platform_site_01.png",
  workforce: "/workforce_dino_team_01.png",
  repairs: "/work_repairs_01.png",
  capacity: "/work_capacity_01.png",
  custom: "/work_platform_walkway_01.jpg",
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

function getFabricationBlueprintDataUri() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" fill="none">
      <rect width="1600" height="900" fill="#09111b"/>
      <g opacity="0.16" stroke="#9dc7ff" stroke-width="1">
        <path d="M0 90H1600M0 180H1600M0 270H1600M0 360H1600M0 450H1600M0 540H1600M0 630H1600M0 720H1600M0 810H1600"/>
        <path d="M160 0V900M320 0V900M480 0V900M640 0V900M800 0V900M960 0V900M1120 0V900M1280 0V900M1440 0V900"/>
      </g>
      <g opacity="0.24" stroke="#6ea8ff" stroke-width="2">
        <path d="M170 640H510V520H760V640H1120" />
        <path d="M250 640V400H370V640" />
        <path d="M370 400H560V300H760V400H980V640" />
        <path d="M560 300L640 220H860L940 300" />
        <path d="M980 640V420H1120V640" />
        <path d="M760 640V220" />
        <path d="M760 220L890 140H1090V220" />
        <path d="M620 520H900" />
        <path d="M220 700H1180" />
        <path d="M230 690V710M340 690V710M450 690V710M560 690V710M670 690V710M780 690V710M890 690V710M1000 690V710M1110 690V710" />
      </g>
      <g opacity="0.18" stroke="#d8e9ff" stroke-width="1.5">
        <path d="M1180 220H1450" />
        <path d="M1180 300H1510" />
        <path d="M1180 380H1410" />
        <path d="M1180 460H1490" />
        <path d="M120 160H420" />
        <path d="M120 240H360" />
        <path d="M120 320H450" />
      </g>
      <g opacity="0.08" fill="#9dc7ff">
        <circle cx="250" cy="400" r="6"/>
        <circle cx="370" cy="400" r="6"/>
        <circle cx="560" cy="300" r="6"/>
        <circle cx="760" cy="220" r="6"/>
        <circle cx="940" cy="300" r="6"/>
        <circle cx="980" cy="420" r="6"/>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function ServicePage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getT(params.locale);
  const card = t.services.cards.find((c) => c.slug === params.slug);

  if (!card) return notFound();

  const isFabrication = card.slug === "fabrication";
  const img = SERVICE_IMAGE_BY_SLUG[card.slug] ?? HERO_BG;
  const process = getProcess(params.locale);
  const regions = getRegions(params.locale);
  const lead = getLeadBySlug(card.slug, params.locale);
  const seoText = getSeoText(card.slug, params.locale);
  const blueprintBg = getFabricationBlueprintDataUri();

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
            minHeight: isFabrication ? 420 : 520,
            background: isFabrication ? "#08111b" : "#090d12",
          }}
        >
          {isFabrication ? (
            <>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url("${blueprintBg}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.92,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(900px 420px at 20% 10%, rgba(255,196,0,0.07), transparent 55%), linear-gradient(180deg, rgba(5,10,16,0.12) 0%, rgba(5,10,16,0.30) 55%, rgba(6,10,16,0.92) 100%)",
                  pointerEvents: "none",
                }}
              />
            </>
          ) : (
            <>
              <Image
                src={img}
                alt={card.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.26) 48%, rgba(8,11,15,0.88) 100%)",
                  pointerEvents: "none",
                }}
              />
            </>
          )}
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
              : "Send us your request, task description or drawings. We will review the scope, clarify details and suggest the next step."}
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