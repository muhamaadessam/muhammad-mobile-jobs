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
    company: "Diverge AI",
    role: "Flutter Developer",
    location: "أبوظبي، الإمارات",
    mode: "دوام كامل · On-site",
    age: "مفتوحة حاليًا على Indeed · تحققت اليوم",
    salary: "6,000–9,000 درهم إماراتي / شهر",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "شركة إماراتية مقرها أبوظبي طالبة 2+ سنة Flutter مع Bloc/Provider، REST وWebSocket، Hive/sqflite، FCM وFirebase، Clean Architecture، اختبارات وCI/CD؛ ده أقرب تطابق كامل لخبرتك الحالية.",
    note: "لازم تكون مستعد للانتقال لأبوظبي، ونموذج التقديم بيطلب تأكيد قبول نطاق الراتب. اكتب Yes لو النطاق مناسب لك.",
    href: "https://ae.indeed.com/viewjob?jk=9051550655829cb1",
    coverLetter: `Dear Diverge AI Hiring Team,

I am applying for the Flutter Developer position in Abu Dhabi. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, WebSocket-based services, Firebase, Hive, SQLite, testing, and Git.

My recent work includes migrating production features from GetX to Cubit/BLoC, improving modular architecture, integrating APIs and push notifications, resolving production issues, and automating releases with GitHub Actions and Fastlane. I have shipped and maintained live applications and am comfortable owning features from implementation through release.

I am based in Egypt and willing to relocate to Abu Dhabi. The advertised salary range is acceptable, and I would welcome the opportunity to help Diverge build reliable bilingual AI-powered mobile products.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Medad Holding",
    role: "Flutter Mobile Application Developer",
    location: "دبي، الإمارات",
    mode: "دوام كامل دائم · On-site",
    age: "Easy Apply مفتوح · صاحب العمل نشط منذ 17 ساعة · تحققت 3 أغسطس",
    salary: "12,000–15,000 درهم إماراتي / شهر",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "شركة إماراتية مقرها دبي طالبة 3–5 سنوات Mobile مع Flutter/Dart وREST APIs وGit وأمان التطبيقات والنشر على المتاجر؛ خبرتك في تطبيقات الإنتاج وFirebase وCI/CD مناسبة جدًا، وخبرة الـfintech ميزة وليست شرطًا.",
    note: "الوظيفة من المكتب في دبي. وضّح استعدادك للانتقال واسأل عن التأشيرة والتأمين وموعد الانضمام في أول مقابلة.",
    href: "https://ae.indeed.com/viewjob?jk=aef0e038fc2c954a",
    coverLetter: `Dear Medad Holding Hiring Team,

I am applying for the Flutter Mobile Application Developer position in Dubai. I have more than three years of hands-on production experience building and maintaining Android, iOS, and Windows applications with Flutter and Dart.

My experience includes BLoC/Cubit, GetX, Clean Architecture, MVVM, REST APIs, Firebase, local storage, unit testing, Git, and app-store deployment. In recent roles, I migrated production code from GetX to Cubit/BLoC, improved modular architecture, integrated backend services, fixed live issues, and supported automated releases through GitHub Actions and Fastlane.

