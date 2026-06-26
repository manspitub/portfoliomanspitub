import { useEffect, useState } from 'react';
import { Icons } from '../data/icons.js';
import { profile } from '../data/portfolio.js';

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact({ copy, demoRequest }) {
  const [status, setStatus] = useState('idle');
  const [messageValue, setMessageValue] = useState('');

  useEffect(() => {
    if (!demoRequest?.message) return;
    setMessageValue(demoRequest.message);
    setStatus('idle');
  }, [demoRequest]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!endpoint) {
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      const body = [
        `Nombre: ${name}`,
        `Email: ${email}`,
        '',
        message,
      ].join('\n');

      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(copy.contact.subject)}&body=${encodeURIComponent(body)}`;
      form.reset();
      setMessageValue('');
      setStatus('missing');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setMessageValue('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const message = {
    idle: endpoint ? copy.contact.configured : copy.contact.missing,
    missing: copy.contact.missing,
    sending: copy.contact.sending,
    success: copy.contact.success,
    error: copy.contact.error,
  }[status];

  return (
    <div className="contact-layout">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          {copy.contact.name}
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          {copy.contact.email}
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          {copy.contact.message}
          <textarea
            name="message"
            rows="5"
            required
            value={messageValue}
            onChange={(event) => setMessageValue(event.target.value)}
          />
        </label>
        <button className="button primary" type="submit" disabled={status === 'sending'}>
          <Icons.Send size={18} />
          {status === 'sending' ? copy.contact.sending : copy.contact.send}
        </button>
        <p className={`form-status ${status}`}>{message}</p>
      </form>

      <aside className="contact-panel">
        <a href={`mailto:${profile.email}`}>
          <Icons.Mail size={20} />
          {profile.email}
        </a>
        <a href={profile.links.linkedin}>
          <Icons.Linkedin size={20} />
          LinkedIn
        </a>
        <a href={profile.links.github}>
          <Icons.Github size={20} />
          GitHub
        </a>
      </aside>
    </div>
  );
}
