import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StudentLogin from "./components/StudentLogin";
import StudentRegister from "./components/StudentRegister";
import ForgotPassword from "./components/ForgotPassword";
import StaffLogin from "./components/StaffLogin";
import StaffRegister from "./components/StaffRegister";
import ParentLogin from "./components/ParentLogin";
import ParentRegister from "./components/ParentRegister";
import StaffDashboard from "./components/StaffDashboard";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";
import ParentDashboard from "./components/ParentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-register" element={<StudentRegister/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/staff-login" element={<StaffLogin/>}/>
        <Route path="/staff-register" element={<StaffRegister/>}/>
        <Route path="/parent-login" element={<ParentLogin/>}/>
        <Route path="/parent-register" element={<ParentRegister/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/staff-dashboard" element={<StaffDashboard/>}/>
        <Route path="/student-dashboard" element={<StudentDashboard/>}/>
        <Route path="/parent-dashboard" element={<ParentDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
