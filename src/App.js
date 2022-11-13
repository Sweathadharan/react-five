import React, { Component } from 'react';
import Forms from './forms';
import Appe from './Toggle';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Forms label="will you recommend our cafe" />
        <Appe />
      </React.Fragment>
    );
  }
}
export default App;
