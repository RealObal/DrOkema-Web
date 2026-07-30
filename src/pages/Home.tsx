import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Mail, MapPin, MessageSquare } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";
import { JsonLdSchema } from "@/components/SEO/JsonLdSchema";

const stats = [
  { value: "120+", label: "Health workers trained" },
  { value: "10+", label: "Partner facilities" },
  { value: "800+", label: "Research participants" },
  { value: "2k+", label: "Community beneficiaries" },
];

const features = [
  {
    title: "Clinical Care",
    image: "/Cinical photo .jpeg",
    text: "Emergency medicine, cardiovascular assessment, acute triage, and patient-centered care in high-pressure referral settings.",
    href: "/clinical",
  },
  {
    title: "Research & Publications",
    image: "/Lung institute conference.jpeg",
    text: "Peer-reviewed work across cardiovascular epidemiology, maternal health, tuberculosis therapeutics, and implementation science.",
    href: "/research",
  },
  {
    title: "Training & Programs",
    image: "/Life+Limb.jpeg",
    text: "Capacity building in trauma response, emergency systems, cardiology education, and community health partnerships.",
    href: "/projects",
  },
];

const publications = [
  "Caregivers acceptability and uptake of voluntary medical circumcision among male children under 5 years old in Gulu City.",
  "Incidence of QT interval prolongation in patients receiving bedaquiline for drug-resistant tuberculosis in Sub-Saharan Africa.",
  "Prevalence, types, and determinants of intimate-partner violence among pregnant women in Northern Uganda.",
];

const credentials = [
  "Medical Doctor and clinical researcher based in Northern Uganda.",
  "Founder and coordinator, Cardiology Interest Group of Uganda.",
  "Project leadership with Life + Limb Primary Trauma Care Foundation.",
  "Research coordination in maternal and infant mental health programs.",
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="Dr. Okema James Nelson | Physician, Clinical Researcher & Medical Educator"
        description="Professional medical portfolio for Dr. Okema James Nelson, focused on emergency medicine, cardiovascular care, clinical research, and health systems strengthening in Uganda."
        image="https://drokema.com/Dr%20Okemas%20Profile%20photo.png"
        url="https://drokema.com/"
      />
      <JsonLdSchema type="person" />

      <main className="bg-okema-cream text-okema-ink">
        <section className="relative min-h-[calc(100vh-112px)] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Vcat For cover.jpeg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/38 to-black/8" aria-hidden="true" />

          <div className="container-academic relative flex min-h-[calc(100vh-112px)] items-center py-20">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-okema-gold">
                Physician. Researcher. Medical Educator.
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
                Dr. Okema James Nelson
              </h1>
              <p className="mt-5 max-w-2xl font-serif text-2xl leading-tight text-white/92 sm:text-3xl">
                Emergency and cardiovascular care shaped by research, teaching, and service in Northern Uganda.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="btn-reference bg-okema-gold text-okema-ink hover:bg-white" to="/contact">
                  Book a consultation
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link className="btn-reference border border-white/70 bg-white/10 text-white hover:bg-white hover:text-okema-ink" to="/research">
                  View credentials
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-reference">
          <div className="container-academic grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div className="relative">
              <img
                src="/Dr Okemas Profile photo.png"
                alt="Dr. Okema James Nelson"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white px-6 py-5 shadow-reference">
                <p className="font-serif text-4xl font-semibold text-okema-ink">J.N.O</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-okema-olive">Medical portfolio</p>
              </div>
            </div>

            <div>
              <p className="eyebrow-reference">About Dr. Okema</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-okema-ink sm:text-5xl">
                A clinician-scientist focused on practical care systems for patients who need timely, excellent medicine.
              </h2>
              <p className="mt-6 text-lg leading-8 text-okema-muted">
                Dr. Okema brings together frontline emergency practice, cardiovascular medicine, academic research, and medical education. This portfolio is structured for clinical collaborators, academic partners, media teams, and patients seeking a clear view of his work.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t border-okema-line pt-5">
                    <p className="font-serif text-4xl font-semibold text-okema-rust">{stat.value}</p>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-okema-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-academic">
            <div className="grid gap-8 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="group bg-okema-cream">
                  <img src={feature.image} alt="" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold text-okema-ink">{feature.title}</h3>
                    <p className="mt-4 text-base leading-7 text-okema-muted">{feature.text}</p>
                    <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-okema-rust transition group-hover:text-okema-ink" to={feature.href}>
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-reference">
          <div className="container-academic grid gap-12 lg:grid-cols-[0.48fr_0.52fr]">
            <div>
              <p className="eyebrow-reference">Research, Publications & Credentials</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-okema-ink sm:text-5xl">
                Evidence-led work across emergency care, cardiovascular health, and maternal outcomes.
              </h2>
              <Link className="btn-reference mt-8 bg-okema-ink text-white hover:bg-okema-rust" to="/research">
                Explore publications
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-8">
              <div className="grid gap-4">
                {publications.map((item) => (
                  <p key={item} className="border-b border-okema-line pb-4 text-lg leading-8 text-okema-muted">
                    {item}
                  </p>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {credentials.map((item) => (
                  <div key={item} className="bg-white p-5 text-sm font-semibold leading-6 text-okema-ink shadow-reference">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-okema-ink py-16 text-white sm:py-20">
          <div className="container-academic grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <div>
              <p className="eyebrow-reference text-okema-gold">Listen. Watch. Read.</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Medical insight, conference work, community programs, and media-ready expertise.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["/Conference 1.jpeg", "/Task Force Meeting .jpeg", "/outreach day 3.jpeg", "/Awarding Medical quiz .jpeg"].map((image) => (
                <img key={image} src={image} alt="" className="aspect-square w-full object-cover" />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-reference">
          <div className="container-academic">
            <div className="grid gap-10 border-y border-okema-line py-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
              <div>
                <p className="eyebrow-reference">Appointments & Collaboration</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight text-okema-ink sm:text-5xl">
                  Contact Dr. Okema for patient referrals, research partnerships, speaking, or training.
                </h2>
              </div>
              <div className="space-y-5 text-okema-muted">
                <a className="contact-row" href="mailto:ojamesnelson@gmail.com">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  ojamesnelson@gmail.com
                </a>
                <a className="contact-row" href="https://wa.me/256776994589?text=Hello%20Dr%20Okema%2C%20I%20would%20like%20to%20get%20in%20touch." target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  +256 776 994 589
                </a>
                <p className="contact-row">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  Gulu, Northern Uganda
                </p>
                <Link className="btn-reference bg-okema-rust text-white hover:bg-okema-ink" to="/contact">
                  Open contact form
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
