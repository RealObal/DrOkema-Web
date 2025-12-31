import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PublicationCard } from "@/components/ui/PublicationCard";

type TabType = "published" | "under-review" | "preprints" | "ongoing";

export default function Research() {
  const [activeTab, setActiveTab] = useState<TabType>("published");

  const tabs: { id: TabType; label: string }[] = [
    { id: "published", label: "Published" },
    { id: "preprints", label: "Preprints" },
    { id: "under-review", label: "Under Review" },
    { id: "ongoing", label: "Ongoing Studies" },
  ];

  return (
    <div className="section-academic bg-section-gradient">
      <div className="container-academic">
        <SectionHeader
          title="Research"
          subtitle="Peer-reviewed publications, ongoing studies, and research agenda focused on improving health outcomes in resource-limited settings."
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab, index) => {
            const buttonStyles = [
              "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
              "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100",
              "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
              "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100",
              "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100"
            ];

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up ${
                  activeTab === tab.id
                    ? `${buttonStyles[index]} shadow-lg scale-105 -translate-y-1 animate-pulse-subtle`
                    : `${buttonStyles[index]} opacity-75 hover:opacity-100 hover:shadow-md`
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Published Papers */}
        {activeTab === "published" && (
          <div className="max-w-4xl w-full animate-fade-in">
            <PublicationCard
              title="Prevalence, types, and determinants of intimate-partner violence among pregnant women in Northern Uganda: a hospital-based cross-sectional study"
              authors="Jerom Okot, Cinderella Anena, Nelson James Okema, et al."
              journal="BMC Public Health"
              year="2025"
              status="published"
              doi="10.1186/s12889-025-24465-7"
            />

            <PublicationCard
              title="Incidence of QT interval prolongation in patients receiving bedaquiline for drug-resistant tuberculosis in Sub-Saharan Africa: a protocol for systematic review and meta-analysis"
              authors="Morrish Okello-Obol, Ivaan Pitua, James Nelson Okema, Doris Ekwem, Felix Bongomin, Ronald Olum"
              journal="BMJ Open"
              year="2025"
              status="published"
              doi="10.1136/bmjopen-2024-096709"
            />

          </div>
        )}

        {/* Under Review */}
        {activeTab === "under-review" && (
          <div className="max-w-4xl w-full animate-fade-in">
            <PublicationCard
              title="Incidence of QT interval prolongation in patients receiving bedaquiline for drug-resistant tuberculosis in Sub-Saharan Africa: a manuscript for systematic review and meta-analysis"
              authors="Morrish Okello-Obol, Ivaan Pitua, James Nelson Okema, Doris Ekwem, Felix Bongomin, Ronald Olum"
              year="2025"
              status="under-review"
            />

            <PublicationCard
              title="Caregivers Acceptability and Uptake of Voluntary Medical Circumsision among Male Children Under 5 Years Old in Gulu City, Northern Uganda"
              authors="Donald Otika,James Nelson Okema, Morrish Okello-Obol, Pebalo Francis Pebolo, Felix Bongomin, Ronald Olum,Harriet Ajilong, Peter Akera, Jimmyy Opee,Jackline Ayikoru"
              year="2025"
              status="under-review"
            />

            <PublicationCard
              title="Inpatient Heart Failure: Clinical Characteristics and Mortality predictor in Northern Uganda"
              authors="Bazil Koma Ogik, Jerom Okot, Dan Langoya Oriba, James Nelson Okema, Maurine Lina, Simon Ruhangura, Megere Humphrey, Nakazibwe Hajjara, Hardy Charlotte"
              year="2025"
              status="under-review"
            />

            <PublicationCard
              title="Clinical Characteristics and Outcome of patients Hospitalized with Upper Gastrointestinal Bleeding at St. Mary's Hospital, Lacor: A Retrospective Study"
              authors="James Nelson Okema, Jerom Okot, Dan Langoya Oriba, Simon Ruhangura, Flix Bongomin, Maureen Lina, Bazil Koma Ogik"
              year="2025"
              status="under-review"
            />

            <PublicationCard
              title="Severe Primary Hypothyroidism Presenting with Massive Pericardial Effusion and Cardiac Tamponade in a TB endemic Setting: A Case Report"
              authors="James Nelson Okema,Dan Lagonya oriba, Jerom Okot, Ivaan Pitua, Felix Bongomin,Christopher Odong, Ronald Olum."
              year="2025"
              status="under-review"
            />
          </div>
        )}

        {/* Preprints */}
        {activeTab === "preprints" && (
          <div className="max-w-4xl w-full animate-fade-in">
            <PublicationCard
              title="Fishing in Murky Waters: The Challenging Route to Diagnosing Twin-Twin Transfusion Syndrome in a Resource-Limited Humanitarian Setting, A Case Study"
              authors="Jerom Okot, Henry Ochola, Michael Job Aeku, James Nelson Okema, Simple Ouma, Francis Pebalo Pebolo"
              journal="Research Square (Preprint)"
              year="2024"
              status="preprint"
              doi="https://doi.org/10.21203/rs.3.rs-4429074/v1"
            />
          </div>
        )}

        {/* Ongoing Studies */}
        {activeTab === "ongoing" && (
          <div className="max-w-4xl w-full animate-fade-in">
            <div className="space-y-8">
              <div className="card-academic border-l-4 border-l-medical-gold">
                <span className="badge-gold-solid mb-3">Active</span>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  MIMHA: Maternal and Infant Mental Health in Africa
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Role: Project Coordinator
                </p>
                <p className="text-muted-foreground mb-4">
                  A longitudinal cohort study examining the prevalence, risk factors, and outcomes 
                  of perinatal mental health disorders in Northern Uganda. The study aims to inform 
                  integration of mental health services into routine maternal care.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Timeline:</span> 2022–2025 | 
                  <span className="font-medium ml-2">Sample:</span> 800 mother-infant pairs
                </p>
              </div>

              <div className="card-academic border-l-4 border-l-medical-gold">
                <span className="badge-gold-solid mb-3">Active</span>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Prevalence and Risk Factors of Post Cesarean Delivery Sepsis: Retrospective chart review of Hospital records from 2023 to 2025 at Gulu University Teaching Hospitals
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Role: Principal Investigator
                </p>
                <p className="text-muted-foreground mb-4">
                  To assess the prevalence and risk factors for post cesarean delivery among post operative mothers at Gulu University Teaching Hospitals.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Timeline:</span> 2023–2026 | 
                  <span className="font-medium ml-2">Sites:</span> 4 health facilities
                </p>
              </div>

              <div className="card-academic">
                <span className="badge-academic mb-3">Planned</span>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  The Role of Morning blood pressure surge in predicting cardiovascular Disease in patients with chronic Kidney Disease in Sub-Saharan Africa: A protocol/manuscript for systematic review and meta-analysis
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Role: Principal Investigator
                </p>
                <p className="text-muted-foreground mb-4">
                  A systematic review and meta-analysis to evaluate the prognostic significance of morning blood pressure surge in patients with chronic kidney disease in Sub-Saharan Africa. The study aims to inform risk stratification and management strategies in this high-risk population.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Status:</span> Protocol development | 
                  <span className="font-medium ml-2">Seeking funding</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Research Interests */}
        <div className="mt-16 animate-fade-in">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-serif font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8 block mx-auto">
            Research Interests
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-academic bg-blue-50 border-l-4 border-l-blue-500 hover:shadow-lg">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Cardiovascular Epidemiology
              </h3>
              <p className="text-muted-foreground text-sm">
                Disease burden, risk factors, and outcomes of cardiovascular conditions in
                African populations. Focus on hypertension, heart failure, and rheumatic
                heart disease.
              </p>
            </div>

            <div className="card-academic bg-emerald-50 border-l-4 border-l-emerald-500 hover:shadow-lg">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Emergency Medicine Systems
              </h3>
              <p className="text-muted-foreground text-sm">
                Health systems research on emergency care capacity, prehospital systems,
                and trauma outcomes in low-resource settings.
              </p>
            </div>

            <div className="card-academic bg-purple-50 border-l-4 border-l-purple-500 hover:shadow-lg">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Maternal & Perinatal Health
              </h3>
              <p className="text-muted-foreground text-sm">
                Maternal mortality reduction, perinatal mental health, and quality
                improvement in obstetric care.
              </p>
            </div>

            <div className="card-academic bg-amber-50 border-l-4 border-l-amber-500 hover:shadow-lg">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Implementation Science
              </h3>
              <p className="text-muted-foreground text-sm">
                Translating evidence into practice through task-shifting, training
                programs, and health workforce development.
              </p>
            </div>

            <div className="card-academic bg-rose-50 border-l-4 border-l-rose-500 hover:shadow-lg">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Global Health Equity
              </h3>
              <p className="text-muted-foreground text-sm">
                Addressing disparities in healthcare access and outcomes between
                high-income and low-resource settings.
              </p>
            </div>

            <div className="card-academic bg-indigo-50 border-l-4 border-l-indigo-500 hover:shadow-lg">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                Clinical Education Research
              </h3>
              <p className="text-muted-foreground text-sm">
                Evaluating training methodologies and competency development for
                healthcare workers in resource-limited contexts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
