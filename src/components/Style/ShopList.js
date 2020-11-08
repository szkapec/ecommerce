import styled from 'styled-components';


export const StyledContener = styled.div`
/* width: 300px; */
    margin: 0 auto;
    max-width: 1240px;

`


export const StyledH1 = styled.h1`
text-align: center;
margin-top: 20px;
font-size: 20px;
margin-bottom: 20px;
@media(min-width:600px) {
margin-top: 30px;
font-size: 28px;
margin-bottom: 30px;
}
`;



export const StyledGrid = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px; 
margin: auto;

/* @media(min-width:900px) {
    grid-template-columns: repeat(2, 1fr);
}
@media(min-width:1300px) {
    grid-template-columns: repeat(3, 1fr);
} */
`;


export const StylledWrapper = styled.div`


.white::before {
    background-color: #0097e6;
    content: '';
    width: 5px;
    height: 300px;
    display: block;

}

.white {
    position: relative;
    width: 90%;
    height: 250px;
    background-color: white;
    overflow: hidden;
    margin: auto;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2);
    max-width: 800px;
    @media(min-width: 550px) {
        height: 300px;
    }
      .buy {
        position: absolute;
        bottom: 10px;
        right: 30px;
    }
}

.card-img-top {
    position:absolute;
    margin: auto 0;
    width: 130px;
    height: 130px;
    left: 5px;
    right:0;
    top:0;
    bottom:0;
    transition: all .7s linear;
}
/* margin-left: 30px; */
.container-description {
    position: absolute;
    top: 30px;
    left:130px;

    .title {
        a {
            color: black;
        }
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
        margin: 10px 0;


    }
    .specification {
        font-size: 14px;
        div {
            display:block;
                span {
                color: #767676;
            }
        }
    }   
    .price {
        font-size: 22px;
        margin: 15px 5px;
      
        span {
            color: white;
            background-color: #0097e6;
            padding: 5px 10px;
            border-radius: 5px;
        }
    }
    .installments {
        display: none;
    }
    @media(min-width: 550px){
        
        left:140px;
        .specification {
            font-size: 16px;
            div {
            display:inline-block;
            span {
                margin-left: 10px;
            }
        }  
        }
        .title {
            font-size: 22px;
        }
        .installments {
            margin: 10px;
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
}
@media(min-width: 900px) {
    .white {
        margin-top: 40px;
        img {
            width: 160px;
            height: 160px;
        }
        .container-description {
            margin-left: 40px;
            .title {
                font-size: 24px;
            }
            .specification {
                font-size: 18px;
            }
            .price {
                font-size: 24px;
                /* padding: 8px 1px; */
            }
            .installments {
                font-size: 18px;
            }
        }
    }
    .onlytoday {
        font-size: 16px;
    }
}

.box {
    margin-bottom: 20px;
}


/* .white:hover .card-img-top{
    transform: scale(1.2)
} */

.cart-btn {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.1rem 0.2rem;
        /* 0.2 0.4 */
        background: #0097e6;
        border: none;
        color: var(--mainWhite);
        font-size: 1rem;
        /* 1.4 */
        border-radius: 0 0 0 0.5rem;
        transform: translate(100%,-100%);
        transition: all .7s linear;
    }
    .white:hover .cart-btn {
        transform: translate(0%,0%);
    }
    .onlytoday {
        outline: none;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.1rem 0.2rem;
        margin-left: 5px;
        background: #0097e6;
        border: none;
        color: var(--mainWhite);
        font-size: 1rem;
        border-radius: 0 0 0.5rem 0;
        transform: translate(-100%,-100%);
        transition: all .7s linear;
    }
    
    .white:hover .onlytoday {
        transform: translate(0%,0%);
    }
    .onlytoday:hover {
        color:black;
        background-color: #0097e6;
        text-transform:uppercase;
    }
    .cart-btn:hover {
        color:black;

    }
    /* @media(min-width:400px){
        .white {
    width:300px;
    height: 300px;
    margin-top: 20px;
}

.card-img-top {
    width: 200px;
    height: 200px;
    
}
.price{
        font-size: 20px;
    }   
.title{
    font-size: 20px;
    }
}

    @media(min-width:600px){
.white {
    width:350px;
    height: 350px;
    margin-top: 20px;
}

.card-img-top {
    width: 250px;
    height: 250px;
    
}
.cart-btn {
        padding: 0.2rem 0.4rem;
        font-size: 1.4rem;
    }

    .onlytoday {
        padding: 0.2rem 0.4rem;
        font-size: 1.4rem;
    }

}
@media(min-width:1000px){
        .white {
    width:350px;
    height: 350px;
   
}
}
@media(min-width: 1300px) {
    .box {
    margin-bottom: 30px;
}
} */
`