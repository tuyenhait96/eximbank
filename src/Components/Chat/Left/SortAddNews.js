import React, { Component } from 'react';
import styled from 'styled-components';

const BounceStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 18px;
    .sort{
        display: flex;
        align-items: center;
        p{
            opacity: 0.3;
            font-family: RobotoLight;
            font-size: 12px;
            font-weight: 300;
            line-height: 1.17;
            color: #181c2f;
            &:nth-child(2) {
                font-family: RobotoRegular;
                font-size: 12px;
                line-height: 1.17;
                color: #001654;
                opacity: 1;
                padding: 0 6.8px 0 11px;
            }
        }
        i{
            cursor: pointer;
        }
    }
    .add {
        display: flex;
        align-items: center;
        p{
            font-family: RobotoLight;
            font-size: 12px;
            font-weight: 300;
            line-height: 1.17;
            text-align: right;
            color: #001654;
            padding-right: 10px;
        }
        .circle-button{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08);
            background-image: linear-gradient(28deg, #f98153, #f45112);
            text-align: center;
            line-height: 30px;
            i {
                color: #ffffff;
                cursor: pointer;
            }
        }
    }
`

class SortAddNews extends Component {
    render() {
        return (
            <BounceStyle>
                <div className = 'sort'>
                    <p>Sort by:</p>
                    <p>Latest</p> 
                    <i className = 'fa fa-angle-down'></i>
                </div>
                <div className = 'add'>
                    <p>New Message</p>
                    <div className = 'circle-button'>
                        <i className = 'fa fa-plus'></i>
                    </div>
                </div>
            </BounceStyle>
        );
    }
}

export default SortAddNews;