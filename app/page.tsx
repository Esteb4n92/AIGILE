import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyAigile } from "@/components/sections/why-aigile";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

/**
 * ============================================
 * AIGILE Landing Page
 * ============================================
 * 
 * Premium AI automation agency landing page.
 * 
 * SECTIONS:
 * 1. Navbar - Fixed navigation with logo and links
 * 2. Hero - Main headline and CTAs
 * 3. Services - Service cards (Landing Pages, Automations, Dashboards)
 * 4. Why AIGILE - Feature highlights
 * 5. About - Founder section with image
 * 6. Projects - Portfolio/demo projects grid
 * 7. CTA - Call-to-action with WhatsApp link
 * 8. Footer - Navigation, social links, copyright
 * 9. WhatsApp Button - Floating contact button
 * 
 * TO EDIT CONTENT:
 * All text, links, and images can be edited in: lib/site-config.ts
 * 
 * TO EDIT STYLES:
 * - Global styles: app/globals.css
 * - Component styles: Individual component files in components/sections/
 * - Colors/Theme: app/globals.css (CSS variables)
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/*background animated*/}
      <WaveBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Why AIGILE Section */}
      <WhyAigile />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
