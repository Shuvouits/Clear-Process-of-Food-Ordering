import React from 'react'

function Footer() {
  return (
    <>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12" data-aos="fade-right">
              <div className="footer-logo">
                <div className="logo">
                  <img
                    src="https://reservq.minionionbd.com/uploads/website-images/image-2023-10-25-09-40-00-8712.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="footer-text">
                <h4>
                  <p>
                    At ReservQ, we invite you to embark on a journey of taste and
                    delight.Our tables are more than just places.
                  </p>
                </h4>
              </div>
              <div className="footer-icon">
             
                <div className="icon">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/mexuv" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank">
                    <i className="fa-brands fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mol-md-12 ">
              <div className="row">
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-right"
                  data-aos-delay={100}
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Quick Link</h3>
                    </div>
                    <div className="quick-line-menu">
                      <ul>
                        <li>
                          <a href="https://reservq.minionionbd.com/user/dashboard">
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a href="https://reservq.minionionbd.com/about-us">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="https://reservq.minionionbd.com/contact-us">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Terms &amp; Privacy</h3>
                    </div>
                    <div className="quick-line-menu">
                      <ul>
                        <li>
                          <a href="https://reservq.minionionbd.com/privacy-policy">
                            Privacy &amp; Policy
                          </a>
                        </li>
                        <li>
                          <a href="https://reservq.minionionbd.com/terms-of-service">
                            Terms of Service
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-right"
                  data-aos-delay={300}
                >
                  <div className="quick-line-item">
                    <div className="quick-line-item-head">
                      <h3>Subscribe our Newsletter</h3>
                    </div>
                    <form
                      action="https://reservq.minionionbd.com/newslatter"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="wazyJe7vezQKXGcnQlHePS5U6mehUA7hqxxrzK0S"
                      />
                      <div className="quick-line-btn">
                        <div className="icon"></div>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleFormControlInput6"
                          placeholder="Email"
                        />
                        <button className="main-btn-four" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </form>
                    <div className="quick-line-btn-text">
                      <h6>We accept Payment methods:</h6>
                    </div>
                    <div className="quick-line-btn-img">
                      <a href="#">
                        <img
                          src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-26-06-08-41-2782.png"
                          alt="img"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-26-06-09-00-2179.png"
                          alt="img"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-26-06-09-29-6264.png"
                          alt="img"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-26-06-11-52-9757.png"
                          alt="img"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-26-06-12-07-2080.png"
                          alt="img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text">
                <h4>Copyright 2024, QuomodoSoft. All Rights Reserved.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer