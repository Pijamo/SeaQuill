import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';


export default function QuizResults(){
   

    return <div>
        <Navbar></Navbar>
        <PageHeader headertitle="Quiz Results" />

        
        <CallToActionV1 />
        <Footer />
    </div>;
}

