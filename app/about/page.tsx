import { Metadata } from 'next'
import { Button, SectionTitle } from '@/components/ui'
import {
  Award,
  Users,
  TrendingUp,
  Briefcase,
  Sparkles,
  Send,
  ExternalLink
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'О проекте',
  description: 'Владимир Сургай — маркетолог с 12-летним опытом, преподаватель ВШЭ, создатель SurgayGPT. 1000+ учеников заработали 1.2 млрд рублей.',
}

const stats = [
  { value: '12', label: 'лет в маркетинге', icon: Briefcase },
  { value: '1000+', label: 'выпускников', icon: Users },
  { value: '1.2 млрд', label: 'заработали ученики', icon: TrendingUp },
  { value: '300+ млн', label: 'крупнейший проект', icon: Award },
]

const milestones = [
  { year: '2012', text: 'Начало пути в маркетинге' },
  { year: '2016', text: 'Запуск первого обучения' },
  { year: '2020', text: 'Преподаватель магистратуры ВШЭ' },
  { year: '2025', text: 'Создание SurgayGPT' },
  { year: '2026', text: 'Запуск бесплатной библиотеки' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[#7C3AED]/20 to-[#22D3EE]/20 rounded-3xl flex items-center justify-center border border-white/10">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-[#16162A] mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-[#7C3AED]/50" />
                  </div>
                  <p className="text-[#9CA3AF] text-sm">Фото появится скоро</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-[#7C3AED]/20 text-[#A78BFA] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Создатель SurgayGPT</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Владимир <span className="text-gradient">Сургай</span>
              </h1>

              <p className="text-[#9CA3AF] text-lg mb-6 leading-relaxed">
                Маркетолог с 12-летним опытом. Помог 1000+ специалистам выйти на доход
                от 100к до миллиона рублей в месяц. Суммарно ученики заработали
                своим клиентам более 1.2 млрд рублей.
              </p>

              <p className="text-[#9CA3AF] mb-8">
                Автор книги по маркетингу (1.5 млн выручки, тираж распродан).
                Создатель SurgayGPT — платформы с 8 ИИ-агентами для маркетологов.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://surgay.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Surgay.ru
                </a>
                <a
                  href="https://t.me/+cFsjMdLFysk0NWEy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#1A1A2E] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-[#A78BFA] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[#9CA3AF] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Путь"
            highlight="развития"
          />

          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#22D3EE] to-[#7C3AED]" />

            {/* Milestones */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#7C3AED] -translate-x-1/2 ring-4 ring-[#0D0D1A]" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-[#16162A] rounded-xl p-4 border border-white/5">
                      <span className="text-[#A78BFA] font-bold">{milestone.year}</span>
                      <p className="text-white mt-1">{milestone.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Начни изучать <span className="text-gradient">бесплатно</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8">
            В библиотеке собран опыт 12 лет работы в маркетинге.
            Видео, статьи, шаблоны — всё открыто и доступно.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/library" showArrow>
              Перейти в библиотеку
            </Button>
            <a
              href="https://t.me/+cFsjMdLFysk0NWEy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Telegram-канал
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
