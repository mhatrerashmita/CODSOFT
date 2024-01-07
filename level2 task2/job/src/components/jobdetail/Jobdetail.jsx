

import React, { useState } from 'react';
import './jobdetail.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import Apply from './apply/Apply' // Import the ApplyModal component

const Jobdetail = ({ job, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    closeModal();
  };

  // Check if job is undefined or null before accessing its properties
  if (!job) {
    return <div></div>; // or any placeholder or loading state you prefer
  }

  // Destructure properties with default values to handle potential undefined/null
  const { title, company, location, description, type, Posted, Apply_by } = job;
  const formattedPostedDate = Posted ? Posted.toLocaleDateString() : 'N/A';
  const formattedApplyByDate = Apply_by ? Apply_by.toLocaleDateString() : 'N/A';

  return (
    <div className="modal-overlay" onClick={closeModalHandler}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ width: '1000px' }}>
        <span className="close-btn" onClick={closeModalHandler}>
          &times;
        </span>
        <h2 className='title'>{title}</h2>
        <p>Company: {company}</p>
        <p>Location: {location}</p>
        <p>Description: {description}</p>
        <hr />

        <ul>
          Type: {type}<br/>
          Posted: {formattedPostedDate}<br/>
          Apply by: {formattedApplyByDate}<br/>
          <p>
            For More Follow This Link: <Link to="https://www.simplilearn.com/highest-paying-jobs-in-india-article">https://www.simplilearn.com/highest-paying-jobs-in-india-article</Link>
          </p>
        </ul>
        <hr />
        <button type="button" onClick={openModal}>
          Apply Now
        </button>

        {isModalOpen && <Apply closeModal={closeModalHandler} />}
      </div>
    </div>
  );
};

export default Jobdetail;
