import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { JsonLdSchema } from "@/components/SEO/JsonLdSchema";

const expertise = [
  {
    title: "Emergency Medicine",
    body:
      "Dr. Okema's clinical work is grounded in emergency care for resource-limited settings, with experience across acute assessment, resuscitation, trauma care, internal medicine, and ICU support.",
  },
  {
    title: "Cardiovascular Disease",
    body:
      "His research interests include cardiovascular disease epidemiology, emergency cardiology, and practical systems that improve early recognition and care for high-risk patients.",
  },
  {
    title: "Maternal Health",
    body:
      "He studies maternal health outcomes with attention to the clinical realities of frontline facilities, referral pathways, and preventable complications in sub-Saharan Africa.",
  },
  {
    title: "Health Systems Strengthening",
    body:
      "Through training, program coordination, and implementation work, he focuses on translating evidence into usable protocols, team capacity, and durable care improvements.",
  },
];

const credentials = [
  "Medical Officer at St. Mary's Hospital Lacor, Gulu, Uganda",
  "Project Manager and Lead Trainer, Life + Limb Primary Trauma Care Foundation Northern Uganda Chapter",
  "Program Coordinator at MIMHA",
  "Clinical researcher focused on emergency medicine, cardiovascular disease, maternal health, and implementation science",
  "Trained in Medicine and Surgery at Gulu University Faculty of Medicine",
];

const contactLinks = [
  {
    label: "Email",
    value: "ojamesnelson@gmail.com",
    href: "mailto:ojamesnelson@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+256 776 994 589",
    href: "https://wa.me/256776994589?text=Hello%20Dr%20Okema%2C%20I%20would%20like%20to%20get%20in%20touch.",
    icon: MessageSquare,
  },
];

function Rule() {
  return <div className="my-9 h-px w-full bg-slate-200" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Dr. Okema James Nelson, MBChB | Medical Doctor & Clinical Researcher"
        description="Academic portfolio of Dr. Okema James Nelson, a Ugandan medical doctor and clinical researcher focused on emergency medicine, cardiovascular disease, maternal health, and health systems strengthening."
        image="https://drokema.com/Dr%20Okemas%20Profile%20photo.png"
        url="https://drokema.com/"
      />
      <JsonLdSchema type="person" />

      <div className="bg-white text-slate-900">
        <section className="container-academic flex min-h-[72vh] flex-col justify-center py-16 sm:py-20">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-medical-teal">
              Medical doctor and clinical researcher
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-medical-navy sm:text-6xl lg:text-7xl">
              Dr. Okema James Nelson
            </h1>
            <Rule />
            <p className="max-w-3xl font-serif text-3xl leading-tight text-slate-700 sm:text-4xl">
              Strengthening emergency, cardiovascular, and maternal care through
              clinical practice, research, and frontline training.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-medical-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-medical-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/research"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-medical-navy transition hover:border-medical-teal hover:text-medical-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2"
              >
                View Publications
              </Link>
            </div>
          </div>
        </section>

        <section className="container-academic max-w-5xl pb-16">
          <Rule />
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <h2 className="text-3xl font-semibold text-medical-navy">
              What is it like to work with Dr. Okema?
            </h2>
            <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Dr. Okema brings together bedside medicine, research discipline, and
                systems thinking. His work begins with the realities of patients and
                clinical teams, then asks what evidence, training, and coordination can
                make care safer and more reliable.
              </p>
              <p>
                He is especially interested in practical, context-aware solutions for
                emergency departments, cardiovascular care, maternal health, and
                resource-limited health systems across Northern Uganda and the wider
                region.
              </p>
            </div>
          </div>

          <Rule />
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div>
              <img
                src="/Dr Okemas Profile photo.png"
                alt="Dr. Okema James Nelson"
                className="aspect-[4/5] w-full max-w-sm rounded-md border border-slate-200 object-cover shadow-sm"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-medical-navy">
                Dr. Okema James Nelson, MBChB
              </h2>
              <p className="mt-2 text-lg font-semibold text-medical-teal">
                Medical Doctor | Clinical Researcher
              </p>
              <ul className="mt-7 space-y-3 text-base leading-7 text-slate-700">
                {credentials.map((credential) => (
                  <li key={credential} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-medical-teal" />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
              >
                More About Dr. Okema
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <Rule />
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <h2 className="text-3xl font-semibold text-medical-navy">How to Start?</h2>
            <div className="space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Simple: send a short note with the topic, timeline, and best way to
                reach you. Professional inquiries, collaborations, speaking invitations,
                training requests, and academic correspondence can all begin through the
                contact page.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-medical-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-medical-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2"
                >
                  Contact Dr. Okema
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-md border border-slate-200 p-4 transition hover:border-medical-teal"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <Icon className="mt-1 h-5 w-5 text-medical-teal" aria-hidden="true" />
                      <span>
                        <span className="block text-sm font-semibold text-slate-900">
                          {item.label}
                        </span>
                        <span className="block break-all text-sm text-slate-600 group-hover:text-medical-teal">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <Rule />
          <div>
            <h2 className="text-4xl font-semibold text-medical-navy">Expertise</h2>
            <div className="mt-9 divide-y divide-slate-200">
              {expertise.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-4 py-8 lg:grid-cols-[0.32fr_0.68fr]"
                >
                  <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-base leading-8 text-slate-700 sm:text-lg">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <Rule />
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <h2 className="text-3xl font-semibold text-medical-navy">The Rest</h2>
            <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Explore current research, clinical projects, outreach work, and recent
                writing from Dr. Okema's academic portfolio.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/clinical"
                  className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-5 py-2 text-sm font-semibold text-medical-navy transition hover:border-medical-teal hover:text-medical-teal"
                >
                  Clinical Work
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-5 py-2 text-sm font-semibold text-medical-navy transition hover:border-medical-teal hover:text-medical-teal"
                >
                  Projects
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-5 py-2 text-sm font-semibold text-medical-navy transition hover:border-medical-teal hover:text-medical-teal"
                >
                  Blog
                </Link>
              </div>
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <MapPin className="h-4 w-4 text-medical-teal" aria-hidden="true" />
                Gulu, Northern Uganda
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
