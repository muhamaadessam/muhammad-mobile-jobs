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
    company: "Axis",
    role: "Flutter Mobile Engineer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · Hybrid",
    age: "التقديم مفتوح على LinkedIn · تحققت 20 أغسطس",
    salary: "مخفي · Competitive",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور يطلب +2 سنوات Flutter/Dart Production، BLoC، Clean Architecture، REST والاختبارات؛ كما أن منتج Axis محفظة مالية مصرية، فتطابق خبرة محمد التقنية قوي.",
    note: "العمل Hybrid في القاهرة والراتب غير معلن؛ اسأل عن صافي الراتب ونسبة الحضور قبل التقديم.",
    href: "https://www.linkedin.com/jobs/view/4449286578/",
    coverLetter: `Dear Axis Hiring Team,

I am applying for the Flutter Mobile Engineer position in Cairo. I have more than three years of production experience building and maintaining Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.

My experience includes production feature ownership, clean and modular architecture, authentication and API integrations, local persistence, performance improvements, unit testing, and reliable mobile releases. Axis’s focus on secure Egyptian financial products and its use of Flutter, BLoC, clean architecture, REST APIs, and automated testing align closely with my background.

I am based in Egypt and would welcome the opportunity to contribute to the Axis Wallet team and discuss the hybrid Cairo work arrangement.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "AppFactory",
    role: "Flutter Developer",
    location: "القاهرة الجديدة، مصر",
    mode: "دوام كامل · On-site",
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 20 أغسطس",
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
    location: "القاهرة، مصر",
    mode: "دوام كامل · نموذج العمل يحتاج تأكيد",
    age: "Apply مفتوح على LinkedIn · تحققت 20 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور في مصر ويطلب 3–6 سنوات Flutter وDart وstate management وFirebase وREST وCI/CD؛ تطابق قوي مع خبرة محمد الإنتاجية.",
    note: "الموقع في القاهرة ونموذج العمل غير واضح؛ أكّد الحضور ونطاق الراتب قبل التقديم.",
    href: "https://www.linkedin.com/jobs/view/4439798622/",
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
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 20 أغسطس",
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
    company: "Jolie Egypt / Meenda",
    role: "Flutter Mobile Developer",
    location: "الشيخ زايد، الجيزة، مصر",
    mode: "دوام كامل · Remote من مصر",
    age: "Apply مفتوح على Wuzzuf · تحققت 20 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور مفتوح من مصر ويطلب 2+ سنوات Flutter Production، Dart، BLoC/Cubit أو Riverpod، REST وGraphQL، التخزين المحلي، Firebase والاختبارات؛ تطابق قوي مع خبرة محمد الإنتاجية.",
    note: "الدور Remote لكن الشركة والإعلان في الجيزة، والراتب غير معلن؛ تأكد من نطاق الراتب وطبيعة التعاون اليومي.",
    href: "https://wuzzuf.net/jobs/p/f2qyxeh9duti-flutter-mobile-developer-jolie-egypt-giza-egypt",
    coverLetter: `Dear Jolie Egypt / Meenda Hiring Team,

I am applying for the Flutter Mobile Developer position. I have more than three years of production experience building and maintaining Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.

My experience includes production feature ownership, modular architecture, API and third-party integrations, local persistence, performance improvements, testing, and automated mobile releases. Meenda’s requirements around Flutter, BLoC/Cubit or Riverpod, REST and GraphQL APIs, secure storage, Firebase, RTL localization, and app-store delivery align closely with my background.

