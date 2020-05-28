import React ,{useContext, } from 'react';

import {Context} from '../Store'
import Button from './Button'
import { IEpisode } from '../Interfaces'


const Episodes = (): JSX.Element => {
    const {episodes,  toggleFavAvtion, favourites} = useContext(Context)
 
    
    return (
        <section className="episode-layout">
            {episodes.map((episode: IEpisode) =>
                <section className="episode-box" key={episode.name}>  
                <img src={episode?.image?.medium} alt={`Rick and Morty ${episode.name}`} />  
                    <div>{episode.name}</div>
                    <section>
                        <div>
                        Season: {episode.season} Number: {episode.number}
                        </div> 
                        <Button 
                        toggleFavAvtion={toggleFavAvtion} episode={episode} favourites={favourites}
                        />
                    </section>
                </section> 
            ) }
        </section>
    )
}

export default Episodes
