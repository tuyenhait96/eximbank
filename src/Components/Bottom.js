import React, { Component } from 'react';
import styled from 'styled-components';

const BounceStyle = styled.div`
    display: flex;
    padding: 30px 40px 19px 40px;
    user-select:none;
    .address, .contact, .center, .right{
        flex: 1;
    }
    .address, .center, .right{
        opacity: 0.8;
        color: #ffffff;
        height: fit-content;
        line-height: 40px;
        h1, .mail{
            margin: 0;
            font-size: 12px;
            font-weight: 500;
            line-height: 1.67;
        }
        h1, .phone{
            font-family: RobotoMedium;
        }
        .mail, p{
            font-family: RobotoLight;
        }
        p, .phone, .copy{
            font-size: 12px;
            font-weight: 300;
            line-height: 1.67;
        }
    }
    .contact {
        display: flex;
        .right{
            text-align: right;
            font-family: RobotoLight;
        }
    }
`

class Bottom extends Component {
    render() {
        return (
            <BounceStyle>
                <div className = 'address'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.street}</p>
                </div>
                <div className = 'contact'>
                    <div className = 'center'>
                        <p className = 'mail'>{this.props.mail}</p>
                        <p className = 'phone'>{this.props.phone}</p>
                    </div>
                    <div className = 'right'>
                        <p className = 'copy'>
                            Copyright © 2018 Eximbank. <br/>
                            All Rights Reserved.
                        </p>
                    </div>
                </div>
            </BounceStyle>
        );
    }
}

export default Bottom;