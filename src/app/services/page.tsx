import Link from "next/link";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { AmbientBackground } from "@/components/AmbientBackground";

const services = [
  { title: "Buildings & Property", emoji: "🏗️", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80", desc: "Sustainable design and engineering for the built environment. We deliver healthcare, residential, education, and commercial projects that set new standards in performance and wellbeing.", stats: ["300+ healthcare projects", "BREEAM specialist network", "15,000+ residential units designed"], tags: ["Healthcare", "Residential", "Education", "Commercial", "Sustainable Design", "BREEAM"] },
  { title: "Mobility & Transport", emoji: "🌉", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80", desc: "Integrated transport solutions that connect people and goods safely and efficiently. From highways to light rail, we plan, design, and deliver complex mobility infrastructure.", stats: ["500+ bridges designed", "200 km of tunnel projects", "Major rail programmes across Scandinavia"], tags: ["Roads", "Bridges", "Tunnels", "Rail", "Urban Mobility", "Logistics"] },
  { title: "Energy & Industry", emoji: "⚡", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80", desc: "Over 100 years of hydropower engineering leadership. Today we drive the energy transition through renewable energy, carbon capture, electrification, and responsible oil & gas decommissioning.", stats: ["100+ years of hydropower", "500+ MW renewable capacity advised", "CCS feasibility for 20+ industrial sites"], tags: ["Hydropower", "Renewable Energy", "CCS", "Electrification", "Oil & Gas Transition"] },
  { title: "Water & Environment", emoji: "💧", img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&q=80", desc: "Protecting water resources and adapting to a changing climate. We design resilient water supply, wastewater treatment, flood protection, and climate adaptation systems.", stats: ["1,000+ water treatment plants", "Flood protection for 50+ municipalities", "Climate adaptation plans across Norway"], tags: ["Water Supply", "Wastewater", "Climate Adaptation", "Flood Protection"] },
  { title: "Ground Investigations", emoji: "⛰️", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80", desc: "Subsurface intelligence for safe, cost-effective construction. Our geotechnical engineers, geologists, and lab specialists deliver ground models that de-risk every phase of development.", stats: ["10,000+ boreholes annually", "Advanced seabed mapping", "On-site geotechnical laboratories"], tags: ["Geotechnical Engineering", "Seabed Mapping", "Lab Testing", "Site Investigation"] },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <AnimatedSection as="div">
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          <AmbientBackground variant="green" />
          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-hero-display mb-6 text-primary" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}>Our Services</h1>
            <p className="text-body-large text-body-muted max-w-2xl" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 200ms both' }}>Engineering, architecture, and consultancy across five core disciplines.</p>
          </div>
        </section>
      </AnimatedSection>

      {services.map((s, i) => (
        <AnimatedSection key={s.title}>
          <section className={`relative px-6 py-24 md:py-32 overflow-hidden ${i % 2 === 1 ? "bg-soft-stone" : "bg-canvas"}`}>
            <div className={`relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <AnimatedChild index={0}>
                <div className={`w-full md:w-1/2 ${i % 2 === 1 ? "md:pl-8" : "md:pr-8"}`}>
                  <div className="overflow-hidden rounded-2xl">
                    <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/3] object-contain bg-soft-stone/50 transition-transform duration-200 hover:scale-105" />
                  </div>
                </div>
              </AnimatedChild>
              <div className="w-full md:w-1/2">
                <AnimatedChild index={1}>
                  <span className="text-3xl">{s.emoji}</span>
                  <h2 className="text-section-heading mt-3 text-primary">{s.title}</h2>
                  <p className="text-body-large mt-4 leading-relaxed text-body-muted">{s.desc}</p>
                </AnimatedChild>
                <AnimatedChild index={2}>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-hairline px-3 py-1 text-caption text-muted transition-colors duration-75 hover:bg-soft-stone hover:border-muted">{t}</span>
                    ))}
                  </div>
                </AnimatedChild>
                <AnimatedChild index={3}>
                  <div className="mt-8 space-y-3 border-t border-hairline pt-6">
                    {s.stats.map((stat) => (
                      <div key={stat} className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary" /><span className="text-body text-ink">{stat}</span></div>
                    ))}
                  </div>
                </AnimatedChild>
              </div>
            </div>
          </section>
        </AnimatedSection>
      ))}

      <AnimatedSection>
        <section className="bg-deep-green px-6 py-24 text-center text-white md:py-32">
          <div className="mx-auto max-w-3xl">
            <AnimatedChild index={0}><h2 className="text-section-heading mb-6 text-white">Let&apos;s Work Together</h2><p className="text-body-large mb-10 text-white/80">Have a project in mind? Our team of 3,900+ specialists is ready to help.</p></AnimatedChild>
            <AnimatedChild index={1}><Link href="/contact" className="inline-block rounded-full border border-white bg-white px-8 py-3 text-button text-primary transition-all duration-75 hover:bg-white/90">Contact Us</Link></AnimatedChild>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
