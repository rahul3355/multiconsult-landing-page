import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";
import { AmbientBackground } from "@/components/AmbientBackground";

const offices = [
  { city: "Oslo", address: "Nedre Skøyen vei 2, 0276 Oslo", country: "Norway" },
  { city: "Ashford", address: "Connect 38, 1 Dover Place, Ashford, TN23 1FB", country: "United Kingdom" },
  { city: "Warsaw", country: "Poland" }, { city: "Krakow", country: "Poland" },
  { city: "Gdańsk", country: "Poland" }, { city: "Wrocław", country: "Poland" },
  { city: "Stockholm", country: "Sweden" }, { city: "Gothenburg", country: "Sweden" },
  { city: "Malmö", country: "Sweden" }, { city: "Copenhagen (via LINK Arkitektur)", country: "Denmark" },
];

export default function ContactPage() {
  return (
    <>
      <AnimatedSection as="div">
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          <AmbientBackground variant="navy" />
          <div className="relative max-w-7xl mx-auto">
            <h1 className="text-hero-display mb-6" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}>Contact Us</h1>
            <p className="text-body-large text-body-muted max-w-2xl" style={{ animation: 'fade-in-up 100ms cubic-bezier(0.16, 1, 0.3, 1) 200ms both' }}>Get in touch with our team. We&apos;d love to hear from you.</p>
          </div>
        </section>
      </AnimatedSection>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-12">
            <AnimatedChild index={0}>
              <div>
                <h2 className="text-feature-heading mb-2">Headquarters</h2>
                <address className="not-italic text-body text-body-muted">
                  Nedre Skøyen vei 2<br />0276 Oslo, Norway<br />
                  <a href="mailto:oslo@multiconsult.no" className="text-action-blue transition-colors duration-75 hover:underline">oslo@multiconsult.no</a><br />
                  <a href="tel:+4721585000" className="text-action-blue transition-colors duration-75 hover:underline">+47 21 58 50 00</a>
                </address>
              </div>
            </AnimatedChild>

            <AnimatedChild index={1}>
              <div>
                <h2 className="text-feature-heading mb-2">United Kingdom</h2>
                <address className="not-italic text-body text-body-muted">Connect 38<br />1 Dover Place<br />Ashford, TN23 1FB<br />United Kingdom</address>
              </div>
            </AnimatedChild>

            <AnimatedChild index={2}>
              <div>
                <h2 className="text-feature-heading mb-6">Our offices</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {offices.map((office) => (
                    <div key={office.city} className="border-l-2 border-hairline pl-4 transition-all duration-75 hover:border-l-deep-green hover:pl-5">
                      <h3 className="text-feature-heading mb-1">{office.city}</h3>
                      {office.address && <p className="text-caption text-body-muted">{office.address}</p>}
                      <p className="text-micro text-muted">{office.country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedChild>
          </div>

          <AnimatedChild index={3}>
            <div className="bg-canvas rounded-[22px] border border-card-border p-8">
              <h2 className="text-section-heading mb-8">Send us a message</h2>
              <form className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-micro uppercase tracking-widest text-muted font-medium">Name</label>
                    <input id="name" type="text" className="w-full px-4 py-3 border border-border-light rounded-lg text-body text-ink focus:outline-none focus:ring-2 focus:ring-form-focus focus:border-transparent transition-all duration-75" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-micro uppercase tracking-widest text-muted font-medium">Email</label>
                    <input id="email" type="email" className="w-full px-4 py-3 border border-border-light rounded-lg text-body text-ink focus:outline-none focus:ring-2 focus:ring-form-focus focus:border-transparent transition-all duration-75" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-micro uppercase tracking-widest text-muted font-medium">Subject</label>
                  <input id="subject" type="text" className="w-full px-4 py-3 border border-border-light rounded-lg text-body text-ink focus:outline-none focus:ring-2 focus:ring-form-focus focus:border-transparent transition-all duration-75" placeholder="How can we help?" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-micro uppercase tracking-widest text-muted font-medium">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 border border-border-light rounded-lg text-body text-ink focus:outline-none focus:ring-2 focus:ring-form-focus focus:border-transparent transition-all duration-75 resize-y" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="self-start inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full text-button transition-all duration-75 hover:opacity-90">Submit</button>
              </form>
            </div>
          </AnimatedChild>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedChild index={0}>
            <div className="rounded-[22px] overflow-hidden border border-card-border">
              <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1400&q=80&fit=crop" alt="Multiconsult headquarters, Oslo" className="w-full h-64 md:h-80 object-cover transition-transform duration-200 hover:scale-105" loading="lazy" />
            </div>
          </AnimatedChild>
        </div>
      </section>
    </>
  );
}
