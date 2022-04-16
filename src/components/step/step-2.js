import React from "react";
import Rate from '../components/Rating'

export default function Step2() {
    
    const {render, rate} = Rate();

    return {rate, render: (<div>
        
        <h2 className='text-5xl font-bold'> Not Education </h2>
        <p className='mt-10'>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
        </p>

        {render}
        
    </div>)}
}