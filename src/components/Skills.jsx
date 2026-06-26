import { Icons } from '../data/icons.js';
import { skills } from '../data/portfolio.js';

const categoryIcons = {
  Interfaces: Icons.Code2,
  Backend: Icons.Server,
  Datos: Icons.Database,
  'Cloud/Sistemas': Icons.Server,
  'ERP/Odoo': Icons.BriefcaseBusiness,
  Operación: Icons.Sparkles,
};

export default function Skills() {
  return (
    <div className="skills-grid">
      {skills.map(([category, items]) => {
        const Icon = categoryIcons[category] ?? Icons.Code2;

        return (
          <article className="skill-group" key={category}>
            <div className="skill-heading">
              <Icon size={19} />
              <h3>{category}</h3>
            </div>
            <div className="skill-tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
