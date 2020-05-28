import React, {Fragment, useEffect, useContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import FavPage from './components/FavPage'
import {Context} from './Store'



function App(): JSX.Element {
  const {episodes, fetchDataAction} = useContext(Context)
  
  useEffect(()=>{
    if(episodes.length === 0){
      fetchDataAction();
    }
  //eslint-disable-next-line
  }, [])

  
  return (
    <BrowserRouter>
    <Fragment>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/faves' component={FavPage} />
    </Switch>
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
