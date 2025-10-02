export default function About() {
  return (
    <section className="relative overflow-hidden">
      {/* Dekorative gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 -right-16 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* HERO */}
      <header className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-[auto,1fr]">
   

        {/* Tekst */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-blue-300">
            <span className="inline-block size-2 rounded-full bg-blue-500" />
            Available for frontend roles
          </p>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            I design & build thoughtful interfaces.
          </h1>

          <p className="text-pretty text-lg text-gray-700 dark:text-gray-300">
            I’m <strong>Alan Khamo</strong> — a frontend-leaning software engineer who turns
            complexity into clear, fast, and accessible UIs. I work primarily with{" "}
            <strong>React, TypeScript and Tailwind</strong>, and care deeply about UX, performance,
            and clean abstractions.
          </p>

          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind", "UX", "API integration"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-sm text-gray-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/cv"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
            >
              View CV
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
            >
              Contact me
            </a>
          </div>
        </div>
      </header>

      {/* 3 KORT: What I do */}
      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Product-minded frontend",
            body:
              "Reusable components, design systems, and state kept simple. I ship reliably and iterate with data.",
          },
          {
            title: "UX first",
            body:
              "Accessible, device-friendly, and fast. I sweat the details: focus states, motion, and micro-copy.",
          },
          {
            title: "Pragmatic full-stack",
            body:
              "Comfortable with APIs, auth, CI/CD and containers—just enough backend to unblock great UX.",
          },
        ].map((c) => (
          <article
            key={c.title}
            className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-base font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{c.body}</p>
          </article>
        ))}
      </section>

      {/* VALUES + TOOLBOX */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-2">
        {/* Values */}
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-semibold">Principles I work by</h2>
          <ul className="mt-4 space-y-3 text-gray-800 dark:text-gray-200">
            <li>
              <strong>Clarity over cleverness.</strong> Fewer concepts, stronger affordances,
              better maintenance.
            </li>
            <li>
              <strong>Accessibility is table stakes.</strong> Keyboard, contrast, motion—baked in
              from day one.
            </li>
            <li>
              <strong>Measure what matters.</strong> Latency, vitals, and user success—not just LOC.
            </li>
          </ul>
        </div>

        {/* Toolbox */}
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-semibold">Toolbox</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Tailwind",
              "Zustand",
              "React Hook Form",
              "Vite",
              "Node.js",
              "REST",
              "Docker",
              "CI/CD",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full bg-gradient-to-br from-blue-600/10 to-violet-600/10 px-3 py-1 text-sm text-blue-800 dark:text-blue-200"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NOW + CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px]">
          <div className="rounded-2xl bg-white/80 p-6 backdrop-blur dark:bg-gray-950/70">
            <div className="grid gap-6 md:grid-cols-[1fr,auto] md:items-center">
              <div>
                <h2 className="text-xl font-semibold">What I’m focused on now</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Sharpening my React patterns, performance profiling, and design system thinking.
                  I’m excited to join a team where UX quality matters.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="/cv"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
                >
                  View CV
                </a>
                <a
                  href="/contact"
                  className="rounded-lg border border-white/30 bg-white/60 px-4 py-2 backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  Let’s talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
