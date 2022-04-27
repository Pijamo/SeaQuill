import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Health() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "health"

    return <div >

        <h2 className='text-4xl font-bold'> Health </h2>
        
        <p className='mt-10'>
        This pillar measures the extent to which people are healthy and have access to 
        the necessary services to maintain good health, including health outcomes, 
        health systems, illness and risk factors, and mortality rates.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}