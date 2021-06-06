import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Home from './pages/Home';

const App = () => {
  return <Home />;
};

render(<App />, document.querySelector('#app'));
