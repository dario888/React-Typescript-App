import React from 'react'
import { IButton } from '../Interfaces'



const Button = ({toggleFavAvtion, episode, toggle}: IButton, ):JSX.Element => {
  
  return (
    <button onClick={()=>toggleFavAvtion(episode) }>
      {toggle ? 'UNFAV' : 'FAV'}
    </button>
  )

}

export default Button
