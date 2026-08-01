import CopyButton from "./CopyButton";
import EmailComposer from "./EmailComposer";

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
    age: "منشورة من 28 يوم · Easy Apply مفتوح",
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
    age: "Easy Apply مفتوح · صاحب العمل نشط خلال 7 ساعات",
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
    age: "منشورة من 6 أيام · الطلب متقدم بالفعل",
    salary: "مخفي",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    why: "شركة سعودية مقرها الرياض، والدور يطابق خبرتك في Flutter/Dart وBloc/GetX وClean Architecture وREST وFirebase وGit وCI/CD والنشر. شرط 3+ سنوات Flutter متحقق.",
    note: "الإعلان طالب 5+ سنوات Software Development مع mentoring، وده أعلى من إجمالي خبرتك الحالية. التقديم اتبعت بالفعل يوم 28 يوليو؛ راقب الرد وما تكررش الطلب.",
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
    company: "geidea",
    role: "Mid-level Android Developer",
    location: "القاهرة، مصر",
    mode: "دوام كامل",
    age: "منشورة من 3 أسابيع · Easy Apply مفتوح",
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
    company: "شركة غير معلنة على Wuzzuf",
    role: "Android Developer",
    location: "مدينة نصر، القاهرة",
    mode: "دوام كامل · Hybrid",
    age: "منشورة اليوم والتقديم مفتوح على Wuzzuf",
    salary: "مخفي",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "الإعلان يطلب 2–4 سنوات مع Java وKotlin وAndroid SDK وREST APIs وGit وCloud Messaging ودورة نشر التطبيقات؛ تطابق مباشر مع خبرة أسماء.",
    note: "اسم الشركة والراتب مخفيان على Wuzzuf؛ قدّمي من المنصة واسألي مبكرًا عن اسم صاحب العمل وصافي الراتب وأيام الحضور.",
    href: "https://wuzzuf.net/ar/jobs/p/cjop1myxbd51-android-developer-cairo-egypt",
    coverLetter: `Dear Hiring Team,

I am applying for the Android Developer position in Nasr City. I have more than three years of professional Android experience using Kotlin and Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, JSON, Firebase, Git, and unit testing.

I have built and maintained production applications across POS, payments, healthcare, and government services. My work includes publishing applications to Google Play, improving performance and stability, integrating third-party services, and organizing scalable multi-module codebases. I also contributed to an Egypt Ministry of Justice application serving more than one million users.

I am based in Cairo and would welcome the opportunity to discuss the hybrid schedule, team, and role expectations.

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
    age: "منشورة من شهر · التقديم الخارجي مفتوح",
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
  "Tawajood: الإعلان المباشر بقى أقدم من نافذة 72 ساعة، ومافيش صفحة وظيفة رسمية مستقلة أقدر أثبت منها إن التقديم ما زال مفتوح.",
  "Fixed Solutions و34ML: الصفحات بتعرض Browse Similar Jobs بدل زر التقديم، فاعتبرتها مقفولة.",
  "Efada Technology: صفحة Wuzzuf لم تعد تعرض مسار تقديم واضح، فشلتها بدل ما أعتمد على إعلان قديم.",
  "Al Ahly Momkn: صفحة الوظائف العامة فتحت من غير ما تثبت إن بطاقة Android POS ما زالت متاحة للتقديم.",
  "Saudi Satr: صفحة LinkedIn بتقول إنهم لم يعودوا يقبلوا طلبات.",
  "الإعلان السري في الإسكندرية: طالب Android وiOS وFlutter معًا وصاحب العمل غير معلن، فمقره العربي غير قابل للتحقق.",
  "Mondia Media: طالبة 8+ سنوات Mobile وKotlin Multiplatform، أعلى بوضوح من خبرة أسماء الحالية.",
  "Henkel وCore Code وiBrokerage: جهات غير عربية المقر، فمستبعدين حسب الفلتر.",
  "SIGMA EMEA وInfolexus وD Design وHarjai وAVOWS: أعمار المنشورات القديمة خرجت من نافذة آخر 72 ساعة، فشلتها من القسم المباشر.",
  "Expert Apps: رابط Wuzzuf السابق لم أقدر أثبت منه مسار تقديم شغال في البحث الحالي، فاستبدلته بإعلان Android أحدث ومفتوح.",
] as const;

const flutterEmailApplications = [
  {
    company: "Bahadur Security Services",
    role: "Software & Application Developer — Flutter",
    to: "karatachi.bahadur@gmail.com",
    subject: "Flutter Developer Application — Muhammad Essam",
    body: `Dear Bahadur Security Services Hiring Team,

