import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons'
library.add(Icons['faCookieBite'])


class Product extends Component {

    onClickHandler = () => {
        if(!this.props.disabled)
            this.props.onClick(this.props.options.name, this.props.options.start_price);
    }

    render() {

        const { name, start_price, icon, icon_var, description } = this.props.options;
        const { disabled, amount } = this.props;

        library.add(Icons[icon_var]);

        return (
            <div 
                onClick={this.onClickHandler} 
                className={
                    !disabled ? 
                    'shop__product': 
                    'shop__product shop__product--disabled'
                }>

                <span className="shop__product__information">
                    <FontAwesomeIcon className='shop__product__information__image__icon' icon={icon} /> 
                    <h3>{name}</h3>
                    <p>{description}</p>
                </span>

                <div className='shop__product__image'>
                    <FontAwesomeIcon className='shop__product__image__icon' icon={icon} />
                </div>

                <div className='shop__product__name'>
                    {name}
                </div>

                <div className='shop__product_price'>
                    <FontAwesomeIcon 
                        className='shop__product_price__icon' 
                        icon="cookie-bite" /> {parseInt(start_price, 10)}
                </div>

                <div className='shop__product_amount'>
                    {amount}
                </div>
            </div>
        );
    }
}

export default Product;