import React from 'react'
import '../home.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Bigcard2  = ({head,heading,buttonname,button2}) =>{
    return (
      <div className="bigcard2">
        <div className="texrcard">
          <div className="headcard">{head}</div>
          <div className="headingcard2">{heading}</div>
          
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