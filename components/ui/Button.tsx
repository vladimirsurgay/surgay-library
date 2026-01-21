import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  className?: string
  showArrow?: boolean
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  showArrow = false
}: ButtonProps) {
  const baseStyles = variant === 'primary'
    ? 'btn-primary'
    : 'btn-secondary'

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-5 h-5 ml-2" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} inline-flex items-center ${className}`}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={`${baseStyles} inline-flex items-center ${className}`}>
      {content}
    </button>
  )
}
