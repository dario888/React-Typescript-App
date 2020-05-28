import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from './types'
import { IAction, IState } from './Interfaces'



const reducer = (state: IState, action: IAction): IState => {
    
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                episodes: action.payload
            }

        case ADD_FAV:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                favourites: state.favourites.filter((fav: any) => fav.id !== action.payload.id )
            }

        default:
            return state
    }
    
}

export default reducer
