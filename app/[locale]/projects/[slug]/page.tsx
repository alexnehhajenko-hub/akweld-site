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

function getUi(locale: Locale) {
  switch (locale) {
    case "ru":
      return {
        home: "На главную",
        projects: "Проекты",
        services: "Услуги",
        allProjects: "Все проекты",
        nextStep: "Следующий шаг",
        nextStepText:
          "Если вам нужен похожий объём работ, отправьте нам описание задачи, чертёж, PDF или фотографии через форму запроса. Мы посмотрим объём и вернёмся с ответом.",
      };
    case "sv":
      return {
        home: "Hem",
        projects: "Projekt",
        services: "Tjänster",
        allProjects: "Alla projekt",
        nextStep: "Nästa steg",
        nextStepText:
          "Om ni behöver liknande arbete, skicka oss uppgiftsbeskrivning, ritning, PDF eller bilder via förfrågningsformuläret. Vi går igenom omfattningen och återkommer.",
      };
    case "no":
      return {
        home: "Hjem",
        projects: "Prosjekter",
        services: "Tjenester",
        allProjects: "Alle prosjekter",
        nextStep: "Neste steg",
        nextStepText:
          "Hvis dere trenger lignende arbeid, send oss oppgavebeskrivelse, tegning, PDF eller bilder via forespørselsskjemaet. Vi går gjennom omfanget og kommer tilbake til dere.",
      };
    case "da":
      return {
        home: "Hjem",
        projects: "Projekter",
        services: "Ydelser",
        allProjects: "Alle projekter",
        nextStep: "Næste skridt",
        nextStepText:
          "Hvis I har brug for lignende arbejde, så send os opgavebeskrivelse, tegning, PDF eller billeder via forespørgselsformularen. Vi gennemgår omfanget og vender tilbage.",
      };
    case "fi":
      return {
        home: "Etusivu",
        projects: "Projektit",
        services: "Palvelut",
        allProjects: "Kaikki projektit",
        nextStep: "Seuraava askel",
        nextStepText:
          "Jos tarvitsette vastaavaa työtä, lähettäkää meille tehtävän kuvaus, piirustus, PDF tai kuvat tarjouslomakkeen kautta. Käymme laajuuden läpi ja palaamme asiaan.",
      };
    case "et":
      return {
        home: "Avaleht",
        projects: "Projektid",
        services: "Teenused",
        allProjects: "Kõik projektid",
        nextStep: "Järgmine samm",
        nextStepText:
          "Kui vajate sarnast töömahtu, saatke meile päringu vormi kaudu töö kirjeldus, joonis, PDF või fotod. Vaatame mahu üle ja vastame teile.",
      };
    case "en":
    default:
      return {
        home: "Home",
        projects: "Projects",
        services: "Services",
        allProjects: "All projects",
        nextStep: "Next step",
        nextStepText:
          "If you need similar work, send us your task description, drawing, PDF or photos through the request form. We will review the scope and come back to you.",
      };
  }
}

