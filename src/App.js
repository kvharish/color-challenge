import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Challenge from './containers/challenge/challenge';
import Home from './components/home/home';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/challenge/:code/:difficulty" render={props => <Challenge {...props} routeName="challenge" />} />
      <Route path="/" render={props => <Home {...props} routeName="home" />} />
    </Switch>
  </div>
);

export default App;
