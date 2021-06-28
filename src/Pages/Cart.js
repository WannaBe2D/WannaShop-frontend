import React, { Component } from 'react';
import Basket from '../Components/Order/Baket';
import Footer from '../Components/Footer';


class Cart extends Component{
    render(){
        return(
            <div>
                <Basket />
                <Footer />
            </div>
        )
    }
}


export default Cart;