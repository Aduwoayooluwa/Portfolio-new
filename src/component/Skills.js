import React from 'react'
import './Skills.css'
import { skills } from './Sk'
const Skills = () => {
    return (
        <div>
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