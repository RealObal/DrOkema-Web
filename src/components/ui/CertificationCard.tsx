import { Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  category: string;
}

export function CertificationCard({
  title,
  issuer,
  year,
  category,
}: CertificationCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-medical-gold/10">
      <div className="gold-icon-container">
        <Award size={20} />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{issuer}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="badge-gold text-xs">{category}</span>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
      </div>
    </div>
  );
}
