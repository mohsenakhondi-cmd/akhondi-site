
const dict = {
  en: {
    title: "Dr. Mohsen Akhondi — Anesthesiologist & ICU Physician",
    role: "Facharzt für Anästhesiologie • Pediatric Anesthesia • Intensive Care",
    contact: "Contact",
    about: "About",
    resume: "Resume",
    certificates: "Certificates",
    languages: "Languages",
    about_text: "Experienced anesthesiologist with broad clinical experience in Germany and Iran, specialized in pediatric anesthesia, intensive care, and perioperative pain management. Strong knowledge of modern anesthesia & ICU techniques and excellent patient care.",
    contact_lines: [
      "Leipzig & Wutöschingen, Germany",
      "Phone: +49 151 7166 7066",
      "Email: Akhondi@Live.com"
    ],
    education: "Education",
    exp: "Experience",
    docs: "Official Documents",
    skills: "Key Competencies",
    skills_list: [
      "Conducting anesthesia in multiple surgical specialties",
      "ICU patient management incl. postoperative monitoring",
      "Emergency team participation for critically ill patients",
      "Teaching residents & students in anesthesia and emergency medicine",
      "Developing pain therapy protocols and QA programs"
    ],
    langs: ["German: C1 (medical)", "English: Fluent", "Persian: Native"],
  },
  de: {
    title: "Dr. Mohsen Akhondi — Facharzt für Anästhesiologie & Intensivmediziner",
    role: "Kinderanästhesie • Intensivmedizin • Perioperative Schmerztherapie",
    contact: "Kontakt",
    about: "Über mich",
    resume: "Lebenslauf",
    certificates: "Weiterbildungen & Zertifikate",
    languages: "Sprachen",
    about_text: "Erfahrener Facharzt für Anästhesiologie mit Berufserfahrung in Deutschland und Iran. Spezialisierung auf Kinderanästhesie, Intensivmedizin und perioperative Schmerztherapie. Sehr gute Kenntnisse moderner Anästhesie- und Intensivverfahren sowie patientenzentrierte Versorgung.",
    contact_lines: [
      "Leipzig & Wutöschingen, Deutschland",
      "Telefon: +49 151 7166 7066",
      "E‑Mail: Akhondi@Live.com"
    ],
    education: "Ausbildung",
    exp: "Berufserfahrung",
    docs: "Offizielle Dokumente",
    skills: "Fachliche Kompetenzen",
    skills_list: [
      "Durchführung von Anästhesieverfahren in verschiedenen Disziplinen",
      "Betreuung von Patienten auf der Intensivstation inkl. postoperativer Überwachung",
      "Mitarbeit im Notfallteam bei akut kritischen Patienten",
      "Schulung von Assistenzärzten und Studenten in Anästhesie/Notfallmedizin",
      "Entwicklung von Schmerztherapie‑ und QM‑Protokollen"
    ],
    langs: ["Deutsch: C1 (Medizin)", "Englisch: Fließend", "Persisch: Muttersprache"],
  },
  fa: {
    title: "دکتر محسن آخوندی — متخصص بیهوشی و پزشک مراقبت‌های ویژه",
    role: "بیهوشی کودکان • مراقبت‌های ویژه • دردهای پیرامون عمل",
    contact: "تماس",
    about: "درباره من",
    resume: "رزومه",
    certificates: "دوره‌ها و گواهی‌نامه‌ها",
    languages: "زبان‌ها",
    about_text: "متخصص بیهوشی با تجربه کاری گسترده در آلمان و ایران، با تمرکز بر بیهوشی اطفال، مراقبت‌های ویژه و درمان درد پیرامون عمل. مسلط به روش‌های نوین بیهوشی و ICU و ارائه مراقبت ایمن و بیمارمحور.",
    contact_lines: [
      "لایپزیگ و ووتوشینگن، آلمان",
      "تلفن: ‎+49 151 7166 7066",
      "ایمیل: ‎Akhondi@Live.com"
    ],
    education: "تحصیلات",
    exp: "سوابق شغلی",
    docs: "اسناد رسمی",
    skills: "شایستگی‌های کلیدی",
    skills_list: [
      "اجرای تکنیک‌های بیهوشی در تخصص‌های جراحی مختلف",
      "مدیریت بیماران ICU شامل پایش پس از عمل",
      "حضور در تیم‌های اورژانس بیماران بحرانی",
      "آموزش دستیاران و دانشجویان در بیهوشی و طب اورژانس",
      "تدوین پروتکل‌های درد و بهبود کیفیت"
    ],
    langs: ["آلمانی: C1 (پزشکی)", "انگلیسی: روان", "فارسی: زبان مادری"],
  }
};

