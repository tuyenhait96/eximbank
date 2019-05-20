import React, { Component } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
//Image 
import ic_logo from '../../../image/logo-wee-small.svg';
import ic_money from '../../../image/ic_money.svg';
//Component
import DragInformDetail from './DragInformDetail';
import { mediaTransaction } from '../../../data/dataChat';

const DragMoneyStyled = styled.div`
    .group-wee-money {
        .bg-pay{
            background-image: linear-gradient(37deg, #9000ff 0%, #8100e1 24%, #005cec, #005bec);
        }
        .t-logo{
            display: flex;
            justify-content: space-between;
            padding: 26px 15px 45px 16px;
            p{
                font-family: UTMAvoRegular;
                font-size: 12px;
                color: #ffffff;
            }
        }
        .value {
            position: relative;
            padding-right: 15px;
            margin-left: 16px;
            input[type='text'] {
                width: 100%;
                height: 50px;
                border-radius: 5px;
                background-color: rgba(255, 255, 255, 0.15);
                display: flex;
                border: none;
                padding: 15px 37px 15px 7px;
                font-family: LatoLight;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 0.4px;
                color: #ffffff;
                text-align: center;
            }
            .icon{
                width: 15px;
                height: 15px;
                background-color: #ffffff;
                display: flex;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: -8px;
                top: 18px;
                i{
                    color: #8100e1;
                    font-size: 14px;
                }
            }
            img{
                position: absolute;
                top: 15px;
                right: 30px;
            }
        }
        .search{
            position: relative;
            padding: 36px 0 0 0;
            margin-left: 15px;
            border-bottom: solid 0.5px #ffffff;
            i{
                position: absolute;
                top: 42px;
                left: 0;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.5)
            }
            input[type='text']{
                width: 100%;
                height: 27.8px;
                background: none;
                border: none;
                outline: none;
                padding-bottom: 10.3px;
                color: rgba(255, 255, 255, 0.5);
                ::-webkit-input-placeholder { /* Edge */
                    font-family: UTMAvoRegular;
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.5);
                    text-indent: 25.5px;
                }
            }
        }
        .scroll{
            width: 260px;
            display: -webkit-box;
            overflow: hidden;
            padding: 15.8px 0 45px 15px;
            .group-inform{
                width: 80px;
                height: 80px;
                border-radius: 10px;
                background-color: rgba(255, 255, 255, 0.15);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-right: 10px;
                img{
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                }
                p{
                    font-family: UTMAvoRegular;
                    font-size: 12px;
                    text-align: center;
                    color: #ffffff;
                    padding-top: 5px;
                }
            }
            
        }
        .bg-orange {
            width: 100%;
            background-image: linear-gradient(87deg, #f7bb25, #ff2424);
            text-align: center;
            cursor: pointer;
            i{
                color: #ffffff;
                transform: rotate(180deg);
                opacity: 0.5;
            }
        }
        .bg-green{
            width: 100%;
            background-image: linear-gradient(87deg, #00a548, #bdd50a);
            text-align: center;
            cursor: pointer;
            i{
                color: #ffffff;
                transform: rotate(180deg);
                opacity: 0.5;
            }
        }
    }
`

class DragMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profit: '',
            userSelected: this.props.userSelected
        }
    }
    onClear() {
        this.setState({profit: ''});
    }

    onKeyUpHandle(e){
        if(e.keyCode===13){
            this.onClear()
        }
    }
    onHandleWheel(e) {
        console.log('onWheel')
        console.log('wheelDelta', e.wheelDelta)
        console.log('scrollLeft', e.currentTarget.scrollLeft +500)
        console.log('scrollTop', e.currentTarget.scrollTop)
        console.log('deltaX', e.deltaX)
        console.log('deltaY', e.deltaY)
        console.log(e.currentTarget.scrollLeft)
        if (e.deltaY > 0) {
            e.currentTarget.scrollLeft += 50 
        } else {
            e.currentTarget.scrollLeft -= 50
        }
    }

    renderName(){
        return this.props.dataName.map((item, i) => {
            return (
                <div className = 'group-inform' key ={i} >
                    <img src = {item.icon} alt= ''/>
                    <p>{item.name}</p>
                </div>
            )
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({userSelected: nextProps.userSelected});
    }
    render() {
        return (
            <DragMoneyStyled>
                <div className = 'group-wee-money'>
                    <div className='bg-pay'>
                        <div className = 't-logo'>
                            <p>{this.props.title}</p>
                            <img src = {ic_logo} alt = 'logo-small'/>
                        </div>
                        <div className = 'value'>
                            <NumberFormat 
                                onKeyUp = {this.onKeyUpHandle.bind(this)}
                                value={this.state.profit} 
                                thousandSeparator={true}
                            />
                            <div className = 'icon'>
                                <i className = 'fa fa-arrows'></i>
                            </div>
                            <img src = {ic_money} alt = 'ic_d' />
                        </div>
                        <div className = 'search'>
                            <i className = 'fa fa-search'/>
                            <input type = 'text' placeholder = {this.props.placeholder}/>
                        </div>
                        {/* Scrolll Search Name */}
                        <div className = 'scroll' onWheel = {this.onHandleWheel.bind(this)}>
                            {this.renderName()}
                        </div>
                    </div>
                    {/* Button Icon Color */}
                    <div className = 'bg-orange'>
                        <i className = 'fa fa-wifi'></i>
                    </div>
                    <div className = 'bg-green'>
                        <i className = 'fa fa-wifi'></i>
                    </div>
                    {/* Infrom Detail */}
                    <DragInformDetail 
                        userSelect = {this.state.userSelected}
                        acc = 'Acc No:'
                        data = {mediaTransaction}
                    />
                </div>
            </DragMoneyStyled>
        );
    }
}

export default DragMoney;