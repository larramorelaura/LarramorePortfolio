import React from 'react';
import styles from './About.module.css';
import {Link} from 'react-scroll';
import NavLogo from "../assets/images/NavLogo.png"
import profile from "../assets/images/profile.png"
import VermArrowDown from "../assets/images/VermArrowDown.png"
import Footer from './Footer';

const About = () => {
    return (
        <div className={styles.about}  id="about">
        <div className={styles.aboutHeader}>
            <img className={styles.aboutLogo} src={NavLogo}/>
            <h1>Laura Larramore</h1>
            <p>Software Developer</p>
        </div>
        <div className={styles.forScreenSize}>
            <div className={styles.imgContainer}>
                <img className={styles.profilePic} src={profile} />
            </div>
            <div className={styles.aboutDescription}>
                <p>I'm a recently certified full stack developer with a background in education and technology support. Skilled in Python, JavaScript, and web frameworks like Flask and React, I've built apps that leverage technologies like Google Vision AI and Socket.io to deliver engaging, streamlined user experiences. I'm excited to bring my diverse skills to a software development role and continue growing in the field.</p>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default About