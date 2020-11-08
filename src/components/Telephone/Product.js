import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumers} from '../../context';
import {StylledWrapper} from '../Style/ShopList';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart, roz, ram, buy, pam} = this.props.product;
        return (
            <>
           <StylledWrapper>
                
                <ProductConsumers>
                {(value) => {
            return(
                
                <div className="box" onClick={()=> value.handleDetail(id)} >
                   
                        
                <div className="white">
                  <Link to="/details">
                        <img src={img} alt="Product img" className="card-img-top"/>
                    </Link>
                    {inCart?<p className="onlytoday" disabled>{" "} W koszyku</p>:<button className="onlytoday">Tylko dziś! -15%</button>}
           
                      <span className="buy">{buy} osób kupiło</span>

                    <div className="container-description">
                    
                        <div className="title">
                        <Link to="/details">
                            {title}
                        </Link>
                        </div>
                        <div className="specification">
                            <div><span>Kolor:</span> czarny </div>
                            <div><span> Pamięć wew:</span> {pam} </div>
                            <div><span> Pamięć ram:</span> {ram}</div></div>
                        <div className="price">
                            <span className="">
                            {price},00zł</span>
                        </div>
                        <div className="installments" >
                            <div>{price/10}9 <span>x 10 <span className="installment">raty zero</span> szczegóły w ofercie</span></div>
                            <div><span>{price+10},00zł z dostawą</span></div>
                            <div><b>Wysyłka na następny dzień!</b></div>
                        </div>
                    </div>
                  </div>
                </div>)}}
                
                </ProductConsumers>

           </StylledWrapper>
            </>
        )
    }
}

Product.propTypes = {
    // Obiekt zawierający określone pola (shape)
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}


