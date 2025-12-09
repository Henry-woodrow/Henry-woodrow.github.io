import React from "react";
import "./App.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    title: "Finance Tracker Web Application",
    meta: "Laravel · PHP · MySQL · HTML/CSS",
    bullets: [
      "Full-stack platform for tracking salary, recurring bills, savings goals and weekly insights.",
      "Designed relational schema for goals, dashboards and authentication.",
      "Implemented secure forms, validation and version control best practice.",
    ],
  },
  {
    title: "C++ Chess Game",
    meta: "C++ · SFML",
    bullets: [
      "Desktop chess application with SFML interface components and full game logic.",
      "Refactored prototype board layout into OOP piece classes with move validation.",
      "Added rendering pipeline, user input handling and status tracking.",
    ],
  },
  {
    title: "Youth Club Sign-In Web App",
    meta: "Laravel · Tailwind CSS",
    bullets: [
      "Volunteer-led check-in tool for consent management and attendance tracking.",
      "Implemented youth profiles, weekly registers and consent visibility for leaders.",
      "Designed an accessible UI optimised for tablet use by non-technical volunteers.",
    ],
  },
];

const experiences = [
  {
    title: "Placement Software Engineer — Magnite",
    meta: "Jul 2023 – Jun 2024 · Belfast, UK",
    bullets: [
      "Developed production C++ and Python for core AdTech bidding systems.",
      "Reduced compilation errors and accelerated deployments with Bash automation.",
      "Refactored C++ modules for clarity and faster execution.",
      "Extended a Python configuration validator to enforce formatting compliance.",
      "Migrated Robot Framework suites to pytest, improving reliability.",
      "Served as Scrum Master partnering with engineers across time zones.",
      "Daily development inside Fedora Linux VM using Git, CI and observability tooling.",
    ],
  },
  {
    title: "Junior Audio-Visual Engineer — PSI Absolute",
    meta: "Sep 2025 – Present · Belfast, UK",
    bullets: [
      "Engineer for stage lighting and AV installations across the UK.",
      "Commissioned systems, ran calibration / safety checks and trained clients.",
      "Installed dimmers and control systems that elevated live event impact.",
    ],
  },
  {
    title: "Domestic Assistant — Causeway Hospital, NHS",
    meta: "Jan 2020 – Sep 2025 · Coleraine, UK",
    bullets: [
      "Ensured outstanding cleanliness standards and infection control across wards.",
      "Supported emergency response cleaning operations and deep cleans.",
      "Recognised for reliability, punctuality and consistent early attendance.",
    ],
  },
];

