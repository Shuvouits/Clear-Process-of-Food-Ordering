import React, { useEffect, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import FAQ from '../../components/Frontend/FAQ'
import Resturent from '../../components/Frontend/Resturent'
import { Link } from 'react-router-dom'

function Blog() {

  const [blog, setBlog] = useState([])
  const allBlog = async () => {

    try {
      const res = await fetch(`http://localhost:8000/all-blog`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const data = await res.json();
      setBlog(data);

    } catch (error) {
      return (error)

    }

  };

  useEffect(() => {
    allBlog();
  }, []);





  return (
    <main>
      <InnerBanner />
      <section className="blog s-padding">
        <div className="container">
          <div className="row">

            {blog.map((item) => (

              <div className="col-lg-4 col-md-6 blog-mt-25px " data-aos="fade-up">
                <div className="news-item">
                  <div className="news-img">
                    <img
                      src={item.avatar}
                      className="w-100"
                      alt="img"
                    />
                    <div className="news-img-overlay">
                      <div className="news-img-overlay-text">
                        <h5>
                          Stories, Media <span>•</span>{" "}
                        </h5>
                        <h3>
                          <Link to={`/blog/${item.slug}`}>
                            {item.title} 
                          
                          </Link>
                        </h3>
                      </div>
                      <div className="news-img-overlay-btn">
                        <Link href="#">
                          Read More{" "}
                          <span>
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                                strokeWidth={2}
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}



          </div>
        </div>
      </section>

      <FAQ />
      <Resturent />
    </main>
  )
}

export default Blog