import CopyButton from "./CopyButton";
import EmailComposer from "./EmailComposer";
import { freshAndroidDirectPosts, freshAndroidEmailApplications, freshFlutterDirectPosts, freshFlutterEmailApplications } from "./fresh-data";

const flutterJobs = [
  {
    company: "Axis", role: "Flutter Mobile Engineer", location: "القاهرة، مصر", mode: "دوام كامل · Hybrid", age: "LinkedIn · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "Flutter وDart وBLoC وClean Architecture وREST والاختبارات؛ منتج FinTech داخل مصر وتطابق مباشر مع خبرة محمد.",
    note: "تطلب الشركة +2 سنة؛ الراتب غير معلن.", href: "https://eg.linkedin.com/jobs/view/flutter-mobile-engineer-at-axis-4449286578",
    coverLetter: `Dear Axis Hiring Team,\n\nI am applying for the Flutter Mobile Engineer position in Cairo. I have more than three years of production experience building Flutter applications using Dart, BLoC/Cubit, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nAxis’s focus on Flutter, BLoC, clean architecture, authentication, fintech security, and automated testing aligns closely with my production background. I have owned features from architecture through release and can contribute quickly to a reliable wallet product.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
  {
    company: "Adree", role: "Flutter, Developer", location: "القاهرة، مصر", mode: "دوام كامل · Remote Egypt", age: "LinkedIn منذ شهر · Apply مفتوح · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "3–6 سنوات Flutter، Dart، Bloc/Provider/Riverpod/GetX، REST/GraphQL، Firebase، التخزين المحلي، الاختبارات وCI/CD؛ تطابق مباشر مع خبرة محمد الإنتاجية.",
    note: "الوظيفة في القاهرة؛ الراتب غير معلن.", href: "https://apply.workable.com/adree/j/089D2DAF05/",
    coverLetter: `Dear Adree Hiring Team,\n\nI am applying for the Flutter, Developer position in Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nMy experience includes production feature ownership, modular architecture, API integrations, local persistence, performance improvements, debugging, and automated mobile releases. Adree’s requirements around Flutter architecture, state management, APIs, Firebase, local storage, testing, and CI/CD align closely with my background.\n\nI am based in Egypt and would welcome the opportunity to contribute to Adree’s mobile products.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
  {
    company: "Div Systems", role: "Flutter Mobile Application Developer", location: "المقطم، القاهرة، مصر", mode: "دوام كامل · On-site", age: "صفحة الشركة مفتوحة · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "الدور يطلب 3+ سنوات Flutter وDart وMVVM/أنماط التصميم وGit وREST؛ مسار تقديم مباشر من شركة مصرية وتطابق واضح مع خبرة محمد.",
    note: "صفحة التقديم الرسمية ما زالت تعرض Apply Now؛ الراتب غير معلن.", href: "https://portal.div-systems.com/jobs/detail/flutter-mobile-application-developer-33",
    coverLetter: `Dear Div Systems Hiring Team,\n\nI am applying for the Flutter Mobile Application Developer position in Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nMy background in mobile architecture, API integration, testing, performance improvements, and release workflows matches the role’s Flutter, Dart, design-pattern, Git, and REST requirements. I would welcome the opportunity to contribute to Div Systems’ Cairo team.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
  {
    company: "AppFactory", role: "Flutter Developer", location: "نيو كايرو، مصر", mode: "دوام كامل · On-site", age: "صفحة الشركة مفتوحة · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "3–5 سنوات Flutter إنتاجي، Dart، state management، REST/WebSockets، الاختبارات وCI/CD؛ وظيفة مصرية بمسار تقديم رسمي وتطابق مباشر.",
    note: "On-site في New Cairo؛ الراتب تنافسي حسب الخبرة وغير محدد رقميًا.", href: "https://www.appfactoryltd.com/flutter-developer.html",
    coverLetter: `Dear AppFactory Hiring Team,\n\nI am applying for the Flutter Developer position in New Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nI have worked across feature ownership, responsive UI, API and real-time integrations, performance improvements, automated tests, and mobile release workflows. AppFactory’s requirements for production Flutter, Dart, state management, REST/WebSockets, testing, CI/CD, and platform integrations align closely with my background.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
  {
    company: "CoorB", role: "Senior Mobile Developer (Flutter)", location: "مصر", mode: "دوام كامل · Remote", age: "LinkedIn منذ أسبوعين · Apply مفتوح · تحققت 26 أغسطس", salary: "مخفي",
    match: "فرصة ممكنة", matchClass: "stretch", why: "الدور Remote ومذكور لمصر، ويطلب Flutter/Dart، architecture، state management، REST، testing وnative platform knowledge؛ التطابق التقني جيد لكن شرط 5+ سنوات والمسمى Senior أعلى من الأولوية.",
    note: "Stretch فقط: يطلب 5+ سنوات ويفتح Flutter أو React Native؛ أكّدي أن المسار Flutter قبل التقديم.", href: "https://eg.linkedin.com/jobs/view/mobile-developer-flutter-at-coorb-4446729665",
    coverLetter: `Dear CoorB Hiring Team,\n\nI am applying for the Senior Mobile Developer (Flutter) position, with Flutter as my primary track. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nMy background includes modular architecture, API integrations, secure local persistence, performance improvements, automated testing, and reliable mobile release workflows. The role’s Flutter, architecture, state management, REST/OAuth integrations, testing, security, and platform-specific delivery requirements align closely with my experience.\n\nI understand the posting asks for 5+ years and combines Flutter with React Native. I am applying as an honest stretch candidate for the Flutter track and would welcome a discussion about the scope and Egypt remote arrangement.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
  {
    company: "BlueCloud Technologies", role: "Senior Mobile Developer", location: "القاهرة، مصر", mode: "دوام كامل · On-site", age: "Workable مفتوح · تحققت 26 أغسطس", salary: "مخفي",
    match: "فرصة ممكنة", matchClass: "stretch", why: "الدور في القاهرة ويطلب 3–5 سنوات مع Flutter وREST/GraphQL وBLoC/Provider وFirebase وFastlane؛ مناسب جزئيًا، لكن React Native جزء أساسي من النطاق والمسمى Senior.",
    note: "قدّمه فقط إذا كان الفريق يقبل Flutter كمسار أساسي؛ الراتب غير معلن.", href: "https://apply.workable.com/bluecloud-technologies/j/63F5874D1A/",
    coverLetter: `Dear BlueCloud Technologies Hiring Team,\n\nI am applying for the Senior Mobile Developer position in Cairo, with Flutter as my primary track. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nMy background includes modular architecture, API integrations, push notifications, performance improvements, testing, and mobile release automation. The role’s Flutter, API, state management, Firebase, CI/CD, and app-store delivery requirements align closely with my experience.\n\nI would welcome a discussion about the Flutter scope within the mixed mobile team and the Cairo on-site arrangement.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
] as const;

const androidJobs = [
  {
    company: "Reference Agency", role: "Android Developer", location: "القاهرة، مصر", mode: "Part-time · Remote", age: "LinkedIn منذ يومين · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "Kotlin وJetpack Compose وMVVM/MVI وCoroutines/Flow وRetrofit وRoom وHilt وRTL؛ تطابق تقني قوي مع منتج HealthTech عربي.",
    note: "العمل Part-time وRemote؛ التقديم من خلال LinkedIn فقط.", href: "https://eg.linkedin.com/jobs/view/android-developer-at-reference-agency-4457389645",
    coverLetter: `Dear Reference Agency Hiring Team,\n\nI am applying for the Android Developer position. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nThe role’s Compose, modern architecture, offline data, wearable integrations, Arabic RTL, and Play Store requirements align closely with my background. I would welcome the opportunity to contribute to the Arabic-first health product on the remote part-time arrangement.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "Vertex Technologies", role: "Middle Android Developer", location: "سمارت فيليج، الجيزة، مصر", mode: "دوام كامل · On-site", age: "صفحة الشركة مفتوحة · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "3+ سنوات Android تجاري مع Kotlin وJetpack Compose وDagger وMVVM وCoroutines وREST؛ شركة مصرية وعنوان العمل في الجيزة.",
    note: "الدور يطلب Upper-Intermediate English؛ الراتب مدفوع بالدولار حسب الصفحة وغير معلن رقميًا.", href: "https://vertextech-eg.com/vacancies/middle-android-developer",
    coverLetter: `Dear Vertex Technologies Hiring Team,\n\nI am applying for the Middle Android Developer position in Giza. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy experience with multi-module architecture, SOLID principles, secure data handling, performance optimization, testing, and Google Play releases aligns closely with the role’s Kotlin, Compose, Dagger, Coroutines, MVVM, and REST requirements. I am based in Egypt and would welcome the opportunity to contribute to Vertex Technologies in Smart Village.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "Khazna", role: "Senior Android Developer", location: "القاهرة، مصر", mode: "دوام كامل · Android Native", age: "LinkedIn منذ يومين · Apply مفتوح · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "شركة fintech مصرية والدور يطلب 3+ سنوات Native Android، Kotlin، Hilt/Dagger، MVVM/MVI/Clean Architecture، CI/CD والاختبارات؛ تطابق مباشر مع خبرة أسماء في المدفوعات.",
    note: "المسمى Senior لكن شرط الخبرة 3+ سنوات؛ الراتب غير معلن.", href: "https://eg.linkedin.com/jobs/view/senior-android-developer-at-khazna-4455071741",
    coverLetter: `Dear Khazna Hiring Team,\n\nI am applying for the Senior Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, unit testing, CI/CD, and Google Play release management. Khazna’s fintech mission and the role’s Kotlin, architecture, APIs, testing, and mobile delivery requirements align closely with my experience.\n\nI am based in Egypt and would welcome the opportunity to contribute to secure digital financial products at Khazna.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "Egyptian Banks Company", role: "Senior Engineer, Mobile Software Development (Android)", location: "القاهرة الجديدة، مصر", mode: "دوام كامل · Android Native", age: "LinkedIn منذ 5 أيام · Apply مفتوح · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "الدور يطلب 3+ سنوات Kotlin/Java وAndroid SDK وMVVM/MVI وRetrofit وRoom وCoroutines/Flow وFirebase والأمان؛ تطابق قوي مع خبرة أسماء في المدفوعات والأنظمة الآمنة.",
    note: "مسمى Senior لكن الخبرة المطلوبة تقريبًا 3+ سنوات؛ الراتب غير معلن.", href: "https://eg.linkedin.com/jobs/view/senior-engineer-mobile-software-development-android-at-egyptian-banks-company-4457896506",
    coverLetter: `Dear Egyptian Banks Company Hiring Team,\n\nI am applying for the Senior Engineer, Mobile Software Development (Android) position in New Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, Crashlytics, unit testing, CI/CD, and Google Play release management. The role’s Kotlin/Java, Android lifecycle, MVVM/MVI, Retrofit, Room, Coroutines/Flow, Firebase, security, and release requirements align closely with my experience.\n\nI am based in Egypt and would welcome the opportunity to contribute to reliable banking products at Egyptian Banks Company.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "TrianglZ", role: "Mid-Senior Android Engineer", location: "الإسكندرية، مصر", mode: "دوام كامل · Hybrid", age: "LinkedIn منذ 6 أيام · Apply مفتوح · تحققت 26 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "الدور في الإسكندرية ويطلب 3 سنوات مع Kotlin، Jetpack Compose، Coroutines/Flow، Dagger/Hilt، MVVM/MVI، Clean Architecture، Git وPush APIs؛ تطابق مباشر مع خبرة أسماء.",
    note: "Hybrid في الإسكندرية؛ استخدمت رابط LinkedIn المفتوح لأن صفحة JOIN القديمة مؤرشفة؛ الراتب غير معلن.", href: "https://eg.linkedin.com/jobs/view/mid-senior-android-engineer-at-trianglz-llc-4450107727",
    coverLetter: `Dear TrianglZ Hiring Team,\n\nI am applying for the Mid-Senior Android Engineer position in Alexandria. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy background includes multi-module architecture, POS and payment integrations, secure data handling, performance optimization, testing, Google Play releases, and production delivery. The role’s Kotlin, Compose, Coroutines/Flow, DI, MVVM/MVI, Clean Architecture, Git, and push-notification requirements align closely with my experience.\n\nI am based in Egypt and would welcome a discussion about the Alexandria hybrid arrangement.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "geidea", role: "Senior Android Developer", location: "القاهرة، مصر", mode: "دوام كامل · Android/KMM", age: "LinkedIn منذ 4 أيام · Apply مفتوح · تحققت 26 أغسطس", salary: "مخفي",
    match: "فرصة ممكنة", matchClass: "stretch", why: "الدور يطابق Kotlin/Android وREST وGit وتطوير تطبيقات فعلية، لكن يطلب 4+ سنوات وخبرة KMM؛ مناسب كـStretch فقط.",
    note: "يطلب 4–5 سنوات وخبرة KMM؛ قدّميها كـStretch فقط والراتب غير معلن.", href: "https://eg.linkedin.com/jobs/view/senior-android-developer-at-geidea-4456302158",
    coverLetter: `Dear geidea Hiring Team,\n\nI am applying for the Senior Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, unit testing, and Google Play release management. geidea’s fintech focus and the role’s Android, Compose, modular architecture, APIs, testing, security, and delivery requirements align closely with my experience.\n\nI understand the posting asks for 4–5 years and practical KMM experience; I am applying as an honest stretch candidate and would welcome a discussion if the team is open to a strong 3+ year Android profile.\n\nBest regards,\nAsmaa Atya`,
  },
] as const;

const rejected = [
  "أُزيلت الوظائف القديمة أو التي لم تعد تفتح مسار تقديم واضحًا؛ لم أُبقِ أي بطاقة من تحديث سابق بلا إعادة تحقق اليوم.",
  "أُزيلت TAWANTECH لأن رابط Workable أصبح غير موجود، وNawy لأن المسمى الحالي React Native بدل Flutter؛ أضيفت مسارات Div Systems وAppFactory الرسمية المفتوحة.",
  "لم يظهر منشور LinkedIn لمحمد يمكن إثبات عمره خلال 72 ساعة مع إيميل أو WhatsApp معلن؛ لذلك العدد الحقيقي 0.",
] as const;

const androidRejected = [
  "أُزيل الدور السابق لأن نتيجته القديمة كانت مغلقة ومحتواه يخلط بين مصر والإمارات؛ أضيفت Vertex وEgyptian Banks Company بمسارات مصرية قابلة للتحقق.",
  "استُبعدت الأدوار Junior/Internship وFlutter-only وReact Native-only وiOS-only.",
  "لم يظهر منشور LinkedIn لأسماء يمكن إثبات عمره خلال 72 ساعة مع إيميل أو WhatsApp معلن؛ لذلك العدد الحقيقي 0.",
] as const;

function JobCard({ job, index, android = false }: { job: (typeof flutterJobs)[number] | (typeof androidJobs)[number]; index: number; android?: boolean }) {
  return <article className="jobCard"><div className="cardTop"><span className="rank">{String(index + 1).padStart(2, "0")}</span><span className={`match ${job.matchClass}`}>{job.match}</span></div><p className="company">{job.company}</p><h3>{job.role}</h3><div className="meta"><span>{job.location}</span><span>{job.mode}</span><span>{job.age}</span></div><div className="salary"><span>الراتب</span><strong>{job.salary}</strong></div><p className="why"><b>ليه مناسبة:</b> {job.why}</p><p className="note"><b>خد بالك:</b> {job.note}</p><div className="actions"><CopyButton text={job.coverLetter} /><a href={job.href} target="_blank" rel="noreferrer">{android ? "افتح التقديم" : "افتح الوظيفة"} <span aria-hidden="true">↗</span></a></div></article>;
}

type DirectPost = { company: string; role: string; location: string; age: string; poster: string; posterRole: string; match: string; matchClass: string; summary: string; contact: string; note: string; href: string; whatsapp?: string; whatsappMessage?: string };

function DirectPostCards({ posts }: { posts: readonly DirectPost[] }) {
  return <div className="postGrid">{posts.map((post) => <article className="postCard" key={`${post.company}-${post.poster}`}><div className="cardTop"><span className="postSource">LinkedIn Post</span><span className={`match ${post.matchClass}`}>{post.match}</span></div><p className="company">{post.company}</p><h3>{post.role}</h3><div className="meta"><span>{post.location}</span><span>{post.age}</span></div><p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p><p className="why"><b>ليه مناسبة:</b> {post.summary}</p><p className="postContact"><b>التواصل:</b> {post.contact}</p><p className="note"><b>خد بالك:</b> {post.note}</p><div className="postActions"><a href={post.href} target="_blank" rel="noreferrer">افتح نشاط صاحب الإعلان <span aria-hidden="true">↗</span></a>{post.whatsapp && post.whatsappMessage && <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent(post.whatsappMessage)}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>}</div></article>)}</div>;
}

function ReportTab({ android = false }: { android?: boolean }) {
  const jobs = android ? androidJobs : flutterJobs;
  const posts = android ? freshAndroidDirectPosts : freshFlutterDirectPosts;
  const applications = android ? freshAndroidEmailApplications : freshFlutterEmailApplications;
  const name = android ? "Asmaa Atya" : "Muhammad Essam";
  const rejectedItems = android ? androidRejected : rejected;
  const strong = jobs.filter((job) => job.matchClass === "strong").length;
  return <section className={`tabPanel ${android ? "androidPanel" : "flutterPanel"}`} aria-labelledby={android ? "android-tab" : "flutter-tab"}><div className="sectionHead"><div><p className="eyebrow">{android ? "Android Native · Asmaa Atya" : "Flutter · Muhammad Essam"}</p><h2>{strong} قوية{jobs.length - strong ? ` و${jobs.length - strong} ممكنة` : ""}</h2></div><p>{jobs.length} وظائف رسمية مفتوحة ومتحقق منها داخل مصر. LinkedIn Posts بترتيب Latest خلال آخر 72 ساعة: {posts.length} صالح؛ {posts.length < 5 ? `العدد الحقيقي أقل من 5 بعد الفلترة: ${posts.length} فقط.` : ""}</p></div><div className="jobGrid">{jobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} android={android} />)}</div><section className="linkedInSection" aria-label={`منشورات توظيف ${android ? "Android" : "Flutter"} على LinkedIn`}><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لـ{ name } · {posts.length}</h2></div><p>الفلترة مصر فقط، والسن حتى 72 ساعة فقط. أي منشور بلا إيميل أو WhatsApp معلن لا يظهر هنا.</p></div><DirectPostCards posts={posts} /></section><EmailComposer candidate={name} applications={applications} /><div className="rejected" aria-label="الفرص المستبعدة"><p className="eyebrow">فلترة اليوم</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{rejectedItems.map((item) => <li key={item}>{item}</li>)}</ul></div></section>;
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير"><span className="brand">فرص محمد وأسماء</span><span className="date">تقرير 26 أغسطس 2026</span></nav>
        <div className="heroCopy"><p className="eyebrow">Flutter وAndroid Native في مصر فقط</p><h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1><p className="intro">وظائف مصرية أو مؤكدة القبول من مصر، مع Cover Letters وقسم إرسال Gmail منفصل لكل مرشح.</p></div>
        <div className="stats" aria-label="ملخص التقرير"><div><strong>2</strong><span>مسار وظيفي</span></div><div><strong>{flutterJobs.length}</strong><span>فرص Flutter</span></div><div><strong>{androidJobs.length}</strong><span>فرص Android</span></div></div>
      </header>
      <section className="criteria" aria-label="معايير البحث"><span>مصر فقط أو Remote من مصر</span><span>لا وظائف انتقال فقط</span><span>تقديم مفتوح ومسار واضح</span><span>Mid أو Senior كفرصة Stretch</span></section>
      <section className="content"><fieldset className="candidateTabs"><legend className="srOnly">اختار تقرير الوظائف</legend><input className="tabInput" type="radio" name="candidate" id="flutter-tab" defaultChecked /><label className="tabLabel" htmlFor="flutter-tab"><span>Flutter — Muhammad Essam</span><small>محمد Essam</small></label><input className="tabInput" type="radio" name="candidate" id="android-tab" /><label className="tabLabel" htmlFor="android-tab"><span>Android Native — Asmaa Atya</span><small>أسماء Atya</small></label><ReportTab /><ReportTab android /></fieldset></section>
      <footer><p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p><p>آخر تحديث: 26 أغسطس 2026 · القاهرة</p></footer>
    </main>
  );
}
