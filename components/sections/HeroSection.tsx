import { Button } from '@/components/ui'
import { Play } from 'lucide-react'

interface HeroSectionProps {
  videoId?: string
}

export function HeroSection({ videoId }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#0D0D1A] to-[#1A1A2E] py-20 md:py-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#7C3AED]/20 text-[#A78BFA] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>🎓</span>
              <span>Бесплатный доступ ко всем материалам</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Библиотека{' '}
              <span className="text-gradient">маркетинга</span>{' '}
              от Сургая
            </h1>

            <p className="text-[#9CA3AF] text-lg md:text-xl mb-8 max-w-lg">
              12 лет опыта в одном месте: техники продаж, построение команды,
              личная эффективность. От первых 100к до миллионных контрактов.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/library" showArrow>
                Начать изучение
              </Button>
              <Button variant="secondary" href="/about">
                О проекте
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#A78BFA]">70+</div>
                <div className="text-[#9CA3AF] text-sm">материалов</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#22D3EE]">12</div>
                <div className="text-[#9CA3AF] text-sm">лет опыта</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#EC4899]">1000+</div>
                <div className="text-[#9CA3AF] text-sm">учеников</div>
              </div>
            </div>
          </div>

          {/* Right: Video placeholder */}
          <div className="relative">
            <div className="aspect-video bg-[#16162A] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.4)]">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Hero video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#16162A] to-[#1A1A2E]">
                  <div className="w-20 h-20 rounded-full bg-[#7C3AED]/30 flex items-center justify-center mb-4 animate-pulse">
                    <Play className="w-10 h-10 text-[#A78BFA] ml-1" />
                  </div>
                  <p className="text-[#9CA3AF] text-sm">Видео скоро появится</p>
                </div>
              )}
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white/95 text-gray-900 px-4 py-2 rounded-xl shadow-lg text-sm font-medium animate-bounce">
              🔥 Топ связки 2026
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#7C3AED] text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
              ▶️ Смотреть бесплатно
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
