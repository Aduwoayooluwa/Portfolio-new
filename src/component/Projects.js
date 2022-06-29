import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr'
import {motion} from 'framer-motion'
import Skills from './Skills'

const Projects = () => {
    const [view, setView] = useState(false)


    return (
        <div className="portfolio">
            <div className="projects">

                <div>
                    <img src='amzon.png' alt="" />
                    <h2>Amazon Clone</h2>
                    <p>An Ecommerce Website using React Js. The store api was gotten from Fake Store API</p>
                    <button><a href='https://amazonclone-asl6od2gx-aduwoayooluwa.vercel.app/'>Open</a></button>
                </div>
                    
                <div>
                    <img src='Jumia 1.png' alt="" />
                    <h2>Jumia Clone</h2>
                    <p>An Ecommerce Website using React Js. This is a Jumia Clone. The store API was gotten from Fake Store API</p>
                    <button><a href='#'>Open</a></button>
                </div>

                <div>
                <img src='3d-an1.webp' alt="" />
                    <h2>Modern Dynamic Landing Page</h2>
                    <p>An Ecommerce Website using React Js. This is a Jumia Clone. The store API was gotten from Fake Store API</p>
                    <button><a href='https://swiftsleek-modernui.vercel.app/'>Open</a></button>
                </div>
                <div>
                <img src='3dan2.png' alt="" />
                    <h2>Whitelist dApp</h2>
                    <p>A Web 3 project created using React Js and etherJs </p>
                    <button><a href='#'>Open</a></button>
                </div>

                <div>
                <img src='3dan1.png' alt="" />
                    <h2>Crypto Web Project</h2>
                    <p>A site that allows the user to transfer ether from a user to another.</p>
                    <button><a href='#'>Open</a></button>
                </div>

                <div>
                <img src='wordle-img.png' alt="" />
                    <h2>A Wordle Game</h2>
                    <p>A Wordle Game that was created using React Js. It was also integrated Moralis SDK for the Metamask Authentication, making it a web 3 project.</p>
                    <button><a href='https://wordle-react-one.vercel.app/'>Open</a></button>
                </div>

                <div>
                <img src='app-img.png' alt="" />
                    <h2>DAO</h2>
                    <p>A Decentralized Autonomous Organization (DAO) also using ReactJs, hardhat, etherJs.</p>
                    <button><a href='#'>Open</a></button>
                </div>
            </div>
            <motion.div   animate={{ x: 10 }} transition={{ delay: 0.5 }} className='prev-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/about"><GrPrevious fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>
            <motion.div   animate={{ x: 220 }} transition={{ delay: 0.5 }} className='next-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio"><GrNext fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>
{/* 
            {
                view ? console.log(false) : (
                    < Skills />
                )
            }

            <div class="box">
                <a class="button" href="#popup1">Let me Pop up</a>
            </div>
            <div id='popup1' className="experience">
                    < Skills />
            </div> */}
        </div>
    )
}

export default Projects