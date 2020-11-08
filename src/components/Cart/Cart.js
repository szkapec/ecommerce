import React, { Component } from 'react'
import EmptyCart from './EmptyCart';
import {ProductConsumers} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    state={
        flagaA: false,
        flabaB: false,
        flagaC: false
    }
    render() {
        return (
            <section>
                <ProductConsumers>
                    {value => {
                        const { cart } = value;
                        if(cart.length>0) {
                            this.state.flagaA = true;
                            return (
                                <>
                                <CartList value={value}></CartList>
                                <CartTotals value={value}/>
                                </>
                            )
                        } 
                        else {
                            if(this.state.flagaA){
                                return null
                            }
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumers>
                
            </section>
        )
    }
}
