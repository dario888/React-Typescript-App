import React, {Fragment} from 'react';

import Episodes from './components/Episodes'




function App(): JSX.Element {

  return (
    <Fragment>
      <header className="header">
      <h1>Rick and Morty</h1>
      <p>Pick your favorite epizode</p>
      </header>
      <Episodes />
    </Fragment>
  );
}

export default App;