const volunteering = [
  {
    title: "GPFuture Youth Leader",
    meta: "2019 – Present · Green Pastures Church",
    bullets: [
      "Plan and deliver youth events for 70+ young people including workshops and teaching sessions.",
      "Mentor and grow young volunteers while modelling leadership.",
      "Lead technical production for youth services.",
    ],
  },
  {
    title: "GP Production Team",
    meta: "Ongoing",
    bullets: [
      "Train volunteers on lighting rigs, livestream cameras and lyric systems.",
      "Troubleshoot AV and network issues across the church campus.",
      "Organise rota planning to maintain reliable technical coverage.",
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="portfolio">
      <div className="background-glow" />

      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">HW</div>
          <div>
            <p className="brand-name">Henry Woodrow</p>
            <p className="brand-title">Graduate Software Developer</p>
          </div>
        </div>
        <nav className="site-nav">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn primary small" href="#contact">
          Let&apos;s Talk
        </a>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Reliable code. Human collaboration.</p>
            <h1>
              I design and ship dependable software with a focus on clarity,
              automation and user impact.
            </h1>
            <p className="lead">
              Graduate developer based in Ballymoney, Northern Ireland with
              hands-on experience delivering C++, Python and Laravel solutions
              inside collaborative, agile teams.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Selected Work
              </a>
              <a className="btn secondary" href="mailto:hwoodrow023@gmail.com">
                Email Me
              </a>
            </div>
            <ul className="hero-meta">
              <li>
                <span className="meta-label">Focus</span>
                <span>Platform reliability · tooling · clean UX</span>
              </li>
              <li>
                <span className="meta-label">Availability</span>
                <span>Open to 2025 graduate opportunities</span>
              </li>
              <li>
                <span className="meta-label">Location</span>
                <span>Ballymoney, Northern Ireland, UK</span>
              </li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <p className="panel-label">Currently</p>
              <p className="panel-value">Software Developer</p>
              <p className="panel-sub">
                Crafted solutions at Magnite, PSI Absolute and community-led
                organisations.
              </p>
            </div>
            <div className="panel-card highlights">
              <p className="panel-label">Strengths</p>
              <ul>
                <li>C++, Java, Python, Laravel</li>
                <li>Linux (Fedora), Bash, Git, CI/CD</li>
                <li>pytest, Robot Framework, AWS fundamentals</li>
                <li>Scrum facilitation &amp; stakeholder comms</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>About Henry</h2>
          </div>
          <div className="section-card">
            <p>
              Highly motivated graduate developer with practical experience
              across C++, Java, Python and modern web stacks. Confident operating
              in Linux environments, shipping to Git-controlled repositories and
              collaborating with cross-functional teams that span time zones.
            </p>
            <p>
              I thrive when pairing rigorous engineering with thoughtful human
              communication—turning requirements into reliable features, digging
              into performance issues and translating technical detail for
              stakeholders. Colleagues trust me to own tasks, maintain
              documentation and drive incremental improvements that compound
              over time.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Skills &amp; Tooling</h2>
          </div>
          <div className="skills-grid">
            <div className="section-card">
              <h3>Technical</h3>
              <ul>
                <li>C++, Java, Python</li>
                <li>Laravel (PHP), HTML, CSS, SQL/MySQL</li>
                <li>Linux (Fedora), Bash scripting</li>
                <li>Git, GitHub, Virtual Machines</li>
                <li>SFML graphics, pytest, Robot Framework</li>
                <li>AWS fundamentals</li>
              </ul>
            </div>
            <div className="section-card">
              <h3>Professional</h3>
              <ul>
                <li>Agile / Scrum facilitation</li>
                <li>Problem solving &amp; debugging</li>
                <li>Stakeholder communication</li>
                <li>Leadership &amp; volunteer mentoring</li>
                <li>Time management &amp; task ownership</li>
                <li>Cross-site collaboration</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected</p>
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="section-card project-card">
                <div>
                  <p className="meta">{project.meta}</p>
                  <h3>{project.title}</h3>
                </div>
                <ul>
                  {project.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Track record</p>
            <h2>Experience</h2>
          </div>
          <div className="experience-timeline">
            {experiences.map((role) => (
              <article key={role.title} className="timeline-card">
                <p className="meta">{role.meta}</p>
                <h3>{role.title}</h3>
                <ul>
                  {role.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <p className="eyebrow">Foundations</p>
            <h2>Education</h2>
          </div>
          <div className="section-card">
            <h3>
              BSc Computer Science with Diploma in Industrial Studies — Ulster
              University
            </h3>
            <p className="meta">2021 – 2025</p>
            <ul>
              <li>Second Class Honours (Upper Division).</li>
              <li>Placement year at Magnite, global AdTech company.</li>
              <li>Dean’s List award — first &amp; second year.</li>
              <li>Final year project: Finance tracking system (Laravel &amp; MySQL).</li>
            </ul>
          </div>
        </section>

        <section id="volunteering" className="section">
          <div className="section-heading">
            <p className="eyebrow">Community</p>
            <h2>Voluntary Work</h2>
          </div>
          <div className="projects-grid">
            {volunteering.map((item) => (
              <article key={item.title} className="section-card">
                <p className="meta">{item.meta}</p>
                <h3>{item.title}</h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-card contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s collaborate</h2>
              <p>
                Whether you&apos;re hiring for a graduate software role or need
                support on a community project, I&apos;d love to chat.
              </p>
            </div>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href="mailto:hwoodrow023@gmail.com">
                  hwoodrow023@gmail.com
                </a>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+447787083326">+44 77 8708 3326</a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/henry-woodrow/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/henry-woodrow
                </a>
              </li>
              <li>
                <span>Location</span>
                <p>Ballymoney, Northern Ireland, UK</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Henry Woodrow. Crafted with React + Vite.</p>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </div>
  );
};

export default App;
