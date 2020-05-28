import React, {useContext} from 'react'
import { Context } from '../Store'
import { IEpisode } from '../Interfaces'
import Button from './Button'




const FavPage = (): JSX.Element => {
    const { favourites, toggleFavAvtion } = useContext(Context)

    return (
        <section className="episode-layout">         
           {favourites.map((episode: IEpisode) =>
                <section className="episode-box" key={episode.name}>
                {/* <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />  */}
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
            )}
        </section>
    )
}

export default FavPage
