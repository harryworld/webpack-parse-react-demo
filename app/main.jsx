import './stylesheets/main.css';

import React from 'react';
import Story from './components/Story';
import Parse from 'parse';

Parse.Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');

main();

function main() {
    var app = document.createElement('div');
    document.body.appendChild(app);

    React.render(<Story />, app);
}