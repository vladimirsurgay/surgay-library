import { Target, Layers, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const guides = [
  {
    icon: Target,
    title: 'По уровню дохода',
    description: 'Выбери свой текущий уровень и получи персональный план роста',
    items: ['0 → 100к: Старт', '100к → 300к: Рост', '300к+: Масштаб'],
    href: '/library',
    color: 'purple',
  },
  {
    icon: Layers,
    title: 'По темам',
    description: '9 тематических сборников — от продаж до построения команды',
    items: ['💎 Продажи', '👥 Команда', '⚡ Эффективность'],
    href: '/library',
    color: 'cyan',
  },
  {
    icon: FileText,
    title: 'По форматам',
    description: 'Видео, статьи и готовые шаблоны для скачивания',
    items: ['📹 Видео', '📄 Статьи', '📋 Шаблоны'],
    href: '/library',
    color: 'pink',
  },
]

const colorClasses = {
  purple: 'bg-[#7C3AED]/20 text-[#A78BFA]',
  cyan: 'bg-[#22D3EE]/20 text-[#22D3EE]',
  pink: 'bg-[#EC4899]/20 text-[#EC4899]',
}

export function HowToUseSection() {
  return (
    <section className="section-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как пользоваться библиотекой
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Выбери удобный способ навигации и найди именно то, что нужно тебе сейчас
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.15)] transition-all hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-xl ${colorClasses[guide.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                <guide.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#7C3AED] transition-colors">
                {guide.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {guide.description}
              </p>

              <ul className="space-y-2 mb-4">
                {guide.items.map((item) => (
                  <li key={item} className="text-gray-700 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="text-[#7C3AED] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Перейти <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Quick start */}
        <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#22D3EE]/10 rounded-2xl p-8 border border-[#7C3AED]/20">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 С чего начать?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-medium text-gray-900 mb-1">Если только начинаешь:</p>
              <p className="text-gray-600">
                Смотри видео{' '}
                <Link href="/library/gayd-s-nulya-do-100k-video" className="text-[#7C3AED] hover:underline">
                  «С нуля до 100к»
                </Link>
                {' '}+ гайд{' '}
                <Link href="/library/gayd-s-nulya-do-100k" className="text-[#7C3AED] hover:underline">
                  «Как сделать первую сотку»
                </Link>
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Хочешь вырасти в доходе:</p>
              <p className="text-gray-600">
                Изучи{' '}
                <Link href="/library/tehnika-rost-peregovory" className="text-[#7C3AED] hover:underline">
                  технику РОСТ
                </Link>
                {' '}+{' '}
                <Link href="/library/skript-prodayushchih-diagnostik" className="text-[#7C3AED] hover:underline">
                  скрипт продающих диагностик
                </Link>
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">Строишь команду:</p>
              <p className="text-gray-600">
                Начни с{' '}
                <Link href="/library/kak-pravilno-delegirovat-uprazhnenie" className="text-[#7C3AED] hover:underline">
                  «Делегирование с дня 0»
                </Link>
                {' '}+{' '}
                <Link href="/library/26-kachestv-sotrudnikov-a-klassa" className="text-[#7C3AED] hover:underline">
                  «26 качеств А-класса»
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
