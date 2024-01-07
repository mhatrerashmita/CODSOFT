
// // // import React, { useState } from 'react';
// // // import './details.css';
// // // //import { Link } from 'react-router-dom';
// // // import Jobdetail from '../jobdetail/Jobdetail';
// // // import image1 from './google.jpg';
// // // import image2 from './fullstack.jpg';
// // // import image3 from './frontend.jpg';
// // // import image4 from './data.jpg';
// // // import image5 from './analysis.jpg';

// // // const jobListings = [
// // //   {
// // //   // Your job listings data
// // //   id: 1,
// // //       title: 'Software Engineer',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image1,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(), // Set to
    
// // //     },
// // //     {
// // //       id: 2,
// // //       title: 'Data Scientist',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image4,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 3,
// // //       title: 'Backend Devloper',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image3,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 4,
// // //       title: 'Frontend Devloper',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image1,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 5,
// // //       title: 'Full Stack Devloper',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image2,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 6,
// // //       title: 'Data Scientist',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image3,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 7,
// // //       title: 'Data Analysis',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image5,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),

// // //     },
// // //     {
// // //       id: 8,
// // //       title: 'Big Data Engineer',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image4,
// // //       type : 'defualt',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },

// // // ];

// // // const JobListings = () => {
// // //   const [selectedJob, setSelectedJob] = useState(null);

// // //   const openModal = (job) => {
// // //     setSelectedJob(job);
// // //   };

// // //   const closeModal = () => {
// // //     setSelectedJob(null);
// // //   };

// // //   return (
// // //     <div className="job-listings">
// // //       <h2 className="page-title">Job Listings</h2>
// // //       <div className="card-container">
// // //         {jobListings.map((job, index) => (
// // //           <div key={job.id} className={`card card-${index % 2 === 0 ? 'even' : 'odd'}`}>
// // //             <img src={job.image} className="card-img-top" alt="Job Image" />
// // //             <div className="card-body">
// // //               <h5 className="card-title">{job.title}</h5>
// // //               <button className="card-text company" style={{ background: "transparent", border: "1px solid black", borderRadius: "13px",color:"gray" }}>{job.company}</button>
// // //               <button className="card-text location " style={{ background: "transparent", border: "1px solid black", borderRadius: "13px",color:"gray" }}>{job.location}</button>
// // //               <p className="card-text description">{job.description}</p>
// // //               <button className="btn btn-primary" onClick={() => openModal(job)}>See Details</button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       {selectedJob && <Jobdetail job={selectedJob} closeModal={closeModal} />}
// // //     </div>
// // //   );
// // // };

// // // export default JobListings;


// // // JobListings.js

// // // import React, { useState, useEffect } from 'react';
// // // import './details.css';
// // // import Jobdetail from '../jobdetail/Jobdetail';
// // // import Search from '../search/search'
// // // import image1 from './google.jpg';
// // // import image2 from './fullstack.jpg';
// // // import image3 from './frontend.jpg';
// // // import image4 from './data.jpg';
// // // import image5 from './analysis.jpg';

// // // const jobListings = [
// // // {
// // //     id: 1,
// // //       title: 'Software Engineer',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image1,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(), // Set to

    
// // //     },
// // //     {
// // //       id: 2,
// // //       title: 'Data Scientist',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image4,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 3,
// // //       title: 'Backend Devloper',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image3,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 4,
// // //       title: 'Frontend Devloper',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image1,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 5,
// // //       title: 'Full Stack Devloper',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image2,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 6,
// // //       title: 'Data Scientist',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image3,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // //     {
// // //       id: 7,
// // //       title: 'Data Analysis',
// // //       company: 'TechCorp',
// // //       location: 'Remote',
// // //       description: 'Exciting opportunity for a skilled software engineer...',
// // //       image: image5,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),

// // //     },
// // //     {
// // //       id: 8,
// // //       title: 'Big Data Engineer',
// // //       company: 'DataTech',
// // //       location: 'New York, NY',
// // //       description: 'Join our team as a data scientist and work on cutting-edge projects...',
// // //       image: image4,
// // //       type : 'Full time',
// // //       Posted: new Date(), // Set to the current date and time
// // //       Applyby: new Date(),
// // //     },
// // // ];

