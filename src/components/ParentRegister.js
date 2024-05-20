import React from 'react'
import './styles/forms.css'

const ParentRegister = () => {
  return (
    <div className='forms-main-div'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Parent Register</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="perentname">Name</label>
                    <input type="text" className="form-control" id="perentname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pemail">Email:</label>
                    <input type="email" className="form-control" id="pemail" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="penterpassword">Enter Password</label>
                    <input type="password" className="form-control" id="penterpassword" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pconfirmPassword">Confirm Password:</label>
                    <input type="password" className="form-control" id="pconfirmPassword" />
                  </div>
                  <div>
                    <span>Already have an account?</span><span className='mx-2'><a href='/parent-login'>Login</a></span>
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

export default ParentRegister;