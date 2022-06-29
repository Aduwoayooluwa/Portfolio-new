import './App.css';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import About from './component/About'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
    

      <Navbar />
        <Routes>
        
          <Route path='/' element={<Hero />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={< Contact/>} />
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
