import React from 'react'
import styles from './Project.module.css';
import Python from '../assets/images/Python.png'

const Project = () => {
  return (
    
        <div className={styles.project}  id="projects">
            <div className={styles.projectBody}>
                <div className={styles.description}>
                    <h2>Projects <br/> & Skills</h2>
                    <p>My portfolio includes various technologies, frameworks, tools, and languages. Demos are included below as well as detailed descriptions of the techonologies utilized and a link to the code on GitHub.</p>
                </div>
            </div>
            <img class={styles.smallScreen} src={Python}/>
        </div>
    
  )
}

export default Project