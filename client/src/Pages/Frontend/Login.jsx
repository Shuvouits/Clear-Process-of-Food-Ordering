import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Banner from '../../image/lbanner.png'
import Logo from '../../image/logo.png'
import Cookies from "js-cookie";
import Swal from 'sweetalert2'

function Login() {

 
  const navigate = useNavigate();

  const [eye, setEye] = useState(false)
  const handleClick = () => {
    setEye(!eye)
  }
  const [formData, setFormData] = useState({})

  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // Make the API request with updated formData
      const res = await fetch('http://localhost:8000/customer-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {

        Swal.fire({
          toast: false,
          animation: true,
          text: `Welcome to ${data.name} `,
          icon: 'success',
          showConfirmButton: true,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            container: 'custom-toast-container',
            popup: 'custom-toast-popup',
            title: 'custom-toast-title',
            icon: 'custom-toast-icon',
          },
        })

        dispatch({ type: "CLOGIN", payload: data });
        Cookies.set("customer", JSON.stringify(data));
        navigate('/user/dashboard')


      }

      if (res.status === 400) {
        setError(data.message)
        console.log(data.message)
      }



    } catch (error) {

      console.log(error)

    }

  }

  console.log(formData)



  return (

    <>

   


<div className="sign-up-top">
      <div className="sign-up-main-two">
        <div className="sign-up-main-two-item">
          <div className="sign-up-img">
            <img
              src={Banner}
              alt="img"
            />
            <div className="sign-up-main-two-item-text">
              <p>
                You agree to ReservQ
                <Link to="/">
                  Terms of Use
                </Link>
                &amp;
                <Link to="/">
                  Privacy Policy
                </Link>
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
              src={Logo}
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
            <form onSubmit={handleSubmit}>

              {
                error && (
                  <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>

                )
              }


              <div className="sign-up-from-inner">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleChange}

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
                    onChange={handleChange}

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
    
    </>

    


  )
}

export default Login