import React, { Component } from 'react';
import Product from './Product';
import _PRODUCTS from '../../constants/products';

import '../../css/shop.css';

class Shop extends Component {

    constructor(){
        super();

        this.state = { products: _PRODUCTS }
    }

    componentDidMount(){
        if(this.props.products.length !== 0){
            this.setState({
                products: this.props.products
            })
        }
    }

    buyItem = (item, price) => {

        let products = this.state.products.map(element => {
            if(element.name === item)
                element.start_price = parseFloat(element.start_price * element.multiplier);
            return element;
        })

        this.setState({products: products}, () => {
            this.props.onClick(item, price, products);
        })
        
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