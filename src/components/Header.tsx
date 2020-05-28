import React, {Fragment, useContext} from 'react'
import { Context } from '../Store'



const Header = () => {
  const { favourites} = useContext(Context)
    return (
        <Fragment>
        <header className="header">
          <div>
            <h1>Rick and Morty</h1>
            <p>Pick your favorite epizode</p>
          </div>
          <div>
            Favourites: {favourites.length}
          </div>
        </header>
        </Fragment>
    )
}

export default Header
