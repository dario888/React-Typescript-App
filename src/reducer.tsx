import { FETCH_DATA } from './types'
import { IAction, IState } from './Interfaces'


const reducer = (state: IState, action: IAction): IState => {
    
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                episodes: action.payload
            }
    
        default:
            return state
    }
    
}

export default reducer