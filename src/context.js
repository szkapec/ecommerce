import React, { Component } from 'react'
import {storeProducts,detailProduct, laptopProduct, gadgetProduct} from './data';

const ProductContexts = React.createContext(); //mozna zmienic tylko nie od React...

class ProductProviders extends Component {

    state = {
        laptop: [], //products
        gadget: [],
        products: [],
        detailProduct: detailProduct,
        gadgetProductOne: gadgetProduct,
        laptopProductOne: laptopProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,

    }
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        let tempLaptop = [];
        let tempGadget = [];


        storeProducts.forEach(item => {
            // const singleItem = item;
            tempProducts = [...tempProducts, item]; //dodajemy item do tablicy 
        })
        gadgetProduct.forEach(item => {
            tempGadget = [...tempGadget, item]
        })

        laptopProduct.forEach(item => {
            // const singleItem = item;
            tempLaptop = [...tempLaptop, item]; //dodajemy item do tablicy 
        })

        this.setState(()=> {
            return{
                products: tempProducts,
                laptop: tempLaptop,
                gadget: tempGadget,
            }
        })
    }



    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id) 
        return product; //caly jeden obiekt
    }
    getItemGadget = (id) => {
        const gadget = this.state.gadget.find(item=> item.id === id)
        return gadget;
    }

    getItemLaptop = (id) => {
        const product = this.state.laptop.find(item => item.id === id) //znajdz pierszy ktory bd sie rownal id
        return product; //caly jeden obiekt
    }





    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {detailProduct: product}
        })
    }
    handleDetailGadget = (id) => {
        const product = this.getItemGadget(id); //caly jeden obiekt zapisany
        this.setState(()=> {
            return {gadgetProductOne: product}
        })
    }
    handleDetailLaptop = (id) => {
        const product = this.getItemLaptop(id); //caly jeden obiekt zapisany
        this.setState(()=> {
            return {laptopProductOne: product}
        })
    }




    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        
        const index = tempProducts.indexOf(this.getItem(id)) //0-8 ;
        const product = tempProducts[index]; //zapisz np tempProduct[8] 8element tylko
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({
            products: tempProducts,
            cart: [...this.state.cart, product], 
        }, ()=>{ this.addTotals()}) 
    }

    addToCartGadgets = (id) => {
        let tempLaptop = [...this.state.gadget];
        
        const index = tempLaptop.indexOf(this.getItemGadget(id)) //0-8 ;
        const product = tempLaptop[index]; //zapisz np tempProduct[8] 8element tylko
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({
            gadget: tempLaptop,
            cart: [...this.state.cart, product], 
        }, ()=>{ this.addTotals()}) 
    }


    addToCartLaptop = (id) => {
        let tempLaptop = [...this.state.laptop];
        const index = tempLaptop.indexOf(this.getItemLaptop(id)) //0-8 ;
        const product = tempLaptop[index]; //zapisz np tempProduct[8] 8element tylko
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({
            laptop: tempLaptop,
            cart: [...this.state.cart, product], 
        }, ()=>{ this.addTotals()}) 
    }





    openModal = id => {
        const product = this.getItem(id)
        this.setState({
            modalProduct: product, 
            modalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }
    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count+1;
        product.total = product.count*product.price;
        this.setState({
             cart:[...tempCart],
        } , () => {
            this.addTotals();
        })
    }



    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count-1;

        if(product.count===0) {
            this.removeItem(id)
        }
        else {
        product.total = product.count * product.price;
        this.setState({
            cart:[...tempCart],
       } , () => {
           this.addTotals();
       })
        }
    }


    removeItem = (id) => {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id )

        const index = tempProducts.indexOf(this.getItem(id)); //0-8
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState({
            cart: [...tempCart],
            products: [...tempProducts],
        }, () => this.addTotals())
    }

    clearCart = () => {
        this.setState({
            cart: [],
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total,
        })
    }
    render() {
        return (
            <ProductContexts.Provider value={
                {
                    ...this.state,
                    
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,

                    handleDetail: this.handleDetail,
                    handleDetailLaptop: this.handleDetailLaptop,
                    handleDetailGadget: this.handleDetailGadget,
                    addToCartLaptop : this.addToCartLaptop ,
                    addToCartGadgets: this.addToCartGadgets,
                    
            }}>
                {this.props.children}
            </ProductContexts.Provider>
        )
    }
}

const ProductConsumers = ProductContexts.Consumer;

export {ProductProviders, ProductConsumers}; //ProductConsumers mozna zmienić. ///product prowaiders dodane w app.js