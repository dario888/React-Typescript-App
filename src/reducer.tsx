import { FETCH_DATA, ADD_FAV } from './types'
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


        default:
            return state
    }
    
}

export default reducer
