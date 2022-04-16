import React, { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
import Rate from "./components/Rating"
import { Link } from 'react-router-dom';

import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Step1 from "./step/step-1";
import Step2 from "./step/step-2";
import Step3 from "./step/step-3";


function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  // *** ISSUE 1: Need to update ratings***
  const [ratings, setRating] = useState(new Array(11).fill(1));


  const steps = [
    "Education",
    "Personal Freedom",
    "Safety and Security",
    // "Social Capital",
    // "Business Environment",
    // "Economic Quality",
    // "Infrastructure",
    // "Governance",
    // "Health",
    // "Living Conditions",
    // "Natural Environment",
  ];

 // ***ISSUE 2: Stars and rating not reset between pages***
  const displayStep = (step) => {
    switch (step) {
      case 1: 
        const output = Step1();
        // setRating(output['rate']); (related to ISSUE 1 - try to update ratings state, but infinite loop)
        return <div>{output['render']}
        Rate: {output['rate']}</div>
        
        
      case 2:
        const output2 = Step2();

        return <div>{output2['render']} 
        Rate: {output2['rate']}</div>
       
      case 3:
        const output3 = Step3();
        
        return <div>{output3['render']} 
        Rate: {output3['rate']}
        </div>
      default:
    }
  }

  const handleClick = ( direction ) => {
    let newStep = currentStep;

    // *** ISSUE 3: Use "Confirm" to pass results and link to new "Results" page ***
    if (direction === "next"){
      /*When Next button (visible as Confirm for last page) is clicked, pass ratings to server
      and render output table */
      if (currentStep == steps.length){
        
      }
      newStep++;
      
    }
    else{
      newStep--;
    }

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

    
  return (
    <div className={`h-screen w-screen bg-cover bg-center flex items-center bg-img`}>
      <div className="container mx-auto mx-auto shadow-xl rounded-2xl pb-2 bg-white-50 min-w-80vw min-h-80vh relative">
        
        {/* Stepper */}
        <div className="w-90p mx-auto mt-10">
          <Stepper 
              steps = {steps} 
              currentStep = {currentStep}
          />
        </div>
        
        <div className="w-75 mx-auto">
          
          {/* Display Components */}
        
        <div className="container horizontal">
          <div className="my-10 p-10 ">
          
            <StepperContext.Provider value = {{
              userData,
              setUserData,
              finalData,
              setFinalData
            }}>
               {displayStep(currentStep)} 
            </StepperContext.Provider>
          </div>
        </div>

        </div>
          
          <StepperControl 
            steps = {steps}
            handleClick = {handleClick}
            currentStep = {currentStep}
          />

      </div>
    </div>
  );
}

export default App;


