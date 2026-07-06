'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

const DURATION = 500;
const STAGGER = 120;

const VisCtx = createContext(false);

export function AnimatedSection({
  children, className, delay = 0, as: Tag = 'section',
}: {
  children: ReactNode; className?: string; delay?: number; as?: 'section' | 'div';
}) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity ${DURATION}ms ${EASE} ${delay}ms, transform ${DURATION}ms ${EASE} ${delay}ms`,
      }}
    >
      <VisCtx.Provider value={show}>{children}</VisCtx.Provider>
    </Tag>
  );
}

export function AnimatedChild({
  children, className, index = 0, staggerMs = STAGGER,
}: {
  children: ReactNode; className?: string; index?: number; staggerMs?: number;
}) {
  const visible = useContext(VisCtx);
  const d = index * staggerMs;

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity ${DURATION}ms ${EASE} ${d}ms, transform ${DURATION}ms ${EASE} ${d}ms`,
      }}
    >
      {children}
    </div>
  );
}
