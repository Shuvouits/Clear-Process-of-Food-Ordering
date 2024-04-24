import React, { useEffect, useRef, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import Cookies from "js-cookie"

function Cart() {
  const [viewCart, setViewCart] = useState(false);
  const { customer } = useSelector((state) => ({ ...state }))

  const { cart } = useSelector((state) => ({ ...state }))
  const dispatch = useDispatch();

  const [viewId, setViewId] = useState('')

  const handleViewClick = (id) => {
    setViewCart(!viewCart)
    setViewId(id)

  }


  let optionalPrice = 0;

  const handleCartInc = async (id) => {

    try {



      const res = await fetch(`https://food-order-rest-api.onrender.com/cart-price-inc/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${customer.token}`,
        }
      });

      const data = await res.json();

      if (res.status === 200) {


        Swal.fire({
          toast: false,
          animation: true,
          text: 'Your cart updated',
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

        dispatch({ type: "STORE", payload: data });
        Cookies.set("cart", JSON.stringify(data));

      }



    } catch (error) {
      console.log(error)

    }
  }

  const handleCartDec = async (id) => {

    try {

      const res = await fetch(`https://food-order-rest-api.onrender.com/cart-price-dec/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${customer.token}`,
        }
      });

      const data = await res.json();

      if (res.status === 200) {


        Swal.fire({
          toast: false,
          animation: true,
          text: 'Your cart updated',
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

        dispatch({ type: "STORE", payload: data });
        Cookies.set("cart", JSON.stringify(data));


      } 


      if (res.status === 400) {


        Swal.fire({
          toast: false,
          animation: true,
          text: 'Your Cart At Least One Item',
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

  //Delete Product

  const handleCartRemove = async (id) => {

    try {

      const result = await Swal.fire({
        toast: false,
        title: 'Delete Cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          container: 'custom-toast-container',
          popup: 'custom-toast-popup',
          title: 'custom-toast-title',
          icon: 'custom-toast-icon',
        },
      });

      if (result.isConfirmed) {
        const res = await fetch(`https://food-order-rest-api.onrender.com/delete-cart/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${customer.token}`
          },
        });

        const data = await res.json();

        if (res.status === 200) {
          Swal.fire({
            toast: false,
            animation: true,
            text: `Cart Deleted Successfully`,
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

          dispatch({ type: "STORE", payload: data });
          Cookies.set("cart", JSON.stringify(data));
        }
      }


    } catch (error) {
      console.log(error)
    }

  }

  //Product Size Managed

  const [productSize, setProductSize] = useState([]);

  const handleProductSize = (e) => {
    const selectedSize = e.target.value;
    setProductSize(prevSize => prevSize === selectedSize ? '' : selectedSize);
  };

  

  //Additional Size managed..

  const [optionalItem, setOptionalItem] = useState([]);

  const handleOptionalChange = async (id) => {

    try {
      const res = await fetch(`https://food-order-rest-api.onrender.com/cart-optional-data/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        },
      });


      const data = await res.json();

      dispatch({ type: "STORE", payload: data });
      Cookies.set("cart", JSON.stringify(data));


    } catch (error) {
      console.log(error)

    }
  };


  //form Submit
  const [formData, setFormData] = useState([])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,

    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      cartId : viewId,
      productSize : productSize
    }


    try {

      const res = await fetch(`https://food-order-rest-api.onrender.com/update-cart`, {
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
          text: `Your Cart is Updated`,
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

        dispatch({ type: "STORE", payload: data });
        Cookies.set("cart", JSON.stringify(data));


        setViewCart(false)




      }



    } catch (error) {

      console.log(error)
    }
  };





  return (
    <main>
      <InnerBanner />
      <section className="shopping-cart" >
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-lg-12">

              <div className="tabel-main">

                <div
                  className={`modal fade ${viewCart ? 'show' : ''}`}
                  id="exampleModal4"
                  tabIndex={-1}
                  style={{ display: `${viewCart ? 'block' : ''}`, paddingRight: `${viewCart ? 23 : ''}` }}
                  aria-modal="true"
                  role="dialog"

                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={handleViewClick}
                      >


                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                      <div className="modal-body">

                        {cart.filter(data => data._id === viewId).map((data) => (
                          <>
                            <div className="featured-item  ">
                              <div className="featured-item-img">
                                <img
                                  src={data.avatar}
                                  className="w-100"
                                  alt="featured-thumb"
                                />
                                <div className="featured-item-img-overlay">
                                  <div className="featured-item-img-over-text">
                                    <div className="right-text"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="modal-body-text">
                              <h3>{data.productName} </h3>
                            </div>


                            <form onSubmit={handleSubmit}>

                              <input type='hidden' id='cartId' onChange={handleChange} value={data._id} />

                              <div className="modal-body-item-box pb-2">
                                <div className="together-box-text">
                                  <h5>Select Size</h5>
                                </div>


                                {data.allProductSize.map((item, index) => (
                                  <div className="together-box-item" key={index}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        id={`size_${index}`}
                                        value={item.id}
                                        checked={productSize != '' ? productSize.includes(item.id) : data.productSizeId === item.id}
                                        onChange={handleProductSize}
                                      // Update productSize state directly
                                      />
                                      <label className="form-check-label" htmlFor={`size_${index}`}>
                                        {item.size}
                                      </label>
                                    </div>
                                    <div className="form-check-btn">
                                      <div className="grid">{item.price} Tk.</div>
                                    </div>
                                  </div>
                                ))}






                                <div className="together-box-text pb-2">
                                  <h5>Select Addon (Optional)</h5>
                                </div>

                                {data.allOptionalData.map((item, index) => (
                                  <div className="together-box-item" key={index}>
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`optional_${index}`}
                                        value={item.id}
                                        checked={data.optData.some(optItem => optItem.id === item.id)}
                                        onChange={() => handleOptionalChange(item.id)}
                                      />
                                      <label className="form-check-label" htmlFor={`optional_${index}`}>
                                        {item.name} ({item.price})Tk
                                      </label>
                                    </div>
                                    <div className="form-check-btn">
                                      {/* Add your quantity buttons here */}
                                    </div>
                                  </div>
                                ))}





                                <input
                                  className="column product-qty"
                                  type="hidden"
                                  name="qty"
                                  id="qtyInput"
                                  defaultValue={1}
                                />
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
                                        ></path>
                                        <path
                                          d="M16.5 10.5L11.5 10.5"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                    Update Cart
                                  </button>
                                </div>
                              </div>

                            </form>






                          </>

                        ))}



                      </div>
                    </div>
                  </div>
                </div>



                <table className="table  ">

                  <thead>
                    <tr className="tabel-main-top">
                      <th>
                        Image
                        <span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.332 2.31567V14.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66602 14.3157V2.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </th>
                      <th>
                        Details
                        <span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.332 2.31567V14.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66602 14.3157V2.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </th>
                      <th>
                        Price
                        <span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.332 2.31567V14.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66602 14.3157V2.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </th>
                      <th>
                        Quantity
                        <span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.332 2.31567V14.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66602 14.3157V2.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </th>
                      <th>
                        Sub Total
                        <span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.332 2.31567V14.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66602 14.3157V2.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </th>
                      <th className="details-control-two">
                        Action
                        <span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.332 2.31567V14.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66602 12.3157L4.66602 14.3157L2.66602 12.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66602 14.3157V2.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.332 4.31567L11.332 2.31567L9.33203 4.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </th>
                    </tr>
                  </thead>


                  <tbody>

                    {Array.isArray(cart) && cart.map((data) => (

                      <tr>
                        <td>
                          <div className="tabel-item">
                            <div className="tabel-img">
                              <img
                                src={data.avatar}
                                alt="img"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="tabel-text">
                            <h5>{data.productName}</h5>
                            <a href="#">
                              <span>Size:</span>
                              {data.productSizeName} (<strong>{data.productSizePrice} Tk.</strong>)
                            </a>
                            <p>
                              <span>Addon:</span>
                              {data.optInfo.map((item) => (
                                <>

                                  {item.name} <span>(${item.price} * 1)</span> |

                                </>

                              ))}

                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="tabel-text">
                            <h6>{data.productSizePrice} Tk</h6>
                          </div>
                        </td>
                        <td>
                          <div className="tabel-text-btn">
                            <div className="grid">
                              <Link
                                to="#"
                                className="btn btn-minus-custom"
                                onClick={() => handleCartDec(data._id)}
                              >
                                <i className="fa-solid fa fa-minus" />
                              </Link>
                              <div className="column product-qty">{data.productQty}</div>

                              <Link
                                to="#"
                                className="btn btn-plus-custom"
                                onClick={() => handleCartInc(data._id)}
                              >
                                <i className="fa-solid fa fa-plus" />
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="tabel-text">




                            <h6>{data.subTotal} Tk.</h6>


                          </div>
                        </td>
                        <td>
                          <div className="tabel-modal-btn">
                            <button
                              type="button"
                              className="view-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal13"
                              onClick={() => handleViewClick(data._id)}
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
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.1303 14.1469C22.2899 12.9268 22.2899 11.0732 21.1303 9.8531C19.1745 7.79533 15.8155 5 12 5C8.18448 5 4.82549 7.79533 2.86971 9.8531C1.7101 11.0732 1.7101 12.9268 2.86971 14.1469C4.82549 16.2047 8.18448 19 12 19C15.8155 19 19.1745 16.2047 21.1303 14.1469ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>{" "}
                              View
                            </button>
                            <Link to="#" onClick={() => handleCartRemove(data.productId)}>
                              <span>
                                <svg
                                  width={17}
                                  height={20}
                                  viewBox="0 0 17 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.834 0.890599C6.20493 0.334202 6.8294 0 7.4981 0H9.35737C10.0261 0 10.6505 0.334202 11.0215 0.8906L11.9277 2.25H15.6777C16.0919 2.25 16.4277 2.58579 16.4277 3C16.4277 3.41421 16.0919 3.75 15.6777 3.75H1.17773C0.763521 3.75 0.427734 3.41421 0.427734 3C0.427734 2.58579 0.763521 2.25 1.17773 2.25H4.92773L5.834 0.890599ZM11.4277 20H5.42773C3.2186 20 1.42773 18.2091 1.42773 16V5H15.4277V16C15.4277 18.2091 13.6369 20 11.4277 20ZM6.42773 8.25C6.84195 8.25 7.17773 8.58579 7.17773 9V16C7.17773 16.4142 6.84195 16.75 6.42773 16.75C6.01352 16.75 5.67773 16.4142 5.67773 16L5.67773 9C5.67773 8.58579 6.01352 8.25 6.42773 8.25ZM10.4277 8.25C10.8419 8.25 11.1777 8.58579 11.1777 9V16C11.1777 16.4142 10.8419 16.75 10.4277 16.75C10.0135 16.75 9.67774 16.4142 9.67773 16V9C9.67773 8.58579 10.0135 8.25 10.4277 8.25Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </td>
                      </tr>

                    ))}






                  </tbody>
                </table>
              </div>
              <div className="tabel-main-btn">
                <Link to={'/checkout'}>

                  <button
                    type="button"
                    className="main-btn-six"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal7"
                  >
                    Process to Checkout
                    <span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 16L18 12M18 12L14 8M18 12L6 12"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>


                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
  )
}

export default Cart