import { Card } from '@/components/ui'
import { Material, getCategoryById } from '@/lib/data'
import { SearchX } from 'lucide-react'

interface MaterialsGridProps {
  materials: Material[]
  onResetFilters?: () => void
}

export function MaterialsGrid({ materials, onResetFilters }: MaterialsGridProps) {
  if (materials.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-full bg-[#16162A] flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-10 h-10 text-[#9CA3AF]" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Материалы не найдены</h3>
        <p className="text-[#9CA3AF] mb-6">
          Попробуй изменить фильтры или поисковый запрос
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="btn-secondary"
          >
            Сбросить фильтры
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            duration={material.duration}
            tags={material.tags}
          />
        )
      })}
    </div>
  )
}
