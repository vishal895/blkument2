import React from 'react'
import '../home.css'


export const Bigcard  = ({head,heading,paragraph,link,image}) =>{
    return (
      <div className="bigcard">
        <div className="textcard">
          <div className="headcard">{head}</div>
          <div className="headingcard">{heading}</div>
          <div className="paragraphcard">{paragraph}</div>
          <div className="link">{link}</div>
        </div>
        <div className="imagecard">
          <div className="pic">
           <img src={image} className="image"/>
          </div>
  
        </div>
        
          
      </div>
    )
  }