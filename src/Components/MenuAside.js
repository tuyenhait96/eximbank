import React, { Component } from 'react';

class MenuAside extends Component {
    render() {
        return (
                <li>
                        <a href="/">
                            <i className="fa fa-home" />
                            <span>{this.props.data}</span>
                        </a>
                    </li>
        );
    }
}

export default MenuAside;