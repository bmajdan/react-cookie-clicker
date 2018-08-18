import React, { Component } from 'react';
import '../../css/header.css';

class Header extends Component {
    render() {

        const { player_name, cookie_amount, player_level, cookie_per_second_value } = this.props;

        return (
            <div className='header'>
                <h1 className='header__welcome' >Welcome to {player_name}'s Bakery!</h1>
                <h2 className='header__cookiesCount'>{parseInt(cookie_amount, 10).toLocaleString()} cookies | {player_level} level</h2>
                <h4 className='header__perSecond'>{parseFloat(cookie_per_second_value, 10).toFixed(1)} per second</h4>
            </div>
        );
    }
}

export default Header;