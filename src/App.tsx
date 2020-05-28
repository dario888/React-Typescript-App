import React, {Fragment} from 'react';

import Episodes from './components/Episodes'
import Header from './components/Header'




function App(): JSX.Element {

  return (
    <Fragment>
    <Header/>
    <Episodes />
    </Fragment>
  );
}

export default App;
