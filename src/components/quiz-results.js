import React, { useContext, useState, useEffect, useCallback } from 'react';

import Navbar from './global-components/navbar';
import { Modal, Button, Container, Col, Row, Form, Tooltip, OverlayTrigger} from 'react-bootstrap';
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


const QuizResults = () =>{

    // Counties
    let [counties, setCounties] = useState([])
    let [countyPage, setCountyPage] = useState(1)
    let [countyPagesize, setCountyPagesize ] = useState(20)
    let [zip, setZip] = useState(0)

    const [loading, setLoading] = useState(false)

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
     let [keyword, setKeyword] = useState('data')
     let [jobPagesize, setJobPagesize ] = useState(null)

     let [fips, setFips] = useState('')

     let [state, setState] = useState('')

     const [testData, setTestData] = useState(null)
     
     const KeywordChangeHandler = (event) => {
         const value = event.target.value
         setKeyword(value)
      };

      function submitHandler(event){
          testJobs(keyword, fips)
      }

     //modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
    //  const handleShow = () => {
    //      setShow(true);
    //     };
    const handleShow = useCallback(
        
        (fips_code) => () => {
            setFips(fips_code)
            testClimate(fips_code);
            testJobs(keyword, fips_code);
            testScores(fips_code);
            setShow(true);
        },
        [],
    )

    const location = useLocation()

    const [userRatings, setUserRatings] = useState(
        {
            environment: location.state.ratingData.environment,
            business: location.state.ratingData.business,
            education: location.state.ratingData.education,
            freedom: location.state.ratingData.freedom,
            safety: location.state.ratingData.safety,
            social: location.state.ratingData.social,
            economic: location.state.ratingData.economic,
            infrastructure: location.state.ratingData.infrastructure,
            governance: location.state.ratingData.governance,
            health: location.state.ratingData.health,
            living: location.state.ratingData.living,
        },
    )
    
    useEffect(()=> {
        setLoading(true)
        const data = localStorage.getItem("user-ratings");

        if (location.state == null){
            if(data){
                setUserRatings(JSON.parse(data));
            }
            } else {
                setUserRatings(
                    {
                        environment: location.state.ratingData.environment,
                        business: location.state.ratingData.business,
                        education: location.state.ratingData.education,
                        freedom: location.state.ratingData.freedom,
                        safety: location.state.ratingData.safety,
                        social: location.state.ratingData.social,
                        economic: location.state.ratingData.economic,
                        infrastructure: location.state.ratingData.infrastructure,
                        governance: location.state.ratingData.governance,
                        health: location.state.ratingData.health,
                        living: location.state.ratingData.living,
                    }
                )
            }
        
        setLoading(false)

        getCounties(countyPage, countyPagesize, zip, userRatings.education, userRatings.freedom, userRatings.safety, userRatings.social, userRatings.business, userRatings.economic, userRatings.infrastructure, userRatings.governance, userRatings.health, userRatings.living, userRatings.environment) 
        .then(data => setCounties(data["results"]))
    }, [])

    useEffect(() => {
        localStorage.setItem('user-ratings', JSON.stringify(userRatings))
    })
    
    function testCities(countyID) {
        getCities(cityPage, cityPagesize, popLower, popUpper, countyID)
        .then(data=>setCities(data["results"]))
    }

    function testClimate(countyID) {
        getClimate(countyID)
        .then(data=>setClimate(data["results"]))
    }

    function testJobs(keyword, countyId) {
        getJobs(jobPage, jobPagesize, keyword, countyId)
        .then(data=>setJobs(data["results"])) 
    }

    function showCities(results){
        let CitiesList = results.map((item,index)=>{
            return (
                <div className="card p-2 m-2" style={{width: "18%"}}>
                    <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                        <Tooltip {...props}>
                            {`Population: ${item.Population}`}
                        </Tooltip>
                    )}
                    placement="bottom">
                    <Link to ={{
                        pathname: "/listings", 
                        state: { stateData: { state: state, city: item.city } }
                        }}>
                        <h5 className="card-title align-self-center ">{item.city}</h5>
                    </Link>
                    </OverlayTrigger>
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
                <div className='p-4'>
                    <h3 className='mb-0'> Cities in {row.county}, {row.state}</h3>
                    <p className='text-danger'> *Population on Hover</p>
                    
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
                    setState(row.id)
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
                    <div>
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

    if(loading){
        return <div>
            ...Loading
        </div>
    } else {
    return (
        <div>
            <Navbar />
            <PageHeader headertitle="Quiz Results"/>
        
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
    <Container>
        
        {/*Advanced Filter */}
        <Form onSubmit={submitHandler} className="mt-5">
            <Row className="mb-2">
        
            <Col>
                <Form.Group as={Col} controlId="formGridJob">
                    <Form.Control onChange={KeywordChangeHandler} type="text" placeholder="Job Keyword (E.g. Data)" />
                </Form.Group>
            </Col>
            
            <Col>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
                </Col>
                </Row>  
    </Form>
    {jobs && Jobs(jobs)}   
         
    </Container>
    
      
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
}

export default QuizResults