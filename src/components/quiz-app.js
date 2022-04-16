import React, { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
import Rate from "./components/Rating"

import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Step1 from "./step/step-1";
import Step2 from "./step/step-2";
import Step3 from "./step/step-3";


function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  //const [ratings, setRatings] = useState(0);

  const steps = [
    "Education",
    "Personal Freedom",
    "Safety and Security",
    "Social Capital",
    "Business Environment",
    "Economic Quality",
    "Infrastructure",
    "Governance",
    "Health",
    "Living Conditions",
    "Natural Environment",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1: 
        const {render2, rate} = Step1();
        return <div>{render2}{rate}
                    </div>;
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      default:
    }
  }
  

  const handleClick = ( direction ) => {
    let newStep = currentStep;

    direction === "next"? newStep++ : newStep--;

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
          {/* StepperControl */}
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


