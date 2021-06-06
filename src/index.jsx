import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Home from './pages/Home';
import GamePage from './GamePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App = () => {

  return(
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />;
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
        </Switch>
        </Router>
  

  ) 
};

render(<App />, document.querySelector('#app'));
