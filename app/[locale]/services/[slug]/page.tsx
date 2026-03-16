import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getT, type Locale } from "@/src/i18n";

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

function getUi(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        home: "На главную",
        allServices: "Все услуги",
        projects: "Проекты",
        getQuote: "Запросить цену",
        included: "Что входит",
        process: "Как работаем",
        regions: "Где работаем",
        overview: "Описание услуги",
        ctaTitle: "Нужен расчёт или обсуждение проекта?",
        ctaText:
          "Отправьте запрос, описание задачи или чертежи. Мы посмотрим объём, уточним детали и предложим следующий шаг.",
        viewProjects: "Посмотреть проекты",
        otherServices: "Другие услуги",
      };
    case "sv":
      return {
        home: "Hem",
        allServices: "Alla tjänster",
        projects: "Projekt",
        getQuote: "Begär offert",
        included: "Vad som ingår",
        process: "Hur vi arbetar",
        regions: "Var vi arbetar",
        overview: "Beskrivning av tjänsten",
        ctaTitle: "Behöver ni en offert eller vill diskutera projektet?",
        ctaText:
          "Skicka oss er förfrågan, arbetsbeskrivning eller ritningar. Vi går igenom omfattningen, klargör detaljerna och föreslår nästa steg.",
        viewProjects: "Visa projekt",
        otherServices: "Andra tjänster",
      };
    case "no":
      return {
        home: "Hjem",
        allServices: "Alle tjenester",
        projects: "Prosjekter",
        getQuote: "Be om tilbud",
        included: "Hva som inngår",
        process: "Hvordan vi arbeider",
        regions: "Hvor vi arbeider",
        overview: "Beskrivelse av tjenesten",
        ctaTitle: "Trenger dere et tilbud eller vil diskutere prosjektet?",
        ctaText:
          "Send oss forespørselen, arbeidsbeskrivelsen eller tegningene deres. Vi går gjennom omfanget, avklarer detaljene og foreslår neste steg.",
        viewProjects: "Se prosjekter",
        otherServices: "Andre tjenester",
      };
    case "da":
      return {
        home: "Hjem",
        allServices: "Alle ydelser",
        projects: "Projekter",
        getQuote: "Få et tilbud",
        included: "Hvad der indgår",
        process: "Hvordan vi arbejder",
        regions: "Hvor vi arbejder",
        overview: "Beskrivelse af ydelsen",
        ctaTitle: "Har I brug for et tilbud eller vil I drøfte projektet?",
        ctaText:
          "Send os jeres forespørgsel, arbejdsbeskrivelse eller tegninger. Vi gennemgår omfanget, afklarer detaljerne og foreslår næste skridt.",
        viewProjects: "Se projekter",
        otherServices: "Andre ydelser",
      };
    case "fi":
      return {
        home: "Etusivu",
        allServices: "Kaikki palvelut",
        projects: "Projektit",
        getQuote: "Pyydä tarjous",
        included: "Mitä sisältyy",
        process: "Miten työskentelemme",
        regions: "Missä työskentelemme",
        overview: "Palvelun kuvaus",
        ctaTitle: "Tarvitsetteko tarjouksen tai haluatteko keskustella projektista?",
        ctaText:
          "Lähettäkää meille pyyntö, työn kuvaus tai piirustukset. Käymme laajuuden läpi, tarkennamme yksityiskohdat ja ehdotamme seuraavaa askelta.",
        viewProjects: "Katso projektit",
        otherServices: "Muut palvelut",
      };
    case "et":
      return {
        home: "Avaleht",
        allServices: "Kõik teenused",
        projects: "Projektid",
        getQuote: "Küsi pakkumist",
        included: "Mis sisaldub",
        process: "Kuidas me töötame",
        regions: "Kus me töötame",
        overview: "Teenuse kirjeldus",
        ctaTitle: "Kas vajate hinnapakkumist või soovite projekti arutada?",
        ctaText:
          "Saatke meile päring, töö kirjeldus või joonised. Vaatame mahu üle, täpsustame detailid ja pakume järgmise sammu.",
        viewProjects: "Vaata projekte",
        otherServices: "Teised teenused",
      };
    case "en":
    default:
      return {
        home: "Home",
        allServices: "All services",
        projects: "Projects",
        getQuote: "Get a quote",
        included: "What’s included",
        process: "How we work",
        regions: "Where we work",
        overview: "Service overview",
        ctaTitle: "Need an estimate or want to discuss the project?",
        ctaText:
          "Send us your request, task description or drawings. We will review the scope, clarify details and suggest the next step.",
        viewProjects: "View projects",
        otherServices: "Other services",
      };
  }
}

