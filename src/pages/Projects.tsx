import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Counter } from "@/components/ui/Counter";
import { ExternalLink, MoreHorizontal } from "lucide-react";

interface CollapsibleOutcomesProps {
  items: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const CollapsibleOutcomes = ({ items, isExpanded, onToggle }: CollapsibleOutcomesProps) => {
  return (
    <div className="w-full">
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] opacity-100 mb-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc pl-0">
             {items.map((item, idx) => (
               <li key={idx} className="leading-[1.5] !list-disc ml-5">{item}</li>
             ))}
          </ul>
        </div>
      </div>
      
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="group inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md bg-sky-100 text-sky-700 border border-sky-200 shadow-sm hover:bg-sky-200 transition-colors"
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>Show Less <MoreHorizontal size={14} className="group-hover:animate-pulse" /></>
        ) : (
          <>Show {items.length} More <MoreHorizontal size={14} className="group-hover:animate-pulse" /></>
        )}
      </button>
    </div>
  );
};

interface ExpandableProjectCardProps extends React.ComponentProps<typeof ProjectCard> {
  outcomes: string[];
  className?: string;
  [key: string]: any; // Allow other props to pass through
}

const ExpandableProjectCard = ({ outcomes, className = "", ...props }: ExpandableProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const PREVIEW_LIMIT = 2;
  const hasMore = outcomes && outcomes.length > PREVIEW_LIMIT;

  const displayedOutcomes = outcomes.slice(0, PREVIEW_LIMIT);
  const hiddenOutcomes = outcomes.slice(PREVIEW_LIMIT);

  const finalOutcomes = hasMore 
    ? [
        ...displayedOutcomes,
        <CollapsibleOutcomes 
          key="collapsible" 
          items={hiddenOutcomes} 
          isExpanded={isExpanded} 
          onToggle={() => setIsExpanded(!isExpanded)} 
        />
      ]
    : outcomes;

  const finalClassName = hasMore 
    ? `${className} [&_li:last-child]:list-none` 
    : className;

  return <ProjectCard className={finalClassName} {...props} outcomes={finalOutcomes} />;
};

