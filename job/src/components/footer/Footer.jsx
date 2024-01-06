// Footer.js
import './footer.css'
// import React from 'react';
// import { Link } from 'react-router-dom'; // Use Link for React Router navigation

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>For Employers</h3>
//           <ul>
//             <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
//             <li><Link to="/post-job">Post a Job</Link></li>
//             <li><Link to="/browse-resumes">Browse Resumes</Link></li>
//             <li><Link to="/employer-resources">Employer Resources</Link></li>
//           </ul>
//         </div>
        
//         <div className="footer-section">
//           <h3>For Job Seekers</h3>
//           <ul>
//             <li><Link to="/job-search">Job Search</Link></li>
//             <li><Link to="/submit-resume">Submit Resume</Link></li>
//             <li><Link to="/interview-tips">Interview Tips</Link></li>
//             <li><Link to="/job-seeker-resources">Job Seeker Resources</Link></li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: info@example.com</p>
//           <p>Phone: +1 (123) 456-7890</p>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2023 Your Job Board. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>For Employers</h3>
          <p>Post a Job</p>
          <p>Browse Resumes</p>
          <p>Employer Resources</p>
        </div>
        
        <div className="footer-section">
          <h3>For Job Seekers</h3>
          <p>Job Search</p>
          <p>Submit Resume</p>
          <p>Interview Tips</p>
          <p>Job Seeker Resources</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p> <FontAwesomeIcon icon={faPhone} />Let's Talk: +129456789</p>
        <p> <FontAwesomeIcon icon={faEnvelope} /> Email: JobBoard@example.com</p>

        <div className="icon">
        <i class="fa-brands fa-facebook fa"></i>
        <i class="fa-brands fa-linkedin fa"></i>
        <i class="fa-brands fa-twitter fa"></i>
        <i class="fa-brands fa-instagram fa"></i>
        </div>
     
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