function getLeadBySlug(slug: string, locale: Locale) {
  switch (locale) {
    case "ru":
      switch (slug) {
        case "fabrication":
          return "Изготавливаем металлоконструкции по чертежам и размерам: рамы, площадки, лестницы, опоры, нестандартные узлы и детали.";
        case "installation":
          return "Выполняем монтаж металлоконструкций на объекте: сборка, подгонка, выверка, контроль и сдача работ.";
        case "workforce":
          return "Предоставляем сварщиков, слесарей и монтажников для цеха и объекта на короткий или длительный срок.";
        case "repairs":
          return "Делаем ремонт, усиление и доработки существующих металлоконструкций на объекте и в цеху.";
        case "capacity":
          return "Поддерживаем регулярные заказы, серийные партии и загрузку по производству с понятными сроками.";
        case "custom":
          return "Берёмся за нестандартные задачи, сложные детали и индивидуальные проекты с понятным объёмом работ.";
        default:
          return "Работаем с металлоконструкциями для проектов в Эстонии, Швеции и по Скандинавии.";
      }
    case "sv":
      switch (slug) {
        case "fabrication":
          return "Vi tillverkar stålkonstruktioner enligt ritningar och mått: ramar, plattformar, trappor, stöd och specialdetaljer.";
        case "installation":
          return "Vi utför montage av stålkonstruktioner på plats: sammanställning, inpassning, uppriktning, kontroll och överlämning.";
        case "workforce":
          return "Vi tillhandahåller svetsare, stålarbetare och montörer för verkstad och plats på kort eller lång sikt.";
        case "repairs":
          return "Vi utför reparationer, förstärkningar och modifieringar av befintliga stålkonstruktioner på plats och i verkstad.";
        case "capacity":
          return "Vi stödjer återkommande beställningar, serier och stabil produktionsbelastning med tydliga tidsplaner.";
        case "custom":
          return "Vi tar oss an specialuppdrag, svåra detaljer och individuella projekt med tydligt arbetsomfång.";
        default:
          return "Vi arbetar med stålkonstruktioner för projekt i Estland, Sverige och hela Skandinavien.";
      }
    case "no":
      switch (slug) {
        case "fabrication":
          return "Vi produserer stålkonstruksjoner etter tegninger og mål: rammer, plattformer, trapper, støtter og spesialdeler.";
        case "installation":
          return "Vi utfører montering av stålkonstruksjoner på stedet: sammenstilling, tilpasning, oppretting, kontroll og overlevering.";
        case "workforce":
          return "Vi stiller med sveisere, stålarbeidere og montører til verksted og byggeplass på kort eller lang sikt.";
        case "repairs":
          return "Vi utfører reparasjoner, forsterkning og endringer av eksisterende stålkonstruksjoner på stedet og i verksted.";
        case "capacity":
          return "Vi støtter gjentatte bestillinger, serier og stabil produksjonsbelastning med tydelige tidsfrister.";
        case "custom":
          return "Vi tar på oss spesialoppdrag, krevende detaljer og individuelle prosjekter med tydelig arbeidsomfang.";
        default:
          return "Vi arbeider med stålkonstruksjoner for prosjekter i Estland, Sverige og resten av Skandinavia.";
      }
    case "da":
      switch (slug) {
        case "fabrication":
          return "Vi fremstiller stålkonstruktioner efter tegninger og mål: rammer, platforme, trapper, støtter og specialdetaljer.";
        case "installation":
          return "Vi udfører montage af stålkonstruktioner på stedet: samling, tilpasning, opretning, kontrol og aflevering.";
        case "workforce":
          return "Vi stiller med svejsere, stålarbejdere og montører til værksted og byggeplads på kort eller lang sigt.";
        case "repairs":
          return "Vi udfører reparationer, forstærkning og ændringer af eksisterende stålkonstruktioner på stedet og i værksted.";
        case "capacity":
          return "Vi støtter gentagne ordrer, serier og stabil produktionsbelastning med tydelige tidsplaner.";
        case "custom":
          return "Vi tager os af specialopgaver, krævende detaljer og individuelle projekter med klart arbejdsomfang.";
        default:
          return "Vi arbejder med stålkonstruktioner til projekter i Estland, Sverige og resten af Skandinavien.";
      }
    case "fi":
      switch (slug) {
        case "fabrication":
          return "Valmistamme teräsrakenteita piirustusten ja mittojen mukaan: runkoja, tasoja, portaita, tukia ja erikoisosia.";
        case "installation":
          return "Suoritamme teräsrakenteiden asennusta työmaalla: kokoonpano, sovitus, linjaus, tarkastus ja luovutus.";
        case "workforce":
          return "Tarjoamme hitsareita, teräsrakentajia ja asentajia verstaisiin ja työmaille lyhyeksi tai pitkäksi ajaksi.";
        case "repairs":
          return "Teemme olemassa olevien teräsrakenteiden korjauksia, vahvistuksia ja muutoksia työmaalla ja verstaassa.";
        case "capacity":
          return "Tuemme toistuvia tilauksia, sarjoja ja vakaata tuotantokuormaa selkeillä aikatauluilla.";
        case "custom":
          return "Otamme vastaan erikoistehtäviä, vaativia osia ja yksilöllisiä projekteja selkeällä työlaajuudella.";
        default:
          return "Työskentelemme teräsrakenteiden parissa projekteissa Virossa, Ruotsissa ja koko Skandinaviassa.";
      }
    case "et":
      switch (slug) {
        case "fabrication":
          return "Valmistame metallkonstruktsioone jooniste ja mõõtude järgi: raamid, platvormid, trepid, toed ja eridetailid.";
        case "installation":
          return "Teostame metallkonstruktsioonide paigaldust objektil: koostamine, sobitamine, joondamine, kontroll ja üleandmine.";
        case "workforce":
          return "Pakume keevitajaid, terasetöölisi ja paigaldajaid töökotta ning objektile lühikeseks või pikaks ajaks.";
        case "repairs":
          return "Teeme olemasolevate metallkonstruktsioonide remonti, tugevdamist ja muudatusi objektil ja töökojas.";
        case "capacity":
          return "Toetame korduvaid tellimusi, seeriatootmist ja stabiilset tootmiskoormust selgete tähtaegadega.";
        case "custom":
          return "Võtame vastu erilahendusi, keerukaid detaile ja individuaalseid projekte selge töömahuga.";
        default:
          return "Töötame metallkonstruktsioonidega projektides Eestis, Rootsis ja kogu Skandinaavias.";
      }
    case "en":
    default:
      switch (slug) {
        case "fabrication":
          return "We fabricate steel structures by drawings and dimensions: frames, platforms, stairs, supports and custom steel parts.";
        case "installation":
          return "We install steel structures on site: assembly, fitting, alignment, control and handover.";
        case "workforce":
          return "We provide welders, fitters and installers for workshop and site work on short-term and long-term basis.";
        case "repairs":
          return "We handle repairs, reinforcement and modifications of existing steel structures on site and in workshop.";
        case "capacity":
          return "We support recurring orders, serial production and stable workshop capacity with clear timelines.";
        case "custom":
          return "We handle custom requests, difficult parts and individual steel projects with clear scope and timing.";
        default:
          return "We work with steel structures for projects in Estonia, Sweden and across Scandinavia.";
      }
  }
}

