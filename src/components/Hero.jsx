import { motion } from 'framer-motion';
import { Icons } from '../data/icons.js';
import { profile } from '../data/portfolio.js';

export default function Hero({ copy, language }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="hero-summary">{copy.hero.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              <Icons.Rocket size={18} />
              {copy.hero.primaryCta}
            </a>
            <a className="button secondary" href="#contact">
              <Icons.Mail size={18} />
              {copy.hero.secondaryCta}
            </a>
            {profile.cvUrl ? (
              <a className="button ghost" href={profile.cvUrl} download>
                <Icons.ArrowDownToLine size={18} />
                {copy.hero.download}
              </a>
            ) : null}
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
          <div className="signal-grid" aria-hidden="true" />
          <div className="evidence-panel">
            <div className="panel-kicker">
              <Icons.Sparkles size={18} />
              <span>portfolio.audit</span>
            </div>
            <strong>{profile.name}</strong>
            <p>{profile.role[language]}</p>
            <div className="evidence-list">
              {copy.hero.proof.map(([number, title, detail]) => (
                <article key={title}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="stat-row">
        {copy.hero.stats.map(([value, label]) => (
          <motion.article key={label} className="stat-item" whileHover={{ y: -4 }}>
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
