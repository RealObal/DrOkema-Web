import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEO/SEOHead";
import { JsonLdSchema } from "@/components/SEO/JsonLdSchema";
import { Counter } from "@/components/ui/Counter";

/* ─── Inline styles (Poppins, clean white, matches drolum.com) ────────────── */
const S = {
  page: {
    fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    color: "#1a1a1a",
    background: "#fff",
  },
  wrap: { maxWidth: 860, margin: "0 auto", padding: "0 1.5rem" },

  /* Hero */
  heroWrap: { padding: "4rem 1.5rem 3rem", maxWidth: 860, margin: "0 auto" },
  heroName: { fontSize: "2.2rem", fontWeight: 800, color: "#111827", marginBottom: "0.6rem", lineHeight: 1.2 },
  heroQuote: { fontSize: "1.1rem", fontStyle: "italic", color: "#4b5563", marginBottom: "0.25rem" },
  heroAuthor: { fontSize: "1rem", fontWeight: 700, color: "#2563eb", marginBottom: 0 },

  divider: { border: "none", borderTop: "1px solid #e5e7eb", margin: "3rem 0" },

  /* Section heading */
  sectionH2: { fontSize: "1.55rem", fontWeight: 800, color: "#111827", marginBottom: "1.25rem" },

  /* About blurb */
  bodyText: { fontSize: "1rem", lineHeight: 1.9, color: "#374151", marginBottom: "1rem" },
  moreLink: { display: "inline-block", marginTop: "0.5rem", color: "#2563eb", fontWeight: 600, textDecoration: "none", fontSize: "0.97rem" },

  /* Research Interests */
  interestGrid: { display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.5rem" },
  interestTag: {
    padding: "0.45rem 1.1rem",
    border: "1px solid #2563eb",
    borderRadius: 999,
    color: "#2563eb",
    fontWeight: 600,
    fontSize: "0.9rem",
    background: "transparent",
  },

  /* Scholarly counters */
  counterGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", margin: "1.5rem 0" },
  counterBox: { textAlign: "center" },
  counterNum: { fontSize: "2.8rem", fontWeight: 800, color: "#2563eb", lineHeight: 1 },
  counterLabel: { fontSize: "0.85rem", color: "#6b7280", marginTop: "0.3rem", fontWeight: 500 },
  scMoreLink: { display: "inline-block", color: "#2563eb", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" },

  /* Books */
  bookItem: { display: "flex", gap: "1.25rem", marginBottom: "2rem", alignItems: "flex-start" },
  bookImg: { width: 72, flexShrink: 0, borderRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.12)" },
  bookText: { fontSize: "0.97rem", lineHeight: 1.75, color: "#374151" },
  bookLink: { color: "#2563eb", textDecoration: "none", fontSize: "0.88rem" },

  /* Awards */
  awardItem: { marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid #f3f4f6" },
  awardTitle: { fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "0.2rem" },
  awardYear: { fontSize: "0.88rem", color: "#6b7280", fontWeight: 500 },

  /* Blog */
  blogGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2rem", marginTop: "1.25rem" },
  blogCard: { borderBottom: "2px solid #e5e7eb", paddingBottom: "1.5rem" },
  blogImg: { width: "100%", height: 200, objectFit: "cover", borderRadius: 8, marginBottom: "1rem", display: "block", background: "#f3f4f6" },
  blogImgPlaceholder: { width: "100%", height: 200, borderRadius: 8, marginBottom: "1rem", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", color: "#93c5fd", fontSize: "2.5rem" },
  blogTitle: { fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "0.4rem", lineHeight: 1.45, textDecoration: "none" },
  blogMeta: { fontSize: "0.82rem", color: "#6b7280", marginBottom: "0.6rem" },
  blogMetaDot: { margin: "0 0.35rem", color: "#d1d5db" },
  blogCategory: { color: "#2563eb", textDecoration: "none" },
  blogExcerpt: { fontSize: "0.94rem", color: "#4b5563", lineHeight: 1.75, marginBottom: "0.75rem" },
  blogReadMore: { color: "#2563eb", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" },
};

/* ─── Static blog posts (replace with real data / API fetch as needed) ───── */
const BLOG_POSTS = [
  {
    id: 1,
    slug: "/blog/emergency-care-northern-uganda",
    title: "Strengthening Emergency Care in Post-Conflict Northern Uganda: Lessons from the Field.",
    author: "Dr. Okema James Nelson",
    date: "March 10, 2025",
    category: "Clinical Practice",
    categorySlug: "/blog",
    excerpt:
      "Working in the emergency department at St. Mary's Hospital Lacor, I have seen how quickly the gap between what we know and what we can deliver becomes a matter of life or death...",
    image: null,
  },
  {
    id: 2,
    slug: "/blog/cardiovascular-disease-uganda",
    title: "The Rising Burden of Cardiovascular Disease in Uganda: What the Data Are Telling Us.",
    author: "Dr. Okema James Nelson",
    date: "January 22, 2025",
    category: "Research",
    categorySlug: "/blog",
    excerpt:
      "For decades, infectious diseases dominated Uganda's health narrative. But a quieter epidemic has been building — one that now accounts for a growing share of preventable deaths in hospitals...",
    image: null,
  },
];

/* ─── Component ────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <SEOHead />
      <JsonLdSchema type="person" />

      <div style={S.page}>

        {/* ── HERO: Name + Quote ──────────────────────────────────────────── */}
        <div style={S.heroWrap}>
          <h1 style={S.heroName}>Dr. Okema James Nelson, MBChB.</h1>
          <p style={S.heroQuote}>
            "Research is to see what everybody else has seen, and to think what nobody else has thought."
          </p>
          <p style={S.heroAuthor}>— Albert Szent-Györgyi</p>
        </div>

        <div style={S.wrap}>

          <hr style={S.divider} />

          {/* ── ABOUT BLURB ─────────────────────────────────────────────────── */}
          <h2 style={S.sectionH2}>About Dr. Okema James Nelson</h2>

          <p style={S.bodyText}>
            <strong>Dr. Okema James Nelson</strong> is a Ugandan physician and clinical researcher
            with special interest in emergency medicine and emergency cardiology. He trained in
            Medicine and Surgery (MBChB) at Gulu University Faculty of Medicine, where he developed
            deep expertise in clinical care for resource-limited settings in post-conflict Northern
            Uganda.
          </p>
          <p style={S.bodyText}>
            Dr. Okema has served as a Medical Officer at St. Mary's Hospital Lacor, Gulu, spanning
            the emergency department, internal medicine wards, and the Intensive Care Unit. He is
            also Project Manager and Lead Trainer for the Life + Limb Primary Trauma Care
            Foundation Northern Uganda Chapter, and Program Coordinator at MIMHA, where he leads
            integrated mental health and substance use recovery programming.
          </p>
          <p style={S.bodyText}>
            His research focuses on cardiovascular disease epidemiology, maternal health outcomes,
            and emergency care systems strengthening in sub-Saharan Africa. He aims to build a
            physician-scientist career that bridges rigorous clinical evidence with community-centered
            health solutions for Northern Uganda and beyond.
          </p>

          <Link to="/about" style={S.moreLink}>More Details →</Link>

          <hr style={S.divider} />

          {/* ── RESEARCH INTERESTS ──────────────────────────────────────────── */}
          <h2 style={S.sectionH2}>Research Interests</h2>
          <div style={S.interestGrid}>
            {["Emergency Medicine", "Cardiovascular Disease", "Maternal Health", "Clinical Epidemiology", "Health Systems Strengthening", "Implementation Science"].map(tag => (
              <span key={tag} style={S.interestTag}>{tag}</span>
            ))}
          </div>

          <hr style={S.divider} />

          {/* ── SCHOLARLY CONTRIBUTIONS ─────────────────────────────────────── */}
          <h2 style={S.sectionH2}>Scholarly Contributions</h2>
          <p style={S.bodyText}>
            Dr. Okema has contributed to peer-reviewed publications, clinical guidelines, and
            conference presentations. His work focuses on generating actionable evidence for
            emergency and cardiovascular care in resource-limited settings.
          </p>

          <div style={S.counterGrid}>
            <div style={S.counterBox}>
              <div style={S.counterNum}><Counter end={5} suffix="+" /></div>
              <div style={S.counterLabel}>Publications</div>
            </div>
            <div style={S.counterBox}>
              <div style={S.counterNum}><Counter end={8} suffix="+" /></div>
              <div style={S.counterLabel}>Presentations</div>
            </div>
            <div style={S.counterBox}>
              <div style={S.counterNum}><Counter end={3} /></div>
              <div style={S.counterLabel}>Ongoing Studies</div>
            </div>
          </div>

          <Link to="/research" style={S.scMoreLink}>More Scholarly Contributions →</Link>

          <hr style={S.divider} />

          {/* ── BOOKS & GUIDELINES ──────────────────────────────────────────── */}
          <h2 style={S.sectionH2}>Clinical Guidelines &amp; Reports</h2>

          <div style={S.bookItem}>
            <div style={{ ...S.bookImgPlaceholder, width: 72, height: 96, fontSize: "1.5rem", flexShrink: 0 }}>📄</div>
            <div style={S.bookText}>
              <strong>Life + Limb Primary Trauma Care Foundation, 2024.</strong>{" "}
              <em>Primary Trauma Care Training Manual — Northern Uganda Adaptation.</em> Gulu, Uganda.
              <br />
              <Link to="/research" style={S.bookLink}>Learn more →</Link>
            </div>
          </div>

          <div style={S.bookItem}>
            <div style={{ ...S.bookImgPlaceholder, width: 72, height: 96, fontSize: "1.5rem", flexShrink: 0 }}>📄</div>
            <div style={S.bookText}>
              <strong>MIMHA Program, 2023.</strong>{" "}
              <em>Integrated Mental Health and Substance Use Recovery — Community Care Protocols.</em> Gulu, Uganda.
              <br />
              <Link to="/research" style={S.bookLink}>Learn more →</Link>
            </div>
          </div>

          <hr style={S.divider} />

          {/* ── HONORS & AWARDS ─────────────────────────────────────────────── */}
          <h2 style={S.sectionH2}>Honors and Awards</h2>

          {[
            {
              title: "Project Manager & Lead Trainer — Life + Limb Primary Trauma Care Foundation Northern Uganda Chapter.",
              year: "2023 – Present",
            },
            {
              title: "Medical Officer of Excellence — St. Mary's Hospital Lacor Emergency Department, Gulu, Uganda.",
              year: "2023",
            },
            {
              title: "Best Research Presentation — Gulu University Faculty of Medicine Annual Research Symposium.",
              year: "2022",
            },
          ].map((a, i) => (
            <div key={i} style={S.awardItem}>
              <div style={S.awardTitle}>{a.title}</div>
              <div style={S.awardYear}>{a.year}</div>
            </div>
          ))}

          <Link to="/about" style={S.scMoreLink}>More Awards &amp; Honours →</Link>

          <hr style={S.divider} />

          {/* ── RECENT BLOG ─────────────────────────────────────────────────── */}
          <h2 style={S.sectionH2}>Read Recent Blog</h2>

          <div style={S.blogGrid}>
            {BLOG_POSTS.map(post => (
              <div key={post.id} style={S.blogCard}>
                {/* Thumbnail */}
                <Link to={post.slug}>
                  {post.image
                    ? <img src={post.image} alt={post.title} style={S.blogImg} loading="lazy" />
                    : <div style={S.blogImgPlaceholder}>🏥</div>
                  }
                </Link>

                {/* Title */}
                <Link to={post.slug} style={S.blogTitle}>
                  <h3 style={{ ...S.blogTitle, margin: "0 0 0.4rem" }}>{post.title}</h3>
                </Link>

                {/* Meta: By · Date · Category */}
                <div style={S.blogMeta}>
                  By <strong>{post.author}</strong>
                  <span style={S.blogMetaDot}>·</span>
                  {post.date}
                  <span style={S.blogMetaDot}>·</span>
                  <Link to={post.categorySlug} style={S.blogCategory}>{post.category}</Link>
                </div>

                {/* Excerpt */}
                <p style={S.blogExcerpt}>{post.excerpt}</p>

                {/* Read More */}
                <Link to={post.slug} style={S.blogReadMore}>Read More →</Link>
              </div>
            ))}
          </div>

          {/* bottom spacing */}
          <div style={{ height: "4rem" }} />

        </div>
      </div>
    </>
  );
}