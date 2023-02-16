import React from 'react';
import styles from "./NavBar.module.css";
import NavLogo from "../assets/images/NavLogo.png"
import {Link} from 'react-scroll'

const NavBar = () => {
return (
    <div className={styles.navBar}>
        <img src={NavLogo} className={styles.NavBarLogo}/>
        <div className="navlinks">
            <ul className={styles.listFormatter}>
                <li><Link activeClass={styles.active} to="about" spy={true} smooth={true} 
            duration={500}>About Me</Link></li>
                <li><Link activeClass={styles.active} to="projects" spy={true} smooth={true} duration={500}>About Portfolio</Link></li>
                <li><Link activeClass={styles.active} to="demos" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                <li><Link activeClass={styles.active} to="contact" spy={true} smooth={true} duration={500}>Contact Me</Link></li>
            </ul>
        </div>
    </div>
)
}

export default NavBar