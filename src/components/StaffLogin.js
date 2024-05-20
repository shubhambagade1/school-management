import React, { useState } from "react";
import './styles/forms.css';

const StaffLogin = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/staff-dashboard';
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='forms-main-div'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Staff Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="staffId">Staff ID</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="staffpassword">Password</label>
                    <div className="input-group">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="form-control"
                        id="studentpassword"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? (
                            <i className="bi bi-eye-slash"></i>
                          ) : (
                            <i className="bi bi-eye"></i>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>New here?</span><span className='mx-2'><a href='/staff-register'>Register</a></span>
                  <div className='forgot-pass'>
                    <span><a href='/forgot-password'>Forgot password?</a></span>
                  </div>
                  <div className=' form-button mt-3'>
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffLogin;
