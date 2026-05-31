import { useState } from "react";
import { Linkedin, Mail, MapPin, MessageSquare, Send, Twitter } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_PHONE = "+256776994589";
const WHATSAPP_MESSAGE = "Hello Dr Okema, I would like to get in touch.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const subjectOptions = [
  { value: "research", label: "Research Collaboration" },
  { value: "speaking", label: "Speaking Invitation" },
  { value: "training", label: "Training or Workshop" },
  { value: "academic", label: "Academic Inquiry" },
  { value: "clinical", label: "Clinical or Professional Inquiry" },
  { value: "media", label: "Media Request" },
  { value: "other", label: "Other" },
];

const contacts = [
  { label: "Email", value: "ojamesnelson@gmail.com", href: "mailto:ojamesnelson@gmail.com", icon: Mail },
  { label: "WhatsApp", value: WHATSAPP_PHONE, href: WHATSAPP_LINK, icon: MessageSquare },
  { label: "LinkedIn", value: "linkedin.com/in/dr-okema", href: "https://www.linkedin.com/in/dr-okema", icon: Linkedin },
  { label: "X", value: "x.com/DrJNELLY95", href: "https://x.com/DrJNELLY95", icon: Twitter },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    preferredTime: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) return;

    if (formData.message.trim().length < 20) {
      toast({
        title: "Please add more detail",
        description: "A short summary helps route your inquiry safely and accurately.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast({
      title: "Message prepared",
      description:
        "Thank you. This demo currently confirms locally; connect a secure backend before production launch.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      preferredTime: "",
      message: "",
      website: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fieldClass =
    "mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-medical-teal focus:outline-none focus:ring-2 focus:ring-medical-teal/30";

  return (
    <>
      <SEOHead
        title="Contact Dr. Okema James Nelson | Academic and Professional Inquiries"
        description="Contact Dr. Okema James Nelson for research collaborations, academic inquiries, speaking engagements, clinical projects, and professional correspondence."
        url="https://drokema.com/contact"
      />
      <MinimalPage
        eyebrow="Contact"
        title="Contact"
        intro="For collaborations, invitations, training requests, academic inquiries, clinical projects, or professional correspondence."
      >
        <Rule />
        <div className="grid gap-10 lg:grid-cols-[0.62fr_0.38fr]">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
                  Full name *
                </label>
                <input
                  autoComplete="name"
                  className={fieldClass}
                  id="name"
                  maxLength={80}
                  name="name"
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  type="text"
                  value={formData.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
                  Email address *
                </label>
                <input
                  autoComplete="email"
                  className={fieldClass}
                  id="email"
                  maxLength={120}
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  type="email"
                  value={formData.email}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-800">
                  Phone or WhatsApp
                </label>
                <input
                  autoComplete="tel"
                  className={fieldClass}
                  id="phone"
                  maxLength={30}
                  name="phone"
                  onChange={handleChange}
                  placeholder="+256 ..."
                  type="tel"
                  value={formData.phone}
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-semibold text-slate-800">
                  Preferred contact time
                </label>
                <input
                  className={fieldClass}
                  id="preferredTime"
                  maxLength={80}
                  name="preferredTime"
                  onChange={handleChange}
                  placeholder="Morning, afternoon, or preferred day"
                  type="text"
                  value={formData.preferredTime}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-800">
                Inquiry type *
              </label>
              <select
                className={fieldClass}
                id="subject"
                name="subject"
                onChange={handleChange}
                required
                value={formData.subject}
              >
                <option value="">Select a subject</option>
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                autoComplete="off"
                id="website"
                name="website"
                onChange={handleChange}
                tabIndex={-1}
                type="text"
                value={formData.website}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-800">
                Message *
              </label>
              <textarea
                className={`${fieldClass} min-h-40 resize-y`}
                id="message"
                maxLength={1200}
                name="message"
                onChange={handleChange}
                placeholder="Briefly describe your inquiry. Please avoid sending sensitive records through this general form."
                required
                value={formData.message}
              />
              <p className="mt-2 text-xs text-slate-500">
                {formData.message.length}/1200 characters. Minimum 20 characters.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-medical-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-medical-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Preparing..." : "Submit Request"}
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>

          <aside className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h2 className="text-2xl font-semibold text-medical-navy">Direct Contact</h2>
            <div className="mt-6 space-y-5">
              {contacts.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4"
                  >
                    <Icon className="mt-1 h-5 w-5 text-medical-teal" aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-semibold text-slate-900">{item.label}</span>
                      <span className="block break-all text-sm text-slate-600 group-hover:text-medical-teal">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-medical-teal" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold text-slate-900">Location</span>
                  <span className="block text-sm text-slate-600">Gulu, Northern Uganda</span>
                </span>
              </div>
            </div>
            <p className="mt-8 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
              Typical response time is within 6 hours for professional inquiries. Please avoid
              sending sensitive medical records until a secure channel is confirmed.
            </p>
          </aside>
        </div>
      </MinimalPage>
    </>
  );
}
