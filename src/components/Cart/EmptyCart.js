import React from 'react'
import styled from 'styled-components';

export default function EmptyCart() {
    return (
        <StyledEmpty>
            <h1>Twoja karta jest pusta</h1>
        </StyledEmpty>
    )
}

const StyledEmpty = styled.section`

    text-align: center;
    h1 {
        font-size: 16px;
        margin: 40px auto;
        font-weight: 600;
        @media(min-width:600px) {
            font-size: 18px;
        }
        @media(min-width:1000px) {
            font-size: 22px;
        }
    }

`