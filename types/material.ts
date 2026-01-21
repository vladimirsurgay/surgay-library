export interface Material {
  id: string
  slug: string
  title: string
  description: string
  category: MaterialCategory
  tags: string[]
  preview?: string
  downloadUrl?: string
  createdAt: string
  updatedAt?: string
}

export type MaterialCategory =
  | 'template'
  | 'checklist'
  | 'guide'
  | 'tool'
  | 'presentation'
  | 'other'

export interface MaterialFilter {
  category?: MaterialCategory
  tags?: string[]
  search?: string
}
