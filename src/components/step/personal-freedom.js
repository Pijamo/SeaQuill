import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function PersonalFreedom() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "freedom"

    return <div >

        <h2 className='text-4xl font-bold'> Personal Freedom </h2>
        
        <p className='mt-10'>
        This pillar measures progress towards basic legal rights, 
        individual liberties, and social tolerance.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}