import React, {Fragment, useContext} from 'react'
import { Context } from '../Store'
import {Link} from 'react-router-dom'



const Header = () => {
  const { favourites } = useContext(Context)

    return (
        <Fragment>
        <header className="header">
          <div>
            <h1>Rick and Morty</h1>
            <p>Pick your favorite epizode</p>
          </div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/faves'>Favourites: {favourites.length}</Link>
          </div>
        </header>
        </Fragment>
    )
}

export default Header
