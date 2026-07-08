import Link from "next/link";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";

const stats = [
  { number: "3900+", label: "Employees" },
  { number: "80+", label: "Offices" },
  { number: "45+", label: "Countries" },
  { number: "1908", label: "Founded" },
];

const services = [
  {
    title: "Energy & Industry",
    description: "Hydropower, renewable energy, offshore engineering, and industrial solutions from concept through commissioning.",
    href: "/services",
  },
  {
    title: "Transport & Mobility",
    description: "Integrated transport planning, road and rail design, bridge engineering, and sustainable mobility solutions.",
    href: "/services",
  },
  {
    title: "Buildings & Environment",
    description: "Architecture, structural engineering, water supply, and environmental assessments for the built environment.",
    href: "/services",
  },
];

const timeline = [
  { year: "1908", title: "The story begins", description: "Norsk Vandbygningskontor established" },
  { year: "1974", title: "Multiconsult name", description: "The company takes on the name Multiconsult" },
  { year: "1997", title: "Multidisciplinary", description: "Expanding across engineering disciplines" },
  { year: "2003", title: "International", description: "Projects span Europe, Africa, and Asia" },
  { year: "2015", title: "Oslo Børs", description: "Listed on the Oslo Stock Exchange" },
  { year: "2020+", title: "Scandinavian growth", description: "Offices in Sweden, Denmark, Poland, UK" },
];

