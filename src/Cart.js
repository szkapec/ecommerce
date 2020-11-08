import React, { Component } from 'react'
import Title from '../Style/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumers} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {LaptopConsumers} from '../Computer/Context'


export default class Cart extends Component {

    state={
        flagaA: false,
        flabaB: false,
        flagaC: false
    }

    render() {
        return (
            <section>
                <LaptopConsumers>
                    {value => {
                        const { cart } = value;
                        if(cart.length>0) {
                            this.state.flagaA = true;
                            return (
                                <>
                                <Title name="Twoj koszyk " title="telefonów"/>
                                <CartColumns/>
                                <CartList value={value}></CartList>
                                <CartTotals value={value}/>
                               
                                </>
                            )
                        } 
                        else {
                            return null;
                        }
                    }}
                </LaptopConsumers>
                <LaptopConsumers>
                    {value => {
                        const { cart } = value;
                        if(cart.length>0) {
                            this.state.flagaB = true;
                            return (
                                <>
                                {this.state.flagaA = true?<Title name="Twój koszyk" title="komputerów"/>:null}
                                <CartColumns/>
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
                </LaptopConsumers>
                
               
                
            </section>
        )
    }
}
