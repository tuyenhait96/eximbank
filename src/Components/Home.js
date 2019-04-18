import React, { Component } from 'react';
import styled from 'styled-components';

//Image
import banner from '../image/banner.png';

//Component
import CardAccount from './CardAccount';
import CardHelp from './CardHelp';
import Table from './Table';
import Bottom from './Bottom';
import Scroll from './Scroll';

//Data
import { cardWater } from '../data/dataCard';
import NavMenu from './NavMenu';

const BounceStyle = styled.div`
        background-image: linear-gradient(121deg,#00a1e4,#005d98);
        user-select: none;
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
        }
`

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: cardWater
        }
    }
    onWheelHandler(e) {
        console.log('onWheel')
        if (e.deltaY > 0) {
            e.currentTarget.scrollLeft += 30
        } else {
            e.currentTarget.scrollLeft -= 30
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
            <BounceStyle className='main-cover'>
                <NavMenu title = 'Home' service = 'Customer Survey'/>
                <div className='main-top'>
                    <div className='main-left d-flex'>
                        <CardAccount />
                        <div className='image'>
                            <img src={banner} alt='banner' />
                        </div>
                        {/* Scroll */}
                        <div className='scroll' onWheel={this.onWheelHandler.bind(this)}>
                            <Scroll />
                        </div>
                    </div>
                    <div className='main-right'>
                        {this.renderCardData()}
                        <CardHelp title='Hello' help='May I help you?' />
                    </div>
                </div>
                <div className='main-bottom'>
                    <Table />
                </div>
                <div className='bottom'>
                    <Bottom title='VIETNAM EXPORT IMPORT BANK'
                        street='8th Floor - Vincom Center, 72 Le Thanh Ton and 45A Ly Tu Trong Street, District 1, HCMC'
                        mail='ebanking@eximbank.com.vn'
                        phone='1800 1199'
                    />
                </div>
            </BounceStyle>
        );
    }
}

export default Home;