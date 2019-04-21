import React, { Component } from 'react';
import styled from 'styled-components';
import ic_more from '../../../image/ic-more.png'
const BounceStyled = styled.div`
    .top{
        position: relative;
        padding: 20px 20px 20px 44px;
        display: flex;
        box-shadow: inset 0 -0.5px 0 0 #d0d4da;
        background-color: rgba(255, 255, 255, 0.9);
        position: fixed;
        min-width: 560px;
        height: 90px;
        .circle-active{
            width: 16px;
            height: 16px;
            border-radius: 50%;
            position: absolute;
            border: 4px solid #ffffff;
        }
        img {
            width: 46px;
            height: 46px;
            border-radius: 50%;
        }
        .content {
            padding-left: 15px;
            h1{
                margin: 0;
                font-family: RobotoMedium;
                font-size: 18px;
                font-weight: 500;
                line-height: 1.22;
                color: #001654;
            }
            .detail {
                display: flex;
                p{
                    opacity: 0.5;
                    font-family: RobotoLight;
                    font-size: 12px;
                    font-weight: 300;
                    line-height: 1.83;
                    color: #001654;
                }
                .circle{
                    width: 4px;
                    height: 4px;
                    opacity: 0.5;
                    background-color: #001654;
                    border-radius: 50%;
                    margin: 9px 8px 0 10px;
                }
            }
            img{
                width: 5px;
                height: 21.6px;
                border-radius: 0;
                position: absolute;
                top: 43px;
                right: 20.3px;
                cursor: pointer;
            }
        }
    }
    .center{
        background: blue;
        height: 20px
    }
    .bottom {
        background: green;
        height: 20px
    }
`

class MessageChat extends Component {

    constructor(props){
        super(props)
        this.state={
            userSelected:this.props.userSelected
        }
    }

    // tu dong lay data moi khi refresh
    componentWillReceiveProps(nextProps){
        if(nextProps){
            console.log(nextProps.userSelected)
            this.setState({
                userSelected:nextProps.userSelected
            })
        }
    }
    render() {
        return (
            <BounceStyled>
                <div className = 'top'>
                     <div className = 'image'>
                        <div className = 'circle-active' style = {{backgroundColor: this.state.userSelected.isActive === true ? '#34d859' : '#d0d4da'}}>
                        </div>
                        <img src = {this.state.userSelected.image} alt= {this.state.userSelected.name} />
                    </div>
                    <div className = 'content'>
                        <h1>{this.state.userSelected.name}</h1>
                        <div className = 'detail'>
                            <p>{this.state.userSelected.username}</p>
                            <div className = 'circle'></div>
                            <p className = 'time'>{this.state.userSelected.timeActive}</p>
                        </div>
                        <img src = {ic_more} alt= 'ic-more' />
                    </div>
                    
                </div>
                <div className = 'center'></div>
                <div className = 'bottom'></div>
            </BounceStyled>
        );
    }
}

export default MessageChat;