import { SectionHeader } from "@/components/ui/SectionHeader";
import { Download, FileText, Image, File } from "lucide-react";

export default function CV() {
  const downloads = [
    {
      title: "Academic Curriculum Vitae",
      description: "Complete academic CV including education, publications, and professional experience",
      format: "PDF",
      size: "420 KB",
      icon: FileText,
      href: "/documents/Dr.Okema_Resume_2025.pdf",
    },
    {
      title: "Publication List",
      description: "Comprehensive list of peer-reviewed publications with citations",
      format: "PDF",
      size: "120 KB",
      icon: FileText,
      href: "/documents/Dr_Okema_Publications_2025.pdf",
    },
    {
      title: "Research Statement",
      description: "Overview of research interests, ongoing projects, and future directions",
      format: "PDF",
      size: "85 KB",
      icon: FileText,
      href: "/documents/Dr_Okema_Research_Statement.pdf",
    },
    {
      title: "Teaching Statement",
      description: "Teaching philosophy and experience summary",
      format: "PDF",
      size: "72 KB",
      icon: FileText,
      href: "/documents/Dr_Okema_Teaching_Statement.pdf",
    },
  ];

  const abstracts = [
    {
      title: "Cardiovascular Disease Burden in Northern Uganda",
      conference: "Pan-African Society of Cardiology Annual Meeting",
      year: "2023",
      href: "/documents/abstracts/Cardio_Burden_2023.pdf",
    },
    {
      title: "Emergency Care Capacity Assessment: A Multi-site Study",
      conference: "African Conference on Emergency Medicine",
      year: "2022",
      href: "/documents/abstracts/Emergency_Capacity_2022.pdf",
    },
    {
      title: "Maternal Mental Health in Post-Conflict Settings",
      conference: "Global Mental Health Conference",
      year: "2023",
      href: "/documents/abstracts/Maternal_MH_2023.pdf",
    },
  ];

  const posters = [
    {
      title: "Implementation of Primary Trauma Care in Rural Uganda",
      conference: "World Trauma Congress",
      year: "2021",
      href: "/documents/posters/PTC_Implementation_2021.pdf",
    },
    {
      title: "Hypertension Control Among Rural Adults",
      conference: "International Society of Hypertension Meeting",
      year: "2020",
      href: "/documents/posters/Hypertension_Rural_2020.pdf",
    },
  ];

  return (
    <div className="section-academic bg-hero-gradient">
      <div className="container-academic">
        <SectionHeader
          title="CV & Downloads"
          subtitle="Access academic documents, abstracts, posters, and reports for scholarship, fellowship, and collaboration purposes."
        />

        {/* Main Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {downloads.map((item, index) => {
            const colors = ['bg-accent-gradient', 'bg-warm-gradient', 'bg-section-accent', 'bg-highlight'];
            return (
              <a
                key={index}
                href={item.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className={`card-academic group cursor-pointer hover:border-primary/40 block ${colors[index % colors.length]}`}
              >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-colors">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {item.format}
                    </span>
                    <span className="btn-academic-ghost text-sm py-1 px-3">
                      <Download size={16} className="mr-1" />
                      Download
                    </span>
                  </div>
                </div>
              </div>
            </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Abstracts */}
          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Conference Abstracts
            </h2>
            <div className="space-y-4">
              {abstracts.map((abstract, index) => {
                const colors = ['bg-accent-gradient', 'bg-warm-gradient', 'bg-section-accent'];
                return (
                  <div key={index} className={`flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors ${colors[index % colors.length]}`}>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{abstract.title}</h4>
                      <p className="text-sm text-muted-foreground">{abstract.conference}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-muted-foreground">{abstract.year}</span>
                      <a
                        href={abstract.href}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        <Download size={16} className="text-primary" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Posters */}
          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Research Posters
            </h2>
            <div className="space-y-4">
              {posters.map((poster, index) => {
                const colors = ['bg-accent-gradient', 'bg-warm-gradient'];
                return (
                  <div key={index} className={`flex items-start justify-between gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors ${colors[index % colors.length]}`}>
                    <div className="flex items-start gap-3">
                      <Image size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{poster.title}</h4>
                        <p className="text-sm text-muted-foreground">{poster.conference}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-muted-foreground">{poster.year}</span>
                      <a
                        href={poster.href}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        <Download size={16} className="text-primary" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Reports & Other Documents */}
        <div className="divider-academic" />

        <section className="mt-12">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
            Reports & Technical Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-academic text-center group cursor-pointer">
              <File size={32} className="mx-auto mb-3 text-primary" />
              <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                MIMHA Study Protocol
              </h4>
              <p className="text-xs text-muted-foreground">PDF • 1.2 MB</p>
            </div>
            <div className="card-academic text-center group cursor-pointer">
              <File size={32} className="mx-auto mb-3 text-primary" />
              <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                PTC Training Manual
              </h4>
              <p className="text-xs text-muted-foreground">PDF • 3.5 MB</p>
            </div>
            <div className="card-academic text-center group cursor-pointer">
              <File size={32} className="mx-auto mb-3 text-primary" />
              <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                NUV-HOP Annual Report
              </h4>
              <p className="text-xs text-muted-foreground">PDF • 890 KB</p>
            </div>
          </div>
        </section>

        {/* Note */}
        <div className="mt-12 p-6 rounded-lg bg-accent/50 text-center">
          <p className="text-sm text-muted-foreground">
            For additional materials or specific document requests, please{" "}
            <a href="/contact" className="link-academic">
              contact me directly
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
