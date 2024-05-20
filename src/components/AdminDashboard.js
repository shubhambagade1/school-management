import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaClipboard, FaStar } from 'react-icons/fa';
import './styles/dashboard.css'
import { standard11th, standard12th } from './StudentData';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('home');

  const navigateTo = (sectionId) => {
    setSelectedSection(sectionId);
  };

  // for attendance
  const [selectedStandard, setSelectedStandard] = useState("Standard 11th");

  const handleStandardChange = (e) => {
    setSelectedStandard(e.target.value);
  };

  const getStudentsForStandard = () => {
    if (selectedStandard === "Standard 11th") {
      return standard11th;
    } else {
      return standard12th;
    }
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
        <button type="button" onClick={() => navigateTo('about_us')}>
          <div className='menu-list'>
            <FaInfoCircle />
            <span>About Us</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('contact_us')}>
          <div className='menu-list'>
            <FaEnvelope />
            <span>Contact Us</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('attendance_records')}>
          <div className='menu-list'>
            <FaClipboard />
            <span>Attendance Records</span>
          </div>
        </button>
        <button type="button" onClick={() => navigateTo('reviews')}>
          <div className='menu-list'>
            <FaStar />
            <span>Reviews</span>
          </div>
        </button>
      </div>
      <div className={`content ${selectedSection === 'home' ? 'fade-in' : 'fade-out'}`} id="home" style={{ display: selectedSection === 'home' ? 'block' : 'none' }}>
        <h2 className="text-center text-white m-4">Admin Dashboard</h2>
        <p className="text-center text-white">Welcome to the admin dashboard.</p>
      </div>

      <div className={`content ${selectedSection === 'about' ? 'fade-out' : 'fade-in'}`} id="about_us" style={{ display: selectedSection === 'about_us' ? 'block' : 'none' }}>
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

      <div className={`content ${selectedSection === 'about' ? 'fade-out' : 'fade-in'}`} style={{ display: selectedSection === 'contact_us' ? 'block' : 'none' }}>
        <h2 className="text-center text-white m-4">Contact Us</h2>
        <div className="email-section">
          <div className="contact">
            <h4>Email:</h4>
            <p>admin123@gmail.com</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact">
            <h4>Mobile No:</h4>
            <p>1234567890</p>
          </div>
        </div>
      </div>

      <div className={`content ${selectedSection === 'about' ? 'fade-out' : 'fade-in'}`} id="attendance_records" style={{ display: selectedSection === 'attendance_records' ? 'block' : 'none' }}>
        <h2 className='text-white m-4'>Attendance Records</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className='text-white' htmlFor="standard">Standard/Class:</label>
                <select id="standard" name="standard" className="form-control" value={selectedStandard} onChange={handleStandardChange}>
                  <option value="Standard 11th">Standard 11th</option>
                  <option value="Standard 12th">Standard 12th</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className='text-white' htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className='text-white mt-4'>Student Attendance</h3>
              <table id="studentAttendanceTable" className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {getStudentsForStandard().map(student => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.attendance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className={`content ${selectedSection === 'about' ? 'fade-out' : 'fade-in'}`} id="reviews" style={{ display: selectedSection === 'reviews' ? 'block' : 'none' }}>
        <h2 className="text-center text-white m-4">Reviews</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='text-black'>Name</th>
              <th className='text-black'>Review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shubham Bagade</td>
              <td>Nice teaching and teachers are also cooperative</td>
            </tr>
            <tr>
              <td>Onkar Bagade</td>
              <td>Cooperative staff and I like one-to-one teaching</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
