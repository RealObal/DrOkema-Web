import { ExternalLink } from "lucide-react";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";
import { Counter } from "@/components/ui/Counter";

const projects = [
  {
    title: "Life + Limb Primary Trauma Care Foundation, Northern Uganda Chapter",
    role: "Project Manager & Lead Trainer",
    href: "https://primarytraumacare.org",
    description:
      "Regional trauma prevention and emergency response capacity-building program in collaboration with the Life + Limb Primary Trauma Care Foundation, Oxford.",
    outcomes: [
      "Trained motorcycle taxi operators, community members, and medical students in basic life support, hemorrhage control, and first response.",
      "Delivered standardized curricula with pre-post competency assessments.",
      "Distributed helmets and reflector jackets as injury-prevention interventions.",
      "Coordinated health facilities, police, and community leaders to strengthen referral pathways.",
    ],
    partners: "Life + Limb International, Gulu University, Ministry of Health Uganda",
  },
  {
    title: "MIMHA Project",
    role: "Project Coordinator",
    href: "https://mimha.org",
    description:
      "Community-based mental health and substance use intervention program aligned with national and WHO mental health guidelines.",
    outcomes: [
      "Reached community members with structured counseling, psychoeducation, and referral services.",
      "Trained community health workers, peer supporters, and volunteers.",
      "Led community outreaches and stigma-reduction dialogues.",
      "Established reporting, monitoring, and quality improvement workflows.",
    ],
    partners: "Makerere University, GRRH Mental Health Department, Acholi Women In Health",
  },
  {
    title: "Northern Uganda Village Health Outreach Project",
    role: "Project Chairperson and Medical Lead",
    href: "https://nuvhop.com",
    description:
      "Multi-institutional community health outreach program delivering preventive and primary healthcare services to underserved populations.",
    outcomes: [
      "Managed partnerships with Gulu University, University of Manchester, and Ghent University.",
      "Led community outreaches across Amuru, Gulu, and Omoro districts.",
      "Coordinated student volunteers through recruitment, training, and supervision.",
      "Strengthened referral pathways with district health offices and local facilities.",
    ],
    partners: "TASO Uganda, RHU Uganda, Youth Alive Uganda, University of Manchester, Ghent University",
  },
  {
    title: "Cardiology Interest Group of Uganda",
    role: "Founder & Program Coordinator",
    description:
      "National cardiology learning forum delivering weekly case-based webinars on ECG interpretation and emergency cardiology management.",
    outcomes: [
      "Organizes virtual sessions on basic and advanced ECG interpretation.",
      "Facilitates teaching on acute cardiology emergencies including ACS, heart failure, and life-threatening arrhythmias.",
      "Coordinates mentorship from Ugandan cardiologists and international faculty.",
      "Supports continuous professional development through structured case discussion.",
    ],
    partners: "St. Mary's Hospital Lacor, Emergency Medicine Interest Group of Nigeria, Uganda Heart Institute",
  },
];

const impact = [
  { label: "Healthcare Workers Trained", value: 120, suffix: "+" },
  { label: "Households Served", value: 2000, suffix: "+" },
  { label: "Research Participants", value: 800, suffix: "+" },
  { label: "Partner Facilities", value: 10, suffix: "+" },
];

export default function Projects() {
  return (
    <MinimalPage
      eyebrow="Projects"
      title="Projects & Leadership"
      intro="Programs and partnerships focused on emergency care, community health, mental health, and clinical education in Northern Uganda."
    >
      <Rule />
      <section className="divide-y divide-slate-200">
        {projects.map((project) => (
          <article key={project.title} className="grid gap-6 py-8 first:pt-0 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <h2 className="text-2xl font-semibold leading-snug text-slate-900">
                {project.title}
              </h2>
              <p className="mt-2 text-sm font-semibold text-medical-teal">{project.role}</p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
            <div>
              <p className="text-base leading-8 text-slate-700 sm:text-lg">{project.description}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Key Outcomes
              </h3>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-medical-teal" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-slate-500">
                <span className="font-semibold text-slate-700">Partners:</span> {project.partners}
              </p>
            </div>
          </article>
        ))}
      </section>

      <Rule />
      <section>
        <h2 className="text-3xl font-semibold text-medical-navy">Collective Impact</h2>
        <div className="mt-8 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => (
            <div key={item.label} className="border-t border-slate-200 pt-5">
              <div className="text-4xl font-semibold text-medical-navy">
                <Counter end={item.value} suffix={item.suffix} />
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </MinimalPage>
  );
}
