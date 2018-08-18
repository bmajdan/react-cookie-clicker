import React, { Component } from 'react';
import Product from './Product';
import _PRODUCTS from '../../constants/products';
import { encode, decode } from '../libs';

import '../../css/shop.css';

class Shop extends Component {

    constructor(){
        super();

        if(localStorage.getItem('cookieClickerShop'))
            this.state = {
                products: JSON.parse(decode(localStorage.getItem('cookieClickerShop')))
            };
        else
            this.state = {
                products: _PRODUCTS
            }
    }

    buyItem = (item, price) => {

        let products = this.state.products.map(element => {
            if(element.name === item)
                element.start_price = parseFloat(element.start_price * element.multiplier);
            return element;
        })

        this.setState({products: products}, () => {
            localStorage.setItem('cookieClickerShop', encode(JSON.stringify(this.state.products)));
        })
        
        this.props.onClick(item, price);
    }

    render() {

        const { cookie_amount, items } = this.props;

        const products_containter = this.state.products.map((element, key) => {
            
            let amount = 0;

            for(let item of items){
                if(item.name === element.name){
                    amount = item.count
                }
            }

            if( cookie_amount >= element.start_price){
                return <Product 
                    amount={amount} 
                    onClick={this.buyItem} 
                    options={element} 
                    key={key}
                />
            }else{
                return <Product 
                    disabled 
                    amount={amount}  
                    onClick={this.buyItem} 
                    options={element} 
                    key={key}
                />
            }
        })

        return (
            <div className='shop'>
                <h1 className='shop__header'>Shop:</h1>

                {products_containter}
            </div>
        );
    }
}

export default Shop;