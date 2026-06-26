import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import App from './App.jsx';
import './styles/base.css';

function Root() {
  const [language, setLanguage] = useState('es');
  const appKey = useMemo(() => language, [language]);

  return (
    <motion.div key={appKey} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <App language={language} setLanguage={setLanguage} />
    </motion.div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
