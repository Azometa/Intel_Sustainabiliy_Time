// ----- YEAR -----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ----- ELEMENTS -----
const langSelect = document.getElementById("langSelect");
const htmlEl = document.documentElement;
const bsCss = document.getElementById("bsCss");

// Timeline controls
const scroller = document.getElementById("timelineScroller");
const tlPrev = document.getElementById("tlPrev");
const tlNext = document.getElementById("tlNext");

// ----- RTL LANGS -----
const rtlLangs = new Set(["ar","fa","ur","he"]);

// ----- TRANSLATIONS -----
const i18n = {
  en: {
    skipLink:"Skip to main content",
    langLabel:"Language",
    navTimeline:"Timeline",
    navFocus:"Focus Areas",
    navNewsletter:"Newsletter",
    heroTitle:"Sustainability Through the Ages",
    heroSubtitle:"Explore Intel’s journey of technology advancement and sustainability—from early microprocessors to modern renewable-powered computing.",
    heroCta:"View Timeline",
    heroModalBtn:"Learn about RISE",
    heroCardTitle:"Global-ready design",
    heroCard1:"RTL layout support",
    heroCard2:"Responsive Bootstrap layout",
    heroCard3:"Accessible newsletter form",
    timelineTitle:"Intel Technology Timeline",
    timelineSubtitle:"Key milestones in innovation and sustainability.",
    prevBtn:"Prev",
    nextBtn:"Next",
    t1968Title:"Intel Founded",
    t1968Summary:"The beginning of semiconductor innovation.",
    t1968Details:"Intel’s founding marked the start of modern microelectronics and paved the way for energy-efficient computing.",
    t1971Title:"First Microprocessor",
    t1971Summary:"Computing becomes smaller and more efficient.",
    t1971Details:"The microprocessor revolutionized computing by putting powerful processing into tiny, efficient chips.",
    t1978Title:"8086 Architecture",
    t1978Summary:"Architecture improvements drive performance.",
    t1978Details:"Better chip designs improved performance while reducing energy demands.",
    t1993Title:"Pentium Era",
    t1993Summary:"Personal computing becomes mainstream.",
    t1993Details:"Energy efficiency became increasingly important as PCs spread worldwide.",
    t2006Title:"Efficiency Focus",
    t2006Summary:"Performance-per-watt becomes key.",
    t2006Details:"Processors were redesigned to deliver more computing power with less electricity.",
    t2013Title:"Water & Waste Initiatives",
    t2013Summary:"Sustainability expands to operations.",
    t2013Details:"A stronger focus on reducing water use and manufacturing waste.",
    t2020Title:"Renewable Energy",
    t2020Summary:"Clean energy powers technology.",
    t2020Details:"Data centers and manufacturing increasingly rely on renewable sources.",
    t2030Title:"Future Goals",
    t2030Summary:"Ambitious sustainability targets.",
    t2030Details:"Commitments to reduce emissions and resource usage.",
    t2040Title:"Net-Zero Vision",
    t2040Summary:"A carbon-neutral future.",
    t2040Details:"Long-term goals focus on eliminating environmental impact entirely.",
    focusTitle:"Sustainability focus areas",
    focusSubtitle:"A responsive three-column layout that adapts across devices.",
    focus1Title:"Water stewardship",
    focus1Text:"Reducing water usage and improving watershed health.",
    focus2Title:"Responsible manufacturing",
    focus2Text:"Improving efficiency, reducing waste, and cleaner operations.",
    focus3Title:"Transparency & reporting",
    focus3Text:"Clear reporting to track progress toward sustainability targets.",
    learnMore:"Learn more",
    subTitle:"Subscribe for sustainability updates",
    subSubtitle:"Sign up to receive periodic updates.",
    nameLabel:"Full name *",
    nameError:"Please enter your name.",
    emailLabel:"Email address *",
    emailError:"Please enter a valid email address.",
    subBtn:"Subscribe",
    footerText:"Intel Sustainability Timeline",
    backToTop:"Back to top",
    modalTitle:"Intel RISE (overview)",
    modalBody:"RISE is a sustainability strategy focused on responsible, inclusive, sustainable, and enabling actions.",
    modalClose:"Close",
    modalCta:"Subscribe"
  },

  es: {
    skipLink:"Saltar al contenido principal",
    langLabel:"Idioma",
    navTimeline:"Cronología",
    navFocus:"Áreas",
    navNewsletter:"Boletín",
    heroTitle:"Sostenibilidad a través del tiempo",
    heroSubtitle:"Explora el recorrido de Intel en avances tecnológicos y sostenibilidad: desde los primeros microprocesadores hasta la computación moderna con energía renovable.",
    heroCta:"Ver cronología",
    heroModalBtn:"Conocer RISE",
    heroCardTitle:"Diseño global",
    heroCard1:"Soporte RTL",
    heroCard2:"Diseño responsive con Bootstrap",
    heroCard3:"Formulario accesible",
    timelineTitle:"Cronología tecnológica de Intel",
    timelineSubtitle:"Hitos clave en innovación y sostenibilidad.",
    prevBtn:"Anterior",
    nextBtn:"Siguiente",
    t1968Title:"Intel se funda",
    t1968Summary:"El inicio de la innovación en semiconductores.",
    t1968Details:"La fundación de Intel marcó el comienzo de la microelectrónica moderna y abrió camino a una computación más eficiente.",
    t1971Title:"Primer microprocesador",
    t1971Summary:"La computación se vuelve más pequeña y eficiente.",
    t1971Details:"El microprocesador revolucionó la computación al concentrar potencia en chips pequeños y eficientes.",
    t1978Title:"Arquitectura 8086",
    t1978Summary:"Mejoras de arquitectura impulsan el rendimiento.",
    t1978Details:"Mejores diseños aumentaron el rendimiento mientras reducían demandas energéticas.",
    t1993Title:"Era Pentium",
    t1993Summary:"La computación personal se masifica.",
    t1993Details:"La eficiencia energética ganó importancia con el crecimiento global de las PC.",
    t2006Title:"Enfoque en eficiencia",
    t2006Summary:"El rendimiento por watt se vuelve clave.",
    t2006Details:"Los procesadores se rediseñaron para más potencia con menos electricidad.",
    t2013Title:"Iniciativas de agua y residuos",
    t2013Summary:"La sostenibilidad se expande a operaciones.",
    t2013Details:"Mayor enfoque en reducir consumo de agua y residuos de manufactura.",
    t2020Title:"Energía renovable",
    t2020Summary:"Energía limpia impulsa la tecnología.",
    t2020Details:"Centros de datos y manufactura dependen más de fuentes renovables.",
    t2030Title:"Metas futuras",
    t2030Summary:"Objetivos ambiciosos de sostenibilidad.",
    t2030Details:"Compromisos para reducir emisiones y uso de recursos.",
    t2040Title:"Visión Net-Zero",
    t2040Summary:"Un futuro carbono neutral.",
    t2040Details:"Objetivos a largo plazo para eliminar el impacto ambiental.",
    focusTitle:"Áreas de enfoque en sostenibilidad",
    focusSubtitle:"Diseño en tres columnas adaptable a cualquier pantalla.",
    focus1Title:"Gestión del agua",
    focus1Text:"Reducir el uso de agua y mejorar cuencas.",
    focus2Title:"Manufactura responsable",
    focus2Text:"Eficiencia, menos residuos y operaciones más limpias.",
    focus3Title:"Transparencia e informes",
    focus3Text:"Reportes claros para medir el progreso.",
    learnMore:"Aprender más",
    subTitle:"Suscríbete a las actualizaciones",
    subSubtitle:"Regístrate para recibir noticias.",
    nameLabel:"Nombre completo *",
    nameError:"Ingresa tu nombre.",
    emailLabel:"Correo electrónico *",
    emailError:"Ingresa un correo válido.",
    subBtn:"Suscribirse",
    footerText:"Cronología de Sostenibilidad",
    backToTop:"Volver arriba",
    modalTitle:"Intel RISE (resumen)",
    modalBody:"RISE es una estrategia de sostenibilidad enfocada en acciones responsables, inclusivas, sostenibles y habilitadoras.",
    modalClose:"Cerrar",
    modalCta:"Suscribirse"
  },

  fr: {
    skipLink:"Aller au contenu principal",
    langLabel:"Langue",
    navTimeline:"Chronologie",
    navFocus:"Axes",
    navNewsletter:"Newsletter",
    heroTitle:"Durabilité à travers les âges",
    heroSubtitle:"Découvrez le parcours d’Intel : des premiers microprocesseurs à l’informatique moderne alimentée par des énergies renouvelables.",
    heroCta:"Voir la chronologie",
    heroModalBtn:"Découvrir RISE",
    heroCardTitle:"Design prêt pour le monde",
    heroCard1:"Support RTL",
    heroCard2:"Mise en page responsive Bootstrap",
    heroCard3:"Formulaire accessible",
    timelineTitle:"Chronologie technologique d’Intel",
    timelineSubtitle:"Étapes clés en innovation et durabilité.",
    prevBtn:"Précédent",
    nextBtn:"Suivant",
    t1968Title:"Fondation d’Intel",
    t1968Summary:"Le début de l’innovation en semi-conducteurs.",
    t1968Details:"La création d’Intel a lancé la microélectronique moderne et a favorisé une informatique plus efficace.",
    t1971Title:"Premier microprocesseur",
    t1971Summary:"L’informatique devient plus petite et plus efficace.",
    t1971Details:"Le microprocesseur a révolutionné l’informatique en concentrant la puissance dans des puces petites et efficaces.",
    t1978Title:"Architecture 8086",
    t1978Summary:"Des améliorations d’architecture boostent les performances.",
    t1978Details:"De meilleurs designs ont amélioré les performances tout en réduisant la demande énergétique.",
    t1993Title:"Ère Pentium",
    t1993Summary:"L’informatique personnelle se généralise.",
    t1993Details:"L’efficacité énergétique devient essentielle avec l’expansion mondiale des PC.",
    t2006Title:"Priorité à l’efficacité",
    t2006Summary:"Le rendement par watt devient clé.",
    t2006Details:"Les processeurs sont repensés pour plus de puissance avec moins d’électricité.",
    t2013Title:"Initiatives eau & déchets",
    t2013Summary:"La durabilité s’étend aux opérations.",
    t2013Details:"Accent renforcé sur la réduction de l’eau et des déchets de fabrication.",
    t2020Title:"Énergie renouvelable",
    t2020Summary:"Une énergie propre alimente la technologie.",
    t2020Details:"Centres de données et usines s’appuient davantage sur des sources renouvelables.",
    t2030Title:"Objectifs futurs",
    t2030Summary:"Cibles ambitieuses de durabilité.",
    t2030Details:"Engagements pour réduire les émissions et l’utilisation des ressources.",
    t2040Title:"Vision Net-Zéro",
    t2040Summary:"Un avenir neutre en carbone.",
    t2040Details:"Objectifs à long terme : éliminer l’impact environnemental.",
    focusTitle:"Axes de durabilité",
    focusSubtitle:"Section responsive en trois colonnes.",
    focus1Title:"Gestion de l’eau",
    focus1Text:"Réduire l’usage de l’eau et protéger les bassins.",
    focus2Title:"Fabrication responsable",
    focus2Text:"Efficacité, réduction des déchets, opérations plus propres.",
    focus3Title:"Transparence & reporting",
    focus3Text:"Rapports clairs pour suivre les objectifs.",
    learnMore:"En savoir plus",
    subTitle:"S’abonner aux mises à jour",
    subSubtitle:"Recevez les dernières nouvelles.",
    nameLabel:"Nom complet *",
    nameError:"Veuillez saisir votre nom.",
    emailLabel:"Adresse e-mail *",
    emailError:"Veuillez saisir un e-mail valide.",
    subBtn:"S’abonner",
    footerText:"Chronologie Durabilité",
    backToTop:"Haut de page",
    modalTitle:"Intel RISE (aperçu)",
    modalBody:"RISE est une stratégie de durabilité centrée sur des actions responsables, inclusives, durables et facilitatrices.",
    modalClose:"Fermer",
    modalCta:"S’abonner"
  },

  ar: {
    skipLink:"تخطي إلى المحتوى الرئيسي",
    langLabel:"اللغة",
    navTimeline:"الخط الزمني",
    navFocus:"محاور التركيز",
    navNewsletter:"النشرة",
    heroTitle:"الاستدامة عبر العصور",
    heroSubtitle:"استكشف رحلة Intel في التطور التقني والاستدامة — من المعالجات الأولى إلى الحوسبة الحديثة المدعومة بالطاقة المتجددة.",
    heroCta:"عرض الخط الزمني",
    heroModalBtn:"تعرف على RISE",
    heroCardTitle:"تصميم جاهز عالميًا",
    heroCard1:"دعم RTL",
    heroCard2:"تصميم متجاوب بـ Bootstrap",
    heroCard3:"نموذج اشتراك متاح",
    timelineTitle:"الخط الزمني لتقنيات Intel",
    timelineSubtitle:"محطات رئيسية في الابتكار والاستدامة.",
    prevBtn:"السابق",
    nextBtn:"التالي",
    t1968Title:"تأسيس Intel",
    t1968Summary:"بداية الابتكار في أشباه الموصلات.",
    t1968Details:"شكّل تأسيس Intel انطلاقة للإلكترونيات الدقيقة الحديثة ومهّد لحوسبة أكثر كفاءة.",
    t1971Title:"أول معالج دقيق",
    t1971Summary:"أصبحت الحوسبة أصغر وأكثر كفاءة.",
    t1971Details:"غيّر المعالج الدقيق عالم الحوسبة بتركيز قوة المعالجة في شريحة صغيرة وفعالة.",
    t1978Title:"معمارية 8086",
    t1978Summary:"تحسينات المعمارية تدفع الأداء.",
    t1978Details:"تصاميم أفضل حسّنت الأداء مع تقليل متطلبات الطاقة.",
    t1993Title:"عصر Pentium",
    t1993Summary:"انتشار الحوسبة الشخصية عالميًا.",
    t1993Details:"ازدادت أهمية كفاءة الطاقة مع انتشار الحواسيب حول العالم.",
    t2006Title:"التركيز على الكفاءة",
    t2006Summary:"أصبح الأداء لكل واط معيارًا مهمًا.",
    t2006Details:"أُعيد تصميم المعالجات لتحقيق قدرة أكبر باستهلاك كهرباء أقل.",
    t2013Title:"مبادرات المياه والنفايات",
    t2013Summary:"توسّع الاستدامة إلى العمليات.",
    t2013Details:"تركيز أقوى على تقليل استهلاك المياه ونفايات التصنيع.",
    t2020Title:"الطاقة المتجددة",
    t2020Summary:"طاقة نظيفة لدعم التقنية.",
    t2020Details:"تعتمد مراكز البيانات والتصنيع بشكل أكبر على مصادر متجددة.",
    t2030Title:"أهداف مستقبلية",
    t2030Summary:"أهداف طموحة للاستدامة.",
    t2030Details:"التزامات لتقليل الانبعاثات واستخدام الموارد.",
    t2040Title:"رؤية صافي صفر",
    t2040Summary:"مستقبل محايد كربونيًا.",
    t2040Details:"أهداف طويلة المدى لإزالة الأثر البيئي بالكامل.",
    focusTitle:"محاور الاستدامة",
    focusSubtitle:"تخطيط بثلاثة أعمدة متجاوب مع جميع الشاشات.",
    focus1Title:"إدارة المياه",
    focus1Text:"تقليل استخدام المياه وتحسين صحة الأحواض المائية.",
    focus2Title:"تصنيع مسؤول",
    focus2Text:"رفع الكفاءة وتقليل النفايات وعمليات أنظف.",
    focus3Title:"الشفافية والتقارير",
    focus3Text:"تقارير واضحة لقياس التقدم نحو الأهداف.",
    learnMore:"اعرف المزيد",
    subTitle:"اشترك في تحديثات الاستدامة",
    subSubtitle:"سجل لتصلك تحديثات دورية.",
    nameLabel:"الاسم الكامل *",
    nameError:"يرجى إدخال الاسم.",
    emailLabel:"البريد الإلكتروني *",
    emailError:"يرجى إدخال بريد إلكتروني صحيح.",
    subBtn:"اشتراك",
    footerText:"الاستدامة في Intel",
    backToTop:"العودة للأعلى",
    modalTitle:"Intel RISE (نظرة عامة)",
    modalBody:"RISE هي استراتيجية للاستدامة تركز على إجراءات مسؤولة وشاملة ومستدامة وتمكينية.",
    modalClose:"إغلاق",
    modalCta:"اشتراك"
  }
};

