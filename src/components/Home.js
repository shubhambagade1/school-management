import React, { useState } from "react";
import './styles/home.css'
import adminimg from '../components/images/admin.png';
import studentimg from '../components/images/student.png';
import parentimg from '../components/images/parents.png';
import staffimg from '../components/images/staff.png';
import AdminDashboard from '../components/AdminDashboard';

function Home() {
    const [showAdminModal, setShowAdminModal] = useState(false);
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showParentModal, setShowParentModal] = useState(false);
    const [showStaffModal, setShowStaffModal] = useState(false);
    const [securityKey, setSecurityKey] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    const handleAdminClick = () => {
        setShowAdminModal(true);
    };

    const handleStudentClick = () => {
        setShowStudentModal(true);
    };

    const handleParentClick = () => {
        setShowParentModal(true);
    };

    const handleStaffClick = () => {
        setShowStaffModal(true);
    };

    const handleCloseAdminModal = () => {
        setShowAdminModal(false);
        setSecurityKey("");
    };

    const handleCloseStudentModal = () => {
        setShowStudentModal(false);
    };

    const handleCloseParentModal = () => {
        setShowParentModal(false);
    };

    const handleCloseStaffModal = () => {
        setShowStaffModal(false);
    };

    const handleSecurityKeyChange = (event) => {
        setSecurityKey(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleModalSubmit = () => {
        if (securityKey === "Admin@123") {
            setIsAdminLoggedIn(true);
            setShowAdminModal(false);
            window.location.href = "/admin-dashboard";
        } else {
            alert("Incorrect security key. Please try again.");
        }
    };

    return (
        <>
            {isAdminLoggedIn ? (
                <AdminDashboard />
            ) : (
                <div className="main-div">
                    <div className="home-div">
                        <div className="home-text">
                            <h1>Welcome to School Management</h1>
                            <h1>System!</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row role-row">
                            <div className="role-div col-8">
                                <div className="role-section admin" onClick={handleAdminClick}>
                                    <img className="role-img" src={adminimg} alt="Admin-img" />
                                    <h3>Admin</h3>
                                </div>
                                <div className="role-section staff" onClick={handleStaffClick}>
                                    <img className="role-img" src={staffimg} alt="staff-img" />
                                    <h3>Staff</h3>
                                </div>
                                <div className="role-section student" onClick={handleStudentClick}>
                                    <img className="role-img" src={studentimg} alt="student-img" />
                                    <h3>Student</h3>
                                </div>
                                <div className="role-section parent" onClick={handleParentClick}>
                                    <img className="role-img" src={parentimg} alt="parent-img" />
                                    <h3>Parents</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Admin Modal */}
                    <div className={`modal fade overlay ${showAdminModal ? 'show d-block' : ''}`} id="adminModal" tabIndex="-1" role="dialog" aria-labelledby="adminModalLabel" aria-hidden={!showAdminModal}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="adminModalLabel">Admin Security Key</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseAdminModal}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="input-group">
                                        <input type={passwordVisible ? "text" : "password"} className="form-control" placeholder="Enter Security Key" value={securityKey} onChange={handleSecurityKeyChange} />
                                        <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                                            {passwordVisible ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseAdminModal}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Student Modal */}
                    <div className={`modal fade overlay ${showStudentModal ? 'show d-block' : ''}`} id="studentModal" tabIndex="-1" role="dialog" aria-labelledby="studentModalLabel" aria-hidden={!showStudentModal}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="studentModalLabel">Student Login/Register</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseStudentModal}></button>
                                </div>
                                <div className="modal-body modal-buttons">
                                    <button type="button" className="btn btn-primary m-1" onClick={() => { window.location.href = '/student-login' }}>Login</button>
                                    <button type="button" className="btn btn-secondary m-1" onClick={() => { window.location.href = '/student-register' }}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parent Modal */}
                    <div className={`modal fade overlay ${showParentModal ? 'show d-block' : ''}`} id="parentModal" tabIndex="-1" role="dialog" aria-labelledby="parentModalLabel" aria-hidden={!showParentModal}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="parentModalLabel">Parent Login/Register</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseParentModal}></button>
                                </div>
                                <div className="modal-body modal-buttons">
                                    <button type="button" className="btn btn-primary m-1" onClick={() => { window.location.href = '/parent-login' }}>Login</button>
                                    <button type="button" className="btn btn-secondary m-1" onClick={() => { window.location.href = '/parent-register' }}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Staff Modal */}
                    <div className={`modal fade overlay ${showStaffModal ? 'show d-block' : ''}`} id="staffModal" tabIndex="-1" role="dialog" aria-labelledby="staffModalLabel" aria-hidden={!showStaffModal}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staffModalLabel">Staff Login/Register</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseStaffModal}></button>
                                </div>
                                <div className="modal-body modal-buttons">
                                    <button type="button" className="btn btn-primary m-1" onClick={() => { window.location.href = '/staff-login' }}>Login</button>
                                    <button type="button" className="btn btn-secondary m-1" onClick={() => { window.location.href = '/staff-register' }}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
