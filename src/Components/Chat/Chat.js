import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import NavMenu from '../NavMenu';
import Bottom from '../Bottom';
import SortAddNews from './Left/SortAddNews';
import Message from './Left/Message';
import MessageChat from './Center/MessageChat';
//Data
import dataChat from '../../data/dataChat';

const BounceStyle = styled.div`
    min-width: 100%;
    user-select: none;
    position: relative;
    .bottom {
        background-image: linear-gradient(121deg, #00a1e4, #005d98);
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .chat {
        display: flex;
        height: 100%;
        .left{
            width: 360px;
            padding: 17px 20px 0 20px;
            .search{
                position: relative;
                i{
                    position: absolute;
                    top: 12px;
                    left: 16px;
                    color: #001654;
                    opacity: 0.3
                }
            }
            input[type = 'text'] {
                width: 320px;
                height: 40px;
                border-radius: 24px;
                background-color: #eff1f5;
                border: none;
                outline: none;
                text-indent: 50px;
                font-family: RobotoLight;
                font-size: 14px;
                font-weight: 300;
                color: #001654;

            }
        }
        .center{
            flex-grow: 2;
            position: relative;
            box-shadow: inset 0.5px 0 0 0 #d0d4da;
        }
        .right{
            width: 260px;
            background: chartreuse
        }
    }
`
class Money extends Component {
    constructor(props){
        super(props)
        this.state={
            userSelected:dataChat[0],
            messages: []
        }
    }
    selectUser(user){
        console.log('user', user)
        this.setState({
            userSelected:user
        })
    }

    // data la du lieu Message Chat day ra
    onSubmit(data) {
        console.log('data', data)
        // let { message } = this.state
        // let  message  = this.state.message
        let newMessage={
            timeCreate:'11:20 PM',
            text:data,
            type:1
        }
        let userSelected = this.state.userSelected;
        userSelected.listChat.push(newMessage)
        // message.push(data)
        this.setState({
            userSelected
        }); 
    }
    render() {
        return (
            <BounceStyle className='main-cover'>
                <NavMenu title= 'Chat' service = 'Customer Survey'/>
                <div className = 'chat'>
                    <div className = 'left'>
                        <div className = 'search'>
                            <i className = 'fa fa-search'></i>
                            <input type = 'text' placeholder = 'Search'/>
                        </div>
                        {/* Sort Add News */}
                        <SortAddNews/>
                        {/* Message */}
                        {/* get data tu con ra cha */}
                        <Message selectUser={this.selectUser.bind(this)}
                            dataChat={dataChat}
                            userSelected={this.state.userSelected.name} 
                        /> 
                    </div>
                    <div className = 'center'>
                        {/* receive data tu Message */}
                        <MessageChat 
                            dataChat={dataChat}
                            onSubmit = {this.onSubmit.bind(this)}
                            userSelected={this.state.userSelected}/>
                    </div>
                    <div className = 'right'>
                        <h1>DRAG MONEY TO SEND</h1>
                    </div>
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

export default Money;