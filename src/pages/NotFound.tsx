import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="bg-white text-slate-900">
      <div className="container-academic flex min-h-[70vh] max-w-5xl flex-col justify-center py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-medical-teal">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-medical-navy">Page not found</h1>
        <div className="my-9 h-px w-full bg-slate-200" aria-hidden="true" />
        <p className="max-w-2xl font-serif text-2xl leading-tight text-slate-700">
          The page you requested could not be located.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
