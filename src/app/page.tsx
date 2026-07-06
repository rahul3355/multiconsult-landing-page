import Link from "next/link";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";

const services = [
  { title: "Buildings & Property", description: "Comprehensive engineering and architectural design for commercial, residential, and public buildings across all project phases.", href: "/services", icon: "buildings" },
  { title: "Mobility & Transport", description: "Integrated transport planning, road and rail design, bridge engineering, and sustainable mobility solutions.", href: "/services", icon: "mobility" },
  { title: "Energy & Industry", description: "Hydropower, renewable energy, offshore engineering, and industrial process solutions from concept through commissioning.", href: "/services", icon: "energy" },
  { title: "Water & Environment", description: "Water supply, wastewater treatment, flood risk management, and comprehensive environmental assessments.", href: "/services", icon: "water" },
  { title: "Ground Investigations", description: "Geotechnical engineering, site investigations, and ground condition analysis for projects worldwide.", href: "/services", icon: "ground" },
];

const stats = [
  { number: "3900+", label: "Employees" }, { number: "80+", label: "Offices" }, { number: "45+", label: "Countries" }, { number: "1908", label: "Founded" },
];

const timeline = [
  { year: "1908", title: "The story begins", description: "Norsk Vandbygningskontor established", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=128&q=80" },
  { year: "1974", title: "Multiconsult name introduced", description: "The company takes on the name Multiconsult", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=128&q=80" },
  { year: "1997", title: "Multidisciplinary profile", description: "Expanding capabilities across engineering disciplines", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=128&q=80" },
  { year: "2003", title: "International expansion", description: "Projects span across Europe, Africa, and Asia", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=128&q=80" },
  { year: "2015", title: "Acquires LINK Arkitektur", description: "Listed on Oslo Stock Exchange", image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=128&q=80" },
  { year: "2010–2020", title: "Scandinavian expansion", description: "Offices in Sweden, Denmark, Poland, UK", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=128&q=80" },
];

const brands = [
  { name: "Multiconsult", tag: "Engineering", description: "Specialist engineering consultancy delivering multidisciplinary solutions across buildings, transport, energy, water, and ground engineering worldwide.", href: "https://www.multiconsultgroup.com", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80" },
  { name: "A-lab", tag: "Architecture", description: "Oslo-based architecture studio creating innovative and sustainable architectural designs for urban development.", href: "https://www.a-lab.no", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80" },
  { name: "LINK Arkitektur", tag: "Architecture", description: "One of Scandinavia's leading architecture practices, shaping sustainable environments for people and communities.", href: "https://www.linkarkitektur.com", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
  { name: "Sitepartner", tag: "Site Development", description: "Specialist in site development, infrastructure and land development projects across Norway.", href: "https://www.sitepartner.no", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Iterio", tag: "Urban Planning", description: "Urban planning and traffic engineering consultancy creating sustainable mobility and city development solutions.", href: "https://www.iterio.se", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80" },
];

const quotes = [
  { text: "We are enablers - we turn ambitious goals into reality.", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80" },
  { text: "Since 1908, we have tackled big and complex challenges.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" },
  { text: "Our work has always served the greater good.", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80" },
  { text: "Together, as engineers, architects and everyone!", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" },
];

const trustLogos = ["Statkraft", "Equinor", "Bane NOR", "Nye Veier", "Oslo Kommune", "Jernbaneverket"];

function ServiceIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "buildings": return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="12" width="8" height="16"/><rect x="14" y="4" width="8" height="24"/><rect x="24" y="8" width="4" height="20"/><line x1="4" y1="28" x2="28" y2="28"/></svg>;
    case "mobility": return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="24" r="3"/><circle cx="24" cy="24" r="3"/><path d="M5 24H3V12l4-4h10l4 4v12h-2"/><path d="M17 12h4l3 4v4"/><line x1="3" y1="16" x2="17" y2="16"/></svg>;
    case "energy": return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2L8 18h8l-2 12 10-16h-8l2-12z"/></svg>;
    case "water": return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4c0 0-8 8-8 14a8 8 0 0016 0c0-6-8-14-8-14z"/><path d="M12 18a4 4 0 008 0" strokeWidth="1"/></svg>;
    case "ground": return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 24l8-16 6 10 6-8 4 14"/><line x1="4" y1="28" x2="28" y2="28"/></svg>;
    default: return null;
  }
}

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Hero />
      <AnimatedSection><AboutBlock /></AnimatedSection>
      <AnimatedSection><ServicesOverview /></AnimatedSection>
      <AnimatedSection><StatsSection /></AnimatedSection>
      <AnimatedSection><TrustLogoStrip /></AnimatedSection>
      <AnimatedSection><HistoryTimeline /></AnimatedSection>
      <AnimatedSection><BrandsSection /></AnimatedSection>
      <AnimatedSection><ThinkBeyondSection /></AnimatedSection>
      <AnimatedSection><InvestorRelations /></AnimatedSection>
      <AnimatedSection><ClosingCta /></AnimatedSection>
    </>
  );
}

const ANIM = 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) both';

function AnnouncementBar() {
  return (
    <div className="bg-cohere-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-[9px]">
        <p className="text-micro text-white/80">Multiconsult ASA is listed on the Oslo Stock Exchange under ticker MULTI.</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-canvas relative overflow-hidden">
      <div className="relative mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex items-center px-6 py-24 sm:py-32 lg:px-16">
          <div className="max-w-lg">
            <p className="text-mono-label text-muted mb-6" style={{ animation: `${ANIM} 100ms` }}>Multiconsult Group</p>
            <h1 className="text-hero-display text-primary" style={{ animation: `${ANIM} 200ms` }}>Think Beyond.</h1>
            <p className="mt-8 text-body-large text-body-muted" style={{ animation: `${ANIM} 300ms` }}>We are Multiconsult - a specialist engineering and architecture consultancy. Since 1908.</p>
            <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row" style={{ animation: `${ANIM} 400ms` }}>
              <Link href="/services" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-button text-white transition-all duration-75 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/50 outline-none">
                Explore Our Services
              </Link>
              <Link href="/projects" className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-button text-body-muted transition-all duration-75 hover:border-ink/40 hover:text-ink focus-visible:ring-2 focus-visible:ring-primary/50 outline-none">
                Our Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex items-center px-6 py-24 sm:py-32 lg:px-0 lg:pr-16">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ animation: `scale-in 100ms ease-out 300ms both` }}>
            <div className="absolute inset-0 bg-black/10 z-10" />
            <video autoPlay muted loop playsInline className="h-full w-full object-cover" poster="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80">
              <source src="/videos/hydroelectric-aerial.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlock() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AnimatedChild index={0}>
          <p className="text-mono-label text-muted mb-4">About</p>
          <h2 className="text-section-heading text-primary">A multidisciplinary approach</h2>
          <p className="mt-6 text-body-large text-body-muted leading-relaxed">We build bridges between the past and the future, between heart and mind, people and communities, ideas and outcomes. As a specialist engineering and architecture consultancy with over 3,900 employees across 80+ offices, we bring together expertise from Multiconsult, LINK Arkitektur, A-lab, Iterio, and Sitepartner to enhance a truly multidisciplinary approach.</p>
          <p className="mt-4 text-body-large text-body-muted leading-relaxed">From hydropower in the UK to urban development in Scandinavia, our work spans 45+ countries - always driven by the conviction that great engineering and architecture serve the greater good.</p>
          <Link href="/about" className="mt-8 inline-flex items-center border-b border-ink/30 py-1 text-body text-ink transition-colors duration-75 hover:border-ink focus-visible:ring-2 focus-visible:ring-focus-blue outline-none">Learn more about us</Link>
        </AnimatedChild>
        <AnimatedChild index={1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" alt="" className="h-full w-full object-cover transition-transform duration-200 hover:scale-105" loading="lazy" />
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-mono-label text-muted mb-4">What We Do</p>
            <h2 className="text-section-heading text-primary">Our Services</h2>
            <p className="mt-4 text-body-large text-body-muted">End-to-end expertise across the full project lifecycle</p>
          </div>
        </AnimatedChild>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedChild key={s.title} index={i + 1}>
              <div className="flex h-full flex-col rounded-sm bg-soft-stone p-8 transition-all duration-75 hover:bg-soft-stone/80 hover:-translate-y-0.5">
                <div className="text-primary"><ServiceIcon icon={s.icon} /></div>
                <h3 className="mt-4 text-card-heading text-primary">{s.title}</h3>
                <p className="mt-3 flex-1 text-body text-body-muted">{s.description}</p>
                <Link href={s.href} className="mt-4 inline-flex items-center border-b border-ink/30 py-0.5 text-button text-ink transition-colors duration-75 hover:border-ink focus-visible:ring-2 focus-visible:ring-focus-blue outline-none">Learn more</Link>
              </div>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-t border-hairline py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedChild key={stat.label} index={i}>
              <div className="text-center">
                <p className="text-product-display text-primary">{stat.number}</p>
                <p className="text-mono-label text-muted mt-2">{stat.label}</p>
              </div>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustLogoStrip() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}><p className="text-caption text-muted text-center mb-10">Trusted by leading Norwegian enterprises</p></AnimatedChild>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {trustLogos.map((name, i) => (
            <AnimatedChild key={name} index={i + 1}>
              <span className="text-feature-heading text-muted/40 font-medium tracking-tight transition-colors duration-75 hover:text-muted/60">{name}</span>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistoryTimeline() {
  return (
    <section className="bg-soft-stone py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
          <p className="text-mono-label text-muted mb-4">Our History</p>
          <h2 className="text-section-display text-primary">Past</h2>
        </AnimatedChild>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item, i) => (
            <AnimatedChild key={item.year} index={i + 1}>
              <div className="h-full rounded-sm bg-white p-6 transition-all duration-75 hover:bg-white/80">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xs">
                    <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-200 hover:scale-110" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-feature-heading text-primary">{item.year}</p>
                    <p className="mt-0.5 font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-caption text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedChild>
          ))}
        </div>
        <AnimatedChild index={timeline.length + 1}>
          <div className="mt-24">
            <h2 className="text-section-display text-primary">Future</h2>
            <p className="mt-6 max-w-2xl text-body-large text-body-muted leading-relaxed">The next chapter of Multiconsult is being written today. With a growing international presence, deeper integration across our subsidiaries, and an unwavering commitment to sustainable engineering and architecture, we continue to build the future - one project at a time.</p>
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
            <p className="text-mono-label text-muted mb-4">Our Group</p>
            <h2 className="text-section-heading text-primary">Our Companies</h2>
            <p className="mt-4 text-body-large text-body-muted">Five brands, one shared purpose</p>
          </div>
        </AnimatedChild>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, i) => (
            <AnimatedChild key={brand.name} index={i + 1}>
              <a href={brand.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-sm border border-card-border bg-white transition-all duration-75 hover:border-hairline focus-visible:ring-2 focus-visible:ring-focus-blue outline-none">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={brand.image} alt={brand.name} className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block self-start rounded-full border border-hairline px-3 py-1 text-micro text-muted uppercase tracking-wider">{brand.tag}</span>
                  <h3 className="mt-3 text-card-heading text-primary">{brand.name}</h3>
                  <p className="mt-2 flex-1 text-body text-body-muted">{brand.description}</p>
                  <span className="mt-4 inline-flex items-center self-start border-b border-ink/30 py-0.5 text-button text-ink transition-colors duration-75 group-hover:border-ink">Visit site</span>
                </div>
              </a>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThinkBeyondSection() {
  return (
    <section className="bg-soft-stone py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedChild index={0}>
          <p className="text-mono-label text-muted mb-4">Our Philosophy</p>
          <h2 className="text-section-display text-primary">Think</h2>
        </AnimatedChild>
        <div className="mt-12 space-y-20">
          {quotes.map((quote, i) => (
            <AnimatedChild key={i} index={i + 1}>
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {i % 2 === 0 ? (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                      <img src={quote.image} alt="" className="h-full w-full object-cover transition-transform duration-200 hover:scale-105" loading="lazy" />
                    </div>
                    <div><p className="text-section-heading text-primary leading-tight">&ldquo;{quote.text}&rdquo;</p></div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1"><p className="text-section-heading text-primary leading-tight">&ldquo;{quote.text}&rdquo;</p></div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] order-1 lg:order-2">
                      <img src={quote.image} alt="" className="h-full w-full object-cover transition-transform duration-200 hover:scale-105" loading="lazy" />
                    </div>
                  </>
                )}
              </div>
            </AnimatedChild>
          ))}
        </div>
        <AnimatedChild index={quotes.length + 1}>
          <div className="mt-24">
            <h2 className="text-section-display text-primary">Beyond</h2>
            <p className="mt-6 max-w-2xl text-body-large text-body-muted leading-relaxed">Think Beyond is not just our tagline. It is our approach - to see further, question deeper, and build solutions that truly make a difference for people and the planet.</p>
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}

function InvestorRelations() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedChild index={0}>
            <p className="text-mono-label text-muted mb-4">Investors</p>
            <h2 className="text-section-heading text-primary">Investor Relations</h2>
            <p className="mt-6 text-body-large text-body-muted leading-relaxed">We maintain an open and transparent dialogue with our shareholders and the investment community. Listed on the Oslo Stock Exchange since 2015, we are committed to delivering long-term value through sustainable growth and operational excellence.</p>
            <Link href="/investor-relations" className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-button text-white transition-all duration-75 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-focus-blue outline-none">Visit Investor Relations</Link>
          </AnimatedChild>
          <AnimatedChild index={1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
              <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </AnimatedChild>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <AnimatedChild index={0}>
          <h2 className="text-section-heading text-white">Let&apos;s build the future together</h2>
          <p className="mx-auto mt-6 max-w-xl text-body-large text-white/70">Ready to start your next project? Get in touch with our team.</p>
        </AnimatedChild>
        <AnimatedChild index={1}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-button text-primary transition-all duration-75 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/50 outline-none">Contact Us</Link>
            <Link href="/projects" className="inline-flex items-center border-b border-white/30 py-1 text-body text-white/80 transition-colors duration-75 hover:border-white focus-visible:ring-2 focus-visible:ring-white/50 outline-none">View Our Projects</Link>
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}
