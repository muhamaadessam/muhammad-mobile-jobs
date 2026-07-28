import CopyButton from "./CopyButton";
import EmailComposer from "./EmailComposer";

const jobs = [
  {
    company: "Diverge AI",
    role: "Flutter Developer",
    location: "أبوظبي، الإمارات",
    mode: "دوام كامل · On-site",
    age: "مفتوحة حاليًا على Indeed",
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
    age: "مفتوحة حاليًا على Indeed",
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
    age: "صاحب العمل نشط خلال آخر ساعات والتقديم مفتوح",
    salary: "400–900 دينار بحريني / شهر",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "شركة بحرينية مسجلة ومقرها المنامة، والإعلان يطلب 2–4 سنوات مع Flutter/Dart وREST APIs وBloc/Provider/Riverpod وFirebase وGit وCI/CD ونشر التطبيقات؛ كل ده داخل خبرتك.",
    note: "النطاق المعلن فوق الحد المطلوب، لكن الشغل من البحرين. اسأل قبل أي التزام عن التأشيرة، السكن، وصافي الراتب بعد أي استقطاعات.",
    href: "https://www.naukrigulf.com/flutter-developer-jobs-in-bahrain-in-script-for-information-technology-co.-w.l.l-2-to-4-years-n-cd-332265-jid-230726000339",
    coverLetter: `Dear Script IT Hiring Team,

I am applying for the Flutter Developer position in Bahrain. I have more than three years of production experience building and maintaining Flutter applications across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git.

My recent work includes migrating production modules from GetX to Cubit/BLoC, integrating APIs and third-party services, improving performance and maintainability, fixing production issues, and automating releases with GitHub Actions and Fastlane. I also have hands-on experience with app-store deployment and maintaining live applications.

I am based in Egypt and open to relocating to Bahrain. I would be glad to discuss the role, visa support, availability, and compensation.

Best regards,
Muhammad Essam`,
  },
  {
    company: "TAWANTECH",
    role: "Senior Flutter Developer offshore",
    location: "القاهرة، مصر",
    mode: "دوام كامل · On-site",
    age: "منشورة من 22 ساعة والتقديم Easy Apply مفتوح",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "شركة سعودية مقرها الرياض، والدور يطابق خبرتك في Flutter/Dart وBloc/GetX وClean Architecture وREST وFirebase وGit وCI/CD والنشر. شرط 3+ سنوات Flutter متحقق.",
    note: "الإعلان طالب 5+ سنوات Software Development مع mentoring، وده أعلى من إجمالي خبرتك الحالية؛ قدّم لو تقدر تبرز مسؤوليتك عن Features الإنتاج والـarchitecture.",
    href: "https://www.linkedin.com/jobs/view/4445611919/",
    coverLetter: `Dear TAWANTECH Hiring Team,

I am applying for the Senior Flutter Developer offshore position in Cairo. I have more than three years of hands-on production experience building and maintaining Flutter applications for Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, Git, and CI/CD.

In my recent work, I migrated production modules from GetX to Cubit/BLoC, improved modular architecture, integrated APIs and third-party services, resolved live production issues, and supported automated releases with GitHub Actions and Fastlane. I am comfortable owning features end to end, collaborating with product, backend, design, and QA teams, and contributing to technical planning and code reviews.

I am based in Egypt, available for on-site work in Cairo, and would welcome the opportunity to discuss how my production Flutter experience can support TAWANTECH's mobile products.

Best regards,
Muhammad Essam`,
  },
  {
    company: "PSdigital",
    role: "Flutter Developer",
    location: "دبي، الإمارات",
    mode: "دوام كامل · On-site",
    age: "الإعلان ما زال مفتوحًا لكنه أقدم من 30 يوم",
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
    company: "Tawajood",
    role: "Android Developer",
    location: "مصر · مقر الشركة المعادي",
    mode: "Hybrid / On-site",
    age: "منشورة من 4 أيام والتقديم بالإيميل مفتوح",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "المتطلبات شبه مطابقة للـCV: 2–3 سنوات Android Native مع Kotlin وJetpack Compose وMVVM وREST APIs وFirebase وPusher وPayment Gateways وGit. خبرة أسماء في MyCash والـPOS والمدفوعات ميزة مباشرة.",
    note: "لازم تضيفي Current Notice Period وExpected Salary في رسالة التقديم، واسألي مبكرًا عن جدول الحضور لأن الإعلان كاتب Hybrid / On-site من غير عدد أيام.",
    href: "mailto:info@tawajood.com?subject=Android%20Developer%20-%20Asmaa%20Atya",
    coverLetter: `Dear Tawajood Hiring Team,

I am applying for the Android Developer position. I have more than three years of production experience building and maintaining native Android applications using Kotlin, Java, Jetpack Compose, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

At MyCash, I developed a scalable Android application for sales, invoices, POS, and payment services using Kotlin, Jetpack Compose, multi-module architecture, and product flavors. I also have hands-on experience with Firebase, API integrations, release management, and production applications serving large user bases.

My background aligns closely with your requirements for modern native Android development, payment integrations, Pusher-style real-time features, and maintainable architecture. I am based in Egypt and would be glad to discuss the hybrid or on-site schedule.

Current notice period: [add your notice period]
Expected salary: [add your expected net monthly salary]

Best regards,
Asmaa Atya`,
  },
  {
    company: "Expert Apps",
    role: "Mid-level Android Developer",
    location: "المعادي، القاهرة",
    mode: "دوام كامل · Hybrid",
    age: "منشورة من 6 أيام والتقديم مفتوح على Wuzzuf",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الدور مناسب لخبرة أسماء في Android SDK وJava/Kotlin وREST/JSON وGit وunit testing وتحسين الأداء ونشر تطبيقات على Google Play، والشركة سعودية المنشأ ومكتبها في القاهرة.",
    note: "الإعلان مركز أكتر على Java بينما Kotlin هي اللغة الأساسية عند أسماء، لكنه ما زال تطابق قوي. اسألي عن الراتب وعدد أيام الحضور في المعادي قبل المراحل الطويلة.",
    href: "https://wuzzuf.net/jobs/p/kn9e55lijxeh-mid-level-android-developer-expert-apps-cairo-egypt",
    coverLetter: `Dear Expert Apps Hiring Team,

I am applying for the Mid-level Android Developer position in Maadi. I have more than three years of professional Android experience using Kotlin and Java, Android SDK, Jetpack Compose, MVVM, MVI, Clean Architecture, REST APIs, JSON, Firebase, Git, and unit testing.

I have built and maintained production applications across POS, payments, healthcare, and government services. My work includes publishing applications to Google Play, improving performance and stability, integrating third-party services, and organizing scalable multi-module codebases.

I am comfortable working with Java-heavy Android codebases while using Kotlin as my primary language. I would welcome the opportunity to contribute to Expert Apps and discuss the hybrid schedule and role expectations.

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
    mode: "دوام كامل · Remote / Office",
    age: "التقديم مفتوح على LinkedIn",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الإعلان يقبل من سنتين Android/Kotlin، ويطلب REST APIs وGit وFirebase وDI وArchitecture Components والاختبارات والأمان وتحسين الأداء وإدارة الإصدارات؛ كلها ضمن خبرة أسماء.",
    note: "المسمى Senior رغم شرط السنتين، والراتب مخفي؛ قدّمي بمستوى خبرتك الحقيقي واسألي مبكرًا عن نطاق الراتب وهيكل الفريق.",
    href: "https://eg.linkedin.com/jobs/view/senior-mobile-android-engineer-at-yassir-4428884792",
    coverLetter: `Dear Yassir Hiring Team,

I am applying for the Senior Mobile Android Engineer position in Cairo. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, MVVM, MVI, Clean Architecture, REST APIs, Firebase, dependency injection, Git, testing, performance optimization, and release management.

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes scalable multi-module architecture, product flavors, secure data handling, Google Play releases, and an Egypt Ministry of Justice application serving more than one million users.

Yassir's focus on reliable Kotlin applications and financial services closely matches my Android and payments background. I would welcome the opportunity to contribute to the Cairo team.

Best regards,
Asmaa Atya`,
  },
] as const;

const rejected = [
  "CDS Solutions وInnovationTeam وOliv وKalvad وTechnosat وPayTabs وBlueCloud وAdree وNawy وTamara وDsquares: ظهروا في تقارير سابقة، فمش هكررهم من غير تغيير مهم.",
  "Al‑Tadamun Microfinance Association: Wuzzuf شال زر التقديم وبيوجّه لفرص مشابهة، فاعتبرتها مقفولة وشلتها من التقرير.",
  "Colada: ظهر قبل كده، والراتب الظاهر حاليًا 350 دولار شهريًا، أقل من الحد الأدنى.",
  "NEOM Associate Flutter: صفحة LinkedIn بتقول إنهم لم يعودوا يقبلوا طلبات.",
  "Dorra Developments: آخر موعد للتقديم كان 16 يوليو، فالفرصة مقفولة.",
  "Watan First Digital وPROJECX: صفحات LinkedIn لا تقبل طلبات حاليًا؛ Watan كمان طالبة 5+ سنوات Flutter.",
  "Envision Employment Solutions: الوظيفة طالبة 6+ سنوات Mobile وقيادة معمارية، أعلى من الخبرة الحالية.",
  "Salt Dubai: التطابق التقني جيد لكن جهة التوظيف Salt غير عربية المقر، فمرفوضة حسب الفلتر.",
  "SAZGENIX / MOAISUS: هوية صاحب العمل والمقر الرئيسي العربي مش واضحين بما يكفي.",
  "Smart EGAT: التقديم مفتوح لكن خبرة BLE وIoT أساسية، والراتب مخفي والإعلان أقدم؛ أولوية أقل من فرص النهارده.",
  "Tanemera وIbn Sina والفرص التدريبية: Junior أو Entry Level، فمش مناسبة للفلتر.",
  "onebank: الإعلان الجديد لتطوير Android وiOS Native فقط، مش Flutter.",
  "Heru Loop وFekra Technologies: الوظائف الجديدة مركزة على React Native، مش Flutter.",
  "Vallix: التطابق التقني قريب لكن مقر الشركة الرئيسي لندن، فمرفوضة حسب فلتر المقر العربي.",
  "Dicetek: طالبة 5–8+ سنوات مع Flutter وReact Native معًا؛ أعلى من الخبرة الحالية.",
  "Primis: Recruiter بريطاني والعميل البنكي غير معلن، والوظيفة من دبي من غير تأشيرة؛ مقر العميل العربي غير قابل للتحقق.",
] as const;

const androidRejected = [
  "Fixed Solutions و34ML: الصفحات بتعرض Browse Similar Jobs بدل زر التقديم، فاعتبرتها مقفولة.",
  "Efada Technology: صفحة Wuzzuf لم تعد تعرض مسار تقديم واضح، فشلتها بدل ما أعتمد على إعلان قديم.",
  "Al Ahly Momkn: صفحة الوظائف العامة فتحت من غير ما تثبت إن بطاقة Android POS ما زالت متاحة للتقديم.",
  "Saudi Satr: صفحة LinkedIn بتقول إنهم لم يعودوا يقبلوا طلبات.",
  "الإعلان السري في الإسكندرية: طالب Android وiOS وFlutter معًا وصاحب العمل غير معلن، فمقره العربي غير قابل للتحقق.",
  "Mondia Media: طالبة 8+ سنوات Mobile وKotlin Multiplatform، أعلى بوضوح من خبرة أسماء الحالية.",
  "Henkel وCore Code وiBrokerage: جهات غير عربية المقر، فمستبعدين حسب الفلتر.",
] as const;

const flutterEmailApplications = [
  {
    company: "Talent 360",
    role: "Flutter Developer",
    to: "advisor38@talent-360.me",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear Talent 360 Hiring Team,

I am applying for the Flutter Developer opportunity with your software-house client. I have more than three years of production experience building and maintaining Flutter applications across Android, iOS, and Windows.

My experience includes Flutter, Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, unit testing, Git, and CI/CD. I have owned production features, improved modular architecture, integrated backend services, resolved live issues, and supported automated releases with GitHub Actions and Fastlane.

I am based in Cairo and available for the advertised flexible work model. My portfolio is available at https://muhamaadessam.github.io/.

Best regards,
Muhammad Essam
+20 101 702 2791
muhammad159e@gmail.com`,
  },
  {
    company: "EdHillfe",
    role: "Flutter Developer",
    to: "Vasantha@edhillfe.com",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear EdHillfe Hiring Team,

I am applying for the Flutter Developer contract opportunity. I have more than three years of professional experience building production applications with Flutter and Dart across Android, iOS, and Windows.

My experience includes BLoC/Cubit, Clean Architecture, REST APIs, Firebase, local storage, testing, Git, CI/CD, and professional Android development exposure. I am comfortable joining an existing codebase, delivering production features, and resolving live application issues.

I am currently based in Egypt. I would be glad to discuss whether remote work or relocation support is available for this contract.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam
+20 101 702 2791
muhammad159e@gmail.com`,
  },
  {
    company: "GEMPERTS",
    role: "Senior Flutter Mobility Developer",
    to: "shweta.sgempertsindia@gmail.com",
    subject: "Flutter Mobility Developer Application — Muhammad Essam",
    body: `Dear GEMPERTS Hiring Team,

I am interested in the Flutter Mobility Developer opportunity. I have more than three years of hands-on production experience with Flutter and Dart, including BLoC/Cubit, Clean Architecture, REST APIs, Firebase, performance optimization, testing, CI/CD, and app-store releases.

I have built and maintained applications across Android, iOS, and Windows, migrated production modules to BLoC/Cubit, integrated backend services, fixed live issues, and automated releases with GitHub Actions and Fastlane.

While the post targets a more senior experience level, I would appreciate your consideration for this role or a suitable mid-level Flutter opening.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam
+20 101 702 2791
muhammad159e@gmail.com`,
  },
  {
    company: "Infolexus Solutions",
    role: "Mobile Application Developer — Flutter",
    to: "recruiter1@infolexus.com",
    subject: "Mobile Application Developer (Flutter) — Muhammad Essam",
    body: `Dear Infolexus Solutions Hiring Team,

I am applying for the Mobile Application Developer position with a focus on Flutter. I have more than three years of production experience building applications across Android, iOS, and Windows using Flutter, Dart, BLoC/Cubit, Clean Architecture, REST APIs, Firebase, SQLite, testing, Git, and app-store release workflows.

I have shipped and maintained live applications, improved modular architecture, integrated backend services, fixed production issues, and automated releases with GitHub Actions and Fastlane.

I am based in Egypt. I would be glad to discuss whether remote work or relocation support is available for the Coimbatore role.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "LINCHPINZ",
    role: "Flutter Developer",
    to: "sriram@linchpinz.com",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear LINCHPINZ Hiring Team,

I am applying for the Flutter Developer position in Hyderabad. I have more than three years of production experience with Flutter and Dart across Android, iOS, and Windows, including BLoC/Cubit, Clean Architecture, REST APIs, Firebase, testing, performance optimization, Git, CI/CD, and app-store releases.

I have owned production features end to end, migrated modules from GetX to Cubit/BLoC, integrated backend services, resolved live issues, and automated releases with GitHub Actions and Fastlane.

While the post targets 6–7 years of experience, I would appreciate consideration for this role or a suitable mid-level opening. I am based in Egypt and would need remote work or relocation support.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
] as const;

const androidEmailApplications = [
  {
    company: "Tawajood",
    role: "Android Developer",
    to: "info@tawajood.com",
    subject: "Android Developer Application — Asmaa Atya",
    body: androidJobs[0].coverLetter,
  },
  {
    company: "SIGMA EMEA",
    role: "Android Developer",
    to: "jobs@sigma-emea.com",
    subject: "Android Developer Application — Asmaa Atya",
    body: `Dear SIGMA EMEA Hiring Team,

I am applying for the Android Developer position in Sheikh Zayed. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, Coroutines, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes scalable multi-module architecture, product flavors, secure API integrations, performance optimization, and Google Play releases.

My background aligns closely with your requirements for modern Kotlin development, Jetpack Compose, testing, and maintainable Android architecture. I would welcome the opportunity to discuss the hybrid role.

Best regards,
Asmaa Atya`,
  },
  {
    company: "S M Techno Consultants",
    role: "Android Developer",
    to: "corporate@smtechno.com",
    subject: "Android Developer Application — Asmaa Atya",
    body: `Dear S M Techno Consultants Hiring Team,

I am applying for the Android Developer position. I have more than three years of professional Android experience using Kotlin, Java, Android SDK, Jetpack Compose, MVVM, Clean Architecture, REST APIs, Firebase, Room, Coroutines, Git, testing, and release management.

I have delivered production applications in POS, payments, healthcare, and government services, including scalable multi-module codebases and applications serving large user bases.

I would be glad to discuss the position, work location, and whether remote work is available.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Xautomations",
    role: "Android Developer",
    to: "careers@xautomations.com",
    subject: "Android Developer Application — Asmaa Atya",
    body: `Dear Xautomations Hiring Team,

I am applying for the Android Developer position. I have more than three years of production experience building native Android applications using Kotlin, Java, Jetpack Compose, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

My experience includes POS and payment applications, healthcare and government services, multi-module architecture, performance optimization, secure API integrations, and Google Play release management.

I am based in Egypt and would be glad to discuss remote work or relocation support for the role.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Pearl Data Direct",
    role: "Android Developer",
    to: "jobs@pearldatadirect.com",
    subject: "Android Developer Application — Asmaa Atya",
    body: `Dear Pearl Data Direct Hiring Team,

I am applying for the Android Developer position. I have more than three years of professional Android experience using Kotlin, Jetpack Compose, MVVM, MVI, Clean Architecture, Retrofit-style REST API integrations, Room, Coroutines, Flow, Firebase, Git, and unit testing.

I have built and maintained production applications across POS, payments, healthcare, and government services, with a strong focus on scalable architecture, performance, secure data handling, and reliable releases.

I am currently based in Egypt and would welcome the opportunity to discuss relocation support and the expected joining timeline.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Infolexus Solutions",
    role: "Mobile Application Developer — Android",
    to: "recruiter1@infolexus.com",
    subject: "Mobile Application Developer (Android) — Asmaa Atya",
    body: `Dear Infolexus Solutions Hiring Team,

I am applying for the Mobile Application Developer position with a focus on native Android. I have more than three years of production experience using Kotlin, Java, Android SDK, Jetpack Compose, MVVM, MVI, Clean Architecture, REST APIs, Firebase, SQLite, Git, testing, performance optimization, and Google Play release management.

I have delivered applications across POS, payments, healthcare, and government services, including scalable multi-module codebases and an Egypt Ministry of Justice application serving more than one million users.

I am based in Egypt. I would be glad to discuss whether remote work or relocation support is available for the Coimbatore role.

Best regards,
Asmaa Atya`,
  },
] as const;

const flutterLinkedInPosts = [
  {
    company: "Infolexus Solutions — عميل مباشر",
    role: "Mobile Application Developer — Flutter",
    poster: "Devipriya Lakshmanan",
    posterRole: "HR Recruiter · Infolexus Solutions",
    age: "منذ 54 دقيقة",
    location: "Coimbatore · On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "المستوى المطلوب 2–4 سنوات، والمنشور يقبل Flutter مع REST APIs وFirebase وSQLite وGit والنشر؛ تطابق تقني واضح.",
    contact: "recruiter1@infolexus.com · WhatsApp: +91 90037 45749",
    whatsapp: "919003745749",
    note: "الدور متعدد المنصات ومن المكتب في الهند؛ تأكد من قبول تخصص Flutter ومن دعم الانتقال قبل الاستمرار.",
    href: "https://www.linkedin.com/in/devipriya-lakshmanan/recent-activity/all/",
  },
  {
    company: "LINCHPINZ",
    role: "Flutter Developer",
    poster: "Sriram B",
    posterRole: "HR Recruiter · LINCHPINZ",
    age: "منذ ساعة",
    location: "Hyderabad · On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Flutter/Dart وREST APIs وFirebase وGit وCI/CD والنشر وتحسين الأداء كلها ضمن خبرة محمد.",
    contact: "sriram@linchpinz.com",
    note: "الإعلان طالب 6–7 سنوات؛ قدّم كـStretch واسأل عن دور Mid-level أو دعم الانتقال.",
    href: "https://www.linkedin.com/in/srirambabu007/recent-activity/all/",
  },
  {
    company: "Talent 360 — عميل Software House",
    role: "Flutter Developer",
    poster: "Sara Amer",
    posterRole: "HR Generalist · Talent 360",
    age: "منذ 5 ساعات",
    location: "المعادي، القاهرة · Remote + الثلاثاء On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Flutter Production داخل Software House مع نظام عمل مرن وتأمين طبي واجتماعي وبدل إنترنت.",
    contact: "advisor38@talent-360.me",
    note: "مطلوب 5 سنوات؛ قدّم باعتبارها Stretch وركّز على الـproduction ownership والـarchitecture.",
    href: "https://www.linkedin.com/in/sara-amer-ba49a1259/recent-activity/all/",
  },
  {
    company: "Mojab — Saudi Tech Startup",
    role: "Mid / Senior Flutter Developer",
    poster: "وظائف مبتكرة",
    posterRole: "صفحة وظائف تقنية",
    age: "منذ 20 ساعة",
    location: "Remote من مصر · الراتب بالدولار",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "دور Flutter مباشر داخل Startup سعودي، مع فرصة لبناء المنتج والـarchitecture من البداية ومن غير Legacy Code.",
    contact: "إرسال الـPortfolio من رابط التقديم داخل المنشور",
    note: "اختَر مستوى Mid بوضوح، واسأل عن الراتب ونوع العقد قبل إرسال مستندات حساسة.",
    href: "https://www.linkedin.com/company/%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D9%85%D8%A8%D8%AA%D9%83%D8%B1%D8%A9/posts/",
  },
  {
    company: "PT CreateIT Solution Indonesia",
    role: "Senior Flutter Developer",
    poster: "Andri Senjaya",
    posterRole: "Director",
    age: "منذ 18 دقيقة",
    location: "مشروعات دولية لعملاء أوروبيين",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "مطلوب 3+ سنوات Flutter/Dart وREST APIs وGit؛ TypeScript وReact مجرد إضافات وليسا أساس الدور.",
    contact: "التواصل المباشر مع صاحب المنشور على LinkedIn",
    note: "نظام ومكان العمل غير واضحين في الجزء المنشور؛ تأكد أن التعاقد من مصر متاح قبل الاستمرار.",
    href: "https://www.linkedin.com/in/andri-senjaya/recent-activity/all/",
  },
  {
    company: "EdHillfe",
    role: "Flutter Developer — 3-month contract",
    poster: "Vasantha Lakshmi",
    posterRole: "Recruitment Specialist",
    age: "منذ 5 ساعات",
    location: "Chennai · Immediate joiner",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "المطلوب 2–5 سنوات Flutter مع Java وKotlin، وهي مهارات قريبة من خبرة محمد متعددة المنصات.",
    contact: "Vasantha@edhillfe.com",
    note: "العقد 3 شهور والمكان Chennai؛ قدّم فقط لو Remote أو دعم الانتقال متاحان.",
    href: "https://www.linkedin.com/in/vasantha-lakshmi-3355b7247/recent-activity/all/",
  },
  {
    company: "GEMPERTS",
    role: "Senior Flutter Mobility Developer",
    poster: "Shikha Singh",
    posterRole: "Senior HR Recruiter",
    age: "منذ 5 ساعات",
    location: "Remote",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "BLoC وClean Architecture وREST/GraphQL وCI/CD وتحسين الأداء ونشر التطبيقات كلها ضمن خبرة محمد.",
    contact: "shweta.sgempertsindia@gmail.com · 6386494037",
    note: "مطلوب 7+ سنوات؛ فرصة Stretch واضحة وليست من أولويات التقديم.",
    href: "https://www.linkedin.com/in/shikha-singh-720b14399/recent-activity/all/",
  },
  {
    company: "ArhamSoft",
    role: "Flutter Developer",
    poster: "Remote Careers Pakistan",
    posterRole: "صفحة تجميع وظائف Remote",
    age: "منذ ساعة",
    location: "Remote",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "المنشور يربط لدور Flutter Remote منفصل لدى ArhamSoft ضمن قائمة وظائف يومية.",
    contact: "رابط التقديم: https://lnkd.in/e6aYTVTP",
    note: "تأكد من قبول متقدمين من مصر ومن تفاصيل الشركة والعقد على صفحة التقديم الأصلية.",
    href: "https://www.linkedin.com/company/remote-careers-pakistan/posts/",
  },
  {
    company: "ZenithSoft.Ai",
    role: "Flutter Developer",
    poster: "ZenithSoft.Ai",
    posterRole: "Company page",
    age: "منذ ساعة",
    location: "Remote · 0–5 سنوات",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "إعلان Remote متعدد الأدوار يتضمن Flutter Developer ويقبل أصحاب الخبرة حتى 5 سنوات.",
    contact: "الرد أو التواصل من داخل منشور الشركة",
    note: "الإعلان عام جدًا؛ تحقّق من اسم العميل والعقد ولا تدفع أي رسوم أو ترسل بيانات حساسة.",
    href: "https://www.linkedin.com/company/zenithsoft-ai/posts/",
  },
  {
    company: "i-exceed",
    role: "Flutter Developer — Banking & FinTech",
    poster: "Martin V",
    posterRole: "Talent Acquisition Specialist",
    age: "منذ ساعة",
    location: "مقابلة حضورية 1 أغسطس",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "الدور الأساسي يطلب 3+ سنوات Flutter داخل Banking/FinTech، وهو مستوى خبرة محمد الحالي.",
    contact: "Martin: 7996032321 · تأكيد مسبق للمقابلة",
    note: "مكان المقابلة غير ظاهر في الملخص؛ تأكد من الموقع وإمكانية Remote أو الانتقال أولًا.",
    href: "https://www.linkedin.com/in/martin-v-620ab622a/recent-activity/all/",
  },
  {
    company: "صاحب عمل غير معلن",
    role: "Mid-level Flutter Developer",
    poster: "Shuaif Ahmed",
    posterRole: "AI Solution Architect & Technical Lead",
    age: "منذ يوم",
    location: "Remote",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "المطلوب 2–4 سنوات Flutter، Remote، ومستوى Mid-level تحديدًا؛ تطابق مباشر مع الخبرة.",
    contact: "إرسال رسالة مباشرة لصاحب المنشور",
    note: "اطلب اسم الشركة ونوع العقد والراتب قبل مشاركة الـCV أو أي بيانات شخصية إضافية.",
    href: "https://www.linkedin.com/in/shuaifkazia/recent-activity/all/",
  },
  {
    company: "Axoria Systems",
    role: "Mobile App Developer — Flutter",
    poster: "Axoria Systems",
    posterRole: "Company page",
    age: "منذ 46 دقيقة",
    location: "Remote · Part-time",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Flutter/Dart وFirebase وREST APIs مطابقة، والدور Remote كفرصة إضافية بجانب البحث عن Full-time.",
    contact: "DM / Resume: https://lnkd.in/d6T6PBka",
    note: "Part-time والإعلان مختصر؛ تحقّق من المقابل المالي وهوية المشروع قبل تنفيذ أي Assignment.",
    href: "https://www.linkedin.com/company/axoria-systems/posts/",
  },
] as const;

const androidLinkedInPosts = [
  {
    company: "Infolexus Solutions — عميل مباشر",
    role: "Mobile Application Developer — Android",
    poster: "Devipriya Lakshmanan",
    posterRole: "HR Recruiter · Infolexus Solutions",
    age: "منذ 54 دقيقة",
    location: "Coimbatore · On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "المستوى المطلوب 2–4 سنوات، والمنشور يقبل Android Java/Kotlin مع REST APIs وFirebase وSQLite وGit والنشر.",
    contact: "recruiter1@infolexus.com · WhatsApp: +91 90037 45749",
    whatsapp: "919003745749",
    note: "الدور متعدد المنصات ومن المكتب في الهند؛ تأكدي من قبول Android Native ومن دعم الانتقال قبل الاستمرار.",
    href: "https://www.linkedin.com/in/devipriya-lakshmanan/recent-activity/all/",
  },
  {
    company: "SIGMA EMEA",
    role: "Android Developer",
    poster: "Abdelaziz Ali",
    posterRole: "Global Technical Talent Acquisition",
    age: "منذ يومين",
    location: "الشيخ زايد، مصر · Hybrid",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "Kotlin وJava وJetpack Compose وCoroutines وMVVM/MVI والاختبارات وCI/CD تطابق خبرة أسماء مباشرة.",
    contact: "jobs@sigma-emea.com",
    note: "المنشور الأصلي ومعه نسخة منسوخة؛ التقرير يحتسب الأصل فقط لتجنب التكرار.",
    href: "https://www.linkedin.com/in/abdelazizali1/recent-activity/all/",
  },
  {
    company: "عميل عبر UAEjobseekers.com",
    role: "iOS & Kotlin Developer",
    poster: "UAEjobseekers.com",
    posterRole: "صفحة وظائف الإمارات",
    age: "منذ 24 دقيقة",
    location: "دبي، الإمارات · Full-time",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "جزء Android يركز على Kotlin وJetpack Compose وClean Architecture وSOLID، وهي خبرة أساسية لدى أسماء.",
    contact: "رابط التقديم: https://lnkd.in/dpC-mzkq",
    note: "العنوان يجمع iOS وKotlin؛ تأكدي أن المطلوب Android specialist وليس مطورًا للمنصتين معًا.",
    href: "https://www.linkedin.com/company/jobseekersuae/posts/",
  },
  {
    company: "ORbentrix Labs",
    role: "Android Developer",
    poster: "ORbentrix Labs",
    posterRole: "Company page",
    age: "منذ 47 دقيقة",
    location: "Remote · Part-time",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Kotlin وAndroid Studio وJetpack Components وREST APIs مطابقة للـCV، والدور Remote.",
    contact: "DM / Resume: https://lnkd.in/d6T6PBka",
    note: "Part-time والإعلان مختصر؛ تحققي من المقابل وهوية المشروع قبل تنفيذ أي Assignment.",
    href: "https://www.linkedin.com/company/orbentrix-labs/posts/",
  },
  {
    company: "ZenithSoft.Ai",
    role: "Android Developer",
    poster: "ZenithSoft.Ai",
    posterRole: "Company page",
    age: "منذ ساعة",
    location: "Remote · 0–5 سنوات",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "إعلان Remote متعدد الأدوار يتضمن Android Developer ويقبل أصحاب الخبرة حتى 5 سنوات.",
    contact: "الرد أو التواصل من داخل منشور الشركة",
    note: "الإعلان عام جدًا؛ تحققي من اسم العميل والعقد ولا تدفعي رسومًا أو ترسلي بيانات حساسة.",
    href: "https://www.linkedin.com/company/zenithsoft-ai/posts/",
  },
  {
    company: "SumUp",
    role: "Android Engineer — Hardware Tribe",
    poster: "Enrich Network",
    posterRole: "Germany tech jobs community",
    age: "منذ 6 دقائق",
    location: "برلين، ألمانيا · FinTech",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Kotlin وAndroid وClean Architecture مع أجهزة الدفع؛ خبرة أسماء في الـPOS والمدفوعات تجعل المجال مناسبًا.",
    contact: "التقديم من careers.sumup.com",
    note: "فرصة انتقال دولية؛ تحققي من دعم التأشيرة ومن متطلبات Hardware Integration قبل التقديم.",
    href: "https://www.linkedin.com/company/enrich-tech-network/posts/",
  },
  {
    company: "S M Techno Consultants",
    role: "Android Developer",
    poster: "Prafull Jha",
    posterRole: "S M Techno",
    age: "منذ 5 ساعات",
    location: "المكان غير مذكور في ملخص المنشور",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Kotlin/Java وMVVM/Clean Architecture وREST وFirebase وJetpack وRoom وCI/CD مطابقة تقنيًا.",
    contact: "corporate@smtechno.com",
    note: "الإعلان يطلب 1–2 سنة فقط والموقع غير واضح؛ تأكدي من مستوى الدور والراتب وإمكانية Remote.",
    href: "https://www.linkedin.com/in/smtechno/recent-activity/all/",
  },
  {
    company: "Xautomations",
    role: "Android Developer",
    poster: "Udayini Tripurari",
    posterRole: "Talent Acquisition Executive",
    age: "منذ 5 ساعات",
    location: "Hyderabad أو Pune · 3+ سنوات",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "خبرة Android العملية وAPIs والـarchitecture المطلوبة مناسبة لمستوى أسماء الحالي.",
    contact: "careers@xautomations.com · https://lnkd.in/dhtHUS46",
    note: "المنشور لا يذكر Remote؛ اسألي عن إمكانية التعاقد من مصر أو دعم الانتقال قبل التقديم.",
    href: "https://www.linkedin.com/in/udayini-tripurari-89501a27a/recent-activity/all/",
  },
  {
    company: "Pearl Data Direct",
    role: "Android Developer",
    poster: "Abhinav QAGUIDES",
    posterRole: "Career Advisor",
    age: "منذ 5 ساعات",
    location: "Kochi · Work from office",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "مطلوب 3+ سنوات Kotlin وJetpack Compose وMVVM وRetrofit وRoom وCoroutines/Flow؛ تطابق تقني قوي.",
    contact: "jobs@pearldatadirect.com",
    note: "الوظيفة من المكتب في Kochi وبانضمام خلال 15–30 يوم؛ تحتاج تأكيد دعم الانتقال.",
    href: "https://www.linkedin.com/in/abhinav-qaguides-19601a5/recent-activity/all/",
  },
  {
    company: "صاحب عمل عبر Saba Rauf",
    role: "Junior / Mid-level Android Developer",
    poster: "Iram Shahzadi",
    posterRole: "Technical Recruiter",
    age: "منذ ساعة",
    location: "Islamabad · On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "الدور يشمل مستوى Mid Android ومناسب لخبرة Kotlin وAndroid Native لدى أسماء.",
    contact: "التواصل من المنشور الأصلي المعاد نشره",
    note: "لا يوجد Remote والانضمام فوري؛ تأكدي من أهلية الانتقال والعقد قبل مشاركة المستندات.",
    href: "https://www.linkedin.com/in/iram-shahzadi-89a442339/recent-activity/all/",
  },
  {
    company: "Candescent",
    role: "iOS / Android Developer",
    poster: "Mahesh G",
    posterRole: "Software Engineer II",
    age: "منذ 47 دقيقة",
    location: "المكان غير مذكور · Immediate joiners preferred",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "حملة توظيف كبيرة تتضمن Android Developers وMobile Automation داخل فريق تقني واسع.",
    contact: "نموذج التقديم داخل المنشور: https://lnkd.in/d7U7AduE",
    note: "التفاصيل الدقيقة للدور والموقع غير ظاهرة؛ راجعي نموذج Android الأصلي قبل التقديم.",
    href: "https://www.linkedin.com/in/mahesh-g-4398a2286/recent-activity/all/",
  },
] as const;

const flutterDirectPosts = flutterLinkedInPosts.filter(
  (post) => post.contact.includes("@") || post.contact.toLowerCase().includes("whatsapp"),
);
const androidDirectPosts = androidLinkedInPosts.filter(
  (post) => post.contact.includes("@") || post.contact.toLowerCase().includes("whatsapp"),
);

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد وأسماء</span>
          <span className="date">تقرير 28 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">Flutter وAndroid Native في مكان واحد</p>
          <h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1>
          <p className="intro">فرص Flutter وAndroid Native المطابقة، مع Cover Letters وقسم إرسال Gmail جاهز لكلٍ من محمد وأسماء.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>2</strong><span>مسار وظيفي</span></div>
          <div><strong>5</strong><span>فرص Flutter</span></div>
          <div><strong>4</strong><span>فرص Android</span></div>
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
              <p>الفرص الثلاثة الأقوى ما زالت مفتوحة برواتب معلنة فوق الحد. TAWANTECH وPSdigital فرص ممكنة لأن الراتب مخفي أو شرط الخبرة أعلى.</p>
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
                <p>المنشورات خلال آخر 72 ساعة وبها وسيلة تقديم مباشرة. منشورات DM فقط غير معروضة.</p>
              </div>
              <div className="postGrid">
                {flutterDirectPosts.map((post) => (
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
                        <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent("Hello, I’m Muhammad Essam, a Flutter developer with 3+ years of production experience. I’m interested in the Mobile Application Developer role. Portfolio: https://muhamaadessam.github.io/")}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <EmailComposer candidate="Muhammad Essam" applications={flutterEmailApplications} />

            <div className="rejected" aria-label="فرص Flutter مستبعدة">
              <p className="eyebrow">فلترة Flutter</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
              <ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>

          <section className="tabPanel androidPanel" aria-labelledby="android-tab">
            <div className="sectionHead">
              <div><p className="eyebrow">Android Native · Asmaa Atya</p><h2>٤ قوية و٠ ممكنة</h2></div>
              <p>Tawajood وExpert Apps وVertex وYassir كلهم مفتوحين ومسارات التقديم واضحة، ومتطلباتهم الأساسية متوافقة مع خبرة أسماء المؤكدة.</p>
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
                <p>المنشورات خلال آخر 72 ساعة وبها وسيلة تقديم مباشرة. منشورات DM فقط غير معروضة.</p>
              </div>
              <div className="postGrid">
                {androidDirectPosts.map((post) => (
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
                        <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent("Hello, I’m Asmaa Atya, an Android Developer with 3+ years of production experience using Kotlin, Java, and Jetpack Compose. I’m interested in the Mobile Application Developer role.")}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <EmailComposer candidate="Asmaa Atya" applications={androidEmailApplications} />

            <div className="rejected" aria-label="فرص Android مستبعدة">
              <p className="eyebrow">فلترة Android Native</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
              <ul>{androidRejected.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>
        </fieldset>
      </section>

      <footer>
        <p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p>
        <p>آخر تحديث: 28 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
