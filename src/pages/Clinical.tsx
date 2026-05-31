import { Download } from "lucide-react";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";

const appointments = [
  {
    title: "Medical Officer",
    organization: "St. Mary's Hospital Lacor, Gulu",
    period: "2025 - Present",
    location: "Gulu, Uganda",
    description:
      "Provides inpatient and outpatient clinical care across the Emergency Department, Internal Medicine, Obstetrics, and Gynaecology.",
  },
  {
    title: "Medical Clinical Officer (OPD-Incharge)",
    organization: "Dr. Ambrosoli Memorial Hospital, Kalongo",
    period: "2020 - 2021",
    location: "Kalongo, Agago District, Uganda",
    description:
      "Managed high-volume outpatient clinics and inpatient wards in a resource-limited setting.",
  },
  {
    title: "District HIV/TB Focal Person",
    organization: "Infectious Diseases Institute, Makerere University",
    period: "2019 - 2020",
    location: "Pakwach District, Uganda",
    description:
      "Coordinated HIV/TB services across 15 health facilities, including mentorship, data quality improvement, and implementation of national treatment guidelines.",
  },
];

const emphasis = [
  {
    title: "Emergency & Trauma Care",
    body:
      "Management of acute trauma, medical emergencies, and critical care in settings with limited resources, including Primary Trauma Care training for lay first responders.",
  },
  {
    title: "Internal Medicine",
    body:
      "Care for cardiovascular conditions, infectious diseases, and chronic illness, with special interest in hypertension, heart failure, and arrhythmias in African populations.",
  },
  {
    title: "Resource-Limited Settings",
    body:
      "Clinical decision-making with constrained diagnostics and therapeutics, adapting guidelines to local contexts while maintaining quality of care.",
  },
  {
    title: "Teaching Hospital Experience",
    body:
      "Bedside teaching, case presentations, and supervision of medical students at St. Mary's Hospital Lacor.",
  },
];

export default function Clinical() {
  return (
    <MinimalPage
      eyebrow="Clinical Practice"
      title="Clinical Practice"
      intro="Frontline experience in emergency medicine, internal medicine, trauma care, teaching, and systems-aware clinical practice."
    >
      <Rule />
      <section className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
        <h2 className="text-3xl font-semibold text-medical-navy">Appointments</h2>
        <div className="divide-y divide-slate-200">
          {appointments.map((item) => (
            <article key={item.title + item.organization} className="py-7 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm font-semibold text-medical-teal">{item.period}</p>
              </div>
              <p className="mt-2 text-base font-semibold text-slate-700">{item.organization}</p>
              <p className="mt-1 text-sm text-slate-500">{item.location}</p>
              <p className="mt-4 text-base leading-8 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Rule />
      <section>
        <h2 className="text-3xl font-semibold text-medical-navy">Areas of Clinical Emphasis</h2>
        <div className="mt-8 divide-y divide-slate-200">
          {emphasis.map((item) => (
            <article key={item.title} className="grid gap-4 py-7 lg:grid-cols-[0.32fr_0.68fr]">
              <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-base leading-8 text-slate-700 sm:text-lg">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Rule />
      <a
        href="/documents/Dr.Okema_Resume_2025.pdf"
        download="Dr.Okema_Resume_2025.pdf"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-medical-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-medical-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download Full CV
      </a>
    </MinimalPage>
  );
}
