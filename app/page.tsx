import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "Diverge AI",
    role: "Flutter Developer",
    location: "أبوظبي، الإمارات",
    mode: "دوام كامل · On-site",
    age: "مفتوحة حاليًا على Indeed",
    salary: "6,000–9,000 درهم إماراتي / شهر",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "شركة إماراتية مقرها أبوظبي طالبة 2+ سنة Flutter مع Bloc/Provider، REST وWebSocket، Hive/sqflite، FCM وFirebase، Clean Architecture، اختبارات وCI/CD؛ ده أقرب تطابق كامل لخبرتك الحالية.",
    note: "لازم تكون مستعد للانتقال لأبوظبي، ونموذج التقديم بيطلب تأكيد قبول نطاق الراتب. اكتب Yes لو النطاق مناسب لك.",
    href: "https://ae.indeed.com/viewjob?jk=9051550655829cb1",
    coverLetter: `Dear Diverge AI Hiring Team,

I am applying for the Flutter Developer position in Abu Dhabi. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, WebSocket-based services, Firebase, Hive, SQLite, testing, and Git.

My recent work includes migrating production features from GetX to Cubit/BLoC, improving modular architecture, integrating APIs and push notifications, resolving production issues, and automating releases with GitHub Actions and Fastlane. I have shipped and maintained live applications and am comfortable owning features from implementation through release.

I am based in Egypt and willing to relocate to Abu Dhabi. The advertised salary range is acceptable, and I would welcome the opportunity to help Diverge build reliable bilingual AI-powered mobile products.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Medad Holding",
    role: "Flutter Mobile Application Developer",
    location: "دبي، الإمارات",
    mode: "دوام كامل دائم · On-site",
    age: "مفتوحة حاليًا على Indeed",
    salary: "12,000–15,000 درهم إماراتي / شهر",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "شركة إماراتية مقرها دبي طالبة 3–5 سنوات Mobile مع Flutter/Dart وREST APIs وGit وأمان التطبيقات والنشر على المتاجر؛ خبرتك في تطبيقات الإنتاج وFirebase وCI/CD مناسبة جدًا، وخبرة الـfintech ميزة وليست شرطًا.",
    note: "الوظيفة من المكتب في دبي. وضّح استعدادك للانتقال واسأل عن التأشيرة والتأمين وموعد الانضمام في أول مقابلة.",
    href: "https://ae.indeed.com/viewjob?jk=aef0e038fc2c954a",
    coverLetter: `Dear Medad Holding Hiring Team,

I am applying for the Flutter Mobile Application Developer position in Dubai. I have more than three years of hands-on production experience building and maintaining Android, iOS, and Windows applications with Flutter and Dart.

My experience includes BLoC/Cubit, GetX, Clean Architecture, MVVM, REST APIs, Firebase, local storage, unit testing, Git, and app-store deployment. In recent roles, I migrated production code from GetX to Cubit/BLoC, improved modular architecture, integrated backend services, fixed live issues, and supported automated releases through GitHub Actions and Fastlane.

I am comfortable delivering secure, reliable mobile features in collaboration with product, design, backend, and QA teams. I am based in Egypt and willing to relocate to Dubai for this permanent role.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Script for Information Technology",
    role: "Flutter Developer",
    location: "سنابس / المنامة، البحرين",
    mode: "دوام كامل · On-site",
    age: "صاحب العمل نشط خلال آخر ساعات والتقديم مفتوح",
    salary: "400–900 دينار بحريني / شهر",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "شركة بحرينية مسجلة ومقرها المنامة، والإعلان يطلب 2–4 سنوات مع Flutter/Dart وREST APIs وBloc/Provider/Riverpod وFirebase وGit وCI/CD ونشر التطبيقات؛ كل ده داخل خبرتك.",
    note: "النطاق المعلن فوق الحد المطلوب، لكن الشغل من البحرين. اسأل قبل أي التزام عن التأشيرة، السكن، وصافي الراتب بعد أي استقطاعات.",
    href: "https://www.naukrigulf.com/flutter-developer-jobs-in-bahrain-in-script-for-information-technology-co.-w.l.l-2-to-4-years-n-cd-332265-jid-230726000339",
    coverLetter: `Dear Script IT Hiring Team,

I am applying for the Flutter Developer position in Bahrain. I have more than three years of production experience building and maintaining Flutter applications across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git.

My recent work includes migrating production modules from GetX to Cubit/BLoC, integrating APIs and third-party services, improving performance and maintainability, fixing production issues, and automating releases with GitHub Actions and Fastlane. I also have hands-on experience with app-store deployment and maintaining live applications.

I am based in Egypt and open to relocating to Bahrain. I would be glad to discuss the role, visa support, availability, and compensation.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Al-Tadamun Microfinance Association",
    role: "Flutter Developer",
    location: "الدقي، الجيزة",
    mode: "دوام كامل · On-site",
    age: "إعلان أقدم لكنه ما زال ضمن الشواغر المفتوحة",
    salary: "غير معلن",
    match: "فرصة ممكنة",
    matchClass: "good",
    why: "مؤسسة مصرية كبيرة طالبة 1–3 سنوات مع Flutter/Dart وREST APIs وGit واختبارات وأداء ونشر على المتاجر. التطابق التقني قوي ومسار التقديم على Wuzzuf مفتوح.",
    note: "الإعلان أقدم والراتب مخفي. اسأل من أول مكالمة عن صافي الراتب وساعات الحضور، وما تكملش لو أقل من 30 ألف جنيه.",
    href: "https://wuzzuf.net/jobs/p/4hmmvblpweo3-flutter-developer-al-tadamun-microfinance-association-giza-egypt",
    coverLetter: `Dear Al-Tadamun Hiring Team,

