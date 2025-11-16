interface Story {
  title: string
  category: string
  date: string
  status: string
  views: string
  image: string
}

interface StoryCardProps {
  story: Story
}

export default function StoryCard({ story }: StoryCardProps) {
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published': return 'status-published'
      case 'draft': return 'status-draft'
      case 'created': return 'status-created'
      default: return 'status-draft'
    }
  }
  
  return (
    <div className="story-card">
      <img 
        src={story.image} 
        alt={story.title}
        className="story-image"
        onError={(e) => {
          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwTDEyNSA3NUgxNzVMMTUwIDEwMFoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+'
        }}
      />
      
      <div className="story-content">
        <button className="view-button">View</button>
        
        <h3 className="story-title">{story.title}</h3>
        
        <div className="story-category">{story.category}</div>
        
        <div className="story-date">{story.date}</div>
        
        <div className="story-footer">
          <span className={`story-status ${getStatusClass(story.status)}`}>
            {story.status}
          </span>
          
          <div className="story-views">
            <span>{story.views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