// // // const JobListings = () => {
// // //   const [selectedJob, setSelectedJob] = useState(null);
// // //   const [filteredJobListings, setFilteredJobListings] = useState(jobListings);
// // //   const [appliedFilters, setAppliedFilters] = useState({});

// // //   const openModal = (job) => {
// // //     setSelectedJob(job);
// // //   };

// // //   const closeModal = () => {
// // //     setSelectedJob(null);
// // //   };

// // // // Function to filter job listings based on search criteria
// // // const filterJobListings = (searchKey, selectedLocation, selectedCategory, selectedjobtype) => {
// // //   const filteredListings = jobListings.filter((job) => {
// // //     const titleMatch = job.title.toLowerCase().includes(searchKey.toLowerCase());
// // //     const locationMatch = selectedLocation === '' || job.location.toLowerCase() === selectedLocation.toLowerCase();
// // //     const categoryMatch = selectedCategory === '' || job.company.toLowerCase() === selectedCategory.toLowerCase();
// // //     const jobTypeMatch = selectedjobtype === '' || job.type.toLowerCase() === selectedjobtype.toLowerCase();

// // //     return titleMatch && locationMatch && categoryMatch && jobTypeMatch;
// // //   });

// // //   setFilteredJobListings(filteredListings);
// // //   setAppliedFilters({
// // //     searchKey,
// // //     selectedLocation,
// // //     selectedCategory,
// // //     selectedjobtype,
// // //   });
// // // };

// // //   useEffect(() => {
// // //     // Reset filtered job listings when the component mounts
// // //     setFilteredJobListings(jobListings);
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <Search filterJobListings={filterJobListings} />
// // //       <div className="job-listings">
// // //         <h2 className="page-title">Job Listings</h2>

// // //         {/* Display applied filters */}
// // //         {Object.values(appliedFilters).some(Boolean) && (
// // //           <div className="applied-filters">
// // //             <h3>Applied Filters:</h3>
// // //             <ul>
// // //               {Object.entries(appliedFilters).map(([key, value]) => (
// // //                 value && <li key={key}>{`${key}: ${value}`}</li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}

// // //         {/* Display filtered job listings */}
// // //         <div className="card-container">
// // //           {filteredJobListings.map((job, index) => (
// // //             <div key={job.id} className={`card card-${index % 2 === 0 ? 'even' : 'odd'}`}>
// // //               <img src={job.image} className="card-img-top" alt="Job Image" />
// // //               <div className="card-body">
// // //                 <h5 className="card-title">{job.title}</h5>
// // //                 <button className="card-text company" style={{ background: "transparent", border: "1px solid black", borderRadius: "13px",color:"gray" }}>{job.company}</button>
// // //                 <button className="card-text location " style={{ background: "transparent", border: "1px solid black", borderRadius: "13px",color:"gray" }}>{job.location}</button>
// // //                 <p className="card-text description">{job.description}</p>
// // //                 <button className="btn btn-primary" onClick={() => openModal(job)}>See Details</button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         {selectedJob && <Jobdetail job={selectedJob} closeModal={closeModal} />}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default JobListings;
// // // JobListings.jsx

// import React, { useState, useEffect } from 'react';
// import './details.css';
// import Jobdetail from '../jobdetail/Jobdetail';
// import Search from '../search/search';
// import image1 from './google.jpg';
// import image2 from './fullstack.jpg';
// import image3 from './frontend.jpg';
// import image4 from './data.jpg';
// import image5 from './analysis.jpg';

// const jobListings = [
//   {
//         id: 1,
//           title: 'Software Engineer',
//           company: 'TechCorp',
//           location: 'Remote',
//           description: 'Exciting opportunity for a skilled software engineer...',
//           image: image1,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(), // Set to
    
        
//         },
//         {
//           id: 2,
//           title: 'Data Scientist',
//           company: 'DataTech',
//           location: 'New York, NY',
//           description: 'Join our team as a data scientist and work on cutting-edge projects...',
//           image: image4,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(),
//         },
//         {
//           id: 3,
//           title: 'Backend Devloper',
//           company: 'TechCorp',
//           location: 'Remote',
//           description: 'Exciting opportunity for a skilled software engineer...',
//           image: image3,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(),
//         },
//         {
//           id: 4,
//           title: 'Frontend Devloper',
//           company: 'DataTech',
//           location: 'New York, NY',
//           description: 'Join our team as a data scientist and work on cutting-edge projects...',
//           image: image1,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(),
//         },
//         {
//           id: 5,
//           title: 'Full Stack Devloper',
//           company: 'TechCorp',
//           location: 'Remote',
//           description: 'Exciting opportunity for a skilled software engineer...',
//           image: image2,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(),
//         },
//         {
//           id: 6,
//           title: 'Data Scientist',
//           company: 'DataTech',
//           location: 'New York, NY',
//           description: 'Join our team as a data scientist and work on cutting-edge projects...',
//           image: image3,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(),
//         },
//         {
//           id: 7,
//           title: 'Data Analysis',
//           company: 'TechCorp',
//           location: 'Remote',
//           description: 'Exciting opportunity for a skilled software engineer...',
//           image: image5,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(),
    
