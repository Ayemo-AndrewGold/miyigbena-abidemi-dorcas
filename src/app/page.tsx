import Image from "next/image";
import styles from "./page.module.css";
import SiteHeader from "./site-header";

const experience = [
  {
    period: "2024 — Present",
    employer: "Sanisphere Ops Limited",
    role: "Pharmaceutical Data Analyst",
    points: [
      "Analyses real-world pharmaceutical market data to inform product sales strategies.",
      "Researches disease trends, including cerebral malaria and HIV, and prescription and consumption rates for antiviral medicines.",
      "Builds relationships with retail pharmacies and prepares reports on prescription trends and product demand.",
    ],
  },
  {
    period: "2023 — July 2024",
    employer: "Al-Hikmah University Health Services",
    role: "Clinic Pharmacist",
    points: [
      "Reviewed and dispensed prescriptions with a focus on regulatory compliance and patient safety.",
      "Provided medication counselling and supported inventory and essential medicine supply management.",
      "Worked with healthcare professionals and patients to support effective care.",
    ],
  },
  {
    period: "2022 — July 2023",
    employer: "Ramsgate Pharmaceuticals Limited",
    role: "Consultation and patient counselling services",
    points: [
      "Counselled patients on medicines and promoted treatment understanding and adherence.",
      "Educated customers on nutritional supplements, their benefits and correct use.",
      "Supported sales operations, stock assessments and inventory management.",
    ],
  },
];

