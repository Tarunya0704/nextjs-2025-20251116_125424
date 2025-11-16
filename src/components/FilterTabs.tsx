interface FilterTab {
  name: string
  count: string
  active: boolean
}

interface FilterTabsProps {
  tabs: FilterTab[]
  onTabClick: (tabName: string) => void
}

export default function FilterTabs({ tabs, onTabClick }: FilterTabsProps) {
  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`filter-tab ${tab.active ? 'active' : ''}`}
          onClick={() => onTabClick(tab.name)}
        >
          {tab.name} ({tab.count})
        </button>
      ))}
    </div>
  )
}
