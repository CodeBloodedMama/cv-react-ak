import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-blue-950/40 ${
          isActive
            ? "text-blue-700 dark:text-blue-300 font-semibold"
            : "text-gray-700 dark:text-gray-200"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
          <NavLink to="/" className="font-bold text-blue-700 dark:text-blue-300">
            Alan Khamo - Software Engineer with full stack flair
          </NavLink>
          <div className="hidden md:flex gap-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/cv">CV</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-1 border rounded"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              className="md:hidden px-3 py-1 border rounded"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden px-4 py-2 border-t dark:border-gray-800">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/cv">CV</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Alan Khamo
      </footer>
    </div>
  );
}