function getProcessBySlug(slug: string, locale: Locale) {
  switch (locale) {
    case "ru":
      switch (slug) {
        case "fabrication":
          return [
            "Получаем чертежи, размеры, спецификацию или описание задачи.",
            "Уточняем материалы, объём, сроки изготовления и требования к деталям.",
            "Запускаем изготовление, сборку и контроль по проекту.",
            "Подготавливаем конструкции к отгрузке, монтажу или следующему этапу работ.",
          ];
        case "installation":
          return [
            "Получаем информацию по объекту, чертежи и условия площадки.",
            "Уточняем объём монтажа, доступ, технику, график и требования безопасности.",
            "Выходим на объект и выполняем сборку, подгонку и выверку конструкций.",
            "Проводим финальную проверку и сдаём согласованный объём работ.",
          ];
        case "workforce":
          return [
            "Получаем запрос: сколько людей нужно, на какой срок и под какие задачи.",
            "Подбираем сварщиков, слесарей или монтажников под объект или цех.",
            "Согласовываем старт, график, объём работ и формат подключения.",
            "Люди выходят в проект и работают по согласованной задаче.",
          ];
        case "repairs":
          return [
            "Получаем описание проблемы, фото, чертежи или информацию по объекту.",
            "Оцениваем текущее состояние конструкции и объём необходимых доработок.",
            "Согласовываем способ ремонта, усиления или переделки и сроки выполнения.",
            "Выполняем работы на объекте или в цеху и доводим конструкцию до рабочего состояния.",
          ];
        case "capacity":
          return [
            "Получаем информацию по регулярной загрузке, партиям и срокам поставки.",
            "Уточняем объём, повторяемость изделий, материалы и требования к производству.",
            "Планируем изготовление под нужный ритм заказчика и согласованный график.",
            "Выпускаем партии, держим сроки и поддерживаем стабильную загрузку по заказам.",
          ];
        case "custom":
          return [
            "Получаем описание нестандартной задачи, размеры, фото или чертежи.",
            "Уточняем, что именно нужно изготовить, изменить или решить на объекте.",
            "Считаем объём работ, предлагаем практичное решение и согласовываем сроки.",
            "Выполняем задачу и доводим проект до понятного результата.",
          ];
        default:
          return [
            "Получаем запрос и основную информацию по задаче.",
            "Уточняем объём, сроки и формат работы.",
            "Согласовываем решение и порядок выполнения.",
            "Выполняем работу и держим связь по проекту.",
          ];
      }
    case "sv":
      return [
        "Vi får ritningar, mått, specifikation eller beskrivning av uppgiften.",
        "Vi klargör material, arbetsomfång, tidsplan och krav på detaljerna.",
        "Vi startar produktion, sammanställning eller montage enligt projektet.",
        "Vi förbereder resultatet för leverans, installation eller nästa projektsteg.",
      ];
    case "no":
      return [
        "Vi mottar tegninger, mål, spesifikasjon eller beskrivelse av oppgaven.",
        "Vi avklarer materialer, arbeidsomfang, tidsplan og krav til detaljene.",
        "Vi starter produksjon, sammenstilling eller montering i tråd med prosjektet.",
        "Vi forbereder resultatet for levering, installasjon eller neste prosjektfase.",
      ];
    case "da":
      return [
        "Vi modtager tegninger, mål, specifikation eller beskrivelse af opgaven.",
        "Vi afklarer materialer, arbejdsomfang, tidsplan og krav til detaljerne.",
        "Vi starter fremstilling, samling eller montage i overensstemmelse med projektet.",
        "Vi forbereder resultatet til levering, installation eller næste projektfase.",
      ];
    case "fi":
      return [
        "Saamme piirustukset, mitat, erittelyn tai tehtävän kuvauksen.",
        "Tarkennamme materiaalit, työlaajuuden, aikataulun ja osiin liittyvät vaatimukset.",
        "Aloitamme valmistuksen, kokoonpanon tai asennuksen projektin mukaisesti.",
        "Valmistelemme lopputuloksen toimitusta, asennusta tai seuraavaa projektivaihetta varten.",
      ];
    case "et":
      return [
        "Saame joonised, mõõdud, spetsifikatsiooni või ülesande kirjelduse.",
        "Täpsustame materjalid, töömahu, ajakava ja detailidele esitatavad nõuded.",
        "Alustame tootmist, koostamist või paigaldust vastavalt projektile.",
        "Valmistame tulemuse ette tarneks, paigalduseks või järgmise projektietapi jaoks.",
      ];
    case "en":
    default:
      switch (slug) {
        case "fabrication":
          return [
            "We receive drawings, dimensions, specifications or a task description.",
            "We clarify materials, scope, production timing and detail requirements.",
            "We start fabrication, assembly and control according to the project.",
            "We prepare the structures for delivery, installation or the next project stage.",
          ];
        case "installation":
          return [
            "We receive site information, drawings and project conditions.",
            "We clarify installation scope, access, lifting, schedule and safety requirements.",
            "We go to site and carry out assembly, fitting and alignment of the structures.",
            "We complete final checks and hand over the agreed scope of work.",
          ];
        case "workforce":
          return [
            "We review how many people are needed, for how long and for which tasks.",
            "We select welders, fitters or installers for the site or workshop.",
            "We agree the start date, schedule, work scope and engagement format.",
            "The team joins the project and works according to the agreed task.",
          ];
        case "repairs":
          return [
            "We receive a problem description, photos, drawings or site information.",
            "We assess the current condition of the structure and the required modifications.",
            "We agree the repair, reinforcement or rework method and the timing.",
            "We carry out the work on site or in workshop and bring the structure back into working condition.",
          ];
        case "capacity":
          return [
            "We receive information about recurring workload, batches and delivery timing.",
            "We clarify scope, repeatability of parts, materials and production requirements.",
            "We plan fabrication according to the client’s rhythm and agreed schedule.",
            "We produce the batches, keep timelines and support stable order flow.",
          ];
        case "custom":
          return [
            "We receive a description of the non-standard task, dimensions, photos or drawings.",
            "We clarify what exactly needs to be fabricated, changed or solved on site.",
            "We estimate the work scope, propose a practical solution and agree the timing.",
            "We complete the task and bring the project to a clear result.",
          ];
        default:
          return [
            "We receive the request and the basic project information.",
            "We clarify scope, timing and work format.",
            "We agree the solution and execution order.",
            "We complete the work and keep communication clear during the project.",
          ];
      }
  }
}

