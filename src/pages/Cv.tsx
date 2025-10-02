export default function Cv() {
  return (
    <section className="grid gap-8">
      {/* Header / Contact */}
      <header className="grid gap-3 md:grid-cols-[1fr,auto] md:items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Alan Khamo</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Junior Software Engineer (Web) · Aarhus, Denmark
          </p>
          <p className="text-sm">
            <a
              href="mailto:AlanKhamo@gmail.com"
              className="underline text-blue-700 dark:text-blue-300"
            >
              AlanKhamo@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="https://linkedin.com/in/alan-khamo-959752264/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-700 dark:text-blue-300"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/AlanKhamo"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-700 dark:text-blue-300"
            >
              GitHub
            </a>
          </p>
        </div>


      </header>

      {/* Summary + Key facts */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="mt-2 text-gray-800 dark:text-gray-200 leading-relaxed">
            Frontend-focused software engineer with a B.Eng. (2025) specialized in web technology.
            I build clean, accessible UIs with React + TypeScript + Tailwind, and I enjoy turning
            complex requirements into simple, fast and reliable user experiences. Comfortable working
            across the stack (APIs, auth, CI/CD, containers) and collaborating tightly with design
            and backend.
          </p>
        </div>

        <aside className="border rounded p-4 border-gray-200 dark:border-gray-800">
          <h3 className="font-medium mb-3">Highlights</h3>
          <ul className="space-y-2 text-sm">
            <li>• Modern React + TS + Tailwind</li>
            <li>• UX mindset & component reuse</li>
            <li>• API integration & auth flows</li>
            <li>• CI/CD + Docker (basics)</li>
          </ul>
        </aside>
      </section>

      {/* Experience */}
      <section className="grid gap-4">
        <h2 className="text-xl font-semibold">Experience</h2>

        <article className="rounded border p-4 border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-medium">
              Software Developer — Frontend · Chromaviso A/S (Aarhus N)
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Dec 2023 – Jan 2025
            </span>
          </div>
          <ul className="list-disc ps-5 mt-2 space-y-1 text-gray-800 dark:text-gray-200">
            <li>Built responsive UIs with Vue.js (HTML/CSS) and improved component reusability.</li>
            <li>Integrated frontend with backend APIs and tightened client–server communication.</li>
            <li>Refactored legacy parts for maintainability and performance.</li>
            <li>Ensured cross-browser compatibility and basic accessibility (focus, contrast, semantics).</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            {["Vue.js", "JavaScript", "HTML/CSS", "REST APIs", "UX", "Accessibility"].map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded border p-4 border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-medium">
              Engineering Intern — Backend · Chromaviso A/S (Aarhus N)
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Sep 2023 – Dec 2023
            </span>
          </div>
          <ul className="list-disc ps-5 mt-2 space-y-1 text-gray-800 dark:text-gray-200">
            <li>Implemented password reset in Laravel with secure token emails.</li>
            <li>Developed backend features in Node.js + Laravel with SQL database.</li>
            <li>Automated scaffolding scripts in Node.js to reduce manual work.</li>
            <li>Designed REST endpoints and improved stability & performance.</li>
            <li>Contributed to CI/CD workflows for builds and automated tests.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            {["Node.js", "Laravel", "SQL", "REST", "CI/CD"].map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      </section>

      {/* Skills (grouped) */}
      <section className="grid gap-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Frontend</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "HTML", "CSS", "Vue.js"].map((s) => (
                <span key={s} className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Backend & DevOps</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Node.js", "Laravel", "SQL Server", "MongoDB", "Docker", "CI/CD"].map((s) => (
                <span key={s} className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Other</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Python", "C#", "REST APIs", "Accessibility", "UX"].map((s) => (
                <span key={s} className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="grid gap-2">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="list-disc ps-5 space-y-1">
          <li>
            B.Eng. in Software Technology (Web specialization) — Aarhus University (2021–2025)
          </li>
          <li>
            Engineering Admission Course (Math A, Chem C, Physics B) — Aarhus University (2019–2021)
          </li>
        </ul>
      </section>

      {/* Optional: Projects (vis 1–2 som smagsprøve) */}
      <section className="grid gap-4">
        <h2 className="text-xl font-semibold">Selected Projects</h2>

        <article className="rounded border p-4 border-gray-200 dark:border-gray-800">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="font-medium">Atmos Alert — Bachelor Project</h3>
            <a
              className="text-sm underline text-blue-700 dark:text-blue-300"
              href="https://gitlab.au.dk/bachelorproject/atmosalert"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
          <p className="mt-2 text-gray-800 dark:text-gray-200">
            IoT- and ML-based localized weather system; contributed to IoT data pipeline and frontend design.
          </p>
          <div className="flex flex-wrap gap-2 mt-2 text-xs">
            {["React", "Docker", "IoT", ".NET Core", "Machine Learning"].map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded border p-4 border-gray-200 dark:border-gray-800">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="font-medium">Fitness App (4th semester)</h3>
            <a
              className="text-sm underline text-blue-700 dark:text-blue-300"
              href="https://github.com/kamar-dk/Sem.Project4"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
          <p className="mt-2 text-gray-800 dark:text-gray-200">
            Profiles, workout programs and tracking; backend with REST APIs and DB integration.
          </p>
          <div className="flex flex-wrap gap-2 mt-2 text-xs">
            {["C#", "React", "ASP.NET Core", "Docker", "CI/CD", "SQL", "REST API"].map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
}
