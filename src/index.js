import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductProviders} from './context';
// import {LaptopProvider} from './components/Computer/Context'
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <ProductProviders>
    {/* <LaptopProvider> */}
    <Router>
        <App />
    </Router>
    {/* </LaptopProvider> */}
  </ProductProviders>,
  document.getElementById('root')
);
