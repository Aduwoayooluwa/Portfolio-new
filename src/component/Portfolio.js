import React from 'react'
import Skills from './Skills'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { motion, MotionConfig }from 'framer-motion'
const Portfolio = () => {
    return (
        <>
        <div className="full-pr">
            <div className="work-exp">
                <h1>Experiences</h1>
                <div>
                    <h2>Web Developer | Freelancer</h2>
                    <p className="work-place">Fiverr</p>
                    <p className="date-port">12/2019 - present</p>
                </div>

                <div>
                    <h2>Frontend Web Developer</h2>
                    <p className="work-place">Sterling Bank Plc</p>
                    <p className="date-port">04/2022 - present</p>
                </div>

                
                <div>
                    <h2>Frontend Web Developer</h2>
                    <p className="work-place">Uridium Technologies Limited</p>
                    <p className="date-port">04/2022 - present</p>
                </div>

            </div>

            <div className="education">
                <h1>Education</h1>
            <div>
                    <h2>Mechanical Engineering</h2>
                    <p className="work-place">Federal University of Technology, Akure, Ondo State, Nigeria</p>
                    <p className="date-port">04/2018 - present</p>
                </div>

                <div>
                    <h2>Science Dept.</h2>
                    <p className="work-place">Rehoboth College, Okitipupa, Ondo State, Nigeria</p>
                    <p className="date-port">04/2015 - 07/2018</p>
                </div>
            </div>


        
            <div className="skills">
                <Skills />
            </div>

            <div className="interests">

            </div>

            <div className="social-icons">

            </div>

            <div className="btn-resume">
                <button>Download Resume</button>
            </div>
        </div>
        <motion.div   animate={{ x: 10 }} transition={{ delay: 0.5 }} className='prev-page m-pr-page m-pr-page2'>
        <Link style={{textDecoration: 'none', color: 'black'}} to="/projects"><GrPrevious fontSize='2rem' color='#2C3639' /></Link>
            
        </motion.div>
        <motion.div   animate={{ x: 200 }} transition={{ delay: 0.5 }} className='next-page m-nx-page2'>
        <Link style={{textDecoration: 'none', color: 'black'}} to="/contact"><GrNext fontSize='2rem' color='#2C3639' /></Link>
        </motion.div>

        </>
    )
}

export default Portfolio