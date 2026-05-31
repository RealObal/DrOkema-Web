import { Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";

const downloads = [
  {
    title: "Academic Curriculum Vitae",
    description: "Complete academic CV including education, publications, and professional experience.",
    format: "PDF",
    href: "/documents/Dr.Okema_Resume_2025.pdf",
  },
  {
    title: "Publication List",
    description: "Comprehensive list of peer-reviewed publications with citations.",
    format: "PDF",
    href: "/documents/Dr_Okema_Publications_2025.pdf",
  },
  {
    title: "Research Statement",
    description: "Overview of research interests, ongoing projects, and future directions.",
    format: "PDF",
    href: "/documents/Dr_Okema_Research_Statement.pdf",
  },
  {
    title: "Teaching Statement",
    description: "Teaching philosophy and experience summary.",
    format: "PDF",
    href: "/documents/Dr_Okema_Teaching_Statement.pdf",
  },
];

const materials = [
  "MIMHA Study Protocol",
  "PTC Training Manual",
  "NUV-HOP Annual Report",
  "Conference Abstracts",
  "Research Posters",
];

export default function CV() {
  return (
    <MinimalPage
      eyebrow="Downloads"
      title="CV & Downloads"
      intro="Academic documents, statements, abstracts, posters, and reports for scholarship, fellowship, and collaboration purposes."
    >
      <Rule />
      <section className="divide-y divide-slate-200">
        {downloads.map((item) => (
          <a
            key={item.title}
            href={item.href}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-4 py-7 first:pt-0 lg:grid-cols-[0.32fr_0.68fr]"
          >
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-medical-teal" aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-slate-900 group-hover:text-medical-teal">
                {item.title}
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-700">{item.description}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-medical-teal">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download {item.format}
              </span>
            </div>
          </a>
        ))}
      </section>

      <Rule />
      <section className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
        <h2 className="text-3xl font-semibold text-medical-navy">Other Materials</h2>
        <div className="flex flex-wrap gap-3">
          {materials.map((item) => (
            <span
              key={item}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <Rule />
      <p className="text-base leading-8 text-slate-700">
        For additional materials or specific document requests, please{" "}
        <Link to="/contact" className="font-semibold text-medical-teal hover:text-medical-navy">
          contact Dr. Okema directly
        </Link>
        .
      </p>
    </MinimalPage>
  );
}
