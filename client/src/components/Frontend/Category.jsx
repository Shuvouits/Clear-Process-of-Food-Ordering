import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';



function Category({setLoading}) {

    //Category Data
    const [category, setCategory] = useState([])
   
    const allCategory = async () => {

        try {
            const res = await fetch(`https://food-order-rest-api.onrender.com/all-category`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = await res.json();
            setCategory(data);
            setLoading(false)
            

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allCategory();
    }, []);





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

                      
                        {category.map((item) => (
                            <div class="categories-main-box mt-48px customer-item-slick-row">
                                <Link class="categories-item" data-aos="fade-up" to={`/menu/category/${item.slug}`}>
                                    <div class="categories-icon">
                                        <img src={item.avatar} alt={item.name} />
                                    </div>
                                    <div class="categories-item-text line-clamp-1">
                                        <h3>
                                            {item.name}
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </Slider>



                </div>

              


            </section>


        </>
    )
}

export default Category