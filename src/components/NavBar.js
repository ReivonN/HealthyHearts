import React, {useState} from "react";
import Logo from '../Assets/logoHeart.png';

const NavBar = () => {
    const [openMenu,setOpenMenu] = useState(false);
    
    return(
        <div id="nav">
            <nav>
                <CustomLink id="logoType"><img src={Logo} alt=""></img>Healthy Hearts</CustomLink>
                <ul id="navItems">
                    <CustomLink href="/riskcalculator">Risk Calculator</CustomLink>
                    <CustomLink href="/about">About</CustomLink>
                    <CustomLink href="/learnmore">Learn More</CustomLink>
                </ul>
            </nav>
        </div>
    )
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return (
        <li>
            <a className={path === href ? "active" : ""} href={href} {...props}>{children}</a>
        </li>
    )
}

export default NavBar;