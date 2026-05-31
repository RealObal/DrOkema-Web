import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getAllTags, getPostBySlug } from "@/lib/blog";
import type { Post } from "@/lib/blog";
import { Rule } from "@/components/layout/MinimalPage";

function setMetaTag(attrName: string, content: string, useProperty = false) {
  const selector = useProperty ? `meta[property="${attrName}"]` : `meta[name="${attrName}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(useProperty ? "property" : "name", attrName);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  return el;
}

function usePostSeo(post: Post | null) {
  useEffect(() => {
    if (!post) return;

    const previousTitle = document.title;
    document.title = `${post.title} | Dr. Okema`;

    const tags = [
      setMetaTag("description", post.excerpt || ""),
      setMetaTag("og:title", post.title, true),
      setMetaTag("og:description", post.excerpt || "", true),
      setMetaTag("og:url", `https://drokema.com/blog/${post.slug}`, true),
      setMetaTag("og:type", "article", true),
      setMetaTag("twitter:card", "summary_large_image"),
    ];

    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.text = JSON.stringify({
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
    });
    document.head.appendChild(jsonLd);

    return () => {
      document.title = previousTitle;
      tags.forEach((tag) => tag.remove());
      jsonLd.remove();
    };
  }, [post]);
}

function Sidebar() {
  const recentPosts = getAllPosts().slice(0, 5);
  const allTags = getAllTags();

  return (
    <aside className="space-y-8 border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      {recentPosts.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Recent Posts
          </h2>
          <div className="mt-4 divide-y divide-slate-200">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block py-4 text-sm font-semibold leading-6 text-slate-800 hover:text-medical-teal"
              >
                {post.title}
                <span className="mt-1 block text-xs font-normal text-slate-500">{post.date}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {allTags.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Labels
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-medical-teal hover:text-medical-teal"
              >
                {tag}
              </Link>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  usePostSeo(post);

  if (!post) {
    return (
      <main className="bg-white text-slate-900">
        <div className="container-academic max-w-5xl py-16 sm:py-20">
          <h1 className="text-4xl font-semibold text-medical-navy">Post not found</h1>
          <p className="mt-4 text-slate-600">The requested post could not be located.</p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-slate-900">
      <div className="container-academic max-w-6xl py-14 sm:py-20">
        <header className="max-w-4xl">
          {post.tags && post.tags.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-medical-teal hover:text-medical-teal"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
          <h1 className="text-4xl font-semibold leading-tight text-medical-navy sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm font-semibold text-medical-teal">
            {[post.author, post.date, post.readTime ? `${post.readTime} min read` : ""]
              .filter(Boolean)
              .join(" | ")}
          </p>
        </header>

        {post.previewImage && (
          <>
            <Rule />
            <img
              src={post.previewImage}
              alt={post.title}
              className="max-h-[28rem] w-full rounded-md border border-slate-200 object-cover"
            />
          </>
        )}

        <Rule />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article
            className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-medical-navy prose-a:text-medical-teal prose-a:no-underline hover:prose-a:text-medical-navy prose-img:rounded-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Sidebar />
        </div>

        <Rule />
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to blog
        </Link>
      </div>
    </main>
  );
}
