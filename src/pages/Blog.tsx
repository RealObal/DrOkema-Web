import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { posts } from "@/lib/blog";

export default function Blog() {
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container-academic">
        <SectionHeader
          title="Blog"
          subtitle="Short posts about clinical practice, research, and teaching."
        />

        <div className="mt-8 grid gap-6">
          {posts
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post) => (
            <article key={post.slug} className="p-6 rounded-lg bg-white shadow-sm">
              <h3 className="text-2xl font-serif font-semibold mb-2">
                <Link to={`/blog/${post.slug}`} className="text-sky-700 hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.date} {post.author ? `• ${post.author}` : null}</p>
              <p className="text-slate-700">{post.excerpt}</p>
              <div className="mt-4">
                <Link to={`/blog/${post.slug}`} className="text-sky-500 hover:underline">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
