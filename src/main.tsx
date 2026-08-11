import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, BookOpen, Check, ChevronDown, Download, ExternalLink, GraduationCap, HeartHandshake, Link, Mail, MapPin, Menu, Microscope, ShieldCheck, Sparkles, X } from 'lucide-react'
import { experience, publications, skillGroups } from './data'
import './styles.css'

const links = [
  ['About', 'about'],
  ['Research', 'research'],
  ['Experience', 'experience'],
  ['Credentials', 'credentials'],
  ['Contact', 'contact']
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllRoles, setShowAllRoles] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [showAllRoles])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Srivani Talakokkul, home">
          <span className="brand-mark">ST</span>
          <span>Srivani Talakokkul</span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="/Srivani_Talakokkul_Resume.pdf" download>Résumé <Download size={15} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow"><span /> Public health × research operations × health data</p>
            <h1>Public health, research, and the <em>work between.</em></h1>
            <p className="hero-intro">Srivani Talakokkul, MPH, is a Yale program administrator and public-health professional with experience in clinical care, health data, program operations, and interdisciplinary research support.</p>
            <div className="hero-actions">
              <a className="button primary" href="#research">Explore research <ArrowDown size={17} /></a>
              <a className="button secondary" href="mailto:srivani.talakokkul@yale.edu">Start a conversation <ArrowUpRight size={17} /></a>
            </div>
            <div className="quick-info">
              <span><MapPin size={15} /> New Haven, Connecticut</span>
              <span><Microscope size={15} /> Yale School of Medicine</span>
            </div>
          </div>

          <div className="hero-portrait reveal is-visible">
            <div className="portrait-frame">
              <div className="portrait-art">
                <img src="/headshot.jpeg" alt="Srivani Talakokkul" />
                <span className="portrait-caption">Public health<br />with purpose</span>
              </div>
              <a className="verified-pill" href="https://medicine.yale.edu/profile/srivani-talakokkul/" target="_blank" rel="noreferrer">
                <ShieldCheck size={17} /> Yale verified profile
              </a>
            </div>
          </div>
        </section>

        <section className="impact-strip" aria-label="Career highlights">
          <div><strong>6+</strong><span>Years across health systems</span></div>
          <div><strong>8</strong><span>Coauthored publications & abstracts</span></div>
          <div><strong>3.96</strong><span>MPH graduate GPA</span></div>
          <div><strong>20–30%</strong><span>Workflow efficiency gains</span></div>
        </section>

        <section className="section about" id="about">
          <div className="section-kicker reveal">01 · Profile</div>
          <div className="about-layout">
            <div className="section-heading reveal">
              <h2>Clinical experience.<br />Public-health practice.<br />Research operations.</h2>
            </div>
            <div className="about-copy reveal">
              <p className="lead">Srivani’s experience spans clinical care, public-health programs, research quality, and program administration.</p>
              <p>Her background includes Ayurvedic medicine and clinical practice, an MPH with Global Health certification, a health-equity internship, and cancer-data quality work.</p>
              <p>At Yale’s Fodeh Lab, she supports interdisciplinary teams and the data and annotation workflows used in research on patient-provider communication and clinical NLP.</p>
              <a className="text-link" href="https://medicine.yale.edu/lab/fodeh/lab-members/" target="_blank" rel="noreferrer">Meet the Fodeh Lab team <ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className="focus-grid">
            {[
              [<Microscope />, 'Research support', 'Coordinating annotation, metadata, data preparation, and reporting for interdisciplinary research projects.'],
              [<Sparkles />, 'Program operations', 'Supporting schedules, finances, events, communications, people, and project deliverables.'],
              [<HeartHandshake />, 'Health equity experience', 'Contributing to demographic data-standard assessment and public-facing health communication.'],
              [<ShieldCheck />, 'Quality & compliance', 'Experience with clinical data auditing, protocol adherence, documentation, and corrective training.']
            ].map(([icon, title, text]) => (
              <article className="focus-card reveal" key={String(title)}>
                <div className="icon-box">{icon}</div><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section research" id="research">
          <div className="research-heading reveal">
            <div><div className="section-kicker light">02 · Research</div><h2>Research grounded in the patient voice.</h2></div>
            <p>Coauthored work examining patient-provider communication, patient voice, and structured information extraction from health data.</p>
          </div>
          <div className="research-feature reveal">
            <div className="paper-label"><BookOpen size={18} /> Featured publication</div>
            <div className="feature-content">
              <div>
                <span className="status published">Peer reviewed · 2026</span>
                <h3>{publications[0].title}</h3>
                <p>{publications[0].summary}</p>
                <div className="contribution"><Check size={16} /> Srivani’s credited contribution: {publications[0].contribution}</div>
              </div>
              <a className="circle-link" href={publications[0].url} target="_blank" rel="noreferrer" aria-label="Read featured publication"><ArrowUpRight /></a>
            </div>
          </div>
          <div className="publication-grid">
            {publications.slice(1).map((pub, index) => (
              <article className="publication-card reveal" key={pub.title}>
                <div className="paper-number">0{index + 2}</div>
                <span className={`status ${pub.type === 'Conference abstract' ? 'conference' : ''}`}>{pub.type}</span>
                <h3>{pub.title}</h3>
                <p>{pub.summary}</p>
                {pub.contribution && <small>Credited contribution: {pub.contribution}</small>}
                <div className="paper-footer"><span>{pub.date}</span><a href={pub.url} target="_blank" rel="noreferrer" aria-label={`Open ${pub.title}`}><ExternalLink size={17} /></a></div>
              </article>
            ))}
          </div>
          <p className="source-note">Publication status and dates verified against publisher, arXiv, and AMIA records · Updated August 2026</p>
        </section>

        <section className="section experience" id="experience">
          <div className="section-kicker reveal">03 · Experience</div>
          <div className="section-heading split reveal"><h2>Experience across clinical care and public health.</h2><p>Roles in patient care, health-equity work, data quality, administration, and research operations.</p></div>
          <div className="timeline">
            {(showAllRoles ? experience : experience.slice(0, 5)).map((item, index) => (
              <article className="timeline-item reveal" key={`${item.role}-${item.organization}`}>
                <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-meta"><span>{item.period}</span><span>{item.location}</span></div>
                <div className="timeline-body">
                  <h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.summary}</p>
                  <ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <button className="show-more" onClick={() => setShowAllRoles(!showAllRoles)}>
            {showAllRoles ? 'Show recent experience' : 'View complete experience'} <ChevronDown className={showAllRoles ? 'rotated' : ''} size={18} />
          </button>
        </section>

        <section className="section credentials" id="credentials">
          <div className="section-kicker reveal">04 · Credentials & capabilities</div>
          <div className="credential-layout">
            <div className="education-column reveal">
              <h2>Education that bridges medicine and population health.</h2>
              <div className="degree-card featured-degree">
                <GraduationCap /><span>2022 — 2024</span><h3>Master of Public Health</h3><p>University of New Haven</p><div className="degree-notes"><strong>3.96 GPA</strong><strong>Global Health certificate</strong></div>
              </div>
              <div className="degree-card">
                <GraduationCap /><span>2017 — 2019</span><h3>Bachelor of Ayurvedic Medicine & Surgery</h3><p>R. A. Podar Medical College · Mumbai</p><div className="degree-notes"><strong>1st rank</strong><strong>70.27%</strong></div>
              </div>
            </div>
            <div className="recognition-column reveal">
              <div className="mini-heading">Recognition & service</div>
              <div className="recognition-item"><span>2024</span><div><h3>Employee of the Year</h3><p>David A. Beckerman Recreation Center</p></div></div>
              <div className="recognition-item"><span>2022–24</span><div><h3>Recovery Service Associate</h3><p>American Red Cross · Disaster and Humanitarian Relief</p></div></div>
              <div className="recognition-item"><span>2022–24</span><div><h3>Student leadership</h3><p>Public Health Association and Student Advisory Board, University of New Haven</p></div></div>
              <div className="certification-box"><ShieldCheck /><div><h3>Good Clinical Practice</h3><p>National Institute on Drug Abuse · Valid through Aug 2027</p></div></div>
              <div className="certification-box"><ShieldCheck /><div><h3>Emergency Management</h3><p>Federal Emergency Management Agency</p></div></div>
            </div>
          </div>
          <div className="skills-wrap reveal">
            <div className="mini-heading">Capabilities</div>
            <div className="skills-grid">
              {skillGroups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3>{group.items.map(item => <span key={item}>{item}</span>)}</div>)}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <div className="section-kicker light reveal">05 · Connect</div>
          <div className="contact-content reveal">
          <div><h2>Connect with Srivani.</h2><p>For professional conversations related to public-health programs, research operations, health equity, or clinical data quality.</p></div>
            <div className="contact-actions">
              <a href="mailto:srivani.talakokkul@yale.edu"><Mail /> <span><small>Email</small>srivani.talakokkul@yale.edu</span><ArrowUpRight /></a>
              <a href="https://www.linkedin.com/in/srivani-talakokkul-712452241" target="_blank" rel="noreferrer"><Link /> <span><small>LinkedIn</small>Connect professionally</span><ArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">ST</span><span>Srivani Talakokkul, MPH</span></a>
        <p>Public health · Research operations · Clinical AI</p>
        <p>© {new Date().getFullYear()} Srivani Talakokkul</p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
