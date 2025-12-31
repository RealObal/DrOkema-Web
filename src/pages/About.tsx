import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="section-academic bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <div
        className="container-academic relative overflow-hidden"
      >
        <SectionHeader
          title="About"
          subtitle="A physician scientist committed to improving health outcomes in resource-limited settings through clinical excellence and rigorous research."
        />

        <div className="w-full px-4 sm:px-0 relative z-10">
          <div className="prose prose-sm sm:prose-lg">
            <div className="mb-8 p-4 sm:p-6 rounded-md sm:rounded-lg bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-50 border-l-4 sm:border-l-8 border-indigo-400 shadow-sm text-justify">
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mt-0 mb-4">
                Professional Narrative
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Okema James Nelson is a Ugandan physician and clinical researcher with special interest in
                emergency medicine and emergency Cardiology. His work bridges clinical practice with
                academic research, focusing on developing sustainable healthcare solutions for
                underserved populations in Northern Uganda.
              </p>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mt-8 mb-4">
                    Background
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Born and raised in post-conflict Northern Uganda, Dr. Okema witnessed the
                    devastating impact of inadequate healthcare infrastructure on communities. This
                    experience shaped his commitment to medicine and his focus on emergency care a
                    critical gap in the region's health services.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    His journey began as a Clinical Officer, providing frontline care in rural health
                    centers where he developed practical skills in resource-constrained settings. This
                    foundation informed his decision to pursue formal medical training, culminating in
                    his medical degree from Gulu University Faculty of Medicine.
                  </p>
                </div>
                <div className="md:w-1/3 md:px-6 flex justify-center items-start">
                  <img
                    src="/About me .jpeg"
                    alt="About me"
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mt-8 mb-4">
                    Clinical Progression
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    From Clinical Officer to Medical Doctor, Dr. Okema's career trajectory reflects a
                    deliberate path toward addressing systemic healthcare challenges. His clinical
                    experience spans emergency departments, internal medicine wards, and community
                    health programs each role deepening his understanding of how research can inform
                    better clinical outcomes.
                  </p>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mt-8 mb-4">
                Research Motivation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Okema's research agenda is driven by questions that arise directly from clinical
                practice: Why do maternal mortality rates remain high despite known interventions?
                What factors influence cardiovascular disease outcomes in African populations? How
                can emergency care systems be strengthened with limited resources?
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                His ongoing studies aim to generate evidence that can directly improve patient care
                and health policy in Uganda and similar settings across sub-Saharan Africa.
              </p>

              <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mt-8 mb-4">
                Long-term Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Okema aspires to establish a research program that combines epidemiological
                rigor with clinical relevance, training the next generation of African
                physician scientists while producing actionable evidence for health systems
                strengthening. His goal is to contribute to a future where quality emergency and
                cardiovascular care is accessible to all Ugandans.
              </p>
            </div>

            {/* Formal Education */}
            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-2xl">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
                  Formal Education
                </h2>

                <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div className="space-y-6">
                  <div className="relative pl-12">
                    {/* Horizontal branch */}
                    <div className="absolute left-0 top-4 w-4 h-0.5 bg-gray-300"></div>
                    <div className="card-academic bg-blue-50">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                        Foundation of Clinical Research
                      </h3>
                      <p className="text-primary font-medium mb-1">Harvard Medical School, Professional, Corporate and Continuing Education, US</p>
                      <p className="text-sm text-muted-foreground">May 2025 - Nov 2025</p>
                      <p className="text-sm text-muted-foreground mt-2">Certificate program focused on research methods and clinical trial fundamentals.</p>
                    </div>
                  </div>

                  <div className="relative pl-12">
                    {/* Horizontal branch */}
                    <div className="absolute left-0 top-4 w-4 h-0.5 bg-gray-300"></div>
                    <div className="card-academic bg-green-50">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                        Certificate in Research Methods and Implementation Science
                      </h3>
                      <p className="text-primary font-medium mb-1">Freya International School Of Research and Implementation (FISORI)</p>
                      <p className="text-sm text-muted-foreground">March 2025 - June 2025</p>
                      <p className="text-sm text-muted-foreground mt-2">Comprehensive training in research design, data analysis, and implementation science.</p>
                    </div>
                  </div>

                  <div className="relative pl-12">
                    {/* Horizontal branch */}
                    <div className="absolute left-0 top-4 w-4 h-0.5 bg-gray-300"></div>
                    <div className="card-academic bg-yellow-50">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                        Bachelor of Medicine and Bachelor of Surgery (MBChB)
                      </h3>
                      <p className="text-primary font-medium mb-1">Faculty of Medicine, Gulu University</p>
                      <p className="text-sm text-muted-foreground">2020 - 2025</p>
                      <p className="text-sm text-muted-foreground mt-2">Clinical rotations at Gulu Regional Referral Hospital and St. Mary's Hospital Lacor.</p>
                    </div>
                  </div>

                  <div className="relative pl-12">
                    {/* Horizontal branch */}
                    <div className="absolute left-0 top-4 w-4 h-0.5 bg-gray-300"></div>
                    <div className="card-academic bg-purple-50">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                        Diploma in Clinical Medicine & Community Health (DCM/CH)
                      </h3>
                      <p className="text-primary font-medium mb-1">Gulu Institute of Health Sciences</p>
                      <p className="text-sm text-muted-foreground">2017 - 2019</p>
                      <p className="text-sm text-muted-foreground mt-2">Comprehensive training in clinical diagnosis, treatment, and community health.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Certifications */}
            <div className="space-y-12 mt-12">
              {/* Clinical */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Clinical Training
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Primary Trauma Care Instructor", issuer: "Life + Limb International", year: "2025" },
                    { title: "Advanced Cardiac Life Support (ACLS)", issuer: "American Heart Association", year: "2021" },
                    { title: "Basic Life Support (BLS) Instructor", issuer: "American Heart Association", year: "2019" },
                    { title: "Emergency Triage Assessment and Treatment (ETAT)", issuer: "WHO Uganda", year: "2018" },
                    { title: "Good Clinical Practice (GCP)", issuer: "NIDA Clinical Trials Network", year: "2023" },
                    { title: "Clinical Mycology", issuer: "International Society for Human and Animal Mycology (ISHAM)", year: "2023" },
                    { title: "EKG Training: Mastering EKG Interpretation", issuer: "Internal Medicine Interest Group of Nigeria (IMGN)", year: "2025" },
                    { title: "Introduction to Clinical Management of Rape & IPV in Humanitarian Settings", issuer: "World Health Organization", year: "2023" },
                    { title: "WHO HIV Service Delivery & Differentiated Service Delivery (Health Emergencies)", issuer: "World Health Organization", year: "2023" },
                  ].map((cert, index) => (
                    <div key={index} className="card-academic bg-blue-50 p-4">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-1">{cert.title}</h3>
                      <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Research Training
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Research Methods in Global Health", issuer: "Johns Hopkins University (Online)", year: "2021" },
                    { title: "Human Subjects Research Ethics", issuer: "CITI Program", year: "2022" },
                    { title: "Research Writing in the Sciences (AuthorAID / INASP)", issuer: "AuthorAID / INASP", year: "2022" },
                    { title: "Statistical Data Analysis using R (RUFORUM)", issuer: "RUFORUM", year: "2022" },
                    { title: "Proposal Writing with Impact (AuthorAID / INASP)", issuer: "AuthorAID / INASP", year: "2022" },
                    { title: "Academic Writing Skills (AuthorAID / INASP)", issuer: "AuthorAID / INASP", year: "2022" },
                    { title: "Randomized Clinical Trials Training", issuer: "COMSTECH / IUIU", year: "2023" },
                    { title: "EPIC: Emergency Physicians International Conference (Participant)", issuer: "EPIC / Zero to Hero", year: "2025" },
                    { title: "CIRHT 3rd International SRHR Conference (Participant & Moderator)", issuer: "CIRHT", year: "2025" },
                    { title: "Conversations in Cardiology (CME)", issuer: "Association of Black Cardiologists (ABC)", year: "2025" },
                    { title: "20th Annual International Symposium on Ventricular Arrhythmias", issuer: "Perelman School of Medicine, University of Pennsylvania", year: "2025" },
                    { title: "Lung Science & Health Symposium — Poster Presentation", issuer: "Makerere University Lung Institute", year: "2025" },
                  ].map((cert, index) => (
                    <div key={index} className="card-academic bg-blue-900 p-4">
                      <h3 className="text-lg font-serif font-semibold text-white mb-1">{cert.title}</h3>
                      <p className="text-blue-100 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-sm text-blue-200">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Emergency Care
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Emergency Medicine Essential Training", issuer: "African Federation for Emergency Medicine", year: "2021" },
                    { title: "Trauma Team Training", issuer: "Royal College of Surgeons", year: "2020" },
                    { title: "Obstetric Emergency Care", issuer: "LSTM", year: "2019" },
                    { title: "Neonatal Resuscitation Program", issuer: "American Academy of Pediatrics", year: "2018" },
                    { title: "AI in Emergency Medicine (Conference)", issuer: "International Federation for Emergency Medicine (IFEM)", year: "2025" },
                  ].map((cert, index) => (
                    <div key={index} className="card-academic bg-blue-50 p-4">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-1">{cert.title}</h3>
                      <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Health */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Public Health & Leadership
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Health Systems Strengthening", issuer: "USAID/MEASURE", year: "2022" },
                    { title: "Quality Improvement in Healthcare", issuer: "IHI Open School", year: "2021" },
                    { title: "Leadership in Global Health", issuer: "Consortium of Universities for Global Health", year: "2021" },
                    { title: "Community Health Program Management", issuer: "AMREF Health Africa", year: "2019" },
                    { title: "Empowering Communities before/during/after Infectious Disease Outbreak (Social Net)", issuer: "World Health Organization", year: "2022" },
                  ].map((cert, index) => (
                    <div key={index} className="card-academic p-4">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-1">{cert.title}</h3>
                      <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="divider-academic" />

            <p className="text-muted-foreground leading-relaxed">
              To explore Dr. Okema's clinical experience and research contributions in detail, 
              please visit the <Link to="/clinical" className="link-academic">Clinical Practice</Link> and{" "}
              <Link to="/research" className="link-academic">Research</Link> sections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
