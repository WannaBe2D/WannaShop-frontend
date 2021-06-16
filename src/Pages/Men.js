import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from '../Components/Category';
import CategoryList from '../Components/CategoryList';
import ProductDetail from '../Components/ProductDetail';

function Men(){
    return(
        <div>
            <Router>
                <Category />
                <Switch>
                    <Route path="/products/:id" exact component={ProductDetail} /> 
                    <Route path="/category/:id" exact component={CategoryList} /> 
                </Switch>
            </Router>
        </div>
    )
}

export default Men;