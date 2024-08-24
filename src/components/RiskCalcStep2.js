import {useContext,useState} from 'react';
import BackBtn from '../Assets/backBtn.png';
import Logo2 from '../Assets/healthyHeartsLogo3.png';
import {multiStepContext} from '../StepContext';

const RiskCalcStep2 = () => {
    const {setCurrentStep, userData, setUserData} = useContext(multiStepContext);
    const [tCholDisabled, setTCholDisabled] = useState(false);
    const [hdlDisabled, setHDLCholDisabled] = useState(false);

    const tCholClick = () => {
        setTCholDisabled(!tCholDisabled)
        setUserData({...userData, "totalCholesterol" : 185})
    };

    const hdlClick = () => {
        setHDLCholDisabled(!hdlDisabled)
        setUserData({...userData, "hdlChol" : 55})
    };

    function submit(e) {
        e.preventDefault();
        setCurrentStep(4);
    }

    return(
        <div className='step'>
                <form className='pinkContainer' onSubmit={submit}>
                    <div className='formElements'>
                        <a onClick={() => setCurrentStep(2)} className='full4Col backBtn'><img src={BackBtn} alt=''></img></a>
                        <button type='button' className='buttonSteps prevStep'  onClick={() => setCurrentStep(2)}>Step 1</button>
                        <button type='button' className='buttonSteps currStep'>Step 2</button>
                        <button type='button' className='buttonSteps inactive'>Step 3</button>
                        <button type='button' className='buttonSteps inactive'>Results</button>
                        <h1 className='full4Col'>Cholesterol</h1>
                        <label className='label full4Col' for='totalChol'><p>Total Cholesterol(mg/dL)</p></label>
                        <input type='text' pattern="[0-9]*" disabled={tCholDisabled} id='totalChol' name='totalChol' value={userData['totalCholesterol']} onChange={(e)=>setUserData({...userData, "totalCholesterol" : e.target.value})} 
                            placeholder='normal <200' className='inputTxt first3Col' required></input>
                        <label className='unsureBtn'>
                            <input type='radio' onClick={tCholClick} checked={tCholDisabled}/>
                            <span class="checkmark"></span>
                            unsure
                        </label>
                        <label className='label full4Col' for='hdlChol'><p>HDL Cholesterol(mg/dL)</p></label>
                        <input type='text' pattern="[0-9]*" disabled={hdlDisabled} name='hdlChol' value={userData['hdlChol']} onChange={(e)=>setUserData({...userData, "hdlChol" : e.target.value})} placeholder='normal >50' className='inputTxt first3Col' required></input>
                        <label className='unsureBtn'>
                            <input type='radio'onClick={hdlClick} checked={hdlDisabled}/>
                            <span class="checkmark"></span>
                            unsure
                        </label>
                        <button type='submit' className='nextBtn full4Col'>Next</button>
                    </div>
                </form>
                <img src={Logo2} className='avatarImage'></img>
            </div>
    )
}

export default RiskCalcStep2;