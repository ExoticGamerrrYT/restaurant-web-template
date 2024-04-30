import React from 'react'
import '../styles/RestaurantInfo.css'

interface RestaurantInfoProps {
  name: string
  location: string
  menu: string[]
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ name, location, menu }) => {
  return (
    <div className="restaurant-info">
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <h3>Menu</h3>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantInfo
