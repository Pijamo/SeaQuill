import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function LivingConditions() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "living"

    return <div >

        <h2 className='text-4xl font-bold'> Living Conditions </h2>
        
        <p className='mt-10'>
        This pillar measures the degree to which a reasonable quality of life is 
        experienced by all, including material resources, shelter, basic services, and connectivity.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}