"use client"

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import StoryCard from '@/components/StoryCard'
import FilterTabs from '@/components/FilterTabs'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Content')
  const [activeFilter, setActiveFilter] = useState('All')
  
  const stories = [
  {
    "title": "How 7 lines code turned into $36 Billion Empire",
    "category": "BUSINESS",
    "date": "20 Sep 2022",
    "status": "Published",
    "views": "428",
    "image": "/images/story-1.png"
  },
  {
    "title": "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    "category": "BUSINESS",
    "date": "20 Sep 2022",
    "status": "Created",
    "views": "428",
    "image": "/images/story-2.png"
  },
  {
    "title": "Teknion wins Gold at 2022 International Design Awards",
    "category": "Politics",
    "date": "20 Sep 2022",
    "status": "Draft",
    "views": "428",
    "image": "/images/story-3.png"
  },
  {
    "title": "How 7 lines code turned into $36 Billion Empire",
    "category": "BUSINESS",
    "date": "20 Sep 2022",
    "status": "Published",
    "views": "428",
    "image": "/images/story-4.png"
  }
]
  
  const filterTabs = [
  {
    "name": "All",
    "count": "4,500",
    "active": true
  },
  {
    "name": "Draft",
    "count": "1,203",
    "active": false
  },
  {
    "name": "Pending",
    "count": "890",
    "active": false
  },
  {
    "name": "Published",
    "count": "2,432",
    "active": false
  },
  {
    "name": "Archived",
    "count": "320",
    "active": false
  }
]
  
  return (
    <div className="dashboard">
      <Sidebar 
        activeItem={activeTab}
        onItemClick={setActiveTab}
      />
      
      <main className="main-content">
        <header className="header">
          <h1>Stories</h1>
          
          <div className="search-add-section">
            <input 
              type="text"
              placeholder="Search"
              className="search-box"
            />
            <button className="add-story-btn">
              Add New Story
            </button>
          </div>
        </header>
        
        <FilterTabs 
          tabs={filterTabs}
          onTabClick={setActiveFilter}
        />
        
        <div className="stories-grid">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      </main>
    </div>
  )
}
