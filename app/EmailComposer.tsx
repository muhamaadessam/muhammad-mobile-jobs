"use client";

import { useState } from "react";

type Application = {
  company: string;
  role: string;
  to: string;
  cc?: string;
  subject: string;
  body: string;
};

export default function EmailComposer({
  candidate,
  applications,
}: {
  candidate: string;
  applications: readonly Application[];
}) {
  const [selected, setSelected] = useState(0);
  const application = applications[selected];
  const [draft, setDraft] = useState<Application>(application);

  function select(index: number) {
    setSelected(index);
    setDraft(applications[index]);
  }

  const gmailUrl = `https://mail.google.com/mail/?${new URLSearchParams({
    view: "cm",
    fs: "1",
    to: draft.to,
    cc: draft.cc ?? "",
    su: draft.subject,
    body: draft.body,
  })}`;

  return (
    <section className="emailComposer" aria-label={`إرسال إيميل باسم ${candidate}`}>
      <div className="emailIntro">
        <p className="eyebrow">إرسال الإيميلات</p>
        <h2>مسودة Gmail جاهزة لـ {candidate}</h2>
        <p>كل إعلان نشر إيميل تقديم موجود في القائمة. اختار الشركة وافتح Gmail مباشرة، ثم أضف الـCV يدويًا.</p>
      </div>

      <div className="emailForm">
        <label>
          الوظيفة
          <select value={selected} onChange={(event) => select(Number(event.target.value))}>
            {applications.map((item, index) => (
              <option key={`${item.company}-${item.role}`} value={index}>
                {item.company} — {item.role}
              </option>
            ))}
          </select>
        </label>

        <div className="emailRow">
          <label>
            To
            <input value={draft.to} onChange={(event) => setDraft({ ...draft, to: event.target.value })} />
          </label>
          <label>
            CC
            <input value={draft.cc ?? ""} onChange={(event) => setDraft({ ...draft, cc: event.target.value })} />
          </label>
        </div>

        <label>
          Subject
          <input value={draft.subject} onChange={(event) => setDraft({ ...draft, subject: event.target.value })} />
        </label>

        <label>
          Cover Letter
          <textarea rows={15} value={draft.body} onChange={(event) => setDraft({ ...draft, body: event.target.value })} />
        </label>

        <a className="gmailButton" href={gmailUrl} target="_blank" rel="noreferrer">
          افتح الرسالة في Gmail <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
