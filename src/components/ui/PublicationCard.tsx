import { FileText, ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors: string;
  journal?: string;
  year: string;
  status?: "published" | "under-review" | "ongoing" | "preprint";
  doi?: string;
  pdfUrl?: string;
}

export function PublicationCard({
  title,
  authors,
  journal,
  year,
  status = "published",
  doi,
  pdfUrl,
}: PublicationCardProps) {
  const statusLabels = {
    published: "Published",
    "under-review": "Under Review",
    ongoing: "Ongoing",
    preprint: "Preprint",
  };

  const statusColors = {
    published: "bg-accent text-accent-foreground",
    "under-review": "badge-gold",
    ongoing: "bg-muted text-muted-foreground",
    preprint: "bg-secondary text-secondary-foreground",
  };

  return (
    <article className="publication-item group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`badge-academic ${statusColors[status]}`}>
              {statusLabels[status]}
            </span>
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          
          <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-1">{authors}</p>
          
          {journal && (
            <p className="text-sm text-muted-foreground italic">{journal}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          {pdfUrl && (
            <a
              href={pdfUrl}
              className="btn-academic-ghost text-sm"
              title="Download PDF"
            >
              <FileText size={18} className="mr-1" />
              PDF
            </a>
          )}
          {doi && (
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-academic-ghost text-sm"
              title="View DOI"
            >
              <ExternalLink size={18} className="mr-1" />
              DOI
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
