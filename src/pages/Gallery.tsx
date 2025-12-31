import { useState } from "react";
import { X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "About me .jpeg",
    "Awarding Medical quiz .jpeg",
    "Conference 1.jpeg",
    "context.jpeg",
    "Dr Okemas Profile photo.png",
    "Evaluation.jpeg",
    "Lung institute conference.jpeg",
    "orientation of volunteers.jpeg",
    "Outreach Day .jpeg",
    "Outreach day 2.jpeg",
    "outreach day 3.jpeg",
    "post outreach.jpeg",
    "Safe Road 1.jpeg",
    "Task force 2.jpeg",
    "Task Force Meeting .jpeg",
    "team.jpeg",
    "Vcat For cover.jpeg",
    "Vcat moderation.jpeg",
  ];

  return (
    <div className="section-academic bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <div className="container-academic">
        <SectionHeader
          title="Gallery"
        />

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-md shadow-lg shadow-blue-900/5 rounded-2xl p-8 text-center border border-blue-100 transform hover:scale-[1.01] transition-all duration-500">
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              A collection of images showcasing Dr. Okema's professional activities, conferences, and community outreach efforts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 border border-slate-100 transition-all duration-500 bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={`/${image}`}
                alt={image.replace(/\.(jpeg|png)$/i, "").replace(/ /g, " ")}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <img
              src={`/${selectedImage}`}
              alt="Full screen view"
              className="max-h-[90vh] max-w-full rounded-md shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
