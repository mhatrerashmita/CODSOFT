import React, { useState, useEffect } from 'react';
import image1 from './google.jpg';
import image2 from './fullstack.jpg';
import image3 from './frontend.jpg';
import image4 from './data.jpg';
import image5 from './analysis.jpg';
import Jobdetail from '../jobdetail/Jobdetail';
import './myfilter.css'

const jobListings = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Exciting opportunity for a skilled software engineer to join TechCorp. This full-time position allows you to work remotely, contributing to innovative projects. Apply now and be part of our dynamic team!',
    image: image1,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Software Engineer at TechCorp in Remote. Exciting opportunity for a skilled software engineer...',
    fullDescription: `Position: Software Engineer
Company: TechCorp
Location: Remote
Description: Exciting opportunity for a skilled software engineer to join TechCorp. This full-time position allows you to work remotely, contributing to innovative projects. Apply now and be part of our dynamic team!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'DataTech',
    location: 'New York, NY',
    description: 'Join DataTech as a Data Scientist and work on cutting-edge projects. This full-time position in New York, NY, offers an exciting opportunity for data enthusiasts. Apply now and be part of our innovative team!',
    image: image4,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Data Scientist at DataTech in New York, NY. Join our team as a data scientist and work on cutting-edge projects...',
    fullDescription: `Position: Data Scientist
