'use client'

import { useState } from 'react'
import { CategoryCard, SectionTitle } from '@/components/ui'

// Категории по уровню дохода
const incomeCategories = [
  {
    title: 'Старт',
    icon: '🚀',
    description: 'От 0 до первых 100 000 ₽',
    href: '/library?incomeLevel=start',
    count: 24,
  },
  {
    title: 'Рост',
    icon: '📈',
    description: 'От 100к до 300-500к',
    href: '/library?incomeLevel=growth',
    count: 52,
  },
  {
    title: 'Масштаб',
    icon: '💰',
    description: 'От 300к и выше',
    href: '/library?incomeLevel=scale',
    count: 62,
  },
]

// Категории по темам
const topicCategories = [
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
  const [mode, setMode] = useState<'income' | 'topics'>('income')

  const categories = mode === 'income' ? incomeCategories : topicCategories

  return (
    <section className="section-dark">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Выбери свою"
          highlight="тему"
          subtitle={mode === 'income' ? '3 уровня дохода — найди свой этап' : '7 тематических сборников — найди то, что нужно именно тебе'}
        />

        {/* Переключатель режимов */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setMode('income')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              mode === 'income'
                ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/30'
                : 'bg-dark-card text-text-gray hover:text-white hover:bg-dark-card/80'
            }`}
          >
            По уровню дохода
          </button>
          <button
            onClick={() => setMode('topics')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              mode === 'topics'
                ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/30'
                : 'bg-dark-card text-text-gray hover:text-white hover:bg-dark-card/80'
            }`}
          >
            По темам
          </button>
        </div>

        {/* Сетка категорий */}
        <div className={`grid gap-6 ${
          mode === 'income'
            ? 'grid-cols-1 sm:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
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