//         },
//         {
//           id: 8,
//           title: 'Big Data Engineer',
//           company: 'DataTech',
//           location: 'New York, NY',
//           description: 'Join our team as a data scientist and work on cutting-edge projects...',
//           image: image4,
//           type : 'Full time',
//           Posted: new Date(), // Set to the current date and time
//           Applyby: new Date(),
//         },

// ];

// const JobListings = () => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [filteredJobListings, setFilteredJobListings] = useState(jobListings);
//   const [appliedFilters, setAppliedFilters] = useState({});

//   const openModal = (job) => {
//     setSelectedJob(selectedJob && selectedJob.id === job.id ? null : job);
//   };

//   const closeModal = () => {
//     setSelectedJob(null);
//   };

//   const filterJobListings = (searchKey, selectedLocation, selectedCategory, selectedJobType) => {
//     const filteredListings = jobListings.filter((job) => {
//       const titleMatch = job.title.toLowerCase().includes(searchKey.toLowerCase());
//       const locationMatch =
//         selectedLocation === '' || job.location.toLowerCase() === selectedLocation.toLowerCase();
//       const categoryMatch =
//         selectedCategory === '' || job.company.toLowerCase() === selectedCategory.toLowerCase();
//       const jobTypeMatch = selectedJobType === '' || job.type.toLowerCase() === selectedJobType.toLowerCase();

//       return titleMatch && locationMatch && categoryMatch && jobTypeMatch;
//     });

//     setFilteredJobListings(filteredListings);
//     setAppliedFilters({
//       searchKey,
//       selectedLocation,
//       selectedCategory,
//       selectedJobType,
//     });
//   };

//   useEffect(() => {
//     setFilteredJobListings(jobListings);
//   }, []);

//   return (
//     <div>
//       <Search filterJobListings={filterJobListings} />
//       <div className="job-listings">
//         <h2 className="page-title">Job Listings</h2>

//         {Object.values(appliedFilters).some(Boolean) && (
//           <div className="applied-filters">
//             <h3>Applied Filters:</h3>
//             <ul>
//               {Object.entries(appliedFilters).map(([key, value]) => (
//                 value && <li key={key}>{`${key}: ${value}`}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="card-container">
//           {filteredJobListings.map((job, index) => (
//             <div key={job.id} className={`card card-${index % 2 === 0 ? 'even' : 'odd'}`}>
//               <img src={job.image} className="card-img-top" alt="Job Image" />
//               <div className="card-body">
//                 <h5 className="card-title">{job.title}</h5>
//                 <button className="card-text company" style={{ background: "transparent", border: "1px solid black", borderRadius: "13px",color:"gray" }}>{job.company}</button>
//                 <button className="card-text location" style={{ background: "transparent", border: "1px solid black", borderRadius: "13px",color:"gray" }}>{job.location}</button>
//                 <p className="card-text description">{job.description}</p>

//                 {/* Toggle full details */}
//                 {selectedJob && selectedJob.id === job.id && (
//                   <div className="full-details">
//                     <p>Type: {job.type}</p>
//                     <p>Posted: {job.Posted.toDateString()}</p>
//                     <p>Apply by: {job.Applyby.toDateString()}</p>
//                     {/* Add more details as needed */}
//                   </div>
//                 )}

//                 <button className="btn btn-primary" onClick={() => openModal(job)}>
//                   {selectedJob && selectedJob.id === job.id ? 'Hide Details' : 'See Details'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {selectedJob && <Jobdetail job={selectedJob} closeModal={closeModal} />}
//       </div>
//     </div>
//   );
// };

// export default JobListings;