import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ShopLeftSidebar from './property-components/property-listings';
import Footer from './global-components/footer';

const Listings = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Listings" />
        <ShopLeftSidebar />
        <Footer />
    </div>
}

export default Listings

