import profilePhoto from './assets/profile.jpg';
import './App.css';

const projects = [
  {
    label: 'ORMS',
    title: 'Operational Risk Management System',
    desc: 'Sistem manajemen risiko operasional dengan modul RCSA, CT, KRI, CIP, LED, Dashboard Monitoring & Reporting.',
    stack: ['Angular', '.NET Core', 'SQL Server'],
  },
  {
    label: 'AMS FAST',
    title: 'Assessment Management System',
    desc: 'Aplikasi assessment internal dari proses analisis, development, integrasi API, testing, hingga persiapan Go-Live.',
    stack: ['Angular', '.NET Core', 'REST API'],
  },
  {
    label: 'Digital Archive',
    title: 'Sistem Kearsipan Digital',
    desc: 'Aplikasi web untuk pengelolaan dokumen dan arsip secara terpusat, terstruktur, dan mudah diakses.',
    stack: ['PHP', 'JavaScript', 'MySQL'],
  },
  {
    label: 'DSS',
    title: 'DSS MAIRCA & MABAC',
    desc: 'Aplikasi pendukung keputusan berbasis web untuk analisis data dan perhitungan metode MAIRCA & MABAC.',
    stack: ['PHP', 'MySQL', 'Dashboard'],
  },
];

const techStack = [
  'Angular',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  '.NET Core',
  'C#',
  'REST API',
  'SQL Server',
  'Oracle DB',
  'Git',
  'Postman',
  'DBeaver',
];

const organizations = [
  {
    period: 'Oct 2021 - Present',
    role: 'Ketua Umum',
    name: 'UNAS CHOIR',
    desc: 'Memimpin organisasi paduan suara mahasiswa dalam perencanaan program kerja, koordinasi anggota, latihan, evaluasi kegiatan, serta pengembangan kualitas tim.',
    tags: ['Leadership', 'Teamwork', 'Coordination', 'Public Performance'],
  },
  {
    period: 'Dec 2023 - Jan 2025',
    role: 'Head of Facilities and Infrastructure',
    name: 'UNAS FEST',
    desc: 'Mengelola kebutuhan sarana, prasarana, logistik, venue, koordinasi lintas divisi, serta monitoring operasional acara berskala universitas.',
    tags: ['Event Management', 'Logistics', 'Problem Solving', 'Coordination'],
  },
];