const brands = [
  { name: "Multiconsult", tag: "Engineering", description: "Specialist engineering consultancy delivering multidisciplinary solutions worldwide.", href: "https://www.multiconsultgroup.com" },
  { name: "A-lab", tag: "Architecture", description: "Oslo-based architecture studio creating innovative and sustainable designs.", href: "https://www.a-lab.no" },
  { name: "LINK Arkitektur", tag: "Architecture", description: "One of Scandinavia's leading architecture practices.", href: "https://www.linkarkitektur.com" },
  { name: "Sitepartner", tag: "Site Development", description: "Specialist in site development and infrastructure projects across Norway.", href: "https://www.sitepartner.no" },
  { name: "Iterio", tag: "Urban Planning", description: "Urban planning and traffic engineering for sustainable mobility.", href: "https://www.iterio.se" },
];

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden bg-canvas">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover"           poster="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80" style={{ animation: 'video-zoom 20s ease-out 1s both' }}>
          <source src="/videos/engineering-blueprints.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center">

          <h1 className="text-hero-display text-primary tracking-tight" style={{ animation: 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 250ms both' }}>Think Beyond.</h1>
          <p className="mt-6 mx-auto max-w-lg text-body-large text-body-muted leading-relaxed" style={{ animation: 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 400ms both' }}>Engineering & architecture for the built environment. Since 1908.</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animation: 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 550ms both' }}>
            <Link href="/contact" className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-button text-white transition-all duration-200 hover:bg-orange/90 border border-orange/20 hover:border-orange/50 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm">Get in touch</Link>
            <Link href="/projects" className="inline-flex items-center border-b border-ink/30 pb-0.5 text-body text-body-muted transition-colors duration-200 hover:border-ink hover:text-ink focus-visible:ring-2 focus-visible:ring-orange/50 outline-none">View our projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-primary py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-4 sm:gap-8">
          {stats.map((stat, i) => (
            <AnimatedChild key={stat.label} index={i + 1}>
              <div className="text-center">
                <p className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-[450] text-white leading-none tracking-tight">{stat.number}</p>
                <p className="text-caption text-white/60 mt-3 font-medium">{stat.label}</p>
              </div>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-section-heading text-primary">Our expertise</h2>
            <p className="mt-4 text-body-large text-body-muted">End-to-end capability across the full project lifecycle</p>
          </div>
        </AnimatedChild>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedChild key={s.title} index={i + 1}>
              <Link href={s.href} className="group flex h-full flex-col rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-200 hover:border-orange/30 hover:shadow-sm hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none">
                <div className="flex-1">
                  <h3 className="text-card-heading text-primary group-hover:text-orange transition-colors duration-200">{s.title}</h3>
                  <p className="mt-3 text-body text-body-muted leading-relaxed">{s.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-button text-orange transition-all duration-200 group-hover:gap-2.5">
                  Learn more<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4" /></svg>
                </span>
              </Link>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBlock() {
  return (
    <section className="bg-soft-stone py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-section-heading text-primary">A multidisciplinary approach</h2>
              <p className="mt-6 text-body-large text-body-muted leading-relaxed">We bring together expertise from Multiconsult, LINK Arkitektur, A-lab, Iterio, and Sitepartner to deliver integrated engineering and architecture solutions across the full project lifecycle.</p>
              <p className="mt-4 text-body-large text-body-muted leading-relaxed">From hydropower in the UK to urban development in Scandinavia, our work spans 45+ countries - always driven by the conviction that great engineering serves the greater good.</p>
              <Link href="/about" className="mt-8 inline-flex items-center gap-1.5 border-b border-ink/30 pb-0.5 text-body text-ink transition-colors duration-200 hover:border-ink focus-visible:ring-2 focus-visible:ring-orange/50 outline-none">
                Learn more<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4" /></svg>
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
            </div>
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-heading text-primary">Our companies</h2>
            <p className="mt-4 text-body-large text-body-muted">Five brands, one shared purpose</p>
          </div>
        </AnimatedChild>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, i) => (
            <AnimatedChild key={brand.name} index={i + 1}>
              <a href={brand.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-200 hover:border-orange/30 hover:shadow-sm hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none">
                <span className="inline-block self-start rounded-full border border-hairline px-3 py-1 text-micro text-muted uppercase tracking-wider">{brand.tag}</span>
                <h3 className="mt-4 text-card-heading text-primary group-hover:text-orange transition-colors duration-200">{brand.name}</h3>
                <p className="mt-3 flex-1 text-body text-body-muted leading-relaxed">{brand.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-button text-orange transition-all duration-200 group-hover:gap-2.5">
                  Visit site<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4" /></svg>
                </span>
              </a>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="bg-soft-stone py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-heading text-primary">Since 1908</h2>
            <p className="mt-4 text-body-large text-body-muted">A century of engineering excellence</p>
          </div>
        </AnimatedChild>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item, i) => (
            <AnimatedChild key={item.year} index={i + 1}>
              <div className="h-full rounded-2xl border border-hairline/40 bg-white p-6 transition-all duration-200 hover:border-orange/20 hover:shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white text-sm font-semibold tracking-tight">{item.year}</div>
                  <div className="min-w-0">
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-0.5 text-caption text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThinkBeyondSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
          <div className="mx-auto max-w-2xl space-y-6 text-body-large text-body-muted leading-relaxed">
            <p>Since 1908, we have believed that great engineering is not just about calculations and blueprints. It is about seeing what others overlook and asking the questions nobody else thinks to ask.</p>
            <p>To think beyond is to imagine a bridge where others see a river. To design a power station that works with nature, not against it. To build cities that serve both the people who live in them today and the generations who will inherit them tomorrow.</p>
            <p>This is not a slogan on a wall. It is the thread that runs through every project we undertake, from the fjords of Norway to the hills of Nepal.</p>
            <p>We invite you to think beyond with us.</p>
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}

function InvestorRelations() {
  return (
    <section className="bg-primary py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedChild index={0}>
            <h2 className="text-section-heading text-white">Investor Relations</h2>
            <p className="mt-6 text-body-large text-white/60 leading-relaxed">Listed on the Oslo Stock Exchange since 2015, we maintain an open dialogue with our shareholders, committed to delivering long-term value through sustainable growth.</p>
            <Link href="/investor-relations" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-orange px-7 py-3.5 text-button text-white transition-all duration-200 hover:bg-orange/90 border border-orange/20 hover:border-orange/50 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm">
              Visit Investor Relations<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4" /></svg>
            </Link>
          </AnimatedChild>
          <AnimatedChild index={1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80" alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
            </div>
          </AnimatedChild>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <AnimatedChild index={0}>
          <h2 className="text-section-heading text-primary">Let&apos;s build the future together</h2>
          <p className="mx-auto mt-6 max-w-lg text-body-large text-body-muted">Ready to start your next project? Get in touch with our team.</p>
        </AnimatedChild>
        <AnimatedChild index={1}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-button text-white transition-all duration-200 hover:bg-orange/90 border border-orange/20 hover:border-orange/50 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm">Contact us</Link>
            <Link href="/projects" className="inline-flex items-center border-b border-ink/30 pb-0.5 text-body text-body-muted transition-colors duration-200 hover:border-ink hover:text-ink focus-visible:ring-2 focus-visible:ring-orange/50 outline-none">View our projects</Link>
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection><StatsSection /></AnimatedSection>
      <AnimatedSection><ServicesSection /></AnimatedSection>
      <AnimatedSection><AboutBlock /></AnimatedSection>
      <AnimatedSection><BrandsSection /></AnimatedSection>
      <AnimatedSection><TimelineSection /></AnimatedSection>
      <AnimatedSection><ThinkBeyondSection /></AnimatedSection>
      <AnimatedSection><InvestorRelations /></AnimatedSection>
      <AnimatedSection><ClosingCta /></AnimatedSection>
    </>
  );
}