function getProjectContent(locale: Locale): Record<string, ProjectContent> {
  switch (locale) {
    case "ru":
      return {
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

    case "sv":
      return {
        "industrial-platforms": {
          title: "Industriella plattformar",
          lead:
            "Tillverkning, sammanställning och förberedelse av industriella plattformar, gångvägar, arbetszoner och servicekonstruktioner.",
          scopeTitle: "Vad vi kan göra",
          scopeText:
            "Vi tar på oss tillverkning av stålkonstruktioner för industriella plattformar, förberedelse av element, sammanställning, inpassning och montage på plats.",
          includesTitle: "Vad som vanligtvis ingår",
          includesItems: [
            "bärande ramar och stödelement",
            "arbetsplattformar och gångvägar",
            "trappor, räcken och skyddselement",
            "detaljer förberedda enligt mått och ritningar",
          ],
          resultTitle: "Resultat",
          resultText:
            "Ni får en tydlig och praktisk stålplattformslösning förberedd för produktion, service eller montageanvändning.",
        },
        "staircases-railings": {
          title: "Trappor och räcken",
          lead:
            "Tillverkning och montage av ståltrappor, räcken och skyddskonstruktioner för objekt och industriell användning.",
          scopeTitle: "Vad vi kan göra",
          scopeText:
            "Vi tillverkar trappor och räcken enligt projektmått för produktionsområden, lager, objekt, tekniska zoner och externa accesspunkter.",
          includesTitle: "Vad som vanligtvis ingår",
          includesItems: [
            "trappor och vilplan",
            "räcken, ledstänger och skyddssystem",
            "skyddsramar och barriärer",
            "inpassning, sammanställning och montage på plats",
          ],
          resultTitle: "Resultat",
          resultText:
            "Ni får en färdig stållösning för säker åtkomst och service med tydlig geometri och stabil sammanställning.",
        },
        "steel-frames": {
          title: "Stålstommar",
          lead:
            "Stålstommar, bärande konstruktioner och stödelement för bygg-, industri- och teknikprojekt.",
          scopeTitle: "Vad vi kan göra",
          scopeText:
            "Vi tillverkar och sammanställer stålstommar för byggnader, utrustning, tekniska rum, industriområden och specialkonstruktioner.",
          includesTitle: "Vad som vanligtvis ingår",
          includesItems: [
            "huvudsakliga bärande element",
            "fäst- och anslutningspunkter",
            "förberedelse för vidare montage",
            "sammanställning och inpassning på plats",
          ],
          resultTitle: "Resultat",
          resultText:
            "Ni får en stomme eller bärande stålkonstruktion förberedd för vidare montage, beklädnad, utrustning eller drift.",
        },
        "supports-brackets": {
          title: "Stöd och konsoler",
          lead:
            "Tillverkning av stöd, konsoler, fästramar och ståldetaljer enligt projektmått och krav.",
          scopeTitle: "Vad vi kan göra",
          scopeText:
            "Vi producerar både standardiserade och specialanpassade stöd och konsoler för stålkonstruktioner, utrustning, rörledningar och montageuppgifter.",
          includesTitle: "Vad som vanligtvis ingår",
          includesItems: [
            "stöddetaljer och ingjutningsdetaljer",
            "konsoler och fästlösningar",
            "tillverkning enligt mått och schema",
            "förberedelse för montage på plats",
          ],
          resultTitle: "Resultat",
          resultText:
            "Ni får färdiga stöd och ståldetaljer som kan monteras i projektet utan onödigt extra arbete på plats.",
        },
        "repair-works": {
          title: "Reparationsarbeten",
          lead:
            "Reparation, förstärkning och modifiering av befintliga stålkonstruktioner i produktion eller på plats.",
          scopeTitle: "Vad vi kan göra",
          scopeText:
            "Vi går igenom konstruktionens nuvarande skick, förstärker svaga områden, byter skadade delar och förbereder stålet för vidare användning.",
          includesTitle: "Vad som vanligtvis ingår",
          includesItems: [
            "reparation av befintliga knutpunkter",
            "förstärkning av stålkonstruktioner",
            "utbyte av skadade delar",
            "modifiering för uppdaterade projektkrav",
          ],
          resultTitle: "Resultat",
          resultText:
            "Ni får en reparerad eller förstärkt konstruktion som kan användas vidare på ett säkert sätt i projektet.",
        },
        "workforce-projects": {
          title: "Bemanningsprojekt",
          lead:
            "Projektstöd med svetsare, stålarbetare och montageteam för verkstad och arbete på plats.",
          scopeTitle: "Vad vi kan göra",
          scopeText:
            "Vi tillhandahåller specialister för tillverkning, sammanställning, montage, inpassning, reparation och produktionsstöd enligt ert projektomfång.",
          includesTitle: "Vad som vanligtvis ingår",
          includesItems: [
            "svetsare för verkstad och platsarbete",
            "stålarbetare och montörer för stålmontage",
            "installatörer för plattformar och ramar",
            "extra arbetskraft för deadlines och projektvolym",
          ],
          resultTitle: "Resultat",
          resultText:
            "Ni får praktiskt arbetskraftsstöd när ni snabbt behöver förstärka produktions- eller montagekapaciteten.",
        },
      };

    case "no":
      return {
        "industrial-platforms": {
          title: "Industrielle plattformer",
          lead:
            "Produksjon, sammenstilling og forberedelse av industrielle plattformer, gangbaner, arbeidsområder og adkomstkonstruksjoner.",
          scopeTitle: "Hva vi kan gjøre",
          scopeText:
            "Vi utfører stålfabrikasjon for industrielle plattformer, forberedelse av elementer, sammenstilling, tilpasning og montering på stedet.",
          includesTitle: "Hva som vanligvis inngår",
          includesItems: [
            "bærende rammer og støtteelementer",
            "arbeidsplattformer og gangbaner",
            "trapper, rekkverk og sikkerhetselementer",
            "deler forberedt etter mål og tegninger",
          ],
          resultTitle: "Resultat",
          resultText:
            "Dere får en tydelig og praktisk stålplattformløsning forberedt for produksjon, vedlikehold eller montering.",
        },
        "staircases-railings": {
          title: "Trapper og rekkverk",
          lead:
            "Produksjon og montering av ståltrapper, rekkverk og beskyttelseskonstruksjoner for anlegg og industriell bruk.",
          scopeTitle: "Hva vi kan gjøre",
          scopeText:
            "Vi produserer trapper og rekkverk etter prosjektmål for produksjonsområder, lager, anlegg, tekniske soner og utvendige adkomstpunkter.",
          includesTitle: "Hva som vanligvis inngår",
          includesItems: [
            "trappeløp og repos",
            "rekkverk, håndlister og beskyttelsessystemer",
            "beskyttelsesrammer og barrierer",
            "tilpasning, sammenstilling og montering på stedet",
          ],
          resultTitle: "Resultat",
          resultText:
            "Dere får en ferdig stålløsning for trygg adkomst og service med tydelig geometri og solid sammenstilling.",
        },
        "steel-frames": {
          title: "Stålrammer",
          lead:
            "Stålrammer, bærende konstruksjoner og støtteelementer for bygg-, industri- og tekniske prosjekter.",
          scopeTitle: "Hva vi kan gjøre",
          scopeText:
            "Vi produserer og sammenstiller stålrammer for bygninger, utstyr, tekniske rom, industriområder og spesialkonstruksjoner.",
          includesTitle: "Hva som vanligvis inngår",
          includesItems: [
            "hovedbærende elementer",
            "tilkoblings- og festepunkter",
            "forberedelse for videre montering",
            "sammenstilling og tilpasning på stedet",
          ],
          resultTitle: "Resultat",
          resultText:
            "Dere får en ramme eller bærende stålkonstruksjon forberedt for videre montering, kledning, utstyrsplassering eller drift.",
        },
        "supports-brackets": {
          title: "Støtter og braketter",
          lead:
            "Produksjon av støtter, braketter, feste­rammer og ståldetaljer etter prosjektmål og krav.",
          scopeTitle: "Hva vi kan gjøre",
          scopeText:
            "Vi produserer både standardiserte og spesialtilpassede støtter og braketter for stålkonstruksjoner, utstyr, rørledninger og monteringsoppgaver.",
          includesTitle: "Hva som vanligvis inngår",
          includesItems: [
            "støttedetaljer og innstøpningsdeler",
            "braketter og festeløsninger",
            "produksjon etter mål og skjema",
            "forberedelse for montering på stedet",
          ],
          resultTitle: "Resultat",
          resultText:
            "Dere får ferdige støtter og ståldetaljer som kan installeres i prosjektet uten unødvendig ekstraarbeid på stedet.",
        },
        "repair-works": {
          title: "Reparasjonsarbeid",
          lead:
            "Reparasjon, forsterkning og modifisering av eksisterende stålkonstruksjoner i produksjon eller på stedet.",
          scopeTitle: "Hva vi kan gjøre",
          scopeText:
            "Vi vurderer den eksisterende tilstanden til konstruksjonen, forsterker svake områder, bytter skadede deler og forbereder stålet for videre bruk.",
          includesTitle: "Hva som vanligvis inngår",
          includesItems: [
            "reparasjon av eksisterende knutepunkter",
            "forsterkning av stålkonstruksjoner",
            "utskifting av skadede deler",
            "modifisering for oppdaterte prosjektbehov",
          ],
          resultTitle: "Resultat",
          resultText:
            "Dere får en reparert eller forsterket konstruksjon som kan brukes videre på en trygg måte i prosjektet.",
        },
        "workforce-projects": {
          title: "Bemanningsprosjekter",
          lead:
            "Prosjektstøtte med sveisere, stålarbeidere og montasjeteam for verksted og arbeid på stedet.",
          scopeTitle: "Hva vi kan gjøre",
          scopeText:
            "Vi stiller med spesialister for produksjon, tilpasning, montering, reparasjon og produksjonsstøtte etter prosjektvolumet deres.",
          includesTitle: "Hva som vanligvis inngår",
          includesItems: [
            "sveisere for verksted og arbeid på stedet",
            "stålarbeidere og montører for stålmontasje",
            "installatører for plattformer og rammer",
            "ekstra arbeidskraft for frister og prosjektvolum",
          ],
          resultTitle: "Resultat",
          resultText:
            "Dere får praktisk arbeidskraftstøtte når dere raskt trenger å styrke produksjons- eller montasjekapasiteten.",
        },
      };

    case "da":
      return {
        "industrial-platforms": {
          title: "Industrielle platforme",
          lead:
            "Fremstilling, samling og forberedelse af industrielle platforme, gangarealer, arbejdszoner og adgangskonstruktioner.",
          scopeTitle: "Hvad vi kan gøre",
          scopeText:
            "Vi udfører stålfremstilling til industrielle platforme, forberedelse af elementer, samlearbejde, tilpasning og montage på stedet.",
          includesTitle: "Hvad der typisk indgår",
          includesItems: [
            "bærende rammer og støtteelementer",
            "arbejdsplatforme og gangarealer",
            "trapper, rækværk og sikkerhedselementer",
            "dele forberedt efter mål og tegninger",
          ],
          resultTitle: "Resultat",
          resultText:
            "I får en tydelig og praktisk stålplatformsløsning forberedt til produktion, vedligehold eller montagebrug.",
        },
        "staircases-railings": {
          title: "Trapper og rækværk",
          lead:
            "Fremstilling og montage af ståltrapper, rækværk og beskyttelseskonstruktioner til anlæg og industriel brug.",
          scopeTitle: "Hvad vi kan gøre",
          scopeText:
            "Vi fremstiller trapper og rækværk efter projektmål til produktionsområder, lagre, anlæg, tekniske zoner og udvendige adgangspunkter.",
          includesTitle: "Hvad der typisk indgår",
          includesItems: [
            "trappeløb og reposer",
            "rækværk, håndlister og beskyttelsessystemer",
            "beskyttelsesrammer og barrierer",
            "tilpasning, samling og montage på stedet",
          ],
          resultTitle: "Resultat",
          resultText:
            "I får en færdig stålløsning til sikker adgang og service med tydelig geometri og solid samling.",
        },
        "steel-frames": {
          title: "Stålrammer",
          lead:
            "Stålrammer, bærende konstruktioner og støtteelementer til bygge-, industri- og tekniske projekter.",
          scopeTitle: "Hvad vi kan gøre",
          scopeText:
            "Vi fremstiller og samler stålrammer til bygninger, udstyr, teknikrum, industriområder og specialkonstruktioner.",
          includesTitle: "Hvad der typisk indgår",
          includesItems: [
            "hovedbærende elementer",
            "forbindelses- og fastgørelsespunkter",
            "forberedelse til videre montage",
            "samling og tilpasning på stedet",
          ],
          resultTitle: "Resultat",
          resultText:
            "I får en ramme eller bærende stålkonstruktion forberedt til videre montage, beklædning, udstyr eller drift.",
        },
        "supports-brackets": {
          title: "Støtter og beslag",
          lead:
            "Fremstilling af støtter, beslag, fastgørelsesrammer og ståldetaljer efter projektmål og krav.",
          scopeTitle: "Hvad vi kan gøre",
          scopeText:
            "Vi producerer både standard- og specialtilpassede støtter og beslag til stålkonstruktioner, udstyr, rørlinjer og montageopgaver.",
          includesTitle: "Hvad der typisk indgår",
          includesItems: [
            "støttedetaljer og indstøbningselementer",
            "beslag og fastgørelsesløsninger",
            "fremstilling efter mål og skema",
            "forberedelse til montage på stedet",
          ],
          resultTitle: "Resultat",
          resultText:
            "I får færdige støtter og ståldetaljer, som kan installeres i projektet uden unødvendigt ekstraarbejde på stedet.",
        },
        "repair-works": {
          title: "Reparationsarbejde",
          lead:
            "Reparation, forstærkning og ændring af eksisterende stålkonstruktioner i produktion eller på stedet.",
          scopeTitle: "Hvad vi kan gøre",
          scopeText:
            "Vi vurderer konstruktionens nuværende tilstand, forstærker svage områder, udskifter beskadigede dele og forbereder stålet til videre brug.",
          includesTitle: "Hvad der typisk indgår",
          includesItems: [
            "reparation af eksisterende samlinger",
            "forstærkning af stålkonstruktioner",
            "udskiftning af beskadigede dele",
            "ændringer til opdaterede projektkrav",
          ],
          resultTitle: "Resultat",
          resultText:
            "I får en repareret eller forstærket konstruktion, som sikkert kan bruges videre i projektet.",
        },
        "workforce-projects": {
          title: "Mandskabsprojekter",
          lead:
            "Projektstøtte med svejsere, stålarbejdere og montageteams til værksted og arbejde på stedet.",
          scopeTitle: "Hvad vi kan gøre",
          scopeText:
            "Vi stiller specialister til rådighed for fremstilling, tilpasning, montage, reparation og produktionsstøtte efter jeres projektomfang.",
          includesTitle: "Hvad der typisk indgår",
          includesItems: [
            "svejsere til værksted og arbejde på stedet",
            "stålarbejdere og montører til stålmontage",
            "installatører til platforme og rammer",
            "ekstra mandskab til deadlines og projektvolumen",
          ],
          resultTitle: "Resultat",
          resultText:
            "I får praktisk mandskabsstøtte, når I hurtigt har brug for at styrke produktions- eller montagekapaciteten.",
        },
      };

    case "fi":
      return {
        "industrial-platforms": {
          title: "Teollisuustasot",
          lead:
            "Teollisuustasojen, kulkusiltojen, työalueiden ja huoltorakenteiden valmistus, kokoonpano ja valmistelu.",
          scopeTitle: "Mitä voimme tehdä",
          scopeText:
            "Teemme teräsrakenteiden valmistusta teollisuustasoihin, elementtien valmistelua, kokoonpanoa, sovitusta ja asennusta työmaalla.",
          includesTitle: "Mitä yleensä sisältyy",
          includesItems: [
            "kantavat rungot ja tukielementit",
            "työtasot ja kulkusillat",
            "portaat, kaiteet ja turvaelementit",
            "mittojen ja piirustusten mukaan valmistetut osat",
          ],
          resultTitle: "Tulos",
          resultText:
            "Saatte selkeän ja käytännöllisen terästasoratkaisun, joka on valmisteltu tuotantoa, huoltoa tai asennuskäyttöä varten.",
        },
        "staircases-railings": {
          title: "Portaat ja kaiteet",
          lead:
            "Teräsportaiden, kaiteiden ja suojarakenteiden valmistus ja asennus kohteisiin ja teolliseen käyttöön.",
          scopeTitle: "Mitä voimme tehdä",
          scopeText:
            "Valmistamme portaita ja kaiteita projektimittojen mukaan tuotantoalueille, varastoihin, kohteisiin, teknisiin tiloihin ja ulkoisiin kulkureitteihin.",
          includesTitle: "Mitä yleensä sisältyy",
          includesItems: [
            "porrasjaksot ja tasanteet",
            "kaiteet, käsijohteet ja suojajärjestelmät",
            "suojakehykset ja esteet",
            "sovitus, kokoonpano ja asennus työmaalla",
          ],
          resultTitle: "Tulos",
          resultText:
            "Saatte valmiin teräsratkaisun turvalliseen kulkuun ja huoltoon selkeällä geometrialla ja tukevalla kokoonpanolla.",
        },
        "steel-frames": {
          title: "Teräsrungot",
          lead:
            "Teräsrungot, kantavat rakenteet ja tukielementit rakennus-, teollisuus- ja teknisiin projekteihin.",
          scopeTitle: "Mitä voimme tehdä",
          scopeText:
            "Valmistamme ja kokoamme teräsrunkoja rakennuksiin, laitteisiin, teknisiin tiloihin, teollisuusalueille ja erikoisrakenteisiin.",
          includesTitle: "Mitä yleensä sisältyy",
          includesItems: [
            "pääkantavat elementit",
            "liitos- ja kiinnityspisteet",
            "valmistelu jatkoasennusta varten",
            "kokoonpano ja sovitus työmaalla",
          ],
          resultTitle: "Tulos",
          resultText:
            "Saatte rungon tai kantavan teräsrakenteen, joka on valmisteltu jatkoasennusta, verhousta, laitteiden sijoitusta tai käyttöä varten.",
        },
        "supports-brackets": {
          title: "Tuet ja kannakkeet",
          lead:
            "Tukien, kannakkeiden, kiinnityskehysten ja teräsosien valmistus projektimittojen ja vaatimusten mukaan.",
          scopeTitle: "Mitä voimme tehdä",
          scopeText:
            "Tuotamme sekä vakio- että räätälöityjä tukia ja kannakkeita teräsrakenteisiin, laitteisiin, putkilinjoihin ja asennustehtäviin.",
          includesTitle: "Mitä yleensä sisältyy",
          includesItems: [
            "tukiosat ja upotettavat elementit",
            "kannakkeet ja kiinnitysratkaisut",
            "valmistus mittojen ja kaavion mukaan",
            "valmistelu työmaa-asennusta varten",
          ],
          resultTitle: "Tulos",
          resultText:
            "Saatte valmiit tuet ja teräsosat, jotka voidaan asentaa projektiin ilman turhaa lisätyötä työmaalla.",
        },
        "repair-works": {
          title: "Korjaustyöt",
          lead:
            "Olemassa olevien teräsrakenteiden korjaus, vahvistus ja muokkaus tuotannossa tai työmaalla.",
          scopeTitle: "Mitä voimme tehdä",
          scopeText:
            "Arvioimme rakenteen nykytilan, vahvistamme heikot kohdat, vaihdamme vaurioituneet osat ja valmistamme teräksen jatkokäyttöä varten.",
          includesTitle: "Mitä yleensä sisältyy",
          includesItems: [
            "olemassa olevien liitosten korjaus",
            "teräsrakenteiden vahvistaminen",
            "vaurioituneiden osien vaihto",
            "muutokset päivitettyjen projektitarpeiden mukaan",
          ],
          resultTitle: "Tulos",
          resultText:
            "Saatte korjatun tai vahvistetun rakenteen, jota voidaan käyttää turvallisesti edelleen projektissa.",
        },
        "workforce-projects": {
          title: "Työvoimaprojektit",
          lead:
            "Projektituki hitsaajilla, teräsrakentajilla ja asennusryhmillä verstaisiin ja työmaatyöhön.",
          scopeTitle: "Mitä voimme tehdä",
          scopeText:
            "Tarjoamme asiantuntijoita valmistukseen, sovitukseen, asennukseen, korjaukseen ja tuotannon tukeen projektinne laajuuden mukaan.",
          includesTitle: "Mitä yleensä sisältyy",
          includesItems: [
            "hitsarit verstaisiin ja työmaalle",
            "teräsrakentajat ja asentajat teräskokoonpanoon",
            "asentajat tasoihin ja runkoihin",
            "lisätyövoimaa määräaikoihin ja projektivolyymiin",
          ],
          resultTitle: "Tulos",
          resultText:
            "Saatte käytännöllistä työvoimatukea, kun tuotanto- tai asennuskapasiteettia pitää vahvistaa nopeasti.",
        },
      };

    case "et":
      return {
        "industrial-platforms": {
          title: "Tööstusplatvormid",
          lead:
            "Tööstusplatvormide, käiguteede, tööalade ja juurdepääsukonstruktsioonide valmistamine, koostamine ja ettevalmistus.",
          scopeTitle: "Mida me saame teha",
          scopeText:
            "Teeme metallkonstruktsioonide valmistust tööstusplatvormidele, elementide ettevalmistust, koostamist, sobitamist ja paigaldust objektil.",
          includesTitle: "Mis tavaliselt sisaldub",
          includesItems: [
            "kandvad raamid ja tugielemendid",
            "tööplatvormid ja käiguteed",
            "trepid, piirded ja ohutuselemendid",
            "detailid valmistatud mõõtude ja jooniste järgi",
          ],
          resultTitle: "Tulemus",
          resultText:
            "Saate selge ja praktilise metallplatvormi lahenduse, mis on ette valmistatud tootmiseks, hoolduseks või paigalduskasutuseks.",
        },
        "staircases-railings": {
          title: "Trepid ja piirded",
          lead:
            "Terasest treppide, piirete ja kaitsekonstruktsioonide valmistamine ja paigaldus objektidele ning tööstuslikuks kasutuseks.",
          scopeTitle: "Mida me saame teha",
          scopeText:
            "Valmistame treppe ja piirdeid projekti mõõtude järgi tootmisaladele, ladudesse, objektidele, tehnilistesse tsoonidesse ja välistele ligipääsupunktidele.",
          includesTitle: "Mis tavaliselt sisaldub",
          includesItems: [
            "trepikäigud ja vaheplatvormid",
            "piirded, käsipuud ja kaitsesüsteemid",
            "kaitseraamid ja tõkked",
            "sobitamine, koostamine ja paigaldus objektil",
          ],
          resultTitle: "Tulemus",
          resultText:
            "Saate valmis teraslahenduse ohutuks ligipääsuks ja hoolduseks selge geomeetria ning tugeva koostega.",
        },
        "steel-frames": {
          title: "Terasraamid",
          lead:
            "Terasraamid, kandekonstruktsioonid ja tugielemendid ehitus-, tööstus- ja tehniliste projektide jaoks.",
          scopeTitle: "Mida me saame teha",
          scopeText:
            "Valmistame ja koostame terasraame hoonetele, seadmetele, tehnoruumidele, tööstusaladele ja erikonstruktsioonidele.",
          includesTitle: "Mis tavaliselt sisaldub",
          includesItems: [
            "peamised kandvad elemendid",
            "ühendus- ja kinnituspunktid",
            "ettevalmistus edasiseks paigalduseks",
            "koostamine ja sobitamine objektil",
          ],
          resultTitle: "Tulemus",
          resultText:
            "Saate raami või kandva teraskonstruktsiooni, mis on ette valmistatud edasiseks paigalduseks, katmiseks, seadmete paigaldamiseks või kasutuseks.",
        },
        "supports-brackets": {
          title: "Toed ja kronsteinid",
          lead:
            "Tugede, kronsteinide, kinnitusraamide ja terasdetailide valmistamine projekti mõõtude ja nõuete järgi.",
          scopeTitle: "Mida me saame teha",
          scopeText:
            "Toodame nii standardseid kui ka erilahendusena valmistatud tugesid ja kronsteine teraskonstruktsioonidele, seadmetele, torustikele ja paigaldusülesannetele.",
          includesTitle: "Mis tavaliselt sisaldub",
          includesItems: [
            "toe detailid ja sisseehitatavad elemendid",
            "kronsteinid ja kinnituslahendused",
            "valmistamine mõõtude ja skeemi järgi",
            "ettevalmistus objektil paigaldamiseks",
          ],
          resultTitle: "Tulemus",
          resultText:
            "Saate valmis toed ja terasdetailid, mida saab projekti paigaldada ilma liigse lisatööta objektil.",
        },
        "repair-works": {
          title: "Remonditööd",
          lead:
            "Olemasolevate teraskonstruktsioonide remont, tugevdamine ja muutmine tootmises või objektil.",
          scopeTitle: "Mida me saame teha",
          scopeText:
            "Hindame konstruktsiooni olemasolevat seisukorda, tugevdame nõrku kohti, vahetame kahjustatud osi ja valmistame terase ette edasiseks kasutuseks.",
          includesTitle: "Mis tavaliselt sisaldub",
          includesItems: [
            "olemasolevate sõlmede remont",
            "teraskonstruktsioonide tugevdamine",
            "kahjustatud detailide asendamine",
            "muudatused vastavalt uuendatud projekti vajadustele",
          ],
          resultTitle: "Tulemus",
          resultText:
            "Saate remonditud või tugevdatud konstruktsiooni, mida saab projektis edasi ohutult kasutada.",
        },
        "workforce-projects": {
          title: "Tööjõuprojektid",
          lead:
            "Projektitugi keevitajate, terasetööliste ja paigaldusmeeskondadega töökojas ja objektil.",
          scopeTitle: "Mida me saame teha",
          scopeText:
            "Pakume spetsialiste valmistamiseks, sobitamiseks, paigaldamiseks, remondiks ja tootmise toetuseks vastavalt teie projekti mahule.",
          includesTitle: "Mis tavaliselt sisaldub",
          includesItems: [
            "keevitajad töökoja ja objekti töödeks",
            "terasetöölised ja koostajad metallmontaažiks",
            "paigaldajad platvormidele ja raamidele",
            "lisatööjõud tähtaegade ja projekti mahu jaoks",
          ],
          resultTitle: "Tulemus",
          resultText:
            "Saate praktilise tööjõutoe, kui on vaja kiiresti tugevdada tootmis- või paigaldusvõimekust.",
        },
      };

    case "en":
    default:
      return {
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
  }
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const t = getT(params.locale);
  const ui = getUi(params.locale);
  const content = getProjectContent(params.locale)[params.slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="container" style={{ paddingTop: 20, paddingBottom: 44 }}>
      <div style={{ marginBottom: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btnGhost" href={`/${params.locale}`}>
          ← {ui.home}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/projects`}>
          {ui.projects}
        </Link>
        <Link className="btnGhost" href={`/${params.locale}/services`}>
          {ui.services}
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
            {t.common.getQuote}
          </Link>
          <Link className="btnGhost" href={`/${params.locale}/projects`}>
            {ui.allProjects}
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
            {ui.nextStep}
          </h2>

          <p className="heroText" style={{ maxWidth: "none" }}>
            {ui.nextStepText}
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
