import { useState } from "react";
import ControlledOnBoardingFlow from "./ControlledOnBoardingFlow";
import UncontrolledOnBoardingFlow from "./UncontrolledOnBoardingFlow";

const OnBoardingStep1 = ({ goToNext }) => {
  return <div>
    <h1>OnBoardingStep1</h1>
    <button onClick={() => goToNext({ name: "Sam Smith" })}>Next</button>
  </div>;
};

const OnBoardingStep2 = ({ goToNext }) => {
  return <div>
    <h1>OnBoardingStep2</h1>
    <button onClick={() => goToNext({ age: 30 })}>Next</button>
  </div>;
};

const OnBoardingStep3 = ({ goToNext }) => {
  return <div>
    <h1>OnBoardingStep3</h1>
    <p>Congratulations! You qualify for our Senior citizenship programme.</p>
    <button onClick={() => goToNext({})}>Next</button>
  </div>;
};

const OnBoardingStep4 = ({ goToNext }) => {
  return <div>
    <h1>OnBoardingStep4</h1>
    <button onClick={() => goToNext({ phone: "1234567890" })}>Next</button>
  </div>;
};

function App() {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const onNext = stepData => {
    const nextStep = currentStep + 1;
    const updatingData = { ...onBoardingData, ...stepData };
    console.log('updatingData', updatingData);

    if (nextStep < 4) {
      setCurrentStep(nextStep);
    } else {
      alert(JSON.stringify(updatingData));
    }
    setOnBoardingData(updatingData);
  };


  return (
    <ControlledOnBoardingFlow currentStep={currentStep} onNext={onNext}>
      <OnBoardingStep1 />
      <OnBoardingStep2 />
      {onBoardingData.age >= 60 && <OnBoardingStep3 />}
      <OnBoardingStep4 />
    </ControlledOnBoardingFlow>
  );
}

export default App;
