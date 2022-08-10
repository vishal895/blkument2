import React from 'react'
import '../homecomponents/home.css'
import { BasicButtons } from './title'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Cardoption = ({title,description,image}) => {
    return (
      <div className="card">
        {image}
        <h5 className="card_heading">{title}</h5>
        <p className="card_description">{description}</p>
      </div>
    )
  }
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
export const Bigcard2  = ({head,heading,buttonname,button2}) =>{
  return (
    <div className="bigcard">
      <div className="texrcard">
        <div className="headcard">{head}</div>
        <div className="headingcard">{heading}</div>
        
      </div>
      <div className="button_portion">
      <Stack spacing={2} direction="row">
      <Button variant="contained" size="large">{buttonname}</Button>
      <button className="bt">{button2}</button>
    </Stack>
    <div className="link">
        <h4>AI-powered tech</h4>
        <h4>Hours of time saved</h4>
        
        </div>      
    


      </div>
      
        
    </div>
  )
}