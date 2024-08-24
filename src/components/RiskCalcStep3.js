import { useContext, useState } from 'react';
import Logo from '../Assets/healthyHeartsLogo.png';
import BackBtn from '../Assets/backBtn.png';
import {multiStepContext} from '../StepContext';
import Modal from './Modal';

const RiskCalcStep3 = () => {
    const {setCurrentStep, userData, setUserData,riskPoints,calculateRisk,setRiskPoints,riskPercentage,calculatePercentage,setRiskPercentage,
        riskCategory,getRiskCategory,setRiskCategory,riskImage,getRiskImage,setRiskImage,guidelines,getGuidelines,setGuidelines} = useContext(multiStepContext);
    const [sysBPDisabled, setSysBPDisabled] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    
    const sysBPClick = () => {
        setSysBPDisabled(!sysBPDisabled)
        setUserData({...userData, "sysBP" : 91})
    };

    function submit(e) {
        e.preventDefault();
        console.log(userData.treatmentStatus)
        if(userData.treatmentStatus === undefined){
            setErrorMessage('Please select your treatment status');
            setOpenModal(true);
        }
        else {
            let p = calculateRisk();
            setRiskPoints(p);

            let percent = calculatePercentage(p);
            // setRiskPercentage(percent);
        
            let category = getRiskCategory(percent);
            // setRiskCategory(category);

            getRiskImage(category); 
            // setRiskImage(image);

            getGuidelines(category); 
            // setGuidelines(guide);
            
            setCurrentStep(5);
        }
    }

    return(
        <div className='step'>
            <form className='pinkContainer' onSubmit={submit}>
                <div className='formElements'>
                    <a onClick={() => setCurrentStep(3)} className='full4Col backBtn'><img src={BackBtn} alt=''></img></a>
                    <button type='button' className='buttonSteps prevStep' onClick={() => setCurrentStep(2)}>Step 1</button>
                    <button type='button' className='buttonSteps prevStep' onClick={() => setCurrentStep(3)}>Step 2</button>
                    <button type='button' className='buttonSteps currStep'>Step 3</button>
                    <button type='button' className='buttonSteps inactive'>Results</button>
                    <h1 className='full4Col'>Blood Pressure</h1> 
                    <label className='label full4Col' for='sysBP'><p>Systolic Blood Pressure(mm Hg)</p></label>
                    <input type='text' pattern='[0-9]*' disabled={sysBPDisabled} name='sysBP' value={userData['sysBP']} onChange={(e)=>setUserData({...userData, "sysBP" : e.target.value})} placeholder='normal <120' className='inputTxt first3Col' required></input>
                    <label className='unsureBtn'>
                        <input type='radio' onClick={sysBPClick} checked={sysBPDisabled}/>
                        <span class="checkmark"></span>
                        unsure
                    </label>
                    <label className='label full4Col'><p>Treated with medicine?</p></label>
                    <div className='first2Col'>
                        <select className='dropDown' value={userData['treatmentStatus']} onChange={(e)=>setUserData({...userData, "treatmentStatus" : e.target.value})} required>
                            <option value='none' selected disabled hidden>Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button type='submit' className='nextBtn full4Col'>Calculate</button>
                </div>
            </form>
            <img src={Logo} className='avatarImage'></img>
            <Modal open={openModal} onClose={() => setOpenModal(false)} message={errorMessage}/>
        </div>
    )
}

export default RiskCalcStep3;