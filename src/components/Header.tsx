'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 0);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-hairline/40 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo-1.webp"
              alt="Multiconsult"
              className="h-6 sm:h-7 w-auto"
              style={{ animation: 'header-fade-in 300ms ease-out both' }}
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-caption font-medium text-muted hover:text-ink transition-colors duration-150 rounded-lg hover:bg-soft-stone/60"
                style={{ animation: `header-fade-in 300ms ease-out ${100 + i * 60}ms both` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-full bg-orange px-5 py-2 text-caption font-medium text-white transition-all duration-200 hover:bg-orange/90 border border-orange/20 hover:border-orange/50 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-ink hover:text-primary transition-colors duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-hairline/40"
          style={{ animation: 'fade-in 200ms ease-out' }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-caption font-medium text-ink hover:bg-soft-stone/80 rounded-lg transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-caption font-medium text-white bg-orange rounded-lg text-center mt-3"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
