import React from "react";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: React.ReactNode;
  description: string;
  role?: React.ReactNode;
  outcomes?: React.ReactNode[];
  partners?: string[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  role,
  outcomes,
  partners,
  className = "",
}: ProjectCardProps) {
  return (
    <article className={`card-academic group ${className}`}>
      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      {role && (
        <p className="text-sm font-medium text-primary mb-3">{role}</p>
      )}
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {outcomes && outcomes.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
            Key Outcomes
          </h4>
          <ul className="space-y-1">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <ArrowRight size={14} className="mr-2 mt-1 text-primary/60 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {partners && partners.length > 0 && (
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Partners:</span> {partners.join(", ")}
          </p>
        </div>
      )}
    </article>
  );
}
