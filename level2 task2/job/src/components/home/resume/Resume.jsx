import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './resume.css'; // Import the CSS file
import Navbar from '../../navbar/Navbar';

const Resume = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const uploadResume = () => {
    if (!file) {
      toast.error('Please choose the file');
      return;
    }
    setFile(null);
    setFileName('');
    toast.success('Resume uploaded successfully');
  };

  return (
    <div className='resume'>
    <Navbar/>
    <div className="resume-container">

      <h1>Upload Here!</h1>

      <label htmlFor="resume">Upload Resume (PDF only):</label>
      <input type="file" id="resume" accept=".pdf" onChange={handleFileChange} required />

      <label htmlFor="fileName">File Name:</label>
      <input
        type="text"
        id="fileName"
        placeholder="Enter file name"
        value={fileName}
        onChange={handleFileNameChange}
        required
      />

      <button className="upload-button" onClick={uploadResume}>
        Upload
      </button>

      <ToastContainer autoClose={3000} />
    </div></div>
  );
};

export default Resume;
