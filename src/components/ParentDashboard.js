import React, { useState, useEffect, useCallback } from 'react';
import { FaHome, FaGraduationCap, FaBuilding, FaUniversity, FaTrophy, FaStar, FaPhone, FaBriefcase, FaLifeRing, FaQuestionCircle } from 'react-icons/fa';
import { schoolData, collegeData, universityData } from './Data';
import './styles/dashboard.css';

const ParentDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('home');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedData, setSortedData] = useState({ school: [], college: [], university: [] });

  const navigateTo = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const sortAndFilterData = useCallback(() => {
    const sortData = (data) => {
      return [...data].sort((a, b) => {
        if (sort === 'rating') {
          return b.rating - a.rating;
        } else {
          return a.name.localeCompare(b.name);
        }
      });
    };

    const filterData = (data) => {
      return data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    };

    const sortedSchoolData = sortData(filterData(schoolData));
    const sortedCollegeData = sortData(filterData(collegeData));
    const sortedUniversityData = sortData(filterData(universityData));

    setSortedData({
      school: sortedSchoolData,
      college: sortedCollegeData,
      university: sortedUniversityData
    });
  }, [sort, searchQuery]);

  useEffect(() => {
    sortAndFilterData();
  }, [filter, sort, searchQuery, sortAndFilterData]);

  const handleEnquiryClick = () => {
    navigateTo('support');
  };

  return (
    <div className="admindashboard">
      <div className="sidebar">
        <button type="button" onClick={() => navigateTo('home')}>
          <div className='menu-list'>
            <FaHome />
            <span>Home</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('schools')}>
          <div className='menu-list'>
            <FaGraduationCap />
            <span>Schools</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('colleges')}>
          <div className='menu-list'>
            <FaBuilding />
            <span>Colleges</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('university')}>
          <div className='menu-list'>
            <FaUniversity />
            <span>University</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('awards_certifications')}>
          <div className='menu-list'>
            <FaTrophy />
            <span>Awards & Certifications</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('reviews_ratings')}>
          <div className='menu-list'>
            <FaStar />
            <span>Reviews & Ratings</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('contact_us')}>
          <div className='menu-list'>
            <FaPhone />
            <span>Contact Us</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('career')}>
          <div className='menu-list'>
            <FaBriefcase />
            <span>Career</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('support')}>
          <div className='menu-list'>
            <FaLifeRing />
            <span>Support</span>
          </div>
        </button>
      </div>

      <div className={`content ${selectedSection === 'home' ? 'fade-in' : 'fade-out'}`} id="home" style={{ display: selectedSection === 'home' ? 'block' : 'none' }}>
        <h2 className="text-center text-white m-4">Parent Dashboard</h2>
        <p className="text-center text-white">Welcome to the parent dashboard.</p>

        <div className="mb-4">
          <label htmlFor="filter" className="form-label text-white">Filter by:</label>
          <select id="filter" className="form-select d-inline w-auto mx-2" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="school">Schools</option>
            <option value="college">Colleges</option>
            <option value="university">Universities</option>
          </select>

          <label htmlFor="sort" className="form-label text-white">Sort by:</label>
          <select id="sort" className="form-select d-inline w-auto mx-2" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </select>

          <label htmlFor="search" className="form-label text-white">Search by Name:</label>
          <input
            id="search"
            type="text"
            className="form-control d-inline w-auto mx-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div id="top-rated-list">
          {(filter === 'all' || filter === 'school') && (
            <div className="category" data-category="school">
              <h3 className="text-center text-white">Top Rated Schools</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.school.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(filter === 'all' || filter === 'college') && (
            <div className="category" data-category="college">
              <h3 className="text-center text-white">Top Rated Colleges</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.college.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {(filter === 'all' || filter === 'university') && (
            <div className="category" data-category="university">
              <h3 className="text-center text-white">Top Rated Universities</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.university.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="fixed-enquiry-button">
            <button onClick={handleEnquiryClick}><FaQuestionCircle /><br />Enquiry</button>
          </div>
        </div>
      </div>

      <div className={`content ${selectedSection === 'about_us' ? 'fade-in' : 'fade-out'}`} id="about_us" style={{ display: selectedSection === 'about_us' ? 'block' : 'none' }}>
        <h2 className="text-center text-white m-4">About Us</h2>
        <div className="about-section">
          <div className="about-description">
            <h4>Our Story</h4>
            <p>We are a team of passionate individuals dedicated to providing high-quality services and products to our customers. Our journey began in 2024 with a vision to make a positive impact on the world.</p>
          </div>
          <div className="about-values">
            <h4>Our Values</h4>
            <ul>
              <li><strong>Quality:</strong> We believe in delivering products and services of the highest quality to our customers.</li>
              <li><strong>Customer Satisfaction:</strong> Customer satisfaction is our top priority, and we strive to exceed expectations.</li>
              <li><strong>Innovation:</strong> We continuously innovate to stay ahead of industry trends and provide cutting-edge solutions.</li>
              <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and integrity.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`content ${selectedSection === 'contact_us' ? 'fade-in' : 'fade-out'}`} style={{ display: selectedSection === 'contact_us' ? 'block' : 'none' }}>
        <h2 className="text-center text-white m-4">Contact Us</h2>
        <div className="email-section">
          <div className="contact">
            <h4>Email:</h4>
            <p>parent123@gmail.com</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact">
            <h4>Mobile No:</h4>
            <p>1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
