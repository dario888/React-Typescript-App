import React, {useReducer} from 'react'

import { IState } from './Interfaces'
import reducer from './reducer'


const initState: IState = {
    episodes: [],
    favourites: []
}

export const Context = React.createContext<IState | any>(initState)


const StoreProvider = (props: any): JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}

export default StoreProvider
