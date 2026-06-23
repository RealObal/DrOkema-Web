import { Helmet } from "react-helmet-async";
import { MinimalPage, Rule } from "@/components/layout/MinimalPage";

const education = [
  {
    school: "Gulu Institutes of Health Sciences",
    degree: "Diploma in Clinical Medicine and Community Health",
    dates: "2016 - 2019",
    href: "https://gihst.ac.ug/",
  },
  {
    school: "Gulu University Faculty of Medicine",
    degree: "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
    dates: "2020 - 2025",
    href: "https://www.gu.ac.ug/",
  },
  {
    school: "FREYA International Schools of Research and Implementation",
    degree: "Clinical Research and Implementation Training",
    dates: "2023",
  },
  {
    school: "Harvard University",
    degree: "Clinical Research Collaboration",
    dates: "Jan - Jul 2025",
    href: "https://www.harvard.edu/",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Dr. Okema James Nelson | Physician-Scientist Background</title>
        <meta
          name="description"
          content="Learn about Dr. Okema James Nelson's journey as a physician-scientist, from clinical officer to medical doctor, specializing in emergency medicine and cardiovascular health in Uganda."
        />
        <link rel="canonical" href="https://drokema.com/about" />
      </Helmet>

      <MinimalPage
        eyebrow="About"
        title="Dr. Okema James Nelson"
        intro="A physician-scientist shaped by frontline care, research curiosity, and the urgent health needs of Northern Uganda."
      >
        <Rule />
        <section className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <img
            src="/About me .jpeg"
            alt="Dr. Okema James Nelson"
            className="aspect-[4/5] w-full max-w-sm rounded-md border border-slate-200 object-cover shadow-sm"
            loading="lazy"
            decoding="async"
          />
          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              Dr. Okema James Nelson is a Ugandan physician and clinical researcher with
              special interest in emergency medicine and emergency cardiology. Born and
              raised in post-conflict Northern Uganda, he witnessed firsthand how fragile
              health infrastructure shapes outcomes for patients and families.
            </p>
            <p>
              His journey began as a Clinical Officer providing frontline care in rural
              health centers. That practical foundation informed his decision to pursue
              formal medical training at Gulu University Faculty of Medicine.
            </p>
            <p>
              His clinical experience spans emergency departments, internal medicine
              wards, ICU care, and community health programs. His research questions come
              directly from that work: how emergency systems can be strengthened, how
              cardiovascular risk can be better understood, and how maternal outcomes can
              improve in resource-limited settings.
            </p>
          </div>
        </section>

        <Rule />
        <blockquote className="max-w-4xl border-l-4 border-medical-teal pl-6">
          <p className="font-serif text-2xl leading-snug text-slate-700">
            My work is driven by a simple conviction: the gap between what we know and
            what communities in Northern Uganda receive must be closed.
          </p>
          <cite className="mt-4 block text-sm font-semibold not-italic text-medical-teal">
            Dr. Okema James Nelson
          </cite>
        </blockquote>

        <Rule />
        <section className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <h2 className="text-3xl font-semibold text-medical-navy">Education</h2>
          <div className="divide-y divide-slate-200">
            {education.map((item) => (
              <article key={item.school} className="py-6 first:pt-0">
                <h3 className="text-xl font-semibold text-slate-900">{item.school}</h3>
                <p className="mt-2 text-base font-semibold text-medical-teal">{item.degree}</p>
                <p className="mt-1 text-sm text-slate-500">{item.dates}</p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-sm font-semibold text-medical-teal hover:text-medical-navy"
                  >
                    Visit institution
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <Rule />
        <section className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <h2 className="text-3xl font-semibold text-medical-navy">What I Believe</h2>
          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              Medicine practiced without curiosity becomes routine, and routine can become
              indifference. Every patient who enters an emergency department carries a
              story shaped by geography, history, and inequity.
            </p>
            <p>
              The strongest evidence is evidence generated with the communities it is
              meant to serve. Research done with people produces solutions that last.
            </p>
            <p>
              Emergency medicine is a test of a health system's integrity. How a system
              responds in crisis reveals what it values. Dr. Okema's work is aimed at
              helping Uganda answer that test better.
            </p>
          </div>
        </section>
      </MinimalPage>
    </>
  );
}