const skillGroups = [
  {
    title: "Pharmaceutical insight",
    skills: ["Pharmaceutical data analysis", "Market research", "Prescription trends"],
  },
  {
    title: "Pharmacy practice",
    skills: ["Medication counselling", "Prescription review", "Inventory management"],
  },
  {
    title: "Working with people & tools",
    skills: [
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Customer relationship tools · basic",
      "Communication",
      "Adaptability",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.25 8h9.5m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a
        className="sr-only z-50 bg-white p-3 text-[var(--ink)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section
          aria-labelledby="hero-title"
          className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24"
          id="home"
        >
          <div className={styles.heroCopy}>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm">
              <span className="h-px w-8 bg-[var(--accent)]" />
              Pharmacist · Pharmaceutical data
            </p>
            <h1
              className="max-w-3xl font-serif text-[clamp(3.2rem,8vw,6.6rem)] leading-[0.92] tracking-[-0.065em] text-[var(--ink)]"
              id="hero-title"
            >
              Miyigbena
              <br />
              Abidemi
              <br />
              <span className="text-[var(--accent)]">Dorcas.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              Bringing patient-centred pharmacy care and pharmaceutical market
              insight together.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
              A pharmacist with experience across clinical services, patient
              counselling, pharmacy operations and pharmaceutical data analysis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--ink)] px-5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)]"
                href="#contact"
              >
                Get in touch <ArrowIcon />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[var(--line)] px-5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
                download
                href="/miyigbena-abidemi-dorcas-cv.docx"
              >
                Download CV <ArrowIcon />
              </a>
            </div>
            <p className="mt-6 text-xs tracking-wide text-[var(--muted)]">
              Based in Lagos, Nigeria
            </p>
          </div>

          <div className={`${styles.portraitStage} relative mx-auto w-full max-w-[34rem]`}>
            <div
              aria-hidden="true"
              className="absolute -right-3 top-8 h-[82%] w-[75%] bg-[var(--accent-soft)] sm:-right-5"
            />
            <div className={`${styles.portraitFrame} relative z-10 ml-auto w-[86%]`}>
              <Image
                alt="Portrait of Miyigbena Abidemi Dorcas"
                className={styles.portrait}
                fill
                priority
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 55vw, 34rem"
                src="/miyigbena-portrait.jpg"
              />
            </div>
            <div className="relative z-10 mt-4 flex items-center justify-between border-t border-[var(--line)] pt-4 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              <span>Care, insight, impact</span>
              <span>Lagos · Nigeria</span>
            </div>
          </div>
        </section>

        <div className="border-y border-[var(--line)] bg-white/50">
          <ul className="mx-auto grid max-w-7xl gap-5 px-5 py-6 text-sm sm:grid-cols-3 sm:px-8 lg:px-12">
            <li className="flex items-center gap-3">
              <span className="font-serif text-lg text-[var(--accent)]">01</span>
              <span>Patient-centred pharmacy care</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-serif text-lg text-[var(--accent)]">02</span>
              <span>Pharmaceutical market insight</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-serif text-lg text-[var(--accent)]">03</span>
              <span>Healthcare relationships</span>
            </li>
          </ul>
        </div>

        <section
          aria-labelledby="about-title"
          className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-32"
          id="about"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              A thoughtful approach
            </p>
            <h2
              className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl"
              id="about-title"
            >
              Clinical knowledge,
              <br />
              grounded in care.
            </h2>
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
            <p>
              Miyigbena Abidemi Dorcas is a pharmacist whose experience spans
              frontline patient care and pharmaceutical data analysis. Her work
              has included prescription review, safe dispensing, medication
              counselling, inventory support and research into medicine and
              disease trends.
            </p>
            <p>
              She brings a patient-first perspective to her work with healthcare
              professionals and retail pharmacies, and is motivated to
              contribute to more informed, accessible healthcare delivery.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="experience-title"
          className="bg-[var(--ink)] text-white"
          id="experience"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-light)]">
                  Professional journey
                </p>
                <h2
                  className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl"
                  id="experience-title"
                >
                  Experience
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/65">
                From patient counselling and clinical pharmacy to data-led
                pharmaceutical work.
              </p>
            </div>
            <div className="border-t border-white/20">
              {experience.map((item, index) => (
                <article
                  className="grid gap-5 border-b border-white/20 py-8 sm:gap-8 sm:py-10 lg:grid-cols-[0.42fr_1.58fr]"
                  key={item.employer}
                >
                  <p className="text-sm text-white/60">
                    <span className="mr-3 font-serif text-[var(--accent-light)]">
                      0{index + 1}
                    </span>
                    {item.period}
                  </p>
                  <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
                    <div>
                      <p className="text-sm text-white/60">{item.employer}</p>
                      <h3 className="mt-2 text-xl font-medium leading-snug sm:text-2xl">
                        {item.role}
                      </h3>
                    </div>
                    <ul className="space-y-3 text-sm leading-7 text-white/70">
                      {item.points.map((point) => (
                        <li className="flex gap-3" key={point}>
                          <span
                            aria-hidden="true"
                            className="mt-[0.8em] h-1 w-1 shrink-0 rounded-full bg-[var(--accent-light)]"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="education-title"
          className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 lg:py-32"
          id="education"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Learning & foundations
            </p>
            <h2
              className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl"
              id="education-title"
            >
              Education
            </h2>
          </div>
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            <div className="grid gap-2 py-6 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <p className="text-sm text-[var(--accent)]">2022</p>
              <div>
                <h3 className="text-lg font-medium">Bachelor of Pharmacy (B.Pharm)</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Obafemi Awolowo University, Osun State
                </p>
              </div>
            </div>
            <div className="grid gap-2 py-6 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <p className="text-sm text-[var(--accent)]">2013</p>
              <div>
                <h3 className="text-lg font-medium">West Africa Examination Certificate (WAEC)</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Sango Ota High School, Ogun State
                </p>
              </div>
            </div>
            <div className="grid gap-2 py-6 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <p className="text-sm text-[var(--accent)]">2010</p>
              <div>
                <h3 className="text-lg font-medium">First School Leaving Certificate</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  M.A.M School, Lagos State
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="skills-title"
          className="border-y border-[var(--line)] bg-white/50"
          id="skills"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mb-12 max-w-xl sm:mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Areas of strength
              </p>
              <h2
                className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl"
                id="skills-title"
              >
                Skills & competencies
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {skillGroups.map((group, index) => (
                <section
                  aria-labelledby={`skill-group-${index}`}
                  className="border-t border-[var(--line)] pt-5"
                  key={group.title}
                >
                  <p className="text-xs text-[var(--accent)]">0{index + 1}</p>
                  <h3
                    className="mt-3 text-lg font-medium"
                    id={`skill-group-${index}`}
                  >
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-28"
          id="contact"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Start a conversation
            </p>
            <h2
              className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl"
              id="contact-title"
            >
              Let&apos;s make healthcare work better for people.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              For professional opportunities and enquiries, reach out by email
              or phone.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 text-sm">
            <a
              className="inline-flex items-center gap-3 border-b border-[var(--accent)] pb-2 text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
              href="mailto:aboladoc27@gmail.com"
            >
              aboladoc27@gmail.com <ArrowIcon />
            </a>
            <a
              className="inline-flex items-center gap-3 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              href="tel:07066716092"
            >
              070 6671 6092 <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Miyigbena Abidemi Dorcas · Pharmacist</p>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
            download
            href="/miyigbena-abidemi-dorcas-cv.docx"
          >
            Download CV <ArrowIcon />
          </a>
        </div>
      </footer>
    </>
  );
}
