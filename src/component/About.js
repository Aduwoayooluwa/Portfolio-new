import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { myAbout } from './myAbout'
const About = () => {
    return (
        <div>
            <motion.div
            whileHover={{
                    scale: 1.1,
                    transition: { duration: 5 },
                    borderRadius: "25%"
                            }}
            className="about-bio">
                <h2>About Me</h2>

                <div className='about-text'>
                    <p>I am a professional Web developer with a lot of skills related to this field. I have 3 years of
                    experience as a web developer and I am versatile with frameworks and libraries like ReactJs, RemixJs,
                    NextJs, Redux.</p>

                    <p>
                    During the course of my learning, I have gained various accreditation and certificates from
                    various websites on the internet including the acquisition test from LinkedIn. I make sure I refine
                    my skills daily to meet up with the evolution of the internet and Technology. I have good
                    technical and reasoning abilities.
                    </p>

                    <p>
                    My refined Data Structure and Algorithm skills ensure I write more efficient programs. I have
                    always been so passionate about Web Development and Design. I always see myself to be a part of this
                    innovative world of technology.
                    </p>

                    <p>
                    Thank you for taking the time to review my application letter. I will be looking forward to seeing
                    your reply and sharing more of my abilities with you. You can contact me at
                    aduwoayooluwa2017@gmail.com
                    </p>
                </div>
                
            </motion.div>

            <motion.div   animate={{ x: 100 }} transition={{ delay: 0.5 }} className='prev-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/"><GrPrevious fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>
            <motion.div   animate={{ x: 100 }} transition={{ delay: 0.5 }} className='next-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio"><GrNext fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>

            <div className="about-img">
                <img src="about-me.jpg" alt="" />
            </div>
        </div>
    )
}

export default About