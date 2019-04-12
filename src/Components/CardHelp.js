import React, { Component } from 'react';

class CardHelp extends Component {
    render() {
        return (
            <div className = 'card-support'>
                <h2>{this.props.title}</h2>
                <p className = 'help'>{this.props.help}</p>
                <input type='text' placeholder ='Answer here'/>
            </div>
        );
    }
}

export default CardHelp;