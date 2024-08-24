import React, {useContext} from 'react';
import '../css/risk.css';
import RiskCalcInfo from './RiskCalcInfo';
import RiskCalcStep1 from './RiskCalcStep1';
import RiskCalcStep2 from './RiskCalcStep2';
import RiskCalcStep3 from './RiskCalcStep3';
import RiskCalcResult from './RiskCalcResult';
import {multiStepContext} from '../StepContext';

const RiskCalc = () => {
    const {currentStep} = useContext(multiStepContext);

    function displayPage(step) {
        switch(step) {
            case 1 : 
                return <RiskCalcInfo />
            case 2 : 
                return <RiskCalcStep1 />
            case 3 : 
                return <RiskCalcStep2 />
            case 4 : 
                return <RiskCalcStep3 />
            case 5 : 
                return <RiskCalcResult />
            default:
                //do nothing
        }
    }
    return(
        displayPage(currentStep)
    )
}

export default RiskCalc;