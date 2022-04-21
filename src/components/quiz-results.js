import React, { useContext, useState } from 'react';
import { StepperContext } from "../contexts/StepperContext";

import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useLocation } from 'react-router-dom';


export default function QuizResults(){

    const location = useLocation()
    const ratings = location.state.ratingData

    return <div>
        <Navbar></Navbar>
        <PageHeader headertitle="Quiz Results" />
        
        {/* Iterating over key and value in rating and sending it to console log to test*/}
        {Object.keys(ratings).forEach(key => {
            let value = ratings[key];
            console.log(key,value)
        })}

        <CallToActionV1 />
        <Footer />
    </div>;
}

