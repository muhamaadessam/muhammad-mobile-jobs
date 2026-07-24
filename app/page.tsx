import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "CDS Solutions",
    role: "Flutter Developer",
    location: "مدينة نصر، القاهرة",
    mode: "دوام كامل · On-site",
    age: "منشور خلال آخر 24 ساعة والتقديم مفتوح",
    salary: "غير معلن · Competitive + bonuses",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "مطلوب 2+ سنة Flutter مع Dart وREST APIs وBloc/Provider/Riverpod وGit وCI/CD ونشر التطبيقات؛ ده مطابق مباشرة لخبرتك، والشركة مصرية مقرها مدينة نصر.",
    note: "الراتب مخفي والحضور من المكتب. اسأل من أول مكالمة عن صافي الراتب وعدد أيام وساعات الحضور.",
    href: "https://www.cds-solutions.co/jobs/flutter-developer-22",
    coverLetter: `Dear CDS Solutions Hiring Team,

I am applying for the Flutter Developer position in Nasr City. I have more than three years of production experience building and maintaining Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git-based workflows.

My recent work includes migrating production code from GetX to Cubit/BLoC, improving modular architecture, integrating APIs and third-party services, fixing production issues, and automating releases with GitHub Actions and Fastlane. I have also worked with app-store releases and performance-focused maintenance of live applications.

I would welcome the opportunity to contribute to CDS Solutions' mobile products and digital transformation projects.

Best regards,
Muhammad Essam`,
  },
  {
    company: "InnovationTeam",
    role: "Flutter Mobile Developer",
    location: "الرياض، السعودية",
    mode: "دوام كامل · Remote",
    age: "مفتوحة على صفحة الشركة وWorkable",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور يطلب Flutter وREST APIs وBloc/Provider/Riverpod وCI/CD وAgile ونشر التطبيقات، وبيقبل مستويات مختلفة من 1–2 سنة فأكثر. موقع الشركة الرسمي يحدد الرياض كمقر رئيسي.",
    note: "الراتب مخفي، ونموذج التقديم بيسأل عن الراتب الحالي والمتوقع بالريال. اكتب رقمًا مناسبًا للسوق وتأكد إن الـRemote متاح من مصر.",
    href: "https://apply.workable.com/innovationteam/j/8AD4C184DD/",
    coverLetter: `Dear InnovationTeam Hiring Team,

I am applying for the Flutter Mobile Developer role. I have more than three years of production Flutter experience across Android, iOS, and Windows, with strong hands-on work in Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and release automation.

In recent roles, I migrated production features from GetX to Cubit/BLoC, improved modular architecture, integrated backend services, resolved production issues, and supported releases through GitHub Actions and Fastlane. I am comfortable owning features, collaborating with product and QA teams, and maintaining reliable applications after launch.

I am based in Egypt and would be glad to discuss the remote working arrangement, availability, and compensation in SAR.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Oliv",
    role: "Frontend Engineer (Flutter)",
    location: "الزمالك، القاهرة",
    mode: "دوام كامل · Hybrid",
    age: "منشورة من شهر والتقديم ما زال مفتوحًا",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "Fintech مصرية طالبة خبرة إنتاج فعلية في Flutter وDart وREST APIs وAuthentication وState Management واختبارات وأداء وملكية كاملة للـfeatures؛ ده قريب جدًا من خبرتك.",
    note: "الراتب وعدد أيام الحضور مش معلنين. اسأل بدري عن صافي الراتب ونظام الـHybrid قبل استكمال المراحل.",
    href: "https://wuzzuf.net/jobs/p/b1l7nuffcuhn-frontend-engineer-flutter-oliv-cairo-egypt",
    coverLetter: `Dear Oliv Hiring Team,

I am applying for the Frontend Engineer (Flutter) position. I have more than three years of hands-on production experience building and maintaining Flutter applications with Dart, BLoC/Cubit, GetX, Clean Architecture, MVVM, REST APIs, Firebase, local storage, testing, and CI/CD.

My recent work includes owning production features end to end, migrating GetX code to Cubit/BLoC, improving modular architecture, integrating authentication and backend services, debugging live issues, and supporting automated releases with GitHub Actions and Fastlane. I enjoy high-ownership product environments and writing maintainable code that remains reliable after launch.

I would welcome the opportunity to help Oliv evolve its Flutter products for Egyptian SMEs.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "Kalvad وTechnosat وPayTabs وBlueCloud وAdree وNawy وTamara وColada وDsquares: ظهروا في تقارير سابقة، فمش هكررهم من غير تغيير مهم.",
  "Envision: الدور الجديد يطلب 6+ سنوات Mobile وخبرة Mentoring وقيادة تقنية.",
  "almentor: يطلب 5+ سنوات Mobile وسنتين على الأقل في قيادة فريق وتطبيق يتجاوز 100 ألف تحميل.",
  "CODE SARAA: يطلب 5+ سنوات Flutter مع ASP.NET Core وMySQL، وده خارج خبرتك الحالية.",
  "Burjline / Jackpot: الدور متخصص في ألعاب Casino وFlame وRNG وShaders وخبرة ألعاب فعلية.",
  "Al-Tadamun وIbn Sina وSmart EGAT وCarina Wear: صفحات Wuzzuf ظاهرة في البحث لكن من غير زر تقديم مباشر أو قديمة، فمش مؤكدة كفرص مفتوحة.",
  "Dorra انتهى موعدها 16 يوليو، وExabyting انتهى موعدها 23 يوليو.",
  "رسائل LinkedIn وIndeed وPulse Job وNaukriGulf: تنبيهات أو تأكيدات تقديم آلية وليست ردود Recruiter مهمة.",
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد</span>
          <span className="date">تقرير 24 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">تقرير وظائف Flutter اليومي</p>
          <h1>٣ فرص قوية جديدة وتحديث توظيف مهم.</h1>
          <p className="intro">ابدأ بـCDS Solutions لأنها الأحدث، وبعدها InnovationTeam وOliv. NIX/Vertex أكدوا إنهم اختاروا مرشحًا آخر للدور السابق.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>3</strong><span>تطابق قوي</span></div>
          <div><strong>0</strong><span>فرصة ممكنة</span></div>
          <div><strong>1</strong><span>رسالة توظيف مهمة</span></div>
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
          <div><p className="eyebrow">الأولوية اليوم</p><h2>قدّم على التلات فرص</h2></div>
          <p>كل فرصة لها مسار تقديم مباشر ومقر عربي واضح وتطابق تقني قوي. الرواتب مخفية، فاسأل عن الصافي ونظام الحضور في أول تواصل.</p>
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
            <p>راجعت الحساب muhammad159e@gmail.com وفلترت التنبيهات والتأكيدات الآلية. فيه تحديث حالة مهم واحد من NIX/Vertex.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">23 يوليو · 3:40 م</span><span className="match stretch">تحديث مهم</span></div>
              <p className="company">Subanbekova Aliia · NIX HR / Vertex</p>
              <h3>Update on your application</h3>
              <p className="why"><b>ليه مهمة:</b> الشركة أنهت عملية الاختيار لوظيفة Middle Flutter Developer وقررت تكمل مع مرشح آخر.</p>
              <p className="note"><b>الإجراء المقترح:</b> مفيش رد مطلوب. اقفل المتابعة على الوظيفة واحتفظ بالشركة ضمن قائمة الفرص المستقبلية.</p>
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
        <p>آخر تحديث: 24 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