export default function Projects() {
  return (
    <div className="section-academic bg-accent-gradient">
      <div className="container-academic">
        <SectionHeader
          title="Projects & Leadership"
          subtitle="Initiatives focused on improving healthcare delivery, training, and community health outcomes in Northern Uganda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExpandableProjectCard
            className="bg-sky-50 border-l-4 border-sky-500 hover:shadow-md transition-all [&_li]:leading-[1.5]"
            title={
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-serif text-slate-900 text-lg font-bold">LIFE + LIMB-Primary Trauma Care (PTC) Foundation-Northern Uganda Chapter</span>
                <a 
                  href="https://primarytraumacare.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-blue-700 hover:bg-blue-800 text-white border border-transparent transition-colors shadow-sm"
                >
                  Visit Website <ExternalLink size={12} />
                </a>
              </div>
            }
            role={<span className="text-lg font-bold text-emerald-700">Project Manager & Lead Trainer</span>}
            description="Led regional trauma prevention and emergency response capacity-building programs in Northern Uganda in collaboration with the LIFE + LIMB-Primary Trauma Care Foundation, Oxford."
            outcomes={[
              "Trained 400+ motorcycle taxi operators, 250+ community members, and 120+ medical students in basic life support, hemorrhage control, and first response.",
              "Designed and delivered standardized training curricula with pre-post competency assessments, achieving over 70 percent post-training competency attainment.",
              "Distributed 500+ helmets and reflector jackets to high-risk riders as part of injury prevention interventions.",
              "Coordinated 15+ stakeholders including health facilities, police, and community leaders to strengthen referral pathways and emergency coordination.",
            ]}
            partners={["Life + Limb International (Oxford)", "Gulu University", "Ministry of Health Uganda"]}
          />

          <ExpandableProjectCard
            className="bg-emerald-50 border-l-4 border-emerald-500 hover:shadow-md transition-all [&_li]:leading-[1.5]"
            title={
              <div className="flex flex-wrap items-center justify-between gap-2">
                <a href="https://mimha.org" target="_blank" rel="noopener noreferrer" className="hover:underline font-serif text-slate-900 text-lg font-bold">MIMHA Project</a>
                <a 
                  href="https://mimha.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-blue-700 hover:bg-blue-800 text-white border border-transparent transition-colors shadow-sm"
                >
                  Visit Website <ExternalLink size={12} />
                </a>
              </div>
            }
            role={<span className="text-lg font-bold text-emerald-700">Project Coordinator</span>}
            description="Coordinated implementation of a community-based mental health and substance use intervention program aligned with national and WHO mental health guidelines."
            outcomes={[
              "Reached 1,200+ community members with structured counseling, psychoeducation, and referral services.",
              "Trained 150+ community health workers, peer supporters, and volunteers in basic mental health and substance use interventions",
              "Led 20+ community outreaches and stigma-reduction dialogues with documented improvements in service uptake and retention",
              " Established standardized reporting, monitoring, and quality improvement workflows across partner sites",
            ]}
            partners={["Makerere University", "Laminopabo Child Development center","GRRH-Mental Health Department", "Acholi Women In Health"]}
          />

          <ExpandableProjectCard
            className="bg-violet-50 border-l-4 border-violet-500 hover:shadow-md transition-all [&_li]:leading-[1.5]"
            title={
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-serif text-slate-900 text-lg font-bold">Northern Uganda Village Health Outreach Project (NUV-HOP)</span>
                <a 
                  href="https://nuvhop.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-blue-700 hover:bg-blue-800 text-white border border-transparent transition-colors shadow-sm"
                >
                  Visit Website <ExternalLink size={12} />
                </a>
              </div>
            }
            role={<span className="text-lg font-bold text-emerald-700">Project Chairperson and Medical Lead</span>}
            description="Provided strategic leadership for a multi-institutional community health outreach program delivering preventive and primary healthcare services to underserved populations."
            outcomes={[
              "Managed partnerships with Gulu University, University of Manchester, and Ghent University, including technical and narrative reporting",
              "Led community outreaches serving 5,000+ community members across Amuru, Gulu, and Omoro districts.",
              "Coordinated 80+ student volunteers annually through structured recruitment, training, and supervision.",
              "Strengthened referral pathways with district health offices and local health facilities to improve access to care.",
            ]}
            partners={["TASO Uganda", "RHU-Uganda","Youth alive Uganda", "University of Manchester","Ghent University","Omoro, Amuru and Gulu District Health Office"]}
          />

          <ExpandableProjectCard
            className="bg-rose-50 border-l-4 border-rose-500 hover:shadow-md transition-all [&_li]:leading-[1.5]"
            title={<span className="font-serif text-slate-900 text-lg font-bold">Cardiology Interest Group of Uganda</span>}
            role={<span className="text-lg font-bold text-emerald-700">Founder & Program Coordinator</span>}
            description="Coordinate a national cardiology learning forum delivering weekly case‑based webinars on ECG interpretation and emergency cardiology management for medical students and junior clinicians."
            outcomes={[
              "Organize weekly virtual sessions on basic and advanced ECG interpretation, including complex arrhythmias and ischemic patterns.",
              "Facilitate teaching on initial management of acute cardiology emergencies such as ACS, heart failure, and life‑threatening arrhythmias.",
              "Coordinate mentorship from Ugandan cardiologists and international faculty to support skills transfer and clinical decision‑making.",
              "Support continuous professional development through structured case discussions and interactive learning",
            ]}
            partners={["St. Mary's Hospital, Lacor","Emergency Medicine Interest Group of Nigeria","Uganda Heart Institute"]}
          />
        </div>

        <div className="divider-academic" />

        {/* Impact Summary */}
        <div className="bg-muted/30 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
            Collective Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="stat-number"><Counter end={120} suffix="+" /></div>
              <div className="stat-label">Healthcare Workers Trained</div>
            </div>
            <div>
              <div className="stat-number"><Counter end={2000} suffix="+" /></div>
              <div className="stat-label">Households Served</div>
            </div>
            <div>
              <div className="stat-number"><Counter end={800} suffix="+" /></div>
              <div className="stat-label">Research Participants</div>
            </div>
            <div>
              <div className="stat-number"><Counter end={10} suffix="+" /></div>
              <div className="stat-label">Partner Facilities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
