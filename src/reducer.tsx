import { FETCH_DATA, ADD_FAV, REMOVE_FAV, TOGGLE } from './types'
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
                favourites: [...state.favourites, action.payload],
                toggle: true
            }

        case REMOVE_FAV:
            return {
                ...state,
                favourites: state.favourites.filter((fav: any) => fav.id !== action.payload.id )
            }
        case TOGGLE:
            return {
                ...state,
                toggle: action.payload
            }


        default:
            return state
    }
    
}

export default reducer
