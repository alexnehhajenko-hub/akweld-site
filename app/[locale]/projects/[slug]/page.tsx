import Link from "next/link";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

const CONTACT_EMAIL = "info@akweldsteel.com";

type ProjectContent = {
  title: string;
  lead: string;
  scopeTitle: string;
  scopeText: string;
  includesTitle: string;
  includesItems: string[];
  resultTitle: string;
  resultText: string;
};

const PROJECT_CONTENT_RU: Record<string, ProjectContent> = {
  "industrial-platforms": {
    title: "Промышленные площадки",
    lead:
      "Изготовление, сборка и подготовка промышленных площадок, переходов, рабочих зон и обслуживающих конструкций.",
    scopeTitle: "Что можем сделать",
    scopeText:
      "Берём в работу изготовление металлоконструкций для промышленных площадок, подготовку элементов, узловую сборку, подгонку и монтаж на объекте.",
    includesTitle: "Что обычно входит",
    includesItems: [
      "несущие рамы и опорные элементы",
      "рабочие площадки и проходы",
      "лестницы, ограждения и защитные элементы",
      "подготовка деталей по размерам и чертежам",
    ],
    resultTitle: "По итогу",
    resultText:
      "Вы получаете понятную по объёму и назначению металлическую площадку, подготовленную под производство, обслуживание или монтажное использование.",
  },
  "staircases-railings": {
    title: "Лестницы и ограждения",
    lead:
      "Изготовление и монтаж стальных лестниц, перил, ограждений и защитных конструкций для объектов и производственных площадок.",
    scopeTitle: "Что можем сделать",
    scopeText:
      "Изготавливаем лестницы и ограждения по проектным размерам, под задачи производства, склада, объекта, технических зон и внешних площадок.",
    includesTitle: "Что обычно входит",
    includesItems: [
      "марши и площадки лестниц",
      "перила, поручни и ограждения",
      "защитные рамки и барьеры",
      "подгонка, сборка и монтаж на месте",
    ],
    resultTitle: "По итогу",
    resultText:
      "Получается готовое решение для безопасного прохода и обслуживания объекта с понятной геометрией и аккуратной сборкой.",
  },
  "steel-frames": {
    title: "Металлокаркасы",
    lead:
      "Каркасы, несущие рамы и металлические элементы для строительных, производственных и технических задач.",
    scopeTitle: "Что можем сделать",
    scopeText:
      "Изготавливаем и собираем металлокаркасы под объект, оборудование, технические помещения, производственные зоны и нестандартные конструкции.",
    includesTitle: "Что обычно входит",
    includesItems: [
      "основные несущие элементы",
      "узлы крепления и стыковки",
      "подготовка под дальнейший монтаж",
      "сборка и корректировка по месту",
    ],
    resultTitle: "По итогу",
    resultText:
      "Вы получаете каркас или несущую конструкцию, подготовленную под дальнейшую сборку, обшивку, установку оборудования или эксплуатацию.",
  },
  "supports-brackets": {
    title: "Опоры и кронштейны",
    lead:
      "Изготовление опор, крепёжных рам, кронштейнов и деталей по проектным размерам и техническим требованиям.",
    scopeTitle: "Что можем сделать",
    scopeText:
      "Делаем как типовые, так и нестандартные опоры и кронштейны для металлоконструкций, оборудования, трубных линий и монтажных задач.",
    includesTitle: "Что обычно входит",
    includesItems: [
      "опорные детали и закладные элементы",
      "кронштейны и крепёжные решения",
      "изготовление по размерам и схеме",
      "подготовка под установку на объекте",
    ],
    resultTitle: "По итогу",
    resultText:
      "Получаются готовые детали и опоры, которые можно ставить в проект без лишней доработки на месте.",
  },
  "repair-works": {
    title: "Ремонтные работы",
    lead:
      "Ремонт, усиление и доработка существующих металлоконструкций на объекте или в производстве.",
    scopeTitle: "Что можем сделать",
    scopeText:
      "Разбираем текущее состояние конструкции, усиливаем слабые места, меняем повреждённые элементы и подготавливаем металл под дальнейшую работу.",
    includesTitle: "Что обычно входит",
    includesItems: [
      "ремонт существующих узлов",
      "усиление металлоконструкций",
      "замена повреждённых деталей",
      "доработка под новые требования проекта",
    ],
    resultTitle: "По итогу",
    resultText:
      "Вы получаете восстановленную или усиленную конструкцию, которую можно дальше безопасно использовать в проекте.",
  },
  "workforce-projects": {
    title: "Проекты с персоналом",
    lead:
      "Поддержка проектов сварщиками, слесарями и монтажными бригадами для цеха и работы на объекте.",
    scopeTitle: "Что можем сделать",
    scopeText:
      "Подключаем специалистов для изготовления, сборки, монтажа, подгонки, ремонтных и производственных задач по вашему объёму работ.",
    includesTitle: "Что обычно входит",
    includesItems: [
      "сварщики для производства и объекта",
      "слесари и сборщики металлоконструкций",
      "монтажники для площадок и рам",
      "усиление команды под срок и объём проекта",
    ],
    resultTitle: "По итогу",
    resultText:
      "Вы получаете рабочую поддержку под конкретный проект, когда нужно быстро усилить производство или монтаж на объекте.",
  },
};

const PROJECT_CONTENT_EN: Record<string, ProjectContent> = {
  "industrial-platforms": {
    title: "Industrial platforms",
    lead:
      "Fabrication, assembly and preparation of industrial platforms, walkways, work zones and access structures.",
    scopeTitle: "What we can do",
    scopeText:
      "We handle steel fabrication for industrial platforms, element preparation, assembly work, fitting and on-site installation.",
    includesTitle: "What is typically included",
    includesItems: [
      "load-bearing frames and support elements",
      "working platforms and walkways",
      "stairs, railings and safety elements",
      "parts prepared by dimensions and drawings",
    ],
    resultTitle: "Result",
    resultText:
      "You get a clear and practical steel platform solution prepared for production, maintenance or installation use.",
  },
  "staircases-railings": {
    title: "Staircases and railings",
    lead:
      "Fabrication and installation of steel staircases, railings and protective structures for sites and industrial use.",
    scopeTitle: "What we can do",
    scopeText:
      "We fabricate staircases and railings by project dimensions for production areas, warehouses, sites, technical zones and external access points.",
    includesTitle: "What is typically included",
    includesItems: [
      "stair flights and landings",
      "railings, handrails and guard systems",
      "protective frames and barriers",
      "fitting, assembly and on-site installation",
    ],
    resultTitle: "Result",
    resultText:
      "You get a ready steel solution for safe access and service with clear geometry and solid assembly.",
  },
  "steel-frames": {
    title: "Steel frames",
    lead:
      "Steel frames, load-bearing structures and support elements for construction, industrial and technical projects.",
    scopeTitle: "What we can do",
    scopeText:
      "We fabricate and assemble steel frames for buildings, equipment, technical rooms, industrial zones and non-standard structures.",
    includesTitle: "What is typically included",
    includesItems: [
      "main load-bearing elements",
      "connection and fixing points",
      "preparation for further installation",
      "assembly and fitting on site",
    ],
    resultTitle: "Result",
    resultText:
      "You get a frame or supporting steel structure prepared for further installation, cladding, equipment placement or operation.",
  },
  "supports-brackets": {
    title: "Supports and brackets",
    lead:
      "Fabrication of supports, brackets, fixing frames and steel details according to project dimensions and requirements.",
    scopeTitle: "What we can do",
    scopeText:
      "We produce both standard and custom supports and brackets for steel structures, equipment, piping lines and installation tasks.",
    includesTitle: "What is typically included",
    includesItems: [
      "support details and embedded elements",
      "brackets and fixing solutions",
      "fabrication by dimensions and scheme",
      "preparation for on-site installation",
    ],
    resultTitle: "Result",
    resultText:
      "You get ready supports and steel details that can be installed in the project without unnecessary extra work on site.",
  },
  "repair-works": {
    title: "Repair works",
    lead:
      "Repair, reinforcement and modification of existing steel structures in production or on site.",
    scopeTitle: "What we can do",
    scopeText:
      "We review the existing condition of the structure, reinforce weak areas, replace damaged parts and prepare the steel for further use.",
    includesTitle: "What is typically included",
    includesItems: [
      "repair of existing nodes",
      "reinforcement of steel structures",
      "replacement of damaged parts",
      "modification for updated project needs",
    ],
    resultTitle: "Result",
    resultText:
      "You get a repaired or reinforced structure that can be safely used further in the project.",
  },
  "workforce-projects": {
    title: "Workforce projects",
    lead:
      "Project support with welders, fitters and installation crews for workshop and site work.",
    scopeTitle: "What we can do",
    scopeText:
      "We provide specialists for fabrication, fitting, installation, repair and production support according to your project volume.",
    includesTitle: "What is typically included",
    includesItems: [
      "welders for workshop and site work",
      "fitters and steel assembly workers",
      "installers for platforms and frames",
      "extra workforce for deadlines and project volume",
    ],
    resultTitle: "Result",
    resultText:
      "You get practical workforce support when you need to strengthen production or installation capacity quickly.",
  },
};

function isRu(locale: Locale) {
  return locale === "ru";
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const ru = isRu(params.locale);
  const t = getT(params.locale);
  const content = ru
    ? PROJECT_CONTENT_RU[params.slug]
    : PROJECT_CONTENT_EN[params.slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {ru ? "На главную" : "Home"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {ru ? "Проекты" : "Projects"}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {ru ? "Услуги" : "Services"}
        </Link>
      </div>

      <section className="heroCard">
        <h1 className="heroTitle" style={{ maxWidth: "none" }}>
          {content.title}
        </h1>

        <p className="heroText" style={{ maxWidth: "none" }}>
          {content.lead}
        </p>

        <div className="heroActions">
          <Link className="btn" href={`/${params.locale}/contact`}>
            {ru ? "Запросить цену" : "Get a quote"}
          </Link>
          <Link className="btnGhost" href={`/${params.locale}/projects`}>
            {ru ? "Все проекты" : "All projects"}
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>{content.scopeTitle}</h2>
            <p style={{ marginTop: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.82)" }}>
              {content.scopeText}
            </p>
          </div>

          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 22 }}>{content.resultTitle}</h2>
            <p style={{ marginTop: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.82)" }}>
              {content.resultText}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {content.includesTitle}
          </h2>

          <div className="cards">
            {content.includesItems.map((item) => (
              <div key={item} className="card" style={{ minHeight: "unset" }}>
                <p style={{ margin: 0, lineHeight: 1.7, color: "rgba(255,255,255,0.84)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ru ? "Следующий шаг" : "Next step"}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {ru
              ? "Если вам нужен похожий объём работ, отправьте нам описание задачи, чертёж, PDF или фотографии через форму запроса. Мы посмотрим объём и вернёмся с ответом."
              : "If you need similar work, send us your task description, drawing, PDF or photos through the request form. We will review the scope and come back to you."}
          </p>

          <div className="heroActions">
            <Link className="btn" href={`/${params.locale}/contact`}>
              {t.common.getQuote}
            </Link>
            <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
              Email: {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
