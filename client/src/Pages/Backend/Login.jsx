import React from 'react'
import './assets/style.css'
import './assets/bootstrap.css'
import './assets/fontawesome.css'
import './assets/chart.css'
import './assets/datatable.css'
import './assets/jquery.css'
import './assets/map.css'
import './assets/reset.css'
import './assets/slickslider.css'
import './assets/toast.css'

function Login() {
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
                <a href="https://reservq.minionionbd.com">
                  <img
                    src="https://reservq.minionionbd.com/uploads/website-images/stiky-logo-2023-10-29-09-42-50-6269.png"
                    alt="#"
                  />
                </a>
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
                  action="https://reservq.minionionbd.com/admin/login"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="0nESN4TswQgYIPJXzw5a7bqo0wUAlwhKx5fT3VX3"
                  />{" "}
                  <div className="form-group">
                    <label className="sherah-wc__form-label">Email Address</label>
                    <div className="form-group__input">
                      <input
                        className="sherah-wc__form-input"
                        type="email"
                        name="email"
                        required="required"
                        defaultValue="admin@gmail.com"
                      />
                    </div>
                  </div>
                  {/* Form Group */}
                  <div className="form-group">
                    <label className="sherah-wc__form-label">Password</label>
                    <div className="form-group__input">
                      <input
                        className="sherah-wc__form-input"
                        id="password-field"
                        type="password"
                        name="password"
                        maxLength={8}
                        required="required"
                        defaultValue={1234}
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

export default Login