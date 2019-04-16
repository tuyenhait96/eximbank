import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import GroupInfo from './GroupInfo';
//Data
import dataInfo from '../data/dataInfo';

const BounceStyled = styled.div`
    display: flex;
    .group-plus{ 
        width: 90px;
        height: 90px;
        border-radius: 10px;
        background-color: #ffffff;
        line-height: 90px;
        text-align: center;
        margin-right: 20px;
    }
    
`

class Scroll extends Component {
    // renderData() {
    //     return dataInfo.map((item, i) => {
    //         return <GroupInfo data = {item} icon = {item.icon}/>
    //     })
    // }
    render() {
            return (
                <BounceStyled>
                    {/* {this.renderData()} */}
                    <GroupInfo data = {dataInfo}/>
                </BounceStyled>
            );
        // })
        
    }
}

export default Scroll;