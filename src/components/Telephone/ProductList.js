import React, { Component } from 'react';
import Product from './Product';
// import Title from '../Style/Title';
import { ProductConsumers } from '../../context';
import { StyledContener, StyledH1, StyledGrid } from '../Style/ShopList';
import loaded from '../assets/ball.svg'
export default class ProductList extends Component {

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
    render() {
        return (
            <>
                {/* <Title name="our" title="products"></Title> */}
                <StyledContener>
                    {this.state.loading&&this.loaded}
                    <StyledH1>Smartfony i telefony komórkowe</StyledH1>
                    <StyledGrid>
                        <ProductConsumers >
                            {(value) => {
                                return value.products.map(product => {
                                    return <Product product={product} key={product.id} />
                                })
                            }}
                        </ProductConsumers>
                    </StyledGrid>
                </StyledContener>
            </>
        )
    }
}
