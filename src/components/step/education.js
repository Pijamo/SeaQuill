import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Education() {

    const { userData, setUserData } = useContext(StepperContext);;
    const name = "education"
    
    return <div>
    
        <h2 className='text-4xl font-bold'> Education </h2>
        
        <p className='mt-10'>
        This pillar measures enrolment, outcomes, and quality across four 
        stages of education (pre-primary, primary, secondary, and tertiary education), 
        as well as the skills in the adult population.
        </p>


        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>
        
    </div>
}