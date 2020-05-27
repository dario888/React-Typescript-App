import React from 'react'
import { IEpisodePorps } from '../Interfaces'


const Episode = (props: IEpisodePorps):JSX.Element => {
    const { episodeImage, episodeName, episodeNumber, episodeSeason } = props;
    // console.log(episodeImage + ' image')

    return (
        <section className="episode-box">
        <img src={episodeImage} alt={`Ric and Mory ${episodeName}`} /> 
            <div>{episodeName}</div>
            <section>
                Season: {episodeSeason} Number: {episodeNumber}
            </section>
        </section>
    )
}

export default Episode
