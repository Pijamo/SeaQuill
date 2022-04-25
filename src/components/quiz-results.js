import React, { useContext, useState, useEffect } from 'react';

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';

import {getCounties, getCities, getClimate, getJobs} from '../fetcher' 

import ResultsTable from './quiz-results-components/quizResultsTable'


export default function QuizResults(){

    // Counties
    let [counties, setCounties] = useState()
    let [countyPage, setCountyPage] = useState(null)
    let [countyPagesize, setCountyPagesize ] = useState(null)
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
     let [popLower, setPopLower] = useState(null)
     let [popUpper, setPopUpper ] = useState(null)
     let [cityPage, setCityPage] = useState(null)
     let [cityPagesize, setCityPagesize ] = useState(null)
     

     useEffect(()=> {
        getCities(cityPage, cityPagesize, popLower, popUpper, 6037) // PLACEHOLDER for county id
        .then(data=>setCities(data["results"]))
    }, [])

    function showCities(results){
        let CitiesList = results.map((item,index)=>{
            return <div>{item.city}, {item.Population}, {item.Max_Population_Density.toFixed(0)} </div>

        })
        return CitiesList
    }

     //Retrieve climate information for the selected county
     let [climate, setClimate] = useState()
     

     useEffect(()=> {
        getClimate(6037) // PLACEHOLDER for county id
        .then(data=>setClimate(data["results"]))
    }, [])

    function showClimate(results){
        let ClimateList = results.map((item,index)=>{
            return <div>{item.month}, {item.averageTemp.toFixed(1)}, {item.minTemp.toFixed(1)},
            {item.maxTemp.toFixed(1)}, {item.totalRain.toFixed(2)}, {item.totalSnow.toFixed(2)} </div>

        })
        return ClimateList
    }

     //Retrieve cities for a particular county
     let [jobs, setJobs] = useState()
     let [jobTitle, setJobTitle] = useState()
     let [jobPage, setJobPage] = useState(null)
     let [jobPagesize, setJobPagesize ] = useState(null)
     

     useEffect(()=> {
        getJobs(jobPage, jobPagesize, "data", 6037) // PLACEHOLDER for keyword, county id
        .then(data=>setJobs(data["results"]))
    }, [])

    function showJobs(results){
        let JobsList = results.map((item,index)=>{
            return <div>{item.title}, {item.mean_salary}, {item.total_jobs}, {item.location_quotient}  </div>

        })
        return JobsList
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <ResultsTable />
            {/* <PageHeader headertitle="Quiz Results" /> */}
        
                {counties && showCounties(counties)}
                {/* {cities && showCities(cities)} */}
                {/* {climate && showClimate(climate)} */}
                {jobs && showJobs(jobs)}
            <Footer />
        </div>  
    )
    
}
