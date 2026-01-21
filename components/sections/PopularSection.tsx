import { Card, SectionTitle, Button } from '@/components/ui'
import { materials } from '@/lib/data'

// Популярные материалы по slug
const popularSlugs = [
  'tehnika-rost-peregovory',
  'gayd-s-nulya-do-100k-video',
  'skript-prodayushchih-diagnostik',
  'kak-pravilno-delegirovat-uprazhnenie',
  'za-chto-platyat-ot-300k',
  'kak-ne-vygorat',
]

const popularMaterials = popularSlugs
  .map(slug => materials.find(m => m.slug === slug))
  .filter((m): m is NonNullable<typeof m> => m !== undefined)

export function PopularSection() {
  return (
    <section className="section-light">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Популярные"
          highlight="материалы"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularMaterials.map((material) => (
            <Card
              key={material.id}
              title={material.title}
              description={material.description}
              category={material.category}
              categoryIcon={material.categoryIcon}
              format={material.format}
              href={`/library/${material.slug}`}
              thumbnail={material.thumbnail}
              videoId={material.videoId}
              image={material.image}
              iconName={material.iconName}
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