I am applying for the Software & Application Developer position. I have more than three years of production experience building Flutter applications across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, Hive, SQLite, Git, testing, and CI/CD.

My experience includes maintaining live applications, integrating backend services, improving modular architecture, resolving production issues, and automating releases with GitHub Actions and Fastlane. I am also comfortable with offline storage and Windows application delivery.

I am based in Egypt and would be glad to discuss remote work or relocation support for the Karachi role.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "ARS Process Solutions",
    role: "UI/UX Engineer — Flutter",
    to: "arsprocess1@gmail.com",
    subject: "Flutter UI Engineer Application — Muhammad Essam",
    body: `Dear ARS Process Solutions Hiring Team,

I am applying for the UI/UX Engineer (Flutter) position in Mumbai. I have more than three years of production Flutter experience across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, Git, testing, and CI/CD.

I have delivered responsive production interfaces, reusable Flutter components, backend integrations, performance improvements, and automated releases. My primary strength is Flutter engineering, and I would be glad to discuss the expected depth of hands-on Figma work.

I am based in Egypt and would welcome a discussion about relocation support or remote eligibility.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
  {
    company: "C2C Requirements and Hotlist",
    role: "Senior Mobile Engineer — Flutter",
    to: "sarfaraz.stellar@gmail.com",
    subject: "Senior Mobile Engineer (Flutter) — Muhammad Essam",
    body: `Dear Sarfaraz Khan,

I am interested in the Senior Mobile Engineer (Flutter) contract. I have more than three years of production Flutter experience across Android, iOS, and Windows using Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, unit testing, Git, and CI/CD.

I have owned production features from architecture through release, improved modular codebases, integrated backend and real-time services, resolved live issues, and automated releases with GitHub Actions and Fastlane. I understand that the overall experience target is higher than my current level, so I am applying as an honest stretch candidate based on the requested production Flutter depth.

I am based in Egypt. Please confirm whether the contract accepts candidates working from Egypt.

Portfolio: https://muhamaadessam.github.io/

Best regards,
Muhammad Essam`,
  },
] as const;

const androidEmailApplications = [
  {
    company: "SIB Operations and Services",
    role: "Android Developer",
    to: "greeshma@sibosl.co.in",
    subject: "Android Developer Application — Asmaa Atya",
    body: `Dear SIB Operations and Services Hiring Team,

I am applying for the Android Developer position in Kochi. I have more than three years of production Android experience using Kotlin, Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, testing, performance optimization, and Google Play release management.

I have delivered applications across POS, payments, healthcare, and government services, including secure integrations, scalable multi-module codebases, and an Egypt Ministry of Justice application serving more than one million users.

I am based in Egypt and would be glad to discuss relocation support for the Kochi role.

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

I have built and maintained applications across POS, payments, healthcare, and government services. My work includes multi-module architecture, secure API integrations, performance optimization, automated testing, production support, and Google Play releases.

