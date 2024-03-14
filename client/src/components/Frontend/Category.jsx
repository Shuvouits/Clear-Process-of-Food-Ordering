import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



function Category() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

            <section className="categories row-categories-home  s-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6  ">
                            <div className="categories-head">
                                <h2>
                                    Our Categories
                                </h2>
                            </div>
                        </div>
                    </div>



                    <Slider {...settings} className='row'>

                        <div class="categories-main-box mt-48px customer-item-slick-row">
                            <a class="categories-item  " data-aos="fade-up" href="https://reservq.minionionbd.com/menu?category=delish-burger">
                                <div class="categories-icon">
                                    <img src="https://reservq.minionionbd.com/uploads/custom-images/delish-burger-2024-01-23-12-06-36-1053.png"
                                        alt="Delish Burger" />
                                </div>
                                <div class="categories-item-text line-clamp-1">
                                    <h3>
                                        Delish Burger
                                    </h3>
                                </div>
                            </a>
                        </div>

                        <div class="categories-main-box mt-48px customer-item-slick-row">
                            <a class="categories-item  " data-aos="fade-up" href="https://reservq.minionionbd.com/menu?category=delish-burger">
                                <div class="categories-icon">
                                    <img src="https://reservq.minionionbd.com/uploads/custom-images/delish-burger-2024-01-23-12-06-36-1053.png"
                                        alt="Delish Burger" />
                                </div>
                                <div class="categories-item-text line-clamp-1">
                                    <h3>
                                        Delish Burger
                                    </h3>
                                </div>
                            </a>
                        </div>


                        <div class="categories-main-box mt-48px customer-item-slick-row">
                            <a class="categories-item  " data-aos="fade-up" href="https://reservq.minionionbd.com/menu?category=delish-burger">
                                <div class="categories-icon">
                                    <img src="https://reservq.minionionbd.com/uploads/custom-images/delish-burger-2024-01-23-12-06-36-1053.png"
                                        alt="Delish Burger" />
                                </div>
                                <div class="categories-item-text line-clamp-1">
                                    <h3>
                                        Delish Burger
                                    </h3>
                                </div>
                            </a>
                        </div>

                        <div class="categories-main-box mt-48px customer-item-slick-row">
                            <a class="categories-item  " data-aos="fade-up" href="https://reservq.minionionbd.com/menu?category=delish-burger">
                                <div class="categories-icon">
                                    <img src="https://reservq.minionionbd.com/uploads/custom-images/delish-burger-2024-01-23-12-06-36-1053.png"
                                        alt="Delish Burger" />
                                </div>
                                <div class="categories-item-text line-clamp-1">
                                    <h3>
                                        Delish Burger
                                    </h3>
                                </div>
                            </a>
                        </div>

                        <div class="categories-main-box mt-48px customer-item-slick-row">
                            <a class="categories-item  " data-aos="fade-up" href="https://reservq.minionionbd.com/menu?category=delish-burger">
                                <div class="categories-icon">
                                    <img src="https://reservq.minionionbd.com/uploads/custom-images/delish-burger-2024-01-23-12-06-36-1053.png"
                                        alt="Delish Burger" />
                                </div>
                                <div class="categories-item-text line-clamp-1">
                                    <h3>
                                        Delish Burger
                                    </h3>
                                </div>
                            </a>
                        </div>






                    </Slider>



                </div>


            </section>


        </>
    )
}

export default Category