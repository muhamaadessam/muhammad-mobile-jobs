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
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 9 أغسطس",
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
    company: "Adree",
    role: "Flutter Developer",
    location: "مصر · Remote",
    mode: "دوام كامل · Remote من مصر",
    age: "Apply مفتوح على Bayt · تحققت 9 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور في مصر ويطلب 3–6 سنوات Flutter وDart وstate management وFirebase وREST وCI/CD؛ تطابق قوي مع خبرة محمد الإنتاجية.",
    note: "الراتب غير معلن والعمل Remote؛ أكّد أن العمل من مصر مقبول ونطاق الراتب قبل التقديم.",
    href: "https://www.bayt.com/en/egypt/jobs/flutter-developer-74875062/",
    coverLetter: `Dear Adree Hiring Team,

I am applying for the Flutter Developer position. I have more than three years of production experience building and maintaining Flutter applications for Android, iOS, and Windows with Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.

My work includes production feature ownership, modular architecture, API and third-party integrations, local persistence, performance improvements, debugging, and automated releases. I am based in Egypt and would welcome the opportunity to contribute to Adree’s mobile products.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "Div Systems",
    role: "Flutter Mobile Application Developer",
    location: "المقطم، القاهرة، مصر",
    mode: "دوام كامل · On-site",
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 9 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور يطلب 3+ سنوات Flutter وDart وREST وGit وتصميمات MVVM؛ تطابق مباشر مع خبرة محمد في Flutter والـarchitecture والإطلاقات.",
    note: "المكتب في المقطم والراتب غير معلن؛ اسأل عن صافي الراتب وساعات الحضور قبل التقديم.",
    href: "https://portal.div-systems.com/jobs/detail/flutter-mobile-application-developer-33",
    coverLetter: `Dear Div Systems Hiring Team,

I am applying for the Flutter Mobile Application Developer position in Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.

My experience includes production feature ownership, modular architecture, API integrations, local persistence, performance improvements, debugging, and automated mobile releases. The role’s focus on Flutter/Dart, REST APIs, Git, and maintainable architecture aligns closely with my background.

I am based in Egypt and available for the on-site Cairo role.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "TAWANTECH",
    role: "Senior Flutter Developer offshore",
    location: "القاهرة، مصر",
    mode: "دوام كامل · On-site",
    age: "Apply مفتوح على Bayt · تحققت 9 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور موجود في القاهرة ويطلب 3+ سنوات Flutter وDart وstate management وREST؛ مناسب تقنيًا، لكن مسمى Senior وشرط 5+ سنوات إجماليًا يجعلاه Stretch.",
    note: "الوظيفة On-site في القاهرة والراتب غير معلن؛ اسأل عن المستوى الفعلي والراتب قبل استثمار وقت كبير.",
    href: "https://www.bayt.com/en/egypt/jobs/senior-flutter-developer-offshore-74938573/",
    coverLetter: `Dear TAWANTECH Hiring Team,

I am applying for the Senior Flutter Developer opportunity in Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.

My experience includes production feature ownership, modular architecture, API integrations, performance improvements, debugging, and automated releases. I am based in Egypt and would welcome a discussion about the role level, Cairo work model, and the team’s Flutter delivery needs.

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
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 9 أغسطس",
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
    company: "Khazna",
    role: "Senior Android Developer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · Work model غير معلن",
    age: "التقديم مفتوح على LinkedIn · تحققت 9 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور يطلب 3+ سنوات Native Android مع Kotlin وDagger/Hilt وMVVM/MVI وClean Architecture وCI/CD والاختبارات؛ كما أن مجال Khazna في المدفوعات قريب من خبرة أسماء.",
    note: "المسمى Senior رغم شرط 3+ سنوات، ونموذج العمل والراتب غير معلنين؛ اسألي عن المستوى الفعلي والحضور قبل استثمار وقت كبير.",
    href: "https://eg.linkedin.com/jobs/view/senior-android-developer-at-khazna-4440455368",
    coverLetter: `Dear Khazna Hiring Team,

I am applying for the Senior Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, and unit testing.

My background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, Google Play release management, and production support. I also contributed to healthcare and government services, including an Egypt Ministry of Justice application serving more than one million users.

Khazna’s focus on secure digital payments and financial inclusion strongly matches my Android and payments experience. I would welcome the opportunity to discuss the role level, work model, and how I could contribute to the Android team.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Expert Apps",
    role: "Mid-level Android Developer",
    location: "المعادي، القاهرة، مصر",
    mode: "دوام كامل · Hybrid",
    age: "Apply مفتوح على Wuzzuf · تحققت 9 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور Hybrid في المعادي ويطلب 3 سنوات Android Native مع APIs وoffline storage وREST؛ مناسب جدًا لخبرة أسماء في Kotlin والـarchitecture والإطلاقات.",
    note: "التفاصيل الكاملة ظاهرة على Wuzzuf، لكن الراتب غير معلن؛ أكّدي نطاقه قبل المراحل الطويلة.",
    href: "https://wuzzuf.net/jobs/p/kn9e55lijxeh-mid-level-android-developer-expert-apps-cairo-egypt",
    coverLetter: `Dear Expert Apps Hiring Team,

I am applying for the Mid-level Android Developer position in Maadi, Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, and testing.

My background includes POS, invoices, payment integrations, healthcare, government services, secure data handling, performance optimization, multi-module architecture, and Google Play releases. I also contributed to an Egypt Ministry of Justice application serving more than one million users.

I am based in Egypt and would welcome the opportunity to discuss the Android scope and hybrid work model.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Arcsen",
    role: "Native Mobile Engineer — Android",
    location: "المعادي، القاهرة، مصر",
    mode: "دوام كامل",
    age: "Apply مفتوح على Workable · تحققت 9 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور Native ويستخدم Kotlin وREST/GraphQL وFCM/HMS وتوزيع المتاجر والأداء؛ خبرة أسماء في Android والإصدارات والأمان مناسبة، مع فجوة في 5+ سنوات وHMS.",
    note: "الوظيفة تطلب 5+ سنوات ويفضل HMS/Wallet؛ اعتبريها Stretch فقط واسألي عن حصة Android مقابل iOS/Huawei.",
    href: "https://jobs.workable.com/view/91cFV121r4GUYHyRuEtMpa/hybrid-native-mobile-engineer-%28ios-%2F-android-%2F-huawei%29-in-maadi-at-arcsen",
    coverLetter: `Dear Arcsen Hiring Team,

I am applying for the Native Mobile Engineer — Android position in Maadi. I have more than three years of production Android experience with Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, REST APIs, Firebase, testing, performance optimization, secure data handling, and Google Play release management.

My background includes POS, invoices, payment integrations, healthcare, and government services, including an Egypt Ministry of Justice application serving more than one million users. I am comfortable owning production features, integrating backend services, and supporting reliable store releases.

I would welcome the opportunity to discuss the Android scope, seniority expectations, and any Huawei Mobile Services requirements.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Procore Technologies",
    role: "Senior Software Engineer, Android",
    location: "القاهرة، مصر",
    mode: "دوام كامل · On-site",
    age: "التقديم مفتوح على LinkedIn · منذ 7 ساعات",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور في مكتب Procore بالقاهرة ويطلب Kotlin/Java وJetpack/Compose وMVVM وRoom والأداء؛ خبرة أسماء مناسبة تقنيًا، لكن شرط 5+ سنوات إجماليًا ومسمى Senior يجعلانها Stretch.",
    note: "التقديم مفتوح والدور On-site في القاهرة، لكن شرط الخبرة الكلي أعلى من الملف المؤكد؛ قدّمي فقط إذا كان المستوى قابلًا للنقاش.",
    href: "https://eg.linkedin.com/jobs/view/senior-software-engineer-android-at-procore-technologies-4442747363",
    coverLetter: `Dear Procore Hiring Team,

I am applying for the Senior Software Engineer, Android position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, and testing.

My background includes multi-module architecture, performance optimization, secure data handling, POS and payment integrations, Google Play release management, and government services including an Egypt Ministry of Justice application serving more than one million users. I enjoy owning production features and collaborating with product, backend, and QA teams.

I am based in Egypt and would welcome a discussion about the seniority expectations and Cairo work arrangement.

Best regards,
Asmaa Atya`,
  },
] as const;

const rejected = [
  "Axis: صفحة LinkedIn أظهرت أن التقديم لم يعد يستقبل طلبات، فتمت إزالته.",
  "Diverge وMedad وScript وUnipal وPSdigital: خارج مصر أو انتقال فقط؛ اتشالوا بعد تطبيق شرط مصر الإلزامي.",
  "AL Master: صفحة LinkedIn أظهرت أن التقديم لم يعد يستقبل طلبات، فتم استبعاده.",
  "Dsquares: رابط Workable لم يعرض محتوى تحقق حي، فتمت إزالته بدل اعتباره مفتوحًا.",
  "Glancers: LinkedIn أظهر 3d، فتمت إزالة المنشور والإيميل بدل حمل فرصة قديمة.",
  "منشورات AFS المنسوخة، النماذج العامة وOpenToWork وDM-only والتدريب والمنشورات الأقدم من 72 ساعة اتشالت.",
] as const;

const androidRejected = [
  "geidea: صفحة LinkedIn أظهرت No longer accepting applications، فتمت إزالته.",
  "Yassir: الإعلان ظاهر قديمًا جدًا، فتمت إزالته بدل حمله كفرصة حية.",
  "Henkel: لم أعده دون إشارة فتح واضحة قابلة للتحقق في هذه الجولة.",
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
        <nav aria-label="رأس التقرير"><span className="brand">فرص محمد وأسماء</span><span className="date">تقرير 9 أغسطس 2026</span></nav>
        <div className="heroCopy"><p className="eyebrow">Flutter وAndroid Native في مصر فقط</p><h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1><p className="intro">وظائف مصرية أو مؤكدة القبول من مصر، مع Cover Letters وقسم إرسال Gmail منفصل لكل مرشح.</p></div>
        <div className="stats" aria-label="ملخص التقرير"><div><strong>2</strong><span>مسار وظيفي</span></div><div><strong>{jobs.length}</strong><span>فرص Flutter</span></div><div><strong>{androidJobs.length}</strong><span>فرص Android</span></div></div>
      </header>

      <section className="criteria" aria-label="معايير البحث"><span>مصر فقط أو قبول مصر مؤكد</span><span>لا وظائف انتقال فقط</span><span>تقديم مفتوح ومسار واضح</span><span>Mid أو Senior كفرصة Stretch</span></section>

      <section className="content"><fieldset className="candidateTabs"><legend className="srOnly">اختار تقرير الوظائف</legend>
        <input className="tabInput" type="radio" name="candidate" id="flutter-tab" defaultChecked /><label className="tabLabel" htmlFor="flutter-tab"><span>Flutter — Muhammad Essam</span><small>محمد Essam</small></label>
        <input className="tabInput" type="radio" name="candidate" id="android-tab" /><label className="tabLabel" htmlFor="android-tab"><span>Android Native — Asmaa Atya</span><small>أسماء Atya</small></label>

        <section className="tabPanel flutterPanel" aria-labelledby="flutter-tab">
          <div className="sectionHead"><div><p className="eyebrow">Flutter · Muhammad Essam</p><h2>٣ قوية و١ ممكنة</h2></div><p>أربع فرص مصرية أو مصر-eligible مفتوحة: AppFactory وAdree وDiv Systems كتطابق قوي، وTAWANTECH كفرصة Stretch.</p></div>
          <div className="jobGrid">{jobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} />)}</div>
          <section className="linkedInSection" aria-label="منشورات توظيف Flutter على LinkedIn"><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لمحمد · {freshFlutterDirectPosts.length}</h2></div><p>منشور Objects صالح واحد خلال آخر 72 ساعة ومصر مؤكدة: Flutter Developer في الإسكندرية بإيميل تقديم صريح. العدد الحقيقي أقل من ٥؛ أي منشور ظهر 3d أو أقدم اتشال، وكذلك منشورات Copied وOpenToWork وDM-only والقديم أو غير المناسب.</p></div><div className="postGrid">{freshFlutterDirectPosts.map((post) => <article className="postCard" key={`${post.company}-${post.poster}`}><div className="cardTop"><span className="postSource">LinkedIn Post</span><span className={`match ${post.matchClass}`}>{post.match}</span></div><p className="company">{post.company}</p><h3>{post.role}</h3><div className="meta"><span>{post.location}</span><span>{post.age}</span></div><p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p><p className="why"><b>ليه مناسبة:</b> {post.summary}</p><p className="postContact"><b>التواصل:</b> {post.contact}</p><p className="note"><b>خد بالك:</b> {post.note}</p><div className="postActions"><a href={post.href} target="_blank" rel="noreferrer">افتح نشاط صاحب الإعلان <span aria-hidden="true">↗</span></a>{"whatsapp" in post && <a href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent(post.whatsappMessage)}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>}</div></article>)}</div></section>
          <EmailComposer candidate="Muhammad Essam" applications={freshFlutterEmailApplications} />
          <div className="rejected" aria-label="فرص Flutter مستبعدة"><p className="eyebrow">فلترة Flutter</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="tabPanel androidPanel" aria-labelledby="android-tab">
          <div className="sectionHead"><div><p className="eyebrow">Android Native · Asmaa Atya</p><h2>٢ قوية و٣ ممكنة</h2></div><p>Vertex وExpert Apps هما الأقوى. Khazna وArcsen وProcore فرص Stretch بسبب المسمى Senior أو شروط الخبرة الأعلى.</p></div>
          <div className="jobGrid">{androidJobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} android />)}</div>
          <section className="linkedInSection" aria-label="منشورات توظيف Android على LinkedIn"><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لأسماء · {freshAndroidDirectPosts.length}</h2></div><p>بعد البحث بترتيب Latest وبمصطلحات Android وKotlin وJetpack Compose لم يظهر منشور Native صالح خلال آخر ٧٢ ساعة يجمع مصر مع إيميل أو WhatsApp وملاءمة ٢–٤ سنوات؛ العدد الحقيقي ٠ وأقل من ٥، من غير حشو.</p></div><div className="postGrid">{freshAndroidDirectPosts.map((post) => <article className="postCard" key={`${post.company}-${post.poster}`}><div className="cardTop"><span className="postSource">LinkedIn Post</span><span className={`match ${post.matchClass}`}>{post.match}</span></div><p className="company">{post.company}</p><h3>{post.role}</h3><div className="meta"><span>{post.location}</span><span>{post.age}</span></div><p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p><p className="why"><b>ليه مناسبة:</b> {post.summary}</p><p className="postContact"><b>التواصل:</b> {post.contact}</p><p className="note"><b>خد بالك:</b> {post.note}</p><div className="postActions"><a href={post.href} target="_blank" rel="noreferrer">افتح نشاط صاحب الإعلان <span aria-hidden="true">↗</span></a>{"whatsapp" in post && <a href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent(post.whatsappMessage)}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>}</div></article>)}</div></section>
          <EmailComposer candidate="Asmaa Atya" applications={freshAndroidEmailApplications} />
          <div className="rejected" aria-label="فرص Android مستبعدة"><p className="eyebrow">فلترة Android Native</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{androidRejected.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
      </fieldset></section>

      <footer><p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p><p>آخر تحديث: 9 أغسطس 2026 · القاهرة</p></footer>
    </main>
  );
}
