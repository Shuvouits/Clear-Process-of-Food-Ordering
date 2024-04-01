import React from 'react'
import { Link } from 'react-router-dom'

function Banner({handleVideo}) {
  return (
   
    <section className="banner-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-two-taitel">
              <h1>
                Homestyle Italian Cooking Best Enjoyed with Family.
              </h1>
            </div>
            <div className="banner-taiteL-btn">
              <a href="https://reservq.minionionbd.com/menu" className="main-btn-four">
                <span>
                  <svg width={29} height={30} viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.6562 28.5938H6.34375C5.62269 28.5938 4.93117 28.3073 4.4213 27.7974C3.91144 27.2876 3.625 26.5961 3.625 25.875V4.125C3.625 3.40394 3.91144 2.71242 4.4213 2.20255C4.93117 1.69269 5.62269 1.40625 6.34375 1.40625H22.6562C23.3773 1.40625 24.0688 1.69269 24.5787 2.20255C25.0886 2.71242 25.375 3.40394 25.375 4.125V25.875C25.375 26.5961 25.0886 27.2876 24.5787 27.7974C24.0688 28.3073 23.3773 28.5938 22.6562 28.5938ZM6.34375 3.21875C6.1034 3.21875 5.87289 3.31423 5.70293 3.48418C5.53298 3.65414 5.4375 3.88465 5.4375 4.125V25.875C5.4375 26.1154 5.53298 26.3459 5.70293 26.5158C5.87289 26.6858 6.1034 26.7812 6.34375 26.7812H22.6562C22.8966 26.7812 23.1271 26.6858 23.2971 26.5158C23.467 26.3459 23.5625 26.1154 23.5625 25.875V4.125C23.5625 3.88465 23.467 3.65414 23.2971 3.48418C23.1271 3.31423 22.8966 3.21875 22.6562 3.21875H6.34375Z" />
                    <path d="M19.4844 15.9062H9.51562C9.27527 15.9062 9.04476 15.8108 8.87481 15.6408C8.70485 15.4709 8.60938 15.2404 8.60938 15V13.1875C8.61081 11.7458 9.18415 10.3636 10.2036 9.3442C11.223 8.32478 12.6052 7.75144 14.0469 7.75H14.9531C16.3948 7.75144 17.777 8.32478 18.7964 9.3442C19.8158 10.3636 20.3892 11.7458 20.3906 13.1875V15C20.3906 15.2404 20.2951 15.4709 20.1252 15.6408C19.9552 15.8108 19.7247 15.9062 19.4844 15.9062ZM10.4219 14.0938H18.5781V13.1875C18.5781 12.2261 18.1962 11.3041 17.5164 10.6242C16.8366 9.94442 15.9145 9.5625 14.9531 9.5625H14.0469C13.0855 9.5625 12.1634 9.94442 11.4836 10.6242C10.8038 11.3041 10.4219 12.2261 10.4219 13.1875V14.0938Z" />
                    <path d="M14.5 5.9375C14.9807 5.9375 15.4417 6.12846 15.7816 6.46837C16.1215 6.80828 16.3125 7.2693 16.3125 7.75V8.20312H12.6875V7.75C12.6875 7.2693 12.8785 6.80828 13.2184 6.46837C13.5583 6.12846 14.0193 5.9375 14.5 5.9375Z" />
                    <path d="M20.8438 15.9062H8.15625C7.9159 15.9062 7.68539 15.8108 7.51543 15.6408C7.34548 15.4709 7.25 15.2404 7.25 15C7.25 14.7596 7.34548 14.5291 7.51543 14.3592C7.68539 14.1892 7.9159 14.0938 8.15625 14.0938H20.8438C21.0841 14.0938 21.3146 14.1892 21.4846 14.3592C21.6545 14.5291 21.75 14.7596 21.75 15C21.75 15.2404 21.6545 15.4709 21.4846 15.6408C21.3146 15.8108 21.0841 15.9062 20.8438 15.9062Z" />
                    <path d="M19.0312 20.4375H9.96875C9.7284 20.4375 9.49789 20.342 9.32793 20.1721C9.15798 20.0021 9.0625 19.7716 9.0625 19.5312C9.0625 19.2909 9.15798 19.0604 9.32793 18.8904C9.49789 18.7205 9.7284 18.625 9.96875 18.625H19.0312C19.2716 18.625 19.5021 18.7205 19.6721 18.8904C19.842 19.0604 19.9375 19.2909 19.9375 19.5312C19.9375 19.7716 19.842 20.0021 19.6721 20.1721C19.5021 20.342 19.2716 20.4375 19.0312 20.4375Z" />
                    <path d="M19.0312 24.0625H9.96875C9.7284 24.0625 9.49789 23.967 9.32793 23.7971C9.15798 23.6271 9.0625 23.3966 9.0625 23.1562C9.0625 22.9159 9.15798 22.6854 9.32793 22.5154C9.49789 22.3455 9.7284 22.25 9.96875 22.25H19.0312C19.2716 22.25 19.5021 22.3455 19.6721 22.5154C19.842 22.6854 19.9375 22.9159 19.9375 23.1562C19.9375 23.3966 19.842 23.6271 19.6721 23.7971C19.5021 23.967 19.2716 24.0625 19.0312 24.0625Z" />
                  </svg>
                </span>
                Get your Menu
              </a>
              <Link onClick={handleVideo} className="my-video-links" data-autoplay="true" data-vbtype="video" to='#'>
                <div className="icon">
                  <span>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.0503 8.57255L20.1723 8.66203C20.6563 9.04385 21.052 9.52682 21.3312 10.0778C21.6329 10.6732 21.7901 11.3314 21.7901 11.9989C21.7901 12.6664 21.6329 13.3245 21.3312 13.9199C21.0295 14.5153 20.5918 15.0313 20.0535 15.4261L20.0533 15.4262L10.5135 22.4261C10.5134 22.4261 10.5134 22.4261 10.5134 22.4261C9.88011 22.8906 9.13054 23.1704 8.34786 23.2347C7.56515 23.299 6.77993 23.1451 6.07936 22.7902C5.37878 22.4353 4.79024 21.8932 4.37906 21.2241C3.96791 20.5551 3.75016 19.7852 3.75 18.9999C3.75 18.9998 3.75 18.9998 3.75 18.9997L3.75 5.00018C3.75 5.00013 3.75 5.00009 3.75 5.00004C3.75 4.99998 3.75 4.99992 3.75 4.99987C3.75039 4.21498 3.96811 3.44554 4.37905 2.77682C4.79004 2.10802 5.37823 1.56611 6.0784 1.21118C6.77857 0.856256 7.56336 0.702181 8.34575 0.766043C9.12808 0.829899 9.87744 1.10916 10.5108 1.57287C10.5108 1.57291 10.5109 1.57294 10.5109 1.57298L20.0503 8.57255ZM10.2137 22.0225L18.56 15.8984V15.9062L19.7539 15.0294C20.2283 14.681 20.614 14.2259 20.8799 13.7008C21.1457 13.1757 21.2843 12.5954 21.2843 12.0069C21.2843 11.4183 21.1457 10.838 20.8799 10.313C20.614 9.78787 20.2283 9.33274 19.7539 8.98436L19.7537 8.98418L10.2183 1.98761C10.2175 1.98701 10.2167 1.98641 10.2159 1.98581C9.57785 1.51085 8.80433 1.25291 8.00886 1.24987V1.24986L8.00518 1.24987C7.41422 1.25051 6.83172 1.39015 6.30473 1.65747C5.6827 1.96598 5.16007 2.44339 4.79668 3.03509C4.43324 3.62687 4.2438 4.30901 4.25 5.0034L4.25 18.9999L4.25 19.0009C4.25097 19.6929 4.44341 20.3712 4.80601 20.9606C5.1686 21.55 5.68722 22.0276 6.30446 22.3405C6.9217 22.6533 7.61347 22.7893 8.30322 22.7334C8.99296 22.6774 9.65377 22.4317 10.2125 22.0234L10.2137 22.0225Z" strokeWidth="1.5" />
                    </svg>
                  </span>
                </div>
                Watch Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner