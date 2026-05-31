import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";

type TabType = "published" | "preprints" | "under-review" | "ongoing";

const tabs: { id: TabType; label: string }[] = [
  { id: "published", label: "Published" },
  { id: "preprints", label: "Preprints" },
  { id: "under-review", label: "Under Review" },
  { id: "ongoing", label: "Ongoing Studies" },
];

const publications = {
  published: [
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
  ],
  preprints: [
    {
      title:
        "Fishing in Murky Waters: The Challenging Route to Diagnosing Twin-Twin Transfusion Syndrome in a Resource-Limited Humanitarian Setting, A Case Study",
      authors: "Jerom Okot, Henry Ochola, Michael Job Aeku, James Nelson Okema, Simple Ouma, Francis Pebalo Pebolo",
      journal: "Research Square",
      year: "2024",
      doi: "https://doi.org/10.21203/rs.3.rs-4429074/v1",
    },
  ],
  "under-review": [
    {
      title:
        "Incidence of QT interval prolongation in patients receiving bedaquiline for drug-resistant tuberculosis in Sub-Saharan Africa: a manuscript for systematic review and meta-analysis",
      authors: "Morrish Okello-Obol, Ivaan Pitua, James Nelson Okema, Doris Ekwem, Felix Bongomin, Ronald Olum",
      year: "2025",
    },
    {
      title: "Inpatient Heart Failure: Clinical Characteristics and Mortality predictor in Northern Uganda",
      authors:
        "Bazil Koma Ogik, Jerom Okot, Dan Langoya Oriba, James Nelson Okema, Maurine Lina, Simon Ruhangura, Megere Humphrey, Nakazibwe Hajjara, Hardy Charlotte",
      year: "2025",
    },
    {
      title:
        "Clinical Characteristics and Outcome of patients Hospitalized with Upper Gastrointestinal Bleeding at St. Mary's Hospital, Lacor: A Retrospective Study",
      authors: "James Nelson Okema, Jerom Okot, Dan Langoya Oriba, Simon Ruhangura, Felix Bongomin, Maureen Lina, Bazil Koma Ogik",
      year: "2025",
    },
    {
      title:
        "Severe Primary Hypothyroidism Presenting with Massive Pericardial Effusion and Cardiac Tamponade in a TB endemic Setting: A Case Report",
      authors: "James Nelson Okema, Dan Lagonya Oriba, Jerom Okot, Ivaan Pitua, Felix Bongomin, Christopher Odong, Ronald Olum",
      year: "2025",
    },
  ],
  ongoing: [
    {
      title: "MIMHA: Maternal and Infant Mental Health in Africa",
      authors: "Role: Project Coordinator",
      journal:
        "Longitudinal cohort study examining prevalence, risk factors, and outcomes of perinatal mental health disorders in Northern Uganda.",
      year: "2022 - 2025",
    },
    {
      title:
        "Prevalence and Risk Factors of Post Cesarean Delivery Sepsis at Gulu University Teaching Hospitals",
      authors: "Role: Principal Investigator",
      journal:
        "Retrospective chart review assessing prevalence and risk factors among post-operative mothers.",
      year: "2023 - 2026",
    },
    {
      title:
        "Morning blood pressure surge in predicting cardiovascular disease in chronic kidney disease in Sub-Saharan Africa",
      authors: "Role: Principal Investigator",
      journal: "Systematic review and meta-analysis protocol in development.",
      year: "Planned",
    },
  ],
};

const interests = [
  "Cardiovascular Epidemiology",
  "Emergency Medicine Systems",
  "Maternal & Perinatal Health",
  "Implementation Science",
  "Global Health Equity",
  "Clinical Education Research",
];

export default function Research() {
  const [activeTab, setActiveTab] = useState<TabType>("published");

  return (
    <MinimalPage
      eyebrow="Publications"
      title="Research"
      intro="Peer-reviewed publications, manuscripts, and ongoing studies focused on improving care in resource-limited settings."
    >
      <Rule />
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Research sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`min-h-11 rounded-md border px-5 py-2 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "border-medical-navy bg-medical-navy text-white"
                : "border-slate-300 text-medical-navy hover:border-medical-teal hover:text-medical-teal"
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className="mt-9 divide-y divide-slate-200">
        {publications[activeTab].map((item) => (
          <article key={item.title} className="py-7 first:pt-0">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="max-w-3xl text-2xl font-semibold leading-snug text-slate-900">
                {item.title}
              </h2>
              <p className="shrink-0 text-sm font-semibold text-medical-teal">{item.year}</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.authors}</p>
            {item.journal && <p className="mt-2 text-sm italic text-slate-500">{item.journal}</p>}
            {item.doi && (
              <a
                href={item.doi.startsWith("http") ? item.doi : `https://doi.org/${item.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
              >
                View DOI
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </article>
        ))}
      </section>

      <Rule />
      <section className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
        <h2 className="text-3xl font-semibold text-medical-navy">Research Interests</h2>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>
    </MinimalPage>
  );
}
