import Link from 'next/link'
import { Badge } from './Badge'
import { Play, FileText, Download, Clock } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  category: string
  categoryIcon?: string
  format: 'video' | 'article' | 'template'
  href: string
  thumbnail?: string
  videoId?: string
  image?: string
  duration?: string
  tags?: string[]
}

const formatConfig = {
  video: { icon: Play, label: 'Видео', color: 'format' as const },
  article: { icon: FileText, label: 'Статья', color: 'format' as const },
  template: { icon: Download, label: 'Шаблон', color: 'format' as const },
}

export function Card({
  title,
  description,
  category,
  categoryIcon,
  format,
  href,
  thumbnail,
  videoId,
  image,
  duration,
  tags,
}: CardProps) {
  const FormatIcon = formatConfig[format].icon

  // Генерируем thumbnail URL: приоритет - image, потом thumbnail, потом videoId, иначе null
  const thumbnailUrl = image || thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null)

  return (
    <Link href={href} className="block group">
      <article className="card-dark h-full flex flex-col overflow-hidden">
        {/* Thumbnail */}
        {thumbnailUrl ? (
          <div className="relative aspect-video bg-[#1A1A2E] overflow-hidden">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {format === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-[#7C3AED]/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-b from-[#16162A] to-[#1A1A2E] flex items-center justify-center">
            <FormatIcon className="w-12 h-12 text-[#7C3AED]/50" />
          </div>
        )}

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="category">
              {categoryIcon && <span>{categoryIcon}</span>}
              {category}
            </Badge>
            <Badge variant="format">
              <FormatIcon className="w-3.5 h-3.5" />
              {formatConfig[format].label}
            </Badge>
            {duration && (
              <Badge variant="muted">
                <Clock className="w-3.5 h-3.5" />
                {duration}
              </Badge>
            )}
          </div>

          {/* Title - always visible */}
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[#A78BFA] transition-colors">
            {title}
          </h3>

          {/* Description - always visible */}
          <p className="text-[#9CA3AF] text-sm line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-[#6B7280]">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
