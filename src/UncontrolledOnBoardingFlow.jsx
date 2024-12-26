import React, { useState } from 'react';

const UncontrolledOnBoardingFlow = ({ children, onFinish }) => {
    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);

    const goToNext = stepData => {
        const nextStep = currentStep + 1;
        const updatingData = { ...onBoardingData, ...stepData };
        console.log('updatingData', updatingData);

        if (nextStep < children.length) {
            setCurrentStep(nextStep);
        } else {
            onFinish(updatingData);
        }
        setOnBoardingData(updatingData);
    };

    const currentChild = React.Children.toArray(children)[currentStep];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
};

export default UncontrolledOnBoardingFlow;