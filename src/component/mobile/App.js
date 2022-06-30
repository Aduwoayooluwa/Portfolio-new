// import "./styles.css";
import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {Link} from 'react-router-dom';
import { GiHamburgerMenu} from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import './style.css'

const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about", id: 2 },
    { name: "Projects", to: "/projects", id: 3 },
    { name: "Portfolio", to: "/portfolio", id: 4 },
    { name: "Contact", to: "/contact", id: 5 }
    ];
    const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
    };
    const sideVariants = {
    closed: {
        transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
        }
    },
    open: {
        transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
        }
    }
    };
    export default function App() {
    const [open, cycleOpen] = useCycle(false, true);
    return (
        <div className='m-nav'>
        <div className='m-logo'>
            <p>Ayooluwa <span>Aduwo</span></p>
        </div>
        
            <main>
        <AnimatePresence>
            {open && (
            <motion.aside
                initial={{ width: 0 }}
                animate={{
                width: 300
                }}
                exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 }
                }}
            >
                <motion.div
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                >
                {links.map(({ name, to, id }) => (
                    <motion.a
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    >
                    {name}
                    </motion.a>
                ))}
                </motion.div>
            </motion.aside>
            )}
        </AnimatePresence>
        <div className="btn-container">
            <button onClick={cycleOpen}>{open ? (<GrFormClose fontSize='1.7rem' color='white' />) : (<GiHamburgerMenu fontSize='1.7rem' />)}</button>
        </div>
        </main>
        </div>
        
    );
}