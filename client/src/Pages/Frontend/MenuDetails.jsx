import React, { useEffect, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import Resturent from '../../components/Frontend/Resturent'
import { useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import Cookies from "js-cookie";

function MenuDetails({ allCart }) {
    const { title } = useParams()
    const { customer } = useSelector((state) => ({ ...state }))
    const [formData, setFormData] = useState({})


    const [menu, setMenu] = useState([])

    const [count, setCount] = useState(0)
    const [clickData, setClickData] = useState({})

    const handleAdd = (id) => {
        setClickData(id)
        setCount(count + 1)
    }

    const handleSub = (id) => {
        setClickData(id)

        if (count > 0) {
            setCount(count - 1)

        }

    }

    const specificMenu = async () => {

        try {
            const res = await fetch(`http://localhost:8000/specific-menu/${title}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = await res.json();
            setMenu(data);

            /* setFormData({
                 productName: data.productName || '',
                 productId: data.productId
             }); */

        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificMenu();
    }, []);


    const [optionalData, setOptionalData] = useState([])

    const allOptional = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-optional`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = await res.json();
            setOptionalData(data);

        } catch (error) {
            return (error)
            console.log(error)

        }

    };
    useEffect(() => {
        allOptional();
    }, []);

    const [menuTab, setMenuTab] = useState(true)

    const handleMenu = () => {
        setMenuTab(true)
        setVideoTab(false)
        setReviewTab(false)
    }

    const [videoTab, setVideoTab] = useState(false)

    const handleVideo = () => {
        setVideoTab(true)
        setMenuTab(false)
        setReviewTab(false)
    }

    const [reviewTab, setReviewTab] = useState(false)

    const handleReview = () => {
        setVideoTab(false)
        setMenuTab(false)
        setReviewTab(true)
    }


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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

    //Add to cart Functinality
    const [productSize, setProductSize] = useState([])
    const handleProductSize = (e) => {
        const selectedSize = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {

            setProductSize([selectedSize]);
        } else {

            setProductSize(prevSizes => prevSizes.filter(size => size !== selectedSize));
        }
    };

    const [optData, setOptData] = useState([])

    const handleOptional = (e) => {
        const selectedOption = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            // Add the selected option to the array
            setOptData(prevOption => [...prevOption, selectedOption]);
        } else {
            // Remove the unselected option from the array
            setOptData(prevOption => prevOption.filter(option => option !== selectedOption));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!customer) {
            Swal.fire({
                toast: false,
                animation: true,
                text: `You Are Not Authorized, Please Login First`,
                icon: 'warning',
                showConfirmButton: true,
                timer: 3000,
                timerProgressBar: true,
                customClass: {
                    container: 'custom-toast-container',
                    popup: 'custom-toast-popup',
                    title: 'custom-toast-title',
                    icon: 'custom-toast-icon',
                },
            })



        }


        const updatedFormData = {
            ...formData,
            productSize: productSize,
            optData: optData,
            productId: menu._id
        }

        try {


            // Make the API request with updated formData
            const res = await fetch('http://localhost:8000/add-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
                body: JSON.stringify(updatedFormData),
            });

            const data = await res.json();

            if (res.status === 200) {


                Swal.fire({
                    toast: false,
                    animation: true,
                    text: `Product Inserted To The Cart`,
                    icon: 'success',
                    showConfirmButton: true,
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        container: 'custom-toast-container',
                        popup: 'custom-toast-popup',
                        title: 'custom-toast-title',
                        icon: 'custom-toast-icon',
                    },
                })

                allCart();


            }

            if (res.status === 400) {


                Swal.fire({
                    toast: false,
                    animation: true,
                    text: `This product has already your cart`,
                    icon: 'warning',
                    showConfirmButton: true,
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        container: 'custom-toast-container',
                        popup: 'custom-toast-popup',
                        title: 'custom-toast-title',
                        icon: 'custom-toast-icon',
                    },
                })


            }



        } catch (error) {

            console.log(error)
        }
    }



    return (
        <div>
            <InnerBanner />

            <section className="food-details-section s-padding">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-8">
                            <div className="food-details-head">
                                <h2>
                                    {menu.productName}
                                </h2>
                            </div>

                            <div className="food-details-slick">
                                <div className="slider-for slick-initialized slick-slider">
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={{ opacity: 1, width: 3488 }}>
                                            <div className="slider-for-img slick-slide" data-slick-index={0} aria-hidden="true"
                                                style={{
                                                    width: 872, position: "relative", left: 0, top: 0, zIndex: 998,
                                                    opacity: 0, transition: "opacity 2000ms ease 0s"
                                                }} tabIndex={-1}>
                                                <img src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-536314.jpg"
                                                    alt="img" />
                                            </div>
                                            <div className="slider-for-img slick-slide" data-slick-index={1} aria-hidden="true"
                                                style={{
                                                    width: 872, position: "relative", left: "-872px", top: 0, zIndex:
                                                        998, opacity: 0, transition: "opacity 2000ms ease 0s"
                                                }} tabIndex={-1}>
                                                <img src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-537300.jpg"
                                                    alt="img" />
                                            </div>
                                            <div className="slider-for-img slick-slide" data-slick-index={2} aria-hidden="true"
                                                style={{
                                                    width: 872, position: "relative", left: "-1744px", top: 0, zIndex:
                                                        998, opacity: 0, transition: "opacity 2000ms ease 0s"
                                                }} tabIndex={0}>
                                                <img src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-532067.jpg"
                                                    alt="img" />
                                            </div>
                                            <div className="slider-for-img slick-slide slick-current slick-active"
                                                data-slick-index={3} aria-hidden="false" style={{
                                                    width: 872, position:
                                                        "relative", left: "-2616px", top: 0, zIndex: 1000, opacity: 1, transition:
                                                        "opacity 2000ms ease 0s"
                                                }} tabIndex={-1}>
                                                <img src={menu.avatar} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider-nav slick-initialized slick-slider">
                                    <div className="slick-list draggable" style={{ padding: 0 }}>
                                        <Slider {...settings}>
                                            {Array.isArray(menu.multipleImage) && menu.multipleImage.map((item, index) => (
                                                <div key={index} className='custom-slider'>
                                                    <img src={item.link} alt={`Image ${index + 1}`} width={150} height={100}
                                                        style={{ borderRadius: '10px' }} />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>


                            </div>


                            <div className="food-details-item-box">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${menuTab ? 'active' : ''}`} id="pills-home-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"
                                            aria-controls="pills-home" aria-selected={`${menuTab ? 'true' : 'false'}`}
                                            onClick={handleMenu}>
                                            Menu Details
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${videoTab ? 'active' : ''}`} id="pills-profile-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
                                            aria-controls="pills-profile" aria-selected={`${videoTab ? 'true' :
                                                'false'}`} onClick={handleVideo}>
                                            Video
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${reviewTab ? 'active' : ''}`} id="pills-contact-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
                                            aria-controls="pills-contact" aria-selected={`${reviewTab ? 'true' :
                                                'false'}`} onClick={handleReview}>
                                            Review
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className={`tab-pane fade ${menuTab ? 'active show' : ''}`} id="pills-home"
                                        role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="food-details-text all-details-root">
                                                    <p>
                                                        Indulge in a mouthwatering culinary delight with our Chicken Skewers paired
                                                        with vibrant slices of sweet bell peppers. Tender pieces of succulent chicken
                                                        are marinated to perfection, resulting in a flavorful and juicy experience.
                                                    </p>
                                                    <p>
                                                        Ingredients:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Fresh chicken breast or thigh meat, cubed
                                                        </li>
                                                        <li>
                                                            Assorted sweet bell peppers (red, yellow, and green), sliced into rings
                                                        </li>
                                                        <li>
                                                            Marinade (your choice of herbs, spices, and seasonings)
                                                        </li>
                                                        <li>
                                                            Olive oil
                                                        </li>
                                                        <li>
                                                            Salt and pepper
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Preparation:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            In a bowl, prepare the marinade by combining your choice of herbs, spices,
                                                            olive oil, salt, and pepper.
                                                        </li>
                                                        <li>
                                                            While the chicken is marinating, prepare the sweet bell peppers by slicing
                                                            them into rings.
                                                        </li>
                                                        <li>
                                                            Thread the marinated chicken pieces onto skewers, alternating with slices
                                                            of sweet bell peppers.
                                                        </li>
                                                        <li>
                                                            While grilling, you can brush any leftover marinade onto the skewers for
                                                            extra flavor.
                                                        </li>
                                                        <li>
                                                            Once cooked, remove the skewers from the grill and let them rest for a
                                                            minute before serving.
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Preparation:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Enjoy the skewers with a side of fresh salad or rice for a complete meal.
                                                        </li>
                                                        <li>
                                                            Drizzle with a zesty lemon or lime juice for an extra burst of flavor.
                                                        </li>
                                                        <li>
                                                            Pair with your favorite dipping sauce or chutney for added variety.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${videoTab ? 'active show' : ''}`} id="pills-profile"
                                        role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="food-video-text">
                                            <p>
                                                In this vlog video, join us on a culinary journey as we create a mouthwatering
                                                dish that's perfect for any occasion - Grilled Chicken Skewers with Slices
                                                of Sweet Bell Peppers. Get ready to tantalize your taste buds as we showcase
                                                the step-by-step process of marinating tender chicken,
                                            </p>
                                        </div>
                                        <div className="vedio-img">
                                            <img src="https://reservq.minionionbd.com/uploads/custom-images/chicken-skewers-with-slices-of-sweet-2023-10-15-10-24-45-8726.png"
                                                alt="img" />
                                            <a className="my-video-links vbox-item" data-autoplay="true" data-vbtype="video"
                                                href="https://youtu.be/NC9KlaxtfLg">
                                                <i className="fa-solid fa-play" />
                                            </a>
                                        </div>
                                        <div className="food-video-text-btm">
                                            <p>
                                                Join us in the kitchen as we share our passion for cooking and culinary
                                                creativity. Whether you're looking for a delightful appetizer, a flavorful
                                                main course, or simply a cooking inspiration, these Grilled Chicken Skewers
                                                with Slices of Sweet Bell Peppers are a must-try!
                                            </p>
                                            <p>
                                                Note:&nbsp;This is a fictional vlog video description and timestamps.
                                                You can adjust the content and timestamps based on your actual video footage
                                                and narration.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${reviewTab ? 'active show' : ''}`} id="pills-contact"
                                        role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="food-review">
                                        </div>
                                        <div className="sent-review">
                                            <div className="comment-from-box-main">
                                                <div className="comment-from-box-text">
                                                    <h3>
                                                        Submit a review
                                                    </h3>
                                                    <p>
                                                        Required fields are marked *
                                                    </p>
                                                </div>
                                                <form onSubmit={handleSubmit} >


                                                    <div className="from-box">
                                                        <div className="from-item">
                                                            <div id="full-stars-example-two">
                                                                <div className="rating-group">
                                                                    <input disabled="" defaultChecked="" className="rating__input rating__input--none"
                                                                        name="rating" id="rating3-none" defaultValue={1} type="radio" />
                                                                    <label aria-label="1 star" className="rating__label" htmlFor="rating3-1">
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input className="rating__input" name="rating" id="rating3-1" defaultValue={2}
                                                                        type="radio" />
                                                                    <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2">
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input className="rating__input" name="rating" id="rating3-2" defaultValue={3}
                                                                        type="radio" />
                                                                    <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3">
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input className="rating__input" name="rating" id="rating3-3" defaultValue={4}
                                                                        type="radio" />
                                                                    <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4">
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input className="rating__input" name="rating3" id="rating3-4" defaultValue={5}
                                                                        type="radio" />
                                                                    <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5">
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input className="rating__input" name="rating" id="rating3-5" defaultValue={5}
                                                                        type="radio" />
                                                                </div>
                                                            </div>
                                                            <div className="from-inner-two  pb-4">
                                                                <textarea className="form-control" name="review" id="reviewText" rows={5}
                                                                    placeholder="Write Review *" required="" defaultValue={""} />
                                                            </div>
                                                            <div className="form-group homec-form-input">
                                                                <div className="g-recaptcha" data-sitekey="6LeEoFkpAAAAAHmBeu4R5r8PtCkRj4BZh_0YemJM">
                                                                    <div style={{ width: 304, height: 78 }}>
                                                                        <div>
                                                                            <iframe title="reCAPTCHA" width={304} height={78} role="presentation"
                                                                                name="a-qpmr89wdwu1m" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeEoFkpAAAAAHmBeu4R5r8PtCkRj4BZh_0YemJM&co=aHR0cHM6Ly9yZXNlcnZxLm1pbmlvbmlvbmJkLmNvbTo0NDM.&hl=en-GB&v=moV1mTgQ6S91nuTnmll4Y9yf&size=normal&cb=q6m54vdmsmkh"
                                                                            />
                                                                        </div>
                                                                        <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response"
                                                                            style={{
                                                                                width: 250, height: 40, border: "1px solid rgb(193, 193, 193)",
                                                                                margin: "10px 25px", padding: 0, resize: "none", display: "none"
                                                                            }} defaultValue={
                                                                                ""} />
                                                                    </div>
                                                                    <iframe style={{ display: "none" }} />
                                                                </div>
                                                            </div>
                                                            <div className="from-btn">
                                                                <button type="submit" className="main-btn-four">
                                                                    Submit Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="col-lg-4">
                            <form onSubmit={handleSubmit}>


                                <div className="together-box">
                                    <div className="together-box-text">
                                        <h5>
                                            Select Size
                                        </h5>
                                    </div>
                                    {Array.isArray(menu.productSize) && menu.productSize.map((item, index) => (
                                        <div className="together-box-item">
                                            <div className="form-check">

                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`size_${index}`}
                                                    value={item.id} // Ensure data.id is unique for each size
                                                    checked={productSize.includes(item.id)} // Check if the size is included in the selected sizes array
                                                    onChange={handleProductSize}
                                                />


                                                <label className="form-check-label" htmlFor="size_0">
                                                    {item.size}
                                                </label>
                                            </div>
                                            <div className="form-check-btn">
                                                <div className="grid">
                                                    {item.price} Tk.
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="together-box-text">
                                        <h5>
                                            Select Addon (Optional)
                                        </h5>
                                    </div>

                                    {Array.isArray(menu.optionalItem) && menu.optionalItem.map((item, index) => (
                                        <div key={index}>
                                            {optionalData.map((optItem, optIndex) => (
                                                optItem._id === item.id && (
                                                    <div className="together-box-item" key={optIndex}>
                                                        <div className="form-check">


                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id={`option_${index}`}
                                                                value={optItem._id}
                                                                // Check if the option is included in the selected options array
                                                                onChange={handleOptional}
                                                            />




                                                            <label className="form-check-label">
                                                                {optItem.name} <span style={{ marginLeft: '25px' }}>{optItem.price} Tk.</span>
                                                            </label>
                                                        </div>





                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    ))}


                                    <div className="together-box-inner-btn-btm">
                                        <button type="submit" className="main-btn-six" tabIndex={-1}>
                                            <span>
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
                                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                                                        strokeWidth="1.5" />
                                                    <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                                                        strokeWidth="1.5" />
                                                    <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                                    />
                                                    <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="blog-details-promobanner-res-df">
                            </div>
                        </div>



                    </div>

                </div>
            </section>




            <Resturent />
        </div>
    )
}

export default MenuDetails