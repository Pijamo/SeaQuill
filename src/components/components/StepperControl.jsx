import React from 'react';
import { Link } from 'react-router-dom';

const StepperControl = ({ handleClick, currentStep, steps }) => {
    let advance=  "next";
    if (currentStep !== steps.length){
        advance= <button 
        onClick={() => handleClick("next")}
        className="h-75px w-210px text-2xl bg-primary text-white uppercase py-2 px-4 rounded font-semibold cursor-pointer bg-primary transition duration-200">
            Next
        </button>
    }
    // Confirm button (links to results page)
    else (
        advance= <Link to='/results'><button 
        onClick={() => handleClick("confirm")}
        className="h-75px w-210px text-2xl bg-primary text-white uppercase py-2 px-4 rounded font-semibold cursor-pointer bg-primary transition duration-200">
            Confirm
        </button></Link>
    )
  
    return (
    <div className='mt-4 mb-8 absolute bottom-5 right-20'>
        
        {/* back button */}
        <button 
        onClick={() => handleClick("back")}
        className={`h-75px w-210px text-2xl bg-white text-black uppercase py-2 px-4 rounded font-semibold cursor-pointer border-slate-300 bg-slate-700:hover text-white:hover mr-5 transition duration-200 ${currentStep === 1 ? "hidden cursor-not-allowed" : ""}`}>
            Back
        </button>
        
        {/* next button */}
        {advance}
       
    </div>
)};
 
export default StepperControl;