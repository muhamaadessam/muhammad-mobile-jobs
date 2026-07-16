import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "Dsquares",
    role: "Senior Mobile Developer - Flutter",
    location: "مصر",
    mode: "دوام كامل · نظام العمل غير موضح",
    age: "منشور 22 يونيو وما زال مفتوحًا بمسار Apply",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "يطلب 2–5 سنوات Flutter مع BLoC/Cubit وREST وDio وget_it وHive/SharedPreferences وClean Architecture؛ مطابق جدًا لخبرتك الحالية.",
    note: "المسمى Senior لكن مدى الخبرة مناسب. الراتب ونظام الحضور مخفيان، فاسأل عنهما قبل أي مرحلة طويلة.",
    href: "https://www.naukrigulf.com/senior-mobile-developer-flutter-jobs-in-egypt-in-dsquares-2-to-5-years-n-cd-10009091-jid-220626501565",
    coverLetter: `Dear Dsquares Hiring Team,

I am applying for the Senior Mobile Developer - Flutter position. I have more than three years of production Flutter experience across Android, iOS, and Windows, using Dart, BLoC/Cubit, Clean Architecture, REST APIs, Dio-style networking, dependency injection with GetIt, Firebase, and local storage such as Hive, SQLite, and SharedPreferences.

My recent work includes architecture migration, production debugging, performance optimization, code reviews, unit testing, and automated delivery with GitHub Actions and Fastlane. The role's focus on maintainable Flutter apps, BLoC/Cubit, clean architecture, and collaboration with backend and design teams is a strong match for my background.

I would welcome the opportunity to discuss how I can contribute to Dsquares' mobile products.

Best regards,
Muhammad Essam`,
  },
  {
    company: "SBC",
    role: "Flutter Developer",
    location: "Adonis، لبنان",
    mode: "On-site · دوام كامل",
    age: "منشور 30 يونيو وما زال مفتوحًا بمسار Apply",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "شركة لبنانية برمجية تطلب Flutter/Dart وAndroid/iOS وGit وdebugging/performance؛ مناسب لو relocation للبنان خيار مقبول.",
    note: "الدور on-site والراتب مخفي. اسأل عن التأشيرة/الانتقال والرينج المالي قبل المقابلة.",
    href: "https://www.naukrigulf.com/flutter-developer-jobs-in-lebanon-in-sbc-1-to-6-years-n-cd-10050399-jid-300626501316",
    coverLetter: `Dear SBC Hiring Team,

I am interested in the Flutter Developer role. I have more than three years of production Flutter and Dart experience building cross-platform applications for Android, iOS, and Windows.

My work includes BLoC/Cubit, GetX, Clean Architecture, MVVM, REST API integrations, Firebase, local storage, Git workflows, debugging, performance optimization, testing, and CI/CD. I am comfortable collaborating with design and backend teams to deliver stable, maintainable mobile features.

I would be glad to discuss the role, relocation details, and how I can contribute to SBC's mobile products.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Pioneers Academy",
    role: "Mobile Developer (Flutter)",
    location: "عمّان، الأردن",
    mode: "On-site · دوام كامل",
    age: "منشور قبل 8 ساعات",
    salary: "غير معلن",
    match: "فرصة ممكنة",
    matchClass: "good",
    why: "حديث جدًا ويطلب Flutter لبناء تطبيقات iOS/Android مع REST APIs وMVVM وكود قابل للاختبار؛ المتطلبات الأساسية مناسبة.",
    note: "قطاع التعليم والتدريب، والتفاصيل التقنية أقل من Dsquares. اعتبرها بديلًا جيدًا لو الأردن/relocation مناسب.",
    href: "https://www.naukrigulf.com/mobile-developer-jobs-in-amman-jordan-in-pioneers-academy-1-to-5-years-n-cd-40004155-jid-250626501687",
    coverLetter: `Dear Pioneers Academy Hiring Team,

I am applying for the Mobile Developer (Flutter) position. I have more than three years of hands-on Flutter and Dart experience building production applications for Android, iOS, and Windows.

My background includes REST API integration, MVVM and Clean Architecture, BLoC/Cubit, GetX, Firebase, local storage, testing, debugging, and performance optimization. I also work closely with backend, QA, and design teams to ship stable, maintainable features.

I would welcome the opportunity to discuss how I can support Pioneers Academy's mobile application work.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "AppFactory وAdree وVerteX وCubic وNawy: منشورين في تقرير 15 يوليو، فمش هكررهم إلا لو فيه تغيير مهم.",
  "Net2Source Dubai: 8–15 سنة، أعلى بوضوح من نطاق الخبرة المناسب.",
  "Urban Ridge Supplies / Jackpot Technologies: Flutter Game Developer قوي تقنيًا، لكن مقر الشركة العربي غير مثبت كفاية من الإعلان.",
  "Nile Bits وTalent 360 وEnvision: أقدم أو Senior بمتطلبات خبرة أعلى من المناسب.",
  "Adree وVerteX في Gmail: إيصالات استلام/تنبيهات فقط، وليست ردود Recruiter أو خطوات جديدة.",
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد</span>
          <span className="date">تقرير 16 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">تقرير وظائف Flutter اليومي</p>
          <h1>٣ فرص جديدة فقط بعد حذف التكرار والتنبيهات.</h1>
          <p className="intro">كل فرصة مفتوحة بمسار تقديم واضح وشركة في مصر أو دولة عربية. الأرقام المالية غير معلنة، فاسأل عن الرينج بدري.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>2</strong><span>تطابق قوي</span></div>
          <div><strong>1</strong><span>فرصة ممكنة</span></div>
          <div><strong>0</strong><span>رسائل توظيف مهمة</span></div>
        </div>
      </header>

      <section className="criteria" aria-label="معايير البحث">
        <span>مصر أو شركة عربية</span>
        <span>30,000 جنيه+ أو 800 دولار+</span>
        <span>Remote / Hybrid / On-site</span>
        <span>Mid أو Senior مناسب</span>
      </section>

      <section className="content">
        <div className="sectionHead">
          <div><p className="eyebrow">الأولوية اليوم</p><h2>ابدأ بـ Dsquares ثم SBC</h2></div>
          <p>Pioneers Academy مناسبة كخيار احتياطي. كل الرواتب مخفية، فالسؤال عن الرينج ونظام الحضور أول خطوة.</p>
        </div>

        <div className="jobGrid">
          {jobs.map((job, index) => (
            <article className="jobCard" key={`${job.company}-${job.role}`}>
              <div className="cardTop">
                <span className="rank">{String(index + 1).padStart(2, "0")}</span>
                <span className={`match ${job.matchClass}`}>{job.match}</span>
              </div>
              <p className="company">{job.company}</p>
              <h3>{job.role}</h3>
              <div className="meta"><span>{job.location}</span><span>{job.mode}</span><span>{job.age}</span></div>
              <div className="salary"><span>الراتب</span><strong>{job.salary}</strong></div>
              <p className="why"><b>ليه مناسبة:</b> {job.why}</p>
              <p className="note"><b>خد بالك:</b> {job.note}</p>
              <div className="actions">
                <CopyButton text={job.coverLetter} />
                <a href={job.href} target="_blank" rel="noreferrer" aria-label={`فتح وظيفة ${job.role} في ${job.company}`}>افتح الوظيفة <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>

        <section className="emailSection" aria-label="إيميلات التوظيف آخر 48 ساعة">
          <div className="sectionHead">
            <div><p className="eyebrow">من Gmail</p><h2>إيميلات التوظيف آخر ٤٨ ساعة</h2></div>
            <p>راجعت آخر 48 ساعة. لم يظهر رد شركة/ريكروتر مهم أو طلب مقابلة جديد؛ الموجود تنبيهات وظائف وإيصالات استلام فقط.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">15-16 يوليو</span><span className="match good">لا يوجد إجراء</span></div>
              <p className="company">Gmail</p>
              <h3>لا توجد ردود توظيف مهمة جديدة</h3>
              <p className="why"><b>الذي تم استبعاده:</b> تنبيهات Indeed وLinkedIn وPulse، نشرات LinkedIn، وإيصالات استلام Adree وVerteX.</p>
              <p className="note"><b>الإجراء:</b> لا يوجد رد مطلوب الآن من البريد. تابع فقط لو وصل طلب مقابلة أو assessment جديد.</p>
            </article>
          </div>
        </section>

        <div className="rejected" aria-label="فرص مستبعدة">
          <p className="eyebrow">فلترة اليوم</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
          <ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <footer>
        <p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح مسار التقديم.</p>
        <p>آخر تحديث: 16 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
