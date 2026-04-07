import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Clinical", href: "/clinical" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A3C1] to-transparent" />
      <nav className="container-academic">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/favicon.png"
              alt="Dr. Okema Logo"
              className="h-10 w-auto md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-all text-sm font-medium ${
                  item.name === "Contact"
                    ? "rounded-full border border-[#00A3C1] bg-[#ffffff] px-4 py-2 text-[#1B2B48] shadow-sm hover:bg-[#00A3C1] hover:text-white"
                    : isActive(item.href)
                    ? "text-[#1B2B48]"
                    : "text-[#0E7490] hover:text-[#00A3C1]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1B2B48]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#F1F5F9] bg-white animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-all ${
                    item.name === "Contact"
                      ? "inline-flex items-center justify-center rounded-full border border-[#00A3C1] bg-[#FFFFFF] px-4 py-2 text-[#1B2B48] hover:bg-[#00A3C1] hover:text-white"
                      : isActive(item.href)
                      ? "text-[#1B2B48]"
                      : "text-[#0E7490] hover:text-[#00A3C1]"
                  }`}
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
