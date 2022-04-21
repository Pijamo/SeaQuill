import React, { useContext, useState, useEffect } from 'react';

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';

import {getCounties} from '../fetcher' 


export default function QuizResults(){
    let [results, setResults] = useState()
    let page = 0
    let pagesize = 0
    let zip = 0
    const location = useLocation()
    // const ratings = Object.values(location.state.ratingData)
    const ratings = Array(11).fill(5)
    useEffect(()=> {
        // page, pagesize, userzip, 11 prosperity ratings 
        getCounties(page,pagesize,zip, ...ratings) 
        .then(data=>setResults(data["results"]))
    }, [])
    
    function showResults(results){
        let CountyList = results.map((item,index)=>{
            return <div>{item.county}, {item.state}, {item.fips_code} - {item.total_score.toFixed(2)}</div>

        })
        return CountyList
       
    }

    return (
        
        <div>
            <Navbar></Navbar>
            <PageHeader headertitle="Quiz Results" />
        
                {results && 
                    showResults(results)}

        
            <CallToActionV1 />
            <Footer />
        </div>
        
    )
    
}
