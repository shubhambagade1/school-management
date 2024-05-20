import React from 'react'
import './styles/forms.css';

const StudentRegister = () => {
  return (
    <div className='forms-main-div'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Student Register</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="studentname">Name</label>
                    <input type="text" className="form-control" id="studentname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="enterpassword">Enter Password</label>
                    <input type="password" className="form-control" id="enterpassword" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" className="form-control" id="confirmPassword" />
                  </div>
                  <div>
                    <span>Already have an account?</span><span className='mx-2'><a href='/student-login'>Login</a></span>
                  </div>
                  <div className=' form-button mt-3'>
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default StudentRegister