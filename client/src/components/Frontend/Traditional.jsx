import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Cookies from "js-cookie";


function Traditional({handleCart}) {

    const { customer } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch();

    
    //Category Data
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



    //Product Data
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


    const [filterData, setFilterData] = useState(null)

    const handleCategory = (id) => {
        setFilterData(id);
    }

     

    const handlewishList = async(id) => {
        if(!customer){

            Swal.fire({
                toast: false,
                animation: true,
                text: `You are not authorized user`,
                icon: 'error',
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


        try {
            const res = await fetch(`http://localhost:8000/wishlist-product/${id}/${customer.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
            });

            const data = await res.json();

            console.log(data)

            if (res.status === 200) {

                Swal.fire({
                    toast: false,
                    animation: true,
                    text: `Product Inserted your wishlist`,
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

                dispatch({ type: "WISHLIST", payload: data });
                Cookies.set("wishlist", JSON.stringify(data));

               

                

            }

            if (res.status === 400) {

                Swal.fire({
                    toast: false,
                    animation: true,
                    text: `${data.message}`,
                    icon: 'error',
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
            //return (error)
            console.log(error)

        }
    }  


    

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
                                    <li className={filterData === null ? 'active' : ''} data-group="all" onClick={() => handleCategory(null)}>
                                        All Categories
                                    </li>
                                    {category.map((item) => (

                                        <li data-group={48} className={filterData === item._id ? 'active' : ''} onClick={() => handleCategory(item._id)}>
                                            {item.name}
                                        </li>

                                    ))}


                                </ul>
                            </div>
                        </div>
                        {/* Filter Title */}
                        {/* Filter Content */}
                        <div className="row shafull-container">

                            {filterData === null && (

                                product.map((item) => (
                                    <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;50&quot; ]">


                                        <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>

                                            {item.populer == 'Yes' && (
                                                <div className="featured-item-img-populer">
                                                </div>

                                            )}


                                            <div className="featured-item-img">
                                                <img src={item.avatar} className="w-100" alt="featured-thumb" />
                                                <div className="featured-item-img-overlay">
                                                    <div className="featured-item-img-over-text">
                                                        <div className="left-text">
                                                            <Link to="#" onClick={()=>handlewishList(item._id)}>
                                                                <div className="icon">
                                                                    <span>
                                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M4.31804 6.31804C3.90017 6.7359 3.5687 7.23198 3.34255 7.77795C3.1164 8.32392 3 8.90909 3 9.50004C3 10.091 3.1164 10.6762 3.34255 11.2221C3.5687 11.7681 3.90017 12.2642 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.50004C21.0001 8.30656 20.526 7.16196 19.682 6.31804C18.8381 5.47412 17.6935 5.00001 16.5 5.00001C15.3066 5.00001 14.162 5.47412 13.318 6.31804L12 7.63604L10.682 6.31804C10.2642 5.90017 9.7681 5.5687 9.22213 5.34255C8.67616 5.1164 8.09099 5 7.50004 5C6.90909 5 6.32392 5.1164 5.77795 5.34255C5.23198 5.5687 4.7359 5.90017 4.31804 6.31804V6.31804Z" stroke="#F01543" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
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
                                                        <h3>
                                                            {item.price} Tk.
                                                        </h3>
                                                    </div>
                                                    <div className="right">
                                                    </div>
                                                </div>
                                                <div className="text-item-center">
                                                    <h3>
                                                        <Link to={`/menu/${item.slug}`}  className="line-clamp-1" title="Baked Chicken Wings and Legs">
                                                            {item.productName}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="text-item-center-item-box">
                                                    {item.specification.map((data) => (

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
                                                                    {data.sname}
                                                                </h5>
                                                            </div>
                                                        </div>

                                                    ))}



                                                    <div className="featured-item-btn">
                                                        <button onClick={() => handleCart(item._id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" className="main-btn-three">
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
                                ))

                            )}



                            {filterData !== null && (

                                product.filter(item => item.category === filterData).map((item) => (

                                    <div className=" col-xxl-3 col-xl-3 col-lg-4 col-md-6 shaf-item res-mb-20px " data-groups="[&quot;all&quot;,&quot;50&quot; ]">


                                        <div className="featured-item  " data-aos="fade-up" data-aos-delay={100}>

                                            {item.populer == 'Yes' && (
                                                <div className="featured-item-img-populer">
                                                </div>

                                            )}


                                            <div className="featured-item-img">
                                                <img src={item.avatar} className="w-100" alt="featured-thumb" />
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
                                                            {item.price} Tk.
                                                        </h3>
                                                    </div>
                                                    <div className="right">
                                                    </div>
                                                </div>
                                                <div className="text-item-center">
                                                    <h3>
                                                        <Link to={`/menu/${item.slug}`} className="line-clamp-1" title="Baked Chicken Wings and Legs">
                                                            {item.productName}
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="text-item-center-item-box">
                                                    {item.specification.map((data) => (

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
                                                                    {data.sname}
                                                                </h5>
                                                            </div>
                                                        </div>

                                                    ))}



                                                    <div className="featured-item-btn">
                                                        <button  onClick={() => handleCart(item._id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" className="main-btn-three">
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

                                ))

                            )}

                            


                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <div className="traditional-btn">
                                    <Link to="/menu" className="main-btn-four">
                                        See More
                                    </Link>
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