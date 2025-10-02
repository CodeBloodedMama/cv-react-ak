export default function Landing() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <div className="flex justify-center md:justify-start">
        <img
          src="/public/profilpic.png"
          className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-blue-600 dark:border-blue-400"
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-4xl font-bold leading-tight">
          Hi, I’m{" "}
          <span className="text-blue-700 dark:text-blue-300">Alan Khamo</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I’m a software engineer specialized in{" "}
          <strong>modern frontend development</strong> with React, TypeScript
          and Tailwind.  
          I love building intuitive, responsive, and accessible UIs that not
          only look great but also deliver real value for users.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          With a strong background in <strong>UX, API integrations, and
          scalable systems</strong>, I thrive in cross-functional teams where
          design and technology meet.  
          My focus is creating clean code and smooth user experiences.
        </p>
        <div className="flex gap-3">
          <a
            href="/cv"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            View CV
          </a>
          <a
            href="/contact"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
