import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Samuel Josh Paspe | Basic Web Developer',
  description:
    'Portfolio of Samuel Josh Paspe — Basic Web Developer specializing in React, Next.js, and TypeScript.',
  keywords: ['basic web developer', 'portfolio', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Samuel Josh Paspe' }],
  openGraph: {
    title: 'Samuel Josh Paspe | Basic Web Developer',
    description: 'Frontend Developer specializing in React, Next.js, and TypeScript.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}