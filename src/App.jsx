import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { languages } from './data/portfolio.js';

export default function App({ language, setLanguage }) {
  const copy = useMemo(() => languages[language], [language]);
  const [demoRequest, setDemoRequest] = useState(null);

  const handleDemoRequest = (request) => {
    setDemoRequest({ ...request, id: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app-shell">
      <Header copy={copy} language={language} setLanguage={setLanguage} />
      <main>
        <Hero copy={copy} language={language} />
        <Section id="about" eyebrow="01" title={copy.about.title}>
          <About copy={copy} />
        </Section>
        <Section id="experience" eyebrow="02" title={copy.experienceTitle}>
          <Timeline language={language} />
        </Section>
        <Section id="skills" eyebrow="03" title={copy.skillsTitle}>
          <Skills />
        </Section>
        <Section id="projects" eyebrow="04" title={copy.projectsTitle} intro={copy.projectsIntro}>
          <Projects language={language} onRequestDemoAccess={handleDemoRequest} />
        </Section>
        <Section id="contact" eyebrow="05" title={copy.contact.title} intro={copy.contact.text}>
          <Contact copy={copy} demoRequest={demoRequest} />
        </Section>
      </main>
      <Footer copy={copy} />
    </div>
  );
}
