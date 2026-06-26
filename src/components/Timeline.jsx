import { Icons } from '../data/icons.js';
import { timeline } from '../data/portfolio.js';

export default function Timeline({ language }) {
  return (
    <div className="timeline">
      {timeline.map((item) => {
        const Icon = item.type === 'work' ? Icons.BriefcaseBusiness : Icons.GraduationCap;

        return (
          <article className="timeline-item" key={`${item.place}-${item.date.es}`}>
            <div className="timeline-icon">
              <Icon size={18} />
            </div>
            <div>
              <span>{item.date[language]}</span>
              <h3>{item.title[language]}</h3>
              <strong>{item.place}</strong>
              <p>{item.body[language]}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
