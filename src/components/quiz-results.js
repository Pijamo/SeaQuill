import React, { useContext, useState, useEffect, useCallback } from 'react';

import Navbar from './global-components/navbar';
import { Modal, Button, Container, Col, Row, Form} from 'react-bootstrap';
import PageHeader from './global-components/page-header'
import Footer from './global-components/footer';
import { useLocation, Link } from 'react-router-dom';

import {getCounties, getScores, getCities, getClimate, getJobs} from '../fetcher' 
import Climate from './climate'
import Jobs from './job-table-v1'
import Prosperity from './prosperity';
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

     //Retrieve jobs for a particular county
     let [jobs, setJobs] = useState([])
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
            testScores(fips_code);
            setShow(true);
        },
        [],
    )

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
        getCounties(countyPage, countyPagesize, zip, ...ratingsHard) 
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
        getJobs(jobPage, jobPagesize, "che", countyId)
        .then(data=>setJobs(data["results"])) 
    }


    function showCities(results){
        let CitiesList = results.map((item,index)=>{
            return (
                <div className="card p-2 m-2" style={{width: "18%"}}>
                    <Link to = "/listings">
                        <h5 className="card-title align-self-center ">{item.city} ({item.Population})</h5>
                    </Link>
                </div>
            )
        })
        return CitiesList
    }
    
    //Retrieve prosperity score for a given county
    let [scores, setScores] = useState()
    function testScores(countyId) {
        getScores(countyId)
        .then(data=>setScores(data["results"])) 
    }
  


    const expandRow = {
        
        renderer: (row) => (
                <div>
                    <h3> Cities in {row.county}, {row.state}</h3>
                    
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
                '\u25BC'
                );
            }
            return (
                '\u27A4'
            )
            },

            onExpand: (row, isExpand, rowIndex, e) => {
                if (isExpand) {
                    testCities(row.fips_code)
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
            text: '',
            formatter: (cellContent, row) => {
                return (
                    <div class='container'>
                        <Button variant="primary"  onClick={handleShow(row.fips_code)}> 
                            Show Details 
                        </Button>
                    </div>
                )
            }
        }
    ];
    const options = {sizePerPageList: [{text: '10', value: 10}, {text: '20', value: 20}, {text: '50', value: 50}
    ] };
    return (
        <div>
            <Navbar />
            <PageHeader headertitle="Quiz Results"/>
            
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            <div className='w-75 m-auto'>
                <BootstrapTable 
                keyField='fips_code' 
                columns={ columns } 
                data={ counties } 
                hover 
                condensed
                expandRow={ expandRow }
                pagination={paginationFactory(options)}
                />
            </div>   

            

            <Modal show={show} onHide={handleClose}  >
                <Modal.Header>
                <Modal.Title id='modal-header'>County Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
               
                    <Container>
                        <Row>
                        <Col>
                            {climate && Climate(climate)} </Col>
                            <Col>{scores && Prosperity(scores)} </Col>
                        </Row>
                       
                    </Container>
                    <Container>{jobs && Jobs(jobs)}</Container>
      
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