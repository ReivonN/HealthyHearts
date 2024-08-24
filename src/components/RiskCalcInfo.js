import { useContext } from 'react';
import Logo from '../Assets/healthyHeartsLogo.png';
import {multiStepContext} from '../StepContext';

const RiskCalcInfo = () => {
    const {setCurrentStep} = useContext(multiStepContext);
    return(
        <div className='calcInfo'>
            <img src={Logo} className='full4Col' alt='heartlogo'></img>
            <h1 className='full4Col'>Cardiovascular Risk Calculator</h1>
            <h4 className='full4Col'>Calculate your risk of developing cardiovascular diseases within the next 10 years</h4>
            <h2 className='middle2Col'>Before you begin<span className='moreInfo'>i</span>
                <div className='toDisplay pinkContainer'>
                    <p>This calculator uses the <strong>Framingham Risk Score</strong> to give you a general idea of your current cardiovascular health. Please visit your doctor for a more in-depth analysis.</p>
                </div>
            </h2>
            <h4 className='full4Col'>For more accurate results you will need your:</h4>
            <ul className='list middle2Col'>
                <li><h4>Total cholesterol in mg/dL</h4></li>
                <li><h4>HDL cholesterol in mg/dL</h4></li>
                <li><h4>Systolic Blood Pressure in mm/Hg</h4></li>
            </ul>
            <button className='middle2Col startBtn' onClick={() => setCurrentStep(2)}>Start now</button>
        </div>
    )
}

export default RiskCalcInfo;