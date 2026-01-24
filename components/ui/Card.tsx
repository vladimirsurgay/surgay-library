import Link from 'next/link'
import { Badge } from './Badge'
import { Play, FileText, Download, Clock, LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'

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
  iconName?: string
  duration?: string
  tags?: string[]
}

// Маппинг названий иконок к компонентам
const iconMap: Record<string, LucideIcon> = {
  Target: Icons.Target,
  Shield: Icons.Shield,
  Rocket: Icons.Rocket,
  Compass: Icons.Compass,
  DollarSign: Icons.DollarSign,
  Flame: Icons.Flame,
  TrendingUp: Icons.TrendingUp,
  Scale: Icons.Scale,
  CheckSquare: Icons.CheckSquare,
  Users: Icons.Users,
  Handshake: Icons.Handshake,
  Zap: Icons.Zap,
  Layers: Icons.Layers,
  Crown: Icons.Crown,
  Focus: Icons.Focus,
  Coins: Icons.Coins,
  RefreshCw: Icons.RefreshCw,
  Percent: Icons.Percent,
  Calculator: Icons.Calculator,
  Lock: Icons.Lock,
  Lightbulb: Icons.Lightbulb,
  Flower2: Icons.Flower2,
  UserX: Icons.UserX,
  Map: Icons.Map,
  Calendar: Icons.Calendar,
  Footprints: Icons.Footprints,
  Clock: Icons.Clock,
  Settings: Icons.Settings,
  Hexagon: Icons.Hexagon,
  Trophy: Icons.Trophy,
  MessageSquare: Icons.MessageSquare,
  Wind: Icons.Wind,
  Key: Icons.Key,
  Store: Icons.Store,
  Factory: Icons.Factory,
  ShoppingCart: Icons.ShoppingCart,
  GraduationCap: Icons.GraduationCap,
  Mail: Icons.Mail,
  Heart: Icons.Heart,
  FileCheck: Icons.FileCheck,
  Battery: Icons.Battery,
  Dumbbell: Icons.Dumbbell,
  Repeat: Icons.Repeat,
  Droplets: Icons.Droplets,
  AlertTriangle: Icons.AlertTriangle,
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
  iconName,
  duration,
  tags,
}: CardProps) {
  const FormatIcon = formatConfig[format].icon

  // Генерируем thumbnail URL: приоритет - thumbnail, потом videoId (hqdefault для надёжности), потом image, иначе null
  const thumbnailUrl = thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null) || image

  // Получаем компонент иконки из маппинга
  const IconComponent = iconName ? iconMap[iconName] : null

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
        ) : IconComponent ? (
          <div className="aspect-video bg-gradient-to-br from-[#16162A] via-[#0D0D1A] to-[#7C3AED]/20 flex items-center justify-center">
            <IconComponent className="w-16 h-16 text-[#7C3AED]" strokeWidth={1.5} />
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
