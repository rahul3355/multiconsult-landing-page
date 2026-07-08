import Link from "next/link";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";

const stats = [
  { value: "1908", label: "Founded" }, { value: "3,900+", label: "Employees" }, { value: "80+", label: "Offices" }, { value: "45+", label: "Countries" },
];

const timeline = [
  { year: "1908", title: "Founded as Norsk Vandbygningskontor", desc: "Established to provide hydraulic engineering expertise for Norway's growing hydropower industry." },
  { year: "1974", title: "Multiconsult name introduced", desc: "The company takes on the name Multiconsult." },
  { year: "1997", title: "Multidisciplinary profile", desc: "Expanding capabilities across engineering disciplines." },
  { year: "2003", title: "Merger and international expansion", desc: "Projects span Europe, Africa, and Asia." },
  { year: "2015", title: "Oslo Stock Exchange listing", desc: "Listed on Oslo Børs on 22 May 2015." },
  { year: "2010–2020", title: "Scandinavian expansion", desc: "Acquired LINK Arkitektur, A-lab, and Iterio." },
];

const values = [
  { title: "Sustainability", desc: "We integrate sustainable design into every project, driving the transition to a low-carbon society through BREEAM certification and climate-adaptive engineering." },
  { title: "Competence", desc: "With 3,900+ specialists, we bring deep technical knowledge to every challenge." },
  { title: "Digitalisation", desc: "We leverage BIM, digital twins, and data-driven design to deliver smarter infrastructure." },
  { title: "Collaboration", desc: "We partner across disciplines, borders, and sectors for the best solutions." },
  { title: "Diversity", desc: "An inclusive culture where different backgrounds strengthen our outcomes." },
  { title: "Think Beyond", desc: "Challenge conventions, question assumptions, and imagine what others haven't." },
];

const leaders = [
  { name: "Karsten Warloe", role: "CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Ove B. Haupberg", role: "CFO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Rikard Appelgren", role: "Chair", img: "https://images.unsplash.com/photo-1507511444994-3ba60e5b64c5?w=400&q=80" },
];

const subsidiaries = [
  { name: "LINK Arkitektur", desc: "Scandinavia's leading architecture firm - 500 employees, 15 offices across the Nordics." },
  { name: "A-lab", desc: "Award-winning architecture practice known for innovative, context-driven design." },
  { name: "Iterio", desc: "Urban planning and landscape architecture consultancy based in Sweden." },
  { name: "Sitepartner", desc: "Site development and infrastructure engineering across Norway." },
  { name: "ViaNova", desc: "Transport and mobility engineering with 130 employees across Norway." },
  { name: "Multiconsult Polska", desc: "Multidisciplinary engineering with offices across Poland." },
  { name: "Multiconsult UK Ltd", desc: "Hydropower engineering for international projects, based in Ashford, Kent." },
];

