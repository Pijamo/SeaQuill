import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function EconomicQuality() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "economic"

    return <div >

        <h2 className='text-4xl font-bold'> Economic Quality </h2>
        
        <p className='mt-10'>
        This pillar measures how well an economy is 
        equipped to generate wealth sustainably and with the full engagement of the workforce.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}