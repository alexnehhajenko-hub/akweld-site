import Link from "next/link";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";

const SLUG_ORDER = [
  "industrial-platforms",
  "staircases-railings",
  "steel-frames",
  "supports-brackets",
  "repair-works",
  "workforce-projects",
];

function isRu(locale: Locale) {
  return locale === "ru";
}

function getLeadBySlug(slug: string, locale: Locale) {
  const ru = isRu(locale);

  switch (slug) {
    case "industrial-platforms":
      return ru
        ? "Проекты промышленных площадок, металлоконструкций и рабочих зон: изготовление, сборка, подгонка и подготовка к монтажу."
        : "Industrial platform and steel structure projects: fabrication, assembly, fitting and preparation for installation.";
    case "staircases-railings":
      return ru
        ? "Лестницы, перила и ограждения для объектов, производственных площадок и частных заказов."
        : "Stairs, railings and guard systems for sites, industrial facilities and private orders.";
    case "steel-frames":
      return ru
        ? "Каркасы, рамы и несущие металлоконструкции для производственных и строительных задач."
        : "Steel frames and load-bearing structures for industrial and construction work.";
    case "supports-brackets":
      return ru
        ? "Опоры, кронштейны и вспомогательные элементы под конкретные размеры и требования проекта."
        : "Supports, brackets and secondary steel parts made to project dimensions and requirements.";
    case "repair-works":
      return ru
        ? "Ремонт, усиление и доработка существующих металлоконструкций на объекте и в цеху."
        : "Repair, reinforcement and modification of existing steel structures on site and in workshop.";
    case "workforce-projects":
      return ru
        ? "Проекты, где ключевую роль играет квалифицированная бригада: сварщики, слесари и монтажники."
        : "Projects where qualified crews matter most: welders, fitters and installers.";
    default:
      return ru
        ? "Проекты по металлоконструкциям для Эстонии, Швеции и Скандинавии."
        : "Steel structure projects for Estonia, Sweden and Scandinavia.";
  }
}

function getScopeBySlug(slug: string, locale: Locale) {
  const ru = isRu(locale);

  switch (slug) {
    case "industrial-platforms":
      return ru
        ? [
            "Подготовка металлоконструкций по чертежам и размерам.",
            "Сборка элементов и проверка геометрии.",
            "Подготовка к монтажу и отгрузке.",
            "Согласование объёма, сроков и деталей проекта.",
          ]
        : [
            "Preparation of steel structures by drawings and dimensions.",
            "Assembly of elements and geometry checks.",
            "Preparation for installation and delivery.",
            "Coordination of scope, timing and project details.",
          ];
    case "staircases-railings":
      return ru
        ? [
            "Изготовление лестничных элементов и перил.",
            "Подгонка под размеры объекта.",
            "Подготовка узлов, стоек и креплений.",
            "Монтажная готовность и аккуратная финишная обработка.",
          ]
        : [
            "Fabrication of stairs and railing elements.",
            "Fitting to site dimensions.",
            "Preparation of joints, posts and connections.",
            "Installation-ready finish and clean detailing.",
          ];
    case "steel-frames":
      return ru
        ? [
            "Сборка рам и каркасов.",
            "Контроль размеров и узлов.",
            "Подготовка под монтаж или дальнейшую комплектацию.",
            "Работа по проектной документации.",
          ]
        : [
            "Assembly of steel frames and structural sections.",
            "Control of dimensions and joints.",
            "Preparation for installation or further completion.",
            "Work based on project documentation.",
          ];
    case "supports-brackets":
      return ru
        ? [
            "Изготовление опор и кронштейнов по задаче.",
            "Подбор формы и размеров под проект.",
            "Подготовка серийных или индивидуальных позиций.",
            "Аккуратная сборка и контроль качества.",
          ]
        : [
            "Fabrication of supports and brackets for project needs.",
            "Adjustment of shapes and dimensions to specification.",
            "Preparation of serial or custom parts.",
            "Clean assembly and quality control.",
          ];
    case "repair-works":
      return ru
        ? [
            "Осмотр и оценка текущего состояния конструкции.",
            "Ремонт, усиление или переделка узлов.",
            "Подгонка под новые требования объекта.",
            "Работа на месте или в цеху — по ситуации.",
          ]
        : [
            "Inspection and condition assessment of the structure.",
            "Repair, reinforcement or rework of steel joints.",
            "Adjustment to new site requirements.",
            "Work on site or in workshop depending on the task.",
          ];
    case "workforce-projects":
      return ru
        ? [
            "Подбор сварщиков, слесарей и монтажников под задачу.",
            "Работа на объекте или в производстве.",
            "Гибкое подключение персонала под объём.",
            "Поддержка проектов в Эстонии и Швеции.",
          ]
        : [
            "Selection of welders, fitters and installers for the task.",
            "Work on site or in production.",
            "Flexible workforce support based on scope.",
            "Project support in Estonia and Sweden.",
          ];
    default:
      return ru
        ? ["Проект по металлоконструкциям.", "Изготовление.", "Сборка.", "Подготовка к работе."]
        : ["Steel structure project.", "Fabrication.", "Assembly.", "Preparation for work."];
  }
}

