'use client'

import { useEffect, useRef, useState } from 'react'

function parseStat(str: string) {
  const cleaned = str.replace(/,/g, '')
  const match = cleaned.match(/^([\d.]+)(.*)$/)
  if (!match) return { number: 0, suffix: str, original: str }
  return { number: parseInt(match[1], 10), suffix: match[2], original: str }
}

function formatNumber(n: number) {
  return n.toLocaleString('en-US')
}

export function CountUp({
  value,
  duration = 1000,
  className,
}: {
  value: string
  duration?: number
  className?: string
}) {
  const [display, setDisplay] = useState(0)
  const [done, setDone] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const { number: target, suffix } = parseStat(value)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let frame: number
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * target)
      setDisplay(current)
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      } else {
        setDone(true)
      }
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {inView ? `${done ? formatNumber(target) : formatNumber(display)}${suffix}` : `0${suffix}`}
    </span>
  )
}