function getRegions(locale: Locale) {
  switch (locale) {
    case "ru":
      return [
        "Эстония — база, производство и часть объектов.",
        "Швеция — поддержка проектов и выездные работы.",
        "Скандинавия и Прибалтика — обсуждаем по проекту и объёму.",
      ];
    case "sv":
      return [
        "Estland — bas, verkstad och en del platsarbeten.",
        "Sverige — projektstöd och installationsarbeten.",
        "Skandinavien och Baltikum — diskuteras per projekt och omfattning.",
      ];
    case "no":
      return [
        "Estland — base, verksted og en del arbeid på stedet.",
        "Sverige — prosjektstøtte og installasjonsarbeid.",
        "Skandinavia og Baltikum — avtales per prosjekt og omfang.",
      ];
    case "da":
      return [
        "Estland — base, værksted og en del arbejde på stedet.",
        "Sverige — projektstøtte og installationsarbejde.",
        "Skandinavien og Baltikum — aftales efter projekt og omfang.",
      ];
    case "fi":
      return [
        "Viro — tukikohta, verstas ja osa työmaatyöstä.",
        "Ruotsi — projektituki ja asennustyöt.",
        "Skandinavia ja Baltia — sovitaan projektin ja laajuuden mukaan.",
      ];
    case "et":
      return [
        "Eesti — baas, töökoda ja osa objekti töid.",
        "Rootsi — projektitugi ja paigaldustööd.",
        "Skandinaavia ja Baltikum — arutame vastavalt projektile ja mahule.",
      ];
    case "en":
    default:
      return [
        "Estonia — base, workshop and part of site work.",
        "Sweden — project support and installation work.",
        "Scandinavia and Baltics — discussed per project and scope.",
      ];
  }
}

