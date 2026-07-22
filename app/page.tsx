import CopyButton from "./CopyButton";

const jobs = [
  {
    company: "Kalvad",
    role: "Flutter Developer",
    location: "دبي، الإمارات",
    mode: "دوام كامل · سياسة Remote مرنة",
    age: "منشور خلال الأسبوع والتقديم ما زال مفتوحًا",
    salary: "غير معلن",
    match: "تطابق قوي",
    matchClass: "strong",
    why: "يطلب خبرة عملية في Flutter وDart وشحن تطبيقات حقيقية، مع BLoC/Provider وCI/CD وREST وواجهات قابلة للوصول؛ ده مطابق مباشرة لخبرتك، والعربية مطلوبة والشركة مقرها دبي.",
    note: "الراتب مخفي، وسياسة الـRemote المرنة لا تؤكد قبول العمل من مصر. اسأل مبكرًا عن مكان العمل، التأشيرة أو الـrelocation، والراتب.",
    href: "https://ae.linkedin.com/jobs/view/flutter-developer-at-kalvad-4438626770",
    coverLetter: `Dear Kalvad Hiring Team,

I am applying for the Flutter Developer position in Dubai. I have more than three years of production Flutter experience building Android, iOS, and Windows applications with Dart, BLoC/Cubit, GetX, Clean Architecture, REST APIs, Firebase, local storage, testing, and Git-based workflows.

My recent work includes migrating production code from GetX to Cubit/BLoC, improving modular architecture, debugging and optimizing live applications, integrating third-party services, and automating releases with GitHub Actions and Fastlane. This aligns closely with Kalvad's focus on maintainable production systems, accessibility, ownership, and reliable delivery.

I am a native Arabic speaker based in Egypt and am open to discussing remote work or relocation to Dubai. I would welcome the opportunity to contribute to Kalvad's mobile products and learn more about your AI-enabled application work.

Best regards,
Muhammad Essam`,
  },
] as const;

const rejected = [
  "Technosat وPayTabs وBlueCloud وAdree وNawy وTamara وColada وDsquares: ظهروا في تقارير سابقة، فمش هكررهم من غير تغيير مهم.",
  "York Towers: إعلان Senior Flutter ظاهر في نتائج البحث لكن صفحة الوظيفة بتقول إن التقديم اتقفل.",
  "Tanemera: الوظيفة Junior، فمش مناسبة لمستوى الخبرة المطلوب.",
  "Sanaam: تشترط 5+ سنوات وSaudi National وخبرة fintech/banking قوية.",
  "Salt: شركة التوظيف غير عربية المقر، والدور السابق كان 5 أيام On-site مع خبرة banking إلزامية.",
  "CodeNinja: مقرها باكستان، رغم إن الوظيفة في الرياض.",
  "Nawy viewed your application ورسائل Pulse Job وLinkedIn وIndeed وBayt: تحديثات أو تنبيهات آلية وليست ردود Recruiter مهمة.",
] as const;

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav aria-label="رأس التقرير">
          <span className="brand">فرص محمد</span>
          <span className="date">تقرير 23 يوليو 2026</span>
        </nav>
        <div className="heroCopy">
          <p className="eyebrow">تقرير وظائف Flutter اليومي</p>
          <h1>فرصة قوية جديدة ورد توظيف مهم محتاج إجابتك.</h1>
          <p className="intro">Kalvad في دبي هي المطابقة الجديدة الوحيدة بعد حذف التكرار والوظائف المقفولة. Vertex/NIX بعتوا أسئلة فرز أولي لازم ترد عليها.</p>
        </div>
        <div className="stats" aria-label="ملخص التقرير">
          <div><strong>1</strong><span>تطابق قوي</span></div>
          <div><strong>0</strong><span>فرصة ممكنة</span></div>
          <div><strong>1</strong><span>رسالة توظيف مهمة</span></div>
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
          <div><p className="eyebrow">الأولوية اليوم</p><h2>قدّم على Kalvad</h2></div>
          <p>التطابق التقني قوي والشركة إماراتية المقر. اسأل من أول تواصل هل الـRemote متاح من مصر أو هل فيه relocation، وتأكد من الراتب.</p>
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

        <section className="emailSection" aria-label="إيميلات التوظيف آخر 48 ساعة">
          <div className="sectionHead">
            <div><p className="eyebrow">من Gmail</p><h2>إيميلات التوظيف آخر ٤٨ ساعة</h2></div>
            <p>راجعت Inbox للحساب muhammad159e@gmail.com خلال آخر 48 ساعة. لقيت ردًا واحدًا مهمًا من فريق NIX بخصوص تقديمك على Vertex.</p>
          </div>
          <div className="emailGrid">
            <article className="emailCard">
              <div className="cardTop"><span className="rank">22 يوليو · 11:13 ص</span><span className="match strong">أولوية عالية</span></div>
              <p className="company">Gábor Virág Veronika · NIX HR / Vertex</p>
              <h3>Regarding your application to Vertex</h3>
              <p className="why"><b>ليه مهمة:</b> ده رد مباشر على تقديم Middle Flutter Developer، وبيطلب إجابات فرز أولي عن سبب تغيير الشغل، سنوات الخبرة، المنطقة والانتقال لـSmart Village، الحضور 10–7، أيام العمل، التجنيد، ميعاد البدء، والراتب المتوقع Net.</p>
              <p className="note"><b>الإجراء المقترح:</b> رد اليوم بإجابات مختصرة وواضحة. حدد توقع راتب Net لا يقل عن 30,000 جنيه، ووضح موقفك من الحضور والجدول الأوروبي حسب ظروفك الفعلية.</p>
            </article>
          </div>
        </section>

        <div className="rejected" aria-label="فرص مستبعدة">
          <p className="eyebrow">فلترة اليوم</p><h2>ليه فرص تانية ما دخلتش التقرير؟</h2>
          <ul>{rejected.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <footer>
        <p>الترتيب مبني على قوة التطابق وحداثة الإعلان ووضوح مسار التقديم.</p>
        <p>آخر تحديث: 23 يوليو 2026 · القاهرة</p>
      </footer>
    </main>
  );
}
