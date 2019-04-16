import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import MenuAside from './MenuAside';
//Data
import { menuNav } from '../data/dataCard';

const BounceStyle = styled.div`
    .logo-login{
        margin-top: 43px;
    }
`

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: menuNav
        }
    }
    
    renderData() {
        return this.state.data.map((data, i ) => {
            return <MenuAside data = {data} key = {i} />
        })
    }
    render() {
        return (
            <BounceStyle>
                <div className="left-side-menu">
                    <div className="top-logo d-flex">
                        <a href='/'>
                            <img src="image/group-15.png" alt="logo-top" />
                        </a>
                    </div>
                    <div className="logo-login text-center">
                        <img src="image/image-1.png" alt='' />
                        <div className="img-info">
                            <h3>Nguyễn Hoàng Yến</h3>
                            <p>Last login at 12:02 PM - Oct 01, 2018</p>
                        </div>
                    </div>
                    <div className="menu-wrapper">
                        <ul>
                            {this.renderData()}
                            <li id="message">
                                <a href='/'>
                                    <span>Send or Request Money with</span>
                                    <img src="image/group-12.png" alt="logo-wee" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </BounceStyle>
        );
    }
}

export default Aside;