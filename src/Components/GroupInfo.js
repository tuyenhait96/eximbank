import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import ic_plus from '../image/ic_plus.png';

const BounceStyle = styled.div`
    display: flex;
    .group-info{
        width: 90px;
        height: 90px;  
        border-radius: 5px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        .image-info{
            img{
            width: 40.5px;
            height: 40.5px;
            border-radius: 50%;
            }
        }
        p{
            padding-top: 6.7px;
            font-family: UTMAvoRegular;
            font-size: 12px;
            text-align: center;
            color: #001654;
        }
    }
    .img-reponsive{
        width: 100%;
        height: 100%;
    }
`

class GroupInfo extends Component {
    renderData() {
        return this.props.data.map((item, i) => {
            return (<div className = 'group-info' key = {i}>
                <div className = 'image-info'>
                    <img src= {item.icon} alt ='' className= 'img-reponsive'/>
                </div>
                <p>{item.name}</p></div>
            )
        })
            
    }
    render() {
        return (
            <BounceStyle>
                <div className = 'group-plus' onWheel = {()=>this.onWheelHandler()}>
                    <img src = {ic_plus} alt='plus'/>
                </div>
                {this.renderData()}
            </BounceStyle>
        );
    }
}

export default GroupInfo;