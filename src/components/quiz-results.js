import React, { useContext, useState, useEffect } from 'react';

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';

import {getCounties, getScores, getCities, getClimate, getJobs} from '../fetcher' 
import Climate from './climate'
import Jobs from './job-table-v1'
import Prosperity from './prosperity';
import ResultsTable from './quiz-results-components/quizResultsTable'



export default function QuizResults(){

    // Counties
    let [counties, setCounties] = useState()
    let [countyPage, setCountyPage] = useState(null)
    let [countyPagesize, setCountyPagesize ] = useState(null)
    let [zip, setZip] = useState(0)

    const location = useLocation()
    
    // let ratings = location.state.ratingData
    // let environment = isNaN(ratings.environment) ? 1 : ratings.environment
    // let business = isNaN(ratings.business) ? 1 : ratings.business
    // let education = isNaN(ratings.education) ? 1 : ratings.education
    // let freedom = isNaN(ratings.freedom) ? 1 : ratings.freedom
    // let safety = isNaN(ratings.safety) ? 1 : ratings.safety
    // let social = isNaN(ratings.social) ? 1 : ratings.social
    // let economic = isNaN(ratings.economic) ? 1 : ratings.economic
    // let infrastructure = isNaN(ratings.infrastructure) ? 1 : ratings.infrastructure
    // let governance = isNaN(ratings.governance) ? 1 : ratings.governance
    // let health= isNaN(ratings.health) ? 1 : ratings.health
    // let living = isNaN(ratings.living) ? 1 : ratings.living
  
    const ratingsHard = Array(11).fill(5) // HARD CODED VALUES (for quicker testing)
    useEffect(()=> {
        // page, pagesize, userzip, 11 prosperity ratings 
        getCounties(countyPage,countyPagesize,zip,...ratingsHard) //education,freedom,safety,social,business,economic,infrastructure,governance,health,living,environment
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
        getClimate(8035) // PLACEHOLDER for county id (6077, 8035, 48001 )
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
     let [jobTable, setJobTable] = useState()
     let [jobTitle, setJobTitle] = useState()
     let [jobPage, setJobPage] = useState(null)
     let [jobPagesize, setJobPagesize ] = useState(null)
     

     useEffect(()=> {
        getJobs(jobPage, jobPagesize, "d", 6037) // PLACEHOLDER for keyword, county id
        .then(data=>setJobs(data["results"]))  
    }, [])

        //Retrieve prosperity score for a given county
        let [scores, setScores] = useState()
    
        useEffect(()=> {
        getScores(31171) // PLACEHOLDER for keyword, county id
        .then(data=>setScores(data["results"]))  
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            {/* <ResultsTable /> */}
            {/* <PageHeader headertitle="Quiz Results" /> */}
        
                {counties && showCounties(counties)}
                {/* {cities && showCities(cities)} */}
                 {jobs && Jobs(jobs)}
                {/* {climate && Climate(climate)}  */}
                {/* {scores && Prosperity(scores)} */}
            <Footer />
        </div>  
    )
    
}
