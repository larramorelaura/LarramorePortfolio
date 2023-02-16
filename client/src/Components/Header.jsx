import React from 'react';
import {Link} from 'react-scroll';
import styles from './Header.module.css';
import Logo from "../assets/images/Logo.png"
import DownArrow from "../assets/images/DownArrow.png"

const Header = () => {
    return (
        <div className={styles.header} id="home" >
            <img className={styles.logoCenter} src={Logo}/>
            <div className={styles.scroll}>
                <Link to="about" spy={true} smooth={true} 
                    duration={500}>
                    <p>Scroll</p>
                    <img className={styles.downArrow} src={DownArrow}/>
                </Link>
            </div>
        </div>
    )
}

export default Header