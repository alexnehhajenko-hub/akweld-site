const et = {
  common: {
    tagline: "Teras • Valmistamine • Paigaldus • Tööjõud",
    getQuote: "Küsi pakkumist",
    viewServices: "Teenused",
    viewProjects: "Projektid",
    footerLine: "Baas Eestis • Töötame Skandinaavias ja Baltikumis",
  },
  nav: {
    services: "Teenused",
    projects: "Projektid",
    contact: "Kontakt",
  },
  home: {
    heroTitle1: "Metallkonstruktsioonid",
    heroTitle2: "Skandinaaviale ja Baltikumile",
    heroText:
      "Metallkonstruktsioonide valmistamine, paigaldus ja kvalifitseeritud tööjõu tugi projektidele. Selge suhtlus, arusaadav töömaht ja kindel teostus.",
    kpi1Top: "Eesti",
    kpi1Bottom: "Baas ja tootmine",
    kpi2Top: "Rootsi",
    kpi2Bottom: "Projektide tugi",
    kpi3Top: "Objektil",
    kpi3Bottom: "Paigaldusmeeskonnad",
    kpi4Top: "Tööjõud",
    kpi4Bottom: "Keevitajad / paigaldajad",
    focusTitle: "Mida me teeme",
    complianceNote:
      "Töötame Eestist ja toetame projekte Skandinaavias ja Baltikumis. Lähtume joonistest, töömahust, objekti nõuetest ja ohutusreeglitest.",
    servicesTitle: "Teenused",
    projectsTitle: "Valitud projektid",
  },
  services: {
    title: "Teenused",
    lead:
      "Töökojatootmisest kuni objektil paigalduseni — lisaks kvalifitseeritud tööjõu tugi projektidele Eestis, Rootsis ja kogu piirkonnas.",
    detailsTitle: "Mis sisaldub",
    photoHint:
      "Soovi korral: lisa oma fotod kausta /public/services/{slug}.jpg — hiljem kuvame need sellel lehel.",
    cards: [
      {
        slug: "fabrication",
        title: "Metallkonstruktsioonide valmistamine",
        text: "Töökojatootmine jooniste ja mõõtude alusel valmistatud metallkonstruktsioonidele ja detailidele.",
        points: [
          "Valmistamine jooniste ja mõõtude järgi",
          "Sõlmed, raamid, platvormid, toed ja mittestandardsed detailid",
          "Täpsed keevitus-, koostamis- ja viimistlustööd",
          "Ettevalmistus transpordiks, paigalduseks või järgmise projekti etapi jaoks",
        ],
      },
      {
        slug: "installation",
        title: "Paigaldus",
        text: "Metallkonstruktsioonide paigaldus objektil, sobitamine, joondamine ja lõppkoostus.",
        points: [
          "Paigaldusmeeskonnad objektil",
          "Koostamine, sobitamine, joondamine ja korrigeerimine",
          "Töö vastavalt objekti ajakavale ja ohutusnõuetele",
          "Lõppkontroll ja töö üleandmine",
        ],
      },
      {
        slug: "workforce",
        title: "Kvalifitseeritud tööjõud",
        text: "Keevitajad, koostelukksepad ja paigaldajad tööks töökojas või objektil lühikeseks või pikaks perioodiks.",
        points: [
          "Keevitajad, koostelukksepad ja paigaldajad",
          "Paindlik kestus: lühikestest töödest pikkade projektideni",
          "Töö teie juhtimise all või kokkulepitud projektitoena",
          "Selge suhtlus ja aruandlus",
        ],
      },
      {
        slug: "repairs",
        title: "Remont ja ümberehitused",
        text: "Olemasolevate metallkonstruktsioonide remont, tugevdamine ja ümberehitamine.",
        points: [
          "Olemasolevate konstruktsioonide remont ja tugevdamine",
          "Muudatused objektil või töökojas",
          "Kiire reageerimine kiireloomulistele töödele",
          "Vajadusel fotod ja dokumentatsioon",
        ],
      },
      {
        slug: "capacity",
        title: "Tootmisvõimekus",
        text: "Tugi korduvtellimustele, seeriatootmisele ja stabiilsele valmistusmahule.",
        points: [
          "Tugi regulaarsele tootmisele",
          "Korduvad partiid ja seeriatooted",
          "Stabiilne planeerimine ja prognoositavad tähtajad",
          "Paindlik skaleerimine vastavalt projektimahule",
        ],
      },
      {
        slug: "custom",
        title: "Erilahendused",
        text: "Mittestandardsed metallkonstruktsioonide tööd selge mahu, tähtaegade ja praktilise suhtlusega.",
        points: [
          "Eri- ja individuaalsed tööd",
          "Kiire hinnang pärast detailide täpsustamist",
          "Läbipaistev maht ja realistlik ajakava",
          "Usaldusväärne teostus ja tugi",
        ],
      },
    ],
    note:
      "Saatke meile joonised, töö kirjelduse ja asukoha — vaatame mahu üle ja pakume sobiva lahenduse.",
  },
  projects: {
    title: "Projektid",
    lead:
      "Näited töödest, mis on seotud metallkonstruktsioonide valmistamise, paigalduse, remondi ja projektitoega.",
    items: [
      {
        title: "Tööstusplatvormid",
        text: "Metallkonstruktsioonide valmistamine, koostamine ja ettevalmistus tööstusplatvormidele ja tööaladele.",
      },
      {
        title: "Trepid ja piirded",
        text: "Terastrepid, käsipuud ja piirded objektidele ja tootmisülesannetele.",
      },
      {
        title: "Terasraamid",
        text: "Raamid ja kandvad elemendid ehitus- ja tööstustöödeks.",
      },
      {
        title: "Toed ja kronsteinid",
        text: "Toed, kronsteinid ja detailid vastavalt projekti mõõtudele ja nõuetele.",
      },
      {
        title: "Remonditööd",
        text: "Olemasolevate metallkonstruktsioonide tugevdamine, remont ja ümberehitamine.",
      },
      {
        title: "Tööjõuprojektid",
        text: "Projektide tugi keevitajate, lukkseppade ja paigaldusbrigaadidega.",
      },
    ],
    note:
      "Kui teil on sarnane ülesanne, saatke meile maht, joonised või fotod — vaatame, kuidas saame projektis kaasa lüüa.",
  },
  partners: {
    title: "Otsime partnereid metallkonstruktsioonide projektidele",
    lead:
      "AKWELD on huvitatud koostööst ettevõtetega, kes vajavad usaldusväärset partnerit metallkonstruktsioonide valmistamiseks, paigaldamiseks ja projektitoeks.",
    text1:
      "Vaatame nii üksikuid ülesandeid kui ka pikaajalist koostööd Eestis, Rootsis ja teistes piirkonna riikides.",
    text2:
      "Meid huvitavad ehitusettevõtted, tööstusettevõtted, paigaldusorganisatsioonid ja tootmispartnerid, kes vajavad stabiilset alltöövõtjat osale töödest või kogu projekti jaoks.",
    text3:
      "Saame võtta enda peale metallkonstruktsioonide valmistamise jooniste järgi, paigalduse objektil, olemasolevate konstruktsioonide remondi ja tugevdamise ning keevitajate, lukkseppade ja paigaldajate kaasamise konkreetsete ülesannete jaoks.",
    closing:
      "Kui otsite teostajat või soovite arutada pikaajalist koostööd, kirjutage meile aadressil info@akweldsteel.com.",
  },
  contact: {
    title: "Kontakt",
    lead:
      "Saatke päring ja joonised — vaatame mahu üle ja vastame arusaadava järgmise sammuga.",
    formName: "Nimi",
    formPhone: "Telefon / WhatsApp",
    formEmail: "Email",
    formMessage: "Sõnum (maht, asukoht, tähtajad, lisage võimalusel joonised)",
    formSend: "Saada päring",
    formHint: "Vorm on praegu demo — hiljem ühendame emaili või CRM-iga.",
    block1Title: "Baas",
    block1Text: "Eesti — tootmine ja operatiivne osa.",
    block2Title: "Piirkond",
    block2Text: "Skandinaavia ja Baltikum — projektide tugi.",
    block3Title: "Vastamise kiirus",
    block3Text: "Tavaliselt 24 tunni jooksul tööpäevadel.",
    note:
      "Peamine kontaktkanal on email: info@akweldsteel.com.",
  },
};

export default et;
