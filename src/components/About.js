import Avatar from '../Assets/healthyHeartsLogo.png';

const About = () => {

    return(
        <div className='grid3'>
            <img src={Avatar} alt='avatarImage'></img>
            <div className='pinkContainer content'>
                <h1>Our Mission</h1>
                <div className='aboutText'>
                <p>The purpose of <strong>Healthy Hearts</strong> is simple: provide young adults with simple tools and useful information to <strong>bring awareness</strong> to their cardiovascular health.</p>
                <br></br>
                <p>Cardiovascular health is often associated with older adults, and because you are young you might feel invincible but now is the perfect time to take control and make the first steps toward a healthier future. </p>
                <br></br>
                <p>New Zealand’s overall health and well-being is not in a good place and currently places third in global obesity rates. By making early warning systems easily accessible and more widespread, it has a chance to bring awareness to potential health risks and diseases and get treatment for those in need early before it is too late.</p>
                <br></br>
                <p>By aiming towards a healthier future for all New Zealanders we can work with the rest of the world in achieving the sustainable development goal of “Ensuring healthy lives and promote well-being for all at all ages.”</p>
                </div>

            </div>
        </div>
    )
}

export default About;