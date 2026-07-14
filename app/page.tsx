import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "Jolie Egypt / Meenda",
    role: "Flutter Mobile Developer",
    location: "الشيخ زايد، الجيزة",
    mode: "عن بُعد · دوام كامل",
    age: "منشور من 6 أيام",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور طالب 2+ سنة Flutter وBLoC/Cubit وREST/GraphQL وHive/SQLite وFirebase وCI/CD؛ ده أقرب وصف مباشر لخبرتك الحالية.",
    note: "الراتب مخفي. اسأل عن الرينج قبل أي مرحلة طويلة وتأكد إن خبرتك في GraphQL كافية.",
    href: "https://wuzzuf.net/jobs/p/f2qyxeh9duti-flutter-mobile-developer-jolie-egypt-giza-egypt",
    coverLetter: `Dear Jolie Egypt Hiring Team,

I am applying for the Flutter Mobile Developer position for Meenda. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, Clean Architecture, REST APIs, Firebase, and local storage with Hive and SQLite.

My experience also includes multilingual interfaces, real-time features, testing, performance work, and release automation with GitHub Actions and Fastlane. I am comfortable owning features from API integration through testing and deployment, and I can contribute effectively in a remote product team.

I would be glad to discuss how my experience can support Meenda's mobile launch.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Tawfeer",
    role: "Flutter Mobile Developer",
    location: "المعادي، القاهرة",
    mode: "Hybrid · دوام كامل",
    age: "منشور من حوالي شهر",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "مطلوب 3+ سنوات موبايل وFlutter وBLoC/GetX وFirebase وHive/SQLite وREST وFastlane أو GitHub Actions؛ تطابق شبه كامل.",
    note: "الإعلان ما زال يعرض زر تقديم مباشر، لكن الراتب مخفي. اسأل أيضًا عن عدد أيام الحضور الأسبوعية.",
    href: "https://wuzzuf.net/jobs/p/rqvrdx4amus0-flutter-mobile-developer-tawfeer-cairo-egypt",
    coverLetter: `Dear Tawfeer Hiring Team,

I am writing to apply for the Flutter Mobile Developer role. I have more than three years of production experience with Flutter and Dart, including BLoC/Cubit and GetX, REST API integration, Firebase, Hive, SQLite, testing, and publishing applications across platforms.

My recent work includes modular and clean architecture, performance improvements, real-time integrations, and CI/CD workflows using GitHub Actions and Fastlane. The responsibilities in this role closely match the work I deliver today.

I would welcome the opportunity to discuss the team, hybrid schedule, and how I can contribute to Tawfeer's mobile products.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Vee Tech",
    role: "Flutter Developer",
    location: "التجمع الخامس، القاهرة",
    mode: "دوام كامل أو جزئي · On-site مع إمكانية Remote",
    age: "منشور من يومين",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الإعلان بيركز على المهارة الفعلية، Clean Architecture، الأداء، REST APIs، والاستقلالية بدل عدد السنين؛ مناسب جدًا لبروفايلك.",
    note: "الشركة تفضّل الحضور. اتفق من البداية على Remote أو عدد أيام المكتب، واسأل عن الراتب.",
    href: "https://wuzzuf.net/jobs/p/4b46aa9f-28b2-4f91-bc85-e56d92fec21f-Flutter-Developer-Vee-Tech-Cairo-Egypt",
    coverLetter: `Dear Vee Tech Hiring Team,

I am interested in your Flutter Developer position. I have more than three years of hands-on production experience building cross-platform applications with Flutter and Dart, with a strong focus on clean architecture, performance, maintainability, and reliable API integrations.

I have delivered features using BLoC/Cubit, GetX, Firebase, REST APIs, local databases, testing, and automated release workflows. I am comfortable taking ownership, working independently, and translating product requirements into polished Flutter experiences.

I would be happy to share examples of my work and discuss the preferred work model.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Zad aljoud",
    role: "Mobile Application Developer — Flutter",
    location: "الرياض، السعودية",
    mode: "عن بُعد · دوام كامل",
    age: "إعلان حديث والتقديم مفتوح",
    salary: "غير معلن",
    match: "ممكن — فرق خبرة",
    matchClass: "good",
    why: "Flutter وBloc وClean Architecture وREST وFirebase والاختبارات وCI/CD كلها مطابقة، والعمل Remote.",
    note: "طالبين 5 سنوات موبايل، وأنت 3+ سنوات إنتاجية. قدم فقط لو تقدر تعرض ملكية واضحة لمنتجات منشورة.",
    href: "https://wuzzuf.net/saudi/jobs/p/pbtrdcx4mggd-mobile-application-developer-flutter-zad-aljoud-riyadh-saudi-arabia",
    coverLetter: `Dear Zad aljoud Hiring Team,

