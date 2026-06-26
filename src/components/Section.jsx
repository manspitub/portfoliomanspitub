import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, intro, children }) {
  return (
    <motion.section
      id={id}
      className="content-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
