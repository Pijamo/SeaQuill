import React, { useContext, useState, useEffect } from 'react';

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';

import {getCounties, getCities} from '../fetcher' 

import ResultsTable from './quiz-results-components/quizResultsTable'


export default function QuizResults(){

    // Counties
    let [counties, setCounties] = useState()
    let [countyPage, setCountyPage] = useState(0)
    let [countyPagesize, setCountyPagesize ] = useState(0)
    let [zip, setZip] = useState(0)

    const location = useLocation()
    
    // const ratings = Object.values(location.state.ratingData)
    const ratings = Array(11).fill(5) // HARD CODED VALUES (for quicker testing)
    useEffect(()=> {
        // page, pagesize, userzip, 11 prosperity ratings 
        getCounties(countyPage,countyPagesize,zip, ...ratings) 
        .then(data=>setCounties(data["results"]))
    }, [])
    
    function showCounties(results){
        let CountiesList = results.map((item,index)=>{
            return <div>{item.county}, {item.state}, {item.fips_code} - {item.total_score.toFixed(2)}</div>

        })
        return CountiesList
    }


     //Retrieve cities for a particular county
     let [cities, setCities] = useState()

     useEffect(()=> {
        // page, pagesize, userzip, 11 prosperity ratings 
        getCities(1, 10, 0, 10000000, 6037) 
        .then(data=>setCities(data["results"]))
    }, [])

    function showCities(results){
        let CitiesList = results.map((item,index)=>{
            return <div>{item.city}, {item.Population}, {item.Max_Population_Density.toFixed(0)} </div>

        })
        return CitiesList
    }

    return (
        <div>
            <Navbar></Navbar>
            <ResultsTable />
            {/* <PageHeader headertitle="Quiz Results" /> */}
        
                {/* {counties && showCounties(counties)} */}
                {/* {cities && showCities(cities)} */}
            <Footer />
        </div>  
    )
    
}
