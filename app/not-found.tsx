import Link from 'next/link'
import { Button } from '@/components/ui'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section-dark min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-bold text-[#7C3AED]/20 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Страница не найдена</h1>
        <p className="text-[#9CA3AF] mb-8 max-w-md mx-auto">
          Возможно, материал был перемещён или удалён.
          Попробуй найти нужный материал в библиотеке.
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="/" variant="secondary">
            <Home className="w-4 h-4 mr-2" />
            На главную
          </Button>
          <Button href="/library">
            <Search className="w-4 h-4 mr-2" />
            В библиотеку
          </Button>
        </div>
      </div>
    </section>
  )
}
