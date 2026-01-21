import { Lightbulb, AlertCircle, CheckCircle } from 'lucide-react'

interface HighlightBoxProps {
  children: React.ReactNode
  title?: string
  variant?: 'insight' | 'warning' | 'success'
  className?: string
}

const variantConfig = {
  insight: {
    icon: Lightbulb,
    borderColor: 'border-[#7C3AED]',
    bgColor: 'bg-[#7C3AED]/10',
    titleColor: 'text-[#A78BFA]',
  },
  warning: {
    icon: AlertCircle,
    borderColor: 'border-yellow-500',
    bgColor: 'bg-yellow-500/10',
    titleColor: 'text-yellow-400',
  },
  success: {
    icon: CheckCircle,
    borderColor: 'border-green-500',
    bgColor: 'bg-green-500/10',
    titleColor: 'text-green-400',
  },
}

export function HighlightBox({
  children,
  title = 'Ключевой инсайт',
  variant = 'insight',
  className = ''
}: HighlightBoxProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div className={`${config.bgColor} border-l-4 ${config.borderColor} rounded-r-xl p-4 ${className}`}>
      <div className={`flex items-center gap-2 ${config.titleColor} font-medium mb-2`}>
        <Icon className="w-5 h-5" />
        <span>{title}</span>
      </div>
      <div className="text-[#9CA3AF]">
        {children}
      </div>
    </div>
  )
}
