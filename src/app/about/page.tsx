import Link from "next/link";

const stats = [
  { value: "1908", label: "Founded" },
  { value: "3,900+", label: "Employees" },
  { value: "80+", label: "Offices" },
  { value: "45+", label: "Countries" },
];

const timeline = [
  { year: "1908", title: "Founded as Norsk Vandbygningskontor", desc: "Established to provide hydraulic engineering expertise for Norway's growing hydropower industry." },
  { year: "1974", title: "Multiconsult name introduced", desc: "The company takes on the name Multiconsult as Stiftelsen Multiconsult becomes major shareholder." },
  { year: "1997", title: "Multidisciplinary profile", desc: "Establishes a clearly multidisciplinary profile with separate business areas, expanding across engineering disciplines." },
  { year: "2003", title: "Merger with NVK and international expansion", desc: "Norsk Vandbygningskontor merges with Multiconsult; projects span Europe, Africa, and Asia." },
  { year: "2015", title: "Oslo Stock Exchange listing", desc: "Listed on Oslo Børs on 22 May 2015, marking a new chapter of transparency and growth." },
  { year: "2010–2020", title: "Scandinavian expansion", desc: "Acquired LINK Arkitektur, A-lab, and Iterio; established offices in Sweden, Denmark, Poland, and the UK." },
];

const values = [
  { title: "Sustainability", desc: "We integrate sustainable design into every project, driving the transition to a low-carbon society through BREEAM certification and climate-adaptive engineering." },
  { title: "Competence", desc: "With 3,900+ specialists across engineering, architecture, and consultancy, we bring deep technical knowledge to every challenge." },
  { title: "Digitalisation", desc: "We leverage BIM, digital twins, and data-driven design to deliver smarter, more efficient infrastructure and buildings." },
  { title: "Collaboration", desc: "We partner across disciplines, borders, and sectors - because the best solutions emerge from diverse perspectives." },
  { title: "Diversity", desc: "We foster an inclusive culture where different backgrounds and experiences strengthen our teams and our outcomes." },
  { title: "Think Beyond", desc: "Our tagline captures our ethos: challenge conventions, question assumptions, and imagine what others haven't yet considered." },
];

