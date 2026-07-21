import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "Technosat",
    role: "Flutter Developer",
    location: "القاهرة الجديدة، مصر",
    mode: "دوام كامل · نظام الحضور غير موضح",
    age: "منشور حديثًا والصفحة ما زالت تستقبل المتقدمين",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "يطلب 3+ سنوات Flutter مع Dart وBLoC/Provider/Riverpod وREST وFirebase وClean Architecture وGit وCI/CD؛ مطابق مباشرة لخبرتك، والشركة مقرها الرياض.",
    note: "الراتب ونظام الحضور مخفيان. اسأل عنهما من أول تواصل، خصوصًا عدد أيام المكتب.",
    href: "https://eg.linkedin.com/jobs/view/flutter-developer-at-technosat-company-for-communications-and-information-technology-4413396946",
    coverLetter: `Dear Technosat Hiring Team,

I am applying for the Flutter Developer position in New Cairo. I have more than three years of production Flutter experience building Android, iOS, and Windows applications with Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git-based workflows.

My recent work includes migrating production code from GetX to Cubit/BLoC, improving modular architecture, debugging and optimizing live applications, integrating third-party services, and automating releases with GitHub Actions and Fastlane. This background closely matches your focus on scalable Flutter applications, clean architecture, Firebase, performance, and reliable releases.

I would welcome the opportunity to discuss how I can contribute to Technosat's mobile products.

Best regards,
Muhammad Essam`,
  },
  {
    company: "PayTabs Global",
    role: "Flutter and Android Developer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · نظام الحضور غير موضح",
    age: "إعادة نشر حديثة وزر التقديم ظاهر",
    salary: "غير معلن",
    match: "فرصة ممكنة",
    matchClass: "good",
    why: "Flutter هو التخصص الأساسي ويطلب 3+ سنوات مع MVVM/Clean Architecture وmodularization وREST وCI/CD وdebugging؛ الشركة مقرها الرياض ولها مكتب بالقاهرة.",
    note: "الدور يشترط خبرة عملية جيدة في Kotlin وبناء SDKs ومدفوعات، وده غير ظاهر في الـCV؛ قدم فقط لو عندك أمثلة حقيقية تقدر تعرضها.",
    href: "https://eg.linkedin.com/jobs/view/flutter-and-android-developer-at-paytabs-global-4388075886",
    coverLetter: `Dear PayTabs Hiring Team,

I am interested in the Flutter and Android Developer position. I have more than three years of production Flutter and Dart experience across Android, iOS, and Windows, with a strong focus on modular and clean architecture, REST API integrations, state management, testing, performance troubleshooting, and CI/CD.

My recent work includes maintaining production applications, migrating architecture from GetX to Cubit/BLoC, integrating Firebase and real-time services, improving reliability, and automating releases with GitHub Actions and Fastlane. My strongest specialization is Flutter, and I am particularly interested in applying that experience to scalable SDK integrations and secure payment products.

I would be glad to discuss the role's Kotlin and SDK expectations and how my Flutter production experience can support PayTabs' mobile ecosystem.

Best regards,
Muhammad Essam`,
  },
  {
    company: "BlueCloud Technologies Group",
    role: "Senior Mobile Developer",
    location: "القاهرة، مصر",
    mode: "On-site · دوام كامل",
    age: "منشور خلال الأسبوع والتقديم المباشر على Workable مفتوح",
    salary: "غير معلن",
    match: "فرصة ممكنة",
    matchClass: "good",
    why: "يطلب 3–5 سنوات mobile مع Flutter وBLoC وREST/GraphQL وFirebase وFastlane/GitHub Actions وإدارة النشر؛ معظمها مطابق، والشركة مقرها القاهرة.",
    note: "الإعلان يطلب خبرة قوية في React Native بجانب Flutter، وده غير موجود في الـCV. وضح إن تخصصك الأقوى Flutter واسأل هل يقبلوا Flutter-first.",
    href: "https://apply.workable.com/bluecloud-technologies/j/63F5874D1A/apply/",
    coverLetter: `Dear BlueCloud Technologies Hiring Team,

I am applying for the Senior Mobile Developer position. I have more than three years of production mobile experience specializing in Flutter and Dart, building and maintaining Android, iOS, and Windows applications.

My background includes BLoC/Cubit and GetX, Clean Architecture, REST APIs, Firebase, real-time features, local storage, testing, performance debugging, code reviews, and release automation with GitHub Actions and Fastlane. I have also owned production fixes and architecture improvements while collaborating with backend, QA, and product teams.

My strongest cross-platform specialization is Flutter. I would welcome a discussion about the Flutter-first needs of the role and how I can contribute to BlueCloud's enterprise mobile delivery team.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "Adree وNawy وTawfeer وTamara وColada وDsquares: ظهروا في تقارير سابقة، فمش هكررهم من غير تغيير مهم.",
  "EduLens وBayanatz وSystems Limited وOpen Innovation AI: الصفحات بتقول إن التقديم اتقفل.",
  "iDoc: التطابق التقني قوي، لكن صفحة الشركة تسجل المقر الرئيسي في لندن رغم وجود كيان وترخيص سعودي؛ شرط المقر العربي غير محسوم.",
  "Mosaada: تشترط خبرة مثبتة في ride-hailing أو delivery/logistics مع Mapbox وGoogle Maps، والإعلان يقول إن غير كده لن يُقبل.",
  "Envision وLoynova وNile Bits: يطلبوا 5–6+ سنوات أو مسؤوليات أعلى من النطاق المناسب.",
  "CodeNinja: مقرها باكستان، رغم أن الوظيفة في الرياض.",
  "تنبيهات LinkedIn والنشرات البريدية: ليست ردودًا من شركة أو Recruiter، لذلك لم تدخل قسم Gmail.",
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد</span>
          <span className="date">تقرير 21 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">تقرير وظائف Flutter اليومي</p>
          <h1>٣ فرص جديدة مؤكدة بعد حذف التكرار والوظائف المقفولة.</h1>
          <p className="intro">Technosat هي أقوى مطابقة اليوم. PayTabs وBlueCloud يستحقوا المحاولة فقط لو تقدر تغطي فجوة Kotlin/SDK أو React Native. كل الرواتب غير معلنة.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>1</strong><span>تطابق قوي</span></div>
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
          <div><p className="eyebrow">الأولوية اليوم</p><h2>ابدأ بـ Technosat</h2></div>
          <p>PayTabs وBlueCloud خيارات احتياطية بسبب متطلبات إضافية غير ظاهرة في الـCV. اسأل عن الراتب ونظام الحضور مبكرًا.</p>
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
            <p>راجعت Inbox للحساب muhammad159e@gmail.com خلال آخر 48 ساعة. لا يوجد رد شركة أو Recruiter مهم، ولا طلب مقابلة أو assessment جديد.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">20-21 يوليو</span><span className="match good">لا يوجد إجراء</span></div>
              <p className="company">Gmail</p>
              <h3>لا توجد ردود توظيف مهمة جديدة</h3>
              <p className="why"><b>الذي تم استبعاده:</b> نشرات وظائف LinkedIn من Confidential Careers وتنبيه مجتمع Outlier؛ كلها تنبيهات عامة وليست تواصل توظيف مباشر.</p>
              <p className="note"><b>الإجراء:</b> لا يوجد رد مطلوب الآن. تابع فقط لو وصل تواصل بشري، مقابلة، assessment، أو تغيير مهم في حالة تقديم.</p>
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
        <p>آخر تحديث: 21 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
