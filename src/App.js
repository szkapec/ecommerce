import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components//Telephone/ProductList';
import Details from './components/Telephone/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Telephone/Modal';
import Computer from './components/Computer/Computer'
import Gadgets from './components/Gadgets/Gadgets';
import ViewsItem from './components/Computer/ViewsItem'
import GadgetViews from './components/Gadgets/GadgetViews';
import {Switch,Route, HashRouter} from 'react-router-dom';
class App extends React.Component {

  render(){
    return (
        <>
        <HashRouter basename='/'>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={ProductList}/> 
            <Route exact path='/phone' component={ProductList}/> 
            <Route exact path='/details' component={Details}/> 
            <Route exact path='/cart' component={Cart}/> 
            <Route exact path='/computer' component={Computer}/> 
            <Route exact path='/computer/items' component={ViewsItem}/> 
            <Route exact path='/gadgets' component={Gadgets}/> 
            <Route exact path='/gadgets/items' component={GadgetViews}/> 

            <Route exact component={Default}/> 
          </Switch>
          <Modal/>
          </HashRouter>
          
        </>
      );
  }

}

export default App;