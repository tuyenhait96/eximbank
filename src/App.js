import React, { Component } from 'react';
import Aside from './Components/Aside';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Aside/>
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
