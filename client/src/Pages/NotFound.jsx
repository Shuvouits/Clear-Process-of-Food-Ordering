import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="appie-error-area">
  <div className="container mb-5">
    <div className="row">
      <div className="col-lg-12 error_image">
        <div className="appie-error-content text-center">
          <img
            src="https://reservq.minionionbd.com/uploads/website-images/error-image-2024-01-22-09-56-24-2913.png"
            alt=""
          />
          <span>Sorry!</span>
          <h3 className="title">Oops! Page Not Found.</h3>
          <p>
            The page you are looking for is not available. Try with another page
            or use the go home button below
          </p>
          <Link className="main-btn-four" to="/">
            Back to Home{" "}
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default NotFound