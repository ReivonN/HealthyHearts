import React, {useState} from 'react';
import RiskCalcInfo from './RiskCalcInfo';
import RiskCalcStep1 from './RiskCalcStep1';
import RiskCalcStep2 from './RiskCalcStep2';
import RiskCalcStep3 from './RiskCalcStep3';
import RiskCalcResult from './RiskCalcResult';

const NavigateSteps = (step) => {
    const steps = [<RiskCalcInfo/>,<RiskCalcStep1/>,<RiskCalcStep2/>,<RiskCalcStep3/>,<RiskCalcResult/>]

    function next() {
        // setCurrentStep(i =>{
        //     if(i >= steps.length){
        //             return i
        //     }
        //     return i + 1
        // })
        console.log(steps.length)
    }
    return (
        steps
    )

    // const [currentStep, setCurrentStep] = useState(0);
    // let step;
    // function next(){
    //     setCurrentStep(i =>{
    //         if(i >= steps.length){
    //             return i
    //         }
    //         return i + 1
    //     })
    // }

    // function back(){
    //     setCurrentStep(i =>{
    //         if(i <= 0){
    //             return i
    //         }
    //         return i - 1
    //     })
    // }

    // function goTo(index){
    //     setCurrentStep(index)
    // }

    // return(
    //     currentStep,
    //     step = steps[currentStep],
    //     steps,
    //     goTo,
    //     next,
    //     back
    // )
}

export default NavigateSteps;