I am comfortable delivering secure, reliable mobile features in collaboration with product, design, backend, and QA teams. I am based in Egypt and willing to relocate to Dubai for this permanent role.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Script for Information Technology",
    role: "Flutter Developer",
    location: "سنابس / المنامة، البحرين",
    mode: "دوام كامل · On-site",
    age: "Easy Apply مفتوح · صاحب العمل نشط منذ 17 ساعة · تحققت 3 أغسطس",
    salary: "400–900 دينار بحريني / شهر",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "شركة بحرينية مسجلة ومقرها المنامة، والإعلان يطلب 2–4 سنوات مع Flutter/Dart وREST APIs وBloc/Provider/Riverpod وFirebase وGit وCI/CD ونشر التطبيقات؛ كل ده داخل خبرتك.",
    note: "نسخة Naukrigulf تعرض 2–4 سنوات، بينما نسخة Qureos تذكر 5+؛ اعتبرها Stretch واسأل عن شرط الخبرة والتأشيرة والراتب.",
    href: "https://www.naukrigulf.com/flutter-developer-jobs-in-bahrain-in-script-for-information-technology-co.-w.l.l-2-to-4-years-n-cd-332265-jid-230726000339",
    coverLetter: `Dear Script IT Hiring Team,

I am applying for the Flutter Developer position in Bahrain. I have more than three years of production experience building and maintaining Flutter applications across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git.

My recent work includes migrating production modules from GetX to Cubit/BLoC, integrating APIs and third-party services, improving performance and maintainability, fixing production issues, and automating releases with GitHub Actions and Fastlane. I also have hands-on experience with app-store deployment and maintaining live applications.

I am based in Egypt and open to relocating to Bahrain. I would be glad to discuss the role, visa support, availability, and compensation.

Best regards,
Muhammad Essam`,
  },
  {
    company: "Unipal",
    role: "Software Engineer — Flutter Developer",
    location: "المنامة، البحرين",
    mode: "دوام كامل · On-site",
    age: "صفحة الشركة الرسمية مفتوحة والتقديم متاح · تحققت 3 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور Mid-level في شركة بحرينية ويطلب 3+ سنوات Flutter Production مع Dart وstate management وREST APIs وFirebase وClean Code وperformance؛ تطابق مباشر مع خبرتك.",
    note: "العمل من المكتب والراتب مخفي. نموذج التقديم بيسأل هل أنت مقيم في البحرين؛ جاوب بصراحة واسأل مبكرًا عن التأشيرة ونطاق الراتب.",
    href: "https://unipal.applytojob.com/apply/mhxdJCVyj0/Full-Stack-Software-Engineer",
    coverLetter: `Dear Unipal Hiring Team,

I am applying for the Software Engineer — Flutter Developer position in Manama. I have more than three years of production experience building and maintaining Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git.

My recent work includes migrating production modules from GetX to Cubit/BLoC, improving modular architecture, integrating APIs and Firebase services, resolving live production issues, optimizing maintainability, and automating releases with GitHub Actions and Fastlane. I am comfortable owning features from planning through release.

I am based in Egypt and open to relocating to Bahrain. I would welcome the opportunity to help Unipal improve and scale its production Flutter application.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "PSdigital",
    role: "Flutter Developer",
    location: "دبي، الإمارات",
    mode: "دوام كامل · On-site",
    age: "Apply on employer site مفتوح · تحققت 3 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "شركة مقرها دبي، والمتطلبات مناسبة: Flutter/Dart وREST APIs وGit وUI/UX وautomated testing وCI، مع مسار تقديم ظاهر على صفحة الوظيفة.",
    note: "الراتب مخفي والإعلان أقدم من فرص اليوم، فاسأل مبكرًا عن صافي الراتب، التأشيرة، والانتقال لدبي قبل أي مقابلات طويلة.",
    href: "https://www.glassdoor.com/job-listing/flutter-developer-psdigital-JV_IC2204498_KO0%2C17_KE18%2C27.htm?jl=1009227501808",
    coverLetter: `Dear PSdigital Hiring Team,

I am applying for the Flutter Developer position in Dubai. I have more than three years of production experience building cross-platform applications for Android, iOS, and Windows with Flutter and Dart.

My experience includes BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, unit testing, Git, and CI/CD. I have shipped and maintained live applications, migrated production features from GetX to Cubit/BLoC, integrated backend services, fixed production issues, and supported releases through GitHub Actions and Fastlane.

I am based in Egypt and willing to relocate to Dubai. I would be glad to discuss the role, visa support, compensation, and how my production Flutter experience can contribute to PSdigital's mobile products.

Best regards,
Muhammad Essam`,
  },
] as const;

const androidJobs = [
  {
    company: "geidea",
    role: "Mid-level Android Developer",
    location: "القاهرة، مصر",
    mode: "دوام كامل",
    age: "منشورة منذ أسبوعين · التقديم مفتوح · تحققت 3 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور Mid-level في شركة سعودية للمدفوعات، ويطابق Kotlin وJetpack Compose وMVVM/Clean Architecture وCoroutines وDI وREST وFirebase والـmulti-module والـPOS والأمان.",
    note: "الإعلان يطلب خبرة عملية في KMM، وهي غير مؤكدة في الـCV؛ قدّمي باعتبار خبرة الـmulti-module والمدفوعات نقاط القوة واسألي مبكرًا عن حجم استخدام KMM والراتب.",
    href: "https://eg.linkedin.com/jobs/view/mid-level-android-developer-at-geidea-4438588748?pageNum=0&position=7",
    coverLetter: `Dear geidea Hiring Team,

I am applying for the Mid-level Android Developer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, Coroutines, MVVM, MVI, Clean Architecture, dependency injection, REST APIs, Firebase, Git, and unit testing.

My background includes POS, invoices, payment integrations, secure data handling, multi-module architecture, product flavors, performance optimization, and Google Play release management. I have also contributed to healthcare and government applications, including an Egypt Ministry of Justice application serving more than one million users.

Geidea's focus on secure fintech products strongly matches my Android and payments experience. I would welcome the opportunity to discuss the role and how my production background can support your mobile applications.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Henkel",
    role: "Android Engineer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · Hybrid",
    age: "صفحة الشركة الرسمية مفتوحة · تحققت 3 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الدور الرسمي في القاهرة يركز على Android/Kotlin وClean Architecture والأداء والأمان والاختبارات، وكلها ضمن خبرة أسماء الإنتاجية.",
    note: "React Native مطلوبة بجانب Android وهي غير مؤكدة في الـCV؛ قدّمي كـStretch واسألي مبكرًا عن نسبة العمل Native Android ونطاق الراتب.",
    href: "https://www.henkel.com/careers/find-your-job-apply/2211118-2211118",
    coverLetter: `Dear Henkel Hiring Team,

I am applying for the Android Engineer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes secure data handling, performance optimization, scalable multi-module architecture, third-party integrations, and Google Play releases. I also contributed to an Egypt Ministry of Justice application serving more than one million users.

My confirmed professional focus is native Android. I would welcome a discussion about the balance between Android and React Native work in this role and how my Android background can support Henkel's mobile products.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Vertex Technologies",
    role: "Middle Android Developer",
    location: "Smart Village، الجيزة",
    mode: "دوام كامل · On-site",
    age: "التقديم مفتوح على صفحة الشركة الرسمية",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "تطابق مباشر مع 3+ سنوات Android وKotlin وJetpack Compose وCoroutines وMVVM وSOLID وREST APIs وGit، مع راتب تنافسي بالدولار وتأمين طبي.",
    note: "المكتب في Smart Village والراتب الرقمي غير معلن؛ اسألي عن صافي الراتب وجدول الحضور قبل المراحل الطويلة.",
    href: "https://vertextech-eg.com/vacancies/middle-android-developer",
    coverLetter: `Dear Vertex Technologies Hiring Team,

I am applying for the Middle Android Developer position. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, Coroutines, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

I have built and maintained applications across POS, payments, healthcare, and government services, including scalable multi-module codebases, product flavors, secure integrations, performance optimization, and Google Play releases. One government application I worked on serves more than one million users.

My experience aligns closely with your requirements for Kotlin, Jetpack Compose, Coroutines, MVVM, SOLID, REST APIs, and clean maintainable code. I am based in Egypt and available to discuss the Smart Village work arrangement.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Yassir",
    role: "Senior Mobile Android Engineer",
    location: "القاهرة، مصر",
    mode: "دوام كامل · Hybrid",
    age: "Lever مفتوح · 4+ سنوات وKMM · تحققت 3 أغسطس",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "الإعلان يقبل من سنتين Android/Kotlin، ويطلب REST APIs وGit وFirebase وDI وArchitecture Components والاختبارات والأمان وتحسين الأداء وإدارة الإصدارات؛ كلها ضمن خبرة أسماء.",
    note: "الإعلان يطلب 4+ سنوات وKMM، بينما خبرة أسماء 3+ سنوات وKMM غير مؤكدة؛ قدّمي كـStretch واسألي عن المستوى.",
    href: "https://eg.linkedin.com/jobs/view/senior-mobile-android-engineer-at-yassir-4428884792",
    coverLetter: `Dear Yassir Hiring Team,

I am applying for the Senior Mobile Android Engineer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, MVVM, MVI, Clean Architecture, REST APIs, Firebase, dependency injection, Git, testing, performance optimization, and release management.

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes scalable multi-module architecture, product flavors, secure data handling, Google Play releases, and an Egypt Ministry of Justice application serving more than one million users.

Yassir's focus on reliable Kotlin applications and financial services closely matches my Android and payments background. I would welcome the opportunity to contribute to the Cairo team.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Halian",
    role: "Android Engineer",
    location: "دبي، الإمارات",
    mode: "عقد 12 شهر · Remote",
    age: "صفحة Halian مفتوحة وApply now ظاهر · تحققت 3 أغسطس",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور Android Native يطلب Kotlin وJetpack Compose وCoroutines/Flow وRoom وWorkManager وClean Architecture والاختبارات وتحسين الأداء؛ تطابق قوي مع خبرة أسماء.",
    note: "العقد 12 شهر والراتب مخفي؛ أكدي قبل المقابلات إن Remote متاح من مصر واسألي عن العملة والمزايا وتجديد العقد.",
    href: "https://www.halian.com/jobs/android-engineer-239723",
    coverLetter: `Dear Halian Hiring Team,

I am applying for the Android Engineer contract in Dubai. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, Coroutines, MVVM, MVI, Clean Architecture, REST APIs, Firebase, dependency injection, Git, JUnit, and MockK.

My background includes performance optimization, secure data handling, multi-module architecture, product flavors, release management, and applications across POS, payments, healthcare, and government services. I also contributed to an Egypt Ministry of Justice application serving more than one million users.

I am based in Egypt and would welcome the opportunity to discuss remote eligibility, contract terms, and how my Android experience can support the high-traffic application.

Best regards,
Asmaa Atya`,
  },
] as const;

const rejected = [
  "TAWANTECH: الطلب اتبعت بالفعل يوم 28 يوليو، فاستبدلتها بفرصة Unipal المفتوحة بدل تكرار التقديم.",
  "Colada: الراتب الظاهر 350 دولار شهريًا، أقل من الحد الأدنى المطلوب.",
  "Envision وDicetek: الخبرة المطلوبة 5–8+ سنوات، أعلى من خبرة محمد الحالية.",
  "Varvy وFlashAI وTEN: Junior أو Internship أو Unpaid، فمرفوضين.",
  "منشورات DM فقط أو Send portfolio بدون Email/WhatsApp ظاهر ما دخلتش قسم التقديم المباشر.",
] as const;

const androidRejected = [
  "إعلان Wuzzuf السري: مسار التقديم الحالي ما اتثبتش، فاستبدلته بصفحات شركات رسمية مفتوحة.",
  "Mondia وStaff/Lead Android roles: الخبرة المطلوبة أعلى بوضوح من 3+ سنوات.",
  "React Native-only وFlutter-only وiOS-only وJunior/Internship: مستبعدين حسب تخصص ومستوى أسماء.",
  "نسخ Flairstech المعاد نشرها اتشالت؛ التقرير يعرض منشور مسؤولة التوظيف الأصلي مرة واحدة.",
  "منشورات OpenToWork أو DM/comment فقط ما دخلتش قسم التقديم المباشر.",
] as const;

const flutterEmailApplications = [
  {
    company: "Vaishnav & Sons",
    role: "Flutter Developer",
    to: "careers@vaishnavandsons.com",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear Vaishnav & Sons Hiring Team,

I am applying for the Flutter Developer position. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, Hive, SQLite, Git, testing, and CI/CD.

I have maintained live applications, integrated backend and Firebase services, improved modular architecture, resolved production issues, and automated releases with GitHub Actions and Fastlane.

I am based in Egypt. Please confirm whether the Remote / Hybrid role accepts candidates working from Egypt.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "Infosiv Technologies",
    role: "Flutter Developer",
    to: "gunjan@infosiv.com",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear Infosiv Technologies Hiring Team,

I am applying for the Flutter Developer position. I have more than three years of production Flutter experience across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, Git, testing, and CI/CD.

My experience includes responsive production interfaces, API and payment integrations, push notifications, performance improvements, production support, and automated releases with GitHub Actions and Fastlane.

I am based in Egypt and would welcome a discussion about remote eligibility or relocation support for the Mohali position.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "HYRMUS",
    role: "Flutter App Developer",
    to: "hr@hyrmus.com",
    subject: "Flutter App Developer Application — Muhammad Essam",
    body: `Dear HYRMUS Hiring Team,

I am applying for the Flutter App Developer position for your HealthTech client. I have more than three years of production Flutter experience across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, Git, and CI/CD.

I have owned production features from architecture through release, improved modular codebases, integrated backend and real-time services, resolved live issues, and automated releases with GitHub Actions and Fastlane. I understand that the advertised target is four to five years, so I am applying as an honest stretch candidate based on my production depth.

I am based in Egypt. Please confirm whether remote work or relocation support is available for the Gurugram role.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "Apexnova",
    role: "Flutter Developer",
    to: "hello@apexnova.in",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear Apexnova Hiring Team,

I am applying for the Flutter Developer position. I have more than three years of production experience building Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, testing, Git, and CI/CD.

I have built reusable interfaces, integrated APIs and third-party services, improved application architecture and performance, resolved production issues, and supported store releases with GitHub Actions and Fastlane.

I am based in Egypt. Please confirm the on-site location and whether remote work or relocation support is available.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "Hiring team via Sourabh Mohite",
    role: "Flutter Developer",
    to: "shabanshaikh7173@gmail.com",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear Hiring Team,

I am applying for the Flutter Developer position shared by Sourabh Mohite. I have more than three years of production experience using Flutter, Dart, BLoC/Cubit, GetX, MVVM, Clean Architecture, REST APIs, Firebase, Git, testing, and CI/CD across Android, iOS, and Windows applications.

My work includes production feature ownership, API integrations, modular architecture improvements, performance fixes, Google Play and App Store release support, and automation with GitHub Actions and Fastlane.

I am based in Egypt. Please share the company name, work location or remote policy, contract type, and salary range.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
] as const;