const leaders = [
  { name: "Karsten Warloe", role: "CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Ove B. Haupberg", role: "CFO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Rikard Appelgren", role: "Chair", img: "https://images.unsplash.com/photo-1507511444994-3ba60e5b64c5?w=400&q=80" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center md:py-48">
        <div className="max-w-4xl">
          <p className="text-micro mb-4 tracking-widest uppercase text-muted">About Us</p>
          <h1 className="text-hero-display mb-4 text-primary">About Multiconsult</h1>
          <p className="text-body-large text-body-muted max-w-2xl mx-auto">
            Home / About
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-soft-stone px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-body-large mb-6 leading-relaxed text-ink">
            We are a specialist engineering and architecture consultancy firm providing services ranging from sustainable design and innovative architecture.
          </p>
          <p className="text-body-large leading-relaxed text-body-muted">
            With roots dating back to 1908 and unique expertise in engineering and architecture, the group addresses complex challenges in infrastructure, energy, industry, urban development and mobility.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-hairline px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-section-display text-primary">{s.value}</p>
              <p className="text-caption mt-2 text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History timeline */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-section-heading mb-4 text-primary">Our History</h2>
          <p className="text-body-large text-body-muted mb-16 max-w-2xl">Over a century of engineering excellence and responsible growth.</p>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-hairline md:left-1/2 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative mb-12 flex flex-col md:flex-row md:items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-canvas md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-micro tracking-widest uppercase text-muted">{item.year}</span>
                  <h3 className="text-card-heading mt-1 text-primary">{item.title}</h3>
                  <p className="text-body mt-2 text-body-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-soft-stone px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-section-heading mb-4 text-primary">Our Values</h2>
          <p className="text-body-large text-body-muted mb-16 max-w-2xl">Six core beliefs that guide everything we do.</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-card-border bg-canvas p-8 transition-all duration-150 hover:-translate-y-0.5">
                <h3 className="text-card-heading mb-3 text-primary">{v.title}</h3>
                <p className="text-body text-body-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-section-heading mb-4 text-primary">Leadership</h2>
          <p className="text-body-large text-body-muted mb-16 max-w-2xl">The team steering Multiconsult Group into its next century.</p>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((p) => (
              <div key={p.name} className="text-center">
                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-all duration-150 hover:scale-105" />
                </div>
                <h3 className="text-feature-heading text-primary">{p.name}</h3>
                <p className="text-body text-muted">{p.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-hairline pt-8">
            <p className="text-body text-body-muted">
              Key certifications: ISO, UN Global Compact, BREEAM specialists. Multiconsult is listed on the Oslo Stock Exchange since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="bg-pale-blue px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-section-heading mb-4 text-primary">Our Group</h2>
          <p className="text-body-large text-body-muted mb-16 max-w-2xl">A family of leading Nordic consultancies.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "LINK Arkitektur", desc: "Scandinavia's leading architecture firm - 500 employees, 15 offices across the Nordics." },
              { name: "A-lab", desc: "Award-winning architecture practice known for innovative, context-driven design." },
              { name: "Iterio", desc: "Urban planning and landscape architecture consultancy based in Sweden." },
              { name: "Sitepartner", desc: "Site development and infrastructure engineering across Norway." },
              { name: "ViaNova", desc: "Transport and mobility engineering with 130 employees across Norway." },
              { name: "Multiconsult Polska", desc: "Multidisciplinary engineering with offices in Warsaw, Krakow, Gdańsk, Wrocław, Gliwice, and Kielce." },
              { name: "Multiconsult UK Ltd", desc: "Hydropower engineering for international projects, based in Ashford, Kent." },
            ].map((sub) => (
              <div key={sub.name} className="rounded-lg border border-card-border bg-canvas p-6 transition-all duration-150 hover:-translate-y-0.5">
                <h3 className="text-feature-heading mb-2 text-primary">{sub.name}</h3>
                <p className="text-body text-body-muted">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ashford Office Team */}
      <section className="bg-canvas px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-section-heading mb-4 text-primary">Ashford Office Team</h2>
          <p className="text-body-large text-body-muted mb-16 max-w-2xl">The engineers and specialists driving our UK hydropower and renewable energy projects from Ashford, Kent.</p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Snorre Treimo", role: "Director, Multiconsult UK Ltd", desc: "Senior Vice President at Multiconsult, overseeing UK operations and international hydropower project delivery.", img: "https://ui-avatars.com/api/?name=Snorre+Treimo&background=003c33&color=fff&size=400" },
              { name: "Patrick Hansson", role: "Principal Civil Engineer", desc: "Heavy civil construction specialist with deep expertise in hydropower, tunnels, and major infrastructure projects across Europe and South America.", img: "https://ui-avatars.com/api/?name=Patrick+Hansson&background=003c33&color=fff&size=400" },
              { name: "Andrew Thick", role: "Chief Mechanical Engineer", desc: "Leads mechanical engineering for hydropower and renewable energy projects, based near Ashford with extensive UK and international experience.", img: "https://ui-avatars.com/api/?name=Andrew+Thick&background=003c33&color=fff&size=400" },
              { name: "Gustavo Alfonzo", role: "Senior Mechanical Engineer", desc: "Specialises in hydraulic gates and mechanical equipment for hydroelectric projects, bringing multidisciplinary engineering expertise to the UK team.", img: "https://ui-avatars.com/api/?name=Gustavo+Alfonzo&background=003c33&color=fff&size=400" },
              { name: "Chris Stubberfield", role: "Principal Civil Engineer", desc: "Chartered Civil Engineer (CEng, MICE) delivering civil engineering design and consultancy for hydropower schemes worldwide.", img: "https://ui-avatars.com/api/?name=Chris+Stubberfield&background=003c33&color=fff&size=400" },
              { name: "Valentina Kosanović", role: "Senior Hydropower Engineer", desc: "Civil engineer specialising in hydropower, recently joined the Ashford team contributing to international water and energy infrastructure projects.", img: "https://ui-avatars.com/api/?name=Valentina+Kosanovi%C4%87&background=003c33&color=fff&size=400" },
              { name: "Harshawardhan Patil", role: "Electrical Engineer", desc: "Power systems and renewable energy engineer focusing on feasibility studies, electrical design, and energy transition projects across the UK.", img: "https://ui-avatars.com/api/?name=Harshawardhan+Patil&background=003c33&color=fff&size=400" },
              { name: "Heather Phillips", role: "Secretary", desc: "Provides essential administrative and organisational support to keep the Ashford office running efficiently.", img: "https://ui-avatars.com/api/?name=Heather+Phillips&background=003c33&color=fff&size=400" },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div className="mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full border-2 border-hairline">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h3 className="text-feature-heading text-primary">{p.name}</h3>
                <p className="text-body mt-1 font-medium text-deep-green">{p.role}</p>
                <p className="text-body mt-2 text-body-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-green px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
              <h2 className="text-section-heading mb-6 text-white">Join Our Team</h2>
          <p className="text-body-large mb-10 text-white/80">Be part of a 3,900-strong team shaping the future of engineering and architecture.</p>
          <Link
            href="/careers"
            className="inline-block rounded-full border border-white bg-white px-8 py-3 text-button text-primary transition-colors hover:bg-white/90"
          >
            View Careers
          </Link>
        </div>
      </section>
    </div>
  );
}
