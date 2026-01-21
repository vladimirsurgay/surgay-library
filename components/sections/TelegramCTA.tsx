import { Send, Sparkles, TrendingUp, Users } from 'lucide-react'

const features = [
  { icon: Sparkles, text: 'Нейромаркетинг и SurgayGPT' },
  { icon: TrendingUp, text: 'Рабочие связки для лидогенерации' },
  { icon: Users, text: 'Разборы кейсов с цифрами' },
]

export function TelegramCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-[#0D0D1A] to-[#22D3EE]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-[#22D3EE]/20 text-[#22D3EE] px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Send className="w-4 h-4" />
          <span>1000+ маркетологов уже внутри</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Хочешь <span className="text-gradient">больше?</span>
        </h2>

        <p className="text-[#9CA3AF] text-lg mb-8 max-w-2xl mx-auto">
          В Telegram-канале делюсь свежими связками, разборами и инсайтами,
          которых нет в открытом доступе
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {features.map((feature) => (
            <div key={feature.text} className="flex items-center gap-2 text-[#9CA3AF]">
              <feature.icon className="w-5 h-5 text-[#A78BFA]" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        <a
          href="https://t.me/+cFsjMdLFysk0NWEy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-lg"
        >
          <Send className="w-5 h-5" />
          Подписаться на Telegram
        </a>
      </div>
    </section>
  )
}
