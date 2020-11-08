import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { StylledWrapper } from '../Style/ShopList';
import {ProductConsumers} from '../../context';

export default class ComputerItems extends Component {




    render() {
        const { items } = this.props
        return (
            <StylledWrapper>
                <ProductConsumers>
                    {(value) => {
                        return (
                            <div className="box" onClick={() => value.handleDetailLaptop(items.id)} >
                                <div className="white">

                                    <Link to="/computer/items">
                                        <img src={items.img} alt="Product img" className="card-img-top" />
                                    </Link>
                                    <span className="buy">{items.buy} osób kupiło</span>
                                    {items.inCart ? <p className="onlytoday" disabled>{" "} W koszyku</p> : <button className="onlytoday">Tylko dziś! -15%</button>}
                                    <div className="container-description">
                                        <div className="title">
                                            <Link to="/computer/items">
                                                {items.title}
                                            </Link>
                                        </div>

                                        <div className="specification">
                                            <div><span>Kolor:</span> czarny </div>
                                            <div><span> Pamięć wew:</span> {items.dysk} </div>
                                            <div><span> Pamięć ram:</span> {items.ram}</div>
                                        </div>
                                        <div className="price">
                                            <span className="">
                                                {items.price},00zł</span>
                                        </div>
                                        <div className="installments" >
                                            <div>{items.price / 10}9 <span>x 10 <span className="installment">raty zero</span> szczegóły w ofercie</span></div>
                                            <div><span>{items.price + 10},00zł z dostawą</span></div>
                                            <div><b>Wysyłka na następny dzień!</b></div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        )
                    }}
                </ProductConsumers>
            </StylledWrapper>
        )
    }
}
