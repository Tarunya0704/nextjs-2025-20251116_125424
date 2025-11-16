interface SidebarProps {
  activeItem: string
  onItemClick: (item: string) => void
}

export default function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const sidebarItems = [
  "Dashboard",
  "Content",
  "User",
  "Task",
  "App/Web",
  "Analytics",
  "Media",
  "Customize",
  "Notifications",
  "Subscription",
  "Settings"
]
  
  return (
    <div className="sidebar">
      <div className="user-profile">
        <div className="user-avatar"></div>
        <div className="user-info">
          <h4>Akshita Patel</h4>
          <p>Welcome back,</p>
        </div>
      </div>
      
      <nav>
        {sidebarItems.map((item) => (
          <div
            key={item}
            className={`sidebar-item ${activeItem === item ? 'active' : ''}`}
            onClick={() => onItemClick(item)}
          >
            <span>{item}</span>
          </div>
        ))}
      </nav>
      
      <div className="contact-support">
        Contact Support
      </div>
    </div>
  )
}
