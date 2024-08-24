import React, {useState} from 'react';
import App from './App';
import Logo from './Assets/healthyHeartsLogo.png';
import LogoLow from './Assets/HeartResultLow.png';
import LogoModerate from './Assets/HeartResultModerate.png';
import LogoHigh from './Assets/HeartResultHigh.png';

export const multiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState([]);
    const [riskPoints, setRiskPoints] = useState(0);
    const [riskPercentage, setRiskPercentage] = useState(0);
    const [riskCategory, setRiskCategory] = useState('test'); //delete all finalData if not needed
    const [riskImage, setRiskImage] = useState(Logo);
    const [guidelines, setGuidelines] = useState('');

    function calculateRisk() {
        let points = 0;
        //Age and Total Cholesterol risk score calculation
        if(userData.age <= 39) {
            if(userData.age <= 34) {
                if(userData.gender === 'female') {
                    points -= 7;
                }
                else {
                    points -= 9;
                }
            }
            else {
                if(userData.gender === 'female') {
                    points -= 3;
                }
                else {
                    points -= 4;
                }
            }
            if(userData.smoker === 'yes') {
                if(userData.gender === 'female') {
                    points  += 9;
                }
                else {
                    points += 8;
                }
            }
            if(userData.totalCholesterol >= 160 && userData.totalCholesterol <= 199) {
                points += 4;
            }
            else if(userData.totalCholesterol >= 200 && userData.totalCholesterol <= 239) {
                if(userData.gender === 'female') {
                    points += 8;
                }
                else {
                    points += 7;
                }
            }
            else if(userData.totalCholesterol >= 240 && userData.totalCholesterol <= 279) {
                if(userData.gender === 'female') {
                    points += 11;
                }
                else {
                    points += 9;
                }
            }
            else if(userData.totalCholesterol >= 280) {
                if(userData.gender === 'female') {
                    points += 13;
                }
                else {
                    points += 11;
                }
            }
        }
        else if(userData.age >= 40 && userData.age <=49) {
            if(userData.age > 44) {
                points += 3;
            }
            if(userData.smoker === 'yes') {
                if(userData.gender === 'female') {
                    points += 7;
                }
                else {
                    points += 5;
                }
            }
            if(userData.totalCholesterol >= 160 && userData.totalCholesterol <= 199) {
                points += 3;
            }
            else if(userData.totalCholesterol >= 200 && userData.totalCholesterol <= 239) {
                if(userData.gender === 'female') {
                    points += 6;
                }
                else {
                    points += 5;
                }
            }
            else if(userData.totalCholesterol >= 240 && userData.totalCholesterol <= 279) {
                if(userData.gender === 'female') {
                    points += 8;
                }
                else {
                    points += 6;
                }
            }
            else if(userData.totalCholesterol >= 280) {
                if(userData.gender === 'female') {
                    points += 10;
                }
                else {
                    points += 8;
                }
            }
        }
        else if(userData.age >= 50 && userData.age <= 59) {
            if(userData.age <= 54) {
                points += 6;
            }
            else {
                points += 8;
            }
            if(userData.smoker === 'yes') {
                if(userData.gender === 'female') {
                    points += 4;
                }
                else {
                    points += 3;
                }
            }
            if(userData.totalCholesterol >= 160 && userData.totalCholesterol <= 199) {
                points += 2;
            }
            else if(userData.totalCholesterol >= 200 && userData.totalCholesterol <= 239) {
                if(userData.gender === 'female') {
                    points += 4;
                }
                else {
                    points += 3;
                }
            }
            else if(userData.totalCholesterol >= 240 && userData.totalCholesterol <= 279) {
                if(userData.gender === 'female') {
                    points += 5;
                }
                else {
                    points += 4;
                }
            }
            else if(userData.totalCholesterol >= 280) {
                if(userData.gender === 'female') {
                    points += 7;
                }
                else {
                    points += 5;
                }
            }
        }
        else if(userData.age >= 60 && userData.age <= 69) {
            if(userData.age <= 64) {
                points += 10;
            }
            else {
                if(userData.gender === 'female') {
                    points += 12;
                }
                else {
                    points += 11;
                }
            }
            if(userData.smoker === 'yes') {
                if(userData.gender === 'female') {
                    points += 2;
                }
                else {
                    points += 1;
                }
            }
            if(userData.totalCholesterol >= 160 && userData.totalCholesterol <= 199) {
                points += 1;
            }
            else if(userData.totalCholesterol >= 200 && userData.totalCholesterol <= 239) {
                if(userData.gender === 'female') {
                    points += 2;
                }
                else {
                    points += 1;
                }
            }
            else if(userData.totalCholesterol >= 240 && userData.totalCholesterol <= 279) {
                if(userData.gender === 'female') {
                    points += 3;
                }
                else {
                    points += 2;
                }
            }
            else if(userData.totalCholesterol >= 280) {
                if(userData.gender === 'female') {
                    points += 4;
                }
                else {
                    points += 3;
                }
            }
        }
        else if(userData.age >= 70) {
            if(userData.age <= 74) {
                if(userData.gender === 'female') {
                    points += 14;
                }
                else {
                    points += 12;
                }
            }
            else {
                if(userData.gender === 'female') {
                    points += 16;
                }
                else {
                    points += 13;
                }
            }
            if(userData.smoker === 'yes') {
                points += 1;
            }
            if(userData.totalCholesterol >= 160 && userData.totalCholesterol <= 199) {
                if(userData.gender === 'female') {
                    points += 1;
                }
            }
            else if(userData.totalCholesterol >= 200 && userData.totalCholesterol <= 239) {
                if(userData.gender === 'female') {
                    points += 1;
                }
            }
            if(userData.totalCholesterol >= 240 && userData.totalCholesterol <= 279) {
                if(userData.gender === 'female') {
                    points += 2;
                }
                else {
                    points += 1;
                }
            }
            else if(userData.totalCholesterol >= 280) {
                if(userData.gender === 'female') {
                    points += 2;
                }
                else {
                    points += 1;
                }
            }
        }
        // HDL risk score calculation
        if(userData.hdlChol >= 60) {
            points -= 1;
        }
        else if(userData.hdlChol <= 49 && userData.hdlChol >= 40) {
            points += 1;
        }
        else if(userData.hdlChol < 40) {
            points += 2;
        }
        //Systolic BP and treatment  calculation
        if(userData.sysBP >= 120 && userData.sysBP <= 129) {
            if(userData.treatmentStatus === 'yes') {
                if(userData.gender === 'female') {
                    points += 3;
                }
                else {
                    points += 1;
                }
            }
            else {
                if(userData.gender === 'female') {
                    points += 1;
                }
            }
        } 
        else if(userData.sysBP >= 130 && userData.sysBP <= 159) {
            if(userData.sysBP <= 139) {
                if(userData.treatmentStatus === 'yes') {
                    if(userData.gender === 'female') {
                        points += 4;
                    }
                    else {
                        points += 2;
                    }
                }
                else {
                    if(userData.gender === 'female') {
                        points += 2;
                    }
                    else {
                        points += 1;
                    }
                }
            }
            else {
                if(userData.treatmentStatus === 'yes') {
                    if(userData.gender === 'female') {
                        points += 5;
                    }
                    else {
                        points += 2;
                    }
                }
                else {
                    if(userData.gender === 'female') {
                        points += 3;
                    }
                    else {
                        points += 1;
                    }
                }
            }
        }
        else if(userData.sysBP >= 160) {
            if(userData.treatmentStatus === 'yes') {
                if(userData.gender === 'female') {
                    points += 6;
                }
                else {
                    points += 3;
                }
            }
            else {
                if(userData.gender === 'female') {
                    points += 4;
                }
                else {
                    points += 2;
                }
            }
        }
        return points;
    }

    function calculatePercentage(rp) {
        let percentage = 0;
        if((rp >= 9 && rp <= 12 && userData.gender == 'female') || (rp >= 1 && rp <= 4 && (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 1;
        }
        else if(((rp == 13 || rp == 14)&& userData.gender == 'female') || ((rp == 5 || rp == 6)&& (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 2;
        }
        else if((rp == 15 && userData.gender == 'female') || (rp == 7 && (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 3;
        }
        else if((rp == 16 && userData.gender == 'female') || (rp == 8 && (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 4;
        }
        else if((rp == 17 && userData.gender == 'female') || (rp == 9 && (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 5;
        }
        else if((rp == 18 && userData.gender == 'female') || (rp == 10 && (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 6;
        }
        else if((rp == 19 && userData.gender == 'female') || (rp == 11 && (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 8;
        }
        else if((rp == 20 && userData.gender == 'female') || (rp == 12 && (userData.gender == 'male' || userData.gender == 'other'))) {
            if(userData.gender == 'female') {
                percentage = 11;
            }
            else {
                percentage = 10;
            }
        }
        else if((rp == 21 && userData.gender == 'female') || (rp == 13 && (userData.gender == 'male' || userData.gender == 'other'))) {
            if(userData.gender == 'female') {
                percentage = 14;
            }
            else {
                percentage = 12;
            }
        }
        else if((rp == 22 && userData.gender == 'female') || (rp == 14 && (userData.gender == 'male' || userData.gender == 'other'))) {
            if(userData.gender == 'female') {
                percentage = 17;
            }
            else {
                percentage = 16;
            }
        }
        else if((rp == 23 && userData.gender == 'female') || (rp == 15 && (userData.gender == 'male' || userData.gender == 'other'))) {
            if(userData.gender == 'female') {
                percentage = 22;
            }
            else {
                percentage = 20;
            }
        }
        else if((rp == 24 && userData.gender == 'female') || (rp == 16 && (userData.gender == 'male' || userData.gender == 'other'))) {
            if(userData.gender == 'female') {
                percentage = 27;
            }
            else {
                percentage = 25;
            }
        }
        else if((rp >= 25 && userData.gender == 'female') || (rp >= 17 && (userData.gender == 'male' || userData.gender == 'other'))) {
            percentage = 30;
        }
        else {
            percentage = '<1';
        }
        setRiskPercentage(percentage);
        return percentage;
    }

    function getRiskCategory(percent) {
        let category = 'REALLY LOW'
        if(percent <= 10) {
            category = "LOW"
        }
        else if(percent > 10 && percent<= 20) {
            category = "MODERATE"
        }
        else if(percent > 20) {
            category = "HIGH"
        }
        setRiskCategory(category);
        return category;
    }

    function getRiskImage(category) {
        let image = Logo;
        if(category === 'LOW'){
            image = LogoLow;
        }
        else if(category === 'MODERATE'){
            image = LogoModerate;
        }
        else if(category === 'HIGH'){
            image = LogoHigh;
        }
        setRiskImage(image);
        return image;
    }

    function getGuidelines(category) {
        let guide = 'You have no specific issues affecting your health. Please visit the link below to find a guideline applicable to you.';
        //in order of most impact towards risk percentage
        if(userData.totalCholesterol > 240){
            guide = 'Lower your cholesterol levels. Being more active, knowing your dietary fats and eating a heart healthy diet will lower your high cholesterol.'
        }
        else if(userData.smoker === 'yes'){
            guide = 'Reduce smoking. Smoking damages more than just your lungs. It also affects your blood vessels leading to your heart, brain and other parts of your body.'
        }
        else if(userData.totalCholesterol > 200 || userData.sysBP > 120){
            guide = 'Be more active. Doing regular physical activities helps control risk factors such as High blood pressure and cholesterol and being overweight.'
        }
        else if(userData.hdlChol < 50){
            guide = 'Increase HDL Cholesterol. Boost your HDL levels by exercising and including healthy fats and antioxidant-rich foods into your diet.'
        }
        else if(category === 'REALLY LOW') {
            guide = 'Well done! Keep it up. Visit the link below to find guidelines on maintaining a healthy heart.';
        }
        setGuidelines(guide);
        return guide;
    }

    return(
        <div>
            <multiStepContext.Provider value={{currentStep,setCurrentStep,userData,setUserData,riskPoints, setRiskPoints,calculateRisk,
                riskPercentage,setRiskPercentage,calculatePercentage,riskCategory, setRiskCategory,getRiskCategory,riskImage, setRiskImage,getRiskImage,guidelines,setGuidelines,getGuidelines}}>
                <App />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext;