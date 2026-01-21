import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Badge } from '@/components/ui'
import {
  Breadcrumbs,
  VideoEmbed,
  DownloadCard,
  MaterialContent,
  RelatedMaterials
} from '@/components/material'
import {
  getMaterialBySlug,
  getRelatedMaterials,
  getCategoryById,
  getAllMaterials
} from '@/lib/data'
import { Calendar, Clock, ArrowLeft, Play, FileText, Download } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: { slug: string }
}

// Генерация статических путей
export async function generateStaticParams() {
  const materials = getAllMaterials()
  return materials.map((material) => ({
    slug: material.slug,
  }))
}

// Генерация метаданных
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const material = getMaterialBySlug(params.slug)

  if (!material) {
    return { title: 'Материал не найден' }
  }

  return {
    title: material.title,
    description: material.description,
    openGraph: {
      title: material.title,
      description: material.description,
      type: 'article',
    },
  }
}

const formatConfig = {
  video: { icon: Play, label: 'Видео' },
  article: { icon: FileText, label: 'Статья' },
  template: { icon: Download, label: 'Шаблон' },
}

export default function MaterialPage({ params }: PageProps) {
  const material = getMaterialBySlug(params.slug)

  if (!material) {
    notFound()
  }

  const category = getCategoryById(material.category)
  const relatedMaterials = getRelatedMaterials(material, 3)
  const FormatIcon = formatConfig[material.format].icon

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <article className="section-dark min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Библиотека', href: '/library' },
            { label: category?.label || material.category, href: `/library?category=${material.category}` },
            { label: material.title },
          ]}
        />

        {/* Back link */}
        <Link
          href="/library"
          className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад в библиотеку
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="category">
              {material.categoryIcon} {category?.label}
            </Badge>
            <Badge variant="format">
              <FormatIcon className="w-3.5 h-3.5" />
              {formatConfig[material.format].label}
            </Badge>
            {material.duration && (
              <Badge variant="muted">
                <Clock className="w-3.5 h-3.5" />
                {material.duration}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {material.title}
          </h1>

          {/* Description */}
          <p className="text-[#9CA3AF] text-lg mb-4">
            {material.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#6B7280]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(material.createdAt)}
            </span>
          </div>
        </header>

        {/* Main Image (if exists and no video) */}
        {material.image && !material.videoId && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img
              src={material.image}
              alt={material.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content Images (if exists) */}
        {material.contentImages && material.contentImages.length > 0 && (
          <div className={`mb-8 grid gap-4 ${
            material.contentImages.length === 2 ? 'grid-cols-2' :
            material.contentImages.length === 3 ? 'grid-cols-3' :
            material.contentImages.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
            'grid-cols-2 md:grid-cols-5'
          }`}>
            {material.contentImages.map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden bg-[#1A1A2E]">
                <img
                  src={img}
                  alt={`${material.title} - изображение ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Video (if exists) */}
        {material.videoId && (
          <div className="mb-8">
            <VideoEmbed
              videoId={material.videoId}
              title={material.title}
            />
          </div>
        )}

        {/* Content */}
        {material.content && (
          <div className="mb-8">
            <MaterialContent content={material.content} />
          </div>
        )}

        {/* Downloads */}
        {material.downloads && material.downloads.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Файлы для скачивания</h3>
            <div className="space-y-3">
              {material.downloads.map((download, index) => (
                <DownloadCard
                  key={index}
                  name={download.name}
                  url={download.url}
                  size={download.size}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {material.tags.length > 0 && (
          <div className="mb-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {material.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/library?search=${tag}`}
                  className="text-sm text-[#9CA3AF] hover:text-[#A78BFA] transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#7C3AED]/20 to-[#22D3EE]/20 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Хочешь больше таких материалов?</h3>
          <p className="text-[#9CA3AF] mb-4">
            Подпишись на Telegram — там свежие связки и разборы
          </p>
          <a
            href="https://t.me/+cFsjMdLFysk0NWEy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Подписаться на Telegram
          </a>
        </div>

        {/* Related materials */}
        <RelatedMaterials materials={relatedMaterials} />
      </div>
    </article>
  )
}
