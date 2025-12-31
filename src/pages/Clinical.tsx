import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Stethoscope, Heart, AlertTriangle, Users, Activity, Globe, GraduationCap, Download } from "lucide-react";

export default function Clinical() {
  return (
    <div className="section-academic bg-hero-gradient">
      <div className="container-academic">
        <SectionHeader
          title="Clinical Practice"
          subtitle="Comprehensive clinical experience in emergency medicine, internal medicine, and trauma care across Uganda's healthcare system."
        />

        {/* Clinical Expertise */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card-academic text-center">
            <AlertTriangle size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="font-serif font-semibold text-foreground mb-2">Emergency Care</h3>
            <p className="text-sm text-muted-foreground">Acute trauma and medical emergencies</p>
          </div>
          
          <div className="card-academic text-center">
            <Heart size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="font-serif font-semibold text-foreground mb-2">Internal Medicine</h3>
            <p className="text-sm text-muted-foreground">Cardiovascular and general medicine</p>
          </div>
          
          <div className="card-academic text-center">
            <Stethoscope size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="font-serif font-semibold text-foreground mb-2">Primary Care</h3>
            <p className="text-sm text-muted-foreground">Community health and preventive care</p>
          </div>
          
          <div className="card-academic text-center">
            <Users size={32} className="mx-auto mb-4 text-primary" />
            <h3 className="font-serif font-semibold text-foreground mb-2">Teaching</h3>
            <p className="text-sm text-muted-foreground">Clinical instruction and mentorship</p>
          </div>
        </div>

        {/* Clinical History */}
        <div className="w-full">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
            Clinical Appointments
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 transition-transform hover:-translate-y-1 hover:shadow-md">
              <TimelineItem
                title="Medical Officer"
                organization="St. Mary's Hospital Lacor, Gulu"
                period="2025 - Present"
                location="Gulu, Uganda"
                description="Provide inpatient and outpatient clinical care across the Emergency Department, Internal Medicine, Obstetrics, and Gynaecology."
              />
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 transition-transform hover:-translate-y-1 hover:shadow-md">
              <TimelineItem
                title="Medical Clinical Officer(OPD-Incharge)"
                organization="Dr. Ambrosoli Memorial Hospital, Kalongo"
                period="2020 -2021"
                location="Kalongo,Agago District, Uganda"
                description="General practice and Management of high-volume outpatient clinics and inpatient wards in a resource-limited setting."
              />
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 transition-transform hover:-translate-y-1 hover:shadow-md">
              <TimelineItem
                title="District HIV/TB Focal Person"
                organization="Infectious Diseases Institute(IDI), Makerere University"
                period="2019 - 2020"
                location="Pakwech District, Uganda"
                description="Coordinating HIV/TB services across 15 health facilities, leading mentorships, data quality improvement and implementation of national treatment guidelines to improve retention and viral load monitoring."
              />
            </div>
          </div>

          <div className="divider-academic" />

          {/* Clinical Focus */}
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
            Areas of Clinical Emphasis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Activity className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Emergency & Trauma Care
              </h3>
              <p className="text-muted-foreground">
                Management of acute trauma, medical emergencies, and critical care in settings 
                with limited resources. Trained Lay First Respondents in Primary Trauma Care (PTC) protocols, 
                equipping them with essential life-saving skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <Stethoscope className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Internal Medicine
              </h3>
              <p className="text-muted-foreground">
                Comprehensive care for cardiovascular conditions, infectious diseases, and 
                chronic illness management. Special interest in hypertension, heart failure and arrhythmias
                in African populations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Globe className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Resource-Limited Settings
              </h3>
              <p className="text-muted-foreground">
                Expertise in clinical decision-making with constrained diagnostic and therapeutic 
                options. Experience adapting international guidelines to local contexts while 
                maintaining quality of care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <GraduationCap className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Teaching Hospital Experience
              </h3>
              <p className="text-muted-foreground">
                Regular involvement in bedside teaching, case presentations, and supervision of 
                medical students at St. Mary's hospital, Lacor.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <a 
              href="/documents/Dr.Okema_Resume_2025.pdf" 
              download="Dr.Okema_Resume_2025.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download size={20} />
              Download Full CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
