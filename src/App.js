import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import About from './component/About'
import Contact from './component/Contact'
import Projects from './component/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <div className="App">
    

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
