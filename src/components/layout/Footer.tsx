import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-okema-ink text-white">
      <div className="absolute left-0 right-0 top-0 h-px bg-okema-gold/50" />
      <div className="container-academic py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.7fr_1fr] md:gap-12">
          <div>
            <img
              src="/favicon.png"
              alt="Dr. Okema Logo"
              className="mb-5 h-20 w-auto object-contain"
            />
            <h3 className="mb-4 font-serif text-2xl font-semibold text-white">
              Dr. Okema James Nelson
            </h3>
            <p className="max-w-sm text-sm leading-7 text-white/72">
              Medical Doctor, Clinical Researcher, and advocate for improved emergency
              and cardiovascular care in resource-limited settings.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-okema-gold">
              Portfolio
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/about" className="text-sm text-white/72 transition-colors hover:text-white">
                About
              </Link>
              <Link to="/clinical" className="text-sm text-white/72 transition-colors hover:text-white">
                Clinical
              </Link>
              <Link to="/research" className="text-sm text-white/72 transition-colors hover:text-white">
                Research
              </Link>
              <Link to="/projects" className="text-sm text-white/72 transition-colors hover:text-white">
                Programs
              </Link>
              <Link to="/contact" className="text-sm text-white/72 transition-colors hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-okema-gold">
              Contact
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:ojamesnelson@gmail.com"
                className="flex items-center space-x-3 text-sm text-white/72 transition-colors hover:text-white"
              >
                <Mail size={16} />
                <span>ojamesnelson@gmail.com</span>
              </a>
              <a
                href="https://wa.me/256776994589?text=Hello%20Dr%20Okema%2C%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-white/72 transition-colors hover:text-white"
              >
                <MessageSquare size={16} />
                <span>+256 776 994 589</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dr-okema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-white/72 transition-colors hover:text-white"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-white/72">
                <MapPin size={16} />
                <span>Gulu, Northern Uganda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-white/12" />

        <div className="flex flex-col items-center justify-between text-sm text-white/60 md:flex-row">
          <p>&copy; {currentYear} Dr. Okema James Nelson. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <a href="https://drokema.com" className="transition-colors hover:text-white">
              drokema.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
