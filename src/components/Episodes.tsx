import React ,{useContext, useEffect} from 'react';

import {Context} from '../Store'
import Button from './Button'
import { IEpisode } from '../Interfaces'
// import { IEpisodesPorps } from '../Interfaces'





const Episodes = (): JSX.Element => {
    const {episodes, fetchDataAction, toggleFavAvtion} = useContext(Context)

    useEffect(()=>{
      episodes.length === 0 && fetchDataAction();
      //eslint-disable-next-line
    })
  
    console.log(episodes)

    return (
        <section className="episode-layout">
            {episodes.map((episode: IEpisode) =>
                <section className="episode-box" key={episode.name}>
                {/* <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />  */}
                    <div>{episode.name}</div>
                    <section>
                        <div>
                        Season: {episode.season} Number: {episode.number}
                        </div> 
                    <Button  toggleFavAvtion={toggleFavAvtion} episode={episode} />
                    </section>
                </section>
            )}
        </section>
    )
}

export default Episodes