Company: DataTech
Location: New York, NY
Description: Join DataTech as a Data Scientist and work on cutting-edge projects. This full-time position in New York, NY, offers an exciting opportunity for data enthusiasts. Apply now and be part of our innovative team!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },
  {
    id: 3,
    title: 'Backend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Exciting opportunity for a skilled Backend Developer to join TechCorp. This full-time remote position allows you to contribute your skills to shape the future of software development. Apply now and be part of our dynamic team!',
    image: image3,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Backend Developer at TechCorp in Remote. Exciting opportunity for a skilled software engineer...',
    fullDescription: `Position: Backend Developer
Company: TechCorp
Location: Remote
Description: Exciting opportunity for a skilled Backend Developer to join TechCorp. This full-time remote position allows you to contribute your skills to shape the future of software development. Apply now and be part of our dynamic team!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'DataTech',
    location: 'New York, NY',
    description: 'Join DataTech as a Frontend Developer and be part of a team working on groundbreaking projects. This full-time position in New York, NY, offers an inspiring environment for frontend development enthusiasts. Apply now!',
    image: image1,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Frontend Developer at DataTech in New York, NY. Join our team as a frontend developer and be part of a team working on groundbreaking projects...',
    fullDescription: `Position: Frontend Developer
Company: DataTech
Location: New York, NY
Description: Join DataTech as a Frontend Developer and be part of a team working on groundbreaking projects. This full-time position in New York, NY, offers an inspiring environment for frontend development enthusiasts. Apply now!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },
  {
    id: 5,
    title: 'Full Stack Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Exciting opportunity for a skilled Full Stack Developer to join TechCorp. This full-time remote position allows you to work on comprehensive solutions. Apply now and be part of our dynamic team!',
    image: image2,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Full Stack Developer at TechCorp in Remote. Exciting opportunity for a skilled software engineer...',
    fullDescription: `Position: Full Stack Developer
Company: TechCorp
Location: Remote
Description: Exciting opportunity for a skilled Full Stack Developer to join TechCorp. This full-time remote position allows you to work on comprehensive solutions. Apply now and be part of our dynamic team!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'DataTech',
    location: 'New York, NY',
    description: 'Join DataTech as a Data Scientist and work on cutting-edge projects. This full-time position in New York, NY, offers an exciting opportunity for data enthusiasts. Apply now and be part of our innovative team!',
    image: image3,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Data Scientist at DataTech in New York, NY. Join our team as a data scientist and work on cutting-edge projects...',
    fullDescription: `Position: Data Scientist
Company: DataTech
Location: New York, NY
Description: Join DataTech as a Data Scientist and work on cutting-edge projects. This full-time position in New York, NY, offers an exciting opportunity for data enthusiasts. Apply now and be part of our innovative team!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },
  {
    id: 7,
    title: 'Data Analysis',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Exciting opportunity for a skilled Data Analyst to join TechCorp. This full-time remote position allows you to contribute to meaningful projects. Apply now and be part of our dynamic team!',
    image: image5,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Data Analysis at TechCorp in Remote. Exciting opportunity for a skilled software engineer...',
    fullDescription: `Position: Data Analysis
Company: TechCorp
Location: Remote
Description: Exciting opportunity for a skilled Data Analyst to join TechCorp. This full-time remote position allows you to contribute to meaningful projects. Apply now and be part of our dynamic team!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },
  {
    id: 8,
    title: 'Big Data Engineer',
    company: 'DataTech',
    location: 'New York, NY',
    description: 'Join DataTech as a Big Data Engineer and be part of a dynamic team working on cutting-edge projects. This full-time position in New York, NY, offers a great opportunity for those passionate about big data technologies. Apply now!',
    image: image4,
    type: 'Full time',
    Posted: new Date(),
    Applyby: new Date(),
    shortDescription: 'Big Data Engineer at DataTech in New York, NY. Join our team as a data scientist and work on cutting-edge projects...',
    fullDescription: `Position: Big Data Engineer
Company: DataTech
Location: New York, NY
Description: Join DataTech as a Big Data Engineer and be part of a dynamic team working on cutting-edge projects. This full-time position in New York, NY, offers a great opportunity for those passionate about big data technologies. Apply now!
Type: Full time
Posted: ${new Date()}
Apply by: ${new Date()}
`,
  },


];




const JobListings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [listings, setListings] = useState(jobListings);
  const [filters, setFilters] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    const filteredListings = jobListings.filter((listing) => {
      return (
        listing.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        listing.company.toLowerCase().includes(filters.company.toLowerCase()) &&
        listing.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        listing.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    });
    setListings(filteredListings);
  }, [filters]);
  const openModal = (job) => {
    setSelectedJob(selectedJob && selectedJob.id === job.id ? null : job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="job-listings-container">
      <h1 style={{ textAlign: 'center' }}>Job Listing</h1>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass-arrow-right" ></i> <input
          type="text"
          placeholder="Title"
          name="title"
          value={filters.title}
          onChange={handleInputChange}
        />
        <i className="fa-solid fa-earth-americas"></i> <input
          type="text"
          placeholder="Company"
          name="company"
          value={filters.company}
          onChange={handleInputChange}
        />
        <i className="fa-solid fa-location-dot"></i> <input
          type="text"
          placeholder="Location"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
        />
        <i className="fa-solid fa-thumbtack"></i>  <input
          type="text"
          placeholder="Job Type"
          name="type"
          value={filters.type}
          onChange={handleInputChange}
        />
      </div>

      {/* Display filtered job listings */}
      {listings.length > 0 ? (
        <div className="card-container" style={{ width: "1200px" }}>

          {listings.map((listing, index) => (
            <div key={listing.id} className="job-card" style={{ backgroundColor: index % 2 === 0 ? "#6db6f9" : "#b6e6e0" }}
            >
              <img src={listing.image} alt="Job Image" className="card-img-top" />
              <div className="card-body" >
                <h3 className="card-title">{listing.title}</h3>
                <button className="card-text company" >{listing.company}</button>
                <button className="card-text location" >{listing.location}</button>
                <p className="card-text type">{listing.type}</p>
                {/* Other listing details */}
                <button className="btn btn-primary" onClick={() => openModal(listing)}>
                  {selectedJob && selectedJob.id === listing.id ? 'Hide Details' : 'See Details'}
                </button>
              </div>
            </div>
          ))}
          {selectedJob && <Jobdetail job={selectedJob} closeModal={closeModal} />}
        </div>
      ) : (
        <div>

          <p>No listings found for the applied filters.</p>
        </div>
      )}
    </div>
  );
};

export default JobListings;