const team = [
  { name: "Anders Gustav Pettersen", role: "Managing Director", desc: "Managing Director with deep expertise in hydropower, renewable energy, and international project delivery.", img: "https://ui-avatars.com/api/?name=Anders+Gustav+Pettersen&background=e85d2c&color=fff&size=400" },
  { name: "Patrick Hansson", role: "Principal Civil Engineer", desc: "Heavy civil construction specialist with deep expertise in hydropower, tunnels, and major infrastructure projects.", img: "https://ui-avatars.com/api/?name=Patrick+Hansson&background=e85d2c&color=fff&size=400" },
  { name: "Andrew Thick", role: "Chief Mechanical Engineer", desc: "Leads mechanical engineering for hydropower and renewable energy projects.", img: "https://ui-avatars.com/api/?name=Andrew+Thick&background=e85d2c&color=fff&size=400" },
  { name: "Gustavo Alfonzo", role: "Senior Mechanical Engineer", desc: "Specialises in hydraulic gates and mechanical equipment for hydroelectric projects.", img: "https://ui-avatars.com/api/?name=Gustavo+Alfonzo&background=e85d2c&color=fff&size=400" },
  { name: "Chris Stubberfield", role: "Principal Civil Engineer", desc: "Chartered Civil Engineer (CEng, MICE) delivering civil engineering design for hydropower schemes.", img: "https://ui-avatars.com/api/?name=Chris+Stubberfield&background=e85d2c&color=fff&size=400" },
  { name: "Valentina Kosanović", role: "Senior Hydropower Engineer", desc: "Civil engineer specialising in hydropower, contributing to international water and energy infrastructure projects.", img: "https://ui-avatars.com/api/?name=Valentina+Kosanovi%C4%87&background=e85d2c&color=fff&size=400" },
  { name: "Harshawardhan Patil", role: "Electrical Engineer", desc: "Power systems and renewable energy engineer focusing on feasibility studies and electrical design.", img: "https://ui-avatars.com/api/?name=Harshawardhan+Patil&background=e85d2c&color=fff&size=400" },
  { name: "Heather Phillips", role: "Secretary", desc: "Provides essential administrative and organisational support.", img: "https://ui-avatars.com/api/?name=Heather+Phillips&background=e85d2c&color=fff&size=400" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-28 sm:py-36 px-6 overflow-hidden bg-canvas">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-hero-display text-primary tracking-tight" style={{ animation: 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 250ms both' }}>About Multiconsult</h1>
           <p className="mt-6 max-w-2xl text-body-large text-body-muted leading-relaxed" style={{ animation: 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 400ms both' }}>We are a specialist engineering and architecture consultancy - serving clients across 45+ countries since 1908.</p>
        </div>
      </section>

      <AnimatedSection as="div">
        <section className="bg-soft-stone px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <AnimatedChild index={0}>
              <p className="text-body-large mb-6 leading-relaxed text-ink">We are a specialist engineering and architecture consultancy firm providing services ranging from sustainable design and innovative architecture.</p>
              <p className="text-body-large leading-relaxed text-body-muted">With roots dating back to 1908 and unique expertise in engineering and architecture, the group addresses complex challenges in infrastructure, energy, industry, urban development and mobility.</p>
            </AnimatedChild>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection as="div">
        <section className="bg-primary py-24 sm:py-28 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 sm:gap-8">
              {stats.map((s, i) => (
                <AnimatedChild key={s.label} index={i}>
                  <div className="text-center">
                    <p className="text-[clamp(2rem,4vw,3.5rem)] font-display font-[450] text-white leading-none tracking-tight">{s.value}</p>
                    <p className="text-caption text-white/60 mt-3 font-medium">{s.label}</p>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection as="div">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedChild index={0}>
              <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-heading text-primary">Since 1908</h2>
                <p className="mt-4 text-body-large text-body-muted">Over a century of engineering excellence and responsible growth.</p>
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
                        <p className="mt-0.5 text-caption text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection as="div">
        <section className="bg-soft-stone px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedChild index={0}>
              <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-heading text-primary">Our values</h2>
                <p className="mt-4 text-body-large text-body-muted">Six core beliefs that guide everything we do.</p>
              </div>
            </AnimatedChild>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <AnimatedChild key={v.title} index={i + 1}>
                  <div className="h-full rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-200 hover:border-orange/30 hover:shadow-sm hover:-translate-y-0.5">
                    <h3 className="text-card-heading text-primary group-hover:text-orange transition-colors duration-200">{v.title}</h3>
                    <p className="mt-3 text-body text-body-muted leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection as="div">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedChild index={0}>
              <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-heading text-primary">Our team</h2>
                <p className="mt-4 text-body-large text-body-muted">The people steering Multiconsult Group into its next century.</p>
              </div>
            </AnimatedChild>
            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((p, i) => (
                <AnimatedChild key={p.name} index={i + 1}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full transition-transform duration-200 hover:scale-105 ring-2 ring-hairline/50">
                      <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-feature-heading text-primary">{p.name}</h3>
                    <p className="text-body text-muted">{p.role}</p>
                  </div>
                </AnimatedChild>
              ))}
            </div>
            <AnimatedChild index={leaders.length + 1}>
              <div className="mt-16 text-center"><p className="text-body text-body-muted max-w-2xl mx-auto">Key certifications: ISO, UN Global Compact, BREEAM specialists. Multiconsult is listed on the Oslo Stock Exchange since 2015.</p></div>
            </AnimatedChild>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection as="div">
        <section className="bg-soft-stone px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedChild index={0}>
              <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-heading text-primary">Subsidiaries</h2>
                <p className="mt-4 text-body-large text-body-muted">A family of leading Nordic consultancies.</p>
              </div>
            </AnimatedChild>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subsidiaries.map((sub, i) => (
                <AnimatedChild key={sub.name} index={i + 1}>
                  <div className="h-full rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-200 hover:border-orange/30 hover:shadow-sm hover:-translate-y-0.5">
                    <h3 className="text-card-heading text-primary transition-colors duration-200">{sub.name}</h3>
                    <p className="mt-3 text-body text-body-muted leading-relaxed">{sub.desc}</p>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection as="div">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedChild index={0}>
              <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-heading text-primary">UK team</h2>
                <p className="mt-4 text-body-large text-body-muted">The engineers and specialists driving our UK hydropower and renewable energy projects from Ashford, Kent.</p>
              </div>
            </AnimatedChild>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((p, i) => (
                <AnimatedChild key={p.name} index={i + 1}>
                  <div className="text-center group">
                    <div className="mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full ring-2 ring-hairline/50 transition-transform duration-200 group-hover:scale-105">
                      <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-feature-heading text-primary">{p.name}</h3>
                    <p className="text-body mt-1 font-medium text-orange">{p.role}</p>
                    <p className="text-body mt-2 text-body-muted leading-relaxed">{p.desc}</p>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="bg-primary px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <AnimatedChild index={0}>
            <h2 className="text-section-heading text-white">Join our team</h2>
            <p className="mx-auto mt-6 max-w-lg text-body-large text-white/60">Be part of a 3,900-strong team shaping the future of engineering and architecture.</p>
          </AnimatedChild>
          <AnimatedChild index={1}>
            <div className="mt-10">
              <Link href="/careers" className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-button text-white transition-all duration-200 hover:bg-orange/90 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm">
                View careers<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5"><path d="M6 4l4 4-4 4" /></svg>
              </Link>
            </div>
          </AnimatedChild>
        </div>
      </section>
    </div>
  );
}
