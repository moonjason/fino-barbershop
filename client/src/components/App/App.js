import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageNav from '../PageNav/PageNav';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';

// font awesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'

library.add(fab);

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
