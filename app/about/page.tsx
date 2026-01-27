import { Metadata } from 'next'
import Image from 'next/image'
import { Button, SectionTitle } from '@/components/ui'
import {
  Award,
  Users,
  TrendingUp,
  Briefcase,
  Sparkles,
  Send,
  ExternalLink,
  Target,
  Brain,
  Zap
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
  { year: '2015', text: 'Запуск первого обучения' },
  { year: '2020', text: 'Преподаватель магистратуры ВШЭ' },
  { year: '2025', text: 'Создание SurgayGPT' },
  { year: '2026', text: 'Запуск бесплатной библиотеки' },
]

const philosophy = [
  {
    icon: Target,
    title: 'Результат важнее процесса',
    description: 'Фокус на том, что приносит деньги, а не на «красивых» метриках'
  },
  {
    icon: Brain,
    title: 'Мышление первично',
    description: '80% успеха — в голове. Техники и инструменты — только 20%'
  },
  {
    icon: Zap,
    title: 'Скорость решает',
    description: 'Быстро тестируй, быстро адаптируйся, быстро масштабируй'
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/about-vladimir-speaking.jpg"
                  alt="Владимир Сургай выступает на конференции"
                  fill
                  className="object-cover"
                  priority
                />
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

      {/* Gallery */}
      <section className="py-16 px-4 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Жизнь и"
            highlight="работа"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Фото с гидросамолётом */}
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about/about-vladimir-seaplane.jpg"
                  alt="Владимир Сургай путешествует"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <p className="text-white font-medium">Путешествия — часть работы над собой</p>
              </div>
            </div>

            {/* Фото с семьёй */}
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about/about-vladimir-family.jpg"
                  alt="Владимир Сургай с дочкой"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <p className="text-white font-medium">Семья — главный приоритет</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-dark">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Моя"
            highlight="философия"
          />

          <blockquote className="text-xl md:text-2xl text-[#9CA3AF] italic mb-12 max-w-3xl mx-auto">
            «Маркетинг — это не про трафик и лиды. Это про решение реальных проблем людей
            и построение системы, которая работает без тебя.»
          </blockquote>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((item) => (
              <div key={item.title} className="p-6 bg-[#16162A] rounded-2xl border border-white/5 hover:border-[#7C3AED]/30 transition-colors">
                <item.icon className="w-12 h-12 text-[#7C3AED] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-[#9CA3AF] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark bg-[#1A1A2E]">
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
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#7C3AED] -translate-x-1/2 ring-4 ring-[#1A1A2E]" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-[#0D0D1A] rounded-xl p-4 border border-white/5">
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
            Хочешь расти <span className="text-gradient">вместе?</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg mb-8">
            Подпишись на Telegram-канал — там свежие связки, разборы и доступ к SurgayGPT.
            В библиотеке — опыт 12 лет работы в маркетинге.
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
