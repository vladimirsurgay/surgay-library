import { Card, SectionTitle } from '@/components/ui'
import { Material, getCategoryById } from '@/lib/data'

interface RelatedMaterialsProps {
  materials: Material[]
}

export function RelatedMaterials({ materials }: RelatedMaterialsProps) {
  if (materials.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t border-white/10">
      <SectionTitle
        title="Похожие"
        highlight="материалы"
        centered={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {materials.map((material) => {
          const category = getCategoryById(material.category)
          return (
            <Card
              key={material.id}
              title={material.title}
              description={material.description}
              category={category?.label || material.category}
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
          )
        })}
      </div>
    </section>
  )
}
