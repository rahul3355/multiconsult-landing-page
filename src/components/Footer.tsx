'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

const brands = [
  { href: 'https://a-lab.no', label: 'A-lab' }, { href: 'https://linkarkitektur.com', label: 'LINK Arkitektur' },
  { href: 'https://multiconsult.no', label: 'Multiconsult Norge' }, { href: 'https://multiconsult.pl', label: 'Multiconsult Polska' },
  { href: 'https://iterio.se', label: 'Iterio' }, { href: 'https://sitepartner.no', label: 'Sitepartner' },
  { href: 'https://vianova.no', label: 'ViaNova' },
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'https://instagram.com', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { href: 'https://twitter.com', label: 'X (Twitter)', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { href: 'https://youtube.com', label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { href: 'https://facebook.com', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
];

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const VisCtx = createContext(false);

function FooterColumn({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const visible = useContext(VisCtx);
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity 100ms ${EASE} ${index * 80}ms, transform 100ms ${EASE} ${index * 80}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="bg-[#17171c] text-white relative">
      <VisCtx.Provider value={show}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FooterColumn index={0}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Contact</h3>
              <div className="space-y-3 text-sm text-[#93939f]">
                <p>Multiconsult ASA</p><p>Nedre Skøyen vei 2</p><p>0276 Oslo, Norway</p>
                <p><a href="mailto:oslo@multiconsult.no" className="text-white/80 hover:text-white transition-colors duration-75">oslo@multiconsult.no</a></p>
              </div>
            </FooterColumn>

            <FooterColumn index={1}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Links</h3>
              <ul className="space-y-3">
                {[{ href: '/investor-relations', label: 'Investor Relations' }, { href: '/whistleblowing', label: 'Whistleblowing' }, { href: '/privacy', label: 'Privacy' }].map((link) => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-[#93939f] hover:text-white transition-colors duration-75">{link.label}</Link></li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn index={2}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Brands</h3>
              <ul className="space-y-3">
                {brands.map((brand) => (
                  <li key={brand.label}><a href={brand.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#93939f] hover:text-white transition-colors duration-75">{brand.label}</a></li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn index={3}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">Social</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-[#93939f] hover:text-white transition-colors duration-75">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                  </a>
                ))}
              </div>
            </FooterColumn>
          </div>
        </div>
      </VisCtx.Provider>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-[#93939f]">&copy; {new Date().getFullYear()} Multiconsult Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
