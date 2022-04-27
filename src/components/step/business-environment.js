import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Business() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "business"

    return <div >

        <h2 className='text-4xl font-bold'> Business Environment </h2>
        
        <p className='mt-10'>
        This pillar measures the extent to which investments are 
        adequately protected and are readily accessible.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}