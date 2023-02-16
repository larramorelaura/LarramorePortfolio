import React from 'react';
import UpArrow from "../assets/images/UpArrow.png";
import styles from './Footer.module.css';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <Link to="home" spy={true} smooth={true} 
        duration={500}>
            <div class={styles.navUp}>
                <img class={styles.upArrow}  src={UpArrow}/>
                <p>To the top</p>
            </div>
        </Link>
    )
}

export default Footer