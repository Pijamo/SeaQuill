import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function SocialCapital() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "social"

    return <div >

        <h2 className='text-4xl font-bold'> Social Capital </h2>
        
        <p className='mt-10'>
        This pillar measures the strength of personal and social relationships, 
        institutional trust, social norms, and civic participation in a country.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}