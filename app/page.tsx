import DigitalTwin from "./components/digital-twin";

const links = {
  portfolio: "https://amitozjatana.vercel.app/",
  github: "https://github.com/A-Jatana",
  linkedin: "https://www.linkedin.com/in/amitozjatana/",
  email: "mailto:amitozjatana@gmail.com",
};

const roles = [
  {
    date: "DEC 2026 —",
    type: "UP NEXT",
    company: "DoorDash",
    title: "Software Engineer · Product Engineering",
    location: "Toronto, Canada",
    detail: "Incoming backend engineer, building the systems behind products people rely on every day.",
    current: true,
  },
  {
    date: "MAY — NOV 2026",
    type: "FULL-TIME",
    company: "Royal Bank of Canada",
    title: "Software Engineer",
    location: "Toronto, Canada",
    detail: "Automated enterprise data and release workflows across cloud and analytics platforms.",
    highlights: [
      "Built a Snowflake → LeanIX integration pipeline, saving 150+ hours annually.",
      "Automated application code generation, eliminating 100+ hours of manual processing.",
      "Led the production migration of 16 Apache Airflow DAGs.",
    ],
  },
  {
    date: "MAY 2024 — AUG 2025",
    type: "INTERNSHIP",
    company: "Royal Bank of Canada",
    title: "Software Engineer Intern",
    location: "Toronto, Canada",
    detail: "Prototyped safe cloud automation and AI-powered tools for engineering teams.",
    highlights: [
      "Built a cloud-native artifact validation pipeline with Terraform and AWS.",
      "Prototyped an AI assistant that turns Jira issues into concise summaries.",
    ],
  },
  {
    date: "SEP — DEC 2023",
    type: "INTERNSHIP",
    company: "Treasury Board Secretariat",
    title: "Software Engineer Intern",
    location: "Toronto, Canada",
    detail: "Shipped interactive web prototypes and helped modernize backend services.",
    highlights: [
      "Created React and TypeScript prototypes to validate user workflows.",
      "Moved backend functionality to scalable SQL APIs and added Jest testing.",
    ],
  },
];

const projects = [
  {
    number: "01",
    label: "VOICE · RETRIEVAL · AI",
    title: "AI Voice Product Assistant",
    copy: "A grounded, conversational product expert. A retrieval pipeline turns product data into vector embeddings, then supplies relevant context to a real-time voice agent.",
    stack: ["RAG", "Supabase", "n8n", "ElevenLabs", "Webhooks"],
    mark: "↗",
  },
  {
    number: "02",
    label: "FULL-STACK · PERSONALIZATION",
    title: "PassionPals",
    copy: "A community platform built around the things people love. Led iterative product development and created a recommendation algorithm to make each feed feel personal.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "Agile"],
    mark: "✳",
  },
];