I am based in Egypt and would welcome the opportunity to contribute to Meenda’s Arabic and English mobile experience in a remote role from Egypt.

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
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 20 أغسطس",
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
    age: "صفحة التوظيف المفتوحة · تحققت 20 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور يطلب 3+ سنوات Native Android مع Kotlin وDagger/Hilt وMVVM/MVI وClean Architecture وCI/CD والاختبارات؛ كما أن مجال Khazna في المدفوعات قريب من خبرة أسماء.",
    note: "المسمى Senior رغم شرط 3+ سنوات، ونموذج العمل والراتب غير معلنين؛ اسألي عن المستوى الفعلي والحضور قبل استثمار وقت كبير.",
    href: "https://careers.speedinvest.com/companies/khazna/jobs/83530373-senior-android-developer",
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
    age: "Apply مفتوح على Wuzzuf · تحققت 20 أغسطس",
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
    company: "Henkel",
    role: "Android Engineer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · Hybrid / Work from anywhere حتى 30 يومًا",
    age: "صفحة Henkel الرسمية مفتوحة · تحققت 20 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور في القاهرة ويطلب 3+ سنوات mobile مع Android/Kotlin وJetpack وCompose وClean Architecture وREST وCI/CD والاختبارات؛ تطابق مباشر مع خبرة أسماء، مع ميزة إضافية لخبرتها في الأمان والأداء.",
    note: "الدور يجمع Android وReact Native، والراتب غير معلن؛ أكّدي نسبة العمل على Android قبل التقديم.",
    href: "https://www.henkel.com/careers/find-your-job-apply/2211118-2211118",
    coverLetter: `Dear Henkel Hiring Team,

I am applying for the Android Engineer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.

My background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, automated testing, and Google Play release management. I also contributed to healthcare and government services, including an Egypt Ministry of Justice application serving more than one million users.

Henkel’s focus on maintainable, performant, secure mobile products, backend integrations, testing, and release processes aligns closely with my experience. I would welcome a discussion about the Android scope and hybrid work model.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Egyptian Banks Company",
    role: "Senior Engineer, Mobile Software Development (Android)",
    location: "القاهرة الجديدة، مصر",
    mode: "دوام كامل · On-site · Easy Apply",
    age: "التقديم مفتوح على LinkedIn · تحققت 20 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور يطلب تقريبًا 3+ سنوات Android مع Kotlin/Java وMVVM/MVI وRetrofit وRoom وCoroutines/Flow وFirebase والاختبارات والأمان؛ تطابق مباشر مع خبرة أسماء.",
    note: "الدور On-site في New Cairo والراتب غير معلن؛ اسألي عن صافي الراتب وساعات الحضور قبل التقديم.",
    href: "https://www.linkedin.com/jobs/view/4454740534/",
    coverLetter: `Dear Egyptian Banks Company Hiring Team,

I am applying for the Senior Engineer, Mobile Software Development (Android) position in New Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.

My background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, Google Play releases, and production testing. I also contributed to healthcare and government services, including an Egypt Ministry of Justice application serving more than one million users.

The role’s focus on Kotlin/Java, MVVM or MVI, Retrofit, Room, Coroutines/Flow, Firebase Crashlytics, CI/CD, secure storage, and Android releases aligns closely with my experience. I am based in Egypt and would welcome the opportunity to discuss the on-site New Cairo arrangement.

Best regards,
Asmaa Atya`,
  },
  {
    company: "geidea",
    role: "Senior Android Developer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · On-site · Easy Apply",
    age: "التقديم مفتوح على LinkedIn · تحققت 20 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور في شركة مدفوعات مصرية ويطلب Kotlin وCompose وMVVM وKMM وHilt/Koin وCoroutines وFlow وRoom وFirebase والأمان؛ التطابق التقني قوي لكن شرط 4–5 سنوات وKMM غير مؤكدين بالكامل.",
    note: "الوظيفة جديدة ومفتوحة، لكن شرط KMM و4–5 سنوات أعلى من الملف المؤكد؛ قدّميها كفرصة Stretch فقط.",
    href: "https://www.linkedin.com/jobs/view/4456302158/",
    coverLetter: `Dear geidea Hiring Team,

I am applying for the Senior Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.

My background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, Google Play release management, and production support. I also contributed to healthcare and government services, including an Egypt Ministry of Justice application serving more than one million users.