function App() {
  return (
    <main className="page">
      <header className="navbar">
        <a href="#" className="brand">
          AE<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-btn">
          Contact
        </a>
      </header>

      <section className="hero">
        <div className="hero-left">
          <div className="badge">Full Stack Developer</div>

          <h1>
            Alfarizky Esah
            <span> Raffliansyah</span>
          </h1>

          <p>
            IT Programmer dengan pengalaman membangun aplikasi enterprise pada
            industri perbankan menggunakan Angular, React, .NET Core, REST API,
            SQL Server, dan Oracle Database.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>
            <a href="#projects" className="btn outline">
              View Projects
            </a>
          </div>

          <div className="socials">
            <a href="mailto:raffly2311@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/alfarizkyesahhraffliansyah"
              target="_blank"
            >
              LinkedIn
            </a>
            {/* <a
              href="https://raffliansyah.github.io/Website-Personal/#"
              target="_blank"
            >
              Website
            </a> */}
          </div>
        </div>

        <div className="hero-right">
          <div className="circle-bg"></div>

          <div className="profile-box">
            <img src={profilePhoto} alt="Alfarizky Esah Raffliansyah" className="profile-photo" />
            <h3>IT Programmer</h3>
            <p>Angular • React • .NET Core</p>
          </div>

          <div className="code-card">
            <span></span>
            <span></span>
            <span></span>
            <pre>{`const developer = {
  name: "Alfarizky",
  role: "Full Stack Developer",
  focus: "Enterprise Apps",
  tech: ["Angular", "React", ".NET"]
};`}</pre>
          </div>
        </div>
      </section>

      <section id="about" className="about-card">
        <div className="about-text">
          <span className="section-label">About Me</span>
          <h2>Building clean, useful, and reliable systems.</h2>
          <p>
            Saya merupakan Sarjana Sistem Informasi dengan pengalaman dalam
            pengembangan perangkat lunak, analisis data, pengelolaan database,
            integrasi sistem, serta pembuatan aplikasi web yang mendukung proses
            bisnis perusahaan.
          </p>
        </div>

        <div className="stats">
          <div>
            <strong>2+</strong>
            <p>Years Experience</p>
          </div>

          <div>
            <strong>4+</strong>
            <p>Major Projects</p>
          </div>

          <div>
            <strong>8+</strong>
            <p>Technologies</p>
          </div>

          <div>
            <strong>3.88</strong>
            <p>GPA</p>
          </div>
        </div>
      </section>

      <section id="organization" className="section">
        <div className="section-head">
          <span className="section-label">Organization</span>
          <h2>Organizational Experience</h2>
        </div>

        <div className="organization-list">
          {organizations.map((org) => (
            <article className="organization-card" key={org.name}>
              <div className="organization-period">{org.period}</div>

              <div>
                <h3>{org.role}</h3>
                <h4>{org.name}</h4>
                <p>{org.desc}</p>

                <div className="chips">
                  {org.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-head">
          <span className="section-label">Experience</span>
          <h2>Work Experience</h2>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <div className="year">Jun 2025 - Present</div>
            <div className="experience-content">
              <h3>IT Programmer</h3>
              <h4>PT Bank Negara Indonesia (Persero) Tbk</h4>
              <p>
                Berperan sebagai Full Stack Developer dalam pengembangan sistem
                internal perusahaan, termasuk AMS FAST dan ORMS.
              </p>
              <div className="chips">
                <span>.NET Core</span>
                <span>Angular</span>
                <span>SQL Server</span>
                <span>REST API</span>
                <span>Oracle</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="year">Jan 2024 - Mar 2024</div>
            <div className="experience-content">
              <h3>Magang / Staff IT</h3>
              <h4>Bank Indonesia</h4>
              <p>
                Mendukung pengembangan aplikasi arsip digital, migrasi data,
                integrasi sistem, monitoring aplikasi BI-RMS V3, dan pengelolaan
                dokumen arsip.
              </p>
              <div className="chips">
                <span>PHP</span>
                <span>JavaScript</span>
                <span>MySQL</span>
                <span>Excel</span>
                <span>Data Migration</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head row">
          <div>
            <span className="section-label">Projects</span>
            <h2>Featured Projects</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="project-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="chips">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skill-section">
        <div className="section-head">
          <span className="section-label">Tech Stack</span>
          <h2>Skills & Tools</h2>
        </div>

        <div className="skill-box">
          {techStack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section certification-section">
        <div className="section-head">
          <span className="section-label">Certification</span>
          <h2>Certifications</h2>
        </div>

        <div className="cert-grid">
          <div>
            <h3>BNSP Junior Web Developer</h3>
            <p>National Professional Certification Agency</p>
          </div>
          <div>
            <h3>Data Analytics Certification</h3>
            <p>International Professional Certification</p>
          </div>
          <div>
            <h3>TOEFL Certificate</h3>
            <p>English proficiency certificate</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <span className="section-label">Contact</span>
          <h2>Let's Work Together!</h2>
          <p>
            Terbuka untuk peluang kerja, kolaborasi project, maupun diskusi
            pengembangan sistem.
          </p>
        </div>

        <div className="contact-grid">
          <a href="mailto:raffly2311@gmail.com">
            <span>Email</span>
            raffly2311@gmail.com
          </a>
          <a href="tel:+628568947694">
            <span>Phone</span>
            +62 856 8947 694
          </a>
          <a
            href="https://www.linkedin.com/in/alfarizkyesahhraffliansyah"
            target="_blank"
          >
            <span>LinkedIn</span>
            linkedin.com/in/alfarizkyesahhraffliansyah
          </a>
          <a href="#">
            <span>Location</span>
            Jakarta Timur, Indonesia
          </a>
        </div>
      </section>

      <footer>
        <strong>AE<span>.</span></strong>
        <p>© 2026 Alfarizky Esah Raffliansyah. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;