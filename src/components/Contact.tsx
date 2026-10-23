import { useState, type FormEvent } from 'react';
import { ArrowDownToLine, ArrowUpRight, Check, Copy, Github, Linkedin, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'prepared' | 'sent' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [draft, setDraft] = useState<{ href: string; subject: string; body: string } | null>(null);
  const hostedForm = import.meta.env.VITE_CONTACT_MODE === 'netlify';
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    if (fields.get('bot-field')) return;
    const name = String(fields.get('name') ?? '').trim();
    const email = String(fields.get('email') ?? '').trim();
    const message = String(fields.get('message') ?? '').trim();
    if (!name || !message) { setStatus('error'); return; }
    const subject = String(fields.get('subject') ?? 'Project enquiry');
    if (!hostedForm) {
      const body = `Hi Niroshan,\n\n${message}\n\n${name}\n${email}`;
      setDraft({ href: `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, subject, body });
      setStatus('prepared');
      return;
    }
    setStatus('loading');
    try {
      const body = new URLSearchParams();
      fields.forEach((value, key) => body.set(key, String(value)));
      body.set('form-name', 'contact');
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('sent');
    } catch { setStatus('error'); }
  }
  return <section id="contact" className="section contact-section"><div className="container">
    <div className="section-heading"><span className="eyebrow">05 / LET’S CONNECT</span><h2>Good things start<br/>with a conversation<span>.</span></h2></div>
    <div className="contact-layout"><div className="contact-info"><p className="contact-intro">Have a project in mind, an internship opportunity, or an idea worth exploring? I’d love to hear about it.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={23}/></a>
      <div className="contact-meta"><a href={`tel:${profile.telephone}`}><Phone size={17}/>{profile.phone}</a><span><MapPin size={17}/>{profile.location}</span></div>
      <div className="contact-social"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={15}/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/>LinkedIn<ArrowUpRight size={15}/></a><button type="button" onClick={copyEmail}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? 'Email copied' : 'Copy email'}</button></div>
      <p className="sr-only" role="status">{copied ? 'Email address copied to clipboard.' : ''}</p>{copyError && <p className="form-feedback">Copy is unavailable here. Select the email address above or open your email app.</p>}
      <div className="cv-box"><span className="eyebrow">A CLOSER LOOK</span><a href={profile.cv} download>Full-stack developer CV <ArrowDownToLine size={17}/></a><a href={profile.healthCv} download>Digital health CV <ArrowDownToLine size={17}/></a></div>
    </div>
    <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} onChange={() => { if (status === 'prepared') { setStatus('idle'); setDraft(null); } }}>
      <div className="form-heading"><Mail size={19}/><h3>{hostedForm ? 'Send a message' : 'Compose an email'}</h3></div><p className="form-explainer">{hostedForm ? 'Send your enquiry using the contact form.' : 'Prepare a draft, then open it in your email app. You review and send it.'}</p>
      <input type="hidden" name="form-name" value="contact"/><div hidden><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></div>
      <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100}/></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={200}/></label></div>
      <label>What’s on your mind?<select name="subject" defaultValue="Project collaboration"><option>Project collaboration</option><option>Internship opportunity</option><option>Web or mobile development</option><option>Digital health research</option><option>Let’s connect</option></select></label>
      <label>Your message<textarea name="message" rows={4} placeholder="Tell me a little about your idea…" required minLength={10} maxLength={1500}/></label>
      <button type="submit" className="button primary" disabled={status === 'loading'}>{status === 'loading' ? <><LoaderCircle size={18} className="spin"/>Sending…</> : <>{hostedForm ? 'Send message' : 'Prepare email draft'}<ArrowUpRight size={18}/></>}</button>
      <div role="status" aria-live="polite">{status === 'prepared' && <p className="form-feedback">Your draft is ready. Nothing has been sent. Open it in your email app to review and send, or copy the text below.</p>}{status === 'sent' && <p className="form-feedback success">Your message was accepted by the contact service. Thank you for reaching out.</p>}</div>
      {status === 'prepared' && draft && <div className="email-draft"><strong>Subject: {draft.subject}</strong><p>{draft.body}</p><a className="button secondary" href={draft.href} target="_blank" rel="noopener noreferrer">Open in email app <ArrowUpRight size={17}/></a><small>If no email app is configured, send this text to {profile.email} using your preferred email service.</small></div>}
      {status === 'error' && <p className="form-feedback error" role="alert">The message could not be submitted. Check the required fields, try again, or email me directly.</p>}
    </form></div>
  </div></section>;
}
