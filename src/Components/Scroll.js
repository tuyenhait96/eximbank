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
    render() {
            return (
                <BounceStyled>
                    <GroupInfo data = {dataInfo}/>
                </BounceStyled>
            );
        // })
        
    }
}

export default Scroll;