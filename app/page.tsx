import {
  HeroSection,
  HowToUseSection,
  CategoriesSection,
  PopularSection,
  TelegramCTA,
} from '@/components/sections'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowToUseSection />
      <CategoriesSection />
      <PopularSection />
      <TelegramCTA />
    </main>
  )
}
