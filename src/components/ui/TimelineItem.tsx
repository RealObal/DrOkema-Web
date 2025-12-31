interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description?: string;
  location?: string;
}

export function TimelineItem({
  title,
  organization,
  period,
  description,
  location,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 border-l border-border last:pb-0">
      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-primary/20 border-2 border-primary" />
      
      <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
        <h3 className="text-lg font-serif font-semibold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      
      <p className="text-primary font-medium mb-1">{organization}</p>
      
      {location && (
        <p className="text-sm text-muted-foreground mb-2">{location}</p>
      )}
      
      {description && (
        <p className="text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
}
