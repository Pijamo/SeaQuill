import React from 'react';

const StepperControl = ({ handleClick, currentStep, steps }) => {
    
    return (
    <div className='mt-4 mb-8 absolute bottom-5 right-20'>
        {/* back button */}
        <button 
        onClick={() => handleClick("back")}
        className={`h-[75px] w-[210px] text-2xl bg-white text-black uppercase py-2 px-4 rounded font-semibold cursor-pointer  border-slate-300 hover:bg-slate-700 hover:text-white mr-5 transition duration-200 ${currentStep === 1 ? "hidden cursor-not-allowed" : ""}`}>
            Back
        </button>

        {/* next button */}
        <button 
        onClick={() => handleClick("next")}
        className="h-[75px] w-[210px] text-2xl bg-primary text-white uppercase py-2 px-4 rounded font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200">
            { currentStep === steps.length - 1 ? "Confirm": "Next"}
        </button>
    </div>
)};
 
export default StepperControl;