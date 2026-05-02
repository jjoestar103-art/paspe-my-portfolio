'use client';

import Link from 'next/link';
import { NavigationItem } from '@/lib/types';

const navItems: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export default function Navigation({ mobile = false, onItemClick }: NavigationProps) {
  if (mobile) {
    return (
      <nav className="flex flex-col gap-1 py-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className="px-8 py-4 text-[var(--text-dark)] font-medium tracking-wide hover:text-[var(--red)] hover:bg-white/5 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-10">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-[var(--text-dark)] font-medium tracking-wide text-sm hover:text-[var(--red)] transition-colors duration-200 relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[var(--red)] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  );
}