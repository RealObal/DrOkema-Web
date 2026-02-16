import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getPostBySlug } from "@/lib/blog";

export default function BlogPost() {
  const { slug } = useParams();
  if (!slug) return <div className="p-8">Post not found.</div>;

  const post = getPostBySlug(slug);
  if (!post) {
    return (
      <div className="py-16 md:py-24">
        <div className="container-academic">
          <h1 className="text-2xl font-semibold">Post not found</h1>
          <p className="mt-4">The requested post could not be located.</p>
          <p className="mt-4">
            <Link to="/blog" className="text-sky-500 hover:underline">
              Back to blog
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // apply SEO metadata for this post
  usePostSeo(post);

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container-academic prose max-w-none">
        <h1 className="font-serif">{post.title}</h1>
        <p className="text-sm text-muted-foreground">{post.date} {post.author ? `• ${post.author}` : null}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p className="mt-8">
          <Link to="/blog" className="text-sky-500 hover:underline">
            ← Back to blog
          </Link>
        </p>
      </div>
    </div>
  );
}

function setMetaTag(attrName: string, attrValue: string, content: string, useProperty = false) {
  const selector = useProperty ? `meta[property="${attrName}"]` : `meta[name="${attrName}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    if (useProperty) el.setAttribute('property', attrName);
    else el.setAttribute('name', attrName);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}

function addJsonLd(post: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.date,
    "author": post.author || "",
    "description": post.excerpt || "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://drokema.com/blog/${post.slug}`
    }
  };
  script.text = JSON.stringify(json);
  document.head.appendChild(script);
  return script;
}

// Set head meta tags when viewing a post
export function usePostSeo(post: any) {
  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} | Dr. Okema`;

    const descMeta = setMetaTag('description', 'description', post.excerpt || '');
    const ogTitle = setMetaTag('og:title', 'property', post.title, true);
    const ogDesc = setMetaTag('og:description', 'property', post.excerpt || '', true);
    const ogUrl = setMetaTag('og:url', 'property', `https://drokema.com/blog/${post.slug}`, true);
    const ogType = setMetaTag('og:type', 'property', 'article', true);
    const ogImage = setMetaTag('og:image', 'property', `https://drokema.com${post.previewImage || '/images/preview.jpg'}`, true);
    const twitterCard = setMetaTag('twitter:card', 'name', 'summary_large_image');

    const jsonLd = addJsonLd(post);

    return () => {
      document.title = prevTitle;
      descMeta.remove();
      ogTitle.remove();
      ogDesc.remove();
      ogUrl.remove();
      ogType.remove();
      ogImage.remove();
      twitterCard.remove();
      jsonLd.remove();
    };
  }, [post]);
}
