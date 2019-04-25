import React, { Component } from 'react';
import styled from 'styled-components';
import ic_more from '../../../image/ic-more.png'

const scroll = document.querySelector('#scroll')
const anchor = document.querySelector('#anchor')

const BounceStyled = styled.div`
    .top{
        position: relative;
        padding: 20px 20px 20px 44px;
        display: flex;
        box-shadow: inset 0 -0.5px 0 0 #d0d4da;
        background-color: rgba(255, 255, 255, 0.9);
        ${'' /* position: fixed; */}
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
        padding: 0 40px;
        height: 559px;
        overflow: auto;
        ::-webkit-scrollbar-track {
            background:none;
        }
        ::-webkit-scrollbar {
            width: 0;
        }
        .text-chat{
            width: fit-content;
            border-radius: 10px;
            box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
            background-color: #008bcc;
            float: right;
            clear: both;
            p{
                padding: 12px 31px 15px 33px;
                font-family: RobotoLight;
                font-size: 14px;
                font-weight: 300;
                line-height: 1.29;
                color: #ffffff;
            }
        }
        .detail-chat{
            height: 77px;
            float: right;
            clear: both;
            text-align: right;
            display: flex;
            flex-direction: column;
            span {
                opacity: 0.5;
                font-family: RobotoLight;
                font-size: 10px;
                font-weight: 300;
                line-height: 1.2;
                color: #001654;
                padding-top: 6px;
            }
        }
    }
    .chat-message {
        width: 100%;
        background: #ffffff !important;
        padding: 12px 21px 12px 39px;
        box-shadow: 0 -8px 30px 0 rgba(0, 0, 0, 0.05);
        padding: 12px 21px 12px 39px; 
        position: absolute;
        bottom: 148px;
        i.fa-paperclip {
            transform: rotateX(180deg);
            position: absolute;
            top: 26px;
            left: 59px;
            color: #181c2f;
            opacity: 0.3;
            font-size: 22px;
            cursor: pointer;
        }
        
        input[type='text'] {
            width: 100%;
            height: 48px;
            border-radius: 24px;
            background-color: #eff1f5;
            border: none;
            outline: none; 
            padding: 14px 92px 14px 40px;
            text-indent: 20px;
            ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                opacity: 0.3;
                font-family: RobotoLight;
                font-size: 16px;
                font-weight: 300;
                line-height: 1.38;
                color: #181c2f;
                text-indent: 20px;
            }
            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                opacity: 0.3;
                font-family: RobotoLight;
                font-size: 16px;
                font-weight: 300;
                line-height: 1.38;
                color: #181c2f;
                text-indent: 20px;
            }
            ::-ms-input-placeholder { /* Microsoft Edge */
                opacity: 0.3;
                font-family: RobotoLight;
                font-size: 16px;
                font-weight: 300;
                line-height: 1.38;
                color: #181c2f;
                text-indent: 20px;
            }
        }
        .send{
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background-image: linear-gradient(28deg, #f98153, #f45112);
            display: flex;
            justify-content: center;
            align-items:center;
            color: #ffffff !important;
            position: absolute;
            right: 20px;
            top: 10px;
            cursor: pointer;
            i {
                position: initial !important;
                color: #ffffff ;
                opacity: 1;
                transform: rotateX(0) !important;
            }
        }
        .group-smile{
            position: absolute;
            top: 27px;
            right: 94px;
            cursor: pointer;
            i{
                font-size: 20px;
                opacity: 0.3;
                color: #292f4c;
            }
        }
    }
`

class MessageChat extends Component {
    constructor(props){
        super(props)
        this.state={
            userSelected:this.props.userSelected,
            // data: this.props.dataChat,
            txtChat: '',
        }
    }

    onWheelHandle(e) {
        console.log('deltaY', e.deltaY)
        console.log('scrollTop', e.currentTarget.scrollTop)
        console.log('scrollHeight', e.currentTarget.scrollHeight)
        console.log('clientHeight', e.currentTarget.scrollHeight - e.currentTarget.clientHeight)
        let a = document.getElementById('detail-chat')
        let b = document.getElementById('detail')
        if(e.currentTarget.scrollHeight > 559) {
            // a.style.backgroundColor = 'red'
            // console.log(a)
            e.currentTarget.scrollTop = e.currentTarget.scrollHeight;

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

    onHandleChange(e) {
        let name = e.target.name
        let value = e.target.value
        console.log('name', e.target.value)
        this.setState({
            [name]: value
        });
    }
    onKeyUpHandle(e){
        console.log(e)
        if(e.keyCode===13){
            this.onSendMessage()
        }
    }

    onSendMessage(){
        this.onSubmit()
        this.onClear()
    }

    onSubmit() {
        
        console.log('submit')
        this.props.onSubmit(this.state.txtChat)
    }

    onClear() {
        console.log('clear')
        this.setState({ txtChat: ''});
    }
    renderListChat(){
        return this.state.userSelected.listChat.map((item, i) => {
            return (
                <div className = 'detail-chat' id = 'anchor' key ={i}>
                    <div className= 'text-chat'>
                        <p>{item.text}</p>
                    </div>
                    <span>{item.timeCreate}</span>
                </div>
            )
        })
    }

    appendChild() {
        let msg = document.createElement('div')
        msg.className = 'message'
        msg.innerText = this.state.userSelected.listChat.text
        scroll.insertBefore(msg, anchor);
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
                    {/* Chat Message */}
                <div className = 'center' onWheel = {this.onWheelHandle.bind(this)}  id= 'scroll'>
                    {this.renderListChat()}
                </div>
                <div className = 'chat-message'>
                    <i className = 'fa fa-paperclip'></i>
                    <input type = 'text' placeholder = 'Type something...' 
                        onChange = {this.onHandleChange.bind(this)}
                        onKeyUp={this.onKeyUpHandle.bind(this)}
                        value = {this.state.txtChat}
                        name = 'txtChat'
                    />
                    <div className= 'group-smile'><i className ='fa fa-smile-o'></i></div>
                    <div className = 'send' onClick = {this.onSendMessage.bind(this)}>
                        <i className = 'fa  fa-paper-plane'></i>
                    </div>
                </div>
            </BounceStyled>
        );
    }
}

export default MessageChat;