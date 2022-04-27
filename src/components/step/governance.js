import React from "react";
import Rating from '../components/Rating'
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Governance() {

    const { userData, setUserData } = useContext(StepperContext);
    const name = "governance"

    return <div >

        <h2 className='text-4xl font-bold'> Governance </h2>
        
        <p className='mt-10'>
        This pillar measures the extent to which there are checks 
        and restraints on power and whether governments operate effectively and without corruption.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}