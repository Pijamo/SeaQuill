import React, {useEffect, useState, useRef } from 'react';

const Stepper = ({steps, currentStep}) => {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = ( stepNumber, steps ) => {
        const newSteps = [...steps]
        let count = 0;

        while (count < newSteps.length) {
            //current step
            if(count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted:true,
                    selected:true,
                    completed:true,
                };
                count++;
            }

            //step completed
            else if (count < stepNumber ){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected:true,
                    completed:true,
                };
                count++;
            }

            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }

        return newSteps;
    };

    useEffect(() => {
        //create Object
        const stepsState = steps.map((step,index) =>
        Object.assign(
            {},
            {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false,
            }
        )
        );

        stepRef.current = stepsState;
        const current = updateStep(currentStep -1, stepRef.current)
        setNewStep(current);
    }, [steps, currentStep]);

    //display stepper (number on the top)
    const displaySteps = newStep.map((step, index) => {
        return (
            <div key = {index} 
            className= { index !== newStep.length -1 ? 'w-full flex items-center' : "flex items-center" }>
                <div className='relative flex flex-col items-center text-primary'>
                    
                    {/* Display number */}
                    <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "bg-primary text-white font-bold border border-primary" : "" }`}>
                        {/* Check if current step is completed */}
                        {step.completed ? (
                            <span className='text-white font-bold text-xl'>&#10003;</span>
                        ):(index + 1)}
                    </div>
                    
                    {/* Display description */}
                    <div className={`absolute top-0 text-center mt-16 w-32 text-[0.6rem] font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
                        
                        {step.description}
                    </div>

                </div>
                
                <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-primary" : " border-gray-400"}`}>
                    {/* Display line */}
                </div>

            </div>
        )
    });

    return <div className='mx-4 p-4 flex justify-between items-center'>
        {displaySteps}
    </div>;
}
 
export default Stepper;