import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { AmbientBackground } from "@/components/AmbientBackground";

const projects = [
  { title: "Nye Drammen sykehus", category: "Healthcare", description: "Modern healthcare facility designed for the future of patient care in Drammen.", location: "Drammen, Norway", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&fit=crop" },
  { title: "E10 Hålogalandsvegen", category: "Transport", description: "Major highway project improving connectivity across Northern Norway.", location: "Nordland, Norway", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&fit=crop" },
  { title: "Deichman Bjørvika", category: "Culture", description: "Oslo's main public library - an architectural landmark on the waterfront.", location: "Oslo, Norway", image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80&fit=crop" },
  { title: "Northern Lights CCS", category: "Energy", description: "World's first open-source carbon capture and storage terminal.", location: "Øygarden, Norway", image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80&fit=crop" },
  { title: "Follobanen", category: "Rail", description: "Norway's largest rail infrastructure project - new double-track line.", location: "Oslo–Ski, Norway", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&fit=crop" },
  { title: "Viking Ship Museum", category: "Culture", description: "World-class museum project preserving and showcasing Viking heritage.", location: "Oslo, Norway", image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80&fit=crop" },
  { title: "Jølstra kraftverk", category: "Hydropower", description: "New hydropower plant harnessing renewable energy from Jølstra river.", location: "Sunnfjord, Norway", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop" },
  { title: "New Water Supply Oslo", category: "Infrastructure", description: "Major water supply infrastructure ensuring clean water for the capital region.", location: "Oslo, Norway", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80&fit=crop" },
];

export default function ProjectsPage() {
  return (
    <>
      <AnimatedSection as="div">
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          <AmbientBackground variant="navy" />
          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-hero-display mb-6" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}>Our Projects</h1>
            <p className="text-body-large text-body-muted max-w-2xl" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 200ms both' }}>Engineering and architectural excellence across 45+ countries - from cultural landmarks to critical infrastructure.</p>
          </div>
        </section>
      </AnimatedSection>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <AnimatedChild key={project.title} index={i}>
                <article className="group flex flex-col rounded-[22px] border border-card-border bg-canvas overflow-hidden transition-all duration-75 hover:border-hairline">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    <span className="text-micro uppercase tracking-widest text-muted font-medium">{project.category}</span>
                    <h3 className="text-card-heading">{project.title}</h3>
                    <p className="text-body text-body-muted flex-1">{project.description}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-hairline">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span className="text-micro text-muted">{project.location}</span>
                    </div>
                  </div>
                </article>
              </AnimatedChild>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
