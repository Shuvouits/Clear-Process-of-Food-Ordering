import React from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import Process from '../../components/Frontend/Process'
import Popular from '../../components/Frontend/Popular'
import Customer from '../../components/Frontend/Customer'
import FAQ from '../../components/Frontend/FAQ'
import Resturent from '../../components/Frontend/Resturent'

function About() {
  return (
    <main>
      <InnerBanner />

      <section className="about-us s-padding">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6 ">
              <div className="about-us-img">
                <img
                  src="https://reservq.minionionbd.com/uploads/website-images/banner-image-2023-10-29-04-04-45-9740.png"
                  className="w-100"
                  alt="thumb"
                />
                <div className="about-us-img-btn-img">
                  <div className="about-us-img-btn-img-main">
                    <div className="about-us-img-btn-img-main-animetion-img"></div>
                    <div className="about-us-img-btn-img-overlay">
                      <h2>50</h2>
                      <span>YEARS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-pl-45px" data-aos="fade-left">
              <div className="about-us-head">
                <h2>Our Story of food Culinary Excellence at ReservQ</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but
                  the to a majority have suffered alteration in some form, by injected
                  humour, or find randomised words which don't look even slightly
                  believable.
                </p>
                <p>
                  Over 20 years’ experience providing top quality house Booking rant
                  and sell for your Amazing Dream &amp; Make you Happy
                </p>
              </div>
              <div className="row about-mt-48px">
                <div className="col-lg-6 col-md-6">
                  <div className="about-us-item">
                    <div className="icon"></div>
                    <div className="text">
                      <h3>90k+ Customers</h3>
                      <p>Believe in our service &amp; Care</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-us-item about-us-item-resmt ">
                    <div className="icon"></div>
                    <div className="text">
                      <h3>100+ Branch</h3>
                      <p>Food ready for occupancy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Process />
      <Popular />
      <Customer />
      <FAQ />
      <Resturent />
    </main>
  )
}

export default About