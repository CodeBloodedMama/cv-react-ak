export default function Contact() {
  return (
    <section className="max-w-lg grid gap-4">
      <h1 className="text-2xl font-bold">Contact me</h1>
      <p>Email: <a className="underline text-blue-700 dark:text-blue-300" href="mailto:AlanKhamo@gmail.com">AlanKhamo@gmail.com</a></p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const name = (form.elements.namedItem("name") as HTMLInputElement).value;
          const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
          window.location.href = `mailto:AlanKhamo@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
        }}
        className="grid gap-3 border p-4 rounded"
      >
        <input name="name" placeholder="Your name" className="border px-3 py-2 rounded" required />
        <textarea name="message" rows={4} placeholder="Message" className="border px-3 py-2 rounded" required />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </section>
  );
}
