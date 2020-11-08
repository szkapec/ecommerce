import React from 'react'
import styled from 'styled-components';

export default function CartItem({ item, value }) {
    const { id, title, img, total, count, price, ram, pam, dysk, s1, s2, graf } = item;
    const { increment, decrement, removeItem, removeItemPoduct } = value;
    return (
        <StyledContainer>

            <div className="product-description">
                <img src={img} alt="cart-product" />
                <div className="product">
                    <div className="title">
                        {title}
                    </div>
                    <div>
                        <span><b>Koszt:</b> </span>
                        {price}
                    </div>
                    {ram && <div>
                        <span>Ram: </span>
                        <b>{ram}</b>
                    </div>}

                    {(pam || dysk) && <div>
                        Pamięć: {pam || dysk}
                    </div>}

                    {(graf) && <div>
                        Grafika: {graf}
                    </div>}

                    {s1 && s2 && <div>
                        <div>Kolor: czarny</div>
                        <div>{s1}</div>
                        <div>{s2}</div>
                    </div>}
                </div>

            </div>



            <div className="count">
                <span className="" onClick={() => decrement(id)}>-</span>
                <b className="">{count}</b>
                <span className="" onClick={() => increment(id)}>+</span>

            </div>

            <div className="price">

                <span className="cart-icon" onClick={(e) => id<=11?removeItem(id):removeItemPoduct(id)}> 
                {/* removeItem(id, e) */}
                    <i className="fas fa-trash-alt"></i>
                </span>
                <div className="installments" >
                    <div className="install-none">{total / 10}9 <span>x 10 <span className="installment">raty zero</span> szczegóły w ofercie</span></div>
                    <div><span>{total + 10},00zł z dostawą</span></div>
                </div>
            </div>

        </StyledContainer>
    )
}


const StyledContainer = styled.section`

    ::before {
        position: absolute;
        top: 0;
        left:0;
        bottom: 0;
        width: 5px;
        background-color: #0097e6;
        content: '';
    }

    position: relative;
    max-width: 800px;
    background-color: #fff;
    margin: 0 auto;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2);
    margin: 30px 15px;
    .product-description {
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
        max-width: 600px;
        margin-left: 5px;
        img {
            margin: 20px auto;
            width: 130px;
            height: 130px;
        }
        
        @media(min-width: 300px){
            text-align:left;
            grid-template-columns: 100px 1fr;
            img {
                margin: auto 0;
                width: 90px;
                height: 90px;
            }
            .product {
                margin-top: 20px;
                margin-left: 15px;
                font-size: 16px;
                
                .title {
                    font-weight: 700;
                }
            }
        }
        @media(min-width: 500px) {
            letter-spacing: 2px;
            grid-template-columns: 150px 1fr;
            margin-left: 30px;
            img {
                margin-top: 30px;
                width: 150px;
                height: 150px;
            }
            .product {
                font-size: 18px;
                margin: 20px 30px;
                div {
                    /* padding: 2px 0; */
                }
                .title {
                    font-size: 20px;
                    padding-bottom: 10px;
                }
            }
        }
    }
    @media(min-width: 800px){
            margin: 40px auto;
           
            .product-description { 
                grid-template-columns: 200px 1fr;
                margin-left: 30px;
                img {
                    width: 180px;
                    height: 180px;
                    margin: 20px auto;
                }
                div {
                    padding-top: 5px;
                }
            }
    
        }
        

    .count {
        cursor: pointer;
        font-size:25px;
        margin: 20px auto;
        text-align: center;

        span, b {
            text-align: center;
            margin: auto;
        }
        span {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 2px solid #0097e6;
            
        }
        b {
            display: inline-block;
            border-top: 2px solid #0097e6;
            border-bottom: 2px solid #0097e6;
            height: 40px;
            width: 50px;
        }
    }

    .price {
        text-align: center;
        font-size: 16px;

        .cart-icon {
            display: none;
            @media(min-width: 320px) {
                display: block;
            }
            position: absolute;
            right: 5px;
            bottom: 5px;
            color: #767676;
            font-size: 25px;
            transition: .5s ease-in-out;
            @media(min-width: 800px) {
                display: block;
                bottom: 30px;
                right: 30px;
                font-size: 30px;
            }
           
        }
        .cart-icon:hover {
            color: #0097e6;
        }
     
        .installments {
            @media(max-width:300px){
             .install-none {
                 display: none;
             }
            }
            @media(min-width:300px){
                .install-none {
                display: block;
            }
            }


            padding: 20px 0;
            display: block;
            div span {
                color: #767676;
            }
            .installment {
                background-color: #0097e6;
                color: white;
                font-weight: bold;
                line-height: 2px;
                border-radius: 5px;
                padding: 2px 10px;
                font-size: 14px;
            }
        }
    }
`