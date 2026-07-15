import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "AppFactory",
    role: "Flutter Developer",
    location: "القاهرة الجديدة",
    mode: "On-site · دوام كامل",
    age: "صفحة التوظيف نشطة ومفحوصة اليوم",
    salary: "تنافسي — الرقم غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "مطلوب 3–5 سنوات Flutter وDart وstate management وREST وWebSockets وCI/CD واختبارات؛ قريب جدًا من خبرتك الإنتاجية.",
    note: "الحضور من المكتب. اسأل من أول مكالمة عن الرينج المالي وإمكانية المرونة في الحضور.",
    href: "https://www.appfactoryltd.com/flutter-developer.html",
    coverLetter: `Dear AppFactory Hiring Team,

I am applying for the Flutter Developer position. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, WebSockets, and local storage.

My work includes unit testing, performance optimization, real-time features, code reviews, and automated delivery with GitHub Actions and Fastlane. This background closely matches your need for maintainable, high-performance apps across multiple product lines.

I would welcome the opportunity to discuss how I can contribute to AppFactory's mobile engineering team.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Adree",
    role: "Flutter Developer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · مقر العمل",
    age: "منشور أو متجدد خلال آخر يوم",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "3–6 سنوات Flutter مع Bloc/GetX وREST/GraphQL وFirebase وFCM وHive/SQLite وCI/CD؛ معظم المتطلبات موجودة عندك مباشرة.",
    note: "مقر الشركة الرئيسي الرياض، لكن الراتب مخفي. وضّح مستوى خبرتك في GraphQL واسأل عن الرينج قبل المراحل الطويلة.",
    href: "https://www.gulftalent.com/egypt/jobs/flutter-developer-607114",
    coverLetter: `Dear Adree Hiring Team,

I am interested in the Flutter Developer role. I bring more than three years of production Flutter experience across Android, iOS, and Windows, using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, FCM, Hive, SQLite, and SharedPreferences.

I have also worked on performance optimization, testing, real-time integrations, and CI/CD workflows with GitHub Actions and Fastlane. The role's focus on scalable cross-platform applications and reliable production delivery strongly matches my current work.

I would be pleased to discuss the team, compensation range, and how I can contribute.

Best regards,
Muhammad Essam`,
  },
  {
    company: "VerteX Technologies",
    role: "Middle Flutter Developer",
    location: "Smart Village، الجيزة",
    mode: "On-site · دوام كامل",
    age: "صفحة الشركة نشطة ومفحوصة اليوم",
    salary: "بالدولار — الرقم غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور Mid صريح ويطلب 3+ سنوات Flutter/Dart وBLoC وREST وSOLID وarchitecture قوية؛ مناسب جدًا لمستواك الحالي.",
    note: "العرض يذكر راتبًا بالدولار لكن بلا رقم. تأكد من الرينج وعدد أيام الحضور قبل المقابلة الفنية.",
    href: "https://vertextech-eg.com/vacancies/middle-flutter-developer",
    coverLetter: `Dear VerteX Technologies Hiring Team,

I am applying for the Middle Flutter Developer position. I have more than three years of commercial Flutter and Dart experience, with strong hands-on work in BLoC/Cubit, REST APIs, SOLID principles, Clean Architecture, MVVM, and modular application design.

I have delivered production features across Android, iOS, and Windows, including Firebase integrations, local persistence, testing, performance improvements, and CI/CD automation. I am comfortable collaborating in English and working within an engineering-focused international team.

I would be glad to discuss how my experience fits your current projects.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Cubic Information Systems",
    role: "Flutter Developer",
    location: "مصر",
    mode: "Contract · نظام العمل غير موضح",
    age: "صفحة الشركة نشطة ومفحوصة اليوم",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الفرصة الجديدة 1–3 سنوات وتطلب Flutter/Dart وBloc وREST وCI/CD والنشر على المتاجر؛ مناسبة لخبرتك أكثر من إعلان Senior القديم.",
    note: "العقد والراتب ونظام العمل غير موضحين. اتأكد منهم قبل استثمار وقت في المراحل التالية.",
    href: "https://cubicsystems.com/job/flutter-developer/",
    coverLetter: `Dear Cubic Information Systems Hiring Team,

I am applying for the Flutter Developer contract position. I have more than three years of production experience building and maintaining Flutter applications with Dart, BLoC/Cubit, Clean Architecture, REST APIs, Firebase, testing, and CI/CD.

My background includes third-party SDK integrations, publishing applications, improving performance, and supporting reliable releases across Android, iOS, and Windows. The responsibilities listed for this role closely match the work I deliver today.

I would appreciate the opportunity to discuss the contract duration, work model, and compensation range.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Nawy Real Estate",
    role: "Senior Flutter Developer",
    location: "مصر",
    mode: "دوام كامل · نظام العمل غير موضح",
    age: "منشور أو متجدد خلال آخر أسبوع",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور Senior لكنه محدد 3–5 سنوات، ويركز على Flutter والاختبارات وAPIs وقواعد البيانات والأداء والـarchitecture؛ ضمن نطاق خبرتك.",
    note: "الراتب ونظام الحضور مخفيان. اسأل عنهما، وركّز في التقديم على ملكية الميزات والمشاريع المنشورة.",
    href: "https://www.bayt.com/en/egypt/jobs/senior-flutter-developer-74846404/",
    coverLetter: `Dear Nawy Hiring Team,

