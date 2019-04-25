import React, { Component } from 'react';
import styled from 'styled-components';

import image01 from '../../../image/1.png';

const InformDetailStyled = styled.div`
    text-align: center;
    background: #ffffff;
    .group-image{
        position: relative;
        padding-top: 19px;
        background: #ffffff;
        .circle-active {
            width: 32px;
            height: 32px;
            background: #ffffff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 19px;
            left: 75px;
            .circle{
                width: 16px;
                height: 16px;
                ${'' /* background-color: #34d859; */}
                border-radius: 50%;
            }
        }
        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
        p.name{
            font-family: RobotoMedium;
            font-size: 18px;
            font-weight: 500;
            line-height: 1.22;
            color: #001654;
            
        }
        p.user-light{
            opacity: 0.5;
            font-family: RobotoLight;
            font-size: 14px;
            font-weight: 300;
            color: #001654;
        }
    }
    .acc-id{
        display: flex;
        justify-content: space-around;
        padding: 21px 0 5px 0;
        span.acc{
            opacity: 0.4;
            font-family: RobotoLight;
            font-size: 14px;
            font-weight: 300;
            color: #181c2f;
        }
        span.id-user{
            font-family: RobotoRegular;
            font-size: 14px;
            color: #001654;
        }
    }
    .line{
        width: 226px;
        height: 0.5px;
        box-shadow: inset 0 0.5px 0 0 #d0d4da;
        transform: translateX(38px);
    }
    .media-transaction {
        display: flex;
        justify-content: space-between;
        padding: 28px 18px 14px 22px;
        font-family: RobotoLight;
        font-size: 14px;
        font-weight: 300;
        border-bottom: 0.5px solid #d0d4da;
        span.media{
            color: #001654;
        }
        span.see{
            color: #f5581c;
            cursor: pointer;
            i{
                padding-left: 12px;
            }
        }
    }
`

class DragInformDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelected: this.props.userSelect
        }
    }
    componentWillReceiveProps(nextprops){
        this.setState({
            userSelected: nextprops.userSelect
        })
    }
    
    renderMediaTransaction() {
        return this.props.data.map((item, i) => {
            return(
                <div className = 'media-transaction' key = {i}>
                    <span className= 'media'>{item.type}</span>
                    <span className = 'see'>{item.see}
                        <i className= 'fa fa-angle-right'></i>
                    </span>
                </div>
            )
        })
    }
    render() {
        return (
            <InformDetailStyled>
                <div className = 'group-image'>
                    <div className = 'circle-active'>
                        <div className = 'circle' style = {{backgroundColor: this.state.userSelected.isActive === true ? '#34d859' : '#d0d4da'}}></div>
                    </div>
                    <img src = {this.state.userSelected.image} alt = {this.state.userSelected.name}/>
                    <p className = 'name'>{this.state.userSelected.name}</p>
                    <p className = 'user-light'>{this.state.userSelected.username}</p>
                </div>
                <div className = 'acc-id'>
                    <span className='acc'>{this.props.acc}</span>
                    <span className = 'id-user'>{this.state.userSelected.accId}</span>
                </div>
                <div className = 'line'></div>
                {/* Media Transaction */}
                {this.renderMediaTransaction()}
            </InformDetailStyled>
        );
    }
}

export default DragInformDetail;