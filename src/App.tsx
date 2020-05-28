import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import FavPage from './components/FavPage'



function App(): JSX.Element {

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
