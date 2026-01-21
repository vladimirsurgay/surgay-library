import { MetadataRoute } from 'next'
import { getAllMaterials } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const materials = getAllMaterials()

  const materialUrls = materials.map((material) => ({
    url: `https://library.surgay.ru/library/${material.slug}`,
    lastModified: new Date(material.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://library.surgay.ru',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://library.surgay.ru/library',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://library.surgay.ru/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...materialUrls,
  ]
}
