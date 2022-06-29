import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr'
import {motion} from 'framer-motion'
import Skills from './Skills'

const Portfolio = () => {
    const [view, setView] = useState(false)


    return (
        <div className="portfolio">
            <div className="projects">

                <div>
                    <img src='amazon.png' alt="" />
                    <h2>Amazon Clone</h2>
                    <p>An Ecommerce Website using React Js. The store api was gotten from Fake Store API</p>
                    <button><a href='#'>Open</a></button>
                </div>
                    
                <div>
                    <img src='amazon.png' alt="" />
                    <h2>Jumia Clone</h2>
                    <p>An Ecommerce Website using React Js. This is a Jumia Clone. The store API was gotten from Fake Store API</p>
                    <button><a href='#'>Open</a></button>
                </div>

                <div>
                <img src='amazon.png' alt="" />
                    <h2>Whitelist dApp</h2>
                    <p>A Web 3 project created using React Js and etherJs </p>
                    <button><a href='#'>Open</a></button>
                </div>

                <div>
                <img src='amazon.png' alt="" />
                    <h2>Crypto Web Project</h2>
                    <p>A site that allows the user to transfer ether from a user to another.</p>
                    <button><a href='#'>Open</a></button>
                </div>

                <div>
                <img src='amazon.png' alt="" />
                    <h2>A Wordle Game</h2>
                    <p>A Wordle Game that was created using React Js. It was also integrated Moralis SDK for the Metamask Authentication, making it a web 3 project.</p>
                    <button><a href='#'>Open</a></button>
                </div>

                <div>
                <img src='amazon.png' alt="" />
                    <h2>DAO</h2>
                    <p>A Decentralized Autonomous Organization (DAO) also using ReactJs, hardhat, etherJs.</p>
                    <button><a href='#'>Open</a></button>
                </div>
            </div>
            <motion.div   animate={{ x: 10 }} transition={{ delay: 0.5 }} className='prev-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/about"><GrPrevious fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>
            <motion.div   animate={{ x: 220 }} transition={{ delay: 0.5 }} className='next-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/contact"><GrNext fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>


            <div className="experience">
                    <button></button>
            </div>
        </div>
    )
}

export default Portfolio