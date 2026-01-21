import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  title: string
  icon: string
  description: string
  href: string
  count?: number
}

export function CategoryCard({ title, icon, description, href, count }: CategoryCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="card-dark p-6 h-full flex flex-col">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#A78BFA] transition-colors">
          {title}
        </h3>
        <p className="text-[#9CA3AF] text-sm flex-grow mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm">
          {count !== undefined && (
            <span className="text-[#6B7280]">{count} материалов</span>
          )}
          <span className="text-[#A78BFA] flex items-center gap-1 group-hover:gap-2 transition-all">
            Смотреть <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
