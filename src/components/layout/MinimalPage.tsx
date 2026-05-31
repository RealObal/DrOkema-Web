import { ReactNode } from "react";

interface MinimalPageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  maxWidth?: string;
}

export function Rule() {
  return <div className="my-9 h-px w-full bg-slate-200" aria-hidden="true" />;
}

export function MinimalPage({
  eyebrow,
  title,
  intro,
  children,
  maxWidth = "max-w-5xl",
}: MinimalPageProps) {
  return (
    <main className="bg-white text-slate-900">
      <div className={`container-academic ${maxWidth} py-14 sm:py-20`}>
        <header>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-medical-teal">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal text-medical-navy sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <>
              <Rule />
              <p className="max-w-3xl font-serif text-2xl leading-tight text-slate-700 sm:text-3xl">
                {intro}
              </p>
            </>
          )}
        </header>
        {children}
      </div>
    </main>
  );
}
