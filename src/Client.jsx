import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './Routes';

import './css/app.scss';

ReactDOM.hydrate(
  <BrowserRouter>
    <Switch>
      {Routes.map(route => (
        <Route {...route} key={route.name} />
      ))}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
