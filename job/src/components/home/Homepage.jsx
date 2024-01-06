import React from 'react'
import Popup from './popup/Popup';
import './homepage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import { ToastContainer } from 'react-toastify';
function Homepage() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Opening login modal');
      setShowLoginModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseLoginModal = () => {
    console.log('Closing login modal');
    setShowLoginModal(false);
  };

  console.log('Rendering Homepage with showLoginModal:', showLoginModal);
  return (
    <div className='home'>
      <Navbar />
      <div >
        <div style={{ flex: 1 }}>
          <header>
            {/* <h1>Job Board</h1> */}
            <h1 >Find Your Dream Job</h1>
            <h2 >4567+ job listed</h2>
          </header>

          <main >
            <h2>Welcome to our Job Board!</h2>
            <p>Explore the latest job opportunities and take the next step in your career.</p>

            <p>Ready to apply? Upload your resume now!</p>
            <Link to="/upload" className="uploadButton" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#4285F0', color: 'white', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>
              Upload Resume
            </Link>
          </main>
        </div>

      </div>
      {showLoginModal && <Popup onClose={handleCloseLoginModal} />}
      <ToastContainer/>
    </div>

  )
}

export default Homepage
