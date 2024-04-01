import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [eye, setEye] = useState(false)
  const handleClick = () => {
    setEye(!eye)
  }
  return (
    <div className="sign-up-top">
      <div className="sign-up-main-two">
        <div className="sign-up-main-two-item">
          <div className="sign-up-img">
            <img
              src="https://reservq.minionionbd.com/uploads/website-images/login-page-logo-2023-11-01-03-51-082488.png"
              alt="img"
            />
            <div className="sign-up-main-two-item-text">
              <p>
                You agree to ReservQ
                <Link to="/">
                  Terms of Use
                </Link>
                &amp;
                <a href="https://reservq.minionionbd.com/privacy-policy">
                  Privacy Policy
                </a>
                . You don't need to consent as a condition of food, or buying any
                other goods or services. Message data rates may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-up-main">
        <div className="sign-up-logo">
          <Link to="/">
            <img
              src="https://reservq.minionionbd.com/uploads/website-images/login-page-logo-2023-10-29-08-09-50-3973.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="sign-up-text">
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details.</p>
        </div>
        <div className="sign-up-from">
          <div className="sign-up-from-item">
            <form>

              <div className="sign-up-from-inner">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                
                />
              </div>
              <div className="sign-up-from-inner">
                <label htmlFor="passwordField1" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={eye ? 'text' : 'password'}
                    className="form-control toggle-password"
                    id="password"
                    
                  />
                  <div
                    className="icon"
                    data-toggle="password"
                    data-target="password"
                  >
                    {!eye && (

                      <span className="toggle-password-icon" onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <i className="fa fa-eye-slash"></i>
                      </span>

                    )}

                    {eye && (

                      <span className="toggle-password-icon" onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <i className="fa fa-eye"></i>
                      </span>

                    )}
                  </div>
                </div>
              </div>
              <div className="sign-up-from-inner">
                <div className="sign-up-from-df">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Remember Me
                    </label>
                  </div>
                  <div className="sign-up-main-btn">
                    <a
                      href="/forgot/password"
                      className="modal-sign-up-from-btn"
                    >
                      Forget Password?
                    </a>
                  </div>
                </div>
              </div>
              <div className="sign-up-btn">
                <button className="main-btn-four" type="submit">
                  Login
                </button>
                <p>
                  Don't have an account?
                  <Link to="/register">
                    Sign up for free
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login