I am interested in the Senior Flutter Developer position. I have more than three years of production Flutter experience across Android, iOS, and Windows, with hands-on ownership of features built using BLoC/Cubit, Clean Architecture, MVVM, REST APIs, Firebase, local databases, and automated testing.

My recent work includes architecture migration, performance improvement, third-party integrations, code review, and CI/CD with GitHub Actions and Fastlane. This experience aligns closely with the role's 3–5 year range and its focus on scalable, testable mobile products.

I would welcome the opportunity to discuss how I can contribute to Nawy's mobile products.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "فرص تقرير 14 يوليو (Jolie وTawfeer وVee Tech وZad aljoud وCubic Senior): ما اتكررتش علشان التقرير يفضل للفرص الجديدة.",
  "VAM Systems — قطر: إعلان Flutter القديم مش موجود ضمن الوظائف الحالية في صفحة الشركة، فاعتبرته مقفولًا.",
  "Envision Employment Solutions: فرصة Senior Mobile Developer طالبة 6+ سنوات، ففرق الخبرة أكبر من المناسب.",
  "Nile Bits وSSC وTalent 360 والإعلانات الأقدم: Senior بمتطلبات أعلى أو أقدم من البدائل الأقوى اليوم.",
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد</span>
          <span className="date">تقرير 15 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">تقرير وظائف Flutter اليومي</p>
          <h1>٥ فرص جديدة قوية، من غير تكرار تقرير امبارح.</h1>
          <p className="intro">كل فرصة مفتوحة بمسار تقديم واضح وشركة مقرها في مصر أو دولة عربية. الأرقام المالية غير معلنة، فاسأل عن الرينج بدري.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>5</strong><span>تطابق قوي</span></div>
          <div><strong>0</strong><span>فرص ممكنة</span></div>
          <div><strong>2</strong><span>رسائل توظيف مهمة</span></div>
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
          <div><p className="eyebrow">الأولوية اليوم</p><h2>ابدأ بـ AppFactory ثم Adree ثم VerteX</h2></div>
          <p>كل الفرص برواتب مخفية أو بدون رقم واضح. اسأل عن الرينج المالي ونظام الحضور قبل أي مرحلة طويلة.</p>
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
            <p>ظهر طلبان مهمان من Mindrift. استبعدت إيصالات التقديم وتنبيهات الوظائف والرسائل العامة، واحتفظت فقط بالخطوات المطلوبة منك.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">14 يوليو · 11:36 ص</span><span className="match stretch">عاجل</span></div>
              <p className="company">Mindrift Team</p>
              <h3>Complete your assessment to join Mindrift projects</h3>
              <p className="why"><b>ليه مهمة:</b> راجعوا طلبك ودعوك للخطوة التالية. لازم تكمّل التقييم خلال 48 ساعة علشان تفضل مؤهل للمشاريع القادمة.</p>
              <p className="note"><b>الإجراء:</b> كمّل التحقق من الهوية أولًا، وبعده التقييم من لابتوب قبل 16 يوليو الساعة 11:36 صباحًا. استخدام أدوات AI في التقييم ممنوع.</p>
            </article>
            <article className="emailCard">
              <div className="cardTop"><span className="rank">14 يوليو · 9:53 م</span><span className="match good">أولوية عالية</span></div>
              <p className="company">Mindrift Team</p>
              <h3>Please complete your identity verification</h3>
              <p className="why"><b>ليه مهمة:</b> التحقق من الهوية خطوة مطلوبة مرة واحدة علشان تقدر تكمل على Mindrift وتحمي الحساب والأرباح.</p>
              <p className="note"><b>الإجراء:</b> ادخل لوحة Mindrift ونفّذ التحقق عبر Persona، وبعد نجاحه ابدأ التقييم فورًا.</p>
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
        <p>آخر تحديث: 15 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
