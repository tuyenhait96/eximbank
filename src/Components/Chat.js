import React, { Component } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';

const BounceStyle = styled.div`
    min-width: 100%;
`
class Money extends Component {
    render() {
        return (
            <BounceStyle className='main-cover'>
                <NavMenu title= 'Chat' service = 'Customer Survey'/>
            </BounceStyle>
        );
    }
}

export default Money;