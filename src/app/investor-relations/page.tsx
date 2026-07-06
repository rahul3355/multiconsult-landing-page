import Link from "next/link";

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
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-hero-display mb-6">Investor Relations</h1>
          <p className="text-body-large text-body-muted max-w-2xl">
            Multiconsult intends to have an open and active dialogue with its shareholders, analysts, and the financial community.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-heading mb-12">Financial targets</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {targets.map((target) => (
              <div key={target.label} className="bg-soft-stone rounded-[22px] p-8 flex flex-col gap-3">
                <span className="text-micro uppercase tracking-widest text-muted font-medium">{target.label}</span>
                <span className="text-product-display text-primary">{target.value}</span>
                <p className="text-body text-body-muted">{target.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-section-heading">Latest news</h2>
            <span className="text-caption text-muted">Stock exchange announcements</span>
          </div>
          <div className="divide-y divide-hairline">
            {newsItems.map((item) => (
              <div key={item.title} className="py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:bg-soft-stone/50 transition-colors duration-150">
                <span className="text-micro text-muted w-24 shrink-0">{item.date}</span>
                <span className="text-micro uppercase tracking-widest text-coral font-medium w-20 shrink-0">{item.category}</span>
                <span className="text-body flex-1">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-heading mb-12">Reports & presentations</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {reports.map((report) => (
              <div key={report.title} className="border border-card-border rounded-[22px] p-6 flex flex-col gap-3 transition-all duration-150 hover:-translate-y-0.5 hover:border-hairline">
                <span className="text-micro uppercase tracking-widest text-muted font-medium">{report.type}</span>
                <h3 className="text-feature-heading">{report.title}</h3>
                <span className="text-caption text-muted">{report.date}</span>
                <span className="text-micro text-action-blue mt-auto inline-flex items-center gap-1">
                  Download PDF <span className="text-xs">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 bg-soft-stone py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-heading mb-12">Investor contact</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-canvas rounded-[22px] p-8 border border-card-border">
              <h3 className="text-feature-heading mb-1">Ove B. Haupberg</h3>
              <p className="text-caption text-muted mb-3">Chief Financial Officer</p>
              <a href="mailto:oveb.haupberg@multiconsultgroup.com" className="text-body text-action-blue hover:underline">oveb.haupberg@multiconsultgroup.com</a>
            </div>
            <div className="bg-canvas rounded-[22px] p-8 border border-card-border">
              <h3 className="text-feature-heading mb-1">Pål-Sverre Jørgensen</h3>
              <p className="text-caption text-muted mb-3">Investor Relations Officer</p>
              <a href="mailto:pal.sverre.jorgensen@multiconsultgroup.com" className="text-body text-action-blue hover:underline">pal.sverre.jorgensen@multiconsultgroup.com</a>
            </div>
          </div>
          <div className="mt-12 p-8 border-t border-hairline">
            <p className="text-body text-body-muted">
              Multiconsult ASA is listed on the Oslo Stock Exchange under the ticker <strong>MULTI</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
