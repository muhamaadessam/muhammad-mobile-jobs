import CopyButton from "./CopyButton";
import EmailComposer from "./EmailComposer";
import { freshAndroidDirectPosts, freshAndroidEmailApplications, freshFlutterDirectPosts, freshFlutterEmailApplications } from "./fresh-data";

const flutterJobs = [
  {
    company: "Adree", role: "Flutter, Developer", location: "القاهرة، مصر", mode: "دوام كامل · Remote Egypt Office", age: "صفحة Workable مفتوحة · تحققت 21 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "3–6 سنوات Flutter، Dart، Bloc/Provider/Riverpod/GetX، REST/GraphQL، Firebase، التخزين المحلي، الاختبارات وCI/CD؛ تطابق مباشر مع خبرة محمد الإنتاجية.",
    note: "نموذج العمل المعروض Remote Egypt Office؛ الراتب غير معلن.", href: "https://apply.workable.com/adree/j/089D2DAF05/",
    coverLetter: `Dear Adree Hiring Team,\n\nI am applying for the Flutter, Developer position in Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nMy experience includes production feature ownership, modular architecture, API integrations, local persistence, performance improvements, debugging, and automated mobile releases. Adree’s requirements around Flutter architecture, state management, APIs, Firebase, local storage, testing, and CI/CD align closely with my background.\n\nI am based in Egypt and would welcome the opportunity to contribute to Adree’s mobile products.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
  {
    company: "TAWANTECH", role: "Senior Flutter Developer offshore", location: "القاهرة، مصر", mode: "دوام كامل · On-site", age: "صفحة Workable مفتوحة · تحققت 21 أغسطس", salary: "مخفي",
    match: "فرصة ممكنة", matchClass: "stretch", why: "الدور في القاهرة ويطلب 3+ سنوات Flutter وDart وBLoC/Riverpod/Provider/GetX وREST وFirebase وCI/CD؛ قوي تقنيًا لكن المسمى Senior وشرط 5+ سنوات إجمالي Stretch صريح.",
    note: "قدّمها كفرصة Stretch فقط؛ الحضور On-site في القاهرة والراتب غير معلن.", href: "https://apply.workable.com/tawantech/j/E4F7EC89FB/",
    coverLetter: `Dear TAWANTECH Hiring Team,\n\nI am applying for the Senior Flutter Developer position in Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nI have owned production features from architecture through release, integrated backend and third-party services, improved performance, and supported reliable mobile delivery. The role’s Flutter, API, Firebase, architecture, CI/CD, and deployment requirements align closely with my hands-on experience.\n\nI am based in Egypt and would welcome a discussion about the Senior scope and the Cairo on-site arrangement.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
  {
    company: "Envision Employment Solutions", role: "Senior Mobile Developer (Flutter)", location: "القاهرة، مصر", mode: "دوام كامل · Work model يحتاج تأكيد", age: "إعلان ظاهر مفتوح · تحققت 21 أغسطس", salary: "مخفي",
    match: "فرصة ممكنة", matchClass: "stretch", why: "تقديم مفتوح لدور Flutter في القاهرة مع REST، architecture، state management، testing وCI/CD؛ مناسب تقنيًا، لكن شرط 6+ سنوات وقيادة/mentoring أعلى من خبرة محمد المؤكدة.",
    note: "Senior واضح وشرط 6+ سنوات؛ يُعامل كـStretch فقط قبل استثمار وقت كبير.", href: "https://www.glassdoor.com/job-listing/senior-mobile-developer-flutter-envision-employment-solutions-JV_IC3438985_KO0,31_KE32,61.htm",
    coverLetter: `Dear Envision Employment Solutions Hiring Team,\n\nI am applying for the Senior Mobile Developer (Flutter) position in Cairo. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, GitHub Actions, and Fastlane.\n\nMy background includes production feature ownership, modular architecture, API integrations, performance improvements, testing, and automated mobile releases. The role’s focus on Flutter, architecture, state management, APIs, quality, and CI/CD aligns closely with my experience.\n\nI understand the posting asks for 6+ years and senior-level technical leadership; I am applying as an honest stretch candidate and would welcome a discussion if the team is open to a strong 3+ year production profile.\n\nPortfolio: https://muhamaadessam.github.io/\n\nBest regards,\nMuhammad Essam`,
  },
] as const;

const androidJobs = [
  {
    company: "onebank", role: "Mobile Application Developer (Multiple Levels)", location: "المعادي، القاهرة، مصر", mode: "دوام كامل · Android Native", age: "LinkedIn يوضح Apply مفتوح · تحققت 21 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "onebank بنك رقمي مصري ويبحث عن مستويات متعددة في Android مع اهتمام بالصيانة والأمان وتجربة المستخدم؛ مناسب جدًا لخبرة أسماء في Kotlin والمدفوعات والأمان.",
    note: "الإعلان يجمع Android وiOS؛ اختاري مسار Android فقط عند التقديم.", href: "https://eg.linkedin.com/jobs/view/mobile-application-developer-multiple-levels-at-onebank-4445618680",
    coverLetter: `Dear onebank Hiring Team,\n\nI am applying for the Mobile Application Developer position on the Android track. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, Google Play releases, and an Egypt Ministry of Justice application serving more than one million users. onebank’s focus on secure digital banking in Egypt aligns closely with my Android and payments experience.\n\nI am based in Egypt and would welcome the opportunity to discuss the Android scope.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "Luxoft", role: "Regular/Senior Android Developer", location: "القاهرة، مصر", mode: "دوام كامل · Android", age: "صفحة Luxoft الرسمية مفتوحة · تحققت 21 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "الدور في القاهرة ويطلب Android SDK، Kotlin، Compose، Coroutines/Flow، MVVM، Dagger، Retrofit والاختبارات؛ تطابق مباشر مع خبرة أسماء.",
    note: "المسمى يضم Regular/Senior؛ ناقشي المستوى المناسب قبل المراحل المتقدمة.", href: "https://career.luxoft.com/jobs/regularsenior-android-developer-25119",
    coverLetter: `Dear Luxoft Hiring Team,\n\nI am applying for the Regular/Senior Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, unit testing, and Google Play release management. The role’s requirements around Android SDK, Kotlin, Compose, Coroutines/Flow, MVVM, Dagger, Retrofit, API integration, and testing align closely with my experience.\n\nI am based in Egypt and would welcome the opportunity to contribute to the Cairo team.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "Henkel", role: "Android Engineer", location: "القاهرة، مصر", mode: "دوام كامل · Hybrid", age: "صفحة Henkel الرسمية مفتوحة · تحققت 21 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "دور Android/Kotlin في القاهرة مع Compose، Clean Architecture، REST، الأداء، الأمان، الاختبارات والإطلاقات؛ تطابق قوي مع خبرة أسماء.",
    note: "الدور يجمع Android وReact Native؛ أكّدي أن نطاق العمل يغلب عليه Android Native.", href: "https://www.henkel.com/careers/find-your-job-apply/2211118-2211118",
    coverLetter: `Dear Henkel Hiring Team,\n\nI am applying for the Android Engineer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, performance optimization, automated testing, and Google Play release management. Henkel’s focus on secure, performant mobile products and reliable delivery aligns closely with my experience.\n\nI am based in Egypt and would welcome a discussion about the Android scope and hybrid work model.\n\nBest regards,\nAsmaa Atya`,
  },
  {
    company: "Müller’s Solutions", role: "Android Developer", location: "القاهرة، مصر", mode: "دوام كامل · On-site", age: "صفحة Workable مفتوحة · تحققت 21 أغسطس", salary: "مخفي",
    match: "تطابق قوي", matchClass: "strong", why: "الدور يطلب 3+ سنوات Android مع Kotlin/Java وREST/JSON وAndroid SDK وRetrofit وGit والأداء؛ مطابق لنطاق أسماء المتوسط.",
    note: "الحضور On-site في القاهرة والراتب غير معلن.", href: "https://jobs.workable.com/view/ccrhUAFVg8K4qcJtmk5M18/android-developer-in-cairo-at-m%C3%BCller%60s-solutions",
    coverLetter: `Dear Müller’s Solutions Hiring Team,\n\nI am applying for the Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, Coroutines, dependency injection, REST APIs, Firebase, Git, JUnit, and MockK.\n\nMy experience includes POS, invoices, payment integrations, healthcare, government services, secure data handling, performance optimization, multi-module architecture, and Google Play releases. The role’s focus on Kotlin/Java, Android SDK, REST APIs, JSON, architecture, Git, debugging, and performance aligns closely with my background.\n\nI am based in Egypt and available for the Cairo on-site role.\n\nBest regards,\nAsmaa Atya`,
  },
] as const;

const rejected = [
  "أُزيلت الوظائف القديمة أو التي لم تعد تفتح مسار تقديم واضحًا، ومنها عناصر Wuzzuf وLinkedIn من تحديث 20 أغسطس.",
  "TAWANTECH وEnvision موجودتان كـStretch فقط بسبب Senior/6+ سنوات؛ لم تُخفَ الفجوة.",
  "منشورات Fulltek وObjects استُبعدت لأنها نموذج تقديم فقط أو خارج نافذة 72 ساعة.",
] as const;

const androidRejected = [
  "استُبعدت Synechron لأن نص الإعلان يتحدث عن تأشيرة/لوائح الإمارات رغم ظهور Cairo في العنوان.",
  "استُبعدت الأدوار Junior/Internship وFlutter-only وReact Native-only وiOS-only.",
  "منشورات Tawajood وNTG/Recrenza أقدم من 72 ساعة، لذلك لم تُعرض كمنشورات مباشرة اليوم.",
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
  return <section className="tabPanel" aria-labelledby={android ? "android-tab" : "flutter-tab"}><div className="sectionHead"><div><p className="eyebrow">{android ? "Android Native · Asmaa Atya" : "Flutter · Muhammad Essam"}</p><h2>{strong} قوية{jobs.length - strong ? ` و${jobs.length - strong} ممكنة` : ""}</h2></div><p>{jobs.length} وظائف رسمية مفتوحة ومتحقق منها داخل مصر. منشورات LinkedIn Posts بترتيب Latest خلال آخر 72 ساعة: {posts.length} صالح؛ العدد الحقيقي أقل من 5 بعد استبعاد DM-only والنماذج العامة والوظائف غير المصرية.</p></div><div className="jobGrid">{jobs.map((job, index) => <JobCard key={`${job.company}-${job.role}`} job={job} index={index} android={android} />)}</div><section className="linkedInSection" aria-label={`منشورات توظيف ${android ? "Android" : "Flutter"} على LinkedIn`}><div className="sectionHead"><div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لـ{name} · {posts.length}</h2></div><p>الفلترة مصر فقط، والسن حتى 72 ساعة فقط. أي منشور بلا إيميل أو WhatsApp معلن لا يظهر هنا.</p></div><DirectPostCards posts={posts} /></section><EmailComposer candidate={name} applications={applications} /><div className="rejected" aria-label="الفرص المستبعدة"><p className="eyebrow">فلترة اليوم</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2><ul>{rejectedItems.map((item) => <li key={item}>{item}</li>)}</ul></div></section>;
}

export default function Home() {
  return <main><header className="hero"><nav aria-label="رأس التقرير"><span className="brand">فرص محمد وأسماء</span><span className="date">تقرير 21 أغسطس 2026</span></nav><div className="heroCopy"><p className="eyebrow">Flutter وAndroid Native في مصر فقط</p><h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1><p className="intro">وظائف مصرية أو مؤكدة القبول من مصر، مع Cover Letters وقسم إرسال Gmail منفصل لكل مرشح.</p></div><div className="stats" aria-label="ملخص التقرير"><div><strong>2</strong><span>مسار وظيفي</span></div><div><strong>{flutterJobs.length}</strong><span>فرص Flutter</span></div><div><strong>{androidJobs.length}</strong><span>فرص Android</span></div></div></header><section className="criteria" aria-label="معايير البحث"><span>مصر فقط أو قبول مصر مؤكد</span><span>لا وظائف انتقال فقط</span><span>تقديم مفتوح ومسار واضح</span><span>Mid أو Senior كفرصة Stretch</span></section><section className="content"><fieldset className="candidateTabs"><legend className="srOnly">اختار تقرير الوظائف</legend><input className="tabInput" type="radio" name="candidate" id="flutter-tab" defaultChecked /><label className="tabLabel" htmlFor="flutter-tab"><span>Flutter — Muhammad Essam</span><small>محمد Essam</small></label><input className="tabInput" type="radio" name="candidate" id="android-tab" /><label className="tabLabel" htmlFor="android-tab"><span>Android Native — Asmaa Atya</span><small>أسماء Atya</small></label><ReportTab /><ReportTab android /></fieldset></section><footer><p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p><p>آخر تحديث: 21 أغسطس 2026 · القاهرة</p></footer></main>;
}
