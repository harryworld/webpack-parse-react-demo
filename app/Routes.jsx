import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Login from './components/Login';
import App from './components/App';
import Note from './components/Note';
import StoryList from './components/StoryList';
import Story from './components/Story';

module.exports = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Note} />
    <Route path='/login' handler={Login} />
    <Route path='/stories' handler={StoryList} />
    <Route path='/stories/:id' handler={Story} />
  </Route>
);