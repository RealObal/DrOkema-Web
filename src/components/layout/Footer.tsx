import { Link } from "react-router-dom";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="container-academic py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <img
              src="/Nelly logo.png"
              alt="Dr. Okema Logo"
              className="h-20 w-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-serif font-semibold text-white mb-4">
              Dr. Okema James Nelson
            </h3>
            <p className="text-sm text-sky-100 leading-relaxed">
              Medical Doctor, Clinical Researcher, and advocate for improved emergency
              and cardiovascular care in resource-limited settings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/research" className="text-sm text-sky-100 hover:text-white transition-colors">
                Research
              </Link>
              <Link to="/cv" className="text-sm text-sky-100 hover:text-white transition-colors">
                Download CV
              </Link>
              <Link to="/contact" className="text-sm text-sky-100 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:ojamesnelson@gmail.com"
                className="flex items-center space-x-2 text-sm text-sky-100 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>ojamesnelson@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dr-okema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-sky-100 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-sky-100">
                   <MapPin size={16} />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sky-100">
          <p>© {currentYear} RealObal inc Made for Dr.Okema. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <a href="https://drokema.com" className="hover:text-white transition-colors">
              drokema.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
