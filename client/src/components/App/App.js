import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageNav from '../PageNav/PageNav';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';

const App = () => {
  return (
    <div className="App">
      <PageNav/>
      <Switch>
        <Route exact path={'/'} render={() => <Home/>}/>
        <Route exact path={'/gallery'} render={() => <Gallery/>}/>
        <Route exact path={'/about'} render={() => <About/>}/>
      </Switch>
    </div>
  );
}

export default App;
