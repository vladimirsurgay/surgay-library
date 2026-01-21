import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components/layout'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Surgay Library — Бесплатная библиотека маркетинга',
    template: '%s | Surgay Library',
  },
  description: '70+ бесплатных материалов по маркетингу от Владимира Сургая. Видео, статьи, шаблоны. 12 лет опыта, 1000+ учеников.',
  keywords: ['маркетинг', 'обучение', 'бесплатно', 'Сургай', 'лидогенерация', 'продажи', 'курсы'],
  authors: [{ name: 'Владимир Сургай', url: 'https://surgay.ru' }],
  creator: 'Владимир Сургай',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Surgay Library',
    title: 'Surgay Library — Бесплатная библиотека маркетинга',
    description: '70+ бесплатных материалов по маркетингу. Видео, статьи, шаблоны от практика с 12-летним опытом.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surgay Library — Бесплатная библиотека маркетинга',
    description: '70+ бесплатных материалов по маркетингу от Владимира Сургая.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
