import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, Linkedin, MapPin, Send, Twitter, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp contact - replace with your full international phone number
  const WHATSAPP_PHONE = "+256776994589"; // updated to user's number
  const WHATSAPP_MESSAGE = "Hello Dr Okema, I would like to discuss...";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for your message. I will respond as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="section-academic bg-accent-gradient">
      <div className="container-academic">
        <SectionHeader
          title="Contact"
          subtitle="For research collaborations, speaking invitations, or professional inquiries, please reach out using the form below or through direct contact methods."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="research">Research Collaboration</option>
                  <option value="speaking">Speaking Invitation</option>
                  <option value="academic">Academic Inquiry</option>
                  <option value="clinical">Clinical Consultation</option>
                  <option value="media">Media Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-academic-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Direct Contact
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:ojamesnelson@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 rounded-md bg-accent group-hover:bg-primary/10 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      Email
                    </p>
                    <p className="text-sm text-muted-foreground">ojamesnelson@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/dr-okema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 rounded-md bg-accent group-hover:bg-primary/10 transition-colors">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/dr-okema</p>
                  </div>
                </a>

                <a
                  href="http://x.com/DrJNELLY95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 rounded-md bg-accent group-hover:bg-primary/10 transition-colors">
                    <Twitter size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      X (Twitter)
                    </p>
                    <p className="text-sm text-muted-foreground">x.com/DrJNELLY95</p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 rounded-md bg-accent group-hover:bg-primary/10 transition-colors">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground">{WHATSAPP_PHONE}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-accent">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Gulu, Northern Uganda</p>
                  </div>
                </div>
              </div>

              <div className="divider-academic" />

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  Response Time
                </h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to inquiries within 6 hours of receiving them. For urgent 
                  clinical matters, please contact the appropriate healthcare facility directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
