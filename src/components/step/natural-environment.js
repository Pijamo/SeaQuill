import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function NaturalEnvironment() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "environment"

    return <div >

        <h2 className='text-4xl font-bold'> Natural Environment </h2>
        
        <p className='mt-10'>
            This pillar measures the aspects of the physical environment that have a direct 
            effect on people in their daily lives and changes that might impact the prosperity 
            of future generations.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}