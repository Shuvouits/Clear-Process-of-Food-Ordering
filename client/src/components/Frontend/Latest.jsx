import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Latest() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    };

    //Product Data
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

    console.log(blog)


    return (
        <>

            <section className="our-latest-news s-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="news-taitel">
                                <h2>Our Latest news</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="news-taitel-btn">
                                <Link
                                    to="/blog"
                                    className="main-btn-four"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Slider {...settings} className='row news-slick'>

                        {blog.map((item) => (

                            <div className="col-lg-4 pd-15px">
                                <div className="news-item">
                                    <div className="news-img">
                                        <img
                                            src={item.avatar}
                                            className="w-100"
                                            alt="img"
                                            style={{ height: '325px' }}
                                        />
                                        <div className="news-img-overlay">
                                            <div className="news-img-overlay-text">
                                                <h3>
                                                    <Link to={`/blog/${item.slug}`}>
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="news-img-overlay-btn">
                                                <Link to="#">
                                                    Read More
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





                    </Slider>

                    <div className="row news-slick ">






                    </div>
                </div>
            </section>

        </>
    )
}

export default Latest