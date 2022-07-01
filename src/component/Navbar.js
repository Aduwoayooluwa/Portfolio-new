import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import App from './mobile/App';
import {useSelector, useDispatch} from 'react-redux';
const Navbar = () => {
    const {theme}  = useSelector((state) => state.theme)
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
                    <p style={{color: theme ? '#212121' : '#ffff'}}>Ayooluwa <span>Aduwo</span></p>
                </div>

                <div>
                    <Link style={{textDecoration: 'none', color: theme ? '#212121' : '#ffff'}} to="/"><p>Home</p></Link>
                </div>

                <div>
                    <Link style={{textDecoration: 'none', color: theme ? '#212121' : '#ffff'}} to="/about">About</Link>
                </div>

                
                <div>
                    <Link style={{textDecoration: 'none', color: theme ? '#212121' : '#ffff'}} to="/projects"><p>Projects</p></Link>
                </div>
                
                <div>
                <Link style={{textDecoration: 'none', color: theme ? '#212121' : '#ffff'}} to="/portfolio">Portfolio</Link>
                </div>

                <div>
                    <button><Link style={{textDecoration: 'none', color: theme ? '#212121' : '#ffff'}} to="/contact">Contact</Link></button>
                </div>
            </div>

            <div className='mb-nv'>
                <App />
            </div>
            
        </div>
    )
}

export default Navbar