const skillGroups = [
  { title: "LANGUAGES", items: "Python · TypeScript · JavaScript · Go · Java · C++ · SQL" },
  { title: "ENGINEERING", items: "React · Node.js · FastAPI · Flask · REST APIs · Jest" },
  { title: "CLOUD & DELIVERY", items: "AWS · Azure · Docker · Terraform · Airflow · CI/CD" },
  { title: "DATA & AI", items: "LangChain · PyTorch · TensorFlow · Pandas · OpenAI" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Amitoz Jatana home">AJ<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#digital-twin">Digital twin</a>
          <a href="#journey">Journey</a>
          <a href="#work">Selected work</a>
          <a href="#education">Education</a>
        </nav>
        <a className="nav-cta" href={links.email}>Let&apos;s talk <span>↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> TORONTO, CANADA <span className="eyebrow-divider">/</span> SOFTWARE ENGINEER</div>
          <h1>Build with<br />intention<span className="period">.</span></h1>
          <p className="hero-intro">I&apos;m Amitoz — an engineer drawn to the space where robust systems meet useful ideas.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#journey">Explore my journey <span>↓</span></a>
            <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
          </div>
          <div className="hero-meta"><span>ENGINEERING AT RBC</span><i /> <span>DOORDASH · DEC &apos;26</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract architectural 3D illustration" role="img">
          <div className="art-grid" />
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-glow" />
          <div className="art-core"><span>AJ</span></div>
          <span className="art-coordinate coord-top">43° 39&apos; 12.2&quot; N</span>
          <span className="art-coordinate coord-bottom">79° 23&apos; 02.4&quot; W</span>
          <span className="art-index">FIG 01 <b>—</b> IN MOTION</span>
          <span className="art-cross cross-a">+</span><span className="art-cross cross-b">+</span>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 07</span></div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-kicker"><span>01</span> A LITTLE ABOUT ME</div>
        <div className="about-content">
          <h2>Curious by default.<br /><span>Precise by design.</span></h2>
          <div className="about-copy">
            <p>I&apos;m a Toronto-based software engineer who enjoys making complex things feel simple — from reliable data pipelines to intelligent tools that give people their time back.</p>
            <p>My experience spans enterprise engineering at RBC, public service, and the next chapter at DoorDash. I care about how systems work under the hood, and how they feel to the people using them.</p>
            <div className="about-links"><a href={links.portfolio} target="_blank" rel="noreferrer">Portfolio <span>↗</span></a><a href={links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat"><strong>250<span>+</span></strong><span>HOURS SAVED THROUGH AUTOMATION</span></div>
          <div className="stat"><strong>16</strong><span>PRODUCTION AIRFLOW DAGS MIGRATED</span></div>
          <div className="stat"><strong>3<span>×</span></strong><span>ENGINEERING TEAMS AND ENVIRONMENTS</span></div>
        </div>
      </section>

      <DigitalTwin />

      <section className="journey section" id="journey">
        <div className="shell">
          <div className="section-kicker"><span>03</span> THE CAREER JOURNEY</div>
          <div className="section-heading"><h2>Built one chapter<br />at a time<span className="period">.</span></h2><p>Different teams, different challenges.<br />One constant: make the work matter.</p></div>
          <div className="timeline">
            {roles.map((role) => <article className={`timeline-item${role.current ? " is-next" : ""}`} key={`${role.company}-${role.date}`}>
              <div className="timeline-date">{role.date}<span>{role.type}</span></div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-card">
                <div className="timeline-heading"><div><h3>{role.company}</h3><p>{role.title}</p></div><span className="location">{role.location}</span></div>
                <p className="role-detail">{role.detail}</p>
                {role.highlights && <ul>{role.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
                {role.current && <span className="incoming-tag">INCOMING <span>↗</span></span>}
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="section-kicker"><span>04</span> SELECTED WORK</div>
        <div className="section-heading"><h2>Ideas made<br />tangible<span className="period">.</span></h2><p>A few things I&apos;ve built<br />and learned along the way.</p></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}>
          <div className={`project-visual project-visual-${project.number}`}><span className="project-num">{project.number} / 02</span><span className="project-mark">{project.mark}</span><div className="project-orbit p-orbit-a"/><div className="project-orbit p-orbit-b"/><span className="project-visual-label">{project.number === "01" ? "CONTEXT → RESPONSE" : "INTEREST → COMMUNITY"}</span></div>
          <div className="project-info"><span className="project-label">{project.label}</span><h3>{project.title}</h3><p>{project.copy}</p><div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        </article>)}</div>
      </section>

      <section className="education section" id="education">
        <div className="shell education-inner">
          <div><div className="section-kicker"><span>05</span> THE FOUNDATION</div><h2>Learn deeply.<br />Keep building<span className="period">.</span></h2></div>
          <div className="education-card"><span className="education-mark">U<span>T</span></span><div className="education-details"><span className="education-date">SEP 2021 — APR 2026</span><h3>University of Toronto</h3><p>Honours Bachelor of Science</p><p className="degree">Computer Science · Software Engineering Specialist</p><div className="education-extra"><span>TEACHING ASSISTANT</span><p>Data Structures · Algorithms · Object-Oriented Programming</p></div><div className="coursework"><span>SELECTED COURSEWORK</span><p>Operating Systems · Advanced Algorithms · Databases · Graduate Machine Learning</p></div></div></div>
        </div>
      </section>

      <section className="skills section shell">
        <div className="skills-head"><div className="section-kicker"><span>06</span> THE TOOLKIT</div><h2>Tools for the<br />right problem.</h2></div>
        <div className="skills-list">{skillGroups.map((group) => <div className="skill-row" key={group.title}><span>{group.title}</span><p>{group.items}</p></div>)}</div>
      </section>

      <footer className="footer" id="contact"><div className="shell"><div className="footer-top"><div><div className="section-kicker"><span>07</span> THE NEXT CONVERSATION</div><h2>Have a good<br />problem in mind<span className="period">?</span></h2></div><a className="footer-mail" href={links.email}>Let&apos;s talk <span>↗</span></a></div><div className="footer-bottom"><a className="wordmark" href="#top">AJ<span>.</span></a><span>DESIGNED & BUILT WITH INTENTION</span><div><a href={links.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href={links.portfolio} target="_blank" rel="noreferrer">PORTFOLIO ↗</a></div><span>© 2026 AMITOZ JATANA</span></div></div></footer>
    </main>
  );
}
