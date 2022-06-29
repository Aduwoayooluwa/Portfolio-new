import React from 'react'
import './Skills.css'
import { skills } from './Sk'
const Skills = () => {
    return (
        <div>
            <div className="skill-list">
            <a class="close" href="#">&times;</a>
                {skills.map((item, index) => (
                    <div className="content">
                        <p key={index}>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills