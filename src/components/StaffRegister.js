import React from 'react'
import './styles/forms.css'

const StaffRegister = () => {
  return (
    <div className='forms-main-div'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Staff Register</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="staffname">Name</label>
                    <input type="text" className="form-control" id="staffname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="semail">Email:</label>
                    <input type="email" className="form-control" id="semail" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="senterpassword">Enter Password</label>
                    <input type="password" className="form-control" id="senterpassword" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sconfirmPassword">Confirm Password:</label>
                    <input type="password" className="form-control" id="sconfirmPassword" />
                  </div>
                  <div>
                    <span>Already have an account?</span><span className='mx-2'><a href='/staff-login'>Login</a></span>
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

export default StaffRegister;