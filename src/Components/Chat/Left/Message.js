import React, { Component } from 'react';
import styled from 'styled-components';
//Data

const BounceStyled = styled.div`
    ${'' /* background-image: linear-gradient(76deg, #f98153, #f45112); */}
    display: flex;
    border-radius: 5px;
    padding: 19px 15px 15px 15px;
    margin-bottom: 15px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    .image{
        position: relative;
        .circle-active{
            width: 16px;
            height: 16px;
            border-radius: 50%;
            ${'' /* background-color: #34d859; */}
            position: absolute;
            border: 4px solid #f98153 ;
        }
        img{
            width: 46px;
            height: 46px;
            border-radius: 50%;
        }
    }
    .content{
        flex: 2;
        padding-left: 10px;
        h1{
            font-family: RobotoMedium;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.38;
            ${'' /* color: #ffffff; */}
            margin: 0;
        }
        p{
            font-family: RobotoLight;
            font-size: 12px;
            font-weight: 300;
            line-height: 1.83;
            color: #ffffff;
        }
    }
    .time{
        opacity: 0.5;
        font-family: RobotoLight;
        font-size: 12px;
        font-weight: 300;
        text-align: right;
        color: #ffffff;
    }
`

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.dataChat,
            isShow: false
        }
    }
    
    onShowMessage(user) {
        // this.setState({
        //     isShow: true
        // });
        this.props.selectUser(user)
    }
    renderChat() {
        return this.state.data.map((item, i) => {
            return(
                <BounceStyled onClick = {this.onShowMessage.bind(this,item)} style = {{backgroundImage: item.isShow === true ? 'linear-gradient(76deg, #f98153, #f45112)' : '' }}>
                    <div className = 'image' key = {i} dataMessage ={item}>
                        <div className = 'circle-active' 
                            style = {{backgroundColor: item.isActive === true ? '#34d859' : '#d0d4da' }}>
                        </div>
                        <img src = {item.image} alt = '' />
                    </div>
                    <div className = 'content'>
                        <h1 style = {{color: item.iShow === true ? '#ffffff' : '#001654'}}>{item.name}</h1>
                        <p style = {{color: item.iShow === true ? '#ffffff' : '#181c2f'}}>{item.content}</p>
                    </div>
                    <p className = 'time' style = {{color: item.iShow === true ? '#ffffff' : '#001654'}} >{item.time}</p>
                </BounceStyled>
            )
        })
    }
    render() {
        return (
            <div className = 'mt-15'>
                {this.renderChat()}
           
            </div>
        );
    }
}

export default Message;