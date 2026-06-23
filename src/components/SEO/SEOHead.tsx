import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEOHead({
  title = "Dr. Okema James Nelson, MBChB | Physician-Scientist in Emergency & Cardiovascular Medicine",
  description = "Dr. Okema James Nelson is a Ugandan physician-scientist specializing in emergency medicine, cardiovascular research, and health systems strengthening in Northern Uganda.",
  image = "https://drokema.com/Dr%20Okemas%20Profile%20photo.png",
  url = "https://drokema.com/",
  type = "website"
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Emergency Medicine, Cardiovascular Research, Clinical Research Uganda, Physician Scientist, Medical Doctor, Health Systems Strengthening" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dr. Okema James Nelson" />
      
      <link rel="canonical" href={url} />
      
      <meta property="og:site_name" content="Dr. Okema James Nelson" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@DrJNELLY95" />
      <meta property="twitter:creator" content="@DrJNELLY95" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
