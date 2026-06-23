import { Helmet } from 'react-helmet-async';

interface JsonLdSchemaProps {
  type: 'person' | 'organization';
}

export function JsonLdSchema({ type }: JsonLdSchemaProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Okema James Nelson",
    "url": "https://drokema.com",
    "image": "https://drokema.com/Dr%20Okemas%20Profile%20photo.png",
    "sameAs": [
      "https://www.linkedin.com/in/dr-okema",
      "https://x.com/DrJNELLY95"
    ],
    "jobTitle": "Medical Doctor and Clinical Researcher",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "St. Mary's Hospital Lacor",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gulu",
        "addressCountry": "UG"
      }
    },
    "medicalSpecialty": ["Emergency Medicine", "Cardiology"],
    "affiliation": [
      {
        "@type": "EducationalOrganization",
        "name": "Gulu University"
      },
      {
        "@type": "MedicalOrganization",
        "name": "St. Mary's Hospital Lacor"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Dr. Okema James Nelson",
    "url": "https://drokema.com",
    "logo": "https://drokema.com/favicon.png",
    "medicalSpecialty": ["Emergency Medicine", "Cardiology"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gulu",
      "addressCountry": "UG"
    }
  };

  const schema = type === 'person' ? personSchema : organizationSchema;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
