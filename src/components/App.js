import React, { Component } from 'react';
import Movies from '../containers/movies'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Movielist</h1>
        <Movies/>
      </div>
    );
  }
}

export default App;
