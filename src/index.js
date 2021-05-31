import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './pages/App';
import Animaux from './pages/Animaux';
import Animal from './pages/Animal';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/animaux'>Animaux</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path='/animaux/:animal'>
            <Animal />
          </Route>
          <Route path="/animaux/">
            <Animaux />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
