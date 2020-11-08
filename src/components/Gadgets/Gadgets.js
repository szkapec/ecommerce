import React, { Component } from 'react'
import ComputerItems from './GadgetItems';
import {gadgetProduct} from '../../data';
import {StyledContener,StyledH1,StyledGrid} from '../Style/ShopList';
import Loaded from '../Loaded';
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

 render() {
        return (
            <StyledContener>
                 {this.state.loading&&<Loaded/>}
                <StyledH1>Gadzety</StyledH1>
                <StyledGrid>{this.gadget()}</StyledGrid>
            </StyledContener>
        )
    }
}