const timelines = {
  edu: [
    { years: "1997–2004", text_de: "Studium der Humanmedizin – Universität Mashhad, Iran", text_en:"MD — Mashhad University of Medical Sciences, Iran", text_fa:"پزشکی عمومی — دانشگاه علوم پزشکی مشهد" },
    { years: "2011–2015", text_de: "Facharztausbildung Anästhesiologie – Universität Mashhad, Iran", text_en:"Anesthesiology Specialty Training — Mashhad, Iran", text_fa:"تخصص بیهوشی — دانشگاه مشهد" },
    { years: "2017–2019", text_de: "Weiterbildung in Kinderanästhesie – Universität Mashhad, Iran", text_en:"Pediatric Anesthesia Fellowship — Mashhad, Iran", text_fa:"فلوشیپ بیهوشی کودکان — مشهد" },
    { years: "2023", text_de: "MBA in Strategy – Universität Teheran", text_en:"MBA (Strategy) — University of Tehran", text_fa:"MBA استراتژی — دانشگاه تهران" },
  ],
  exp: [
    { years:"seit 07/2023", text_de:"Assistenzarzt/FA Anästhesie – Sana Klinikum Hof (DE)", text_en:"Anesthesiologist — Sana Klinikum Hof, Germany", text_fa:"پزشک بیهوشی — بیمارستان سانه هوف آلمان" },
    { years:"07/2021–06/2023", text_de:"Assistenzarzt Anästhesie – Kreiskrankenhaus Torgau (DE)", text_en:"Anesthesia Resident — KKH Torgau (DE)", text_fa:"رزیدنت بیهوشی — بیمارستان تورگا" },
    { years:"04/2021–06/2021", text_de:"Assistenzarzt Anästhesie – Herzzentrum Leipzig (DE)", text_en:"Anesthesia Resident — Heart Center Leipzig", text_fa:"رزیدنت بیهوشی — هرتسنتروم لایپزیگ" },
    { years:"2015–2017", text_de:"Chefarzt Anästhesie – Sajadeh & Taleghani KH, Iran", text_en:"Head of Anesthesia — Sajadeh & Taleghani Hospitals, Iran", text_fa:"رئیس بخش بیهوشی — بیمارستان‌های سجادِه و طالقانی" }
  ],
  certs: [
    "2023: Berliner Regionalanästhesie Intensivkurs (BRAIN)",
    "2023: Strahlenschutzkurs",
    "2023: Perioperative Schmerztherapie",
    "2023: Intensivmedizinische Komplexbehandlung",
    "2023: Sonographie & Echokardiographie in der Intensivmedizin"
  ],
  docs: [
    "Approbation in Deutschland (28.04.2023)",
    "Anerkennung als Facharzt für Anästhesiologie in Deutschland",
    "Berechtigung zur Führung des iranischen Doktortitels in Deutschland",
    "MBA in Strategy – Universität Teheran (2023)"
  ]
};

let current = "de";
function setLang(lang){
  current = lang;
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  const t = dict[lang];
  document.querySelector("#title").textContent = t.title;
  document.querySelector("#role").textContent = t.role;
  document.querySelector("#about h2").textContent = t.about;
  document.querySelector("#resume h2").textContent = t.resume;
  document.querySelector("#certs h2").textContent = t.certificates;
  document.querySelector("#langs h2").textContent = t.languages;
  document.querySelector("#about .card p").textContent = t.about_text;
  const c = document.querySelector("#contact");
  c.innerHTML = "";
  t.contact_lines.forEach(l=>{
    const p = document.createElement("div"); p.className="meta"; p.textContent = l; c.appendChild(p);
  });
  // timelines
  const edu = document.querySelector("#edu");
  edu.innerHTML="";
  timelines.edu.forEach(e=>{
    const li=document.createElement("li");
    li.innerHTML = `<div class="meta">${e.years}</div><div>${lang==='de'?e.text_de:lang==='en'?e.text_en:e.text_fa}</div>`;
    edu.appendChild(li);
  });
  const exp = document.querySelector("#exp");
  exp.innerHTML="";
  timelines.exp.forEach(e=>{
    const li=document.createElement("li");
    li.innerHTML = `<div class="meta">${e.years}</div><div>${lang==='de'?e.text_de:lang==='en'?e.text_en:e.text_fa}</div>`;
    exp.appendChild(li);
  });
  const cl = document.querySelector("#skills-list");
  cl.innerHTML="";
  t.skills_list.forEach(s=>{ const li=document.createElement("li"); li.textContent=s; cl.appendChild(li); });
  const lg = document.querySelector("#lang-list");
  lg.innerHTML="";
  t.langs.forEach(s=>{ const li=document.createElement("li"); li.textContent=s; lg.appendChild(li); });
  // Toggle buttons
  document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.remove("active"));
  document.querySelector(`.lang-switch button[data-lang='${lang}']`).classList.add("active");
}

window.addEventListener("DOMContentLoaded",()=>{
  setLang("de");
  document.querySelectorAll(".lang-switch button").forEach(btn=>btn.addEventListener("click",()=>setLang(btn.dataset.lang)));
});
