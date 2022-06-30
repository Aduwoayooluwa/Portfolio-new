import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import App from './mobile/App';

const Navbar = () => {
    const [drawer, setDrawer] = useState(false);
    const drawerRef = useRef(null)

    useEffect(() => {
            const closeDrawer = (e) => {
                if (drawerRef.current && drawerRef.current.contains(e.target)) {
                    return;
                }

                setDrawer(false);
            }


            document.addEventListener("mousedown", closeDrawer);
            return () => document.removeEventListener("mousedown", closeDrawer);

    }, [])

    return (
        <div className="nav">
            <div className='d-nav'>
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
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/projects"><p>Projects</p></Link>
                </div>
                
                <div>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio">Portfolio</Link>
                </div>

                <div>
                    <button><Link style={{textDecoration: 'none', color: 'black'}} to="/contact">Contact</Link></button>
                </div>
            </div>

            <div className='mb-nv'>
                <App />
            </div>
            
        </div>
    )
}

export default Navbar