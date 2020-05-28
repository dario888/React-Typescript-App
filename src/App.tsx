import React, {Fragment, Suspense} from 'react';

// import Episodes from './components/Episodes'
import Header from './components/Header'

const Episodes = React.lazy<any>(()=>import('./components/Episodes'))


function App(): JSX.Element {

  return (
    <Fragment>
    <Header/>
    <Suspense fallback={<div>LOADING...</div>}>
      <Episodes />
    </Suspense>
    </Fragment>
  );
}

export default App;