const androidEmailApplications = [
  {
    company: "Vaishnav & Sons",
    role: "Android Developer",
    to: "careers@vaishnavandsons.com",
    subject: "Android Developer Application — Asmaa Atya",
    body: `Dear Vaishnav & Sons Hiring Team,

I am applying for the Android Developer (Kotlin) position. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, testing, performance optimization, and Google Play release management.

I have delivered applications across POS, payments, healthcare, and government services, including secure integrations, scalable multi-module codebases, and an Egypt Ministry of Justice application serving more than one million users.

I am based in Egypt. Please confirm whether the Remote / Hybrid role accepts candidates working from Egypt.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Flairstech",
    role: "Senior Android Developer",
    to: "digitalsolutions.hr@flairstech.com",
    subject: "Senior Android Developer Application — Asmaa Atya",
    body: `Dear Flairstech Hiring Team,

I am applying for the Senior Android Developer position in Maadi. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, JUnit, and MockK.

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes multi-module architecture, secure API integrations, performance optimization, production support, and Google Play releases, including work on an Egypt Ministry of Justice application serving more than one million users.

I am based in Cairo and available to discuss the hybrid schedule and immediate-joining expectations.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Warmbytes",
    role: "Mid-Level Android Developer",
    to: "hr@warmbytes.com",
    subject: "Mid-Level Android Developer Application — Asmaa Atya",
    body: `Dear Warmbytes Hiring Team,

I am applying for the Mid-Level Android Developer position in Islamabad. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

I have delivered production applications across POS, payments, healthcare, and government services, including multi-module architecture, secure integrations, performance optimization, debugging, and Google Play releases.

I am based in Egypt and would be glad to discuss relocation support or remote eligibility.

Best regards,
Asmaa Atya`,
  },
  {
    company: "H.H Tech Solutions",
    role: "Android Developer",
    to: "hhtechsolution01@gmail.com",
    subject: "Android Developer Application — Asmaa Atya",
    body: `Dear H.H Tech Solutions Hiring Team,

I am applying for the Android Developer position in Islamabad. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes scalable multi-module codebases, secure integrations, performance optimization, production support, and Google Play releases.

I am based in Egypt and would welcome a discussion about relocation support for the on-site role.

Best regards,
Asmaa Atya`,
  },
] as const;

