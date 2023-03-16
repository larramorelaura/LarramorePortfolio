import React from 'react';
import styles from './About.module.css';

import NavLogo from "../assets/images/NavLogo.png"
import profile from "../assets/images/profile.png"

import Footer from './Footer';

const About = () => {
    return (
        <div className={styles.about}  id="about">
        <div className={styles.aboutHeader}>
            <img className={styles.aboutLogo} src={NavLogo} alt="Design Logo"/>
            <h1>Laura Larramore</h1>
            <p>Software Developer</p>
        </div>
        <div className={styles.forScreenSize}>
            <div className={styles.imgContainer}>
                <img className={styles.profilePic} src={profile} alt="Laura Larramore"/>
            </div>
            <div className={styles.aboutDescription}>
                <p>Hello there! My name is Laura, and I'm a software developer who loves to create awesome things with code. When I'm not building applications, you can usually find me playing video games or spending time outdoors with my family and my three furry friends - a corgi and two rescue dogs.

As a certified full stack developer, I'm always looking for new challenges and opportunities to grow in my craft. But more than that, I'm a people person who loves collaborating with others and finding creative solutions to complex problems. If you would like to collaborate on something, feel free to reach out! I'm excited to bring my diverse skills to a software development role and continue growing in the field.</p>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default About
