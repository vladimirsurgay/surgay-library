interface MaterialContentProps {
  content: string
}

export function MaterialContent({ content }: MaterialContentProps) {
  // Простой рендеринг контента с поддержкой базового форматирования
  // В будущем можно заменить на MDX или rich text

  return (
    <div className="prose prose-invert prose-purple max-w-none">
      <div
        className="text-[#9CA3AF] leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: formatContent(content) }}
      />
    </div>
  )
}

// Простое форматирование текста
function formatContent(content: string): string {
  return content
    // Заголовки
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4">$1</h2>')
    // Жирный текст
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Курсив
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Ссылки (markdown: [текст](url))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent-purple hover:text-accent-purple-light underline transition-colors">$1</a>')
    // Цитаты (blockquote)
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-accent-purple pl-4 py-2 my-4 text-text-gray italic">$1</blockquote>')
    // Горизонтальная линия
    .replace(/^---$/gm, '<hr class="border-white/10 my-8" />')
    // Списки
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 ml-4"><span class="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2.5 flex-shrink-0"></span><span>$1</span></li>')
    // Нумерованные списки
    .replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-3 ml-4"><span class="text-[#A78BFA] font-semibold">$1.</span><span>$2</span></li>')
    // Параграфы
    .replace(/\n\n/g, '</p><p class="mb-4">')
    // Обёртка
    .replace(/^/, '<p class="mb-4">')
    .replace(/$/, '</p>')
}
