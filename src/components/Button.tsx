import React from 'react'
import { IButton } from '../Interfaces'



const Button = ({toggleFavAvtion, episode}: IButton, ):JSX.Element => {
  
  return (
    <button onClick={()=>toggleFavAvtion(episode) }>FAV</button>
  )
  
}

export default Button
