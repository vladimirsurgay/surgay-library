'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen, Send } from 'lucide-react'

const navLinks = [
  { href: '/library', label: 'Библиотека' },
  { href: '/about', label: 'О проекте' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D1A]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">
              Surgay <span className="text-[#A78BFA]">Library</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Telegram Button */}
          <div className="hidden md:block">
            <a
              href="https://t.me/+cFsjMdLFysk0NWEy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#22D3EE]/20 hover:bg-[#22D3EE]/30 text-[#22D3EE] px-4 py-2 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
              <span className="font-medium">Telegram</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://t.me/+cFsjMdLFysk0NWEy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#22D3EE] font-medium py-2"
              >
                <Send className="w-4 h-4" />
                Telegram-канал
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