I am based in Egypt and would be glad to discuss relocation support for the on-site role.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Cyber Infrastructure (CIS)",
    role: "Native Android Developer",
    to: "resumes@cisin.com",
    cc: "Nihal.p@cisinlabs.com",
    subject: "Native Android Developer Application — Asmaa Atya",
    body: `Dear CIS Hiring Team,

I am applying for the Native Android Developer position in Indore. I have more than three years of production Android experience using Kotlin and Java, Android SDK, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, and unit testing.

I have delivered production applications across POS, payments, healthcare, and government services, including multi-module architecture, secure integrations, performance optimization, and Google Play releases.

I am based in Egypt and would be glad to discuss whether relocation support is available.

Best regards,
Asmaa Atya`,
  },
  {
    company: "Sri Tech Solutions",
    role: "Mobile Developer — Android",
    to: "bharathi.p@sritechsolutions.com",
    subject: "Mobile Developer (Android) Application — Asmaa Atya",
    body: `Dear Sri Tech Solutions Hiring Team,

I am applying for the Mobile Developer position in Madison. I have more than three years of production Android experience using Kotlin, Java, Jetpack Compose, XML, MVVM, MVI, Clean Architecture, REST APIs, Firebase, Git, testing, and release management.

I have built and maintained applications across POS, payments, healthcare, and government services, including scalable multi-module codebases, secure integrations, performance optimization, and Google Play releases. My professional focus is native Android; Swift is not part of my confirmed production background.

I am based in Egypt and would welcome a discussion about international eligibility and relocation support.

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

const flutterDirectPosts = [
  {
    company: "Bahadur Security Services",
    role: "Software & Application Developer — Flutter",
    poster: "Muhammad Zain",
    posterRole: "Chief Operating Officer",
    age: "منذ يومين",
    location: "Karachi · Full-time On-site",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "الإعلان يطلب Flutter/Dart لتطبيقات Android وiOS وWindows مع REST APIs وGit وFirebase وoffline sync؛ تطابق مباشر مع خبرة محمد.",
    contact: "karatachi.bahadur@gmail.com · WhatsApp: 0301-8966999",
    whatsapp: "923018966999",
    note: "العمل من المكتب في باكستان؛ تأكد من دعم الانتقال والراتب قبل إرسال مستندات إضافية.",
    href: "https://www.linkedin.com/in/muhammad-zain-662086153/recent-activity/all/",
  },
  {
    company: "ARS Process Solutions",
    role: "UI/UX Engineer — Flutter",
    poster: "ARS Process Solutions",
    posterRole: "Company page",
    age: "منذ يوم",
    location: "Mumbai · On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "مطلوب 3+ سنوات Flutter/Dart مع BLoC أو Provider وREST/gRPC ومكونات UI قابلة لإعادة الاستخدام؛ الجزء الهندسي مناسب.",
    contact: "arsprocess1@gmail.com",
    note: "الدور يجمع Flutter مع UI/UX وFigma عمليًا؛ قدّم كـStretch واسأل عن وزن التصميم ودعم الانتقال.",
    href: "https://www.linkedin.com/company/ars-process-solutions-and-consultants-pvt-ltd/posts/",
  },
  {
    company: "C2C Requirements and Hotlist",
    role: "Senior Mobile Engineer — Flutter",
    poster: "Sarfaraz Khan",
    posterRole: "US IT Recruiter",
    age: "منذ يوم",
    location: "Remote · Long-term contract",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "المطلوب 3–5 سنوات production Flutter مع BLoC/Cubit وAPIs وoffline storage والاختبارات وCI/CD وإدارة الإصدارات؛ معظم العمق التقني متحقق.",
    contact: "sarfaraz.stellar@gmail.com",
    note: "الإعلان يستهدف 7–10+ سنوات إجمالية وعقود US؛ فرصة Stretch فقط، ولا تكمل قبل تأكيد قبول العمل من مصر.",
    href: "https://www.linkedin.com/groups/9882451/?q=highlightedFeedForGroups&highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7488959343938191360",
  },
  {
    company: "iSmart Techno Hub — شبكة Freelance",
    role: "Freelance App Developer — Flutter",
    poster: "Neetesh Nagar",
    posterRole: "Founder",
    age: "منذ يوم",
    location: "Remote · Freelance",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "شبكة مشاريع Freelance تبحث عن مطوري تطبيقات، وتذكر Flutter صراحة مع API integration وقواعد البيانات.",
    contact: "WhatsApp: +91 92510 11996",
    whatsapp: "919251011996",
    note: "الإعلان عام وليس لوظيفة Flutter محددة؛ اطلب اسم العميل والنطاق والميزانية ولا تدفع أي رسوم.",
    href: "https://www.linkedin.com/in/neetesh-nagar-109567107/recent-activity/all/",
  },
] as const;

const androidDirectPosts = [
  {
    company: "SIB Operations and Services",
    role: "Android Developer",
    poster: "SIB Operations and Services Ltd",
    posterRole: "Company page",
    age: "منذ 11 ساعة",
    location: "Kochi · On-site",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "مطلوب 2+ سنوات Android مع Kotlin وJava وDesign Patterns وOWASP؛ مناسب مباشرة لخبرة أسماء في Android والأمان.",
    contact: "greeshma@sibosl.co.in · WhatsApp: +91 94954 17371",
    whatsapp: "919495417371",
    note: "العمل من المكتب في الهند؛ تأكدي من دعم الانتقال والراتب قبل الاستمرار.",
    href: "https://www.linkedin.com/company/sib-operations-and-services-ltd/posts/",
  },
  {
    company: "H.H Tech Solutions",
    role: "Android Developer",
    poster: "H.H Tech Solutions",
    posterRole: "Software company",
    age: "منذ 20 ساعة",
    location: "Islamabad · Full-time On-site",
    match: "تطابق قوي",
    matchClass: "strong",
    summary: "مطلوب 2+ سنوات Kotlin/Java وMVVM وREST APIs وGit والاختبارات وتحسين الأداء ونشر Play Store؛ تطابق واضح.",
    contact: "hhtechsolution01@gmail.com · WhatsApp: +92 317 4967217",
    whatsapp: "923174967217",
    note: "العمل من المكتب في باكستان؛ تأكدي من دعم الانتقال والراتب قبل إرسال مستندات إضافية.",
    href: "https://www.linkedin.com/in/h-h-tech-solutions-09722b321/recent-activity/all/",
  },
  {
    company: "Cyber Infrastructure (CIS)",
    role: "Native Android Developer",
    poster: "TalentXminds",
    posterRole: "Recruitment community",
    age: "منذ يوم",
    location: "Indore · On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "الإعلان Native Android ويطلب Kotlin وJava وخبرة 1–3 سنوات؛ المهارات مناسبة لكن المستوى أقل قليلًا من خبرة أسماء.",
    contact: "resumes@cisin.com · CC: Nihal.p@cisinlabs.com",
    note: "الشغل من المكتب في Indore؛ تأكدي من قبول 3+ سنوات ودعم الانتقال قبل الاستمرار.",
    href: "https://www.linkedin.com/company/talentxminds/posts/",
  },
  {
    company: "Sri Tech Solutions — عميل US",
    role: "Mobile Developer — Android",
    poster: "Bharathi Pampana",
    posterRole: "Recruiter",
    age: "منذ 21 ساعة",
    location: "Madison, Wisconsin · Full-time On-site",
    match: "فرصة ممكنة",
    matchClass: "stretch",
    summary: "Kotlin وJetpack Compose وXML وREST APIs وMVVM/MVI/Clean Architecture تطابق قوي، لكن الإعلان يطلب Swift أيضًا.",
    contact: "bharathi.p@sritechsolutions.com",
    note: "فرصة انتقال بعيدة وSwift غير مؤكدة؛ لا تكملي قبل تأكيد أهلية العمل ودعم التأشيرة وقبول Android specialist.",
    href: "https://www.linkedin.com/groups/14274442/?q=highlightedFeedForGroups&highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7489025326673563648",
  },
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد وأسماء</span>
          <span className="date">تقرير 1 أغسطس 2026</span>
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
              <p>الفرص الثلاثة الأقوى ما زالت مفتوحة برواتب معلنة فوق الحد. TAWANTECH متقدم لها بالفعل، وPSdigital فرصة ممكنة أقدم وراتبها مخفي.</p>
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
                <p>لقيت ٤ منشورات صالحة فقط خلال آخر 72 ساعة بعد البحث الموسع. كلها تنشر Email أو WhatsApp صريح؛ ماكمّلتش العدد بمنشورات DM أو OpenToWork.</p>
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
                        <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent("Hello, I’m Muhammad Essam, a Flutter developer with 3+ years of production experience. I’m interested in your Flutter opportunity. Portfolio: https://muhamaadessam.github.io/")}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>
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
              <div><p className="eyebrow">Android Native · Asmaa Atya</p><h2>٣ قوية و١ ممكنة</h2></div>
              <p>إعلان Wuzzuf الجديد وVertex وYassir فرص قوية ومفتوحة. Geidea فرصة ممكنة لأن KMM مطلوبة وغير مؤكدة في الخبرة.</p>
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
                <p>لقيت ٤ منشورات صالحة فقط خلال آخر 72 ساعة بعد البحث الموسع. كلها تنشر Email أو WhatsApp صريح؛ ماكمّلتش العدد بتدريب أو OpenToWork أو تكرار.</p>
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
                        <a className="whatsappButton" href={`https://wa.me/${post.whatsapp}?text=${encodeURIComponent("Hello, I’m Asmaa Atya, an Android Developer with 3+ years of production experience using Kotlin, Java, and Jetpack Compose. I’m interested in your Android opportunity.")}`} target="_blank" rel="noreferrer">افتح WhatsApp <span aria-hidden="true">↗</span></a>
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
        <p>آخر تحديث: 1 أغسطس 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
