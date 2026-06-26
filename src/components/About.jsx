import { motion } from 'framer-motion';
import { Icons } from '../data/icons.js';

export default function About({ copy }) {
  return (
    <div className="about-layout">
      <p className="about-text">{copy.about.text}</p>
      <div className="about-cards">
        {copy.about.cards.map(([title, text], index) => (
          <motion.article key={title} className="feature-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 220 }}>
            <Icons.Sparkles size={20} />
            <h3>{title}</h3>
            <p>{text}</p>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
