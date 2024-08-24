import Avatar from '../Assets/healthyHeartsLogo.png';

const LearnMore = () => {
    return(
        <div className="learnMore">
            <div className="pinkContainer">
                <h1>Useful Links</h1>
                <div className="content">
                    <p>Help in the fight against heart disease in New Zealand</p>
                    <a href="https://www.heartfoundation.org.nz/" target="_blank"><button type="button">Heart Foundation</button></a>
                    <p>Utilise an extensive list of health calculators</p>
                    <a href="https://reference.medscape.com/guide/medical-calculators" target="_blank"><button type="button">medscape.com</button></a>
                    <p>Cardiovascular disease stats relevant to NZ</p>
                    <a href="https://www.health.govt.nz/our-work/populations/maori-health/tatau-kahukura-maori-health-statistics/nga-mana-hauora-tutohu-health-status-indicators/cardiovascular-disease" target="_blank"><button type="button">health.govt.nz</button></a>
                    <p>Learn more about the Sustainable Development Goals</p>
                    <a href="https://sdgs.un.org/goals/goal3" target="_blank"><button type="button">sdgs.un.org</button></a>
                </div>
            </div>
            <img src={Avatar} alt='avatarImage'></img>
        </div>
    )
}

export default LearnMore;