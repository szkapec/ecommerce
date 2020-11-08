import React, { Component } from 'react'
import {laptopProduct, gadgetProduct} from '../../data';

// We wcześniejszej wersji w celach edukacyjnych były stworzone dwa Context api.
// Teraz jest nie używany ale zostawiam ponieważ mam zamiar w przyszłości go dodać i rozbudować.

const LaptopContext = React.createContext();

class LaptopProvider extends Component {

    state = {
        laptop: [], //products
        gadget: [],
        gadgetProductOne: gadgetProduct,
        laptopProductOne: laptopProduct, //detailProduct
        cart: [],
        modalOpen: false,
        modalProduct: laptopProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,

    }
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempLaptop = [];
        let tempGadget = [];

        gadgetProduct.forEach(item => {
            tempGadget = [...tempGadget, item]
        })

        laptopProduct.forEach(item => {
            // const singleItem = item;
            tempLaptop = [...tempLaptop, item]; //dodajemy item do tablicy 
        })

        this.setState(()=> {
            return{
                laptop: tempLaptop,
                gadget: tempGadget,
            }
        })
    }


    getItemGadget = (id) => {
        const gadget = this.state.gadget.find(item=> item.id === id)
        return gadget;
    }

    getItemLaptop = (id) => {
        const gadget = this.state.laptop.find(item => item.id === id) //znajdz pierszy ktory bd sie rownal id
        return gadget; //caly jeden obiekt
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
        const product = this.getItemLaptop(id)
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
        let tempLaptop = [...this.state.laptop]
        let tempCart = [...this.state.cart]
        let tempGadget = [...this.state.gadget];

        
        tempCart = tempCart.filter(item => item.id !== id )
        
        var index = tempLaptop.indexOf(this.getItemLaptop(id)); //0-80
        if(index<0) {
            index=tempGadget.indexOf(this.getItemGadget(id));
            let removeProduct = tempGadget[index];
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            this.setState({
                cart: [...tempCart],
                gadget: [...tempGadget],
            }, () => this.addTotals())
        } 
        
        else {
            let removeProduct = tempLaptop[index];
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            this.setState({
                cart: [...tempCart],
                laptop: [...tempLaptop],
            }, () => this.addTotals())
        }

        // this.setState({
        //     cart: [...tempCart],
        //     laptop: [...tempLaptop],
        // }, () => this.addTotals())
    }

    clearCart = () => {
        this.setState({
            cart: [],
        }, () => {
            // this.setProducts();
            // this.addTotals();
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
            <LaptopContext.Provider value={
                {
                    ...this.state,
                    handleDetailLaptop: this.handleDetailLaptop,
                    addToCartLaptop: this.addToCartLaptop,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,

                    handleDetailGadget: this.handleDetailGadget,
                    addToCartGadgets: this.addToCartGadgets,
                    
            }}>
                {this.props.children}
            </LaptopContext.Provider>
        )
    }
}

const LaptopConsumers = LaptopContext.Consumer;

export {LaptopProvider, LaptopConsumers};