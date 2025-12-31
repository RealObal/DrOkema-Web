import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Counter } from "@/components/ui/Counter";
import { Award, BookOpen, Users, GraduationCap } from "lucide-react";

export default function Teaching() {
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container-academic">
        <SectionHeader
          title="Teaching & Mentorship"
          subtitle="Research-driven Medical Officer and educator committed to building clinical and research capacity in Northern Uganda."
        />

        {/* Teaching Philosophy */}
        <div className="w-full mb-16">
          <div className="p-6 rounded-lg bg-white border-l-4 border-sky-500 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-lg text-slate-700 leading-relaxed">
              I am a research-driven Medical Officer (MBChB, Gulu University) currently serving at St. Mary's Hospital Lacor. My teaching bridges clinical practice and research, emphasizing pragmatic, evidence-based methods adapted to resource-limited and post-conflict settings. I focus on hands-on skill development, clinical reasoning, and building sustainable research capacity among students and junior clinicians.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-white shadow-sm text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <Users size={28} className="mx-auto mb-3 text-sky-500" />
            <div className="stat-number text-3xl"><Counter end={50} suffix="+" /></div>
            <div className="stat-label">Medical Students Mentored</div>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-sm text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <GraduationCap size={28} className="mx-auto mb-3 text-sky-500" />
            <div className="stat-number text-3xl"><Counter end={500} suffix="+" /></div>
            <div className="stat-label">Clinical Students Supervised</div>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-sm text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <BookOpen size={28} className="mx-auto mb-3 text-sky-500" />
            <div className="stat-number text-3xl"><Counter end={120} suffix="+" /></div>
            <div className="stat-label">Healthcare Workers Trained</div>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-sm text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <Award size={28} className="mx-auto mb-3 text-sky-500" />
            <div className="stat-number text-3xl"><Counter end={3} /></div>
            <div className="stat-label">Teaching Awards</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Teaching Roles */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-6">
              Teaching Appointments
            </h2>

            <div className="space-y-2">
              <TimelineItem
                title="Clinical Instructor"
                organization="Gulu College of Health Sciences"
                period="2022 - Present"
                description="Bedside teaching for 2nd and 3th year Clinical students during clinical rotations. In different Wards include internal medicine, Surgery, Paediatrics and OBGYN."
              />

              <TimelineItem
                title="Primary Trauma Care Instructor"
                organization="Life + Limb International"
                period="2025-Present"
                description="Certified instructor delivering PTC training to healthcare workers, Medical Students and Lay first respondents across Uganda. Curriculum covers initial assessment, airway management, hemorrhage control, and trauma protocols."
              />

              <TimelineItem
                title="Research Methods Facilitator"
                organization="African Research Network"
                period="2022-Present"
                description="Workshop facilitation on research methodology, proposal writing, and scientific communication for early-career researchers."
              />
            </div>
          </div>

          {/* Mentorship & Awards */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-6">
              Mentorship & Recognition
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="text-lg font-serif font-semibold text-slate-800 mb-2">
                  Clinical & Research Mentorship
                </h3>
                <p className="text-muted-foreground text-sm">
                  One-on-one mentorship of Clinical students and Clinical year Medical Student, focusing on 
                  career development, research skills, and clinical decision-making.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                  Awards & Recognition
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award size={50} className="text-sky-500 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-foreground">Best Clinical Instructor Award</p>
                      <p className="text-sm text-muted-foreground">Gulu College Of Health Sciences, 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award size={50} className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-foreground">Excellence in Teaching Award</p>
                      <p className="text-sm text-muted-foreground">Gulu College of Health Sciences, 2022</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award size={50} className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-foreground">Best Undergraduate Dissertation</p>
                      <p className="text-sm text-muted-foreground">Faculty of Medicine, Gulu University, 2025</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-12">
          <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-6">
            Teaching And Academic Contributions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-academic">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Emergency Cardiology Webinar
              </h3>
              <p className="text-sm text-muted-foreground">
                Deliver weekly Cardiology Metorship Session for Health workers, focused on recognition, 
                and initial management of life threathening cardic Emergencies in Low resource Clinical Settings.
              </p>
            </div>

            <div className="card-academic">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Clinical Reasoning During Ward Rounds
              </h3>
              <p className="text-sm text-muted-foreground">
                Led case based discussions with clinical Students and Clinicals Years Medical Students  
                Focusing on bedside Diagnostic reasoning, Differential formulations and Management dicisions in real patient Care settings .
              </p>
            </div>

            <div className="card-academic">
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Research And Academic Skill Support
              </h3>
              <p className="text-sm text-muted-foreground">
                Provided hands on Guidance to mentees on basic research concepts, case report writiong, 
                basic epidemiology and research methodology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
