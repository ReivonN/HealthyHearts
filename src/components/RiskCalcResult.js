import { useContext } from 'react';
import BackBtn from '../Assets/backBtn.png';
import {multiStepContext} from '../StepContext';

const RiskCalcResult = () => {
    const {setCurrentStep, userData, setUserData, riskPercentage,riskCategory,riskImage,guidelines} = useContext(multiStepContext);

function resetCalculator() {
    setUserData('');
    setCurrentStep(2);
}

    return(
        <div className='result'>
            <div className='pinkContainer resultContainer'>
                <div className='resultElements'>
                    <a onClick={() => setCurrentStep(4)} className='full4Col backBtn'><img src={BackBtn} alt='backbutton'></img></a>
                    <button type='button' className='buttonSteps prevStep' onClick={() => setCurrentStep(2)}>Step 1</button>
                    <button type='button' className='buttonSteps prevStep' onClick={() => setCurrentStep(3)}>Step 2</button>
                    <button type='button' className='buttonSteps prevStep' onClick={() => setCurrentStep(4)}>Step 3</button>
                    <button type='button' className='buttonSteps currStep'>Results</button>
                    <h1 className='full4Col'>Your current risk</h1>
                        <div className='first2Col'>
                            <div className='smallBox riskCategory'><h4>Risk Category</h4><h1>{riskCategory}</h1></div>
                            <div className='smallBox riskTreatment'><h4>Treatment Guidelines</h4>
                                <div className='guidelines'>
                                    <h3>{guidelines}</h3>
                                </div>
                            </div>
                            <p>Visit <strong><a href='https://www.heartfoundation.org.au/bundles/healthy-living-and-eating/keeping-your-heart-healthy'>HeartFoundation</a></strong> for more guidelines.</p>
                        </div>
                        <div className='last2Col'><h1>{riskPercentage}%</h1><img src={riskImage} alt='riskImage'></img><p>Estimated 10-year risk of developing cardiovascular diseases</p></div>
                    <button type='button' className='resetBtn middle2Col' onClick={resetCalculator}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default RiskCalcResult;