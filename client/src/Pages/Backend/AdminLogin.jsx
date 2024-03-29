import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Swal from 'sweetalert2'

function AdminLogin() {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');

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
      const res = await fetch('http://localhost:8000/login', {
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
          text: `Welcome to ${data.email} `,
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

        dispatch({ type: "LOGIN", payload: data });
        Cookies.set("user", JSON.stringify(data));
        navigate('/admin/dashboard')


      }

      if (res.status === 400) {
        setError(data.message)
        console.log(data.message)
      }



    } catch (error) {

      console.log(error)

    }

  }
  return (
    <section className="sherah-wc sherah-wc__full sherah-bg-cover">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6 col-md-6 col-12 sherah-wc-col-one">
            <div
              className="sherah-wc__inner"
              style={{
                backgroundImage:
                  "url(https://reservq.minionionbd.com/uploads/website-images/login-page-bg-2023-11-16-05-56-07-9130.png)"
              }}
            >
              {/* Logo */}
              <div className="sherah-wc__logo">
                
              </div>
              {/* Middle Image */}
              <div className="sherah-wc__middle">
                <a href="https://reservq.minionionbd.com/admin/login">
                  <img
                    src="https://reservq.minionionbd.com/uploads/website-images/login-page-image-2023-11-16-05-54-52-2548.png"
                    alt="#"
                  />
                </a>
              </div>
              {/* Welcome Heading */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 sherah-wc-col-two">
            <div className="sherah-wc__form">
              <div className="sherah-wc__form-inner">
                <h3 className="sherah-wc__form-title sherah-wc__form-title__one">
                  Login Your Account
                  <span>Please enter your email and password to continue</span>
                </h3>
                {/* Sign in Form */}
                <form
                  className="sherah-wc__form-main p-0"
                  onSubmit={handleSubmit}
                >

                  {
                    error && (
                      <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>

                    )
                  }

                  <div className="form-group">
                    <label className="sherah-wc__form-label">Email Address</label>
                    <div className="form-group__input">
                      <input
                        className="sherah-wc__form-input"
                        type="email"
                        id="email"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* Form Group */}
                  <div className="form-group">
                    <label className="sherah-wc__form-label">Password</label>
                    <div className="form-group__input">
                      <input
                        className="sherah-wc__form-input"

                        type="password"
                        id="password"
                        maxLength={12}
                        required="required"
                        onChange={handleChange}

                      />
                    </div>
                  </div>
                  {/* Form Group */}
                  <div className="form-group">
                    <div className="sherah-wc__check-inline">
                      <div className="sherah-wc__checkbox">
                        <input
                          className="sherah-wc__form-check"
                          id="checkbox"
                          name="checkbox"
                          type="checkbox"
                        />
                        <label htmlFor="checkbox">Remember me later</label>
                      </div>
                    </div>
                  </div>
                  {/* Form Group */}
                  <div className="form-group form-mg-top25">
                    <div className="sherah-wc__button sherah-wc__button--bottom">
                      <button className="ntfmax-wc__btn" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                  {/* Form Group */}
                </form>
                {/* End Sign in Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AdminLogin