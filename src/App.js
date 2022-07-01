import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import About from './component/About'
import Contact from './component/Contact'
import Projects from './component/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer';
import Portfolio from './component/Portfolio';
import {useSelector, useDispatch} from 'react-redux';
import { MdDarkMode } from 'react-icons/md'
import { HiLightBulb } from 'react-icons/hi'
import { setTheme } from './redux/ThemeReducer'

function App() {
  const {theme}  = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  console.log(theme)

  return (
    <div className="App" style={{backgroundColor: theme ? '#fff' : '#152238', height: '100vh'}} >
        <div className="theme-change"  style={{backgroundColor: theme ? '#fff' : 'grey'}}>
            <MdDarkMode  style={{color: ''}} fontSize='25px' onClick={() => dispatch(setTheme(false))}/>
            <HiLightBulb  style={{color: '#F5F0BB'}} fontSize='25px' onClick={() => dispatch(setTheme(true))}/>
        </div>

      <Navbar />
        <Routes>
        
          <Route path='/' element={<Hero />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={< Contact/>} />
          <Route path='portfolio' element={<Portfolio />} />
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
