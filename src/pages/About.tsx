import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Dr. Okema James Nelson | Physician-Scientist Background</title>
        <meta name="description" content="Learn about Dr. Okema James Nelson's journey as a physician-scientist, from clinical officer to medical doctor, specializing in emergency medicine and cardiovascular health in Uganda." />
        <meta name="keywords" content="Dr. Okema James Nelson background, physician scientist biography, Uganda doctor education, clinical researcher experience, emergency medicine training" />
        <link rel="canonical" href="https://drokema.com/about" />
        <meta property="og:title" content="About Dr. Okema James Nelson | Physician-Scientist" />
        <meta property="og:description" content="Learn about Dr. Okema's journey from clinical officer to medical doctor, specializing in emergency medicine and cardiovascular health in Uganda." />
        <meta property="og:url" content="https://drokema.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Okema James Nelson | Physician-Scientist" />
        <meta name="twitter:description" content="Learn about Dr. Okema's journey from clinical officer to medical doctor, specializing in emergency medicine and cardiovascular health in Uganda." />
      </Helmet>

      <style>{`
        .about-page {
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          color: #1a1a1a;
          background: #fff;
        }

        .about-section-label {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 0.5rem;
        }

        .about-heading {
          font-size: 2.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1.5rem;
          line-height: 1.15;
        }

        .about-float-img {
          float: left;
          width: 260px;
          margin: 0 2.5rem 1.5rem 0;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
          display: block;
        }

        .about-body-text {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #374151;
          margin-bottom: 1.25rem;
        }

        .about-blockquote {
          border-left: 4px solid #2563eb;
          margin: 2.5rem 0;
          padding: 1.5rem 2rem;
          background: #f0f6ff;
          border-radius: 0 12px 12px 0;
        }

        .about-blockquote p {
          font-size: 1.08rem;
          font-style: italic;
          color: #374151;
          line-height: 1.85;
          margin-bottom: 0.75rem;
        }

        .about-blockquote cite {
          font-size: 0.95rem;
          font-weight: 600;
          color: #2563eb;
          font-style: normal;
        }

        .about-divider {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 3rem 0;
        }

        /* Education */
        .education-heading {
          font-size: 1.7rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 2rem;
        }

        .edu-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .edu-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .edu-item:last-child {
          border-bottom: none;
        }

        .edu-dot-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 4px;
        }

        .edu-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2563eb;
          flex-shrink: 0;
        }

        .edu-line {
          width: 2px;
          flex: 1;
          background: #dbeafe;
          margin-top: 6px;
        }

        .edu-content h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.15rem;
        }

        .edu-content .edu-degree {
          font-size: 0.98rem;
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 0.15rem;
        }

        .edu-content .edu-dates {
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 0.1rem;
        }

        .edu-content a {
          font-size: 0.85rem;
          color: #2563eb;
          text-decoration: none;
        }

        .edu-content a:hover {
          text-decoration: underline;
        }

        /* What I Believe */
        .believe-heading {
          font-size: 1.7rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 1.25rem;
        }

        .believe-text {
          font-size: 1.03rem;
          line-height: 1.9;
          color: #374151;
          margin-bottom: 1.1rem;
        }

        /* Clearfix */
        .clearfix::after {
          content: "";
          display: table;
          clear: both;
        }

        @media (max-width: 640px) {
          .about-float-img {
            float: none;
            width: 100%;
            margin: 0 0 1.5rem 0;
          }

          .about-heading {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <main className="about-page">
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "4rem 1.5rem 5rem" }}>

          {/* Section label */}
          <p className="about-section-label">About</p>

          {/* Name heading */}
          <h1 className="about-heading">Dr. Okema James Nelson</h1>

          {/* Float layout: image left, text wraps right */}
          <div className="clearfix">
            <img
              src="/About me .jpeg"
              alt="Dr. Okema James Nelson"
              className="about-float-img"
              loading="lazy"
              decoding="async"
            />

            <p className="about-body-text">
              <strong>Dr. Okema James Nelson</strong> is a Ugandan physician and clinical researcher
              with special interest in emergency medicine and emergency cardiology. Born and raised
              in post-conflict Northern Uganda, he witnessed firsthand the devastating impact of
              inadequate healthcare infrastructure on communities - an experience that shaped his
              commitment to medicine and his focus on emergency care, a critical gap in the region's
              health services.
            </p>

            <p className="about-body-text">
              His journey began as a Clinical Officer, providing frontline care in rural health
              centers where he developed practical skills in resource-constrained settings. This
              foundation informed his decision to pursue formal medical training, culminating in his
              medical degree from Gulu University Faculty of Medicine.
            </p>

            <p className="about-body-text">
              From Clinical Officer to Medical Doctor, Dr. Okema's career trajectory reflects a
              deliberate path toward addressing systemic healthcare challenges. His clinical
              experience spans emergency departments, internal medicine wards, and community health
              programs - each role deepening his understanding of how research can inform better
              clinical outcomes for underserved populations in Northern Uganda.
            </p>

            <p className="about-body-text">
              His research agenda is driven by questions that arise directly from clinical practice:
              Why do maternal mortality rates remain high despite known interventions? What factors
              influence cardiovascular disease outcomes in African populations? How can emergency
              care systems be strengthened with limited resources? His ongoing studies aim to
              generate evidence that can directly improve patient care and health policy in Uganda
              and similar settings across sub-Saharan Africa.
            </p>
          </div>

          {/* Blockquote */}
          <blockquote className="about-blockquote">
            <p>
              My work is driven by a simple conviction: the gap between what we know and what
              communities in Northern Uganda receive must be closed. Every clinical question I ask,
              every dataset I analyze, every paper I write is a step toward making quality emergency
              and cardiovascular care not a privilege - but a universal standard. I believe that
              physician-scientists rooted in the communities they serve are the most powerful force
              for sustainable health systems change.
            </p>
            <cite> -  Dr. Okema James Nelson</cite>
          </blockquote>

          <p className="about-body-text">
            Dr. Okema aspires to establish a research program that combines epidemiological rigor
            with clinical relevance, training the next generation of African physician-scientists
            while producing actionable evidence for health systems strengthening. His long-term goal
            is to contribute to a future where quality emergency and cardiovascular care is
            accessible to all Ugandans.
          </p>

          <hr className="about-divider" />

          {/* Education */}
          <h2 className="education-heading">Education</h2>

          <ul className="edu-list">
            <li className="edu-item">
              <div className="edu-dot-col">
                <div className="edu-dot"></div>
                <div className="edu-line"></div>
              </div>
              <div className="edu-content">
                <h3>Gulu University Faculty of Medicine</h3>
                <div className="edu-degree">Bachelor of Medicine and Bachelor of Surgery (MBChB)</div>
                <div className="edu-dates">2020 - 2025</div>
                <a href="https://www.gu.ac.ug/" target="_blank" rel="noopener noreferrer">www.gu.ac.ug</a>
              </div>
            </li>

            <li className="edu-item">
              <div className="edu-dot-col">
                <div className="edu-dot"></div>
                <div className="edu-line"></div>
              </div>
              <div className="edu-content">
                <h3>Gulu Institutes of Health Sciences</h3>
                <div className="edu-degree">Diploma in Clinical Medicine and Community Health</div>
                <div className="edu-dates">2017 - 2019</div>
                <a href="https://gihst.ac.ug/" target="_blank" rel="noopener noreferrer">gihst.ac.ug</a>
              </div>
            </li>

            <li className="edu-item">
              <div className="edu-dot-col">
                <div className="edu-dot"></div>
              </div>
              <div className="edu-content">
                <h3>Uganda Advanced Certificate of Education</h3>
                <div className="edu-degree">Biology, Chemistry, and Mathematics</div>
                <div className="edu-dates">Completed 2013</div>
              </div>
            </li>
          </ul>

          <hr className="about-divider" />

          {/* What I Believe */}
          <h2 className="believe-heading">What I Believe</h2>

          <p className="believe-text">
            I believe that medicine practiced without curiosity becomes routine, and routine
            becomes indifference. Every patient who walks through an emergency department door in
            Northern Uganda carries a story shaped by geography, history, and inequity - and it is our
            duty as clinicians and researchers to understand those stories deeply enough to change
            them.
          </p>

          <p className="believe-text">
            I believe that the most powerful evidence is evidence generated by the communities it
            is meant to serve. Research done <em>on</em> people is a transaction. Research done
            <em> with</em> people is a partnership - and partnerships produce solutions that last.
          </p>

          <p className="believe-text">
            I believe that emergency medicine is not just a specialty; it is a test of a health
            system's integrity. How a system responds in a crisis - who gets care, how fast, with what
            resources - reveals everything about its values. My life's work is to ensure that test
            yields a better answer for Uganda.
          </p>

          <p className="believe-text">
            And I believe that the physician-scientist who was born in a conflict zone, who watched
            neighbors die of preventable causes, who chose this path because of what they witnessed - 
            is exactly who should be at the table where evidence meets policy. Not despite that
            background, but because of it.
          </p>

        </div>
      </main>
    </>
  );
}