import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Application extends React.Component {
  render() {
    return <div>
      <h1>Hello, ES6 and React 0.13!</h1>
      <p>
        More info <a href="https://github.com/bradleyboy/codepen-react" target="_blank">here</a>.
      </p>
    </div>;
  }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));
