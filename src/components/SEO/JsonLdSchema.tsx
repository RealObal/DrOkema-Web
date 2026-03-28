import { Helmet } from 'react-helmet-async';

interface JsonLdSchemaProps {
  type: 'person' | 'organization';
}

export function JsonLdSchema({ type }: JsonLdSchemaProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Okema James Nelson",
    "url": "https://drokema.com",
    "image": "https://drokema.com/path-to-your-profile-image.jpg", // Replace with actual image URL
    "sameAs": [
      "https://linkedin.com/in/your-profile", // Replace with actual LinkedIn
      "https://orcid.org/your-orcid-id", // Replace with actual ORCID
      "https://scholar.google.com/citations?user=your-user-id" // Replace with actual Google Scholar
    ],
    "jobTitle": "Physician-Scientist and Clinical Researcher",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "St. Mary's Hospital Lacor",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gulu",
        "addressCountry": "UG"
      }
    },
    "medicalSpecialty": ["Cardiology", "Emergency Medicine"],
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
    "name": "Dr. Okema James Nelson Medical Practice",
    "url": "https://drokema.com",
    "logo": "https://drokema.com/path-to-logo.jpg", // Replace with actual logo URL
    "medicalSpecialty": ["Cardiology", "Emergency Medicine"],
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