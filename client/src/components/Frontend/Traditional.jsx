import React from 'react'

function Traditional() {
    return (
        <>


            <section className="traditional food-details s-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="traditional-head">
                                <h2>
                                    Some Traditional Food Based on Location
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* Grid Tab */}
                    <div className="tab-pane fade show in active" id="grid" role="tabpanel">
                        {/* Filter Title */}
                        <div className="row justify-content-center">
                            <div className=" col-xxl-8 col-xl-8 col-lg-12">
                                <ul className="shaf-filter course-filter  ">
                                    <li className="active" data-group="all">
                                        All Categories
                                    </li>
                                    <li data-group={48}>
                                        Delish Burger
                                    </li>
                                    <li data-group={49}>
                                        Fried Rice
                                    </li>
                                    <li data-group={50}>
                                        Pasta
                                    </li>
                                    <li data-group={51}>
                                        Chicken
                                    </li>
                                    <li data-group={52}>
                                        Pizzas
                                    </li>
                                    <li data-group={53}>
                                        Sandwiches
                                    </li>
                                    <li data-group={56}>
                                        Nachos
                                    </li>
                                    <li data-group={57}>
                                        Tacos
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Filter Title */}
                        {/* Filter Content */}
                        <div className="row shafull-container">
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;50&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img-populer">
                                    </div>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/baked-chicken-wings-and-legs-2024-01-25-10-02-43-3199.jpg" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/2">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $150
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="Baked Chicken Wings and Legs" href="https://reservq.minionionbd.com/menu/baked-chicken-wings-and-legs">
                                                    Baked Chicken Wings and Legs
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        4 Piece Chicken
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Spicy Sauce
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;51&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img-populer">
                                    </div>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/bbq-pulled-pork-sandwich-2024-01-25-11-11-44-3353.jpg" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/3">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $90
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="BBQ Pulled Pork Sandwich" href="https://reservq.minionionbd.com/menu/bbq-pulled-pork-sandwich">
                                                    BBQ Pulled Pork Sandwich
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        4 Piece Chicken
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Spicy Sauce
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;52&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img-populer">
                                    </div>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/pork-chop-with-apple-chutney-2024-01-25-10-49-09-4461.jpg" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/4">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $30
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="Pork Chop with Apple Chutney" href="https://reservq.minionionbd.com/menu/pork-chop-with-apple-chutney">
                                                    Pork Chop with Apple Chutney
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        4 Piece Chicken
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Spicy Sauce
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal4" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;49&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img-populer">
                                    </div>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/eggplant-parmesan-linguine-2024-01-25-10-51-58-9002.jpg" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/5">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $100
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="Eggplant Parmesan & Linguine" href="https://reservq.minionionbd.com/menu/eggplant-parmesan-linguine">
                                                    Eggplant Parmesan &amp; Linguine
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        4 Piece Chicken
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Spicy Sauce
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;52&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/fish-tacos-with-chipotle-crema-2024-01-25-10-56-10-8397.jpg" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/6">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $50
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="Fish Tacos with Chipotle Crema" href="https://reservq.minionionbd.com/menu/fish-tacos-with-chipotle-crema">
                                                    Fish Tacos with Chipotle Crema
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        4 Piece Chicken
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Spicy Sauce
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal6" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;48&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/quinoa-stuffed-bell-pepper-2024-01-25-11-07-09-6249.jpg" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/7">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $70
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="Quinoa-Stuffed Bell Pepper" href="https://reservq.minionionbd.com/menu/quinoastuffed-bell-pepper">
                                                    Quinoa-Stuffed Bell Pepper
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        10 Piece Chicken
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Spicy Sauce
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal7" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;56&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img-populer">
                                    </div>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/beef-nachos-2024-01-31-11-14-31-2417.png" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/12">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="right-text">
                                                    <h5>
                                                        8.33% Off
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $120
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="Beef Nachos" href="https://reservq.minionionbd.com/menu/beef-nachos">
                                                    Beef Nachos
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Diced tomatoes
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Cooked chicken
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal12" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;57&quot; ]">
                                <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>
                                    <div className="featured-item-img-populer">
                                    </div>
                                    <div className="featured-item-img">
                                        <img src="https://reservq.minionionbd.com/uploads/custom-images/fish-tacos-2024-01-31-11-19-33-7126.png" className="w-100" alt="featured-thumb" />
                                        <div className="featured-item-img-overlay">
                                            <div className="featured-item-img-over-text">
                                                <div className="left-text">
                                                    <a href="https://reservq.minionionbd.com/wishlist/add/13">
                                                        <div className="icon">
                                                            <span>
                                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="right-text">
                                                    <h5>
                                                        16.67% Off
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="featured-item-text">
                                        <div className="text-item">
                                            <div className="left">
                                                <h3>
                                                    $60
                                                </h3>
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                        <div className="text-item-center">
                                            <h3>
                                                <a className="line-clamp-1" title="Fish Tacos" href="https://reservq.minionionbd.com/menu/fish-tacos">
                                                    Fish Tacos
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="text-item-center-item-box">
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Grilled or fried fish
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="text-item-center-item">
                                                <div className="icon">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <h5>
                                                        Shredded cabbage
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="featured-item-btn">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal13" className="main-btn-three">
                                                    <span>
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5" />
                                                            <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5" />
                                                            <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="traditional-btn">
                                    <a href="https://reservq.minionionbd.com/menu" className="main-btn-four">
                                        See More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Traditional