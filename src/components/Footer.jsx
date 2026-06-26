import { profile } from '../data/portfolio.js';

export default function Footer({ copy }) {
  return (
    <footer className="site-footer">
      <strong>{profile.name}</strong>
      <p>{copy.footer}</p>
    </footer>
  );
}
