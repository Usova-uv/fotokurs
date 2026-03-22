import { HeroSection } from '@components/hero-section'
import { AboutSection } from '@components/about-section'
import { BenefitsSection } from '@components/benefits-section'
import { TargetSection } from '@components/target-section'
import { ProgramSection } from '@components/program-section'
import { PortfolioSection } from '@components/portfolio-section'
import TariffsSection from '@components/tariffs-section'
import { CalculatorSection } from '@components/calculator-section'
import { FAQSection } from '@components/faq-section'
import { Footer } from '@components/footer'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TargetSection />
      <ProgramSection />
      <PortfolioSection />
      <TariffsSection />
      <CalculatorSection />
      <FAQSection />
      <Footer />
    </main>
  )
}