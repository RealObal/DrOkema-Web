import React from "react";

type Props = {
  phone?: string;
  message?: string;
};

export const WhatsAppFloat: React.FC<Props> = ({
  phone = "+256776994589",
  message = "Hello Dr Okema, I would like to discuss...",
}) => {
  const phoneDigits = phone.replace(/\D/g, "");
  const href = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      role="button"
      className="fixed z-50 right-4 bottom-4 sm:right-5 md:right-6 inline-flex items-center justify-center rounded-full shadow-lg bg-transparent"
    >
      <div className="w-11 h-11 sm:w-12 md:w-14 rounded-full overflow-hidden flex items-center justify-center">
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="w-full h-full object-contain block max-w-full max-h-full"
          decoding="async"
        />
      </div>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
