import { motion } from 'framer-motion';
import { Icons } from '../data/icons.js';
import { projects } from '../data/portfolio.js';

export default function Projects({ language, onRequestDemoAccess }) {
  const technologiesLabel = language === 'es' ? 'Tecnologias usadas' : 'Technologies used';

  return (
    <div className="projects-grid">
      {projects.map((project, index) => {
        const links = project.links ?? [
          { label: 'Demo', url: project.demoUrl, icon: 'ExternalLink' },
          { label: 'Repo', url: project.repoUrl, icon: 'Github' },
        ];

        return (
          <motion.article className="project-card" key={project.title.es} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 180 }}>
            <div className={`project-cover cover-${index + 1} ${project.image ? 'has-image' : ''}`}>
              {project.image ? <img src={project.image} alt="" /> : <span>{project.status[language]}</span>}
            </div>
            <div className="project-content">
              <h3>{project.title[language]}</h3>
              <p>{project.description[language]}</p>
              <strong>{project.challenge[language]}</strong>
              {project.highlights ? (
                <ul className="project-highlights">
                  {project.highlights[language].map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
              <div className="skill-tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {project.technologies ? (
                <div className="project-tech">
                  <span>{technologiesLabel}</span>
                  <div className="tech-tags">
                    {project.technologies.map((item) => (
                      <code key={item}>{item}</code>
                    ))}
                  </div>
                </div>
              ) : null}
              {project.quickGuide ? (
                <div className="quick-guide">
                  <div className="quick-guide-heading">
                    <Icons.BookOpenText size={18} />
                    <span>{project.quickGuide[language].title}</span>
                  </div>
                  <p>{project.quickGuide[language].summary}</p>
                  <ul>
                    {project.quickGuide[language].points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a
                    href={project.quickGuide[language].url}
                    download={project.quickGuide[language].download}
                  >
                    <Icons.ArrowDownToLine size={16} />
                    {project.quickGuide[language].linkLabel}
                  </a>
                </div>
              ) : null}
              {project.demoAccount ? (
                <div className="demo-account">
                  <div className="demo-account-heading">
                    <Icons.UserRound size={18} />
                    <span>{project.demoAccount[language].title}</span>
                  </div>
                  <dl>
                    {project.demoAccount[language].fields.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p>{project.demoAccount[language].note}</p>
                </div>
              ) : null}
              {project.demoAccess ? (
                <div className="demo-access">
                  <span>{project.demoAccess[language].title}</span>
                  <dl>
                    {project.demoAccess[language].fields.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p>{project.demoAccess[language].warning}</p>
                  {project.demoAccess[language].requests ? (
                    <div className="demo-actions" aria-label={project.demoAccess[language].requestLabel}>
                      {project.demoAccess[language].requests.map((request) => (
                        <button
                          key={request.label}
                          type="button"
                          onClick={() => onRequestDemoAccess?.({
                            project: project.title[language],
                            role: request.label,
                            message: request.message,
                          })}
                        >
                          <Icons.Mail size={16} />
                          {request.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
              <div className="project-links">
                {links.map((link) => {
                  const LinkIcon = Icons[link.icon] ?? Icons.ExternalLink;

                  return (
                    <a
                      key={link.label}
                      className={!link.url ? 'disabled' : ''}
                      href={link.url || '#projects'}
                      aria-disabled={!link.url}
                      target={link.url?.startsWith('http') ? '_blank' : undefined}
                      rel={link.url?.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <LinkIcon size={17} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
