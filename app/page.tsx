import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "Tamara",
    role: "Product Engineer II - Flutter",
    location: "الرياض، السعودية",
    mode: "دوام كامل · نظام العمل غير موضح",
    age: "أُعيد نشرها قبل 15 ساعة وما زال زر التقديم ظاهرًا",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "تطلب 3+ سنوات Flutter مع Dart وBLoC وClean Architecture وSOLID والاختبارات؛ مطابقة مباشرة لخبرتك، والشركة مقرها الرياض.",
    note: "أكثر من 200 متقدم. اسأل مبكرًا عن relocation أو إمكانية العمل من مصر وعن الرينج المالي.",
    href: "https://sa.linkedin.com/jobs/view/product-engineer-ii-flutter-at-tamara-4429957476",
    coverLetter: `Dear Tamara Hiring Team,

I am applying for the Product Engineer II - Flutter position. I have more than three years of production Flutter experience building Android, iOS, and Windows applications with Dart, BLoC/Cubit, Clean Architecture, SOLID principles, REST APIs, Firebase, testing, and CI/CD.

My recent work includes migrating production code from GetX to Cubit/BLoC, improving modular architecture, debugging complex issues, optimizing performance, reviewing code, and shipping reliable releases with GitHub Actions and Fastlane. Tamara's focus on readable, testable Flutter code and secure, scalable product features strongly matches my experience.

I would welcome the opportunity to discuss how I can contribute to Tamara's product engineering team.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Colada",
    role: "Flutter Engineer",
    location: "الرياض، السعودية",
    mode: "دوام كامل · فريق remote وasync-friendly",
    age: "منشور حديثًا وما زال زر التقديم ظاهرًا",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "Mid-to-Senior ويطلب 3+ سنوات مع REST/Dio وFirebase وGit وFastlane وrealtime updates وتطبيقات منشورة؛ قريب جدًا من خبرتك.",
    note: "الإعلان يصف الفريق بأنه remote، لكن الموقع المسجل الرياض. أكد قبول العمل من مصر قبل استثمار وقت طويل.",
    href: "https://sa.linkedin.com/jobs/view/flutter-engineer-at-colada-4436582717",
    coverLetter: `Dear Colada Hiring Team,

I am interested in the Flutter Engineer role. I have more than three years of production Flutter and Dart experience building and maintaining cross-platform applications for Android, iOS, and Windows.

My background includes BLoC/Cubit and GetX, Clean Architecture, REST API and JSON integrations, Firebase Messaging, real-time features with Pusher, local storage, testing, Git-based code review, and mobile delivery through GitHub Actions and Fastlane. I am comfortable owning features end-to-end and collaborating effectively in remote, asynchronous teams.

I would be glad to discuss how I can contribute to Colada's ordering, checkout, loyalty, and bilingual mobile experiences.

Best regards,
Muhammad Essam`,
  },
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
  {
    company: "7P Marketing & Software",
    role: "Flutter Developer",
    location: "الجيزة، مصر",
    mode: "دوام كامل · نظام الحضور غير موضح",
    age: "الصفحة ما زالت نشطة ومسار التواصل ظاهر؛ تاريخ النشر غير واضح",
    salary: "غير معلن",
    match: "فرصة ممكنة",
    matchClass: "good",
    why: "تطلب 3+ سنوات Flutter مع BLoC/GetX وREST/JSON وClean Architecture وMVVM وFirebase وCI/CD؛ تطابق تقني قوي ومقرها الجيزة.",
    note: "أضعف من الفرص الحديثة لأن عمر الإعلان غير واضح والتقديم عبر LinkedIn/التواصل مع ناشر الوظيفة. تحقق من الشاغر والراتب أولًا.",
    href: "https://eg.linkedin.com/jobs/view/flutter-developer-at-7p-marketing-software-4288507731",
    coverLetter: `Dear 7P Marketing & Software Hiring Team,

I am applying for the Flutter Developer position. I have more than three years of production Flutter experience across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, MVVM, REST APIs, JSON, Firebase, Git, testing, and CI/CD.

My recent work includes architecture migration, production debugging, performance optimization, third-party integrations, local storage, code reviews, and automated releases with GitHub Actions and Fastlane. These skills align closely with the role's focus on scalable, maintainable mobile applications.

I would welcome the opportunity to confirm the position's current status and discuss how I can contribute to your development team.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "AppFactory وAdree وVerteX وCubic وNawy: منشورين في تقرير 15 يوليو، فمش هكررهم إلا لو فيه تغيير مهم.",
  "Net2Source Dubai: 8–15 سنة، أعلى بوضوح من نطاق الخبرة المناسب.",
  "Urban Ridge Supplies / Jackpot Technologies: Flutter Game Developer قوي تقنيًا، لكن مقر الشركة العربي غير مثبت كفاية من الإعلان.",
  "Nile Bits وTalent 360 وEnvision: أقدم أو Senior بمتطلبات خبرة أعلى من المناسب.",
  "Loynova: الإعلان الجديد يطلب 5+ سنوات Flutter مخصصة، أعلى من خبرة محمد الحالية.",
  "Salt Dubai: شركة التوظيف ليست عربية المقر، والدور يشترط خبرة بنوك/خدمات مالية والعمل من المكتب 5 أيام.",
  "Tamara: استبعدت الصفحة القديمة المغلقة واستخدمت فقط إعادة النشر الجديدة المفتوحة.",
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
          <h1>٦ فرص اليوم بعد تحديث المساء وحذف التكرار والتنبيهات.</h1>
          <p className="intro">أضفت Tamara وColada كأقوى فرص المساء، و7P كخيار احتياطي يحتاج تأكيد حداثة الشاغر. كل الرواتب غير معلنة.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>4</strong><span>تطابق قوي</span></div>
          <div><strong>2</strong><span>فرصة ممكنة</span></div>
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
          <div><p className="eyebrow">الأولوية اليوم</p><h2>ابدأ بـ Tamara ثم Colada</h2></div>
          <p>بعدهما Dsquares وSBC. Pioneers Academy و7P خيارات احتياطية، وكل الرواتب مخفية.</p>
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
            <p>راجعت آخر 48 ساعة حتى تحديث المساء. لم يظهر رد شركة/ريكروتر مهم أو طلب مقابلة جديد؛ الموجود تنبيهات وإيصالات فقط.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">15-16 يوليو</span><span className="match good">لا يوجد إجراء</span></div>
              <p className="company">Gmail</p>
              <h3>لا توجد ردود توظيف مهمة جديدة</h3>
              <p className="why"><b>الذي تم استبعاده:</b> تنبيهات Indeed وLinkedIn وPulse، تنبيه Loynova، نشرات LinkedIn، وإيصالات استلام Adree وVerteX.</p>
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