// ----- APPLY TEXT -----
function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

// ----- APPLY DIR + BOOTSTRAP CSS -----
function applyDirAndBootstrap(lang) {
  const isRTL = rtlLangs.has(lang);
  htmlEl.lang = lang;
  htmlEl.dir = isRTL ? "rtl" : "ltr";

  if (!bsCss) return;

  bsCss.href = isRTL
    ? "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css"
    : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
}

// ----- SET LANGUAGE -----
function setLanguage(lang) {
  applyLanguage(lang);
  applyDirAndBootstrap(lang);
  localStorage.setItem("siteLanguage", lang);
  if (langSelect) langSelect.value = lang;
}

// ----- TIMELINE MOVE (Prev/Next) -----
function getStep() {
  if (!scroller) return 300;
  const card = scroller.querySelector(".timeline-card");
  if (!card) return 300;
  const style = getComputedStyle(scroller);
  const gap = parseInt(style.columnGap || style.gap || "14", 10) || 14;
  return card.getBoundingClientRect().width + gap;
}

function scrollTimeline(direction) {
  if (!scroller) return;
  const step = getStep();
  const isRTL = htmlEl.dir === "rtl";

  // In RTL, scrolling direction feels reversed, so we flip it
  const delta = (direction === "next" ? 1 : -1) * step * (isRTL ? -1 : 1);

  scroller.scrollBy({ left: delta, behavior: "smooth" });
}

if (tlPrev) tlPrev.addEventListener("click", () => scrollTimeline("prev"));
if (tlNext) tlNext.addEventListener("click", () => scrollTimeline("next"));

// ----- AUTO-DETECT LANGUAGE CHANGES (LEVELUP) -----
let lastLang = (htmlEl.lang || "en").toLowerCase().split("-")[0];
setInterval(() => {
  const current = (htmlEl.lang || "en").toLowerCase().split("-")[0];
  if (current !== lastLang) {
    lastLang = current;
    setLanguage(i18n[current] ? current : "en");
  }
}, 800);

// ----- EVENT -----
if (langSelect) {
  langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
}

// ----- INIT -----
const saved = localStorage.getItem("siteLanguage") || "en";
setLanguage(saved);
