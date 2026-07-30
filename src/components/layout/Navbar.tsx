import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Clinical", href: "/clinical" },
  { name: "Publications", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    const path = href.split("?")[0];
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-okema-cream/95 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-okema-line" />
      <nav className="container-academic" aria-label="Primary navigation">
        <div className="flex min-h-24 flex-col items-center justify-center gap-4 py-4 lg:min-h-28">
          <Link to="/" className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2">
            <img
              src="/favicon.png"
              alt="Dr. Okema Logo"
              className="h-14 w-auto object-contain md:h-16"
              decoding="async"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2 ${
                  isActive(item.href)
                    ? "text-okema-rust"
                    : "text-okema-ink hover:text-okema-rust"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-2 bg-okema-ink px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-okema-rust"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Appointment
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-8 rounded-md p-2 text-okema-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="animate-fade-in border-t border-okema-line bg-okema-cream py-4 lg:hidden">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2 ${
                    isActive(item.href)
                      ? "text-okema-rust"
                      : "text-okema-ink hover:text-okema-rust"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
