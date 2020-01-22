import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={'/'} render={() => <Home/>}/>
        <Route exact path={'/gallery'} render={() => <Gallery/>}/>
        <Route exact path={'/about'} render={() => <About/>}/>
      </Switch>
    </div>
  );
}

export default App;
