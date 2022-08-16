import React from 'react'
import "../homecomponents/home.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 export const Title = ({tagline,paragraph}) => {
  return (
    <>
    <div className="heading">{tagline}</div>
    <div className="paragraph">{paragraph}</div> 
    </>
  )
}
export const Title2 = ({tagline,paragraph,head}) => {
  return (
    <>
    <div className="head">{head}</div>
    <div className="heading">{tagline}</div>
    <div className="paragraph">{paragraph}</div> 
    </>
  )
}



export const  BasicButtons=({buttonname,buttonname2}) =>{
  return (
    <>
    
    <Stack spacing={3} direction="row" marginTop="10px">
      <Button variant="contained" size="large">{buttonname}</Button>
      <Button variant="outlined" size="large">{buttonname2}</Button>
    </Stack>
    
    </>
  );
}
