'use client'

import { useState, useMemo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { SectionTitle } from '@/components/ui'
import { SearchInput, FilterTabs, MaterialsGrid } from '@/components/library'
import { categories, formats, filterMaterials } from '@/lib/data'

export default function LibraryPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Получаем параметры из URL
  const initialCategory = searchParams.get('category') || 'all'
  const initialFormat = searchParams.get('format') || 'all'
  const initialSearch = searchParams.get('search') || ''

  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activeFormat, setActiveFormat] = useState(initialFormat)
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [filterMode, setFilterMode] = useState<'level' | 'topics'>('topics')

  // Фильтруем категории по режиму
  const levelCategories = ['all', 'start', 'growth', 'scale']
  const topicCategories = ['all', 'sales', 'team', 'productivity', 'strategy', 'tools', 'summaries', 'cases']

  const displayedCategories = filterMode === 'level'
    ? categories.filter(c => levelCategories.includes(c.id))
    : categories.filter(c => topicCategories.includes(c.id))

  // Фильтруем материалы
  const filteredMaterials = useMemo(() => {
    return filterMaterials(activeCategory, activeFormat, searchQuery)
  }, [activeCategory, activeFormat, searchQuery])

  // Обновляем URL при изменении фильтров
  const updateURL = (category: string, format: string, search: string) => {
    const params = new URLSearchParams()
    if (category !== 'all') params.set('category', category)
    if (format !== 'all') params.set('format', format)
    if (search) params.set('search', search)

    const queryString = params.toString()
    router.push(queryString ? `/library?${queryString}` : '/library', { scroll: false })
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    updateURL(category, activeFormat, searchQuery)
  }

  const handleFormatChange = (format: string) => {
    setActiveFormat(format)
    updateURL(activeCategory, format, searchQuery)
  }

  const handleSearchChange = (search: string) => {
    setSearchQuery(search)
    // Debounce URL update for search
    const timeoutId = setTimeout(() => {
      updateURL(activeCategory, activeFormat, search)
    }, 300)
    return () => clearTimeout(timeoutId)
  }

  const handleResetFilters = () => {
    setActiveCategory('all')
    setActiveFormat('all')
    setSearchQuery('')
    router.push('/library', { scroll: false })
  }

  // Получаем текущую категорию для заголовка
  const currentCategory = categories.find(c => c.id === activeCategory)

  return (
    <section className="section-dark min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <SectionTitle
            title={activeCategory === 'all' ? 'Все' : currentCategory?.icon + ' ' + currentCategory?.label}
            highlight="материалы"
            subtitle={`${filteredMaterials.length} ${getCountLabel(filteredMaterials.length)} — выбери то, что нужно тебе сейчас`}
          />
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Поиск по названию, описанию или тегам..."
          />
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-8">
          {/* Filter Mode Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => {
                setFilterMode('level')
                setActiveCategory('all')
                updateURL('all', activeFormat, searchQuery)
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterMode === 'level'
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-white/5 text-[#9CA3AF] hover:bg-white/10'
              }`}
            >
              По уровню дохода
            </button>
            <button
              onClick={() => {
                setFilterMode('topics')
                setActiveCategory('all')
                updateURL('all', activeFormat, searchQuery)
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterMode === 'topics'
                  ? 'bg-[#7C3AED] text-white'
                  : 'bg-white/5 text-[#9CA3AF] hover:bg-white/10'
              }`}
            >
              По темам
            </button>
          </div>

          {/* Categories */}
          <div>
            <p className="text-sm text-[#9CA3AF] mb-2">Категория:</p>
            <FilterTabs
              tabs={displayedCategories}
              activeTab={activeCategory}
              onChange={handleCategoryChange}
            />
          </div>

          {/* Formats */}
          <div>
            <p className="text-sm text-[#9CA3AF] mb-2">Формат:</p>
            <FilterTabs
              tabs={formats}
              activeTab={activeFormat}
              onChange={handleFormatChange}
              variant="pills"
            />
          </div>
        </div>

        {/* Results count */}
        {(activeCategory !== 'all' || activeFormat !== 'all' || searchQuery) && (
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
            <p className="text-[#9CA3AF]">
              Найдено: <span className="text-white font-medium">{filteredMaterials.length}</span> {getCountLabel(filteredMaterials.length)}
            </p>
            <button
              onClick={handleResetFilters}
              className="text-[#A78BFA] hover:text-[#7C3AED] transition-colors text-sm"
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        {/* Grid */}
        <MaterialsGrid
          materials={filteredMaterials}
          onResetFilters={handleResetFilters}
        />
      </div>
    </section>
  )
}

// Склонение слова "материал"
function getCountLabel(count: number): string {
  const lastTwo = count % 100
  const lastOne = count % 10

  if (lastTwo >= 11 && lastTwo <= 19) return 'материалов'
  if (lastOne === 1) return 'материал'
  if (lastOne >= 2 && lastOne <= 4) return 'материала'
  return 'материалов'
}
