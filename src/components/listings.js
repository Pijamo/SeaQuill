import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertyListings from './property-components/property-listings';
import { useLocation } from 'react-router-dom';
import Footer from './global-components/footer';

const Listings = () => {

    const location = useLocation()

    let userChoice = location.state?.stateData

    console.log(userChoice)

    return <div>
        <Navbar />
        <PageHeader headertitle="Listings" />
        <PropertyListings userChoice={userChoice}/>
        <Footer />
    </div>
}

export default Listings

