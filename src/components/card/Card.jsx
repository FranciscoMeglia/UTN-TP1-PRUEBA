import React from 'react'
import './Card.css'

export const Card = ({img , text}) => {
  return (
    <div className="card" style={{backgroundImage: `url(${img})`}}>
      <div className="card-info">
        <h3>{text}</h3>
      </div>
    </div>
  )
}