geidea’s focus on secure fintech products and its requirements around Compose, MVVM, modular architecture, Coroutines/Flow, Room, Firebase monitoring, CI/CD, and mobile security align closely with my experience. I would welcome a discussion about the seniority expectations and the Cairo work arrangement.

Best regards,
Asmaa Atya`,
  },
] as const;

const rejected = [
  "TAWANTECH: صفحة Workable الحالية تحوّل إلى not_found، فتمت إزالته.",
  "Tawfeer: صفحة Wuzzuf الحالية تعرض Browse Similar Jobs بدل زر التقديم، فتمت إزالته.",
  "Dsquares: LinkedIn أظهر No longer accepting applications، فتم استبعاده.",
  "Diverge وMedad وScript وUnipal وPSdigital: خارج مصر أو انتقال فقط؛ اتشالوا بعد تطبيق شرط مصر الإلزامي.",
  "AL Master: صفحة LinkedIn أظهرت أن التقديم لم يعد يستقبل طلبات، فتم استبعاده.",
] as const;

const androidRejected = [
  "Procore: صفحة LinkedIn أظهرت No longer accepting applications، فتم استبعاده.",
  "Yassir: الإعلان ظاهر قديمًا جدًا، فتمت إزالته بدل حمله كفرصة حية.",
  "Al Ahly Momkn: صفحة LinkedIn قديمة وغير مناسبة كمسار مفتوح مؤكد، فتم استبعاده.",
  "الأدوار Junior/Internship وFlutter-only وReact Native-only وiOS-only اتشالت.",
  "منشورات LinkedIn: لم يظهر اليوم منشور مصر مؤهل يجمع دور Android/Flutter وتواصلًا مباشرًا معلنًا خلال ٧٢ ساعة؛ لذلك العدد الحقيقي لمحمد ٠ ولأسماء ٠ وأقل من ٥.",
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

type DirectPost = {
  company: string;
  role: string;
  location: string;
  age: string;
  poster: string;
  posterRole: string;
  match: string;
  matchClass: string;
  summary: string;
  contact: string;
  note: string;
  href: string;
  whatsapp?: string;
  whatsappMessage?: string;
};

function DirectPostCards({ posts }: { posts: readonly DirectPost[] }) {
  return <div className="postGrid">{posts.map((post) => <article className="postCard" key={`${post.company}-${post.poster}`}>
    <div className="cardTop"><span className="postSource">LinkedIn Post</span><span className={`match ${post.matchClass}`}>{post.match}</span></div>
    <p className="company">{post.company}</p><h3>{post.role}</h3>
    <div className="meta"><span>{post.location}</span><span>{post.age}</span></div>
    <p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p>
    <p className="why"><b>ليه مناسبة:</b> {post.summary}</p>
    <p className="postContact"><b>التواصل:</b> {post.contact}</p>
    <p className="note"><b>خد بالك:</b> {post.note}</p>
    <div className="postActions"><a href={post.href} target="_blank" rel="noreferrer">افتح نشاط صاحب الإعلان <span aria-hidden="true">↗</span></a>
      {post.whatsapp && post.whatsappMessage && <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent(post.whatsappMessage)}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>}
    </div>
  </article>)}</div>;
}

export default function Home() {
  return <main>
    <header className="hero">
      <nav aria-label="رأس التقرير"><span className="brand">فرص محمد وأسماء</span><span className="date">تقرير 20 أغسطس 2026</span></nav>
      <div className="heroCopy"><p className="eyebrow">Flutter وAndroid Native في مصر فقط</p><h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1><p className="intro">وظائف مصرية أو مؤكدة القبول من مصر، مع Cover Letters وقسم إرسال Gmail منفصل لكل مرشح.</p></div>
      <div className="stats" aria-label="ملخص التقرير"><div><strong>2</strong><span>مسار وظيفي</span></div><div><strong>{jobs.length}</strong><span>فرص Flutter</span></div><div><strong>{androidJobs.length}</strong><span>فرص Android</span></div></div>
    </header>

    <section className="criteria" aria-label="معايير البحث"><span>مصر فقط أو قبول مصر مؤكد</span><span>لا وظائف انتقال فقط</span><span>تقديم مفتوح ومسار واضح</span><span>Mid أو Senior كفرصة Stretch</span></section>

    <section className="content"><fieldset className="candidateTabs"><legend className="srOnly">اختار تقرير الوظائف</legend>
      <input className="tabInput" type="radio" name="candidate" id="flutter-tab" defaultChecked /><label className="tabLabel" htmlFor="flutter-tab"><span>Flutter — Muhammad Essam</span><small>محمد Essam</small></label>
      <input className="tabInput" type="radio" name="candidate" id="android-tab" /><label className="tabLabel" htmlFor="android-tab"><span>Android Native — Asmaa Atya</span><small>أسماء Atya</small></label>

      <section className="tabPanel flutterPanel" aria-labelledby="flutter-tab">
        <div className="sectionHead"><div><p className="eyebrow">Flutter · Muhammad Essam</p><h2>٥ تطابقات قوية</h2></div><p>٥ وظائف رسمية مفتوحة: ٥ قوية. بحث LinkedIn Posts بترتيب Latest تم من جلسة LinkedIn الحالية؛ لم يظهر منشور مصر مؤهل بإيميل أو WhatsApp خلال ٧٢ ساعة، لذلك العدد الحقيقي ٠ وأقل من ٥.</p></div>
        <div className="jobGrid">{jobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} />)}</div>
        <section className="linkedInSection" aria-label="منشورات توظيف Flutter على LinkedIn"><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لمحمد · {freshFlutterDirectPosts.length}</h2></div><p>بحث Latest تم التحقق منه؛ لم يظهر خلال ٧٢ ساعة منشور مصر مؤهل يجمع دور Flutter وتواصلًا مباشرًا معلنًا، لذلك العدد الحقيقي ٠ وأقل من ٥.</p></div><DirectPostCards posts={freshFlutterDirectPosts} /></section>
        <EmailComposer candidate="Muhammad Essam" applications={freshFlutterEmailApplications} />
        <div className="rejected" aria-label="فرص Flutter مستبعدة"><p className="eyebrow">فلترة Flutter</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="tabPanel androidPanel" aria-labelledby="android-tab">
        <div className="sectionHead"><div><p className="eyebrow">Android Native · Asmaa Atya</p><h2>٤ قوية و٢ ممكنة</h2></div><p>٦ وظائف رسمية مفتوحة: ٤ قوية و٢ ممكنة. بحث LinkedIn Posts بترتيب Latest لم يجد اليوم منشور مصر مؤهلًا بإيميل أو WhatsApp خلال ٧٢ ساعة، لذلك العدد الحقيقي ٠ وأقل من ٥.</p></div>
        <div className="jobGrid">{androidJobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} android />)}</div>
        <section className="linkedInSection" aria-label="منشورات توظيف Android على LinkedIn"><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لأسماء · {freshAndroidDirectPosts.length}</h2></div><p>بحث Latest تم التحقق منه عبر كلمات Android وKotlin وJetpack Compose والعربية؛ لم يظهر خلال ٧٢ ساعة منشور مصر صالح بإيميل أو WhatsApp، لذلك العدد الحقيقي ٠ وأقل من ٥.</p></div><DirectPostCards posts={freshAndroidDirectPosts} /></section>
        <EmailComposer candidate="Asmaa Atya" applications={freshAndroidEmailApplications} />
        <div className="rejected" aria-label="فرص Android مستبعدة"><p className="eyebrow">فلترة Android Native</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{androidRejected.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>
    </fieldset></section>

    <footer><p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p><p>آخر تحديث: 20 أغسطس 2026 · القاهرة</p></footer>
  </main>;
}
