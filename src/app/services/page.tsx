import Link from "next/link";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { CountUp } from "@/components/CountUp";

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  accent: string;
  stats: { value: string; label: string }[];
  tags: string[];
}

const services: Service[] = [
  {
    id: "buildings-property",
    title: "Buildings & Property",
    tagline: "Sustainable design for the built environment",
    description:
      "Sustainable design and engineering for the built environment. We deliver healthcare, residential, education, and commercial projects that set new standards in performance and wellbeing.",
    longDescription:
      "From concept to completion, our multidisciplinary teams bring together architects, structural engineers, MEP specialists, and sustainability consultants to create buildings that perform as beautifully as they look. With over 300 healthcare projects and 15,000+ residential units designed, our track record speaks for itself.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80",
    accent: "#e85d2c",
    stats: [
      { value: "300+", label: "Healthcare projects" },
      { value: "15,000+", label: "Residential units" },
      { value: "BREEAM", label: "Specialist network" },
    ],
    tags: ["Healthcare", "Residential", "Education", "Commercial", "Sustainable Design"],
  },
  {
    id: "mobility-transport",
    title: "Mobility & Transport",
    tagline: "Integrated solutions that connect people and goods",
    description:
      "Integrated transport solutions that connect people and goods safely and efficiently. From highways to light rail, we plan, design, and deliver complex mobility infrastructure.",
    longDescription:
      "Our transport engineers and urban planners work across every mode of movement, creating infrastructure that is safe, efficient, and future-ready. From Norway's most complex bridge structures to integrated urban mobility systems, we bring over 50 years of transport engineering expertise to every project.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80",
    accent: "#1863dc",
    stats: [
      { value: "500+", label: "Bridges designed" },
      { value: "200 km", label: "Tunnel projects" },
      { value: "Major rail", label: "Across Scandinavia" },
    ],
    tags: ["Roads", "Bridges", "Tunnels", "Rail", "Urban Mobility"],
  },
  {
    id: "energy-industry",
    title: "Energy & Industry",
    tagline: "Driving the energy transition through engineering",
    description:
      "Over 100 years of hydropower engineering leadership. Today we drive the energy transition through renewable energy, carbon capture, electrification, and responsible oil & gas decommissioning.",
    longDescription:
      "With roots in Norway's hydropower industry stretching back to 1908, our energy team has engineered some of the world's most ambitious renewable projects. Today we are at the forefront of the energy transition, advising on carbon capture, offshore wind, industrial electrification, and the responsible decommissioning of oil and gas assets.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    accent: "#003c33",
    stats: [
      { value: "100+", label: "Years of hydropower" },
      { value: "500+ MW", label: "Renewable capacity" },
      { value: "20+", label: "CCS feasibility studies" },
    ],
    tags: ["Hydropower", "Renewable Energy", "CCS", "Electrification", "Energy Transition"],
  },
  {
    id: "water-environment",
    title: "Water & Environment",
    tagline: "Protecting water resources in a changing climate",
    description:
      "Protecting water resources and adapting to a changing climate. We design resilient water supply, wastewater treatment, flood protection, and climate adaptation systems.",
    longDescription:
      "Water is Norway's most precious resource, and our environmental engineers are its stewards. We design water supply systems for growing cities, wastewater treatment plants that meet the strictest environmental standards, and flood protection schemes that safeguard communities against a changing climate. Every project is underpinned by rigorous environmental assessment.",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&q=80",
    accent: "#4c6ee6",
    stats: [
      { value: "1,000+", label: "Water treatment plants" },
      { value: "50+", label: "Municipalities protected" },
      { value: "Climate", label: "Adaptation across Norway" },
    ],
    tags: ["Water Supply", "Wastewater", "Climate Adaptation", "Flood Protection"],
  },
  {
    id: "ground-investigations",
    title: "Ground Investigations",
    tagline: "Subsurface intelligence for safe construction",
    description:
      "Subsurface intelligence for safe, cost-effective construction. Our geotechnical engineers, geologists, and lab specialists deliver ground models that de-risk every phase of development.",
    longDescription:
      "Every great structure begins with an understanding of what lies beneath. Our ground investigation team combines advanced drilling techniques, geophysical surveying, and on-site laboratory analysis to build comprehensive ground models that de-risk construction and optimise foundation design. From the mountains of Norway to the seabed of the North Sea, we deliver subsurface certainty.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    accent: "#75758a",
    stats: [
      { value: "10,000+", label: "Boreholes annually" },
      { value: "Seabed", label: "Advanced mapping" },
      { value: "On-site", label: "Geotechnical labs" },
    ],
    tags: ["Geotechnical", "Seabed Mapping", "Lab Testing", "Site Investigation"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse ourselves in your project context, conducting site assessments, feasibility studies, and stakeholder engagement to define the challenge.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our multidisciplinary teams develop innovative solutions through iterative design, digital modelling, and rigorous peer review.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We manage the construction phase with precision, ensuring quality, safety, and budget discipline from first pour to final handover.",
  },
  {
    number: "04",
    title: "Sustain",
    description:
      "Post-completion, we monitor performance, optimise operations, and apply lessons learned to continuously improve our approach.",
  },
];

const aggregateStats = [
  { value: "3900+", label: "Specialists" },
  { value: "80+", label: "Offices" },
  { value: "45+", label: "Countries" },
  { value: "117", label: "Years of innovation" },
];

// ─── Icons ─────────────────────────────────────────────────────

function BuildingsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="12" width="8" height="16" />
      <rect x="12" y="4" width="8" height="24" />
      <rect x="20" y="8" width="8" height="20" />
      <line x1="8" y1="20" x2="8" y2="24" />
      <line x1="16" y1="10" x2="16" y2="14" />
      <line x1="16" y1="18" x2="16" y2="22" />
    </svg>
  );
}

function MobilityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24h24" />
      <path d="M8 20l-4 4 4 4" />
      <path d="M24 20l4 4-4 4" />
      <rect x="8" y="4" width="16" height="12" rx="2" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
    </svg>
  );
}

function EnergyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2L8 18h8l-2 12 10-16h-8z" />
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 28c-5.5 0-10-4.5-10-10 0-5.5 10-16 10-16s10 10.5 10 16c0 5.5-4.5 10-10 10z" />
      <path d="M12 18c0-2.2 4-6 4-6s4 3.8 4 6c0 2.2-1.8 4-4 4s-4-1.8-4-4z" />
    </svg>
  );
}

function GroundIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="24" height="28" rx="2" />
      <line x1="4" y1="10" x2="28" y2="10" />
      <line x1="4" y1="16" x2="28" y2="16" />
      <line x1="4" y1="22" x2="28" y2="22" />
      <path d="M10 10v-4" />
      <path d="M16 10v-4" />
      <path d="M22 10v-4" />
    </svg>
  );
}

const serviceIcons = [BuildingsIcon, MobilityIcon, EnergyIcon, WaterIcon, GroundIcon];

// ─── Hero ──────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative bg-primary px-6 pt-32 pb-24 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <AnimatedChild index={0}>
          <p className="text-mono-label text-orange mb-4">Our services</p>
        </AnimatedChild>
        <AnimatedChild index={1}>
          <h1 className="text-hero-display text-white max-w-4xl tracking-tight">
            Precision across
            <br />
            <span className="text-white/70">every discipline</span>
          </h1>
        </AnimatedChild>
        <AnimatedChild index={2}>
          <p className="mt-6 max-w-2xl text-body-large text-white/50 leading-relaxed">
            Engineering, architecture, and consultancy across five core disciplines
            &mdash; from the mountains of Norway to projects in 45+ countries worldwide.
          </p>
        </AnimatedChild>
        <AnimatedChild index={3}>
          <nav className="mt-12 flex flex-wrap gap-2.5" aria-label="Service navigation">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/15 px-5 py-2.5 text-caption text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </AnimatedChild>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </section>
  );
}

// ─── Service Cards Grid ────────────────────────────────────────

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const Icon = serviceIcons[index];

  return (
    <AnimatedChild index={index}>
      <a
        href={`#${service.id}`}
        className="group relative flex flex-col rounded-2xl border border-hairline/60 bg-white p-8 sm:p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
          style={{ backgroundColor: service.accent }}
        />
        <span className="text-[2.5rem] font-display font-[450] leading-none tracking-tight text-hairline/80 transition-colors duration-300 group-hover:text-primary/20">
          {num}
        </span>
        <div
          className="mt-4 transition-colors duration-300"
          style={{ color: service.accent }}
        >
          <Icon />
        </div>
        <h3 className="mt-4 text-card-heading text-primary">{service.title}</h3>
        <p className="mt-3 flex-1 text-body text-body-muted leading-relaxed">
          {service.tagline}
        </p>
        <div className="mt-6 pt-6 border-t border-hairline/40">
          <span className="text-[1.75rem] font-display font-[450] tracking-tight text-primary">
            {service.stats[0].value}
          </span>
          <span className="ml-2 text-caption text-muted">{service.stats[0].label}</span>
        </div>
        <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 w-8 h-8 rounded-full border border-hairline/60 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white">
          <ArrowRight />
        </div>
      </a>
    </AnimatedChild>
  );
}

