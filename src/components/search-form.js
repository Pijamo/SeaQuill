import React from 'react';
import Navbar from './global-components/navbar-v2';
import BannerV2 from './section-components/banner-v2';
import Footer from './global-components/footer';
import { Register } from './register'

const SearchForm = () => {
    return <div>
        <Navbar CustomClass="ltn__header-transparent gradient-color-2" /> 
        <BannerV2 />
        <Footer />
    </div>
}

export default SearchForm

