import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <nav>
                <div className="logo">
                    <p>Ayooluwa <span>Aduwo</span></p>
                </div>

                <div>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/"><p>Home</p></Link>
                </div>

                <div>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/about">About</Link>
                </div>

                <div>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/Portfolio">Portfolio</Link>
                </div>

                <div>
                    <button><Link style={{textDecoration: 'none', color: 'black'}} to="/contact">Contact</Link></button>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar