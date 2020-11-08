import React from 'react'
import CartItem from './CartItem'
import styled from 'styled-components';

export default function CartList({ value }) {
    const { cart } = value;
    return (
        <div className="container-cart">
            <StyledCart> Twój koszyk </StyledCart>
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}

const StyledCart = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    background-color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 1px;
    font-weight: bold;
    padding: 30px 0 15px;;
`