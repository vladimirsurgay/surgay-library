import { Card, SectionTitle, Button } from '@/components/ui'

const popularMaterials = [
  {
    title: 'Техника РОСТ — как быть уверенным на переговорах',
    description: '4 компонента техники: Расслабленность, Открытость, Спокойствие, Твёрдость',
    category: 'Продажи',
    categoryIcon: '💎',
    format: 'article' as const,
    href: '/library/tehnika-rost',
    tags: ['переговоры', 'уверенность'],
  },
  {
    title: 'С нуля до 100к — пошаговый план',
    description: 'Как сделать первые 100 000 рублей: 3 проекта по 35к с ежемесячной оплатой',
    category: 'Старт',
    categoryIcon: '🚀',
    format: 'video' as const,
    href: '/library/s-nulya-do-100k',
    duration: '17 мин',
    tags: ['новичкам', 'план'],
  },
  {
    title: 'Скрипт продающих диагностик на 7,5 млн',
    description: 'Готовый скрипт, который принёс 7,5 миллионов рублей',
    category: 'Продажи',
    categoryIcon: '💎',
    format: 'template' as const,
    href: '/library/skript-diagnostik',
    tags: ['скрипт', 'шаблон'],
  },
  {
    title: 'Как правильно делегировать с дня 0',
    description: 'Техника «Ткань дня» и этапы роста от 0 до 300к+ чужими руками',
    category: 'Команда',
    categoryIcon: '👥',
    format: 'article' as const,
    href: '/library/delegirovanie-s-dnya-0',
    tags: ['делегирование', 'команда'],
  },
  {
    title: 'За что платят от 300к',
    description: 'Метафора с макаронами и истинный запрос бизнеса',
    category: 'Стратегия',
    categoryIcon: '🎯',
    format: 'article' as const,
    href: '/library/za-chto-platyat-ot-300k',
    tags: ['чек', 'позиционирование'],
  },
  {
    title: 'Как не выгорать',
    description: 'Сигналы подсознания и работа собственника — делай то, что никто кроме тебя не сделает',
    category: 'Эффективность',
    categoryIcon: '⚡',
    format: 'article' as const,
    href: '/library/kak-ne-vygorat',
    tags: ['выгорание', 'баланс'],
  },
]

export function PopularSection() {
  return (
    <section className="section-light">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Популярные"
          highlight="материалы"
          subtitle="Проверено на 1000+ учениках"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularMaterials.map((material) => (
            <Card
              key={material.href}
              title={material.title}
              description={material.description}
              category={material.category}
              categoryIcon={material.categoryIcon}
              format={material.format}
              href={material.href}
              duration={material.duration}
              tags={material.tags}
            />
          ))}
        </div>

        <div className="text-center">
          <Button href="/library" showArrow>
            Смотреть все материалы
          </Button>
        </div>
      </div>
    </section>
  )
}
