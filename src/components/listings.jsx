import React, { useState, useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertyListings from './property-components/property-listings';
import { useLocation } from 'react-router-dom';
import Footer from './global-components/footer';

const Listings = () => {

    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState([
        {
            state: "",
            city: "",
            minPrice: null,
            maxPrice: null
        },
    ])

    useEffect(() => {
        const data = localStorage.getItem("user-choice");
        
        if(location.state == null){
            if (data) {
                setUserData(JSON.parse(data));
            }
        } else {
            setUserData(
                {
                    state: location.state.stateData.state,
                    city: location.state.stateData.city,
                    minPrice: location.state.stateData.minPrice,
                    maxPrice: location.state.stateData.maxPrice
                 }
            )
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        localStorage.setItem('user-choice', JSON.stringify(userData))
    })

    

    if(loading){
        return <div>...Loading</div>
    } else {
        return <div>
        <Navbar />
        <PageHeader headertitle="Listings" />
        <PropertyListings userChoice={userData}/>
        <Footer />
    </div>

    }
    
}

export default Listings

