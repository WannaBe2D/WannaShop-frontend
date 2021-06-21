import React, { Component } from 'react';
import Token from '../Components/Auth/Token';
import Category from '../Components/Category';
import Basket from '../Components/Order/Baket';

class Women extends Component {
    render() { 
        return ( 
            <div>
                <Basket />
                <Token />
            </div>
         );
    }
}
 
export default Women;