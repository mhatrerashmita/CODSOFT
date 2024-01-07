import React from 'react';
import './popup.css';
import pop from './pop.jpg';

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content" style={{ height: "500px" }}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Job Board!</h2>
        <p>Explore the latest job opportunities and take the next step in your career.</p>
        <img src={pop} alt="" style={{ height: "300px" }}/>
      </div>
    </div>
  );
};

export default LoginModal;
