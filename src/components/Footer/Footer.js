import React, { Component } from 'react';
import '../../css/footer.css';

class Footer extends Component {

    onClickHandler = () => {
        this.props.onClick();
    }

    render() {
        return (
            <div className="footer">
                &copy; 2018 Bartosz Majdan

                <span onClick={this.onClickHandler} className="footer__reset">Reset Game</span>
            </div>
        );
    }
}

export default Footer;