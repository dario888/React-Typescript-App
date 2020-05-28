import React, {Fragment, useContext} from 'react'
import { Context } from '../Store'
import {Link} from 'react-router-dom'



const Header = () => {
  const { favourites } = useContext(Context)

    return (
        <Fragment>
        <header className="header">
          <div className="titles">
            <h1>Rick and Morty</h1>
            <p>Pick your favorite epizode</p>
          </div>
          <div className="links">
            <Link to='/' className="link1">Home</Link>          
            <Link to='/faves' className="link2">Favourites: {favourites.length}</Link>
          </div>
        </header>
        </Fragment>
    )
}

export default Header
