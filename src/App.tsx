import React, {Fragment, useContext, useEffect} from 'react';

import {Context} from './Store'
import { FETCH_DATA } from './types'

function App(): JSX.Element {

  const {state, dispatch} = useContext(Context)

  useEffect(()=>{
    fetchDataAction();
    //eslint-disable-next-line
  },[])

  const fetchDataAction = async () => {
    const Url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(Url)
    const dataJson = await data.json()
    dispatch({type: FETCH_DATA, payload: dataJson._embedded.episodes })
  }

  console.log(state)
  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <p>Choose your favorite epizode</p>
    </Fragment>
  );
}

export default App;
