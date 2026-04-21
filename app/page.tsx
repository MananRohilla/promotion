import { Hero } from '@/components/home/Hero'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { ServicesStrip } from '@/components/home/ServicesStrip'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { StatsBar } from '@/components/home/StatsBar'
import { TrustedBy } from '@/components/home/TrustedBy'
import { ProcessSection } from '@/components/home/ProcessSection'
import { BlogPreview } from '@/components/home/BlogPreview'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ServicesStrip />
      <AboutSnippet />
      <StatsBar />
      <TrustedBy />
      <ProcessSection />
      <BlogPreview />
      <CTASection />
    </>
  )
}
