import Link from "next/link";

const reasons = [
  {
    title: "Impactful Projects",
    description: "Work on landmark projects that shape communities - from hospitals and libraries to transport and clean energy infrastructure.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&fit=crop",
  },
  {
    title: "Professional Growth",
    description: "Continuous learning, mentorship programs, and clear career paths across 80+ offices worldwide.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&fit=crop",
  },
  {
    title: "Collaborative Culture",
    description: "3,900+ colleagues across disciplines working together to solve complex engineering and architectural challenges.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
  },
  {
    title: "Global Opportunities",
    description: "Offices in 45+ countries across Europe, Asia, Africa, and the Americas - your career knows no borders.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80&fit=crop",
  },
];

const values = [
  { title: "Diversity", description: "We believe diverse perspectives produce better engineering and design. We actively foster an inclusive workplace where everyone belongs." },
  { title: "Sustainability", description: "Every project is an opportunity to advance sustainable development. We integrate environmental responsibility into every phase of our work." },
  { title: "Innovation", description: "From digital twins to carbon-neutral design, we invest in the technologies and methods that define the future of consulting engineering." },
];

export default function CareersPage() {
  return (
    <>
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-hero-display mb-6">Careers at Multiconsult</h1>
          <p className="text-body-large text-body-muted max-w-2xl mb-8">
            Join a team of 3,900+ engineers and architects shaping the future. Consistently ranked among Norway&apos;s most attractive employers.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-heading mb-12">Why join us</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="flex flex-col rounded-[22px] border border-card-border bg-canvas overflow-hidden transition-all duration-150 hover:-translate-y-0.5">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col p-6 gap-3">
                  <h3 className="text-feature-heading">{reason.title}</h3>
                  <p className="text-body text-body-muted">{reason.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 bg-soft-stone py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-heading mb-12">Our values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="bg-canvas rounded-[22px] p-8 border border-card-border transition-all duration-150 hover:-translate-y-0.5">
                <h3 className="text-feature-heading mb-3">{value.title}</h3>
                <p className="text-body text-body-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-heading mb-6">Ready to make an impact?</h2>
          <p className="text-body-large text-body-muted mb-10">
            View open positions or send your application to our recruitment team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:careers@multiconsult.no"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full text-button transition-all duration-150 hover:opacity-90"
            >
              careers@multiconsult.no
            </Link>
            <span className="text-body text-body-muted self-center">or call +47 21 58 50 00</span>
          </div>
        </div>
      </section>
    </>
  );
}
