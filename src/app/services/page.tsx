import Link from "next/link";
import { Globe } from "@/components/Globe";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";

const services = [
  {
    title: "Buildings & Property",
    description: "Sustainable design and engineering for healthcare, residential, education, and commercial projects.",
  },
  {
    title: "Mobility & Transport",
    description: "Integrated transport solutions across roads, bridges, tunnels, rail, and urban mobility systems.",
  },
  {
    title: "Energy & Industry",
    description: "Hydropower, renewable energy, carbon capture, and industrial electrification engineering.",
  },
  {
    title: "Water & Environment",
    description: "Resilient water supply, wastewater treatment, flood protection, and climate adaptation.",
  },
  {
    title: "Ground Investigations",
    description: "Geotechnical engineering, seabed mapping, and subsurface analysis for safe construction.",
  },
];

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <AnimatedChild index={0}>
            <p className="text-mono-label text-orange mb-4">Our services</p>
          </AnimatedChild>
          <AnimatedChild index={1}>
            <h1 className="text-section-display text-primary max-w-xl tracking-tight">
              Engineering across five continents
            </h1>
          </AnimatedChild>
          <AnimatedChild index={2}>
            <p className="mt-6 max-w-lg text-body-large text-body-muted leading-relaxed">
              From Norway&apos;s fjords to projects in 45+ countries, our 3,900+ specialists
              deliver engineering, architecture, and consultancy across five core disciplines.
            </p>
          </AnimatedChild>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <AnimatedChild index={3}>
            <div className="w-full max-w-[500px]">
              <Globe />
            </div>
          </AnimatedChild>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-300 hover:border-orange/20 hover:shadow-sm hover:-translate-y-0.5">
      <h3 className="text-card-heading text-primary group-hover:text-orange transition-colors duration-200">{title}</h3>
      <p className="mt-3 text-body text-body-muted leading-relaxed">{description}</p>
    </div>
  );
}

function ServiceGrid() {
  return (
    <section className="pb-24 sm:pb-32 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedChild index={0}>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-section-heading text-primary">What we do</h2>
            <p className="mt-4 text-body-large text-body-muted">End-to-end capability across the full project lifecycle</p>
          </div>
        </AnimatedChild>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <AnimatedChild key={s.title} index={i + 1}>
              <ServiceCard title={s.title} description={s.description} />
            </AnimatedChild>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto lg:max-w-none">
          {services.slice(3).map((s, i) => (
            <AnimatedChild key={s.title} index={i + 4}>
              <ServiceCard title={s.title} description={s.description} />
            </AnimatedChild>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-24 text-center sm:py-32 bg-soft-stone">
      <div className="mx-auto max-w-3xl">
        <AnimatedChild index={0}>
          <h2 className="text-section-heading text-primary">Ready to get started?</h2>
          <p className="mx-auto mt-6 max-w-lg text-body-large text-body-muted">
            Contact our team to discuss how we can support your next project.
          </p>
        </AnimatedChild>
        <AnimatedChild index={1}>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-orange px-8 py-4 text-button text-white transition-all duration-200 hover:bg-orange/90 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm"
            >
              Contact us<ArrowRight />
            </Link>
          </div>
        </AnimatedChild>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection as="div">
        <ServiceGrid />
      </AnimatedSection>
      <AnimatedSection as="div">
        <CTASection />
      </AnimatedSection>
    </>
  );
}
