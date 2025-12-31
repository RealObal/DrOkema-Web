interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className = "",
  align = "center" 
}: SectionHeaderProps) {
  const alignmentClasses = align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <div className={`mb-12 relative z-10 ${className}`}>
      <div className={`flex flex-col ${alignmentClasses}`}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
          {title}
        </h1>
        {/* Decorative underline matching the blue theme */}
        <div className="h-1.5 w-24 bg-sky-500 rounded-full mb-6 opacity-80" />
        
        {subtitle && (
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
