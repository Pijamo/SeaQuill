import React, { useContext, useState, useEffect } from 'react';

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';

import {getCounties} from '../fetcher' 

import ResultsTable from './quiz-results-components/quizResultsTable'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function QuizResults(){
    let [results, setResults] = useState([])
    
    let page = 0
    let pagesize = 20
    let zip = 0
    const location = useLocation()
    // const ratings = Object.values(location.state.ratingData)
    const ratings = Array(11).fill(5)
    
    useEffect(()=> {
        // page, pagesize, userzip, 11 prosperity ratings 
        getCounties(page,pagesize,zip, ...ratings).then((res) => 
            setResults(res.results))
    }, [])

    const scoreFormatter = (data, row ) => {
        return <>
        {Math.ceil(data)}
        </>
    }

    const expandRow = {
        renderer: (row, rowIndex) => (
            <div>
                <p>{ `This Expand row is belong to rowKey ${row.county}` }</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
        )
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
];

    return (
        <div className='App'>
            <Navbar/>
            {console.log(results)}
            <div className='w-75 m-auto'>
                <BootstrapTable 
                keyField='fips_code' 
                columns={columns} 
                data={results}  
                hover 
                condensed
                expandRow={ expandRow }
                pagination={paginationFactory()}
                />
            </div>
            

            {/* <PageHeader headertitle="Quiz Results" /> */}
        
                {/* {results && 
                    showResults(results)} */}
            <Footer />
        </div>  
    )
    
}
