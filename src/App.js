import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import Aside from './Components/Aside';
import Main from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

const BounceStyled = styled.div`
  .wrap{
      flex-wrap: nowrap !important;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <BounceStyled className="container-fluid">
          <div className="row wrap">
            <Aside/>
            <Main/>
          </div>
        </BounceStyled>
      </Router>
    );
  }
}

export default App;
