import React from 'react'
import App from './carousel/App'
import {Link} from 'react-router-dom'
import { GrNext, GrPrevious } from 'react-icons/gr'
import {motion} from 'framer-motion'

const Contact = () => {
    return (
        <div>
            <div className="contact-page">
                <h2>Contact Me</h2>
                <input placeholder='Full Name' type='text'/>
                <br></br>
                <input type='email' placeholder='Email Address' />
                <br></br>
                <textarea width="800px" height="800px">

                </textarea>
                <br></br>
                <button type='submit'>Submit</button>
            </div>

            <motion.div   animate={{ x: 100 }} transition={{ delay: 0.5 }} className='prev-page'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio"><GrPrevious fontSize='2rem' color='#2C3639' /></Link>
                
            </motion.div>
            
        </div>
    )
}

export default Contact