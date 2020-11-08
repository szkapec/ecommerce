import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

import {ProductConsumers} from '../context';
import {LaptopConsumers} from './Computer/Context';

  
export default class Navbar extends Component {

    state = {
        obiectOne: 0,
        obiectTwo: 0,
    }
    render() {

        return (
            <>
                <NavWrapper>

                    
                        <Link to="/">
                            <img className="img" src={logo} alt="store"/>
                        </Link>
                        <ul className="ulList">
                            <li className="liList"><Link to="/phone">
                            Telefony
                        </Link></li>

                        <li className="liList"><Link to="/computer">
                            Komputery
                        </Link></li>
                        <li className="liList"><Link to="/gadgets">
                            Gadżety
                        </Link></li>
                        </ul>

                    
                    <div>

                    {/* <LaptopConsumers>
                        {(value) => {
                            this.obiectOne = value.cart.length;
                           return  <div className="laptopOne">{value.cart.length}</div>
                        }}
                    </LaptopConsumers> */}
                    <ProductConsumers>
                        {(value) => {
                            this.state.obiectTwo = value.cart.length;
                              
                            
                            return (
                                <div className="basket">
                                <Link to='/cart'>
                                    <button>
                                        Koszyk 
                                    </button>
                                 </Link>
                                </div>
                            )
                        }}
                    </ProductConsumers>
                    </div>
                </NavWrapper>
            
            </>
        )
    }
}


const NavWrapper = styled.nav`
    
    display: grid;
    grid-template-columns: 0px 1fr 80px;
    background: #0097e6;

    .ulList {
        list-style: none;
        font-size: 11px;
        display: flex;
        flex-wrap: wrap;
    }
  

    .img {
        width: 40px;
        height: 40px;
        margin-top: 10px;
        color: white;
    }

    .liList {
        margin-top: 20px;
        margin-left: 10px;
        a {
            color: white;
        }
    }




    .laptopOne {
        position: absolute;
        right: 15px;
        top: 25px;
        font-size: 14px;
        width:25px;
        height: 25px;
        text-align: center;
        border-radius: 40%;
 
        }
    .buttonTwo{
        position: absolute;
        right: 15px;
        top: 5px;
        font-size: 14px;
        width:25px;
        height: 25px;
        text-align: center;
        border-radius: 40%;
      }
      .basket {
          margin-top: 10px;
          button {
            text-transform: capitalize;
            font-size: 14px;
            background: transparent;
            border: 2px solid white;
            color: white;
            border-radius: 8px;
            padding: 5px 5px;
            cursor: pointer;
            margin: 0;
            transition: all 0.5s ease-in-out;
          }
      }

      @media(min-width: 480px) {
        grid-template-columns: 20px 1fr 120px;
        .ulList {
        list-style: none;
        font-size: 14px;
        display: flex;
        flex-wrap: nowrap;
    }
    .laptopOne {
        right: 25px;
        top: 25px;
        font-size: 14px;
        }
    .buttonTwo{
        right: 25px;
        top: 5px;
        font-size: 14px;
      }
}
@media(min-width: 600px) {
    grid-template-columns: 80px 1fr 120px;

    .basket {
        margin-top: 10px;
        button {
            font-size: 18px;
        }
    }
    .laptopOne {
        right: 32px;
        top: 28px;
        font-size: 16px;
        }
    .buttonTwo {
        right: 32px;
        top: 7px;
        font-size: 16px;
      }
      .ulList {
        
        font-size: 18px;
        display: flex;
        flex-wrap: wrap;
    }

}

@media(min-width: 900px) {
    .ulList {
        max-width: 1100px;
        font-size: 18px;
        margin: 0 auto
      
    }
    .liList {
        margin: 20px auto 16px;
        a {
            padding: 5px 40px;
        }
    }
}

@media(min-width: 1200px) {
    .ulList {
        font-size: 20px;
        text-align: left;
        
    }
    .basket {
        margin-top: 7px;
    }
    .liList {
        text-align: center;
        margin: 10px auto 16px;
        a {
            padding: 5px 40px;
        }
    }
}
`

const ButtonCoutainer = styled.button`
    text-transform: capitalize;
    font-size: 14px;
    background: transparent;
    border: 2px solid #bdc3c7;
    border-color: ${props => props.cart?"var(--mainYellow)": "#eff0f0"};
    color: ${props => props.cart? "var(--mainYellow)" : "#eff0f0" };
    border-radius: 8px;
    padding: 5px 5px;
    cursor: pointer;
    margin: 0;
    transition: all 0.5s ease-in-out;
    a {
        margin-top: 10px;
    }
    i {
        margin-right: 3px;
    }
`