function getSeoText(slug: string, locale: Locale) {
  switch (locale) {
    case "ru":
      switch (slug) {
        case "fabrication":
          return "Изготовление металлоконструкций подходит для заказчиков, которым нужен понятный производственный процесс и работа по чертежам. Мы изготавливаем элементы для объектов, производственных площадок, лестниц, рам, опор и нестандартных изделий.";
        case "installation":
          return "Монтаж металлоконструкций включает сборку, подгонку, выверку и финальные работы на объекте. Мы можем отправить бригаду на площадку, работать по требованиям проекта и соблюдать согласованные сроки.";
        case "workforce":
          return "Аренда квалифицированного персонала подходит для проектов, где нужно быстро усилить бригаду на объекте или в цеху. Мы подключаем сварщиков, слесарей и монтажников под конкретный объём работ, согласованные сроки и реальные задачи заказчика.";
        case "repairs":
          return "Ремонт и доработки металлоконструкций нужны там, где важно быстро усилить, исправить или адаптировать уже существующее решение. Это может быть переделка узлов, усиление конструкции, исправление геометрии или доработка под новые требования.";
        case "capacity":
          return "Производственные мощности важны для заказчиков, которым нужна не разовая деталь, а регулярная поддержка по изготовлению. Мы можем работать с повторяемыми заказами, серийными партиями и стабильной загрузкой по производству.";
        case "custom":
          return "Нестандартные задачи подходят для проектов, где нужен индивидуальный подход, сложные детали или работа по месту. Мы обсуждаем объём, быстро считаем задачу и предлагаем понятное решение под конкретный проект.";
        default:
          return "Мы работаем с проектами по металлоконструкциям, монтажу и производству.";
      }
    case "sv":
      return `Den här tjänsten passar kunder som behöver tydligt arbetsomfång, praktisk kommunikation och pålitlig utförande inom ${slug}. Vi arbetar utifrån ritningar, projektkrav och överenskommen tidsplan.`;
    case "no":
      return `Denne tjenesten passer for kunder som trenger tydelig arbeidsomfang, praktisk kommunikasjon og pålitelig utførelse innen ${slug}. Vi arbeider ut fra tegninger, prosjektkrav og avtalt tidsplan.`;
    case "da":
      return `Denne ydelse passer til kunder, der har brug for klart arbejdsomfang, praktisk kommunikation og pålidelig udførelse inden for ${slug}. Vi arbejder ud fra tegninger, projektkrav og aftalt tidsplan.`;
    case "fi":
      return `Tämä palvelu sopii asiakkaille, jotka tarvitsevat selkeän työlaajuuden, käytännöllisen viestinnän ja luotettavan toteutuksen palvelussa ${slug}. Työskentelemme piirustusten, projektivaatimusten ja sovitun aikataulun mukaan.`;
    case "et":
      return `See teenus sobib klientidele, kes vajavad selget töömahtu, praktilist suhtlust ja usaldusväärset teostust valdkonnas ${slug}. Töötame jooniste, projekti nõuete ja kokkulepitud ajakava järgi.`;
    case "en":
    default:
      switch (slug) {
        case "fabrication":
          return "Steel fabrication is suitable for clients who need a clear production process and work based on drawings. We fabricate elements for industrial sites, stairs, frames, supports and custom steel products.";
        case "installation":
          return "Steel installation includes assembly, fitting, alignment and finishing work on site. We can send a crew to the project, work according to site requirements and keep agreed timelines.";
        case "workforce":
          return "Qualified workforce rental is suitable for projects where a client needs to strengthen a site team or workshop quickly. We provide welders, fitters and installers for a defined scope of work, agreed timelines and real project needs.";
        case "repairs":
          return "Repairs and steel structure modifications are needed when an existing solution must be reinforced, corrected or adapted quickly. This can include joint rework, structural reinforcement, geometry correction or adjustment for new requirements.";
        case "capacity":
          return "Workshop capacity matters for clients who need more than a one-off part and require regular production support. We can work with repeat orders, serial batches and stable fabrication workload.";
        case "custom":
          return "Custom steel work is suitable for projects that require an individual approach, complex parts or site-specific solutions. We review the scope, estimate the task quickly and offer a clear solution for the project.";
        default:
          return "We work with steel structure, installation and production projects.";
      }
  }
}

