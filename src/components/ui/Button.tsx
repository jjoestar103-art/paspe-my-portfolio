'use client';

import { ButtonProps } from '@/lib/types';

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  showArrow = false,
}: ButtonProps & { showArrow?: boolean }) {
  const base =
    'inline-flex items-center justify-center gap-3 rounded-none min-h-14 px-6 py-4 font-semibold text-sm tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] select-none whitespace-nowrap';

  const variants = {
    primary:
      'bg-[var(--red)] text-white hover:bg-[var(--red-dark)] shadow-[0_12px_30px_rgba(184,74,44,0.22)] hover:shadow-[0_16px_36px_rgba(184,74,44,0.28)]',
    secondary:
      'bg-[var(--yellow)] text-[var(--text-dark)] hover:bg-[var(--yellow)]/80 shadow-[0_12px_30px_rgba(212,175,55,0.24)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.3)]',
    outline:
      'border-2 border-[var(--red)] text-[var(--red)] hover:bg-[var(--red)] hover:text-white bg-transparent',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <span className="transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">
          →
        </span>
      )}
    </button>
  );
}