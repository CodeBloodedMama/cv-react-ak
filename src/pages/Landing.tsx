export default function Landing() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Hi, I’m <span className="text-blue-700 dark:text-blue-300">Alan Khamo</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Frontend-focused software engineer. I build clean UIs with React & Tailwind.
        </p>
        <div className="flex gap-3">
          <a href="/cv" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            View CV
          </a>
          <a href="/contact" className="px-4 py-2 rounded border">
            Contact me
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-200 to-violet-200 dark:from-blue-900 dark:to-violet-900" />
      </div>
    </section>
  );
}
