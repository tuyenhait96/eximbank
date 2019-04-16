import React, { Component } from 'react';
//Data
import dataCard from '../data/dataCard'
import styled from 'styled-components';
const BoundStyle = styled.div`
    display: flex
`

class CardAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dataCard
        }
    }
    renderData() {
        return this.state.data.map((item, i) => (
            <div className="col-l card-account mr-20" data = {item} key = {i}>
                <div className='img-card d-flex justify-content-between'>
                    <h3>{item.title}</h3>
                    <img src="image/ic-invisible-copy.png" alt='ic-invisible-copy' />
                </div>
                <div className='firgure d-flex justify-content-between mt-20'>
                    <div className='img-vn d-flex align-items-center'>
                        <img src='image/vnd.png' alt='vnd' />
                    </div>
                    <div className='firgure-vn'>
                        <strong>{item.money}</strong>
                        <sup className='firgure'>{item.sub}</sup>
                    </div>
                </div>
            </div>
        ))
    }
    render() {
        return (
            <BoundStyle >
                {this.renderData()}
            </BoundStyle>
        )
    }
}

export default CardAccount;