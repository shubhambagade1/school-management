import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaClipboard, FaStar } from 'react-icons/fa';
import './styles/dashboard.css'
import AnilDeshmukh from './SingleStudentData';

const StudentDashboard = () => {
    const [selectedSection, setSelectedSection] = useState('home');

    const navigateTo = (sectionId) => {
        setSelectedSection(sectionId);
    };

    // year selector
    const [selectedYear, setSelectedYear] = useState('');

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const getYears = (startYear) => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = startYear; year <= currentYear + 5; year++) {
            years.push(year);
        }
        return years;
    };

    const years = getYears(2000);


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
                <button type="button" onClick={() => navigateTo('query')}>
                    <div className='menu-list'>
                        <FaStar />
                        <span>Queries</span>
                    </div>
                </button>
            </div>
            <div className={`content ${selectedSection === 'home' ? 'fade-in' : 'fade-out'}`} id="home" style={{ display: selectedSection === 'home' ? 'block' : 'none' }}>
                <h2 className="text-center text-white m-4">Student Dashboard</h2>
                <p className="text-center text-white">Welcome to the student dashboard.</p>
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
                        <p>student123@gmail.com</p>
                    </div>
                </div>
                <div className="contact-section">
                    <div className="contact">
                        <h4>Mobile No:</h4>
                        <p>1234567890</p>
                    </div>
                </div>
            </div>

            <div className={`content ${selectedSection === 'attendance_records' ? 'fade-in' : 'fade-out'}`} id="attendance_records" style={{ display: selectedSection === 'attendance_records' ? 'block' : 'none' }}>
                <h2 className='text-white m-4'>Attendance Records</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="yearSelect" className="form-label">Select Year</label>
                            <select
                                id="yearSelect"
                                className="form-select"
                                value={selectedYear}
                                onChange={handleYearChange}
                            >
                                <option value="">-- Select a year --</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="monthSelect" className="form-label">Select Month</label>
                            <select
                                id="monthSelect"
                                className="form-select"
                            >
                                <option value="">-- Select a month --</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AnilDeshmukh.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{entry.date}</td>
                                        <td>{entry.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className={`content ${selectedSection === 'about' ? 'fade-out' : 'fade-in'}`} id="query" style={{ display: selectedSection === 'query' ? 'block' : 'none' }}>
                <h2 className="text-center text-white m-4">Queries</h2>
                <div className="query-section">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder='Enter Your Name' id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="queryMessage" className="form-label">Query</label>
                            <textarea className="form-control" id="queryMessage" placeholder='Enter your Query' rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default StudentDashboard;
