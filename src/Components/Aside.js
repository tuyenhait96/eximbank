import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import MenuAside from './MenuAside';
//Data
import { menuNav, menuNavT } from '../data/dataCard';
import { Link } from 'react-router-dom';

const BounceStyle = styled.div`
    .logo-login{
        margin-top: 43px;
    }
`

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: menuNav,
            menuB: menuNavT,
            mainActive: '',
            pathActive: window.location.pathname==='/'?'/home':window.location.pathname,
        }
    }
    show(){
        console.log(this.state.mainActive)
    } 
    renderMenu() {
        return this.state.data.map((data, i ) => {
            if(i===2){
                return(
                    <li id="message">
                        <Link to='/'>
                            <span>Send or Request Money with</span>
                            <img src="image/group-12.png" alt="logo-wee" />
                        </Link>
                    </li>
                )
            }
            else{
                return <MenuAside 
                    data = {data} 
                    index = {i} 
                    onClickMainMenu = {this.onClickMainMenu.bind(this)}
                    pathActive = {this.state.pathActive}
                    isClickActive = {this.state.mainActive === data.key ? true: false}
                    />
            }
        })
    }
    onClickMainMenu(pathActive) {
        this.setState({pathActive});
    }
    render() {
        return (
            <BounceStyle>
                <div className="left-side-menu">
                    <div className="top-logo d-flex">
                        <Link to='/'>
                            <img src="image/group-15.png" alt="logo-top" />
                        </Link>
                    </div>
                    <div className="logo-login text-center">
                        <img src="image/image-1.png" alt='' />
                        <div className="img-info">
                            <h3>Nguyễn Hoàng Yến</h3>
                            <p>Last login at 12:02 PM - Oct 01, 2018</p>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <ul onClick = {this.show.bind(this)}>
                            {this.renderMenu()}
                        </ul>
                    </div>
                </div>
            </BounceStyle>
        );
    }
}

export default Aside;