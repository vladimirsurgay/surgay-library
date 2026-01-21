import { Material, MaterialFilter } from '@/types/material'
import materialsData from '@/content/materials.json'

export function getAllMaterials(): Material[] {
  return materialsData.materials as Material[]
}

export function getMaterialBySlug(slug: string): Material | undefined {
  return getAllMaterials().find((material) => material.slug === slug)
}

export function getMaterialById(id: string): Material | undefined {
  return getAllMaterials().find((material) => material.id === id)
}

export function filterMaterials(filter: MaterialFilter): Material[] {
  let materials = getAllMaterials()

  if (filter.category) {
    materials = materials.filter((m) => m.category === filter.category)
  }

  if (filter.tags && filter.tags.length > 0) {
    materials = materials.filter((m) =>
      filter.tags!.some((tag) => m.tags.includes(tag))
    )
  }

  if (filter.search) {
    const searchLower = filter.search.toLowerCase()
    materials = materials.filter(
      (m) =>
        m.title.toLowerCase().includes(searchLower) ||
        m.description.toLowerCase().includes(searchLower)
    )
  }

  return materials
}

export function getAllCategories(): string[] {
  const materials = getAllMaterials()
  const categories = new Set(materials.map((m) => m.category))
  return Array.from(categories)
}

export function getAllTags(): string[] {
  const materials = getAllMaterials()
  const tags = new Set(materials.flatMap((m) => m.tags))
  return Array.from(tags)
}
