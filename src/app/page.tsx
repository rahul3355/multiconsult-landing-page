import Link from "next/link";

const services = [
  {
    icon: "🏗️",
    title: "Buildings & Property",
    description:
      "Comprehensive engineering and architectural design for commercial, residential, and public buildings across all project phases.",
    href: "/services",
  },
  {
    icon: "🚄",
    title: "Mobility & Transport",
    description:
      "Integrated transport planning, road and rail design, bridge engineering, and sustainable mobility solutions.",
    href: "/services",
  },
  {
    icon: "⚡",
    title: "Energy & Industry",
    description:
      "Hydropower, renewable energy, offshore engineering, and industrial process solutions from concept through commissioning.",
    href: "/services",
  },
  {
    icon: "💧",
    title: "Water & Environment",
    description:
      "Water supply, wastewater treatment, flood risk management, and comprehensive environmental assessments.",
    href: "/services",
  },
  {
    icon: "🔬",
    title: "Ground Investigations",
    description:
      "Geotechnical engineering, site investigations, and ground condition analysis for projects worldwide.",
    href: "/services",
  },
];

const stats = [
  { number: "3900+", label: "Employees" },
  { number: "80+", label: "Offices" },
  { number: "45+", label: "Countries" },
  { number: "1908", label: "Founded" },
];

const timeline = [
  {
    year: "1908",
    title: "The story begins",
    description: "Norsk Vandbygningskontor established",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=128&q=80",
  },
  {
    year: "1974",
    title: "Multiconsult name introduced",
    description: "The company takes on the name Multiconsult",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=128&q=80",
  },
  {
    year: "1997",
    title: "Multidisciplinary profile",
    description: "Expanding capabilities across engineering disciplines",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=128&q=80",
  },
  {
    year: "2003",
    title: "International expansion",
    description: "Projects span across Europe, Africa, and Asia",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=128&q=80",
  },
  {
    year: "2015",
    title: "Acquires LINK Arkitektur",
    description: "Listed on Oslo Stock Exchange",
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=128&q=80",
  },
  {
    year: "2010–2020",
    title: "Scandinavian expansion",
    description: "Offices in Sweden, Denmark, Poland, UK",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=128&q=80",
  },
];

const brands = [
  {
    name: "Multiconsult",
    tag: "Engineering",
    description:
      "Specialist engineering consultancy delivering multidisciplinary solutions across buildings, transport, energy, water, and ground engineering worldwide.",
    href: "https://www.multiconsultgroup.com",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
  },
  {
    name: "A-lab",
    tag: "Architecture",
    description:
      "Oslo-based architecture studio creating innovative and sustainable architectural designs for urban development.",
    href: "https://www.a-lab.no",
    image:
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80",
  },
  {
    name: "LINK Arkitektur",
    tag: "Architecture",
    description:
      "One of Scandinavia's leading architecture practices, shaping sustainable environments for people and communities.",
    href: "https://www.linkarkitektur.com",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    name: "Sitepartner",
    tag: "Site Development",
    description:
      "Specialist in site development, infrastructure and land development projects across Norway.",
    href: "https://www.sitepartner.no",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    name: "Iterio",
    tag: "Urban Planning",
    description:
      "Urban planning and traffic engineering consultancy creating sustainable mobility and city development solutions.",
    href: "https://www.iterio.se",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
  },
];

