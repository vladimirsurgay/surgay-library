interface SectionTitleProps {
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({
  title,
  highlight,
  subtitle,
  centered = true,
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}{' '}
        {highlight && (
          <span className="text-gradient">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
