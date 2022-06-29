import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import { ImLinkedin, ImTwitter } from 'react-icons/im'
import { GrGithub } from 'react-icons/gr'
import { GrNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { motion, MotionConfig }from 'framer-motion';
import Typewriter from "typewriter-effect";

const Hero = () => {

    return (
        <div>
        <div className="hero">
            <div className="bio">
            <Typewriter
                    
                    onInit={(typewriter)=> {

                    typewriter
                    
                    .typeString("Welcome to ")
                        
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("My Portfolio Website")
                    .start();
                    }}
                    />

                <p id='name'>Hi I'm Ayo Aduwo</p>
                <p>I'm a Full-Stack Web and Blockchain Developer passionate about building and creating websites for small, medium and large enterprises</p>
            </div>

            <motion.div className='circle' 
                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 10 },
                    borderRadius: "50%"
                }}
                whileTap={{ scale: 0.9, rotate: [0, 0, 360, 360, 0], }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                }}
                >
                <span>
                    
                </span>
            </motion.div>

            <div className="btns-hero">
                <div>
                    <button id="view-more"><Link style={{textDecoration: 'none', color: 'white'}} to='/about'>View More</Link></button>
                </div>

                <div>
                    <button id="hire-me">
                        <Link style={{textDecoration: 'none', color: 'white'}} to='/contact'>Hire Me</Link>
                    </button>
                </div>
            </div>

            <motion.div   animate={{ x: 150 }} transition={{ delay: 0.5 }} className='next-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/about"><GrNext fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>

            <div className="s-icons">
                <motion.div animate={{ y: 50, x:30 }} whileHover={{scale: 1.2,  transition: { duration: 3 }}} transition={{ delay: 2 }} className='btns'>
                    <a href='https://facebook.com/ayoaduwo03/'><BsFacebook className='icon-social' fontSize='1.5rem' color='#1363DF' /></a>
                </motion.div>
                
                <motion.div animate={{ y: 50, x:30 }} whileHover={{scale: 1.2,  transition: { duration: 3 }}} transition={{ delay: 3 }} className='btns'>   
                    <a href='https://www.linkedin.com/in/aduwo-ayooluwa/'><ImLinkedin className='icon-social' fontSize='1.5rem' color='#1363DF'/></a>
                </motion.div>
                    
                <motion.div animate={{ y: 50, x:30 }} whileHover={{scale: 1.2,  transition: { duration: 2 }}} transition={{ delay: 4 }} className='btns'>
                    <a href='https://twitter.com/AyoAduwo' ><ImTwitter className='icon-social' fontSize='1.5rem' color='#47B5FF'/></a>
                </motion.div>

                <motion.div animate={{ y: 50, x:30 }} whileHover={{scale: 1.2,  transition: { duration: 2 }}} transition={{ delay: 5 }} className='btns'>
                    <a href='https://github.com/Aduwoayooluwa'><GrGithub className='icon-social' fontSize='1.5rem' /></a>
                </motion.div>
                
            </div>

        </div>
        <div className='img-sec'>
            {/* Image Profile */}
            <MotionConfig reducedMotion="user">
            <div className="example-container">
                <motion.div
                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 3 },
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                whileTap={{ scale: 0.9, rotate: [0, 0, 360, 360, 0], }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: "reverse",
                    repeatDelay: 5
                }}
                >

                <img src="img-hero.png" alt="" />
                </motion.div>
            
            </div>
        </MotionConfig>
        
        </div>

        </div>
    )
}

export default Hero