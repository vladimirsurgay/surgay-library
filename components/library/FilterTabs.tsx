'use client'

interface Tab {
  id: string
  label: string
  icon?: string
}

interface FilterTabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
  variant?: 'default' | 'pills'
}

export function FilterTabs({ tabs, activeTab, onChange, variant = 'default' }: FilterTabsProps) {
  if (variant === 'pills') {
    return (
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-[#7C3AED] text-white'
                : 'bg-[#16162A] text-[#9CA3AF] hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex overflow-x-auto pb-2 -mb-2 scrollbar-hide">
      <div className="flex gap-1 bg-[#16162A] rounded-xl p-1 border border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            {tab.icon && <span className="mr-1.5">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
