import React  from 'react';

import Episode from './Episode'
import { IEpisode } from '../Interfaces'
// import { IEpisodesPorps } from '../Interfaces'





const Episodes = ({episodes}: any): JSX.Element => {
   console.log(episodes.image.medium)
    return (
        <section className="episode-layout">
            {episodes.map((episode: IEpisode) => 
                <Episode key={episode.id} 
                episodeName={episode.name}
                episodeImage={episode.image.medium}
                episodeNumber={episode.number}
                episodeSeason={episode.season}
             />)}
        </section>
    )
}

export default Episodes
