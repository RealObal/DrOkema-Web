import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Dr. Okema James Nelson | Physician–Scientist Background</title>
        <meta name="description" content="Learn about Dr. Okema James Nelson's journey as a physician-scientist, from clinical officer to medical doctor, specializing in emergency medicine and cardiovascular health in Uganda." />
        <meta name="keywords" content="Dr. Okema James Nelson background, physician scientist biography, Uganda doctor education, clinical researcher experience, emergency medicine training" />
        <link rel="canonical" href="https://drokema.com/about" />
        <meta property="og:title" content="About Dr. Okema James Nelson | Physician–Scientist" />
        <meta property="og:description" content="Learn about Dr. Okema's journey from clinical officer to medical doctor, specializing in emergency medicine and cardiovascular health in Uganda." />
        <meta property="og:url" content="https://drokema.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Okema James Nelson | Physician–Scientist" />
        <meta name="twitter:description" content="Learn about Dr. Okema's journey from clinical officer to medical doctor, specializing in emergency medicine and cardiovascular health in Uganda." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dr. Okema James Nelson
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A physician-scientist committed to improving health outcomes in resource-limited settings
              through clinical excellence and rigorous research.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Photo Section - Well Wrapped */}
            <div className="mb-16">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl transform rotate-3"></div>
                        <img
                          src="/About me .jpeg"
                          alt="Dr. Okema James Nelson"
                          className="relative w-full h-auto rounded-xl shadow-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Professional Narrative
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Dr. Okema James Nelson is a Ugandan physician and clinical researcher with special interest in
                        emergency medicine and emergency cardiology. His work bridges clinical practice with
                        academic research, focusing on developing sustainable healthcare solutions for
                        underserved populations in Northern Uganda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Background</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Born and raised in post-conflict Northern Uganda, Dr. Okema witnessed the
                  devastating impact of inadequate healthcare infrastructure on communities. This
                  experience shaped his commitment to medicine and his focus on emergency care—a
                  critical gap in the region's health services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  His journey began as a Clinical Officer, providing frontline care in rural health
                  centers where he developed practical skills in resource-constrained settings. This
                  foundation informed his decision to pursue formal medical training, culminating in
                  his medical degree from Gulu University Faculty of Medicine.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Progression</h3>
                <p className="text-gray-700 leading-relaxed">
                  From Clinical Officer to Medical Doctor, Dr. Okema's career trajectory reflects a
                  deliberate path toward addressing systemic healthcare challenges. His clinical
                  experience spans emergency departments, internal medicine wards, and community
                  health programs—each role deepening his understanding of how research can inform
                  better clinical outcomes.
                </p>
              </div>
            </div>

            {/* Research Motivation */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 md:p-12 mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Research Motivation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Okema's research agenda is driven by questions that arise directly from clinical
                practice: Why do maternal mortality rates remain high despite known interventions?
                What factors influence cardiovascular disease outcomes in African populations? How
                can emergency care systems be strengthened with limited resources?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                His ongoing studies aim to generate evidence that can directly improve patient care
                and health policy in Uganda and similar settings across sub-Saharan Africa.
              </p>
            </div>

            {/* Long-term Vision */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Long-term Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Okema aspires to establish a research program that combines epidemiological
                rigor with clinical relevance, training the next generation of African
                physician-scientists while producing actionable evidence for health systems
                strengthening. His goal is to contribute to a future where quality emergency and
                cardiovascular care is accessible to all Ugandans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explore My Work
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            To explore Dr. Okema's clinical experience and research contributions in detail,
            please visit the Clinical Practice and Research sections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clinical" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Clinical Practice
            </Link>
            <Link to="/research" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
