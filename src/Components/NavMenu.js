import React, { Component } from 'react';
import styled from 'styled-components';

const BounceStyled = styled.div`
    .nav-left {
        flex: 1;
        display: flex;
        .bg-active{
            display: flex;
            align-items: center;
            width: 195px;
            height: 60px;
            background: rgba(255, 255, 255, 0.35);
        }
        .arrow-right {
            width: 0;
            height: 0;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
            border-left: 30px solid rgba(255,255,255,0.35);
        }
        i{
            color: #ffffff; 
            font-size: 18px;
            text-indent: 60px
        }
        span{ 
            font-family: RobotoRegular;
            font-size: 16px;
            color: #ffffff; 
            margin-left: 25.7px;
        }
    }
    .nav-right{
        display: flex;
        flex: 1;
        color: #ffffff;
        user-select: none;
        .service{
            display: flex;
            flex:2;
            justify-content: flex-end;
            align-items: center;
            p{
                font-family: RobotoLight;
                font-size: 12px;
                font-weight: 300;
                padding-left: 10px;
                cursor: pointer;
            }
        }
        .mail{
            display: flex;
            flex:1;
            justify-content: center;
            align-items: center;
            i{
                padding-right: 20px;
            }
            p{
                padding-left: 20px;
                font-family: RobotoMedium;
                font-size: 12px;
                font-weight: 500;
                letter-spacing: 0.5px;
                cursor: pointer;
            }
            .notification-icon{
                position: relative;
                cursor: pointer;
                .circle-notification {
                    position: absolute;
                    bottom: -5px;
                    left: 8px;
                    height: 14px;
                    width: 14px;
                    border-radius: 50%;
                    background-color: #D93D3D;            
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    .number-notification {
                        font-family: RobotoMedium;            
                        font-weight: 500;
                        font-size: 10px; 
                        color: #ffffff;
                    }            
                }
            }
        }
    }
`
const limitNotification = 2 
class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notification: [
                'A nhan tin cho ban',
            ]
        }
    }
    
    render() {
        let strNumber = ''
        if(this.state.notification.length > limitNotification) {
            strNumber = limitNotification + '+'
        }else{
            strNumber = this.state.notification.length
        }
        return (
            <BounceStyled className='nav'>
                <div className='nav-left'>
                    <div className = 'bg-active'>
                        <i className="fa fa-home"></i>
                        <span>{this.props.title}</span>
                    </div>
                    <div className = 'arrow-right'></div>
                </div>
                <div className = 'nav-right'>
                    <div className = 'service'>
                        <i className = 'fa fa-address-card-o'></i>
                        <p>{this.props.service}</p>
                    </div>
                    <div className= 'mail'>
                        <div className = 'notification-icon'>
                            <i className = 'fa fa-envelope'></i> |
                            {
                                this.state.notification.length > 0 &&
                                <div className = 'circle-notification'>
                                    <div className = 'number-notification'>{strNumber}</div>
                                </div>
                            }
                        </div>
                        <p>EN</p>
                    </div>
                </div>
            </BounceStyled>
        );
    }
}

export default NavMenu;