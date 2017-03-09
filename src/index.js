import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Application extends React.Component {
  render() {
    return <div>
      <h1>Hello sach, ES6 and React 0.13!</h1>
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
