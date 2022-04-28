import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function SafetySecurity() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "safety"

    return <div >

        <h2 className='text-4xl font-bold'> Safety Security </h2>
        
        <p className='mt-10'>
        This pillar measures the degree to which war, conflict, terror, and crime have 
        destabilised the security of individuals, both immediately 
        and through longer lasting effects.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}