function getBlueprintDataUri(kind: "fabrication" | "workforce") {
  const accent = kind === "workforce" ? "#7fb7ff" : "#6ea8ff";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" fill="none">
      <rect width="1600" height="900" fill="#09111b"/>
      <g opacity="0.16" stroke="#9dc7ff" stroke-width="1">
        <path d="M0 90H1600M0 180H1600M0 270H1600M0 360H1600M0 450H1600M0 540H1600M0 630H1600M0 720H1600M0 810H1600"/>
        <path d="M160 0V900M320 0V900M480 0V900M640 0V900M800 0V900M960 0V900M1120 0V900M1280 0V900M1440 0V900"/>
      </g>
      ${
        kind === "fabrication"
          ? `
      <g opacity="0.24" stroke="${accent}" stroke-width="2">
        <path d="M170 640H510V520H760V640H1120" />
        <path d="M250 640V400H370V640" />
        <path d="M370 400H560V300H760V400H980V640" />
        <path d="M560 300L640 220H860L940 300" />
        <path d="M980 640V420H1120V640" />
        <path d="M760 640V220" />
        <path d="M760 220L890 140H1090V220" />
        <path d="M620 520H900" />
        <path d="M220 700H1180" />
      </g>
      `
          : `
      <g opacity="0.24" stroke="${accent}" stroke-width="2">
        <path d="M180 650H500V520H760V650H1080" />
        <path d="M260 650V380H380V650" />
        <path d="M380 380H560V290H760V380H980V650" />
        <path d="M290 520L430 430L540 520" />
        <path d="M620 520L760 420L900 520" />
        <path d="M980 650V430H1120V650" />
        <path d="M1180 250H1460" />
        <path d="M1180 330H1510" />
        <path d="M1180 410H1410" />
      </g>
      <g opacity="0.14" stroke="#d8e9ff" stroke-width="1.5">
        <circle cx="430" cy="430" r="44"/>
        <circle cx="760" cy="420" r="44"/>
        <path d="M430 474V565" />
        <path d="M760 464V565" />
        <path d="M386 565H474" />
        <path d="M716 565H804" />
      </g>
      `
      }
      <g opacity="0.18" stroke="#d8e9ff" stroke-width="1.5">
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
  const ui = getUi(params.locale);
  const card = t.services.cards.find((c) => c.slug === params.slug);

  if (!card) return notFound();

  const isFabrication = card.slug === "fabrication";
  const isWorkforce = card.slug === "workforce";
  const isCapacity = card.slug === "capacity";
  const isCustom = card.slug === "custom";
  const isRepairs = card.slug === "repairs";

  const useBlueprintHero =
    isFabrication || isWorkforce || isCapacity || isCustom || isRepairs;

  const img = SERVICE_IMAGE_BY_SLUG[card.slug] ?? HERO_BG;
  const process = getProcessBySlug(card.slug, params.locale);
  const regions = getRegions(params.locale);
  const lead = getLeadBySlug(card.slug, params.locale);
  const seoText = getSeoText(card.slug, params.locale);
  const blueprintBg = getBlueprintDataUri(isWorkforce ? "workforce" : "fabrication");

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {ui.home}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {ui.allServices}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {ui.projects}
        </Link>
      </div>

      <section className="heroCard" style={{ padding: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: useBlueprintHero ? 420 : 520,
            background: useBlueprintHero ? "#08111b" : "#090d12",
          }}
        >
          {useBlueprintHero ? (
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
            <a className="btnGhost" href={`mailto:${CONTACT_EMAIL}`}>
              Email: {CONTACT_EMAIL}
            </a>

            <Link className="btnGhost" href={`/${params.locale}/contact`}>
              {ui.getQuote}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          <div className="card" style={{ minHeight: "unset" }}>
            <h2 style={{ margin: 0, fontSize: 20 }}>{ui.included}</h2>
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
            <h2 style={{ margin: 0, fontSize: 20 }}>{ui.process}</h2>
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
            <h2 style={{ margin: 0, fontSize: 20 }}>{ui.regions}</h2>
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
            <h2 style={{ margin: 0, fontSize: 20 }}>{ui.overview}</h2>
            <p style={{ marginTop: 14 }}>{seoText}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="heroCard">
          <h2 className="sectionTitle" style={{ fontSize: 24 }}>
            {ui.ctaTitle}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {ui.ctaText}
          </p>

          <div className="heroActions">
            <Link className="btn" href={`/${params.locale}/contact`}>
              {ui.getQuote}
            </Link>
            <Link className="btnGhost" href={`/${params.locale}/projects`}>
              {ui.viewProjects}
            </Link>
            <Link className="btnGhost" href={`/${params.locale}/services`}>
              {ui.otherServices}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
