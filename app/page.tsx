import CopyButton from "./CopyButton";

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

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد وأسماء</span>
          <span className="date">تقرير 27 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">Flutter وAndroid Native في مكان واحد</p>
          <h1>اختار التخصص وشوف الفرص المناسبة لكل شخص.</h1>
          <p className="intro">تاب محمد فيه تقرير Flutter الحالي كامل. تاب أسماء جاهز لاستقبال وظائف Android Native أول ما تضيف الـCV.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>2</strong><span>مسار وظيفي</span></div>
          <div><strong>5</strong><span>فرص Flutter</span></div>
          <div><strong>—</strong><span>Android بعد الـCV</span></div>
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

            <div className="rejected" aria-label="فرص Flutter مستبعدة">
              <p className="eyebrow">فلترة Flutter</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
              <ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>

          <section className="tabPanel androidPanel" aria-labelledby="android-tab">
            <div className="sectionHead">
              <div><p className="eyebrow">Android Native · Asmaa Atya</p><h2>مستنيين CV أسماء</h2></div>
              <p>مش هنضيف وظائف أو ندّعي خبرات قبل ما نراجع الـCV. أول تحديث بعد استلامه هيملأ التاب بفرص Android Native المطابقة.</p>
            </div>

            <article className="emptyState">
              <p className="company">Asmaa Atya</p>
              <h3>التاب جاهز للبحث والتقديم</h3>
              <p>هنعرض هنا فرص Kotlin وJava وAndroid SDK وJetpack Compose المناسبة لخبرة أسماء، مع راتب واضح أو تنبيه لو الراتب مخفي.</p>
              <div className="candidateSignature">
                <span>كل Cover Letter في التاب ده هيتوقّع باسم</span>
                <strong>Asmaa Atya</strong>
              </div>
            </article>
          </section>
        </fieldset>
      </section>

      <footer>
        <p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح الراتب ومسار التقديم.</p>
        <p>آخر تحديث: 27 يوليو 2026 · 6:20 مساءً القاهرة</p>
      </footer>
    </main>
  );
}
