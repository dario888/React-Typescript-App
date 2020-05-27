import React, {Fragment, useContext, useEffect} from 'react';

import {Context} from './Store'
import { FETCH_DATA } from './types'
import Episodes from './components/Episodes'




function App(): JSX.Element {
  const {state, dispatch} = useContext(Context)

  useEffect(()=>{
    state.episodes.length === 0 && fetchDataAction();
    //eslint-disable-next-line
  },[])

  console.log(state)

  const fetchDataAction = async () => {
    const Url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(Url)
    const dataJson = await data.json()
    dispatch({type: FETCH_DATA, payload: dataJson._embedded.episodes })
  }
 


  return (
    <Fragment>
      <header className="header">
      <h1>Rick and Morty</h1>
      <p>Pick your favorite epizode</p>
      </header>
      <Episodes episodes={state.episodes}/>
    </Fragment>
  );
}

export default App;
