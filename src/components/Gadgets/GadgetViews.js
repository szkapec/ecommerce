import React, { Component } from 'react'
import {LaptopConsumers} from '../Computer/Context';
import { ProductConsumers } from '../../context';

import {gadgetProduct} from '../../data';
import {ButtonCoutainer} from '../Style/Button';
import {Link} from 'react-router-dom';
import {StyledContener} from '../Style/ShopItem';
export default class GadgetViews extends Component {

    state = {
        title: gadgetProduct[0].title,
        img: gadgetProduct[0].img,
        price:gadgetProduct[0].price,
        info:gadgetProduct[0].info,
        inCart:gadgetProduct[0].inCart,
        id: gadgetProduct[0].id,
        img2: gadgetProduct[0].img2,
        loading: true,
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }



    render() {
        return (
            <>
                <ProductConsumers>
                    {(value) => {
                        
                        const {title, img, price, info, inCart,id, s1,s2,s3,s4,s5,img2} = value.gadgetProductOne
                        if(title){
                            this.state.title = title;
                            this.state.img = img;
                            this.state.price = price;
                            this.state.info = info;
                            this.state.id = id;
                            this.state.img2 = img2
                        }
                        return(
                            <>
                               <StyledContener>
                                    <div className="title">  <span>{this.state.title}</span></div>
                                    <img className="img" src={'../'+this.state.img} alt="viewList"></img>
                                    <img className="img2" src={'../'+this.state.img2} alt="viewListw"></img>
                                    <div>
                                        <div className="model"><b>Model:</b> <span>{this.state.title}</span></div>
                                        <div className="cash"><b>Cena:</b> <span>{this.state.price}zł</span></div>
                                        <div className="description" ><b>Informacje o produkcie:</b> <span>{this.state.info}</span></div>
                                        <div className="specyfication"><b>Specyfikacje:</b> 
                                        <ul>
                                            <li>{s1?s1:'Redukcja szumów: Tak'}</li>
                                            <li>{s2?s2:'Mikrofon: Tak'}</li>
                                            <li>{s3?s3:'Impedancja: 16KΩ'}</li>
                                            <li>{s4?s4:'Częstotliwość: 20Hz - 20 KHZ'}</li>
                                            <li>{s5?s5:'Interface: USB + mini jack 3,5mm'}</li>
                                        </ul>
                                        </div>

                                        <div className="shipment"><b>Wysyłka z:</b> <span>Polska</span></div>
                                        <div className="shipment-cash"><b>Koszt wysyłki:</b> <span>10zł</span></div>
                                        <div className="button-container">
                                        <Link to="/computer">
                                        <ButtonCoutainer>Wróć do zakupów</ButtonCoutainer>
                                        </Link>
                                            <ButtonCoutainer cart disabled={inCart?true:false} onClick={()=> {
                                                value.addToCartGadgets(id)
                                            }}>{inCart?"W koszyku":"Dodaj do koszyka"}</ButtonCoutainer>
                                            {inCart&&(<Link to="/cart">
                                                    <ButtonCoutainer cart>Idz do koszyka</ButtonCoutainer>
                                                </Link>)}
                                
                                    </div>
                                    </div>
                                    </StyledContener>
                            </>
                        )
                    }
                }
                </ProductConsumers>
            </>  
        )
    }
}
