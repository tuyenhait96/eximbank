import React, { Component } from 'react';
import CardAccount from './CardAccount';
import styled from 'styled-components';
import { cardWater } from '../data/dataCard';
import banner from '../banner.png';
import CardHelp from './CardHelp';
import Table from './Table';
import Bottom from './Bottom';

const BounceStyle = styled.div `
    h2{
        padding: 0;
        margin: 0;
    }
    .main-cover{
        background-image: linear-gradient(121deg,#00a1e4,#005d98);
        .main-top{
            display: flex;
        }
        .main-left{
            .image {
                padding-top: 20px;
                img{
                    width: 726px;
                    height: 170px;
                }
            }
        }
        .main-right {
            flex: 1;
            height: auto;
            padding: 40px 40px 21px 0;
            .card-water{

                border-radius: 5px;
                background-image: linear-gradient(64deg, #00cfff, #005cec, #005bec);     
                padding: 15px 0 15px 25px;
                h3{
                    text-transform: uppercase;
                    font-family: Roboto;
                    font-size: 12px;
                    font-weight: 500;
                    color: #ffffff;
                }
                .date { 
                    font-family: Roboto;
                    font-size: 16px;
                    font-weight: 300;
                    color: #ffffff;
                    padding-top:43px;
                }
                .money {
                    font-family: Lato;
                    font-size: 28px;
                    font-weight: bold;
                    color: #ffffff;
                }
                .type{
                    font-family: Roboto;
                    font-size: 16px;
                    font-weight: 300;
                    font-style: italic;
                    color: #ffffff;
                    padding-top: 8px;
                }
            }
            .card-support {
                margin-top: 20px;
                padding: 27px 20px 20px 27px;
                border-radius: 5px;
                background-image: linear-gradient(to top, #000f2f, #00385c);
                h2{
                    font-family: Roboto;
                    font-size: 28px;
                    font-weight: 500;
                    color: #ffffff;  
                }
                .help{
                    padding-top: 8px;
                    font-family: Roboto;
                    font-size: 28px;
                    font-weight: 300;
                    color: #ffffff;
                }
                input[type='text'] {
                    margin-top: 38px;
                    width: 100%;
                    line-height: 45px;
                    border-radius: 22.5px;
                    background-color: rgba(255,255,255,0.1);
                    text-indent: 28px;
                    outline: none;
                    border: 0;
                    &:focus{
                    }
                }
                input::placeholder {
                    opacity: 0.5;
                    font-family: Roboto;
                    font-size: 18px;
                    font-weight: 300;
                    color: #ffffff;
                }   
                input[placeholder]{
                    color: #ffffff !important;
                }
            }
        }
    }

`

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: cardWater
        }
    }
    renderCardData() {
        return this.state.data.map((item, i)=> {
            return(
                <div className = 'card-water' data = {item} key = {i}>
                    <h3>{item.title}</h3>
                    <p className = 'date'>{item.date}</p>
                    <p className = 'money'>{item.money}</p>
                    <p className = 'type'>{item.type}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <BounceStyle className="l-main">
                <div className='nav'>
                    <div className='nav-left'>
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </div>
                </div>
                <div className = 'main-cover'>
                    <div className='main-top'>
                        <div className='main-left d-flex'>
                            <CardAccount />
                            <div className = 'image'>
                                <img src = {banner} alt = 'banner'/>
                            </div>
                        </div>
                        <div className='main-right'>
                            {this.renderCardData()}
                            <CardHelp title = 'Hello' help = 'May I help you?'/>
                        </div>
                    </div>
                    <div className='main-bottom'>
                        <Table/>
                    </div>
                    <div className = 'bottom'>
                        <Bottom title = 'VIETNAM EXPORT IMPORT BANK'
                            street = '8th Floor - Vincom Center, 72 Le Thanh Ton and 45A Ly Tu Trong Street, District 1, HCMC'
                            mail = 'ebanking@eximbank.com.vn'
                            phone = '1800 1199'
                        />
                    </div>
                </div>
            </BounceStyle>
        )
    }
}
export default Main;