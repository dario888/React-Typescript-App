import React, {useContext} from 'react'
import { Context } from '../Store'





const FavPage = (): JSX.Element => {
    const { favourites } = useContext(Context)
    return (
        <div>
            fav page
        </div>
    )
}

export default FavPage
