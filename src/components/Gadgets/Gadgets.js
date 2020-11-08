import React, { Component } from 'react'
import ComputerItems from './GadgetItems';
import {gadgetProduct} from '../../data';
import styled from 'styled-components';
import {StyledContener,StyledH1,StyledGrid} from '../Style/ShopList';
import loaded from '../assets/ball.svg';
export default class Gadgets extends Component {
         
state = {
    loading: true,
}

 gadget = () => {
    return gadgetProduct.map(items => <ComputerItems items={items} key={items.id}/>) 
 }


componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(() => this.setState({
        loading: false,
    }), 1000);
}

loaded = (
    <div className="loaded">
        <img src={loaded} alt="loading" />
    </div>
)
 render() {
        return (
            <StyledContener>
                 {this.state.loading&&this.loaded}
                <StyledH1>Gadzety</StyledH1>
                <StyledGrid>{this.gadget()}</StyledGrid>
            </StyledContener>
        )
    }
}
