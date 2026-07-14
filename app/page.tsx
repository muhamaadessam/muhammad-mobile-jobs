const jobs = [
  {
    company: "Diyar United Company",
    role: "Flutter Developer — Remote",
    location: "الرياض، السعودية",
    mode: "عن بعد · دوام كامل",
    age: "التقديم يغلق 16 يوليو 2026",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور طالب Flutter/Dart وREST APIs وFirebase وState Management وHive/SQLite وCI/CD، وهي نقاط قوية في خبرتك.",
    note: "مطلوب 4+ سنوات؛ قدم لو هتبيع خبرتك الإنتاجية بوضوح، واسأل عن الراتب من أول تواصل.",
    href: "https://www.bayt.com/en/saudi-arabia/jobs/flutter-developer-remote-5456198/",
  },
  {
    company: "SEVEN",
    role: "Senior Full-Stack Developer — Flutter + Zoho CRM",
    location: "دبي، الإمارات",
    mode: "دوام كامل",
    age: "منذ 3 أيام على LinkedIn",
    salary: "غير معلن",
    match: "تطابق جيد",
    matchClass: "good",
    why: "فيه Flutter واضح، لكنه Full-stack ومعاه Zoho CRM؛ مناسب لو مهام الموبايل جزء أساسي من الدور.",
    note: "قبل التقديم اسأل هل Flutter هو محور الوظيفة ولا إضافة جانبية.",
    href: "https://www.linkedin.com/jobs/search/?keywords=Flutter%20Developer&location=United%20Arab%20Emirates",
  },
  {
    company: "Aqary International Group",
    role: "Flutter Mobile App Developer",
    location: "أبوظبي، الإمارات",
    mode: "دوام كامل",
    age: "منذ 3 أسابيع على LinkedIn",
    salary: "غير معلن",
    match: "تطابق جيد",
    matchClass: "good",
    why: "موبايل Flutter مباشر، ومكانه في الإمارات وأنت قلت إن الانتقال خارج مصر مقبول.",
    note: "تأكد من تفاصيل الفيزا والراتب قبل أي خطوات طويلة.",
    href: "https://www.linkedin.com/jobs/search/?keywords=Flutter%20Developer&location=United%20Arab%20Emirates",
  },
  {
    company: "Loynova",
    role: "Senior Software Engineer",
    location: "الشيخ زايد، الجيزة",
    mode: "دوام كامل",
    age: "منذ أسبوع على LinkedIn",
    salary: "غير معلن",
    match: "راجع المهام أولًا",
    matchClass: "good",
    why: "ظهر داخل نتائج Flutter في مصر ومكانه مناسب لو فيه حضور أكتر من يوم، لكنه ليس بعنوان Flutter صريح.",
    note: "لا تقدم إلا لو وصف الوظيفة داخل LinkedIn يؤكد Flutter/Dart أو Mobile Engineering.",
    href: "https://www.linkedin.com/jobs/search/?keywords=Flutter%20Developer&location=Egypt",
  },
  {
    company: "SSC HR Solutions",
    role: "Senior Flutter Developer",
    location: "القاهرة / العين السخنة",
    mode: "دوام كامل",
    age: "منذ 4 أشهر على LinkedIn",
    salary: "غير معلن",
    match: "احتياطي فقط",
    matchClass: "stretch",
    why: "العنوان مطابق، لكن عمر الإعلان 4 أشهر، فاعتبره آخر اختيار وليس أولوية اليوم.",
    note: "افتحه من LinkedIn فقط لو عايز توسع دائرة التقديم بعد الفرص الحديثة.",
    href: "https://www.linkedin.com/jobs/search/?keywords=Flutter%20Developer&location=Egypt",
  },
] as const;

const rejected = [
  "Dsquares: صفحة Workable بتقول إن الوظيفة لم تعد متاحة.",
  "ZORA / Up2staff: المصدر ضعيف وغير كافٍ كفرصة جدية للتقديم.",
  "Recast Designs: الإعلان قديم جدًا، فلا يدخل في أولويات اليوم.",
  "Dorra / Pulse Job: الصفحة لا تعرض تفاصيل كافية بدون تحقق إضافي، فخرجت من القائمة الأساسية.",
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
          <h1>تقرير مصحح: فرص قابلة للتقديم، مش لينكات وخلاص.</h1>
          <p className="intro">
            شيلت الفرص المقفولة أو ضعيفة المصدر، وخلّيت التقرير مبني على فرص لها صفحة حية أو ظهور حديث في مصدر توظيف واضح.
          </p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>5</strong><span>فرص قابلة للمراجعة</span></div>
          <div><strong>1</strong><span>تقديم مباشر مؤكد</span></div>
          <div><strong>4</strong><span>فرص مستبعدة من التقرير القديم</span></div>
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
            <h2>ابدأ بالأول فقط، ثم راجع الباقي</h2>
          </div>
          <p>أي فرصة بدون راتب معلن لازم أول سؤال فيها يكون عن الرينج. أقل من 30,000 جنيه أو 800 دولار؟ اقفلها بدري.</p>
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

        <div className="rejected" aria-label="فرص مستبعدة">
          <p className="eyebrow">تصحيح مهم</p>
          <h2>اللي اتشال من التقرير</h2>
          <ul>
            {rejected.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <footer>
        <p>الترتيب بعد التصحيح: فرصة مؤكدة أولًا، ثم فرص تحتاج مراجعة داخل LinkedIn.</p>
        <p>آخر تصحيح: 14 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
