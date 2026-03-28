import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getPostBySlug, getAllPosts, getAllTags } from "@/lib/blog";

// ──────────────────────────────────────────────
// SEO helpers (unchanged from original)
// ──────────────────────────────────────────────

function setMetaTag(
  attrName: string,
  attrValue: string,
  content: string,
  useProperty = false
) {
  const selector = useProperty
    ? `meta[property="${attrName}"]`
    : `meta[name="${attrName}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    if (useProperty) el.setAttribute("property", attrName);
    else el.setAttribute("name", attrName);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

function addJsonLd(post: any) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: post.author || "",
    description: post.excerpt || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://drokema.com/blog/${post.slug}`,
    },
  };
  script.text = JSON.stringify(json);
  document.head.appendChild(script);
  return script;
}

export function usePostSeo(post: any) {
  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} | Dr. Okema`;

    const descMeta = setMetaTag("description", "description", post.excerpt || "");
    const ogTitle = setMetaTag("og:title", "property", post.title, true);
    const ogDesc = setMetaTag("og:description", "property", post.excerpt || "", true);
    const ogUrl = setMetaTag("og:url", "property", `https://drokema.com/blog/${post.slug}`, true);
    const ogType = setMetaTag("og:type", "property", "article", true);
    const ogImage = setMetaTag(
      "og:image",
      "property",
      `https://drokema.com${post.previewImage || "/images/preview.jpg"}`,
      true
    );
    const twitterCard = setMetaTag("twitter:card", "name", "summary_large_image");
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

// ──────────────────────────────────────────────
// Sidebar component
// ──────────────────────────────────────────────

function Sidebar() {
  // Fetch recent posts and tags from your lib/blog helpers.
  // Replace these with the real calls that exist in your codebase.
  const recentPosts = getAllPosts?.()?.slice(0, 5) ?? [];
  const allTags = getAllTags?.() ?? [];

  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 space-y-10">

      {/* Search */}
      <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
          Search
        </h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search posts…"
            className="flex-1 border border-slate-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-1.5 rounded transition-colors">
            Go
          </button>
        </div>
      </div>

      {/* About */}
      <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
          About
        </h3>
        <div className="flex items-start gap-3">
          <img
            src="/images/okema-avatar.jpg"
            alt="Dr. Okema"
            className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-slate-200"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://ui-avatars.com/api/?name=Dr+Okema&background=0ea5e9&color=fff";
            }}
          />
          <div>
            <p className="font-semibold text-slate-800 text-sm">Dr. Okema</p>
            <p className="text-xs text-slate-500 mt-0.5">Faculty Physician</p>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Dr. Okema is a physician and educator sharing insights on clinical
              medicine, M&E in health, and evidence-based practice.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            Recent Posts
          </h3>
          <ul className="space-y-3">
            {recentPosts.map((p: any) => (
              <li key={p.slug} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <Link
                  to={`/blog/${p.slug}`}
                  className="text-sm text-sky-700 hover:text-sky-900 hover:underline font-medium leading-snug"
                >
                  {p.title}
                </Link>
                <p className="text-xs text-slate-400 mt-0.5">{p.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags / Labels */}
      {allTags.length > 0 && (
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            Labels
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag: string) => (
              <Link
                key={tag}
                to={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-xs bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-700 rounded px-2 py-0.5 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

    </aside>
  );
}

// ──────────────────────────────────────────────
// Main BlogPost page
// ──────────────────────────────────────────────

export default function BlogPost() {
  const { slug } = useParams();

  if (!slug) {
    return (
      <div className="py-16 px-4 text-center text-slate-600">Post not found.</div>
    );
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="py-16 md:py-24 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10">
          <main className="flex-1">
            <h1 className="text-2xl font-semibold text-slate-800">Post not found</h1>
            <p className="mt-4 text-slate-600">The requested post could not be located.</p>
            <Link to="/blog" className="mt-4 inline-block text-sky-600 hover:underline text-sm">
              ← Back to blog
            </Link>
          </main>
          <Sidebar />
        </div>
      </div>
    );
  }

  // Apply SEO metadata
  usePostSeo(post);

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero / post header banner */}
      <div className="bg-white border-b border-slate-200 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tags row */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-xs bg-sky-50 text-sky-700 border border-sky-200 rounded px-2 py-0.5 hover:bg-sky-100 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-4xl">
            {post.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            {post.author && (
              <span className="font-medium text-slate-700">{post.author}</span>
            )}
            {post.author && post.date && <span>·</span>}
            {post.date && <span>{post.date}</span>}
            {post.readTime && (
              <>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Preview image */}
      {post.previewImage && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <img
            src={post.previewImage}
            alt={post.title}
            className="w-full max-h-80 object-cover rounded-lg shadow-sm"
          />
        </div>
      )}

      {/* Two-column body: content + sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Main post content */}
          <main className="flex-1 min-w-0">
            <article
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-slate-900
                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg prose-img:shadow-sm
                prose-blockquote:border-sky-400 prose-blockquote:bg-sky-50 prose-blockquote:rounded-r-lg prose-blockquote:py-1"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back link */}
            <div className="mt-12 pt-6 border-t border-slate-200">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-800 text-sm font-medium transition-colors"
              >
                <span>←</span>
                <span>Back to blog</span>
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <Sidebar />

        </div>
      </div>
    </div>
  );
}