const flutterDirectPosts = [
  {
    company: "Vaishnav & Sons",
    role: "Flutter Developer",
    poster: "Vaishnav & Sons",
    posterRole: "Company page",
    age: "منذ 10 دقائق",
    location: "Remote / Hybrid · India",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Flutter/Dart وREST APIs وFirebase ضمن خبرة محمد، والإعلان Full-time ومن صفحة الشركة مباشرة.",
    contact: "careers@vaishnavandsons.com",
    note: "العمل موجه للهند والراتب 5–9 LPA؛ أكد قبول العمل من مصر قبل إرسال بيانات إضافية.",
    href: "https://www.linkedin.com/company/vaishnavandsons/posts/",
  },
  {
    company: "Infosiv Technologies",
    role: "Flutter Developer",
    poster: "Gunjan Sharma",
    posterRole: "Founder · Infosiv Technologies",
    age: "منذ 4 ساعات",
    location: "Mohali · Work from office",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Dart وREST APIs وFirebase وGetX/Provider/Bloc وGit وتحسين الأداء كلها تطابق خبرة محمد الإنتاجية.",
    contact: "gunjan@infosiv.com",
    note: "العمل من المكتب في الهند؛ اسأل عن Remote أو دعم الانتقال قبل أي خطوات طويلة.",
    href: "https://www.linkedin.com/in/gunjan-sharma-infosiv/recent-activity/all/",
  },
  {
    company: "HYRMUS — HealthTech client",
    role: "Flutter App Developer",
    poster: "Deepak Gour",
    posterRole: "HR Recruiter · HYRMUS",
    age: "منذ 7 ساعات",
    location: "Gurugram · Work from office",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "دور Flutter داخل فريق Mobile لمنتج HealthTech، وخبرة محمد في production ownership والـarchitecture مناسبة.",
    contact: "hr@hyrmus.com · WhatsApp: +91 97708 48162",
    whatsapp: "919770848162",
    note: "مطلوب 4–5 سنوات وانضمام سريع؛ Stretch واضحة وتحتاج تأكيد Remote أو دعم الانتقال.",
    href: "https://www.linkedin.com/in/deepak-hyrmus/recent-activity/all/",
  },
  {
    company: "Apexnova",
    role: "Flutter Developer",
    poster: "Sahil Asopa",
    posterRole: "Founder",
    age: "منذ 25 دقيقة",
    location: "On-site · المدينة غير مذكورة",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "مطلوب 2+ سنة Flutter مع REST APIs وFirebase وBloc/GetX وCI/CD والنشر؛ تطابق تقني مباشر.",
    contact: "hello@apexnova.in",
    note: "المدينة غير ظاهرة والعمل On-site؛ اطلب الموقع والراتب ودعم الانتقال قبل الاستمرار.",
    href: "https://www.linkedin.com/in/sahilasopa/recent-activity/all/",
  },
  {
    company: "صاحب عمل غير معلن",
    role: "Flutter Developer",
    poster: "Sourabh Mohite",
    posterRole: "Flutter Developer",
    age: "منذ 6 ساعات",
    location: "المكان ونظام العمل غير مذكورين",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "المطلوب 3–5 سنوات مع Bloc/Provider/GetX وMVVM/Clean Architecture وFirebase والنشر؛ مناسب لمستوى محمد.",
    contact: "shabanshaikh7173@gmail.com",
    note: "اسم الشركة والموقع والراتب غير ظاهرين؛ اطلبهم قبل مشاركة أي بيانات إضافية.",
    href: "https://www.linkedin.com/in/sourabh-mohite-185184317/recent-activity/all/",
  },
] as const;

