import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Webpack ParseReact Demo</h1>
        <Link to='/' className='btn btn-default'>Home</Link>
        <Link to='/login' className='btn btn-default'>Login</Link>
        <Link to='/stories' className='btn btn-default'>Stories</Link>
        <RouteHandler />
      </div>
    );
  }
}