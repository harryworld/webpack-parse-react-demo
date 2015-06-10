import './stylesheets/main.css';

import React from 'react';
import Parse from 'parse';
import Router from 'react-router';
import Routes from './Routes';

Parse.Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});