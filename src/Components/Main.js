import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect} from 'react-router-dom';

//Component
import Home from './Home';
import Chat from './Chat/Chat';

const BounceStyle = styled.div `
    width: 100%;
    .nav {
        background-image: linear-gradient(121deg, #00a1e4, #005d98);
        min-width: 1180px;
    }
    h2{
        padding: 0;
        margin: 0;
    }
    .main-screen-container{
            position:inherit;
            left:0;
            display:flex;
            flex:1;
            transition:left 0.2s;
        }
`

class Main extends Component {
    render() {
        return (
            <BounceStyle className="l-main">
                <Switch>
                    {/* Home */}                
                    <Route exact path = '/home' render = {()=>
                        <div className='main-screen-container'>
                            <Home/>
                        </div>
                    }>
                    </Route>
                    <Route exact path = '/chat' render = {()=>
                        <div className='main-screen-container'>
                            <Chat dataUser = {this.props.dataUser}
                                callbackUser = {this.props.callbackUser}
                            />
                        </div>
                    }>
                    </Route>
                    <Redirect from='/' to='/home'/>
                </Switch>
            </BounceStyle>
        )
    }
}
export default Main;