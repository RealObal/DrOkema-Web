import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function SEOHead({
  title = "Dr. Okema James Nelson | Emergency & Cardiovascular Care in Uganda",
  description = "Dr. Okema James Nelson is a Ugandan medical doctor and clinical researcher focused on emergency medicine, cardiovascular care, trauma training, and health systems strengthening.",
  image = "https://drokema.com/Dr%20Okemas%20Profile%20photo.png",
  url = "https://drokema.com/",
  type = "website"
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dr. Okema James Nelson" />
      
      <link rel="canonical" href={url} />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
