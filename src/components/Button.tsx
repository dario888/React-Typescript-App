import React from 'react'
import { IButton, IEpisode } from '../Interfaces'



const Button = ({toggleFavAvtion, episode, favourites}: IButton, ):JSX.Element => {
  
  return (
    <button onClick={()=>toggleFavAvtion(episode) }>
      {favourites.find((fav: IEpisode) => fav.id === episode.id ) ? 'UNFAV' : 'FAV'}
    </button>
  )

}

export default Button