function getProcess(locale: Locale) {
  return isRu(locale)
    ? [
        "Получаем задачу, чертежи, размеры или фото.",
        "Уточняем объём, сроки, материалы и условия объекта.",
        "Согласовываем формат работы: изготовление, монтаж, ремонт или персонал.",
        "Выполняем проект и держим связь по ходу работ.",
      ]
    : [
        "We receive the task, drawings, dimensions or photos.",
        "We clarify scope, timing, materials and site conditions.",
        "We agree the format: fabrication, installation, repair or workforce.",
        "We complete the project and keep communication clear during the work.",
      ];
}

function getSeoText(slug: string, locale: Locale) {
  const ru = isRu(locale);

  switch (slug) {
    case "industrial-platforms":
      return ru
        ? "Этот проектный тип подходит для заказчиков, которым нужны промышленные площадки, металлоконструкции и рабочие зоны под конкретные размеры и условия эксплуатации. Для SEO важно, чтобы страница проекта показывала понятное описание работ: что изготовили, где применяли, какой был объём и как организован процесс."
        : "This project type is suitable for clients who need industrial platforms, steel structures and working zones built to real dimensions and site conditions. For SEO, a project page should show a clear description of the work scope, use case and project process.";
    case "staircases-railings":
      return ru
        ? "Проекты лестниц и перил часто ищут по конкретным запросам, связанным с изготовлением металлоконструкций, ограждений и монтажом под объект. Поэтому страница должна объяснять: какие элементы делались, как проходила сборка и что получил заказчик."
        : "Stair and railing projects are often searched through specific fabrication and installation queries. That is why the page should clearly explain what was built, how it was assembled and what the client received.";
    case "steel-frames":
      return ru
        ? "Каркасы и рамы — это базовая часть многих строительных и производственных решений. Для продвижения важно, чтобы такая страница показывала уверенность в работе по чертежам, точность сборки и понимание несущих элементов."
        : "Steel frames are a core part of many industrial and construction solutions. For promotion, this page should communicate confidence in working by drawings, assembly accuracy and understanding of structural elements.";
    case "supports-brackets":
      return ru
        ? "Опоры и кронштейны часто важны для заказчиков, которым нужны индивидуальные решения под размеры, оборудование или монтажные условия. Здесь важно показать точность, повторяемость и аккуратное исполнение."
        : "Supports and brackets are often important for clients who need individual solutions for exact dimensions, equipment or installation conditions. This page should highlight precision, repeatability and clean execution.";
    case "repair-works":
      return ru
        ? "Ремонтные проекты по металлоконструкциям важны там, где нельзя менять всё заново, но нужно быстро усилить, исправить или доработать существующую конструкцию."
        : "Repair projects matter when a full replacement is not needed, but an existing steel structure must be reinforced, corrected or adapted quickly.";
    case "workforce-projects":
      return ru
        ? "Часть проектов решается не только за счёт производства, но и за счёт сильной рабочей команды. Здесь важно показывать, что компания может подключать сварщиков, слесарей и монтажников под конкретный объём работ."
        : "Some projects are solved not only through production capacity, but through strong skilled crews. This page should show that the company can provide welders, fitters and installers for a defined scope of work.";
    default:
      return ru
        ? "Проекты по металлоконструкциям для Эстонии и Швеции."
        : "Steel structure projects for Estonia and Sweden.";
  }
}

