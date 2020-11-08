import React, { Component } from 'react'
import {LaptopConsumers} from './Context';
import { ProductConsumers } from '../../context';

import {laptopProduct} from '../../data';
import {ButtonCoutainer} from '../Style/Button';
import {Link} from 'react-router-dom';
import {StyledContener} from '../Style/ShopItem';
export default class ViewsItem extends Component {

    state = {
        title: laptopProduct[0].title,
        img: laptopProduct[0].img,
        price:laptopProduct[0].price,
        info:laptopProduct[0].info,
        inCart:laptopProduct[0].inCart,
        id: laptopProduct[0].id,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }




    render() {
        return (
            <>
                {this.state.loading&&this.loaded}
                <ProductConsumers>
                    {(value) => {
                     
                        const {title, img, price, info, inCart,id, sys,proc,graf,ram,dysk} = value.laptopProductOne
                        if(title){
                            this.state.title = title;
                            this.state.img = img;
                            this.state.price = price;
                            this.state.info = info;
                            this.state.id = id
                        }
                        return(
                            <>
                              
                                <StyledContener>
                                    <div className="title">  <span>{this.state.title}</span></div>
                                    <img className="img" src={'../'+this.state.img} alt="viewList"></img>
                                    <img className="img2" src={'../'+'img/bok.jpg'} alt="viewListw"></img>
                                    <div>
                                        <div className="model"><b>Model:</b> <span>{this.state.title}</span></div>
                                        <div className="cash"><b>Cena:</b> <span>{this.state.price}zł</span></div>
                                        <div className="description" ><b>Informacje o produkcie:</b> <span>{this.state.info}</span></div>
                                        <div className="specyfication"><b>Specyfikacje:</b> 
                                        <ul>
                                            <li>System operacyjny: {sys?sys:'System operacyjny Windows 8.1.'}</li>
                                            <li>Procesor: {proc?proc:'Intel Core i7-4710HQ.'}</li>
                                            <li>Grafika: {graf?graf:'GeForce GTX 960M'}</li>
                                            <li>Pamięć ram: {ram?ram:'8 GB'}</li>
                                            <li>Dysk: {dysk?dysk:'HDD 1000 GB, SSD 8 GB'}</li>
                                        </ul>
                                        </div>

                                        <div className="shipment"><b>Wysyłka z:</b> <span>Polska</span></div>
                                        <div className="shipment-cash"><b>Koszt wysyłki:</b> <span>10zł</span></div>
                                        <div className="button-container">
                                        <Link to="/computer">
                                        <ButtonCoutainer>Wróć do zakupów</ButtonCoutainer>
                                        </Link>
                                            <ButtonCoutainer cart disabled={inCart?true:false} onClick={()=> {
                                                value.addToCartLaptop(id)
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