I am applying for the Flutter Developer position in Dokki. I have more than three years of production experience building and maintaining Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git.

In my current and recent roles, I have delivered new features, migrated production code from GetX to Cubit/BLoC, improved modular architecture, resolved live issues, written tests, and supported releases through GitHub Actions and Fastlane. I am comfortable collaborating with product, design, backend, and QA teams while owning features through deployment and maintenance.

I would welcome the opportunity to contribute to Al-Tadamun's mobile applications and discuss the role's scope, working arrangement, and compensation.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "CDS Solutions وInnovationTeam وOliv وKalvad وTechnosat وPayTabs وBlueCloud وAdree وNawy وTamara وDsquares: ظهروا في تقارير سابقة، فمش هكررهم من غير تغيير مهم.",
  "Colada: ظهر قبل كده، والراتب الظاهر حاليًا 350 دولار شهريًا، أقل من الحد الأدنى.",
  "NEOM Associate Flutter: صفحة LinkedIn بتقول إنهم لم يعودوا يقبلوا طلبات.",
  "Dorra Developments: آخر موعد للتقديم كان 16 يوليو، فالفرصة مقفولة.",
  "Salt Dubai: التطابق التقني جيد لكن جهة التوظيف Salt غير عربية المقر، فمرفوضة حسب الفلتر.",
  "SAZGENIX / MOAISUS: هوية صاحب العمل والمقر الرئيسي العربي مش واضحين بما يكفي.",
  "Smart EGAT: التقديم مفتوح لكن خبرة BLE وIoT أساسية، والراتب مخفي والإعلان أقدم؛ أولوية أقل من فرص النهارده.",
  "Tanemera وIbn Sina والفرص التدريبية: Junior أو Entry Level، فمش مناسبة للفلتر.",
  "رسائل Indeed وLinkedIn وPulse Job وNaukriGulf وWuzzuf: تنبيهات أو دعوات أو نشرات عامة، وليست ردود شركة أو Recruiter مهمة.",
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد</span>
          <span className="date">تقرير 26 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">تقرير وظائف Flutter اليومي</p>
          <h1>٣ فرص قوية برواتب واضحة، وفرصة إضافية محتملة.</h1>
          <p className="intro">ابدأ بـMedad Holding ثم Diverge AI بسبب قوة التطابق ونطاق الراتب، وبعدهم Script IT. مفيش ردود Recruiter مهمة في Gmail آخر ٤٨ ساعة.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>3</strong><span>تطابق قوي</span></div>
          <div><strong>1</strong><span>فرصة ممكنة</span></div>
          <div><strong>0</strong><span>رسالة توظيف مهمة</span></div>
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
          <div><p className="eyebrow">الأولوية اليوم</p><h2>قدّم على التلات فرص القوية</h2></div>
          <p>الفرص القوية لها رواتب معلنة فوق الحد ومقر عربي واضح ومسار تقديم مباشر. Al‑Tadamun احتياطي لأن الإعلان أقدم والراتب مخفي.</p>
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
            <p>راجعت الحساب muhammad159e@gmail.com وفلترت الرسائل المرسلة منك، تأكيدات التقديم، التنبيهات والنشرات. مفيش ردود شركة أو Recruiter مهمة.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">آخر ٤٨ ساعة</span><span className="match good">لا جديد مهم</span></div>
              <p className="company">Gmail · muhammad159e@gmail.com</p>
              <h3>0 ردود توظيف مهمة</h3>
              <p className="why"><b>اللي اتراجع:</b> تنبيهات Indeed وLinkedIn وPulse Job وNaukriGulf وWuzzuf، دعوات LinkedIn، ورسائل Onboarding ونشرات عامة.</p>
              <p className="note"><b>الإجراء المقترح:</b> مفيش متابعة عاجلة من الإيميل النهارده؛ ركّز على التقديم للفرص الثلاثة الأولى.</p>
            </article>
          </div>
        </section>

        <div className="rejected" aria-label="فرص مستبعدة">
          <p className="eyebrow">فلترة اليوم</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
          <ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <footer>
        <p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p>
        <p>آخر تحديث: 26 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
