
const dict = {
  en: {nav_about:"About", nav_resume:"Resume", nav_certs:"Certificates", nav_pubs:"Publications", nav_contact:"Contact",
    title:"Dr. Mohsen Akhondi", role:"Anesthesiologist • Pediatric Anesthesia • Intensive Care",
    about_h:"About", about_text:"Experienced anesthesiologist specialized in pediatric anesthesia, intensive care and perioperative pain therapy. Strong command of modern anesthesia & ICU techniques and patient‑centred care.",
    resume_h:"Resume", edu_h:"Education", exp_h:"Experience", certs_h:"Certificates", docs_h:"Official Documents",
    skills_h:"Key Competencies", skills:[
      "Anesthesia across multiple surgical specialties",
      "ICU management incl. postoperative monitoring",
      "Emergency team participation for critical patients",
      "Teaching residents & students (anesthesia, emergency)",
      "Developing pain therapy & quality protocols"
    ],
    langs_h:"Languages", langs:["German: C1 (medical)","English: Fluent","Persian: Native"],
    contact_h:"Contact", contact_btn:"Email me"
  },
  de: {nav_about:"Über mich", nav_resume:"Lebenslauf", nav_certs:"Zertifikate", nav_pubs:"Publikationen", nav_contact:"Kontakt",
    title:"Dr. Mohsen Akhondi", role:"Facharzt Anästhesiologie • Kinderanästhesie • Intensivmedizin",
    about_h:"Über mich", about_text:"Erfahrener Facharzt mit Schwerpunkt Kinderanästhesie, Intensivmedizin und perioperative Schmerztherapie. Sehr gute Kenntnisse moderner Verfahren und patientenzentrierte Versorgung.",
    resume_h:"Lebenslauf", edu_h:"Ausbildung", exp_h:"Berufserfahrung", certs_h:"Weiterbildungen & Zertifikate", docs_h:"Offizielle Dokumente",
    skills_h:"Fachliche Kompetenzen", skills:[
      "Anästhesieverfahren in verschiedenen Disziplinen",
      "Intensivmedizin inkl. postoperativer Überwachung",
      "Mitarbeit im Notfallteam",
      "Lehre für Assistenzärzte & Studierende",
      "Schmerztherapie- & QM-Protokolle entwickeln"
    ],
    langs_h:"Sprachen", langs:["Deutsch: C1 (Medizin)","Englisch: Fließend","Persisch: Muttersprache"],
    contact_h:"Kontakt", contact_btn:"E-Mail senden"
  },
  fa: {nav_about:"درباره من", nav_resume:"رزومه", nav_certs:"گواهی‌ها", nav_pubs:"مقالات", nav_contact:"تماس",
    title:"دکتر محسن آخوندی", role:"متخصص بیهوشی • بیهوشی کودکان • مراقبت‌های ویژه",
    about_h:"درباره من", about_text:"متخصص بیهوشی با تمرکز بر بیهوشی اطفال، مراقبت‌های ویژه و درد پیرامون عمل. مسلط به تکنیک‌های نوین بیهوشی و ICU و مراقبت بیمارمحور.",
    resume_h:"رزومه", edu_h:"تحصیلات", exp_h:"سوابق شغلی", certs_h:"دوره‌ها و گواهی‌نامه‌ها", docs_h:"اسناد رسمی",
    skills_h:"شایستگی‌ها", skills:[
      "اجرای انواع تکنیک‌های بیهوشی در رشته‌های جراحی",
      "مدیریت بیماران ICU و پایش پس از عمل",
      "حضور در تیم‌های اورژانس بیماران بحرانی",
      "آموزش دستیاران و دانشجویان",
      "تدوین پروتکل‌های درد و کیفیت"
    ],
    langs_h:"زبان‌ها", langs:["آلمانی: C1 (پزشکی)","انگلیسی: روان","فارسی: مادری"],
    contact_h:"تماس", contact_btn:"ایمیل"
  }
};

const edu = [
  "MD — Mashhad University of Medical Sciences, Iran",
  "Anesthesiology Specialty Training — Mashhad, Iran",
  "Pediatric Anesthesia Fellowship — Mashhad, Iran",
  "MBA (Strategy) — University of Tehran"
];
const experience = [
  "Anesthesiologist — Sana Klinikum Hof, Germany",
  "Anesthesia — Kreiskrankenhaus Torgau (Germany)",
  "Anesthesia — Heart Center Leipzig (Germany)",
  "Head of Anesthesia — Sajadeh & Taleghani Hospitals (Iran)"
];
const certs = [
  "Berliner Regionalanästhesie Intensivkurs (BRAIN)",
  "Strahlenschutzkurs",
  "Perioperative Schmerztherapie",
  "Intensivmedizinische Komplexbehandlung",
  "Sonographie und Echokardiographie in der Intensivmedizin"
];
const docs = [
  "Approbation (Deutschland)",
  "Anerkennung als Facharzt für Anästhesiologie (Deutschland)",
  "Berechtigung zur Führung des iranischen Doktortitels (Deutschland)",
  "MBA in Strategy – Universität Teheran"
];

function setLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang==='fa')?'rtl':'ltr';
  const t = dict[lang];
  document.querySelector('#brand').textContent = t.title;
  document.querySelectorAll('[data-i]').forEach(el=>{
    const key = el.getAttribute('data-i');
    el.textContent = t[key];
  });
  const fill = (id, arr)=>{
    const ul = document.getElementById(id); ul.innerHTML="";
    arr.forEach(x=>{const li=document.createElement('li'); li.textContent=x; ul.appendChild(li);});
  };
  fill('edu-list', edu);
  fill('exp-list', experience);
  fill('cert-list', certs);
  fill('doc-list', docs);
  fill('skill-list', t.skills);
  fill('lang-list', t.langs);
  document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.remove('active'));
  document.querySelector(`.lang-switch button[data-lang="${lang}"]`).classList.add('active');
}
window.addEventListener('DOMContentLoaded',()=>{
  setLang('de');
  document.querySelectorAll('.lang-switch button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
});
