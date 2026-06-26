import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../data/icons.js';
import { profile } from '../data/portfolio.js';

const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

export default function Header({ copy, language, setLanguage }) {
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Manuel Spínola">
        <span>MS</span>
        <strong>{profile.name}</strong>
      </a>

      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {copy.nav.map((item, index) => (
          <a key={item} href={`#${sectionIds[index]}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <motion.button
          className="icon-button language-button"
          type="button"
          onClick={toggleLanguage}
          whileTap={{ scale: 0.94 }}
          aria-label="Change language"
          title="Change language"
        >
          <Icons.Languages size={18} />
          <span>{language === 'es' ? 'EN' : 'ES'}</span>
        </motion.button>
        <button className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
          {open ? <Icons.X size={20} /> : <Icons.Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
