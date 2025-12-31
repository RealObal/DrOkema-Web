import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Using a professional medical/research placeholder image */}
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
          alt="Medical Research Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay: Dark Sky Blue to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/90 via-sky-800/85 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="container-academic relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight animate-fade-in">
          Dr. Okema James Nelson
        </h1>
        
        <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up">
          Advancing emergency and cardiovascular care through rigorous clinical research 
          and compassionate medical practice in resource-limited settings.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-100">
          <Link
            to="/research"
            className="px-8 py-4 bg-white text-sky-900 hover:bg-sky-50 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            View Research
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Bottom Fade: Blends the hero section into the main page background (slate-50) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}