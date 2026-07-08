import Link from "next/link";
import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { CountUp } from "@/components/CountUp";

const targets = [
  { label: "Operating margin", value: "10%", desc: "Target across the project portfolio" },
  { label: "Dividend payout", value: ">50%", desc: "Of net profit distributed annually" },
  { label: "Leverage", value: "<2.5x", desc: "Net debt / EBITDA leverage target" },
  { label: "Revenue growth", value: "8–10%", desc: "Compound annual growth over the cycle" },
];

const news = [
  { date: "10 Jun 2026", title: "Multiconsult wins hydropower contract in Western Norway", tag: "Contract" },
  { date: "22 May 2026", title: "Q1 2026: Revenue growth of 9% driven by infrastructure demand", tag: "Financial" },
  { date: "15 Apr 2026", title: "Appointed engineering partner for Sotra Link PPP project", tag: "Project" },
  { date: "28 Mar 2026", title: "Annual General Meeting 2026 — all resolutions approved", tag: "Corporate" },
  { date: "12 Feb 2026", title: "Full-year 2025 results meet guidance across all metrics", tag: "Financial" },
];

const reports = [
  { title: "Q1 2026 Interim Report", date: "May 2026", type: "Interim" },
  { title: "Annual Report 2025", date: "March 2026", type: "Annual" },
  { title: "Q4 2025 Interim Report", date: "February 2026", type: "Interim" },
  { title: "Q3 2025 Interim Report", date: "October 2025", type: "Interim" },
];

const keyFigures = [
  { value: "3,900+", label: "Employees" },
  { value: "MNOK 5,200", label: "Revenue (2025)" },
  { value: "80+", label: "Offices" },
  { value: "45+", label: "Countries" },
];

