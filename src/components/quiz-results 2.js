import React, { useContext, useState, useEffect } from 'react';

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';

import {getCounties} from '../fetcher' 


export default function QuizResults(){
    let [results, setResults] = useState()

    const location = useLocation()
    // const ratings = Object.values(location.state.ratingData)
    const ratings = Array(11).fill(5)
    useEffect(()=> {
        getCounties(1,10,80305, ...ratings)
        .then(data=>setResults(data["results"]))
    }, [])
        
    return (
        
        <div>
            <Navbar></Navbar>
            <PageHeader headertitle="Quiz Results" />
        
                {console.log(results)}
            
            
            <CallToActionV1 />
            <Footer />
        </div>
        
    )
    
}
