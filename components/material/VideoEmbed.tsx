'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

interface VideoEmbedProps {
  videoId: string
  platform?: 'youtube' | 'rutube' | 'vk'
  title?: string
}

export function VideoEmbed({ videoId, platform = 'youtube', title }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const thumbnailUrl = platform === 'youtube'
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null

  const embedUrl = {
    youtube: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
    rutube: `https://rutube.ru/play/embed/${videoId}`,
    vk: `https://vk.com/video_ext.php?oid=${videoId}`,
  }[platform]

  if (isPlaying) {
    return (
      <div className="aspect-video bg-[#16162A] rounded-2xl overflow-hidden">
        <iframe
          src={embedUrl}
          title={title || 'Video'}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="relative aspect-video bg-[#16162A] rounded-2xl overflow-hidden group w-full"
    >
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={title || 'Video thumbnail'}
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-[#7C3AED]/90 group-hover:bg-[#7C3AED] flex items-center justify-center transition-all group-hover:scale-110">
          <Play className="w-10 h-10 text-white ml-1" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white font-medium text-left line-clamp-1">{title}</p>
      </div>
    </button>
  )
}
