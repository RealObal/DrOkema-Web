import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { JsonLdSchema } from "@/components/SEO/JsonLdSchema";
import { PublicationCard } from "@/components/ui/PublicationCard";

const impactMetrics = [
  {
    value: "120+",
    label: "Healthcare workers trained",
    description: "Emergency response, trauma care, and clinical mentorship in Northern Uganda.",
  },
  {
    value: "800+",
    label: "Research participants",
    description: "Participants enrolled in clinical studies and implementation research.",
  },
  {
    value: "2,000+",
    label: "Community beneficiaries",
    description: "Patients and families reached through outreach, training, and clinical programs.",
  },
  {
    value: "10+",
    label: "Partner facilities",
    description: "Clinical, academic, and public health collaborations across the region.",
  },
];

const aboutHighlights = [
  "Frontline physician with deep experience in emergency departments, ICU care, and high-acuity clinical medicine.",
  "Clinical research rooted in cardiovascular health, maternal outcomes, and emergency systems in resource-limited settings.",
  "Built operational programs for training, trauma response, and mental health support in Northern Uganda.",
];

const researchFocus = [
  "Emergency medicine systems",
  "Cardiovascular epidemiology",
  "Maternal and perinatal health",
  "Implementation science",
];

const featuredPublications = [
  {
    title:
      "Caregivers Acceptability and Uptake of Voluntary Medical Circumcision among Male Children Under 5 Years Old in Gulu City, Northern Uganda",
    authors:
      "Donald Otika, James Nelson Okema, Morrish Okello-Obol, Pebalo Francis Pebolo, Felix Bongomin, Ronald Olum, Harriet Ajilong, Peter Akera, Jimmyy Opee, Jackline Ayikoru",
    journal: "Scientific Reports",
    year: "2026",
    doi: "10.1038/s41598-026-37693-7",
  },
  {
    title:
      "Incidence of QT interval prolongation in patients receiving bedaquiline for drug-resistant tuberculosis in Sub-Saharan Africa: a protocol for systematic review and meta-analysis",
    authors: "Morrish Okello-Obol, Ivaan Pitua, James Nelson Okema, Doris Ekwem, Felix Bongomin, Ronald Olum",
    journal: "BMJ Open",
    year: "2025",
    doi: "10.1136/bmjopen-2024-096709",
  },
  {
    title:
      "Prevalence, types, and determinants of intimate-partner violence among pregnant women in Northern Uganda: a hospital-based cross-sectional study",
    authors: "Jerom Okot, Cinderella Anena, Nelson James Okema, et al.",
    journal: "BMC Public Health",
    year: "2025",
    doi: "10.1186/s12889-025-24465-7",
  },
];

const ongoingWork = [
  {
    title: "Life + Limb Primary Trauma Care Foundation, Northern Uganda Chapter",
    role: "Project Manager & Lead Trainer",
    summary:
      "Regional trauma and emergency response training aligned with global Primary Trauma Care standards.",
  },
  {
    title: "MIMHA: Maternal and Infant Mental Health in Africa",
    role: "Project Coordinator",
    summary:
      "Community-based mental health research and support services for pregnant women and new mothers.",
  },
  {
    title: "Cardiology Interest Group of Uganda",
    role: "Founder & Program Coordinator",
    summary:
      "National learning forum delivering ECG education and emergency cardiology mentorship.",
  },
];

const clinicalStrengths = [
  "Acute emergency care and triage in high-volume referral hospitals.",
  "Cardiovascular assessment, heart failure management, and arrhythmia evaluation.",
  "Context-aware clinical practice with constrained diagnostics and evolving referral pathways.",
];

const professionalLinks = [
  {
    label: "LinkedIn",
    detail: "linkedin.com/in/dr-okema",
    href: "https://www.linkedin.com/in/dr-okema",
  },
  {
    label: "X",
    detail: "x.com/DrJNELLY95",
    href: "https://x.com/DrJNELLY95",
  },
  {
    label: "ORCID",
    detail: "Profile available on request",
  },
  {
    label: "Google Scholar",
    detail: "Profile available on request",
  },
  {
    label: "ResearchGate",
    detail: "Profile available on request",
  },
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
  return <div className="my-10 h-px w-full bg-slate-200" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Dr. Okema James Nelson, MBChB | Physician-Scientist in Emergency & Cardiovascular Medicine"
        description="Explore the academic portfolio of Dr. Okema James Nelson, a Ugandan physician-scientist focused on emergency medicine, cardiovascular research, and health systems strengthening."
        image="https://drokema.com/Dr%20Okemas%20Profile%20photo.png"
        url="https://drokema.com/"
      />
      <JsonLdSchema type="person" />

      <main className="bg-white text-slate-900">
        <section
          className="relative overflow-hidden py-20 sm:py-28"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.35)), url('/Vcat For cover.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container-academic grid gap-12 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                Physician-Scientist | Emergency & Cardiovascular Medicine
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-medical-navy sm:text-6xl lg:text-7xl">
                Leading emergency and cardiovascular care for Uganda’s most vulnerable patients.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-700 sm:text-2xl">
                A physician-scientist grounded in frontline practice, clinical research, and systems strengthening across Northern Uganda.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-medical-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-medical-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2"
                >
                  Contact Dr. Okema
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/research"
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-medical-navy transition hover:border-medical-teal hover:text-medical-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2"
                >
                  View Publications
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {impactMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-3xl font-semibold text-medical-navy">{metric.value}</p>
                  <h2 className="mt-3 text-base font-semibold text-slate-900">{metric.label}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container-academic py-20">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                About Dr. Okema
              </p>
              <h2 className="text-4xl font-semibold text-medical-navy sm:text-5xl">
                Clinician-led research informed by urgent care, cardiovascular health, and maternal wellbeing.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Dr. Okema James Nelson blends hands-on emergency medicine with rigorous clinical research. His practice is centred on strengthening referral pathways, improving acute cardiovascular care, and advancing maternal health outcomes in Uganda.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {aboutHighlights.map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50">
              <img
                src="/Dr Okemas Profile photo.png"
                alt="Portrait of Dr. Okema James Nelson"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="expertise" className="bg-[var(--bg-section-alt)] py-20">
          <div className="container-academic">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                Areas of expertise
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                Clinical and research focus areas that define his portfolio.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Care delivery, research, and training are integrated through a consistent emphasis on high-risk acute care, practical diagnostics, and locally sustainable systems.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {researchFocus.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-medical-navy">{item}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    {item === "Emergency medicine systems" && "Strengthening emergency department workflows, triage, and team capacity in resource-limited hospitals."}
                    {item === "Cardiovascular epidemiology" && "Researching patterns of heart disease, ECG interpretation, and acute cardiology care in Uganda."}
                    {item === "Maternal and perinatal health" && "Improving outcomes for pregnant women and newborns through clinical research and community-focused care."}
                    {item === "Implementation science" && "Translating evidence into practical protocols, training, and sustainable programs for health teams."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="container-academic py-20">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                Featured Research
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                Select publications showcasing clinical research impact.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                A curated selection of peer-reviewed work and protocols that reflects his academic focus on emergency care, cardiovascular health, and maternal outcomes.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-medical-navy transition hover:border-medical-teal hover:text-medical-teal"
              >
                View full publications
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredPublications.map((publication) => (
              <PublicationCard
                key={publication.title}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                doi={publication.doi}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="bg-[var(--bg-section-accent)] py-20">
          <div className="container-academic">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                Ongoing work
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                Operational leadership across research, training, and community health.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Current programs bridge academic inquiry with practical systems improvement in trauma care, mental health, and cardiovascular education.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {ongoingWork.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-medical-navy">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.role}</p>
                  <p className="mt-4 text-base leading-7 text-slate-700">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clinical" className="container-academic py-20">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                Clinical impact
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                Clinical practice shaped by research and real-world patient care.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                His clinical work is grounded in medical leadership at St. Mary's Hospital Lacor and shaped by continuous collaboration with academic and public health partners.
              </p>
            </div>
            <div className="grid gap-6">
              {clinicalStrengths.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
                  <p className="text-base leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recognition" className="bg-[var(--bg-section-alt)] py-20">
          <div className="container-academic">
            <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                  Recognition
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                  Partnerships and collaborations in clinical education, research, and emergency care.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                  His portfolio is anchored by long-term collaborations with St. Mary's Hospital Lacor, Gulu University, and international emergency care networks.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-base font-semibold text-medical-navy">Clinical & academic partnerships</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Building durable systems for emergency, trauma, and maternity care through local and regional collaboration.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-base font-semibold text-medical-navy">Training and capacity building</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Delivering applied training programs for clinicians, first responders, and health workers in Northern Uganda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="container-academic py-20">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                Endorsements
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                Professional references and collaboration statements are available upon request.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Dr. Okema continues to build collaborative relationships across research, clinical care, and health system leadership.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-slate-700 shadow-sm">
              <p className="text-lg font-semibold text-slate-900">
                "A clinician-scientist who brings evidence-driven insight directly to the bedside and to research programs in Northern Uganda."
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-medical-teal">Available upon request</p>
            </div>
          </div>
        </section>

        <section id="professional-links" className="bg-[var(--bg-section-accent)] py-20">
          <div className="container-academic">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                Professional links
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                Academic profiles and network connections.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {professionalLinks.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="font-semibold text-medical-navy">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.detail}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
                    >
                      Open profile
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container-academic py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(0,163,193,0.16),_transparent_30%),white] p-12 shadow-lg">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-medical-teal">
                  Contact
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-medical-navy sm:text-5xl">
                  Partner with Dr. Okema for research, clinical collaboration, or training.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                  For academic inquiries, clinical collaboration, speaking invitations, or program development, start with a brief message including the topic and timeline.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-medical-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-medical-navy-light"
                  >
                    Open contact form
                  </Link>
                  <a
                    href="mailto:ojamesnelson@gmail.com"
                    className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-medical-navy transition hover:border-medical-teal hover:text-medical-teal"
                  >
                    Email directly
                  </a>
                </div>
              </div>

              <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-medical-teal" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-medical-navy">Email</p>
                    <p className="mt-1 text-sm text-slate-600">ojamesnelson@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="mt-1 h-5 w-5 text-medical-teal" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-medical-navy">WhatsApp</p>
                    <a
                      href="https://wa.me/256776994589?text=Hello%20Dr%20Okema%2C%20I%20would%20like%20to%20get%20in%20touch."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-semibold text-medical-teal hover:text-medical-navy"
                    >
                      +256 776 994 589
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-medical-teal" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-medical-navy">Location</p>
                    <p className="mt-1 text-sm text-slate-600">Gulu, Northern Uganda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
