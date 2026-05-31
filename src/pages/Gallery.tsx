import { useState } from "react";
import { X } from "lucide-react";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";

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
  "con1.jpeg",
  "con2.jpeg",
  "con3.jpeg",
  "con4.jpeg",
  "con5.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <MinimalPage
      eyebrow="Gallery"
      title="Gallery"
      intro="Images from professional activities, conferences, training programs, and community outreach."
      maxWidth="max-w-6xl"
    >
      <Rule />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            className="group overflow-hidden rounded-md border border-slate-200 bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-teal focus-visible:ring-offset-2"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={`/${image}`}
              alt={image.replace(/\.(jpeg|png)$/i, "")}
              className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
          <img
            src={`/${selectedImage}`}
            alt="Full screen view"
            className="max-h-[90vh] max-w-full rounded-md object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </MinimalPage>
  );
}
