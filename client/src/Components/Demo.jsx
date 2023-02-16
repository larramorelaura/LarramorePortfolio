import React from 'react';
import GetOutside from "../assets/videos/GetOutside.mp4";
import TaskHero from "../assets/videos/TaskHero.mp4";
import styles from './Demo.module.css'

const Demo = () => {
    return (
        <div className={styles.demoContainer} id="demos">
            <div className={styles.projectContainer}>
                <video className={styles.demoVid} src={GetOutside} type="video/mp4" controls autoplay></video>
                <div className={styles.projectDescription}>
                    <h2 className="text-left">Get Outside Bug Catcher</h2>
                    <p className="text-left-justify" >This app uses Balsamiq to design an intuitive wireframe and workflow. It also incorporates Google Vision AI to allow users to upload photos for insect identification and add stickers to their profiles. I designed a MySQL database with many-to-many relationships and used the Flask framework to render database-related content on the page while implementing logic, authorizations, and flash messages. I also employed back-end verifications and validations to maintain data features such as creating, reading, updating, and deleting.</p>
                    <a href="https://github.com/larramorelaura/Bug-Catcher-App" target="_blank" rel="noopener noreferrer"><button className={styles.demoButton}>View On GitHub</button></a>
                </div>
            </div>
            <div className={styles.projectContainer}>
                <video className={styles.demoVid} src={TaskHero} type="video/mp4" controls autoplay></video>
                <div className={styles.projectDescription}>
                    <h2 className="text-left">TaskHero</h2>
                    <p className="text-left-justify" >TaskHero is a gamified chore app designed for kids using React, Node.js, Express, and MongoDB. The app was created with a focus on user experience, with wireframes and workflows designed using Figma to ensure a consistent UX throughout the interface. For parents, a feedback feature was implemented to provide feedback to their children when approving chores. To ensure a secure user experience, I employed secure logins using JWT, cookies, backend, and frontend validations, as well as role-based access controls. To provide a streamlined user experience and consistency, I created a chore system with live updates using Socket.io. MongoDB and Express were utilized for their flexible structure and use of one-to-many relationships.</p>
                    <a href="https://github.com/larramorelaura/Task-Hero" target="_blank" rel="noopener noreferrer"><button className={styles.demoButton}>View On GitHub</button></a>
                </div>
            </div>
        </div>
    )
}

export default Demo