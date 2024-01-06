// ApplyModal.js

import React from 'react';
import './apply.css'; // Import your CSS file

const ApplyModal = ({ closeModal }) => {
  const openFile = () => {
    // Implement your logic to open the file
    console.log('Opening file...');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <i className="fa-regular fa-circle-check"></i>
        <h2>Completed</h2>
        <h3>You have successfully applied for the job.</h3>

        <div className="buttons" >
        <button className="close-btn" onClick={closeModal} style={{backgroundColor:"transparent",color:"black"}}>
  <i className="fas fa-times"></i>
</button>

          <button onClick={openFile}>Open File</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
