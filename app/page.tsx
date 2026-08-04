import CopyButton from "./CopyButton";
import EmailComposer from "./EmailComposer";
import {
  freshAndroidDirectPosts,
  freshAndroidEmailApplications,
  freshFlutterDirectPosts,
  freshFlutterEmailApplications,
} from "./fresh-data";

const jobs = [
  {
    company: "AppFactory",
    role: "Flutter Developer",
    location: "القاهرة الجديدة، مصر",
    mode: "دوام كامل · On-site",
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 4 أغسطس",
    salary: "مخفي · Competitive",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور يطلب 3–5 سنوات Flutter Production، Dart، state management، REST/WebSockets، الاختبارات وCI/CD؛ تطابق مباشر مع خبرة محمد وإصداراته الإنتاجية.",
    note: "الحضور من القاهرة الجديدة والراتب تنافسي لكنه غير معلن؛ اسأل عن صافي الراتب وساعات المكتب.",
    href: "https://www.appfactoryltd.com/flutter-developer.html",
    coverLetter: `Dear AppFactory Hiring Team,

I am applying for the Flutter Developer position in New Cairo. I have more than three years of production experience building and maintaining Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.

I have owned production features from architecture through release, improved modular codebases, integrated backend services and real-time capabilities, resolved live issues, and supported automated store releases. My experience with state management, REST/WebSockets, testing, and CI/CD aligns closely with your requirements.

I am based in Egypt and available for the on-site New Cairo role. I would welcome the opportunity to help AppFactory ship reliable, high-performance mobile products.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "Dsquares",
    role: "Senior Mobile Developer — Flutter",
    location: "6 أكتوبر، الجيزة، مصر",
    mode: "دوام كامل · Hybrid",
    age: "Apply مفتوح على LinkedIn/Workable · تحققت 4 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الإعلان يطلب 2+ سنة Flutter وDart وBLoC/Cubit وREST وget_it وHive/SharedPreferences وClean Architecture؛ التطابق التقني قوي لكن مسمى Senior يستحق تأكيد المستوى.",
    note: "اسأل عن مستوى الدور الفعلي، نطاق الراتب، وجدول الـHybrid قبل المراحل الطويلة.",
    href: "https://jobs.workable.com/view/cJRsTpmcpmrfxN8ZLz1rsj/hybrid-senior-mobile-developer---flutter-in-6th-of-october-city-at-dsquares",
    coverLetter: `Dear Dsquares Hiring Team,

I am applying for the Senior Mobile Developer — Flutter position in 6th of October. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows with Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, Hive, SQLite, testing, GitHub Actions, and Fastlane.

My work includes production feature ownership, modular architecture, API and third-party integrations, local persistence, performance improvements, debugging, and automated releases. I have hands-on experience with BLoC/Cubit, get_it-style dependency injection, and maintainable layered codebases.

I am based in Egypt and would be glad to discuss the role level, hybrid arrangement, and how I can contribute to Dsquares’ mobile products.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
] as const;

const androidJobs = [
  {
    company: "Vertex Technologies",
    role: "Middle Android Developer",
    location: "Smart Village، الجيزة، مصر",
    mode: "دوام كامل · On-site",
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 4 أغسطس",
    salary: "مخفي · مدفوع بالدولار",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور يطلب 3+ سنوات Android مع Kotlin وJetpack Compose وDagger وCoroutines وMVVM وSOLID وREST؛ تطابق مباشر مع خبرة أسماء.",
    note: "المكتب في Smart Village والراتب الرقمي غير معلن؛ اسألي عن صافي الراتب وجدول الحضور.",
    href: "https://vertextech-eg.com/vacancies/middle-android-developer",
    coverLetter: `Dear Vertex Technologies Hiring Team,

I am applying for the Middle Android Developer position. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, and testing.

My background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, Google Play releases, and an Egypt Ministry of Justice application serving more than one million users. I am comfortable building maintainable Android features and collaborating across product, backend, and QA teams.

I am based in Egypt and available to discuss the Smart Village work arrangement.

Best regards,
Asmaa Atya`,
  },
  {
    company: "geidea",
    role: "Mid-level Android Developer",
    location: "القاهرة، مصر",
    mode: "دوام كامل",
    age: "التقديم مفتوح على LinkedIn · تحققت 4 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "دور Mid-level في المدفوعات يطابق Kotlin وCompose وMVVM/Clean Architecture وCoroutines وDI وREST وFirebase وPOS والأمان.",
    note: "KMM مطلوب عمليًا وهو غير مؤكد في خبرة أسماء؛ قدّمي باعتبار خبرة المدفوعات والـmulti-module نقاط القوة واسألي عن حجم KMM.",
    href: "https://eg.linkedin.com/jobs/view/mid-level-android-developer-at-geidea-4438588748?pageNum=0&position=7",
    coverLetter: `Dear geidea Hiring Team,

I am applying for the Mid-level Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, Coroutines, MVVM, MVI, Clean Architecture, dependency injection, REST APIs, Firebase, Git, and unit testing.

My experience includes POS, invoices, payment integrations, secure data handling, multi-module architecture, product flavors, performance optimization, and Google Play release management. I have also contributed to healthcare and government applications, including an Egypt Ministry of Justice application serving more than one million users.

Geidea’s focus on secure fintech products strongly matches my Android and payments background. I would welcome the opportunity to discuss the KMM scope and the Cairo team.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Henkel",
    role: "Mobile Developer — Sr Android Engineer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · Hybrid",
    age: "صفحة Henkel الرسمية مفتوحة · تحققت 4 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور الرسمي يركز على Kotlin وAndroid SDK وJetpack/Compose وClean Architecture وREST والأمان والأداء، وكلها ضمن خبرة أسماء الإنتاجية.",
    note: "المسمى Senior ولا يوجد شرط سنوات واضح؛ قدّمي كـStretch واسألي عن المستوى الفعلي ونطاق الراتب.",
    href: "https://www.henkel-northamerica.com/careers/jobs-and-application/2150510-2150510",
    coverLetter: `Dear Henkel Hiring Team,

I am applying for the Mobile Developer — Sr Android Engineer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, JUnit, and MockK.

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes secure data handling, performance optimization, scalable multi-module architecture, third-party integrations, and Google Play releases. I also contributed to an Egypt Ministry of Justice application serving more than one million users.

My confirmed professional focus is native Android, and I would welcome a discussion about the role level and Cairo work model.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Arcsen",
    role: "Native Mobile Engineer — Android",
    location: "المعادي، القاهرة، مصر",
    mode: "دوام كامل",
    age: "Apply مفتوح على LinkedIn · تحققت 4 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور Native ويستخدم Kotlin وREST/GraphQL وFCM/HMS وتوزيع المتاجر والأداء؛ خبرة أسماء في Android والإصدارات والأمان مناسبة، مع فجوة في 5+ سنوات وHMS.",
    note: "الوظيفة تطلب 5+ سنوات ويفضل HMS/Wallet؛ اعتبريها Stretch فقط واسألي عن حصة Android مقابل iOS/Huawei.",
    href: "https://eg.linkedin.com/jobs/view/native-mobile-engineer-ios-android-huawei-at-arcsen-4430138792",
    coverLetter: `Dear Arcsen Hiring Team,

I am applying for the Native Mobile Engineer — Android position in Maadi. I have more than three years of production Android experience with Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, REST APIs, Firebase, testing, performance optimization, secure data handling, and Google Play release management.

My background includes POS, invoices, payment integrations, healthcare, and government services, including an Egypt Ministry of Justice application serving more than one million users. I am comfortable owning production features, integrating backend services, and supporting reliable store releases.

I would welcome the opportunity to discuss the Android scope, seniority expectations, and any Huawei Mobile Services requirements.

Best regards,
Asmaa Atya`,
  },
] as const;

const rejected = [
  "Diverge وMedad وScript وUnipal وPSdigital: خارج مصر أو انتقال فقط؛ اتشالوا بعد تطبيق شرط مصر الإلزامي.",
  "Nawy: صفحة LinkedIn الحالية تقول إن التقديم لم يعد يستقبل طلبات.",
  "Envision وSSC وLoynova وWatan: متطلبات 5–8+ سنوات أو التقديم مغلق.",
  "منشورات النماذج العامة وOpenToWork وDM-only والتدريب والمنشورات الأقدم من 72 ساعة اتشالت.",
] as const;

const androidRejected = [
  "Yassir: الإعلان ظاهر قديمًا جدًا، فتمت إزالته بدل حمله كفرصة حية.",
  "Halian: خارج مصر وRemote من مصر غير مؤكد، فمرفوض حسب القاعدة الجديدة.",
  "الأدوار Junior/Internship وFlutter-only وReact Native-only وiOS-only اتشالت.",
  "منشورات OpenToWork أو DM/comment فقط أو خارج مصر أو أقدم من 72 ساعة لم تدخل.",
] as const;

function JobCard({ job, index, android = false }: { job: (typeof jobs)[number] | (typeof androidJobs)[number]; index: number; android?: boolean }) {
  return (
    <article className="jobCard" key={`${job.company}-${job.role}`}>
      <div className="cardTop"><span className="rank">{String(index + 1).padStart(2, "0")}</span><span className={`match ${job.matchClass}`}>{job.match}</span></div>
      <p className="company">{job.company}</p>
      <h3>{job.role}</h3>
      <div className="meta"><span>{job.location}</span><span>{job.mode}</span><span>{job.age}</span></div>
      <div className="salary"><span>الراتب</span><strong>{job.salary}</strong></div>
      <p className="why"><b>ليه مناسبة:</b> {job.why}</p>
      <p className="note"><b>خد بالك:</b> {job.note}</p>
      <div className="actions"><CopyButton text={job.coverLetter} /><a href={job.href} target="_blank" rel="noreferrer" aria-label={`فتح وظيفة ${job.role} في ${job.company}`}>{android ? "افتح التقديم" : "افتح الوظيفة"} <span aria-hidden="true">↗</span></a></div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير"><span className="brand">فرص محمد وأسماء</span><span className="date">تقرير 4 أغسطس 2026</span></nav>
        <div className="heroCopy"><p className="eyebrow">Flutter وAndroid Native في مصر فقط</p><h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1><p className="intro">وظائف مصرية أو مؤكدة القبول من مصر، مع Cover Letters وقسم إرسال Gmail منفصل لكل مرشح.</p></div>
        <div className="stats" aria-label="ملخص التقرير"><div><strong>2</strong><span>مسار وظيفي</span></div><div><strong>2</strong><span>فرص Flutter</span></div><div><strong>4</strong><span>فرص Android</span></div></div>
      </header>

      <section className="criteria" aria-label="معايير البحث"><span>مصر فقط أو قبول مصر مؤكد</span><span>لا وظائف انتقال فقط</span><span>تقديم مفتوح ومسار واضح</span><span>Mid أو Senior كفرصة Stretch</span></section>

      <section className="content"><fieldset className="candidateTabs"><legend className="srOnly">اختار تقرير الوظائف</legend>
        <input className="tabInput" type="radio" name="candidate" id="flutter-tab" defaultChecked /><label className="tabLabel" htmlFor="flutter-tab"><span>Flutter — Muhammad Essam</span><small>محمد Essam</small></label>
        <input className="tabInput" type="radio" name="candidate" id="android-tab" /><label className="tabLabel" htmlFor="android-tab"><span>Android Native — Asmaa Atya</span><small>أسماء Atya</small></label>

        <section className="tabPanel flutterPanel" aria-labelledby="flutter-tab">
          <div className="sectionHead"><div><p className="eyebrow">Flutter · Muhammad Essam</p><h2>١ قوية و١ ممكنة</h2></div><p>اتحافظت على فرصتين مصريتين مفتوحتين فقط بعد حذف وظائف الإمارات والبحرين ودبي والوظائف المغلقة.</p></div>
          <div className="jobGrid">{jobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} />)}</div>
          <section className="linkedInSection" aria-label="منشورات توظيف Flutter على LinkedIn"><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لمحمد · ١</h2></div><p>منشور واحد صالح خلال آخر 72 ساعة: مصر مؤكدة وإيميل تقديم ظاهر. العدد الحقيقي أقل من ٥؛ لم أضف OpenToWork أو DM أو نماذج عامة.</p></div><div className="postGrid">{freshFlutterDirectPosts.map((post) => <article className="postCard" key={`${post.company}-${post.poster}`}><div className="cardTop"><span className="postSource">LinkedIn Post</span><span className={`match ${post.matchClass}`}>{post.match}</span></div><p className="company">{post.company}</p><h3>{post.role}</h3><div className="meta"><span>{post.location}</span><span>{post.age}</span></div><p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p><p className="why"><b>ليه مناسبة:</b> {post.summary}</p><p className="postContact"><b>التواصل:</b> {post.contact}</p><p className="note"><b>خد بالك:</b> {post.note}</p><div className="postActions"><a href={post.href} target="_blank" rel="noreferrer">افتح نشاط صاحب الإعلان <span aria-hidden="true">↗</span></a></div></article>)}</div></section>
          <EmailComposer candidate="Muhammad Essam" applications={freshFlutterEmailApplications} />
          <div className="rejected" aria-label="فرص Flutter مستبعدة"><p className="eyebrow">فلترة Flutter</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="tabPanel androidPanel" aria-labelledby="android-tab">
          <div className="sectionHead"><div><p className="eyebrow">Android Native · Asmaa Atya</p><h2>١ قوية و٣ ممكنة</h2></div><p>Vertex هو التطابق الأقوى. geidea وHenkel وArcsen فرص Stretch بسبب KMM أو المستوى أو شرط 5+ سنوات.</p></div>
          <div className="jobGrid">{androidJobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} android />)}</div>
          <section className="linkedInSection" aria-label="منشورات توظيف Android على LinkedIn"><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لأسماء · ١</h2></div><p>منشور واحد صالح خلال آخر 72 ساعة: القاهرة مؤكدة وإيميل تقديم ظاهر. العدد الحقيقي أقل من ٥؛ لم أضف منشورات قديمة أو DM-only أو وظائف غير Native Android.</p></div><div className="postGrid">{freshAndroidDirectPosts.map((post) => <article className="postCard" key={`${post.company}-${post.poster}`}><div className="cardTop"><span className="postSource">LinkedIn Post</span><span className={`match ${post.matchClass}`}>{post.match}</span></div><p className="company">{post.company}</p><h3>{post.role}</h3><div className="meta"><span>{post.location}</span><span>{post.age}</span></div><p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p><p className="why"><b>ليه مناسبة:</b> {post.summary}</p><p className="postContact"><b>التواصل:</b> {post.contact}</p><p className="note"><b>خد بالك:</b> {post.note}</p><div className="postActions"><a href={post.href} target="_blank" rel="noreferrer">افتح نشاط صاحب الإعلان <span aria-hidden="true">↗</span></a></div></article>)}</div></section>
          <EmailComposer candidate="Asmaa Atya" applications={freshAndroidEmailApplications} />
          <div className="rejected" aria-label="فرص Android مستبعدة"><p className="eyebrow">فلترة Android Native</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{androidRejected.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
      </fieldset></section>

      <footer><p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p><p>آخر تحديث: 4 أغسطس 2026 · القاهرة</p></footer>
    </main>
  );
}
