export default function Cv() {
  return (
    <section className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold">Alan Khamo</h1>
        <p>Junior Software Engineer (Web) · Aarhus, Denmark</p>
        <p className="text-sm">
          <a href="mailto:AlanKhamo@gmail.com" className="underline text-blue-700 dark:text-blue-300">AlanKhamo@gmail.com</a> ·
          <a href="https://linkedin.com/in/alan-khamo-959752264/" target="_blank" className="underline text-blue-700 dark:text-blue-300"> LinkedIn</a> ·
          <a href="https://github.com/AlanKhamo" target="_blank" className="underline text-blue-700 dark:text-blue-300"> GitHub</a>
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Profile</h2>
        <p className="mt-2">
          B.Eng. (2025) specialized in web technology. Passionate about React, UX and scalable systems.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="mt-2 space-y-4">
          <li>
            <b>Software Developer – Frontend</b>, Chromaviso (Dec 2023 – Jan 2025)
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>Built responsive UIs in Vue.js</li>
              <li>Reusable UI components</li>
              <li>Integrated backend APIs</li>
            </ul>
          </li>
          <li>
            <b>Engineering Intern – Backend</b>, Chromaviso (Sep – Dec 2023)
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
              <li>Worked with Node.js + Laravel</li>
              <li>Implemented secure password reset</li>
              <li>CI/CD workflows</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {["React","TypeScript","Tailwind","Node.js","Docker","SQL","Azure","CI/CD"].map((s) => (
            <span key={s} className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/40">{s}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="list-disc ml-5 mt-2">
          <li>B.Eng. in Software Technology, Aarhus University (2021–2025)</li>
          <li>Engineering Admission Course, Aarhus University (2019–2021)</li>
        </ul>
      </section>
    </section>
  );
}