function ServiceGrid() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedChild index={0}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-section-heading text-primary">
              Five disciplines,
              <br />
              one multidisciplinary approach
            </h2>
            <p className="mt-4 text-body-large text-body-muted">
              End-to-end capability across the full project lifecycle
            </p>
          </div>
        </AnimatedChild>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto lg:max-w-none">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Band ────────────────────────────────────────────────

function StatsBand() {
  return (
    <section className="bg-primary py-20 sm:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 sm:gap-8">
          {aggregateStats.map((stat, i) => (
            <AnimatedChild key={stat.label} index={i}>
              <div className="text-center">
                <p className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-[450] text-white leading-none tracking-tight">
                  <CountUp value={stat.value} />
                </p>
                <p className="text-caption text-white/60 mt-3 font-medium">
                  {stat.label}
                </p>
              </div>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Detail Sections ───────────────────────────────────

function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <AnimatedSection key={service.id} as="div">
      <section
        id={service.id}
        className={`relative px-6 py-24 sm:py-32 overflow-hidden scroll-mt-24 ${isReversed ? "bg-soft-stone" : "bg-canvas"}`}
      >
        <div
          className={`relative mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20 ${isReversed ? "lg:flex-row-reverse" : ""}`}
        >
          <AnimatedChild index={0}>
            <div className="w-full lg:w-[55%]">
              <div className="overflow-hidden rounded-2xl relative">
                <div
                  className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none z-10"
                  style={{ backgroundColor: service.accent }}
                />
                <img
                  src={service.image}
                  alt={service.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </AnimatedChild>
          <div className="w-full lg:w-[45%]">
            <AnimatedChild index={1}>
              <span
                className="inline-flex items-center gap-2 text-mono-label"
                style={{ color: service.accent }}
              >
                <span
                  className="w-6 h-px"
                  style={{ backgroundColor: service.accent }}
                />
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-section-heading text-primary">
                {service.title}
              </h2>
              <p className="mt-3 text-body-large text-body-muted font-medium">
                {service.tagline}
              </p>
              <p className="mt-4 text-body text-body-muted leading-relaxed">
                {service.longDescription}
              </p>
            </AnimatedChild>
            <AnimatedChild index={2}>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {service.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[1.5rem] font-display font-[450] tracking-tight text-primary">
                      {stat.value}
                    </p>
                    <p className="text-caption text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedChild>
            <AnimatedChild index={3}>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-hairline/60 px-3.5 py-1.5 text-caption text-muted transition-colors duration-200 hover:border-orange/30 hover:text-orange"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedChild>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ─── Process Section ───────────────────────────────────────────

function ProcessSection() {
  return (
    <section className="px-6 py-24 sm:py-32 bg-primary">
      <div className="mx-auto max-w-7xl">
        <AnimatedChild index={0}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-mono-label text-orange mb-4">Our methodology</p>
            <h2 className="text-section-heading text-white">How we deliver</h2>
            <p className="mt-4 text-body-large text-white/50">
              A proven process refined over a century of engineering excellence
            </p>
          </div>
        </AnimatedChild>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <AnimatedChild key={step.number} index={i + 1}>
              <div className="relative group">
                <div className="text-[3.5rem] font-display font-[450] text-white/10 leading-none tracking-tight transition-colors duration-300 group-hover:text-white/20">
                  {step.number}
                </div>
                <div className="mt-2 w-8 h-px bg-orange/50" />
                <h3 className="mt-4 text-feature-heading text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-body text-white/40 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="px-6 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-3xl">
        <AnimatedChild index={0}>
          <h2 className="text-section-heading text-primary">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-body-large text-body-muted">
            Our team of 3,900+ specialists is ready to help you engineer the
            future.
          </p>
        </AnimatedChild>
        <AnimatedChild index={1}>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-orange px-8 py-4 text-button text-white transition-all duration-200 hover:bg-orange/90 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm"
            >
              Contact us
              <ArrowRight />
            </Link>
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection as="div">
        <ServiceGrid />
      </AnimatedSection>
      <AnimatedSection as="div">
        <StatsBand />
      </AnimatedSection>
      {services.map((s, i) => (
        <ServiceDetail key={s.id} service={s} index={i} />
      ))}
      <AnimatedSection as="div">
        <ProcessSection />
      </AnimatedSection>
      <AnimatedSection as="div">
        <CTASection />
      </AnimatedSection>
    </>
  );
}
