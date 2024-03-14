import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                                <a
                                    href="https://reservq.minionionbd.com/blog"
                                    className="main-btn-four"
                                >
                                    See More
                                </a>
                            </div>
                        </div>
                    </div>

                    <Slider {...settings} className='row news-slick'>
                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-22-11-17-03-6828.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending">
                                                    Flavorful Fusion: Exploring the Art of Culinary Blending
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-22-11-17-03-6828.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending">
                                                    Flavorful Fusion: Exploring the Art of Culinary Blending
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-22-11-17-03-6828.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending">
                                                    Flavorful Fusion: Exploring the Art of Culinary Blending
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-22-11-18-01-4058.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/chef-spotlight-behind-the-scenes-of-culinary-mastery">
                                                    Chef Spotlight: Behind the Scenes of Culinary Mastery
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/chef-spotlight-behind-the-scenes-of-culinary-mastery">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2023-10-22-11-19-54-9272.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/timehonored-recipes-with-a-modern-twist">
                                                    Time-Honored Recipes with a Modern Twist
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/timehonored-recipes-with-a-modern-twist">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2024-01-31-12-10-09-9234.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending-1">
                                                    Flavorful Fusion: Exploring the Art of Culinary Blending
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/flavorful-fusion-exploring-the-art-of-culinary-blending-1">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2024-01-31-12-09-57-3229.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/chef-spotlight-behind-the-scenes-of-culinary-mastery-1">
                                                    Chef Spotlight: Behind the Scenes of Culinary Mastery
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/chef-spotlight-behind-the-scenes-of-culinary-mastery-1">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pd-15px">
                            <div className="news-item">
                                <div className="news-img">
                                    <img
                                        src="https://reservq.minionionbd.com/uploads/custom-images/-2024-02-01-12-05-11-5463.png"
                                        className="w-100"
                                        alt="img"
                                    />
                                    <div className="news-img-overlay">
                                        <div className="news-img-overlay-text">
                                            <h3>
                                                <a href="https://reservq.minionionbd.com/blog/timehonored-recipes-with-a-modern-twist-1">
                                                    Time-Honored Recipes with a Modern Twist
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="news-img-overlay-btn">
                                            <a href="https://reservq.minionionbd.com/blog/timehonored-recipes-with-a-modern-twist-1">
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
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Slider>

                    <div className="row news-slick ">




                        
                      
                    </div>
                </div>
            </section>

        </>
    )
}

export default Latest