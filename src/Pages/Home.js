import React, { Component } from 'react';
import PreviewCard from '../Components/PreviewCard'
import OurFavorites from '../Components/OurFavorites';
import ShopByCategory from '../Components/ShopByCategory';
import NewArrivals from '../Components/NewArrivals';
import Footer from '../Components/Footer';

class Home extends Component {
    render() { 
        return ( 
           <>
            <PreviewCard />
            <OurFavorites />
            <ShopByCategory />
            <NewArrivals />
            <Footer />
           </>
         );
    }
}
 
export default Home;