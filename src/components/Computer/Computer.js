import React, { Component } from 'react';
import { laptopProduct} from '../../data';
import ComputerItems from './ComputerItems';
import {StyledContener,StyledH1,StyledGrid} from '../Style/ShopList';
import loaded from '../assets/ball.svg';
import Loaded from '../Loaded';
export default class Computer extends Component {

    state = {
        loading: true,
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

    laptops = () => {
       return laptopProduct.map(items => <ComputerItems items={items} key={items.id}/>); 
    }

    render() {
        
        return (
            <StyledContener>
                {this.state.loading&&<Loaded/>}
                <StyledH1>Komputery</StyledH1>
                <StyledGrid> {this.laptops()}</StyledGrid>
            </StyledContener>
        );
    }
}