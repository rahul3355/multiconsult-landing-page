'use client'

import { useEffect, useRef, useState } from 'react'

export function RevealHeading({
  children,
  className,
  as: Tag = 'h1',
}: {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className}>
      <span
        className="relative inline-block overflow-hidden"
        style={show ? {
          clipPath: 'inset(0 100% 0 0)',
          WebkitClipPath: 'inset(0 100% 0 0)',
          animation: 'reveal-sweep 100ms ease-out forwards',
        } : {}}
      >
        {children}
        {show && (
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.15) 48%, rgba(255,255,255,0.3) 50%, transparent 58%)',
              mixBlendMode: 'overlay',
            }}
          />
        )}
      </span>
    </Tag>
  )
}
