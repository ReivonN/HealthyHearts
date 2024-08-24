import { useContext, useState } from 'react';
import Logo from '../Assets/healthyHeartsLogo.png';
import BackBtn from '../Assets/backBtn.png';
import {multiStepContext} from '../StepContext';
import Modal from './Modal';

const RiskCalcStep1 = () => {
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
    const [openModal, setOpenModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    function submit(e) {
        e.preventDefault();
        if(userData.gender !== undefined && userData.smoker !== undefined){
            setCurrentStep(3);
        }
        else if(userData.gender === undefined || userData.smoker === undefined) {
            if(userData.gender === undefined) {
                setErrorMessage('Please select a gender');
            }
            else {
                setErrorMessage('Please select your smoking status');
            }
            setOpenModal(true);
        }
    }

    return(
        <div className='step'>
            <form className='pinkContainer' onSubmit={submit}>
                <div className='formElements'>
                    <a onClick={() => setCurrentStep(1)} className='full4Col backBtn'><img src={BackBtn} alt=''></img></a>
                    <button type='button' className='buttonSteps currStep'>Step 1</button>
                    <button type='button' className='buttonSteps inactive'>Step 2</button>
                    <button type='button' className='buttonSteps inactive'>Step 3</button>
                    <button type='button' className='buttonSteps inactive'>Results</button>
                    <h1 className='full4Col'>Age and Gender</h1>
                    <label className='label full4Col'><p>Age</p></label>
                    <input type='text' pattern="[0-9]*" value={userData['age']} onChange={(e)=>setUserData({...userData, "age" : e.target.value})} placeholder='Your age' className='inputTxt first3Col' required></input>
                    <label className='label full4Col' for='gender'><p>Gender</p></label>
                    <div className='first2Col'>
                        <select className='dropDown' value={userData['gender']} onChange={(e)=>setUserData({...userData, "gender" : e.target.value})} required>
                            <option value='none' selected disabled hidden>Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <label className='label full4Col' for='smoke'><p>Do you smoke?</p></label>
                    <div className='first2Col'>
                        <select className='dropDown' value={userData['smoker']} onChange={(e)=>setUserData({...userData, "smoker" : e.target.value})} required>
                            <option value='none' selected disabled hidden>Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button type='submit' className='nextBtn full4Col'>Next</button>
                </div>
            </form>
            <img src={Logo} className='avatarImage'></img>
            <Modal open={openModal} onClose={() => setOpenModal(false)} message={errorMessage}/>
        </div>
    )
}

export default RiskCalcStep1;