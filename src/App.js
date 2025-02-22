import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Rituals from './Rituals';

function App() {
  return (
    <>
      <Router>
        <div>

          <nav>
            <ul className='navBar'>
              <li>
                {/* <img src='headline.png' alt='headline'/> */}
                <h5 className='title'>Sri Kotilinga Hari Hara Mahakshetram</h5>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  About
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink 
                  to="/contact-us" 
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  Contact Us
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/rituals"
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  Rituals
                </NavLink>
              </li>
              <li>
                <img
                  className='wtsapp-icon'
                  src='whatsapp.png'
                  alt='whatsapp'
                  onClick={() => window.open('https://wa.me/7799010022?text=', '_blank')} // Open WhatsApp in a new tab
                />
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/rituals" element={<Rituals />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
