import React, { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";

import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Step1 from "./step/natural-environment";
import Step2 from "./step/personal-freedom";
import Step3 from "./step/safety-security";
import Step4 from "./step/social-capital";
import Step5 from "./step/business-environment";
import Step6 from "./step/economic-quality";
import Step7 from "./step/infrastructure";
import Step8 from "./step/governance";
import Step9 from "./step/health";
import Step10 from "./step/living-conditions";
import Step11 from "./step/education";
import testRoute from "../fetcher";
import getUsers from "../fetcher";


function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Natural Environment",
    "Personal Freedom",
    "Safety and Security",
    "Social Capital",
    "Business Environment",
    "Economic Quality",
    "Infrastructure",
    "Governance",
    "Health",
    "Living Conditions",
    "Education",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1: 
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4 />
      case 5:
        return <Step5 />
      case 6:
        return <Step6 />
      case 7:
        return <Step7 />
      case 8:
        return <Step8 />
      case 9:
        return <Step9 />
      case 10:
        return <Step10 />
      case 11:
        return <Step11 />
      default:
    }
  }

  const handleClick = ( direction ) => {
    let newStep = currentStep;

    if (direction === "next"){
      newStep++
    }
    else if (direction === "confirm"){
      getUsers('test@example.com','abc123').then(res => {console.log(res.results)
    })}
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
          {/* StepperControl */}
          <StepperControl 
            steps = {steps}
            handleClick = {handleClick}
            currentStep = {currentStep}
          />

          <div>
            {console.log(userData)}
          </div>

      </div>
    </div>
  );
}

export default App;


