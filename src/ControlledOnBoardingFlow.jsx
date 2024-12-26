import React from 'react';

const ControlledOnBoardingFlow = ({ children, onFinish, currentStep, onNext }) => {

    const goToNext = stepData => {
        onNext(stepData);
    };

    const currentChild = React.Children.toArray(children)[currentStep];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
};

export default ControlledOnBoardingFlow;