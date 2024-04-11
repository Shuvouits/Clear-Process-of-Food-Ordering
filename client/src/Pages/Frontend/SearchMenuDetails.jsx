import React, { useEffect, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import Resturent from '../../components/Frontend/Resturent'
import FAQ from '../../components/Frontend/FAQ'
import { Link, useParams } from 'react-router-dom'

function SearchMenuDetails() {

   
    const { title } = useParams();
    const [modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

    const [category, setCategory] = useState([])
    const allCategory = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-category`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = await res.json();
            setCategory(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allCategory();
    }, []);


    const [product, setProduct] = useState([])
    const allProduct = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-product`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = await res.json();
            setProduct(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allProduct();
    }, []);


    const [categoryId, setCategoryId] = useState('');

    useEffect(() => {

        const filteredCategoryId = category
            .filter(item => item.slug === title)
            .map(item => item._id);


        if (filteredCategoryId.length > 0) {
            setCategoryId(filteredCategoryId[0]);
        } else {

            setCategoryId('');
        }
    }, [category, title]);






    const handleCategory = async (id) => {
        setCategoryId(id)

    }

   
    const [formData, setFormData] = useState({ menuFilter: '' });

    useEffect(() => {
        if (title) {
            setFormData(prevState => ({ ...prevState, menuFilter: title }));
        }
    }, [title]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const filteredProducts = product.filter(item =>
        item.productName &&
        item.productName.toLowerCase().includes((formData.menuFilter || '').toLowerCase())
    );

    console.log(formData)





    return (
        <>

            <main>

                <InnerBanner title={"Menu Details"} />

                <section className="food-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="food-details-btn-box">
                                    <div className="food-details-btn-box-item">
                                        <form
                                            onSubmit={handleSubmit}
                                            className="food-details-btn-box-item"
                                        >
                                            <select
                                                className="form-select"

                                                onChange={(event) => handleCategory(event.target.value)}
                                                aria-label="Default select example"
                                            >

                                                <option value=''>Select Category</option>

                                                {category.map((item, index) => (

                                                    <option value={item._id} selected={item.slug === title ? 'selected' : ''}  >{item.name}</option>

                                                ))}

                                            </select>
                                            <div className="food-details-btn-search-box">
                                                <input
                                                    defaultValue=""
                                                    type="text"
                                                    className="form-control"
                                                    id="menuFilter"
                                                    placeholder="Type your keyword"
                                                    onChange={handleChange}
                                                    value={formData.menuFilter}
                                                />

                                                <div className="food-details-btn-search-btn">
                                                    <button type="submit" className="icon">
                                                        <span>
                                                            <svg
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                                                                    stroke="white"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="food-details-btn-box-right-btn">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-home"
                                                    aria-selected="true"
                                                >
                                                    <span>
                                                        <svg
                                                            width={25}
                                                            height={24}
                                                            viewBox="0 0 25 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M8.34857 0H2.96329C1.32953 0 0 1.32953 0 2.96329V8.34791C0 9.98167 1.32953 11.3112 2.96329 11.3112H8.34791C9.98167 11.3112 11.3112 9.98167 11.3112 8.34791V2.96329C11.3119 1.32953 9.98233 0 8.34857 0ZM9.33633 8.34857C9.33633 8.89316 8.89316 9.33633 8.34857 9.33633H2.96329C2.4187 9.33633 1.97553 8.89316 1.97553 8.34857V2.96395C1.97553 2.41936 2.4187 1.97618 2.96329 1.97618H8.34791C8.8925 1.97618 9.33567 2.41936 9.33567 2.96395L9.33633 8.34857ZM21.6715 0H16.2862C14.6525 0 13.3229 1.32953 13.3229 2.96329V8.34791C13.3229 9.98167 14.6525 11.3112 16.2862 11.3112H21.6715C23.3053 11.3112 24.6348 9.98167 24.6348 8.34791V2.96329C24.6348 1.32953 23.3059 0 21.6715 0ZM22.6593 8.34857C22.6593 8.89316 22.2161 9.33633 21.6715 9.33633H16.2862C15.7416 9.33633 15.2985 8.89316 15.2985 8.34857V2.96395C15.2985 2.41936 15.7416 1.97618 16.2862 1.97618H21.6715C22.2161 1.97618 22.6593 2.41936 22.6593 2.96395V8.34857ZM8.34857 12.6888H2.96329C1.32953 12.6888 0 14.0183 0 15.6521V21.0367C0 22.6705 1.32953 24 2.96329 24H8.34791C9.98167 24 11.3112 22.6705 11.3112 21.0367V15.6521C11.3119 14.0177 9.98233 12.6888 8.34857 12.6888ZM9.33633 21.0367C9.33633 21.5813 8.89316 22.0245 8.34857 22.0245H2.96329C2.4187 22.0245 1.97553 21.5813 1.97553 21.0367V15.6521C1.97553 15.1075 2.4187 14.6643 2.96329 14.6643H8.34791C8.8925 14.6643 9.33567 15.1075 9.33567 15.6521L9.33633 21.0367ZM21.6715 12.6888H16.2862C14.6525 12.6888 13.3229 14.0183 13.3229 15.6521V21.0367C13.3229 22.6705 14.6525 24 16.2862 24H20.3097C20.855 24 21.2975 23.5575 21.2975 23.0122C21.2975 22.467 20.855 22.0245 20.3097 22.0245H16.2862C15.7416 22.0245 15.2985 21.5813 15.2985 21.0367V15.6521C15.2985 15.1075 15.7416 14.6643 16.2862 14.6643H21.6715C22.2161 14.6643 22.6593 15.1075 22.6593 15.6521V20.1655C22.6593 20.7108 23.1018 21.1533 23.647 21.1533C24.1923 21.1533 24.6348 20.7108 24.6348 20.1655V15.6521C24.6348 14.0177 23.3059 12.6888 21.6715 12.6888Z" />
                                                        </svg>
                                                    </span>
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
                                                    <span>
                                                        <i className="fa-solid fa-bars"></i>
                                                    </span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-home"
                                        role="tabpanel"
                                        aria-labelledby="pills-home-tab"
                                    >
                                        <div className="row g-4">





                                            {filteredProducts.length > 0 ? (
                                                filteredProducts.map(item => (
                                                    <>


                                                        {categoryId === '' && (

                                                            <div
                                                                className=" col-xxl-3 col-xl-4  col-lg-4 col-md-6 featured-item-mt "
                                                                data-aos="fade-up"
                                                            >
                                                                <div className="featured-item">
                                                                    <div className="featured-item-img-populer"></div>
                                                                    <div className="featured-item-img">
                                                                        <img
                                                                            src={item.avatar}
                                                                            className="w-100"
                                                                            alt="featured-thumb"
                                                                        />
                                                                        <div className="featured-item-img-overlay">
                                                                            <div className="featured-item-img-over-text">
                                                                                <div className="left-text">
                                                                                    <Link to={`/menu/${item.slug}`}>
                                                                                        <div className="icon">
                                                                                            <span>
                                                                                                <svg
                                                                                                    width={24}
                                                                                                    height={24}
                                                                                                    viewBox="0 0 24 24"
                                                                                                    fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path
                                                                                                        d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z"
                                                                                                        stroke="#F01543"
                                                                                                        strokeWidth={2}
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
                                                                                                </svg>
                                                                                            </span>
                                                                                        </div>
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="featured-item-text">
                                                                        <div className="text-item">
                                                                            <div className="left">
                                                                                <h3>{item.price}</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-item-center">
                                                                            <h3>
                                                                                <Link
                                                                                    title="Baked Chicken Wings and Legs"
                                                                                    className="line-clamp-1"
                                                                                    to={`/menu/${item.slug}`}
                                                                                >
                                                                                    {item.productName}
                                                                                </Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-item-center-item-box">
                                                                            {item.specification.map((spec) => (

                                                                                <div className="text-item-center-item">
                                                                                    <div className="icon">
                                                                                        <span>
                                                                                            <svg
                                                                                                width={24}
                                                                                                height={24}
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                                                    stroke="#FE724C"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <h5>{spec.sname}</h5>
                                                                                    </div>
                                                                                </div>

                                                                            ))}




                                                                            <div className="featured-item-btn">
                                                                                <button
                                                                                    type="button"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#exampleModal2"
                                                                                    className="main-btn-three"
                                                                                >
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
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        )}



                                                        {categoryId.includes(item.category) && (

                                                            <div
                                                                className=" col-xxl-3 col-xl-4  col-lg-4 col-md-6 featured-item-mt "
                                                                data-aos="fade-up"
                                                            >
                                                                <div className="featured-item">

                                                                    {item.populer === 'Yes' && (

                                                                        <div className="featured-item-img-populer"></div>

                                                                    )}

                                                                    <div className="featured-item-img">
                                                                        <img
                                                                            src={item.avatar}
                                                                            className="w-100"
                                                                            alt="featured-thumb"
                                                                        />
                                                                        <div className="featured-item-img-overlay">
                                                                            <div className="featured-item-img-over-text">
                                                                                <div className="left-text">
                                                                                    <a href="https://reservq.minionionbd.com/wishlist/add/2">
                                                                                        <div className="icon">
                                                                                            <span>
                                                                                                <svg
                                                                                                    width={24}
                                                                                                    height={24}
                                                                                                    viewBox="0 0 24 24"
                                                                                                    fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path
                                                                                                        d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z"
                                                                                                        stroke="#F01543"
                                                                                                        strokeWidth={2}
                                                                                                        strokeLinecap="round"
                                                                                                        strokeLinejoin="round"
                                                                                                    />
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
                                                                                <h3>{item.price} Tk.</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-item-center">
                                                                            <h3>
                                                                                <Link
                                                                                    title="Baked Chicken Wings and Legs"
                                                                                    className="line-clamp-1"
                                                                                    to={`/menu/${item.slug}`}
                                                                                >
                                                                                    {item.productName}
                                                                                </Link>
                                                                            </h3>
                                                                        </div>
                                                                        <div className="text-item-center-item-box">

                                                                            {item.specification.map((data) => (

                                                                                <div className="text-item-center-item">
                                                                                    <div className="icon">
                                                                                        <span>
                                                                                            <svg
                                                                                                width={24}
                                                                                                height={24}
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                                                    stroke="#FE724C"
                                                                                                    strokeWidth="1.5"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="text">
                                                                                        <h5>{data.sname}</h5>
                                                                                    </div>
                                                                                </div>

                                                                            ))}






                                                                            <div className="featured-item-btn">
                                                                                <button
                                                                                    type="button"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#exampleModal2"
                                                                                    className="main-btn-three"
                                                                                >
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
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        )}

                                                    </>
                                                ))
                                            ) : (
                                                <div style={{ fontWeight: 'bold', color: 'red', fontSize: '30px' }}>No data found</div>
                                            )}








                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQ />
                <Resturent />

            </main>

            <section class="shopping-cart">


                <div

                    className={`modal fade ${modalOpen ? 'show' : ''}`}
                    id="exampleModal12"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ display: `${modalOpen ? 'block' : ''}`, paddingRight: `${modalOpen ? '23px' : ''}` }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={handleModal}
                            ></button>
                            <form action="https://reservq.minionionbd.com/cart/add" method="POST">
                                <input
                                    type="hidden"
                                    name="_token"
                                    defaultValue="vKsd7uvI7IdkeSiahIEZwpX30NwWuUAtOKDLmzSn"
                                />
                                <input type="hidden" defaultValue={12} name="product_id" required="" />
                                <div className="modal-body">
                                    <div className="modal-body-text">
                                        <h3>Beef Nachos</h3>
                                    </div>
                                    <div className="modal-body-item-box">
                                        <div className="together-box-text">
                                            <h5>Select Size</h5>
                                        </div>
                                        <div className="together-box-item">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="size"
                                                    defaultValue="Large,200"
                                                    id="size_0"
                                                    data-info="Large,200"
                                                />
                                                <label className="form-check-label" htmlFor="size_0">
                                                    Large
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
                                                    defaultValue=","
                                                    id="size_1"
                                                    data-info=","
                                                />
                                                <label className="form-check-label" htmlFor="size_1"></label>
                                            </div>
                                            <div className="form-check-btn">
                                                <div className="grid">$</div>
                                            </div>
                                        </div>
                                        <div className="modal-body-item-box-text">
                                            <h5>Select Addon (Optional)</h5>
                                        </div>
                                        <div className="together-box-item">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="addons[]"
                                                    defaultValue={3}
                                                    id="addon_0_0"
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Drinks
                                                </label>
                                            </div>
                                            <div className="form-check-btn">
                                                <div className="form-check-btn">
                                                    <div className="grid">$25</div>
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
                                                    id="addon_1_0"
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Nan
                                                </label>
                                            </div>
                                            <div className="form-check-btn">
                                                <div className="form-check-btn">
                                                    <div className="grid">$10</div>
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
                                                    id="addon_2_0"
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Extra Chess
                                                </label>
                                            </div>
                                            <div className="form-check-btn">
                                                <div className="form-check-btn">
                                                    <div className="grid">$5</div>
                                                </div>
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
                                                        ></path>
                                                        <path
                                                            d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                                                            strokeWidth="1.5"
                                                        ></path>
                                                        <path
                                                            d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                                                            strokeWidth="1.5"
                                                        ></path>
                                                        <path
                                                            d="M14 8L14 13"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M16.5 10.5L11.5 10.5"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </section>

        </>
    )
}

export default SearchMenuDetails