import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class MenuAside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexMainActive: 0,
            pathActive: this.props.pathActive
        }
    }
    
    onClickMainMenu() {
        this.props.onClickMainMenu('/' + this.props.data.key)
    }
    
    // Khi website duoc render no se tu dong cap nhat pathActive
    componentWillReceiveProps(nextProps){
        console.log(nextProps.pathActive)
        this.setState({pathActive:nextProps.pathActive})
    }
    render() {
        return (
            <li onClick = {this.onClickMainMenu.bind(this)}
                    style ={{borderRight: this.state.pathActive==='/' + this.props.data.key ? '6px solid #f9890c' : ''}}>
                <Link to= {'/' + this.props.data.key}>
                <div 
                    >
                        <i className="fa fa-home" />
                        <span>{this.props.data.title}</span>
                </div>
                </Link>
            </li>
        );
    }
}

export default MenuAside;