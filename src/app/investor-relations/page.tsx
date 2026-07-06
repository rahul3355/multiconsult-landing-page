import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { AmbientBackground } from "@/components/AmbientBackground";

const targets = [
  { label: "Profitability", value: "10% margin", description: "Operating margin target across the project portfolio." },
  { label: "Dividend policy", value: ">50%", description: "Of net profit distributed to shareholders annually." },
  { label: "Capital structure", value: "<2.5x", description: "Net interest-bearing debt / EBITDA leverage target." },
  { label: "Revenue growth", value: "8–10%", description: "Compound annual growth rate over the cycle." },
];

const newsItems = [
  { date: "2026-06-10", title: "Multiconsult wins contract for new hydropower project in Western Norway", category: "Contract" },
  { date: "2026-05-22", title: "Q1 2026 results: Revenue growth of 9% driven by infrastructure demand", category: "Financial" },
  { date: "2026-04-15", title: "Multiconsult appointed as engineering partner for Sotra Link PPP project", category: "Project" },
  { date: "2026-03-28", title: "Annual General Meeting 2026 - all resolutions approved", category: "Corporate" },
];

const reports = [
  { title: "Q1 2026 Interim Report", date: "May 2026", type: "Interim" },
  { title: "Q4 2025 Interim Report", date: "February 2026", type: "Interim" },
  { title: "Annual Report 2025", date: "March 2026", type: "Annual" },
];

export default function InvestorRelationsPage() {
  return (
    <>
      <AnimatedSection as="div">
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          <AmbientBackground variant="navy" />
          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-hero-display mb-6" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}>Investor Relations</h1>
            <p className="text-body-large text-body-muted max-w-2xl" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 200ms both' }}>Multiconsult intends to have an open and active dialogue with its shareholders, analysts, and the financial community.</p>
          </div>
        </section>
      </AnimatedSection>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedChild index={0}><h2 className="text-section-heading mb-12">Financial targets</h2></AnimatedChild>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {targets.map((target, i) => (
              <AnimatedChild key={target.label} index={i + 1}>
                <div className="bg-soft-stone rounded-[22px] p-8 flex flex-col gap-3 transition-all duration-75 hover:-translate-y-0.5">
                  <span className="text-micro uppercase tracking-widest text-muted font-medium">{target.label}</span>
                  <span className="text-product-display text-primary">{target.value}</span>
                  <p className="text-body text-body-muted">{target.description}</p>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedChild index={0}><div className="flex items-center justify-between mb-12"><h2 className="text-section-heading">Latest news</h2><span className="text-caption text-muted">Stock exchange announcements</span></div></AnimatedChild>
          <div className="divide-y divide-hairline">
            {newsItems.map((item, i) => (
              <AnimatedChild key={item.title} index={i + 1}>
                <div className="py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 transition-colors duration-75 hover:bg-soft-stone/50 px-2 -mx-2 rounded-lg">
                  <span className="text-micro text-muted w-24 shrink-0">{item.date}</span>
                  <span className="text-micro uppercase tracking-widest text-coral font-medium w-20 shrink-0">{item.category}</span>
                  <span className="text-body flex-1">{item.title}</span>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedChild index={0}><h2 className="text-section-heading mb-12">Reports & presentations</h2></AnimatedChild>
          <div className="grid gap-4 sm:grid-cols-3">
            {reports.map((report, i) => (
              <AnimatedChild key={report.title} index={i + 1}>
                <div className="border border-card-border rounded-[22px] p-6 flex flex-col gap-3 transition-all duration-75 hover:-translate-y-0.5 hover:border-hairline">
                  <span className="text-micro uppercase tracking-widest text-muted font-medium">{report.type}</span>
                  <h3 className="text-feature-heading">{report.title}</h3>
                  <span className="text-caption text-muted">{report.date}</span>
                  <span className="text-micro text-action-blue mt-auto inline-flex items-center gap-1">Download PDF <span className="text-xs">→</span></span>
                </div>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 bg-soft-stone py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedChild index={0}><h2 className="text-section-heading mb-12">Investor contact</h2></AnimatedChild>
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedChild index={1}>
              <div className="bg-canvas rounded-[22px] p-8 border border-card-border transition-all duration-75 hover:-translate-y-0.5">
                <h3 className="text-feature-heading mb-1">Ove B. Haupberg</h3>
                <p className="text-caption text-muted mb-3">Chief Financial Officer</p>
                <a href="mailto:oveb.haupberg@multiconsultgroup.com" className="text-body text-action-blue transition-colors duration-75 hover:underline">oveb.haupberg@multiconsultgroup.com</a>
              </div>
            </AnimatedChild>
            <AnimatedChild index={2}>
              <div className="bg-canvas rounded-[22px] p-8 border border-card-border transition-all duration-75 hover:-translate-y-0.5">
                <h3 className="text-feature-heading mb-1">Pål-Sverre Jørgensen</h3>
                <p className="text-caption text-muted mb-3">Investor Relations Officer</p>
                <a href="mailto:pal.sverre.jorgensen@multiconsultgroup.com" className="text-body text-action-blue transition-colors duration-75 hover:underline">pal.sverre.jorgensen@multiconsultgroup.com</a>
              </div>
            </AnimatedChild>
          </div>
          <AnimatedChild index={3}>
            <div className="mt-12 p-8 border-t border-hairline">
              <p className="text-body text-body-muted">Multiconsult ASA is listed on the Oslo Stock Exchange under the ticker <strong>MULTI</strong>.</p>
            </div>
          </AnimatedChild>
        </div>
      </section>
    </>
  );
}
