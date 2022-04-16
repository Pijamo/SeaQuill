import React from "react";
import Rate from '../components/Rating'

export default function Step1() {
    
    const {render, rate} = Rate();

    return {rate, render2: (<div>
        
        <h2 className='text-5xl font-bold'> Education </h2>
        <p className='mt-10'>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
        </p>

        {render}
        
    </div>)}
}