import React, { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";

import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Step1 from "./step/step-1";
import Step2 from "./step/step-2";
import Step3 from "./step/step-3";


function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Environment",
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
        return <Step1 />
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
    <div className={`h-screen w-screen bg-cover bg-center flex items-center bg-[url(./assets/img/environment.jpg)]`}>
      <div className="container mx-auto md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-[rgb(255,255,255,0.45)] min-w-[80vw] min-h-[80vh] relative">
        
        {/* Stepper */}
        <div className="w-[90%] mx-auto mt-10">
          {/* <Stepper 
              steps = {steps} 
              currentStep = {currentStep}
          /> */}
          <div className="text-blue text-4xl">Hello</div>
        </div>
        
        <div className="w-3/4 mx-auto">
        <div className="container horizontal">

          {/* Display Components */}
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


