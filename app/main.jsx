import './stylesheets/main.css';

import React from 'react';
import App from './components/App';
import Parse from 'parse';

Parse.Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');

main();

function main() {
    var app = document.createElement('div');
    document.body.appendChild(app);

    React.render(<App />, app);
}