import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import Aside from './Components/Aside';
import Main from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import dataChat from './data/dataChat';

const BounceStyled = styled.div`
  .wrap{
      flex-wrap: nowrap !important;
  }
`
// App -> Main -> Chat -> Message -> Message Chat
class App extends Component {
  
  listUser = {
    dataUser: dataChat
  }
  //
  state = {
    userSelect: this.listUser.dataUser[0]
  }
  // receive index, set index
  callbackUser(i) {
    this.setState({
      userSelect:this.listUser.dataUser[i]
    });
  }
  render() {
    return (
      <Router>
        <BounceStyled className="container-fluid">
          <div className="row wrap">
            <Aside/>
            <Main dataUser = {this.listUser.dataUser}
                  callbackUser = {this.callbackUser.bind(this)}
            />
          </div>
        </BounceStyled>
      </Router>
    );
  }
}

export default App;
