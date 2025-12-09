import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="scroll-container">
        {/* HERO SCREEN */}
        <section id="top" className="panel hero">
          <div className="hero-inner">
            <div className="card hero-card">
              <h1 className="hero-name">
                Henry
                <br />
                Woodrow
              </h1>
              <p className="hero-tagline">
                Graduate Software Developer based in Ballymoney, Northern
                Ireland.
                <br />
                Passionate about building clean, reliable and maintainable
                software.
              </p>
            </div>

            <nav className="card hero-nav">
              <p className="hero-nav-label">Navigation</p>
              <a href="#profile">Profile</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#volunteering">Volunteering</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </section>

        {/* PROFILE */}
        <section id="profile" className="panel section-profile">
          <div className="content">
            <div className="card">
              <h2>Profile</h2>
              <p>
                Highly motivated and passionate Graduate Software Developer with
                experience in C++, Java, Python, and web technologies.
                Comfortable working in Linux-based environments, using Git, and
                collaborating in cross-functional, agile teams across time
                zones. Proven track record of delivering reliable features,
                improving system performance, and communicating effectively with
                stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="panel section-skills">
          <div className="content">
            <h2>Skills</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Technical Skills</h3>
                <ul>
                  <li>C++, Java, Python</li>
                  <li>Laravel (PHP), HTML, CSS, SQL/MySQL</li>
                  <li>Linux (Fedora), Bash scripting</li>
                  <li>Git, GitHub, Virtual Machines</li>
                  <li>SFML (C++ Graphics)</li>
                  <li>pytest, Robot Framework</li>
                  <li>AWS fundamentals</li>
                </ul>
              </div>
              <div className="card">
                <h3>Professional Skills</h3>
                <ul>
                  <li>Problem-solving and debugging</li>
                  <li>Agile / Scrum (Scrum Master experience)</li>
                  <li>
                    Reliable communication with technical &amp; non-technical
                    teams
                  </li>
                  <li>Leadership &amp; mentoring youth volunteers</li>
                  <li>Time management, organisation &amp; task ownership</li>
                  <li>Cross-site collaboration across time zones</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="panel section-projects">
          <div className="content">
            <h2>Projects</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Finance Tracker Web Application</h3>
                <p className="meta">Laravel · PHP · MySQL · HTML/CSS</p>
                <ul>
                  <li>
                    Built a full-stack finance management platform allowing
                    users to track salary, bills, savings goals and weekly
                    breakdowns.
                  </li>
                  <li>
                    Designed and implemented database models (salary, recurring
                    bills, goals &amp; dashboards).
                  </li>
                  <li>
                    Followed good engineering practice using authentication,
                    validation and Git version control.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>C++ Chess Game</h3>
                <p className="meta">C++ · SFML</p>
                <ul>
                  <li>
                    Custom-built playable chess game with SFML GUI elements and
                    full game logic.
                  </li>
                  <li>
                    Refactored from string-based board layout into structured,
                    class-based piece system.
                  </li>
                  <li>
                    Implemented rendering, movement rules and input handling.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>Youth Club Sign-In Web App</h3>
                <p className="meta">Laravel · Tailwind CSS</p>
                <ul>
                  <li>
                    Built for a local church youth organisation to manage
                    attendance and consent forms.
                  </li>
                  <li>
                    Implemented youth profiles, weekly check-ins and consent
                    status tracking.
                  </li>
                  <li>
                    Designed a clean interface for non-technical volunteers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="panel section-experience">
          <div className="content">
            <h2>Experience</h2>
            <div className="cards-column">
              <div className="card">
                <h3>Placement Software Engineer — Magnite</h3>
                <p className="meta">Jul 2023 – Jun 2024 · Belfast, UK</p>
                <ul>
                  <li>
                    Developed production C++ and Python code across core AdTech
                    systems.
                  </li>
                  <li>
                    Reduced compilation errors and improved deployment using
                    Bash automation scripts.
                  </li>
                  <li>
                    Refactored C++ modules to enhance clarity and execution
                    speed.
                  </li>
                  <li>
                    Extended Python configuration validator ensuring formatting
                    compliance.
                  </li>
                  <li>
                    Migrated legacy Robot Framework tests to pytest increasing
                    reliability.
                  </li>
                  <li>
                    Served as Scrum Master, coordinating teams across time
                    zones.
                  </li>
                  <li>
                    Daily development inside Fedora Linux VM using Git and
                    modern tooling.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>Junior Audio-Visual Engineer — PSI Absolute</h3>
                <p className="meta">Sep 2025 – Present · Belfast, UK</p>
                <ul>
                  <li>
                    Engineer for stage lighting and AV installations across the
                    UK.
                  </li>
                  <li>
                    Commissioned systems, performed calibration, safety checks
                    and client training.
                  </li>
                  <li>
                    Installed lighting dimmers and control systems to enhance
                    venue performance.
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3>Domestic Assistant — Causeway Hospital, NHS</h3>
                <p className="meta">Jan 2020 – Sep 2025 · Coleraine, UK</p>
                <ul>
                  <li>
                    Ensured high standards of cleanliness and infection control
                    across wards.
                  </li>
                  <li>
                    Supported rapid response cleaning operations and deep
                    cleans.
                  </li>
                  <li>Praised for reliability and consistent early attendance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="panel section-education">
          <div className="content">
            <h2>Education</h2>
            <div className="card">
              <h3>
                BSc Computer Science with Diploma in Industrial Studies — Ulster
                University
              </h3>
              <p className="meta">2021 – 2025</p>
              <ul>
                <li>Second Class Honours (Upper Division).</li>
                <li>
                  One-year Software Engineering placement at Magnite, a global
                  AdTech company.
                </li>
                <li>Dean’s List award — first &amp; second year.</li>
                <li>
                  Final year project: Finance tracking system using Laravel &
                  MySQL.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* VOLUNTEERING */}
        <section id="volunteering" className="panel section-volunteering">
          <div className="content">
            <h2>Voluntary Work</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>GPFuture Youth Leader</h3>
                <p className="meta">2019 – Present · Green Pastures Church</p>
                <ul>
                  <li>
                    Plan and deliver youth events for 70+ young people including
                    workshops and teachings.
                  </li>
                  <li>Mentor young volunteers.</li>
                  <li>Run technical production for youth services.</li>
                </ul>
              </div>

              <div className="card">
                <h3>GP Production Team</h3>
                <ul>
                  <li>
                    Train volunteers on lighting, live-stream cameras and lyric
                    systems.
                  </li>
                  <li>
                    Troubleshoot audio-visual and network issues across the
                    church campus.
                  </li>
                  <li>Organise rotas for reliable technical coverage.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="panel section-contact">
          <div className="content">
            <div className="card">
              <h2>Contact</h2>
              <p>
                Email: <strong>hwoodrow023@gmail.com</strong>
              </p>
              <p>
                Phone: <strong>+44 77 8708 3326</strong>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/henry-woodrow/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile
                </a>
              </p>
              <p>Location: Ballymoney, Northern Ireland, UK</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
