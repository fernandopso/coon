import React from 'react';
import './app.css';
import Movies from './movies.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center">
          Quiz Movie
        </h1>
        <div>
          <Movies />
        </div>
      </div>
    )
  };
}

export default App;
