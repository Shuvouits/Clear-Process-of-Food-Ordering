import React, { useEffect, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import Resturent from '../../components/Frontend/Resturent'
import { useParams } from 'react-router-dom'

function MenuDetails() {
    const {title} = useParams()

    const [menu, setMenu] = useState({})
    const [formData, setFormData] = useState({})
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

            setFormData({
                productName: data.productName || '',
            });

        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificMenu();
    }, []);



    return (
        <div>
            <InnerBanner />

            <section className="food-details-section s-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="food-details-head">

                                <h2>{menu.productName}</h2>
                               
                               
                            </div>
                            <div className="food-details-slick">
                                <div className="slider-for slick-initialized slick-slider">
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={{ opacity: 1, width: 3488 }}>
                                            <div
                                                className="slider-for-img slick-slide"
                                                data-slick-index={0}
                                                aria-hidden="true"
                                                style={{
                                                    width: 872,
                                                    position: "relative",
                                                    left: 0,
                                                    top: 0,
                                                    zIndex: 998,
                                                    opacity: 0,
                                                    transition: "opacity 2000ms ease 0s"
                                                }}
                                                tabIndex={-1}
                                            >
                                                <img
                                                    src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-536314.jpg"
                                                    alt="img"
                                                />
                                            </div>
                                            <div
                                                className="slider-for-img slick-slide"
                                                data-slick-index={1}
                                                aria-hidden="true"
                                                style={{
                                                    width: 872,
                                                    position: "relative",
                                                    left: "-872px",
                                                    top: 0,
                                                    zIndex: 998,
                                                    opacity: 0,
                                                    transition: "opacity 2000ms ease 0s"
                                                }}
                                                tabIndex={-1}
                                            >
                                                <img
                                                    src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-537300.jpg"
                                                    alt="img"
                                                />
                                            </div>
                                            <div
                                                className="slider-for-img slick-slide"
                                                data-slick-index={2}
                                                aria-hidden="true"
                                                style={{
                                                    width: 872,
                                                    position: "relative",
                                                    left: "-1744px",
                                                    top: 0,
                                                    zIndex: 998,
                                                    opacity: 0,
                                                    transition: "opacity 2000ms ease 0s"
                                                }}
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-532067.jpg"
                                                    alt="img"
                                                />
                                            </div>
                                            <div
                                                className="slider-for-img slick-slide slick-current slick-active"
                                                data-slick-index={3}
                                                aria-hidden="false"
                                                style={{
                                                    width: 872,
                                                    position: "relative",
                                                    left: "-2616px",
                                                    top: 0,
                                                    zIndex: 1000,
                                                    opacity: 1,
                                                    transition: "opacity 2000ms ease 0s"
                                                }}
                                                tabIndex={-1}
                                            >
                                                <img
                                                    src={menu.avatar}
                                                    alt="img"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-nav slick-initialized slick-slider">
                                    <div className="slick-list draggable" style={{ padding: 0 }}>
                                        <div
                                            className="slick-track"
                                            style={{
                                                opacity: 1,
                                                width: 872,
                                                transform: "translate3d(-654px, 0px, 0px)",
                                                transition: "transform 2000ms ease 0s"
                                            }}
                                        >
                                            <div
                                                className="slider-nav-img slick-slide"
                                                data-slick-index={0}
                                                aria-hidden="true"
                                                style={{ width: 188 }}
                                                tabIndex={-1}
                                            >
                                                <img
                                                    src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-536314.jpg"
                                                    alt=""
                                                />
                                                <div className="overlay" />
                                            </div>
                                            <div
                                                className="slider-nav-img slick-slide"
                                                data-slick-index={1}
                                                aria-hidden="true"
                                                style={{ width: 188 }}
                                                tabIndex={-1}
                                            >
                                                <img
                                                    src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-537300.jpg"
                                                    alt=""
                                                />
                                                <div className="overlay" />
                                            </div>
                                            <div
                                                className="slider-nav-img slick-slide"
                                                data-slick-index={2}
                                                aria-hidden="true"
                                                style={{ width: 188 }}
                                                tabIndex={0}
                                            >
                                                <img
                                                    src="https://reservq.minionionbd.com/uploads/custom-images/Gallery2024-01-25-10-05-532067.jpg"
                                                    alt=""
                                                />
                                                <div className="overlay" />
                                            </div>
                                            <div
                                                className="slider-nav-img slick-slide slick-current slick-center"
                                                data-slick-index={3}
                                                aria-hidden="true"
                                                style={{ width: 188 }}
                                                tabIndex={0}
                                            >
                                                <img
                                                    src=''
                                                    alt=""
                                                />
                                                <div className="overlay" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="food-details-item-box">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-home"
                                            aria-selected="false"
                                        >
                                            Menu Details
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="pills-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-profile"
                                            aria-selected="true"
                                        >
                                            Video
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-contact-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-contact"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-contact"
                                            aria-selected="false"
                                        >
                                            Review
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade"
                                        id="pills-home"
                                        role="tabpanel"
                                        aria-labelledby="pills-home-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="food-details-text all-details-root">
                                                    <p>
                                                        Indulge in a mouthwatering culinary delight with our
                                                        Chicken Skewers paired with vibrant slices of sweet bell
                                                        peppers. Tender pieces of succulent chicken are marinated
                                                        to perfection, resulting in a flavorful and juicy
                                                        experience.
                                                    </p>
                                                    <p>Ingredients:</p>
                                                    <ul>
                                                        <li>Fresh chicken breast or thigh meat, cubed</li>
                                                        <li>
                                                            Assorted sweet bell peppers (red, yellow, and green),
                                                            sliced into rings
                                                        </li>
                                                        <li>
                                                            Marinade (your choice of herbs, spices, and seasonings)
                                                        </li>
                                                        <li>Olive oil</li>
                                                        <li>Salt and pepper</li>
                                                    </ul>
                                                    <p>Preparation:</p>
                                                    <ul>
                                                        <li>
                                                            In a bowl, prepare the marinade by combining your choice
                                                            of herbs, spices, olive oil, salt, and pepper.
                                                        </li>
                                                        <li>
                                                            While the chicken is marinating, prepare the sweet bell
                                                            peppers by slicing them into rings.
                                                        </li>
                                                        <li>
                                                            Thread the marinated chicken pieces onto skewers,
                                                            alternating with slices of sweet bell peppers.
                                                        </li>
                                                        <li>
                                                            While grilling, you can brush any leftover marinade onto
                                                            the skewers for extra flavor.
                                                        </li>
                                                        <li>
                                                            Once cooked, remove the skewers from the grill and let
                                                            them rest for a minute before serving.
                                                        </li>
                                                    </ul>
                                                    <p>Preparation:</p>
                                                    <ul>
                                                        <li>
                                                            Enjoy the skewers with a side of fresh salad or rice for
                                                            a complete meal.
                                                        </li>
                                                        <li>
                                                            Drizzle with a zesty lemon or lime juice for an extra
                                                            burst of flavor.
                                                        </li>
                                                        <li>
                                                            Pair with your favorite dipping sauce or chutney for
                                                            added variety.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade active show"
                                        id="pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="pills-profile-tab"
                                    >
                                        <div className="food-video-text">
                                            <p>
                                                In this vlog video, join us on a culinary journey as we create
                                                a mouthwatering dish that's perfect for any occasion - Grilled
                                                Chicken Skewers with Slices of Sweet Bell Peppers. Get ready
                                                to tantalize your taste buds as we showcase the step-by-step
                                                process of marinating tender chicken,
                                            </p>
                                        </div>
                                        <div className="vedio-img">
                                            <img
                                                src="https://reservq.minionionbd.com/uploads/custom-images/chicken-skewers-with-slices-of-sweet-2023-10-15-10-24-45-8726.png"
                                                alt="img"
                                            />
                                            <a
                                                className="my-video-links vbox-item"
                                                data-autoplay="true"
                                                data-vbtype="video"
                                                href="https://youtu.be/NC9KlaxtfLg"
                                            >
                                                <i className="fa-solid fa-play" />
                                            </a>
                                        </div>
                                        <div className="food-video-text-btm">
                                            <p>
                                                Join us in the kitchen as we share our passion for cooking and
                                                culinary creativity. Whether you're looking for a delightful
                                                appetizer, a flavorful main course, or simply a cooking
                                                inspiration, these Grilled Chicken Skewers with Slices of
                                                Sweet Bell Peppers are a must-try!
                                            </p>
                                            <p>
                                                Note:&nbsp;This is a fictional vlog video description and
                                                timestamps. You can adjust the content and timestamps based on
                                                your actual video footage and narration.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-contact"
                                        role="tabpanel"
                                        aria-labelledby="pills-contact-tab"
                                    >
                                        <div className="food-review"></div>
                                        <div className="sent-review">
                                            <div className="comment-from-box-main">
                                                <div className="comment-from-box-text">
                                                    <h3>Submit a review</h3>
                                                    <p>Required fields are marked *</p>
                                                </div>
                                                <form
                                                    action="https://reservq.minionionbd.com/product/review"
                                                    method="POST"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="_token"
                                                        defaultValue="J3ZawuoCjVH95jTtVmdVvEhh9N7PrBn0q6UKSHxd"
                                                    />{" "}
                                                    <input type="hidden" name="product_id" defaultValue={2} />
                                                    <div className="from-box">
                                                        <div className="from-item">
                                                            <div id="full-stars-example-two">
                                                                <div className="rating-group">
                                                                    <input
                                                                        disabled=""
                                                                        defaultChecked=""
                                                                        className="rating__input rating__input--none"
                                                                        name="rating"
                                                                        id="rating3-none"
                                                                        defaultValue={1}
                                                                        type="radio"
                                                                    />
                                                                    <label
                                                                        aria-label="1 star"
                                                                        className="rating__label"
                                                                        htmlFor="rating3-1"
                                                                    >
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input
                                                                        className="rating__input"
                                                                        name="rating"
                                                                        id="rating3-1"
                                                                        defaultValue={2}
                                                                        type="radio"
                                                                    />
                                                                    <label
                                                                        aria-label="2 stars"
                                                                        className="rating__label"
                                                                        htmlFor="rating3-2"
                                                                    >
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input
                                                                        className="rating__input"
                                                                        name="rating"
                                                                        id="rating3-2"
                                                                        defaultValue={3}
                                                                        type="radio"
                                                                    />
                                                                    <label
                                                                        aria-label="3 stars"
                                                                        className="rating__label"
                                                                        htmlFor="rating3-3"
                                                                    >
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input
                                                                        className="rating__input"
                                                                        name="rating"
                                                                        id="rating3-3"
                                                                        defaultValue={4}
                                                                        type="radio"
                                                                    />
                                                                    <label
                                                                        aria-label="4 stars"
                                                                        className="rating__label"
                                                                        htmlFor="rating3-4"
                                                                    >
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input
                                                                        className="rating__input"
                                                                        name="rating3"
                                                                        id="rating3-4"
                                                                        defaultValue={5}
                                                                        type="radio"
                                                                    />
                                                                    <label
                                                                        aria-label="5 stars"
                                                                        className="rating__label"
                                                                        htmlFor="rating3-5"
                                                                    >
                                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                                    </label>
                                                                    <input
                                                                        className="rating__input"
                                                                        name="rating"
                                                                        id="rating3-5"
                                                                        defaultValue={5}
                                                                        type="radio"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="from-inner-two  pb-4">
                                                                <textarea
                                                                    className="form-control"
                                                                    name="review"
                                                                    id="reviewText"
                                                                    rows={5}
                                                                    placeholder="Write Review *"
                                                                    required=""
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                            <div className="form-group homec-form-input">
                                                                <div
                                                                    className="g-recaptcha"
                                                                    data-sitekey="6LeEoFkpAAAAAHmBeu4R5r8PtCkRj4BZh_0YemJM"
                                                                >
                                                                    <div style={{ width: 304, height: 78 }}>
                                                                        <div>
                                                                            <iframe
                                                                                title="reCAPTCHA"
                                                                                width={304}
                                                                                height={78}
                                                                                role="presentation"
                                                                                name="a-qpmr89wdwu1m"
                                                                                frameBorder={0}
                                                                                scrolling="no"
                                                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeEoFkpAAAAAHmBeu4R5r8PtCkRj4BZh_0YemJM&co=aHR0cHM6Ly9yZXNlcnZxLm1pbmlvbmlvbmJkLmNvbTo0NDM.&hl=en-GB&v=moV1mTgQ6S91nuTnmll4Y9yf&size=normal&cb=q6m54vdmsmkh"
                                                                            />
                                                                        </div>
                                                                        <textarea
                                                                            id="g-recaptcha-response"
                                                                            name="g-recaptcha-response"
                                                                            className="g-recaptcha-response"
                                                                            style={{
                                                                                width: 250,
                                                                                height: 40,
                                                                                border: "1px solid rgb(193, 193, 193)",
                                                                                margin: "10px 25px",
                                                                                padding: 0,
                                                                                resize: "none",
                                                                                display: "none"
                                                                            }}
                                                                            defaultValue={""}
                                                                        />
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
                            <form action="https://reservq.minionionbd.com/cart/add" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="J3ZawuoCjVH95jTtVmdVvEhh9N7PrBn0q6UKSHxd"
                                />{" "}
                                <input type="hidden" defaultValue={2} name="product_id" />
                                <div className="together-box">
                                    <div className="together-box-text">
                                        <h5>Select Size</h5>
                                    </div>
                                    <div className="together-box-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size"
                                                defaultValue="Small,150"
                                                id="size_0"
                                                data-info="Small,150"
                                            />
                                            <label className="form-check-label" htmlFor="size_0">
                                                Small
                                            </label>
                                        </div>
                                        <div className="form-check-btn">
                                            <div className="grid">$150</div>
                                        </div>
                                    </div>
                                    <div className="together-box-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size"
                                                defaultValue="Mediam,200"
                                                id="size_1"
                                                data-info="Mediam,200"
                                            />
                                            <label className="form-check-label" htmlFor="size_1">
                                                Mediam
                                            </label>
                                        </div>
                                        <div className="form-check-btn">
                                            <div className="grid">$200</div>
                                        </div>
                                    </div>
                                    <div className="together-box-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="size"
                                                defaultValue="Large,250"
                                                id="size_2"
                                                data-info="Large,250"
                                            />
                                            <label className="form-check-label" htmlFor="size_2">
                                                Large
                                            </label>
                                        </div>
                                        <div className="form-check-btn">
                                            <div className="grid">$250</div>
                                        </div>
                                    </div>
                                    <div className="together-box-text">
                                        <h5>Select Addon (Optional)</h5>
                                    </div>
                                    <div className="together-box-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="addons[]"
                                                defaultValue={1}
                                                id="addon_0_0"
                                            />
                                            <label className="form-check-label" htmlFor="addon_0_0">
                                                Chicken Leg ($40)
                                            </label>
                                        </div>
                                        <div className="form-check-btn">
                                            <div className="form-check-btn">
                                                <div className="grid">
                                                    <button className="btn btn-minus" data-addon-index="0_0">
                                                        <i className="fa-solid fa-minus" />
                                                    </button>
                                                    <div className="column product-qty" id="quantityUpdate_0_0">
                                                        0
                                                    </div>
                                                    <input
                                                        type="hidden"
                                                        name="addons_qty[]"
                                                        id="qtyInput_0_0"
                                                        defaultValue={1}
                                                    />
                                                    <button className="btn btn-plus" data-addon-index="0_0">
                                                        <i className="fa-solid fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="together-box-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="addons[]"
                                                defaultValue={3}
                                                id="addon_1_0"
                                            />
                                            <label className="form-check-label" htmlFor="addon_1_0">
                                                Drinks ($25)
                                            </label>
                                        </div>
                                        <div className="form-check-btn">
                                            <div className="form-check-btn">
                                                <div className="grid">
                                                    <button className="btn btn-minus" data-addon-index="1_0">
                                                        <i className="fa-solid fa-minus" />
                                                    </button>
                                                    <div className="column product-qty" id="quantityUpdate_1_0">
                                                        0
                                                    </div>
                                                    <input
                                                        type="hidden"
                                                        name="addons_qty[]"
                                                        id="qtyInput_1_0"
                                                        defaultValue={1}
                                                    />
                                                    <button className="btn btn-plus" data-addon-index="1_0">
                                                        <i className="fa-solid fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="together-box-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="addons[]"
                                                defaultValue={4}
                                                id="addon_2_0"
                                            />
                                            <label className="form-check-label" htmlFor="addon_2_0">
                                                Nan ($10)
                                            </label>
                                        </div>
                                        <div className="form-check-btn">
                                            <div className="form-check-btn">
                                                <div className="grid">
                                                    <button className="btn btn-minus" data-addon-index="2_0">
                                                        <i className="fa-solid fa-minus" />
                                                    </button>
                                                    <div className="column product-qty" id="quantityUpdate_2_0">
                                                        0
                                                    </div>
                                                    <input
                                                        type="hidden"
                                                        name="addons_qty[]"
                                                        id="qtyInput_2_0"
                                                        defaultValue={1}
                                                    />
                                                    <button className="btn btn-plus" data-addon-index="2_0">
                                                        <i className="fa-solid fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="together-box-item">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="addons[]"
                                                defaultValue={5}
                                                id="addon_3_0"
                                            />
                                            <label className="form-check-label" htmlFor="addon_3_0">
                                                Extra Chess ($5)
                                            </label>
                                        </div>
                                        <div className="form-check-btn">
                                            <div className="form-check-btn">
                                                <div className="grid">
                                                    <button className="btn btn-minus" data-addon-index="3_0">
                                                        <i className="fa-solid fa-minus" />
                                                    </button>
                                                    <div className="column product-qty" id="quantityUpdate_3_0">
                                                        0
                                                    </div>
                                                    <input
                                                        type="hidden"
                                                        name="addons_qty[]"
                                                        id="qtyInput_3_0"
                                                        defaultValue={1}
                                                    />
                                                    <button className="btn btn-plus" data-addon-index="3_0">
                                                        <i className="fa-solid fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="together-box-inner-btn">
                                        <div className="grid">
                                            <button className="btn btn-minus" id="btn-minus">
                                                <i className="fa-solid fa-minus" />
                                            </button>
                                            <input
                                                className="column product-qty"
                                                type="text"
                                                name="qty"
                                                id="qtyInput"
                                                defaultValue={1}
                                            />
                                            <button className="btn btn-plus" id="btn-plus">
                                                <i className="fa-solid fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="together-box-inner-btn-btm">
                                        <button type="submit" className="main-btn-six" tabIndex={-1}>
                                            <span>
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        d="M14 8L14 13"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M16.5 10.5L11.5 10.5"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="blog-details-promobanner-res-df"></div>
                        </div>
                    </div>
                </div>
            </section>


            <Resturent />
        </div>
    )
}

export default MenuDetails