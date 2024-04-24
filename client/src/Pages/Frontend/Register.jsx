import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Register() {

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [eye, setEye] = useState(false)
    const handleClick = () => {
        setEye(!eye)
    }

    const [formData, setFormData] = useState({})

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
          const res = await fetch('https://food-order-rest-api.onrender.com/customer-register', {
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
              text: `Registered Successfully`,
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
    
            navigate('/login')
    
    
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
                                You agree to ReservQ{" "}
                                <Link to="/">
                                    Terms of Use
                                </Link>{" "}
                                &amp;{" "}
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
                        <form onSubmit={handleSubmit}>

                        {
                    error && (
                      <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>

                    )
                  }

                            <div className="sign-up-from-inner">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    id="name"
                                />
                            </div>
                            <div className="sign-up-from-inner">
                                <label htmlFor="exampleFormControlInput2" className="form-label">
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
                                <label htmlFor="passwordField2" className="form-label">
                                    Confirm Password
                                </label>


                                <div className="input-group">
                                    <input
                                        type={eye ? 'text' : 'password'}
                                        className="form-control toggle-password"
                                        id="cpassword"
                                        onChange={handleChange}

                                    />
                                    <div
                                        className="icon"
                                        data-toggle="password"
                                        data-target="cpassword"
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
                            <div className="sign-up-btn">
                                <button className="main-btn-four" type="submit">
                                    Sign Up
                                </button>
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login">Sign in here</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register