I am applying for the Mobile Application Developer - Flutter role. I have more than three years of production experience delivering cross-platform Flutter applications with Dart, BLoC/Cubit, Clean Architecture, REST APIs, Firebase, testing, and CI/CD.

Although my total experience is below the stated five-year preference, my work has included ownership of production features, architecture migrations, performance improvements, local persistence, real-time integrations, and release workflows. I believe the depth and relevance of this experience make me worth considering.

I would be glad to share my portfolio and discuss the role.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Cubic Information Systems",
    role: "Senior Flutter Developer",
    location: "القاهرة الجديدة",
    mode: "On-site · دوام كامل",
    age: "إعلان أقدم لكنه ما زال يعرض التقديم",
    salary: "غير معلن",
    match: "ممكن — تحقق أولًا",
    matchClass: "good",
    why: "3+ سنوات Flutter وClean Architecture وMVVM وBLoC وFirebase وREST وCI/CD مطابقة، والشركة مقرها دبي.",
    note: "الإعلان قديم نسبيًا. افتحه وتأكد إن التقديم ما زال فعليًا، واسأل عن الراتب ونظام الحضور قبل المتابعة.",
    href: "https://wuzzuf.net/jobs/p/kcu4w3gntlht-senior-flutter-developer-cubic-information-systems-cairo-egypt",
    coverLetter: `Dear Cubic Information Systems Hiring Team,

I am interested in the Senior Flutter Developer position. I have more than three years of production Flutter experience using Dart, BLoC/Cubit, Clean Architecture, MVVM, REST APIs, Firebase, testing, and CI/CD.

My background includes building and maintaining cross-platform applications, migrating architecture, improving performance, integrating backend services, and supporting reliable releases. The technical scope of this role is closely aligned with my current experience.

Please let me know if the position is still open. I would be pleased to discuss how I can contribute.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "UE Technology وEGYTALHUB وFP وSSC: صفحات LinkedIn بتقول إن التقديم اتقفل.",
  "CodeNinja: الوظيفة في الرياض لكن الشركة مقرها باكستان، فمش مطابقة لشرط المقر العربي.",
  "Tanemera وأي Internship/Junior: خارج مستوى الخبرة المطلوب.",
  "MOWEEX: مقر الشركة الظاهر النمسا، فخرجت من شرط الشركات العربية.",
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد</span>
          <span className="date">تقرير 14 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">تقرير وظائف Flutter اليومي</p>
          <h1>٣ فرص قوية فعلًا، وفرصتين يستاهلوا مراجعة سريعة.</h1>
          <p className="intro">كل فرصة هنا لها مسار تقديم ظاهر، وشركة مقرها في مصر أو دولة عربية. الراتب غير معلن في كل الفرص، فاسأل عنه بدري.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>3</strong><span>تطابق قوي</span></div>
          <div><strong>2</strong><span>فرص ممكنة</span></div>
          <div><strong>0</strong><span>ردود Gmail مؤكدة</span></div>
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
          <div><p className="eyebrow">الأولوية اليوم</p><h2>ابدأ بـ Jolie ثم Tawfeer ثم Vee Tech</h2></div>
          <p>المرتب مخفي في الخمس فرص. لو الرينج أقل من 30,000 جنيه أو 800 دولار، وفّر وقتك واقفلها بدري.</p>
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
            <p>تعذر الوصول إلى Chrome/Gmail في تشغيل اليوم، لذلك لم أنشر أي رسائل قديمة أو إيصالات تقديم على إنها ردود شركات.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">14 يوليو</span><span className="match stretch">تعذر الفحص</span></div>
              <p className="company">muhammad159e@gmail.com</p>
              <h3>لا توجد ردود مؤكدة منشورة اليوم</h3>
              <p className="why"><b>السبب:</b> اتصال Chrome غير متاح في التشغيل الحالي، فتعذر تنفيذ بحث آخر 48 ساعة.</p>
              <p className="note"><b>الخطوة التالية:</b> عند عودة الوصول، يتكرر البحث ويظهر فقط رد بشري أو مقابلة أو تقييم أو خطوة تالية مهمة.</p>
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
        <p>آخر تحديث: 14 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
