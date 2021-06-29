import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryW from '../Components/CategoryW';
import CategoryListW from '../Components/CategoryListW';
import ProductDetail from '../Components/ProductDetail';
import Footer from '../Components/Footer';
import NewProduct from '../Components/NewProduct';
import AllProductsW from '../Components/AllProductsW';

 function Women(){
    return(
        <div>
            <Router>
                <CategoryW />
                <Switch>
                    <Route path="/products/:id" exact component={ProductDetail} /> 
                    <Route path="/women/:id" exact component={CategoryListW} />
                    <Route path="/women/" exact component={AllProductsW} /> 
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default Women;