export default function InvestorRelationsPage() {
  return (
    <>
      <section className="relative bg-primary px-6 pt-32 pb-24 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <AnimatedChild index={0}>
            <p className="text-mono-label text-orange mb-4">Investor Relations</p>
          </AnimatedChild>
          <AnimatedChild index={1}>
            <h1 className="text-hero-display text-white max-w-3xl tracking-tight">
              Listed on Oslo Børs
            </h1>
          </AnimatedChild>
          <AnimatedChild index={2}>
            <p className="mt-6 max-w-2xl text-body-large text-white/50 leading-relaxed">
              Multiconsult intends to have an open and active dialogue with its shareholders,
              analysts, and the financial community.
            </p>
          </AnimatedChild>
          <AnimatedChild index={3}>
            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <p className="text-caption text-white/40">Ticker</p>
                <p className="text-[1.75rem] font-display font-[450] text-white tracking-tight">MULTI</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-caption text-white/40">Exchange</p>
                <p className="text-body text-white/80">Oslo Børs</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-caption text-white/40">Founded</p>
                <p className="text-body text-white/80">1908</p>
              </div>
            </div>
          </AnimatedChild>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden>
          <div className="w-full h-full" style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, rgba(232,93,44,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(0,60,51,0.5) 0%, transparent 50%)",
          }} />
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedChild index={0}>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-section-heading text-primary">Financial targets</h2>
              <p className="mt-4 text-body-large text-body-muted">Our strategic framework for long-term value creation</p>
            </div>
          </AnimatedChild>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {targets.map((t, i) => (
              <AnimatedChild key={t.label} index={i + 1}>
                <div className="relative flex flex-col rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-micro uppercase tracking-widest text-muted font-medium">{t.label}</span>
                  <span className="mt-2 text-product-display text-primary">{t.value}</span>
                  <p className="mt-3 text-body text-body-muted leading-relaxed">{t.desc}</p>
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-orange/20" />
                </div>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-stone py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedChild index={0}>
            <h2 className="text-section-heading text-primary">Key figures</h2>
            <p className="mt-4 text-body-large text-body-muted">At a glance</p>
          </AnimatedChild>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {keyFigures.map((f, i) => (
              <AnimatedChild key={f.label} index={i + 1}>
                <div className="text-center">
                  <p className="text-[clamp(2rem,4vw,3.5rem)] font-display font-[450] text-primary leading-none tracking-tight">
                    <CountUp value={f.value} />
                  </p>
                  <p className="mt-2 text-caption text-muted">{f.label}</p>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedChild index={0}>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-section-heading text-primary">Latest news</h2>
                <p className="mt-2 text-body-large text-body-muted">Stock exchange and press announcements</p>
              </div>
            </div>
          </AnimatedChild>
          <div className="divide-y divide-hairline/60">
            {news.map((item, i) => (
              <AnimatedChild key={item.title} index={i + 1}>
                <div className="py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 transition-colors duration-200 hover:bg-soft-stone/30 px-4 -mx-4 rounded-lg">
                  <span className="text-caption text-muted w-24 shrink-0">{item.date}</span>
                  <span className="rounded-full border border-orange/20 px-3 py-0.5 text-micro text-orange font-medium w-fit">{item.tag}</span>
                  <span className="text-body text-ink flex-1">{item.title}</span>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-stone py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedChild index={0}>
            <h2 className="text-section-heading text-primary">Reports & presentations</h2>
            <p className="mt-4 text-body-large text-body-muted">Financial reports, presentations, and investor materials</p>
          </AnimatedChild>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reports.map((r, i) => (
              <AnimatedChild key={r.title} index={i + 1}>
                <div className="group flex flex-col rounded-2xl border border-hairline/60 bg-white p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-micro uppercase tracking-widest text-orange font-medium">{r.type}</span>
                  <h3 className="mt-3 text-feature-heading text-primary group-hover:text-orange transition-colors duration-200">{r.title}</h3>
                  <span className="mt-2 text-caption text-muted">{r.date}</span>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-caption text-action-blue transition-all duration-200 group-hover:gap-2.5">
                    Download PDF
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3v10M4 9l4 4 4-4" />
                    </svg>
                  </span>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedChild index={0}>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-section-heading text-primary">Investor contact</h2>
              <p className="mt-4 text-body-large text-body-muted">Get in touch with our investor relations team</p>
            </div>
          </AnimatedChild>
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            <AnimatedChild index={1}>
              <div className="rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <h3 className="text-card-heading text-primary">Ove B. Haupberg</h3>
                <p className="text-caption text-muted mt-1">Chief Financial Officer</p>
                <a href="mailto:oveb.haupberg@multiconsultgroup.com" className="mt-4 inline-flex text-body text-action-blue transition-colors duration-200 hover:text-orange">oveb.haupberg@multiconsultgroup.com</a>
              </div>
            </AnimatedChild>
            <AnimatedChild index={2}>
              <div className="rounded-2xl border border-hairline/60 bg-white p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <h3 className="text-card-heading text-primary">Pål-Sverre Jørgensen</h3>
                <p className="text-caption text-muted mt-1">Investor Relations Officer</p>
                <a href="mailto:pal.sverre.jorgensen@multiconsultgroup.com" className="mt-4 inline-flex text-body text-action-blue transition-colors duration-200 hover:text-orange">pal.sverre.jorgensen@multiconsultgroup.com</a>
              </div>
            </AnimatedChild>
          </div>
          <AnimatedChild index={3}>
            <div className="mt-16 text-center">
              <p className="text-body text-body-muted">
                Multiconsult ASA is listed on the Oslo Stock Exchange under the ticker <strong className="text-primary">MULTI</strong>.
              </p>
            </div>
          </AnimatedChild>
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <AnimatedChild index={0}>
            <h2 className="text-section-heading text-white">Explore our projects</h2>
            <p className="mx-auto mt-6 max-w-lg text-body-large text-white/60">
              See how we deliver engineering excellence across 45+ countries.
            </p>
          </AnimatedChild>
          <AnimatedChild index={1}>
            <div className="mt-10">
              <Link href="/projects" className="inline-flex items-center gap-1.5 rounded-full bg-orange px-7 py-3.5 text-button text-white transition-all duration-200 hover:bg-orange/90 border border-orange/20 hover:border-orange/50 focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm">
                View our projects
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4" /></svg>
              </Link>
            </div>
          </AnimatedChild>
        </div>
      </section>
    </>
  );
}