function getProjectBlueprintDataUri() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" fill="none">
      <rect width="1600" height="900" fill="#09111b"/>
      <g opacity="0.16" stroke="#9dc7ff" stroke-width="1">
        <path d="M0 90H1600M0 180H1600M0 270H1600M0 360H1600M0 450H1600M0 540H1600M0 630H1600M0 720H1600M0 810H1600"/>
        <path d="M160 0V900M320 0V900M480 0V900M640 0V900M800 0V900M960 0V900M1120 0V900M1280 0V900M1440 0V900"/>
      </g>
      <g opacity="0.22" stroke="#6ea8ff" stroke-width="2">
        <path d="M160 650H520V520H790V650H1150" />
        <path d="M260 650V420H380V650" />
        <path d="M380 420H570V320H790V420H1010V650" />
        <path d="M570 320L660 230H900L990 320" />
        <path d="M790 650V230" />
        <path d="M1060 260H1460" />
        <path d="M1060 340H1510" />
        <path d="M1060 420H1410" />
        <path d="M210 720H1180" />
      </g>
      <g opacity="0.14" stroke="#d8e9ff" stroke-width="1.5">
        <path d="M120 160H420" />
        <path d="M120 240H360" />
        <path d="M120 320H450" />
        <path d="M1180 520H1470" />
        <path d="M1180 600H1420" />
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getT(params.locale);
  const idx = SLUG_ORDER.indexOf(params.slug);

  if (idx === -1) return notFound();

  const safeItem = t.projects.items[idx] ?? t.projects.items[0];
  const lead = getLeadBySlug(params.slug, params.locale);
  const scope = getScopeBySlug(params.slug, params.locale);
  const process = getProcess(params.locale);
  const seoText = getSeoText(params.slug, params.locale);
  const blueprintBg = getProjectBlueprintDataUri();

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {isRu(params.locale) ? "На главную" : "Home"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {isRu(params.locale) ? "Все проекты" : "All projects"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {isRu(params.locale) ? "Услуги" : "Services"}
        </Link>
      </div>

      <section className="heroCard" style={{ padding: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: 420,
            background: "#08111b",
          }}
        >
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
        </div>

        <div style={{ padding: 24 }}>
          <h1 className="heroTitle" style={{ maxWidth: "none" }}>
            {safeItem.title}
          </h1>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {lead}
          </p>

          <div className="heroActions">
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
              {isRu(params.locale) ? "Что делали" : "Scope of work"}
            </h2>
            <ul
              style={{
                margin: "14px 0 0",
                paddingLeft: 18,
                color: "rgba(255,255,255,0.80)",
                lineHeight: 1.7,
              }}
            >
              {scope.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 20 }}>
              {isRu(params.locale) ? "Как шёл проект" : "How the project was handled"}
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
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {isRu(params.locale) ? "Описание проекта" : "Project overview"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {safeItem.text}
          </p>

          <p style={{ marginTop: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.80)" }}>
            {seoText}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {isRu(params.locale)
              ? "Нужен похожий проект?"
              : "Need a similar project?"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {isRu(params.locale)
              ? "Если вам нужен похожий объём работ, изготовление металлоконструкций, монтаж или рабочая бригада, отправьте запрос и мы обсудим задачу."
              : "If you need similar work scope, steel fabrication, installation or a project crew, send us a request and we will discuss the task."}
          </p>

          <div className="heroActions">
            <Link className="btn" href={`/${params.locale}/contact`}>
              {isRu(params.locale) ? "Запросить цену" : "Get a quote"}
            </Link>
            <Link className="btnGhost" href={`/${params.locale}/services`}>
              {isRu(params.locale) ? "Посмотреть услуги" : "View services"}
            </Link>
            <Link className="btnGhost" href={`/${params.locale}/projects`}>
              {isRu(params.locale) ? "Другие проекты" : "Other projects"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}