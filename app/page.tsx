const jobs = [
  {
    company: "Dsquares",
    role: "Senior Mobile Developer — Flutter",
    location: "6 أكتوبر، الجيزة",
    mode: "هجين · دوام كامل",
    age: "منذ 8 أيام",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "أقرب فرصة لخبرتك: Flutter وBLoC/Cubit وClean Architecture وREST وGetIt وHive، والمطلوب يبدأ من سنتين خبرة.",
    note: "اسأل في أول مكالمة عن عدد أيام الحضور والراتب.",
    href: "https://jobs.workable.com/view/cJRsTpmcpmrfxN8ZLz1rsj/hybrid-senior-mobile-developer---flutter-in-6th-of-october-city-at-dsquares",
  },
  {
    company: "Dorra Developments",
    role: "Senior Flutter Developer",
    location: "الشيخ زايد، الجيزة",
    mode: "من المكتب · دوام كامل",
    age: "آخر موعد 16 يوليو",
    salary: "45–75 ألف جنيه",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "المهارات المطلوبة مطابقة تقريبًا: Flutter/Dart وAndroid/iOS وREST وBloc وGit، والراتب أعلى من حدك الأدنى.",
    note: "مطلوب 4+ سنوات؛ أنت قريب جدًا، فركّز على خبرتك الإنتاجية وتعدد المنصات.",
    href: "https://www.pulsjob.com/jobs/dorra-developments%2Fjob%2Fsenior-flutter-developer",
  },
  {
    company: "Nawy",
    role: "Senior Flutter Developer",
    location: "المعادي، القاهرة",
    mode: "من المكتب · دوام كامل",
    age: "منذ يوم",
    salary: "غير معلن",
    match: "تطابق جيد",
    matchClass: "good",
    why: "الخبرة المطلوبة 3–5 سنوات مع Flutter وAndroid/iOS والاختبارات وواجهات API؛ ده قريب جدًا من ملفك.",
    note: "تأكد من الراتب قبل مراحل المقابلات المتقدمة.",
    href: "https://eg.linkedin.com/company/nawyestate/jobs",
  },
  {
    company: "Recast Designs",
    role: "Remote Flutter Developer",
    location: "مصر",
    mode: "عن بُعد · دوام كامل",
    age: "منذ 4 أشهر",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "1–3 سنوات وخبرة Flutter وBloc وREST وFirebase وCI/CD؛ المطلوب يطابق خبرتك بشكل مباشر.",
    note: "الإعلان قديم نسبيًا؛ افتح الرابط وتأكد أنه ما زال يقبل التقديم.",
    href: "https://eg.linkedin.com/jobs/view/remote-flutter-developer-at-recast-designs-4375282891",
  },
  {
    company: "ZORA",
    role: "Front-End Flutter Developer",
    location: "الرياض، السعودية",
    mode: "عن بُعد · دوام كامل",
    age: "محدّث 26 يونيو",
    salary: "غير معلن",
    match: "تطابق جيد",
    matchClass: "good",
    why: "Flutter للموبايل والويب وREST وGit، مع أفضلية لـ CI/CD؛ مناسب لتعدد المنصات عندك.",
    note: "تحقق من الراتب وطريقة التعاقد قبل التقديم.",
    href: "https://up2staff.com/front-end-flutter-developer-role-at-zora",
  },
  {
    company: "Tanemera",
    role: "Senior Flutter Developer",
    location: "القاهرة",
    mode: "من المكتب · دوام كامل",
    age: "معلن كعاجل",
    salary: "غير معلن",
    match: "فرصة طموحة",
    matchClass: "stretch",
    why: "Flutter/Dart وstate management وCI/CD والأداء كلها نقاط قوية عندك، لكن الدور فيه قيادة ومراجعة كود.",
    note: "مطلوب 4–7 سنوات؛ قدّم لو عندك أمثلة واضحة على الملكية التقنية أو مساعدة مطورين آخرين.",
    href: "https://tanemera.com/careers/details/?code=ENG-FLT-SR-006",
  },
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
          <h1>فرص مختارة على مقاس خبرتك، مش مجرد نتائج بحث.</h1>
          <p className="intro">
            راجعنا وظائف شركات مصرية وعربية فقط، ورتبناها حسب قربها من خبرتك في Flutter وBLoC وClean Architecture وFirebase وREST.
          </p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>6</strong><span>فرص مناسبة</span></div>
          <div><strong>4</strong><span>تطابق قوي</span></div>
          <div><strong>2</strong><span>من آخر 8 أيام</span></div>
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
          <div>
            <p className="eyebrow">الأولوية الآن</p>
            <h2>ابدأ بأول 3 فرص</h2>
          </div>
          <p>الراتب غير المعلن لا يعني إنه أقل من حدك؛ اسأل عنه بدري قبل ما تستثمر وقت كبير.</p>
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
              <div className="meta">
                <span>{job.location}</span>
                <span>{job.mode}</span>
                <span>{job.age}</span>
              </div>
              <div className="salary">
                <span>الراتب</span>
                <strong>{job.salary}</strong>
              </div>
              <p className="why"><b>ليه مناسبة:</b> {job.why}</p>
              <p className="note"><b>خد بالك:</b> {job.note}</p>
              <a href={job.href} target="_blank" rel="noreferrer" aria-label={`فتح وظيفة ${job.role} في ${job.company}`}>
                افتح الوظيفة <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>ترتيب الترشيحات مبني على الـCV المرسل وشروطك الحالية.</p>
        <p>آخر مراجعة: 14 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
