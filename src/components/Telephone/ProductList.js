import React, { Component } from 'react';
import Product from './Product';
// import Title from '../Style/Title';
import { ProductConsumers } from '../../context';
import { StyledContener, StyledH1, StyledGrid } from '../Style/ShopList';
import Loaded from '../Loaded';
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


    render() {
        return (
            <>
                {/* <Title name="our" title="products"></Title> */}
                <StyledContener>
                    {this.state.loading&&<Loaded/>}
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
