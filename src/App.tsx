import React, {Fragment, useContext} from 'react';

import {Context} from './Store'


function App(): JSX.Element {

  const {state, dispatch} = useContext(Context)

  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <p>Choose your favorite epizode</p>
    </Fragment>
  );
}

export default App;
