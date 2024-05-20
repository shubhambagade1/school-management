import React from 'react';

function ForgotPassword() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className='card-title text-center mb-4'>Forgot Password</h2>
              <p>Enter your email address below to reset your password.</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className=' form-button mt-3'>
                  <button type="submit" className="btn btn-primary">Reset Password</button>
                </div>             
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
