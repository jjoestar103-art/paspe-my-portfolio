'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `
    w-full 
    bg-[var(--cream)] 
    border border-[var(--red)]/20 
    px-5 py-4 
    text-base text-[var(--text-dark)] 
    placeholder:text-[var(--text-muted)] 
    rounded-none 
    shadow-sm 
    transition-all duration-200 
    hover:border-[var(--red)]/40 
    focus:outline-none 
    focus:ring-2 focus:ring-[var(--red)]/30 
    focus:border-[var(--red)] 
    focus:shadow-md
  `;

  return (
    <section id="contact" className="bg-[var(--cream)] section-y">
      <div className="page-container">
        {/* Header with extra spacing after the title */}
        <div className="mb-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--red)] mb-4">
            Get In Touch
          </p>
          <h2
            className="text-6xl lg:text-7xl font-black italic text-[var(--text-dark)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Me
          </h2>
        </div>

        {submitted ? (
          <div className="bg-[var(--red)] text-white px-14 py-16 max-w-lg">
            <h3
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Message Sent!
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Thank you for reaching out. I&rsquo;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact info - takes 4 columns on large screens */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              {[
                { label: 'Email', value: 'joshdepaz2004@gmail.com', href: 'mailto:joshdepaz2004@gmail.com' },
                { label: 'Phone', value: '0915-5972-780', href: null },
                { label: 'Location', value: 'Iloilo City, Philippines', href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="border-l-4 border-[var(--red)] pl-6 py-3 space-y-1">
                  <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--red)] mb-2">
                    {label}
                  </h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-base text-[var(--text-dark)] hover:text-[var(--red)] transition-colors font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base text-[var(--text-dark)] font-medium">{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Form - takes 8 columns on large screens (wider) */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 flex flex-col gap-8">
              <div>
                <label className="block text-xs font-bold text-[var(--text-dark)] mb-3 tracking-[0.15em] uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--text-dark)] mb-3 tracking-[0.15em] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--text-dark)] mb-3 tracking-[0.15em] uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className={`${inputClass} resize-none min-h-[160px]`}
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  showArrow={!loading}
                  className="min-w-[14rem] px-8 py-4 text-sm"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}