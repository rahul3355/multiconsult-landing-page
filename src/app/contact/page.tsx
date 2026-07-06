import { AnimatedSection, AnimatedChild } from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <>
      <section className="relative py-28 sm:py-36 px-6 overflow-hidden bg-canvas">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-hero-display text-primary tracking-tight" style={{ animation: 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 250ms both' }}>Contact us</h1>
          <p className="mt-6 max-w-2xl text-body-large text-body-muted leading-relaxed" style={{ animation: 'fade-in-up 600ms cubic-bezier(0.16, 1, 0.3, 1) 400ms both' }}>Get in touch with our team. We&apos;d love to hear from you.</p>
        </div>
      </section>

      <AnimatedSection as="div">
        <section className="pb-24 sm:pb-32 px-6">
          <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-12">
              <AnimatedChild index={0}>
                <div>
                  <h2 className="text-section-heading text-primary">Oslo</h2>
                  <address className="not-italic mt-4 text-body text-body-muted leading-relaxed">
                    Nedre Skøyen vei 2<br />0276 Oslo, Norway<br />
                    <a href="mailto:oslo@multiconsult.no" className="text-orange transition-colors duration-200 hover:text-orange/80">oslo@multiconsult.no</a><br />
                    <a href="tel:+4721585000" className="text-orange transition-colors duration-200 hover:text-orange/80">+47 21 58 50 00</a>
                  </address>
                </div>
              </AnimatedChild>              <AnimatedChild index={1}>
                <div>
                  <h2 className="text-section-heading text-primary">Ashford</h2>
                  <address className="not-italic mt-4 text-body text-body-muted leading-relaxed">Connect 38, 1 Dover Place<br />Ashford, TN23 1FB<br />United Kingdom</address>
                </div>
              </AnimatedChild>
            </div>

            <AnimatedChild index={3}>
              <div className="rounded-2xl border border-hairline/60 bg-white p-8 sm:p-10">
                <h2 className="text-section-heading text-primary">Send us a message</h2>
                <form className="mt-8 flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-micro uppercase tracking-widest text-muted font-medium">Name</label>
                      <input id="name" type="text" className="w-full px-4 py-3 border border-hairline/80 rounded-xl text-body text-ink focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/50 transition-all duration-200" placeholder="Your name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-micro uppercase tracking-widest text-muted font-medium">Email</label>
                      <input id="email" type="email" className="w-full px-4 py-3 border border-hairline/80 rounded-xl text-body text-ink focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/50 transition-all duration-200" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-micro uppercase tracking-widest text-muted font-medium">Subject</label>
                    <input id="subject" type="text" className="w-full px-4 py-3 border border-hairline/80 rounded-xl text-body text-ink focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/50 transition-all duration-200" placeholder="How can we help?" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-micro uppercase tracking-widest text-muted font-medium">Message</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-3 border border-hairline/80 rounded-xl text-body text-ink focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/50 transition-all duration-200 resize-y" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="self-start inline-flex items-center gap-1.5 rounded-full bg-orange px-7 py-3.5 text-button text-white transition-all duration-200 hover:bg-orange/90 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-orange/50 outline-none shadow-sm">
                    Send message<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4l4 4-4 4" /></svg>
                  </button>
                </form>
              </div>
            </AnimatedChild>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
