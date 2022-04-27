import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Infrastructure() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "infrastructure"

    return <div >

        <h2 className='text-4xl font-bold'> Infrastructure </h2>
        
        <p className='mt-10'>
        This pillar measures the quality of the infrastructure 
        that enables trade, and distortions in the market for goods and services.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}