import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Stethoscope, BookOpen, FlaskConical } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { StatCard } from "@/components/ui/StatCard";
import { Counter } from "@/components/ui/Counter";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dr. Okema James Nelson, MD | Physician–Scientist | Uganda</title>
        <meta name="description" content="Medical Doctor and Clinical Researcher specializing in Emergency Medicine and Cardiovascular Health in Uganda. Dedicated to improving health outcomes in resource-limited settings." />
        <meta name="keywords" content="Dr. Okema James Nelson, physician scientist, Uganda doctor, clinical researcher, emergency medicine, cardiovascular health, Gulu" />
        <link rel="canonical" href="https://drokema.com/" />
        <meta property="og:title" content="Dr. Okema James Nelson, MD | Physician–Scientist" />
        <meta property="og:description" content="Medical Doctor and Clinical Researcher specializing in Emergency Medicine and Cardiovascular Health in Uganda." />
        <meta property="og:url" content="https://drokema.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Okema James Nelson, MD | Physician–Scientist" />
        <meta name="twitter:description" content="Medical Doctor and Clinical Researcher specializing in Emergency Medicine and Cardiovascular Health in Uganda." />
      </Helmet>
      {/* Hero Section */}
      <section className="section-academic bg-hero-gradient border-b border-border">
        <div className="container-academic">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Profile Photo */}
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 animate-fade-in relative z-10">
              <img
                src="Dr%20Okemas%20Profile%20photo.png"
                alt="Dr. Okema James Nelson"
                loading="lazy"
                className="w-full h-full object-cover rounded-full border-4 border-border shadow-lg bg-gray-100 dark:bg-gray-900"
              />
            </div>
            
            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4 animate-fade-in">
                Physician–Scientist
              </p>
              
              <h1 className="text-academic-title mb-6 animate-fade-in-up">
                Dr. Okema James Nelson, MD
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-serif italic mb-8 animate-fade-in-up delay-100">
                Medical Doctor | Clinical Researcher | Aspiring Emergency Medicine physician & Cardiologist
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-up delay-200">
                Dedicated to advancing emergency and cardiovascular care in resource-limited settings 
                through clinical practice, rigorous research, and community-centered health initiatives 
                in Uganda, especially Post-conflict Northern Uganda.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                <Link to="/research" className="btn-academic-primary">
                  View Research
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/cv" className="btn-academic-outline">
                  <Download size={18} className="mr-2" />
                  Download CV
                </Link>
                <Link to="/contact" className="btn-academic-ghost">
                  <Mail size={18} className="mr-2" />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-section-accent border-b border-border">
        <div className="container-academic">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number={<Counter end={6} suffix="+" />} label="Years Clinical Experience" />
            <StatCard number={<Counter end={5} suffix="+" />} label="Publications" />
            <StatCard number={<Counter end={3} />} label="Ongoing Studies" />
            <StatCard number={<Counter end={3500} suffix="+" />} label="Patients Monitored" />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-academic">
        <div className="container-academic">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">Areas of Focus</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="p-3 rounded-lg bg-accent/50 w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                <Stethoscope size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                Emergency Medicine
              </h3>
              <p className="text-muted-foreground">
                Advanced trauma care and emergency response in resource-limited settings, 
                with expertise in primary trauma care protocols.
              </p>
            </div>
            
            <div className="group">
              <div className="p-3 rounded-lg bg-accent/50 w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                <FlaskConical size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                Clinical Research
              </h3>
              <p className="text-muted-foreground">
                Epidemiological studies on cardiovascular disease, maternal health outcomes, 
                and healthcare delivery optimization.
              </p>
            </div>
            
            <div className="group">
              <div className="p-3 rounded-lg bg-accent/50 w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                <BookOpen size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                Medical Education
              </h3>
              <p className="text-muted-foreground">
                Clinical instruction and mentorship for medical students and junior doctors, 
                emphasizing evidence-based practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Achievements */}
      <section className="section-academic bg-warm-gradient">
        <div className="container-academic">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">Selected Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-academic border-l-4 border-l-medical-gold bg-yellow-50 hover:shadow-md">
              <span className="badge-gold mb-3">Leadership</span>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Project Manager & Lead Trainer
              </h3>
              <p className="text-sm text-muted-foreground">
                Life + Limb - Primary Trauma Care Foundation Northern Uganda Chapter — Training healthcare workers in emergency trauma response
              </p>
            </div>
            
            <div className="card-academic border-l-4 border-l-medical-gold bg-sky-50 hover:shadow-md">
              <span className="badge-gold mb-3">Research</span>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                MIMHA Project Coordinator
              </h3>
              <p className="text-sm text-muted-foreground">
                Leading integrated mental health and substance use recovery program through Research, counselling, psycho-education and referral service
              </p>
            </div>
            
            <div className="card-academic border-l-4 border-l-medical-gold bg-emerald-50 hover:shadow-md">
              <span className="badge-gold mb-3">Clinical</span>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                Medical Officer — St. Mary's Hospital Lacor, Gulu
              </h3>
              <p className="text-sm text-muted-foreground">
                Emergency department, internal medicine and Intensive Care Unit.
              </p>
            </div>
            
            <div className="card-academic border-l-4 border-l-medical-gold bg-purple-50 hover:shadow-md">
              <span className="badge-gold mb-3">Innovation</span>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                NUV-HOP Initiative
              </h3>
              <p className="text-sm text-muted-foreground">
                Northern Uganda Village Health Outreach Project — Community health outreach program focusing on preventive care and health education
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/about" className="link-academic">
              Learn more about my background →
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="section-academic bg-section-alt">
        <div className="container-academic">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
            Affiliations & Memberships
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <span className="text-sm font-medium">Uganda Medical Association</span>
            <span className="text-muted-foreground/30">•</span>
            <span className="text-sm font-medium">Life + Limb Primary Trauma Care Foundation</span>
            <span className="text-muted-foreground/30">•</span>
            <span className="text-sm font-medium">Gulu University Faculty of Medicine</span>
            <span className="text-muted-foreground/30">•</span>
            <span className="text-sm font-medium">African Research Network</span>
            <span className="text-sm font-medium">St. Mary's Hospital Lacor, Gulu</span>
          </div>
        </div>
      </section>
    </>
  );
}
