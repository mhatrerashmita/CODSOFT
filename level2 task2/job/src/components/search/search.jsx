// Search.js
import React, { useState } from 'react';
import './search.css'
const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedjobtype, setSelectedjobtype] = useState('');

  const locations = ['new york', 'Remote', 'India'];
  const company = ['Techcrop', 'DataTech',];
  const jobtypes = ['Full time ','Part Time']

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handlejobtypeChange = (e) => {
    setSelectedjobtype(e.target.value);
  };
  const handleSearchKeyChange = (e) => {
    setSearchKey(e.target.value);
  };


  const handleFindJobClick = () => {
    // Implement your job search logic here
    console.log('job Type:', selectedjobtype);
    console.log('Location:', selectedLocation);
    console.log('Category:', selectedCategory);
    
    // Add logic to fetch and display job results
  };

  return (
    <div className='content'>
    <div className='search'>
      <div>
      <i class="fa-solid fa-magnifying-glass-arrow-right"></i> <label>Search Key:</label>
        <input type="text" value={searchKey} onChange={handleSearchKeyChange} />
      </div>
      <div>
      <i class="fa-solid fa-location-dot"></i> <label>Location:</label>
        <select value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div>
      <i class="fa-solid fa-earth-americas"></i> <label>Company:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {company.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
      <i class="fa-solid fa-thumbtack"></i> <label>Job Types:</label>
        <select value={selectedjobtype} onChange={handlejobtypeChange}>
          <option value="">Select Category</option>
          {jobtypes.map((jobtypes, index) => (
            <option key={index} value={jobtypes}>
              {jobtypes}
            </option>
          ))}
        </select>
      </div>
      <button style={{height:"50px",marginTop:"40px",width:"130px"}} onClick={handleFindJobClick}>Find Job</button>
    </div>
    </div>
  );
};

export default Search;


