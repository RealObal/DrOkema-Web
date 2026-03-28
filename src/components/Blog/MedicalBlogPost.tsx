import { ReactNode } from 'react';

interface MedicalBlogPostProps {
  title: string;
  abstract?: ReactNode;
  introduction?: ReactNode;
  casePresentation: ReactNode;
  diagnosticEvaluation: ReactNode;
  managementOutcomes: ReactNode;
  references?: ReactNode;
  publishedDate: string;
  author: string;
}

export function MedicalBlogPost({
  title,
  abstract,
  introduction,
  casePresentation,
  diagnosticEvaluation,
  managementOutcomes,
  references,
  publishedDate,
  author
}: MedicalBlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="text-sm text-slate-600">
          <span>By {author}</span>
          <time dateTime={publishedDate} className="ml-4">
            {new Date(publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {abstract && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Abstract</h2>
          <div className="prose prose-slate max-w-none">
            {abstract}
          </div>
        </section>
      )}

      {introduction && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Introduction</h2>
          <div className="prose prose-slate max-w-none">
            {introduction}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Clinical Case Presentation</h2>
        <div className="prose prose-slate max-w-none">
          {casePresentation}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Diagnostic Evaluation</h2>
        <div className="prose prose-slate max-w-none">
          {diagnosticEvaluation}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Management & Outcomes</h2>
        <div className="prose prose-slate max-w-none">
          {managementOutcomes}
        </div>
      </section>

      {references && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">References</h2>
          <div className="prose prose-slate max-w-none">
            {references}
          </div>
        </section>
      )}
    </article>
  );
}