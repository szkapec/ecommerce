import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

    return (
        <StyledComponents>
            <Link to="/" className="cash">
                <button type="button" onClick={() => clearCart()}>
                    Na raty
                </button>
                <button type="button" onClick={() => clearCart()}>
                    Do kasy
                </button>
            </Link>
            <div>Koszt całkowity: <strong>{cartSubTotal+10} zł</strong></div>
            <Link to="/" className="clear">
                <button type="button" onClick={() => clearCart()}>
                    Wyczyść koszyk
                </button>
            </Link>
            
       
        </StyledComponents>
    )
}

const StyledComponents = styled.section`
    height: 200px;
    text-align: center;
    margin: 10px auto;
    div {
        margin: 20px auto;
        font-size: 18px;
        @media(min-width: 400px) {
            font-size: 20px;
            letter-spacing: 3px;
        }
    }

    .cash {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        a {
            text-decoration: none;
        }
        button {
            width: 90%;
            background-color: #0097e6;
            color: white;
            border-radius: 3px;
            margin: 0 10px;
            text-decoration: none;
        }

        @media(min-width: 500px) {
            max-width: 550px;
            margin: 0 auto;
            font-size: 18px;
            button {
                letter-spacing: 3px;
            }
           
        }
    }


    button {
        border: 2px solid #0097e6;
        padding: 5px 10px;
        margin: 0 auto;
        transition: .3s ease-in-out;
        background-color: #fff;
        color: #0097e6;
    }
    button:hover {
        background-color: #fff;
        border: 2px solid #0097e6;
        color: #0097e6;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }

`
