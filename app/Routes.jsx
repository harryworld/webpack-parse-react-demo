import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Login from './components/Login';
import App from './components/App';
import Note from './components/Note';
import Story from './components/Story';

module.exports = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Note} />
    <Route path='/login' handler={Login} />
    <Route path='/stories' handler={Story} />
  </Route>
);