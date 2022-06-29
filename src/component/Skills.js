import React from 'react'
import './Skills.css'
import { skills } from './Sk'
const Skills = () => {
    return (
        <div className="skills">
            <h2>My Skills</h2>
            <div className="skill-list">
                
                {skills.map((item, index) => (
                    <div>
                        <p key={index}>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills