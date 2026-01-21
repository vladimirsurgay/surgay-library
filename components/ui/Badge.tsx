interface BadgeProps {
  children: React.ReactNode
  variant?: 'category' | 'format' | 'tag' | 'muted'
  className?: string
}

const variantStyles = {
  category: 'bg-[#7C3AED]/15 text-[#A78BFA]',
  format: 'bg-[#22D3EE]/15 text-[#22D3EE]',
  tag: 'bg-white/10 text-white/70',
  muted: 'bg-white/5 text-[#9CA3AF]',
}

export function Badge({ children, variant = 'category', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
