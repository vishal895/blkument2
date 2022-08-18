import React from 'react'
import '../home.css'


export const Cardsolution = ({title,description,image}) => {
    return (
      <div className="cardsolution">
        <div className="cardicon">
        <img src={image} className="producticon"/>
        </div>
        <h5 className="card_heading">{title}</h5>
        <p className="card_description">{description}</p>
      </div>
    )
  }