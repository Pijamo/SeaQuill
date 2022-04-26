import React, { useContext, useState, useEffect, useCallback } from 'react';

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import { Modal, Button } from 'react-bootstrap';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation, Link } from 'react-router-dom';

import {getCounties, getCities, getClimate, getJobs} from '../fetcher' 
import Climate from '../components/climate'
import Jobs from '../components/job-table'
import ResultsTable from './quiz-results-components/quizResultsTable'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function QuizResults(){

    // Counties
    let [counties, setCounties] = useState([])
    let [countyPage, setCountyPage] = useState(1)
    let [countyPagesize, setCountyPagesize ] = useState(20)
    let [zip, setZip] = useState(0)

    //Retrieve cities for a particular county
     let [cities, setCities] = useState([])
     let [popLower, setPopLower] = useState(null)
     let [popUpper, setPopUpper ] = useState(null)
     let [cityPage, setCityPage] = useState(null)
     let [cityPagesize, setCityPagesize ] = useState(null)

     //Retrieve climate information for the selected county
     let [climate, setClimate] = useState([])

     //Retrieve cities for a particular county
     let [jobs, setJobs] = useState([])
     let [jobTable, setJobTable] = useState()
     let [jobTitle, setJobTitle] = useState()
     let [jobPage, setJobPage] = useState(null)
     let [jobPagesize, setJobPagesize ] = useState(null)

     //modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
    //  const handleShow = () => {
    //      setShow(true);
    //     };
    const handleShow = useCallback(
        (fips_code) => () => {
            testClimate(fips_code);
            testJobs(fips_code);
            setShow(true);
        },
        [],
    )

    const location = useLocation()

    // const ratings = Object.values(location.state.ratingData)
    const ratings = Array(11).fill(5) // HARD CODED VALUES (for quicker testing)
    
    
    useEffect(()=> {
        // page, pagesize, userzip, 11 prosperity ratings 
        getCounties(countyPage, countyPagesize, zip, ...ratings) 
        .then(data => setCounties(data["results"]))
    }, [])

    function testCities(countyID) {
        getCities(cityPage, cityPagesize, popLower, popUpper, countyID)
        .then(data=>setCities(data["results"]))
    }

    function testClimate(countyID) {
        getClimate(countyID)
        .then(data=>setClimate(data["results"]))
    }

    function testJobs(countyId) {
        getJobs(jobPage, jobPagesize, "chem", countyId)
        .then(data=>setJobs(data["results"])) 
    }

    function showCounties(results){
        let CountiesList = results.map((item,index)=>{
            return <div>{item.county}, {item.state}, {item.fips_code} - {item.total_score.toFixed(2)}</div>

        })
        return CountiesList
    }

    function showCities(results){
        let CitiesList = results.map((item,index)=>{
            return (
                <div className="card p-2 m-2" style={{width: "18%"}}>
                    <Link to = "/listings">
                        <h5 className="card-title align-self-center">{item.city}</h5>
                    </Link>
                </div>
            )
        })
        return CitiesList
    }

    function showClimate(results){
        let ClimateList = results.map((item,index)=>{
            return <div>{item.month}, {item.averageTemp.toFixed(1)}, {item.minTemp.toFixed(1)},
            {item.maxTemp.toFixed(1)}, {item.totalRain.toFixed(2)}, {item.totalSnow.toFixed(2)} </div>

        })
        return ClimateList
    }
    

    const expandRow = {
        
        renderer: (row) => (
                <div>
                    <p>{ `This Expand row is belong to rowKey ${row.county}` }</p>
                    
                    {/* {jobs && Jobs(jobs)}
                    <br/>

                    {climate && Climate(climate)}
                    <br/> */}
                    <div className = "d-flex flex-row flex-wrap">
                        {cities && showCities(cities)}
                    </div>

                    
                    <br/>
                </div>
            ),
            showExpandColumn: true,
            expandByColumnOnly: true,
            
            //Header Expansion Sign
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                  return <b></b>;
                }
                return <b></b>;
              },
            
            //Column Expansion Custom Sign
            expandColumnRenderer: ({ expanded }) => {
            if (expanded) {
                return (
                <b>-</b>
                );
            }
            return (
                <b>...</b>
            )
            },

            onExpand: (row, isExpand, rowIndex, e) => {
                if (isExpand) {
                    console.log(row.fips_code)
                    // testJobs(row.fips_code)
                    // testClimate(row.fips_code)
                    testCities(row.fips_code)
                    console.log(jobs)
                }
            },

            onlyOneExpanding: true,
    }

    const scoreFormatter = (data, row ) => {
        return <>
        {data.toFixed(2)}
        </>
    }

    const columns = [
        {
            dataField: "county",
            text: "County",
            sort: true,
        },
        {
            dataField: "state",
            text: "State",
            sort: true,
        },
        {
            dataField: "total_score",
            text: "Score",
            sort: true,
            formatter: scoreFormatter,
        },
        {
            dataField: "df1",
            isDummyField: true,
            text: 'Action 1',
            formatter: (cellContent, row) => {
                return (
                    <>
                        <Button variant="primary" size="sm" onClick={handleShow(row.fips_code)}> 
                            Show Details 
                        </Button>
                    </>
                )
            }
        }
    ];

    return (
        <div>
            <Navbar />
            <div className='w-75 m-auto'>
                <BootstrapTable 
                keyField='fips_code' 
                columns={ columns } 
                data={ counties } 
                hover 
                condensed
                expandRow={ expandRow }
                pagination={paginationFactory()}
                />
            </div>   

            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {jobs && Jobs(jobs)}
                    {climate && Climate(climate)}
                </Modal.Body>
                
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} size="sm">
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </div>  
    )
}
