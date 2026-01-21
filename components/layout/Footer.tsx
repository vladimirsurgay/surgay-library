import Link from 'next/link'
import { BookOpen, Send, ExternalLink } from 'lucide-react'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Главная' },
    { href: '/library', label: 'Библиотека' },
    { href: '/about', label: 'О проекте' },
  ],
  external: [
    { href: 'https://gpt.surgay.ru', label: 'SurgayGPT', icon: ExternalLink },
    { href: 'https://t.me/+cFsjMdLFysk0NWEy', label: 'Telegram', icon: Send },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">
                Surgay <span className="text-[#A78BFA]">Library</span>
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm max-w-md">
              Бесплатная библиотека материалов по маркетингу от Владимира Сургая.
              12 лет опыта, 1000+ учеников, проверенные техники.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Навигация</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Ссылки</h4>
            <ul className="space-y-2">
              {footerLinks.external.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-white transition-colors text-sm inline-flex items-center gap-1.5"
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-sm">
            © {new Date().getFullYear()} Surgay Library. Все материалы бесплатны.
          </p>
          <p className="text-[#6B7280] text-sm">
            Сделано с 💜 для маркетологов
          </p>
        </div>
      </div>
    </footer>
  )
}
