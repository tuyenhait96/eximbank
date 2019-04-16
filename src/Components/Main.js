import React, { Component } from 'react';
import styled from 'styled-components';
//Data
import { cardWater } from '../data/dataCard';
//Image
import banner from '../image/banner.png';

//Component
import CardAccount from './CardAccount';
import CardHelp from './CardHelp';
import Table from './Table';
import Bottom from './Bottom';
import Scroll from './Scroll';
import NavMenu from './NavMenu';

const BounceStyle = styled.div `
    .nav {
        background-image: linear-gradient(121deg, #00a1e4, #005d98);
        
    }
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
            user-select: none;
            .image {
                img{
                    width: 726px;
                    height: 170px;
                    margin-top: 20px;
                    border-radius: 5px;
                    object-fit: cover;
                }
                ${'' /* background-image:url(${img_banner});
                background-repeat:no-repeat;
                background-size:100% 100%;
                background-position:center; */}
            }
            .scroll {
                width: 726px;
                overflow: hidden;
                margin:20px 21px 0 0;
                .group-plus {
                    width: 90px;
                    height: 90px;
                    border-radius: 10px;
                    background-color: #ffffff;
                    line-height: 90px;
                    text-align: center;
                    margin-right: 20px;
                }
            }
        }
        .main-right {
            flex: 1;
            height: auto;
            padding: 40px 40px 21px 0;
            user-select: none;
            .card-water{
                border-radius: 5px;
                background-image: linear-gradient(64deg, #00cfff, #005cec, #005bec);     
                padding: 15px 0 15px 25px;
                h3{
                    text-transform: uppercase;
                    font-family: RobotoMedium;
                    font-size: 12px;
                    font-weight: 500;
                    color: #ffffff;
                }
                .date { 
                    font-family: RobotoLight;
                    font-size: 16px;
                    font-weight: 300;
                    color: #ffffff;
                    padding-top:43px;
                }
                .money {
                    font-family: LatoBold;
                    font-size: 28px;
                    font-weight: bold;
                    color: #ffffff;
                }
                .type{
                    font-family: RobotoLightItalic;
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
                    font-family: RobotoMedium;
                    font-size: 28px;
                    font-weight: 500;
                    color: #ffffff;  
                }
                .help{
                    padding-top: 8px;
                    font-family: RobotoLight;
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
                }
                input::placeholder {
                    opacity: 0.5;
                    font-family: Roboto;
                    font-size: 18px;
                    font-weight: 300;
                    color: #ffffff;
                        font-family: RobotoLight;
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
    onWheelHandler(e){
        console.log('onWheel')
        if(e.deltaY > 0) {
            e.currentTarget.scrollLeft +=30 
        }else{
            e.currentTarget.scrollLeft -=30
        }
    }
    render() {
        return (
            <BounceStyle className="l-main">
                <NavMenu service = 'Customer Survey'/>
                <div className = 'main-cover'>
                    <div className='main-top'>
                        <div className='main-left d-flex'>
                            <CardAccount />
                            <div className = 'image'>
                                <img src = {banner} alt = 'banner' />
                            </div>
                            {/* Scroll */}
                            <div className = 'scroll' onWheel = {this.onWheelHandler.bind(this)}>
                                <Scroll/>
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