import React from 'react'

function Login() {
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
            <a href="https://reservq.minionionbd.com/terms-of-service">
              Terms of Use
            </a>
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
      <a href="https://reservq.minionionbd.com">
        <img
          src="https://reservq.minionionbd.com/uploads/website-images/login-page-logo-2023-10-29-08-09-50-3973.png"
          alt="logo"
        />
      </a>
    </div>
    <div className="sign-up-text">
      <h2>Welcome back</h2>
      <p>Welcome back! Please enter your details.</p>
    </div>
    <div className="sign-up-from">
      <div className="sign-up-from-item">
        <form action="https://reservq.minionionbd.com/login" method="post">
          <input
            type="hidden"
            name="_token"
            defaultValue="0nESN4TswQgYIPJXzw5a7bqo0wUAlwhKx5fT3VX3"
          />
          <div className="sign-up-from-inner">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleFormControlInput"
              defaultValue="user@gmail.com"
            />
          </div>
          <div className="sign-up-from-inner">
            <label htmlFor="passwordField1" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                className="form-control toggle-password"
                name="password"
                id="passwordField1"
                defaultValue={1234}
              />
              <div
                className="icon"
                data-toggle="password"
                data-target="passwordField1"
              >
                <span className="toggle-password-icon">
                  <i className="fa-solid fa-eye-slash"></i>
                </span>
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
                  href="https://reservq.minionionbd.com/forgot/password"
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
              <a href="https://reservq.minionionbd.com/register">
                Sign up for free
              </a>
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