import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumers} from '../../context';
import {ButtonCoutainer} from '../Style/Button';
import {Link} from 'react-router-dom';



export default class Modal extends Component {
    render() {
        return (
            <ProductConsumers>
                {(value) => {
                    const {modalOpen,closeModal} = value
                    const {img, title, price} = value.modalProduct
                    
                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-mg-4 text-center text-capitalize">
                                    <h5>Produkt dodany do koszyka</h5>
                                    <img src={img} className="img-fluid" alt="prod"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted"> cena: ${price}</h5>
                                    <Link to='/' >
                                        <ButtonCoutainer onClick={() => closeModal()}>
                                            Sklep
                                        </ButtonCoutainer>
                                    </Link>
                                    <Link to='/cart' >
                                        <ButtonCoutainer cart onClick={() => closeModal()}>
                                           Koszyk
                                        </ButtonCoutainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                    }
                   
                }}
            </ProductConsumers>
        )
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal {
        background: var(--mainWhite);

    }
`