const androidDirectPosts = [
  {
    company: "Vaishnav & Sons",
    role: "Android Developer",
    poster: "Vaishnav & Sons",
    posterRole: "Company page",
    age: "منذ 10 دقائق",
    location: "Remote / Hybrid · India",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "الإعلان يطلب Android Developer باستخدام Kotlin وFull-time، وهو قريب من خبرة أسماء الأساسية.",
    contact: "careers@vaishnavandsons.com",
    note: "التفاصيل التقنية مختصرة والعمل موجه للهند؛ أكدي قبول العمل من مصر ونطاق الراتب.",
    href: "https://www.linkedin.com/company/vaishnavandsons/posts/",
  },
  {
    company: "Flairstech",
    role: "Senior Android Developer",
    poster: "Mirna Emad",
    posterRole: "Senior Talent Partner · Flairstech",
    age: "منذ 6 ساعات",
    location: "المعادي، القاهرة · Hybrid",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "فرصة Android Native في القاهرة مع شركة معروفة، ومستوى Senior ممكن كـstretch قريب من خبرة أسماء الإنتاجية.",
    contact: "digitalsolutions.hr@flairstech.com",
    note: "الراتب والمتطلبات التفصيلية غير مذكورين؛ اسألي عن نطاق الراتب ومستوى الخبرة في أول تواصل.",
    href: "https://www.linkedin.com/in/mirna-emad-02805bb3/recent-activity/all/",
  },
  {
    company: "Warmbytes",
    role: "Mid-Level Android Developer",
    poster: "Pakistan IT Jobs",
    posterRole: "Tech jobs page",
    age: "منذ 13 ساعة",
    location: "Islamabad · On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "المطلوب 2–4 سنوات Kotlin/Java وAndroid SDK وJetpack وREST APIs وMVVM وGit؛ تطابق مباشر مع خبرة أسماء.",
    contact: "hr@warmbytes.com",
    note: "العمل من المكتب في باكستان؛ أكدي دعم الانتقال والراتب قبل أي مقابلات طويلة.",
    href: "https://www.linkedin.com/company/pakistantechjob/posts/",
  },
  {
    company: "H.H Tech Solutions",
    role: "Android Developer",
    poster: "H.H Tech Solutions",
    posterRole: "Software company",
    age: "منذ يوم",
    location: "Islamabad · Full-time On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "مطلوب 2+ سنوات Kotlin/Java وMVVM وREST APIs والاختبارات وتحسين الأداء ونشر Play Store؛ تطابق تقني واضح.",
    contact: "hhtechsolution01@gmail.com · WhatsApp: +92 317 4967217",
    whatsapp: "923174967217",
    note: "العمل من المكتب في باكستان؛ أكدي دعم الانتقال والراتب قبل الاستمرار.",
    href: "https://www.linkedin.com/in/h-h-tech-solutions-09722b321/recent-activity/all/",
  },
  {
    company: "iSmart Techno Hub",
    role: "Freelance Android Developer Network",
    poster: "Neetesh Nagar",
    posterRole: "Founder",
    age: "منذ 18 ساعة",
    location: "Remote · Freelance",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "شبكة مشاريع Remote تذكر Android وiOS Development صراحة، وخبرة أسماء في التطبيقات والمدفوعات مناسبة للمشروعات المحتملة.",
    contact: "WhatsApp: +91 92510 11996",
    whatsapp: "919251011996",
    note: "ده إعلان شبكة Freelance مش وظيفة محددة؛ اطلبي اسم العميل والنطاق والميزانية وما تدفعيش أي رسوم.",
    href: "https://www.linkedin.com/in/neetesh-nagar-109567107/recent-activity/all/",
  },
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد وأسماء</span>
          <span className="date">تقرير 3 أغسطس 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">Flutter وAndroid Native في مكان واحد</p>
          <h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1>
          <p className="intro">فرص Flutter وAndroid Native المطابقة، مع Cover Letters وقسم إرسال Gmail جاهز لكلٍ من محمد وأسماء.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>2</strong><span>مسار وظيفي</span></div>
          <div><strong>5</strong><span>فرص Flutter</span></div>
          <div><strong>5</strong><span>فرص Android</span></div>
        </div>
      </header>

      <section className="criteria" aria-label="معايير البحث">
        <span>مصر أو شركة عربية</span>
        <span>30,000 جنيه+ أو 800 دولار+</span>
        <span>Remote / Hybrid / On-site</span>
        <span>Mid أو Senior مناسب</span>
      </section>

      <section className="content">
        <fieldset className="candidateTabs">
          <legend className="srOnly">اختار تقرير الوظائف</legend>

          <input className="tabInput" type="radio" name="candidate" id="flutter-tab" defaultChecked />
          <label className="tabLabel" htmlFor="flutter-tab">
            <span>Flutter</span>
            <small>Muhammad Essam</small>
          </label>

          <input className="tabInput" type="radio" name="candidate" id="android-tab" />
          <label className="tabLabel" htmlFor="android-tab">
            <span>Android Native</span>
            <small>Asmaa Atya</small>
          </label>

          <section className="tabPanel flutterPanel" aria-labelledby="flutter-tab">
            <div className="sectionHead">
              <div><p className="eyebrow">Flutter · Muhammad Essam</p><h2>٣ قوية و٢ ممكنة</h2></div>
              <p>Diverge وMedad وUnipal فرص قوية ومفتوحة. Script فيها اختلاف بين مصادر الخبرة، وPSdigital أقدم وراتبها مخفي.</p>
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

            <section className="linkedInSection" aria-label="منشورات توظيف Flutter على LinkedIn">
              <div className="sectionHead">
                <div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لمحمد</h2></div>
                <p>لقيت ٤ منشورات صالحة خلال آخر 72 ساعة بعد البحث الموسع. كلها تنشر Email صريح؛ ماكمّلتش العدد بمنشورات DM أو OpenToWork أو تدريب.</p>
              </div>
              <div className="postGrid">
                {freshFlutterDirectPosts.map((post) => (
                  <article className="postCard" key={`${post.company}-${post.poster}`}>
                    <div className="cardTop">
                      <span className="postSource">LinkedIn Post</span>
                      <span className={`match ${post.matchClass}`}>{post.match}</span>
                    </div>
                    <p className="company">{post.company}</p>
                    <h3>{post.role}</h3>
                    <div className="meta"><span>{post.location}</span><span>{post.age}</span></div>
                    <p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p>
                    <p className="why"><b>ليه مناسبة:</b> {post.summary}</p>
                    <p className="postContact"><b>التواصل:</b> {post.contact}</p>
                    <p className="note"><b>خد بالك:</b> {post.note}</p>
                    <div className="postActions">
                      <a href={post.href} target="_blank" rel="noreferrer">افتح منشورات صاحب الإعلان <span aria-hidden="true">↗</span></a>
                      {"whatsapp" in post && (
                        <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent("Hello, I’m Muhammad Essam, a Flutter developer with 3+ years of production experience. I’m interested in your Flutter opportunity. Portfolio: https://muhamaadessam.github.io/")}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <EmailComposer candidate="Muhammad Essam" applications={freshFlutterEmailApplications} />

            <div className="rejected" aria-label="فرص Flutter مستبعدة">
              <p className="eyebrow">فلترة Flutter</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
              <ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>

          <section className="tabPanel androidPanel" aria-labelledby="android-tab">
            <div className="sectionHead">
              <div><p className="eyebrow">Android Native · Asmaa Atya</p><h2>٢ قوية و٣ ممكنة</h2></div>
              <p>Vertex وHalian فرص قوية ومفتوحة. Geidea وHenkel وYassir فرص ممكنة بسبب KMM أو React Native أو شرط 4+ سنوات.</p>
            </div>

            <div className="jobGrid">
              {androidJobs.map((job, index) => (
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
                    <a href={job.href} target="_blank" rel="noreferrer" aria-label={`فتح وظيفة ${job.role} في ${job.company}`}>افتح التقديم <span aria-hidden="true">↗</span></a>
                  </div>
                </article>
              ))}
            </div>

            <section className="linkedInSection" aria-label="منشورات توظيف Android على LinkedIn">
              <div className="sectionHead">
                <div><p className="eyebrow">LinkedIn Posts · Email أو WhatsApp فقط</p><h2>تقديم مباشر لأسماء</h2></div>
                <p>لقيت ٥ منشورات صالحة خلال آخر 72 ساعة بعد البحث الموسع. كلها تنشر Email أو WhatsApp صريح؛ ماكمّلتش العدد بتدريب أو OpenToWork أو نسخ مكررة.</p>
              </div>
              <div className="postGrid">
                {freshAndroidDirectPosts.map((post) => (
                  <article className="postCard" key={`${post.company}-${post.poster}`}>
                    <div className="cardTop">
                      <span className="postSource">LinkedIn Post</span>
                      <span className={`match ${post.matchClass}`}>{post.match}</span>
                    </div>
                    <p className="company">{post.company}</p>
                    <h3>{post.role}</h3>
                    <div className="meta"><span>{post.location}</span><span>{post.age}</span></div>
                    <p className="poster"><b>صاحب المنشور:</b> {post.poster} · {post.posterRole}</p>
                    <p className="why"><b>ليه مناسبة:</b> {post.summary}</p>
                    <p className="postContact"><b>التواصل:</b> {post.contact}</p>
                    <p className="note"><b>خد بالك:</b> {post.note}</p>
                    <div className="postActions">
                      <a href={post.href} target="_blank" rel="noreferrer">افتح منشورات صاحب الإعلان <span aria-hidden="true">↗</span></a>
                      {"whatsapp" in post && (
                        <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent("Hello, I’m Asmaa Atya, an Android Developer with 3+ years of production experience using Kotlin, Java, and Jetpack Compose. I’m interested in your Android opportunity.")}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <EmailComposer candidate="Asmaa Atya" applications={freshAndroidEmailApplications} />

            <div className="rejected" aria-label="فرص Android مستبعدة">
              <p className="eyebrow">فلترة Android Native</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
              <ul>{androidRejected.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>
        </fieldset>
      </section>

      <footer>
        <p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p>
        <p>آخر تحديث: 3 أغسطس 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
