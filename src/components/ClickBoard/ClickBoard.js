import React, { Component } from 'react';
import '../../css/clickBoard.css';

class ClickBoard extends Component {

    clickHandler = () => {
        this.props.onClick();
    }

    render() {
        return (
            <div className='clickBoard'>
                <div className='clickBoard__cookie' onClick={this.clickHandler}></div>
            </div>
        );
    }
}

export default ClickBoard;