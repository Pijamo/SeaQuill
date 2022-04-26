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
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
        </p>

        <Rating 
        name = { name }
        userData = { userData }
        setUserData = { setUserData}/>

    </div>
}