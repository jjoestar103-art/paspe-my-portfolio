'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--cream)] border-b border-[var(--red)]/20 shadow-[0_2px_0_0_var(--red)]'
          : 'bg-transparent'
      }`}
    >
      <div className="page-container h-[72px] flex items-center justify-between">
        <Link
          href="#home"
          className="font-black text-2xl text-[var(--red)] tracking-tight transition-opacity hover:opacity-80"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          S. J. Paspe
        </Link>

        <Navigation />

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--red)] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--red)] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--red)] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden bg-[var(--cream)] border-t border-[var(--red)]/20 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <Navigation mobile onItemClick={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}