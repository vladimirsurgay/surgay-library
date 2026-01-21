import { CategoryCard, SectionTitle } from '@/components/ui'

const categories = [
  {
    title: 'Старт',
    icon: '🚀',
    description: 'От 0 до первых 100 000 ₽',
    href: '/library?category=start',
    count: 5,
  },
  {
    title: 'Рост',
    icon: '��',
    description: 'От 100к до 300-500к',
    href: '/library?category=growth',
    count: 4,
  },
  {
    title: 'Продажи',
    icon: '💎',
    description: 'Техники закрытия, скрипты, возражения',
    href: '/library?category=sales',
    count: 14,
  },
  {
    title: 'Команда',
    icon: '👥',
    description: 'Найм, делегирование, управление',
    href: '/library?category=team',
    count: 9,
  },
  {
    title: 'Эффективность',
    icon: '⚡',
    description: 'Продуктивность, цели, антивыгорание',
    href: '/library?category=productivity',
    count: 10,
  },
  {
    title: 'Стратегия',
    icon: '🎯',
    description: 'Бизнес-модели, планирование, рост',
    href: '/library?category=strategy',
    count: 7,
  },
  {
    title: 'Инструменты',
    icon: '🔧',
    description: 'AI, метрика, юридические вопросы',
    href: '/library?category=tools',
    count: 10,
  },
  {
    title: 'Конспекты',
    icon: '📚',
    description: 'Выжимки из книг и выступлений топов',
    href: '/library?category=summaries',
    count: 8,
  },
  {
    title: 'Кейсы',
    icon: '🏆',
    description: 'Разборы реальных проектов с цифрами',
    href: '/library?category=cases',
    count: 10,
  },
]

export function CategoriesSection() {
  return (
    <section className="section-dark">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Выбери свою"
          highlight="тему"
          subtitle="9 тематических сборников — найди то, что нужно именно тебе"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              description={category.description}
              href={category.href}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
