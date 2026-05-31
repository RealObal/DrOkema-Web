import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3C1] to-transparent" />
      <nav className="container-academic" aria-label="Primary navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3C1] focus-visible:ring-offset-2">
            <img
              src="/favicon.png"
              alt="Dr. Okema Logo"
              className="h-10 w-auto md:h-14 object-contain"
              decoding="async"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3C1] focus-visible:ring-offset-2 ${
                  isActive(item.href)
                    ? "bg-slate-100 text-[#1B2B48]"
                    : "text-[#0E7490] hover:text-[#00A3C1]"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-md p-2 text-[#1B2B48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3C1] focus-visible:ring-offset-2"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden py-4 border-t border-[#F1F5F9] bg-white animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-3 text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3C1] focus-visible:ring-offset-2 ${
                    isActive(item.href)
                      ? "bg-slate-100 text-[#1B2B48]"
                      : "text-[#0E7490] hover:text-[#00A3C1]"
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
