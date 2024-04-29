import './Navbar.css';
import { useState, useEffect } from 'react';
import Map from './Map';
import AddRoute from './AddRoute';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div className={`hamburger ${isMobile && isOpen ? 'toggle' : ''}`} onClick={handleToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {!isMobile || isOpen ? (
        <><div className='navHead'>
          <h1 >Welcome to Route Radar</h1>
        </div>
          <div className='container'>
            <li className='navList'><Link className='navLinks' to="/login">Add Route</Link></li>
            <li className='navList'><Link className='navLinks' to='/info'>FAQ</Link></li>
            <li className='navList'><Link className='navLinks' to='/'>Home</Link></li>
          </div>
        </>
      ) : null}
    </nav>
  );
}
