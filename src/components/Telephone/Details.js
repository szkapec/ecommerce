import React, { Component } from 'react'
import {ProductConsumers} from '../../context';
import {Link} from 'react-router-dom';
import {ButtonCoutainer} from '../Style/Button';
import {StyledContener} from '../Style/ShopItem';
import {storeProducts} from '../../data';
export default class Details extends Component {

    state = {
        title: storeProducts[0].title,
        img: storeProducts[0].img,
        price:storeProducts[0].price,
        info:storeProducts[0].info,
        inCart:storeProducts[0].inCart,
        id: storeProducts[0].id,
        loading: true,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }



    render() {
        return (
            <>
            <ProductConsumers>
                
                {value => {
                   
                  const {id,company,img, info , price, title, inCart,roz,rdz,graf,trans,pam,rozNagr} = value.detailProduct
                  if(title){
                    this.state.title = title;
                    this.state.img = img;
                    this.state.price = price;
                    this.state.info = info;
                    this.state.id = id
                }
                  return (
                    <StyledContener>
                    <div className="title">  <span>{this.state.title}</span></div>
                    <img className="img" src={this.state.img} alt="viewList"></img>
                    <img className="img2" src={'img/bokphone.jpg'} alt="viewListw"></img>

                   
                    <div>
                        <div className="model"><b>Model:</b> <span>{this.state.title}</span></div>
                        <div className="cash"><b>Cena:</b> <span>{this.state.price}zł</span></div>
                        <div className="description" ><b>Informacje o produkcie:</b> <span>{info}</span></div>
                        <div className="specyfication"><b>Specyfikacje:</b> 
                        <ul>
                            <li>Rozdzielczość aparatu: {roz?roz:'12Mpx'}</li>
                            <li>Liczba rdzeni procesora: {rdz?rdz:'4 rdzenie'}</li>
                            <li>Układ graficzny: {graf?graf:'ARM Mali-G71'}</li>
                            <li>Transmisja danych: {trans?trans:'4G (LTE)'}</li>
                            <li>Pamięć wbudowana: {pam?pam:'64 GB'}</li>
                            <li> Rozdzielczość nagrywanych filmów: {rozNagr?rozNagr:'4K'}</li>
                            <li> Gwarancja producenta: 2 lata</li>
                        </ul>
                        </div>

                        <div className="shipment"><b>Wysyłka z:</b> <span>Polska</span></div>
                        <div className="shipment-cash"><b>Koszt wysyłki:</b> <span>10zł</span></div>
                        <div className="button-container">
                        <Link to="/computer">
                        <ButtonCoutainer>Wróć do zakupów</ButtonCoutainer>
                        </Link>
                            <ButtonCoutainer cart disabled={inCart?true:false} onClick={()=> {
                                value.addToCart(id)
                            }}>{inCart?"W koszyku":"Dodaj do koszyka"}</ButtonCoutainer>
                            
                            {inCart&&(<Link to="/cart">
                                    <ButtonCoutainer >Idz do koszyka</ButtonCoutainer>
                                </Link>)}
                
                    </div>
                    </div>
                    </StyledContener>
                  )
                }}
            </ProductConsumers>
            </>
        )
    }
}
