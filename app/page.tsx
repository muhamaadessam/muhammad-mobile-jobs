import CopyButton from "./CopyButton";

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
    coverLetter: `Dear Diyar United Company Hiring Team,

I am writing to apply for the Flutter Developer - Remote position. I am a Flutter Developer with more than 3 years of production experience building mobile applications with Flutter and Dart, including REST API integration, Firebase services, state management with Bloc/Cubit, local storage using Hive/SQLite, and CI/CD workflows.

In my recent work, I have delivered cross-platform applications with clean architecture, maintainable code, and attention to performance, deployment, and real user needs. Your role strongly matches my experience in scalable mobile development, API integrations, Firebase, Git, and app release workflows.

I would be glad to discuss how I can contribute to your digital solutions team. I am also open to remote work and regional opportunities.

Best regards,
Muhammad Essam`,
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
    coverLetter: `Dear SEVEN Hiring Team,

I am interested in the Senior Full-Stack Developer role involving Flutter and Zoho CRM integration. My main strength is Flutter development, with more than 3 years of experience building production mobile applications using Dart, Bloc/Cubit, clean architecture, REST APIs, Firebase, and release automation.

I have worked closely with backend services and product requirements, so I am comfortable connecting mobile experiences with APIs and business systems. If Flutter is a core part of this role, I believe my mobile engineering background can help your team deliver reliable, maintainable user-facing applications.

I would welcome the chance to learn more about the scope of the Flutter work and how I can contribute.

Best regards,
Muhammad Essam`,
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
    coverLetter: `Dear Aqary International Group Hiring Team,

I am writing to apply for the Flutter Mobile App Developer position. I am a Flutter Developer with more than 3 years of experience delivering cross-platform mobile applications using Flutter, Dart, REST APIs, Firebase, Bloc/Cubit, and clean architecture.

I have experience turning product requirements into stable mobile features, integrating backend services, handling local storage, improving performance, and preparing apps for release. I am also open to relocation or working with teams in the UAE, depending on the role requirements.

I would be happy to discuss how my Flutter experience can support your mobile product roadmap.

Best regards,
Muhammad Essam`,
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
    coverLetter: `Dear Loynova Hiring Team,

I am interested in the Senior Software Engineer opportunity. My strongest area is mobile engineering with Flutter, where I have more than 3 years of production experience using Dart, Bloc/Cubit, clean architecture, REST APIs, Firebase, Git, CI/CD, and app deployment workflows.

I have built and maintained real applications across multiple platforms, working on performance, architecture, API integration, and reliable release processes. If this role includes Flutter, Dart, or mobile product development, I believe my background would be a strong match.

I would appreciate the opportunity to learn more about the technical scope of the position.

Best regards,
Muhammad Essam`,
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
    coverLetter: `Dear SSC HR Solutions Hiring Team,

I am writing to express my interest in the Senior Flutter Developer position. I am a Flutter Developer with more than 3 years of hands-on production experience building mobile applications with Flutter and Dart.

My experience includes Bloc/Cubit state management, clean architecture, REST API integration, Firebase, local storage, Git workflows, CI/CD, and publishing applications across platforms. I focus on writing maintainable code, improving performance, and delivering features that fit business needs.

I would be glad to discuss whether my Flutter experience matches the current requirements for this role.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "Dsquares: صفحة Workable بتقول إن الوظيفة لم تعد متاحة.",
  "ZORA / Up2staff: المصدر ضعيف وغير كافٍ كفرصة جدية للتقديم.",
  "Recast Designs: الإعلان قديم جدًا، فلا يدخل في أولويات اليوم.",
  "Dorra / Pulse Job: الصفحة لا تعرض تفاصيل كافية بدون تحقق إضافي، فخرجت من القائمة الأساسية.",
] as const;

const emailReports = [
  {
    source: "LinkedIn",
    subject: "تم إرسال تقديمك إلى Salt",
    time: "14 يوليو · 7:12 ص",
    type: "تأكيد تقديم",
    priority: "متوسط",
    summary: "تقديمك اتبعت لوظيفة Flutter Developer في Salt بدبي. الإيميل فيه رابط وظيفة LinkedIn.",
    action: "تابع حالة التقديم على LinkedIn واسأل عن الراتب/نظام العمل لو حصل تواصل.",
  },
  {
    source: "Tanemera",
    subject: "ENG-FLT-SR-006",
    time: "14 يوليو · 6:54 ص",
    type: "إيميل مرسل منك",
    priority: "متوسط",
    summary: "أنت أرسلت Cover Letter وCV لوظيفة Senior Flutter Developer في Tanemera.",
    action: "انتظر ردهم، ولو مفيش رد خلال 5 أيام ابعت follow-up قصير.",
  },
  {
    source: "Pulse Job",
    subject: "استلام تقديم Dorra Developments",
    time: "14 يوليو · 6:47 ص",
    type: "تأكيد تقديم",
    priority: "متوسط",
    summary: "Pulse Job أكد استلام تقديمك لوظيفة Senior Flutter Developer في Dorra Developments.",
    action: "احتفظ بها كمتابعة، لكن لأن مصدر الوظيفة كان غير واضح عند الفتح، لا تعتبرها أولوية عالية.",
  },
  {
    source: "Nawy Real Estate",
    subject: "Senior Flutter Developer - Nawy",
    time: "14 يوليو · 6:33 ص",
    type: "رد شركة",
    priority: "عالي",
    summary: "إيميل من Nawy يشير لاهتمامهم بمعرفة خبرتك لوظيفة Senior Flutter Developer.",
    action: "افتح الإيميل وراجع هل فيه طلب رد أو خطوة تالية. دي أهم رسالة متابعة في آخر 48 ساعة.",
  },
  {
    source: "Workable / LinkedIn",
    subject: "تأكيد تقديم Nawy",
    time: "14 يوليو · 6:30-6:31 ص",
    type: "تأكيد تقديم",
    priority: "عالي",
    summary: "Workable وLinkedIn أكدوا إن تقديمك لوظيفة Senior Flutter Developer في Nawy اتسجل بنجاح.",
    action: "اربطها برسالة Nawy نفسها، وخليها أول متابعة عندك.",
  },
  {
    source: "Indeed",
    subject: "Flutter Developer at Adree",
    time: "14 يوليو · 4:43-4:52 ص",
    type: "Job alert",
    priority: "متوسط",
    summary: "تنبيهات Indeed فيها Flutter Developer at Adree ووظائف Flutter/Application Developer في القاهرة.",
    action: "افتح نتائج Indeed وراجع Adree فقط أولًا لأنها متكررة ومباشرة.",
  },
  {
    source: "BlueCloud / Workable / LinkedIn",
    subject: "Senior Mobile Developer - BlueCloud Technologies",
    time: "13 يوليو · 6:51-7:03 م",
    type: "تأكيد تقديم + رد",
    priority: "عالي",
    summary: "وصلت سلسلة رسائل تؤكد تقديمك لوظيفة Senior Mobile Developer في BlueCloud Technologies، ورسالة تقول إنهم سيراجعون طلبك خلال الأيام القادمة.",
    action: "تابعها كفرصة حقيقية، خصوصًا لأنها في القاهرة ومرتبطة بموبايل.",
  },
  {
    source: "Workable",
    subject: "Envision Employment Solutions",
    time: "13 يوليو · 6:46 م",
    type: "تأكيد تقديم",
    priority: "عالي",
    summary: "تأكيد تقديم لوظيفة Senior Mobile Developer (Flutter) في Envision Employment Solutions.",
    action: "دي مناسبة جدًا للـCV. افتح نسخة التقديم واحتفظ بالرابط للمتابعة.",
  },
  {
    source: "Mindrift / Workable / LinkedIn",
    subject: "Freelance Mobile App Developer",
    time: "13 يوليو · 6:27 م",
    type: "تأكيد تقديم",
    priority: "متوسط",
    summary: "Mindrift أكدوا إنهم بيراجعوا معلوماتك لدور Freelance Mobile App Developer (iOS/Android).",
    action: "مناسبة كموبايل عام، لكنها ليست Flutter صريحة. تابعها لو طبيعة المهام مناسبة.",
  },
  {
    source: "Adree Recruiting / Workable / LinkedIn",
    subject: "Flutter Developer - Adree",
    time: "13 يوليو",
    type: "تأكيد تقديم + رد",
    priority: "عالي",
    summary: "Adree أكدوا استلام طلبك لوظيفة Flutter Developer، ومعاه تأكيدات من Workable وLinkedIn.",
    action: "اعتبرها من أهم فرص المتابعة؛ لو مفيش رد خلال أيام ابعت follow-up.",
  },
  {
    source: "Mostafa Sayed",
    subject: "دعوة Flutter Developer Internship من TransIT",
    time: "13 يوليو",
    type: "دعوة",
    priority: "منخفض",
    summary: "دعوة مرتبطة بـFlutter Developer Internship من Transport Information Technology (TransIT).",
    action: "أنت خبرتك أعلى من Internship؛ تجاهلها إلا لو فيها مسار سريع أو شركة مهمة بالنسبة لك.",
  },
  {
    source: "LinkedIn Job Alerts",
    subject: "Loynova - Senior Software Engineer",
    time: "13 يوليو",
    type: "Job alert",
    priority: "متوسط",
    summary: "تنبيه LinkedIn عن Loynova - Senior Software Engineer ضمن بحث Flutter في مصر.",
    action: "افتح الوصف وتأكد إن Flutter جزء أساسي قبل التقديم.",
  },
  {
    source: "LinkedIn",
    subject: "Datamatics Technologies",
    time: "13 يوليو",
    type: "تأكيد تقديم",
    priority: "متوسط",
    summary: "LinkedIn أكد إرسال تقديمك لوظيفة Mobile App Developer في Datamatics Technologies بالقاهرة.",
    action: "تابعها لو الدور موبايل فعلي وليس web فقط.",
  },
  {
    source: "Adam Ali",
    subject: "Flutter Mobile Developer at Jolie Egypt",
    time: "12 يوليو",
    type: "رد على تقديم",
    priority: "عالي",
    summary: "إيميل مباشر بخصوص تقديمك لوظيفة Flutter Mobile Developer في Jolie Egypt.",
    action: "افتحه وراجع هل فيه سؤال أو خطوة مطلوبة؛ ده يبدو أكثر شخصية من job alert.",
  },
  {
    source: "Bayt / Indeed",
    subject: "تنبيهات وظائف عامة",
    time: "12-14 يوليو",
    type: "Job alerts",
    priority: "منخفض",
    summary: "وصلت تنبيهات عامة من Bayt وIndeed وLinkedIn عن وظائف software/developer متعددة.",
    action: "استخدمها للبحث فقط. لا تضيع وقت في غير Flutter/Mobile أو شركة عربية مناسبة.",
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
              <div className="actions">
                <CopyButton text={job.coverLetter} />
                <a href={job.href} target="_blank" rel="noreferrer" aria-label={`فتح وظيفة ${job.role} في ${job.company}`}>
                  افتح الوظيفة <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="emailSection" aria-label="إيميلات التوظيف آخر 48 ساعة">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">من Gmail</p>
              <h2>إيميلات التوظيف آخر ٤٨ ساعة</h2>
            </div>
            <p>بحثت في حساب muhammad159e@gmail.com عن إيميلات لها علاقة بالتوظيف. ظهرت 44 نتيجة، ودي أهم الرسائل المصنفة.</p>
          </div>
          <div className="emailGrid">
            {emailReports.map((email) => (
              <article className="emailCard" key={`${email.source}-${email.subject}`}>
                <div className="cardTop">
                  <span className="rank">{email.time}</span>
                  <span className={`match ${email.priority === "عالي" ? "strong" : email.priority === "متوسط" ? "good" : "stretch"}`}>{email.priority}</span>
                </div>
                <p className="company">{email.source}</p>
                <h3>{email.subject}</h3>
                <div className="meta">
                  <span>{email.type}</span>
                </div>
                <p className="why"><b>الملخص:</b> {email.summary}</p>
                <p className="note"><b>الخطوة المقترحة:</b> {email.action}</p>
              </article>
            ))}
          </div>
        </section>

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
