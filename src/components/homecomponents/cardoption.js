import React from 'react'
import '../home.css'


export const Cardoption = ({title,description,image}) => {
    return (
      <div className="card">
        {image}
        <h5 className="card_heading">{title}</h5>
        <p className="card_description">{description}</p>
      </div>
    )
  }