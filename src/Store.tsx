import React, {useReducer} from 'react'

import { FETCH_DATA, ADD_FAV } from './types'
import { IState, IEpisode } from './Interfaces'
import reducer from './reducer'




export const Context = React.createContext<IState | any>({})


const StoreProvider = (props: any): JSX.Element => {
    const initState: IState = {
        episodes: [],
        favourites: []
    }

    const [state, dispatch] = useReducer(reducer, initState)

    //Fetch data
    const fetchDataAction = async () => {
        const Url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
        const data = await fetch(Url)
        const dataJson = await data.json()
        dispatch({type: FETCH_DATA, payload: dataJson._embedded.episodes })
    }

    //toggle button
    const toggleFavAvtion = (episode: IEpisode): void => dispatch({type: ADD_FAV, payload: episode})

    return (
        <Context.Provider value={{
           episodes: state.episodes,
           fetchDataAction,
           toggleFavAvtion

        }}>
            {props.children}
        </Context.Provider>
    )
}

export default StoreProvider