const quotes = [
  {
    text: "We are enablers - we turn ambitious goals into reality.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  },
  {
    text: "Since 1908, we have tackled big and complex challenges.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    text: "Our work has always served the greater good.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
  },
  {
    text: "Together, as engineers, architects and everyone!",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBlock />
      <ServicesOverview />
      <StatsSection />
      <HistoryTimeline />
      <BrandsSection />
      <ThinkBeyondSection />
      <InvestorRelations />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/65" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="text-center">
          <h1 className="text-hero-display text-primary">Think Beyond.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-large text-body-muted">
            We are Multiconsult - a specialist engineering and architecture
            consultancy. Since 1908.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center rounded-[32px] bg-white px-6 py-3 text-button text-primary transition-colors duration-150 hover:bg-white/90"
            >
              Explore Our Services
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center border-b border-ink/30 py-1 text-body text-ink transition-colors duration-150 hover:border-ink"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlock() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-section-heading text-primary">
            A multidisciplinary approach
          </h2>
          <p className="mt-6 text-body-large text-body-muted leading-relaxed">
            We build bridges between the past and the future, between heart and
            mind, people and communities, ideas and outcomes. As a specialist
            engineering and architecture consultancy with over 3,900 employees
            across 80+ offices, we bring together expertise from Multiconsult,
            LINK Arkitektur, A-lab, Iterio, and Sitepartner to enhance a truly
            multidisciplinary approach.
          </p>
          <p className="mt-4 text-body-large text-body-muted leading-relaxed">
            From hydropower in the UK to urban development in Scandinavia, our
            work spans 45+ countries - always driven by the conviction that
            great engineering and architecture serve the greater good.
          </p>
          <Link
href="/about"
              className="mt-8 inline-flex items-center border-b border-ink/30 py-1 text-body text-ink transition-colors duration-150 hover:border-ink"
          >
            Learn more about us
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
            alt="Construction site with engineering plans"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-section-heading text-primary">Our Services</h2>
          <p className="mt-4 text-body-large text-body-muted">
            End-to-end expertise across the full project lifecycle
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-sm bg-soft-stone p-8 transition-all duration-150 hover:bg-soft-stone/80 hover:-translate-y-0.5"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-card-heading text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-body text-body-muted">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center border-b border-ink/30 py-0.5 text-button text-ink transition-colors duration-150 hover:border-ink"
              >
                Learn more
              </Link>
            </div>
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
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-product-display text-primary">
                {stat.number}
              </p>
              <p className="mt-2 text-caption text-muted uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
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
        <h2 className="text-section-display text-primary">Past</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-sm bg-white p-6 transition-all duration-150 hover:bg-white/80"
            >
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xs">
                    <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-feature-heading text-primary">
                    {item.year}
                  </p>
                  <p className="mt-0.5 font-medium text-ink">{item.title}</p>
                  <p className="mt-1 text-caption text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24">
          <h2 className="text-section-display text-primary">Future</h2>
          <p className="mt-6 max-w-2xl text-body-large text-body-muted leading-relaxed">
            The next chapter of Multiconsult is being written today. With a
            growing international presence, deeper integration across our
            subsidiaries, and an unwavering commitment to sustainable
            engineering and architecture, we continue to build the future - one
            project at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-section-heading text-primary">Our Companies</h2>
          <p className="mt-4 text-body-large text-body-muted">
            Five brands, one shared purpose
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-sm border border-card-border bg-white transition-all duration-150 hover:border-hairline"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-150 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-[32px] border border-hairline px-3 py-1 text-micro text-muted uppercase tracking-wider">
                  {brand.tag}
                </span>
                <h3 className="mt-3 text-card-heading text-primary">
                  {brand.name}
                </h3>
                <p className="mt-2 text-body text-body-muted">
                  {brand.description}
                </p>
                <span className="mt-4 inline-flex items-center border-b border-ink/30 py-0.5 text-button text-ink transition-colors duration-150 group-hover:border-ink">
                  Visit site
                </span>
              </div>
            </a>
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
        <h2 className="text-section-display text-primary">Think</h2>
        <div className="mt-12 space-y-20">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              {i % 2 === 0 ? (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                    <img
                      src={quote.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-section-heading text-primary leading-tight">
                      &ldquo;{quote.text}&rdquo;
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 lg:order-1">
                    <p className="text-section-heading text-primary leading-tight">
                      &ldquo;{quote.text}&rdquo;
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] order-1 lg:order-2">
                    <img
                      src={quote.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="mt-24">
          <h2 className="text-section-display text-primary">Beyond</h2>
          <p className="mt-6 max-w-2xl text-body-large text-body-muted leading-relaxed">
            Think Beyond is not just our tagline. It is our approach - to see
            further, question deeper, and build solutions that truly make a
            difference for people and the planet.
          </p>
        </div>
      </div>
    </section>
  );
}

function InvestorRelations() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-section-heading text-primary">
              Investor Relations
            </h2>
            <p className="mt-6 text-body-large text-body-muted leading-relaxed">
              We maintain an open and transparent dialogue with our shareholders
              and the investment community. Listed on the Oslo Stock Exchange
              since 2015, we are committed to delivering long-term value through
              sustainable growth and operational excellence.
            </p>
            <Link
              href="/investor-relations"
              className="mt-8 inline-flex items-center rounded-[32px] bg-primary px-6 py-3 text-button text-white transition-colors duration-150 hover:bg-primary/90"
            >
              Visit Investor Relations
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
              alt="Oslo business district"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="text-section-heading text-white">
          Let&apos;s build the future together
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-body-large text-white/70">
          Ready to start your next project? Get in touch with our team.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[32px] bg-white px-6 py-3 text-button text-primary transition-colors duration-150 hover:bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
