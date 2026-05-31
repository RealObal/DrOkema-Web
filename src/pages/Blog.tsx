import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";
import { posts } from "@/lib/blog";

export default function Blog() {
  const sortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <MinimalPage
      eyebrow="Blog"
      title="Writing"
      intro="Short posts about clinical practice, research, teaching, and lessons from frontline health work."
    >
      <Rule />
      <section className="divide-y divide-slate-200">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="grid gap-5 py-8 first:pt-0 lg:grid-cols-[0.25fr_0.75fr]">
            <div className="text-sm font-semibold text-medical-teal">{post.date}</div>
            <div>
              <h2 className="text-2xl font-semibold leading-snug text-slate-900">
                <Link to={`/blog/${post.slug}`} className="hover:text-medical-teal">
                  {post.title}
                </Link>
              </h2>
              {post.author && <p className="mt-2 text-sm text-slate-500">{post.author}</p>}
              <p className="mt-4 text-base leading-8 text-slate-700">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-medical-teal hover:text-medical-navy"
              >
                Read more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </MinimalPage>
  );
}
