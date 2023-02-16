import React from 'react';
import styles from './Contact.module.css';
import {Link} from 'react-router-dom';
import LinkedIn from "../assets/images/LinkedIn.png"
import GitHub from "../assets/images/GitHub.png"
import Email from "../assets/images/Email.png"

const Contact = () => {
    return (
        <div className={styles.contact} id="contact">
            <h1 className={styles.header}>CONTACT</h1>
            <div className={styles.contactActions}>
                <ul className={styles.contactList}>
                    <li><a href="https://www.linkedin.com/in/laura-larramore-9a2603179/" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={LinkedIn}/></a></li>
                    <li><a href="https://github.com/larramorelaura" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={GitHub}/></a></li>
                    <li><a href="mailto:may.lauraa@gmail.com?subject=Porfolio%20Contact" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={Email}/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact