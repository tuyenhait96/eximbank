import React, { Component } from 'react';
import styled from 'styled-components';

const BounceStyled = styled.div`
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
`
class CardHelp extends Component {
    render() {
        return (
            <BounceStyled className = 'card-support'>
                <h2>{this.props.title}</h2>
                <p className = 'help'>{this.props.help}</p>
                <input type='text' placeholder ='Answer here'/>
            </BounceStyled>
        );
    }
}
export default CardHelp;