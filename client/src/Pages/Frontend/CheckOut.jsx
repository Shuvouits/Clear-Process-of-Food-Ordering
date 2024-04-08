import React, { useEffect, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import Resturent from '../../components/Frontend/Resturent'
import { useSelector } from 'react-redux';

function CheckOut() {

    const [address, setAddress] = useState(false)
    const { customer } = useSelector((state) => ({ ...state }))

    const handleAddress = () => {
        setAddress(!address)

    }

    //category Data fetch

    const [addressData, setAddressData] = useState([])

    const allAddressData = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-address/${customer.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
            });


            const data = await res.json();
            setAddressData(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allAddressData();
    }, []);


    return (
        <main>
            <InnerBanner />

            <section className="shopping-cart-two shopping-cart-address ">
                <div className="container">
                    <form action="https://reservq.minionionbd.com/process/order" method="POST">
                        <input
                            type="hidden"
                            name="_token"
                            defaultValue="fWyjlQbNEZ8pIcUaJ0fNt4MgZjUHTDlQ7xAmJxDk"
                        />
                        <div className="row">
                            <div className="col-lg-7  ">
                                <div className="row mr-27px">
                                    <div className="col-lg-12">
                                        <div className="shopping-cart-address-btn-main">
                                            <div className="shopping-cart-address-taitel">
                                                <h4>Select Address</h4>

                                            </div>


                                            <button
                                                type="button"
                                                className="add-new-btn "
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                onClick={handleAddress}
                                            >
                                                <span>
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.9974 6.66797V13.3346M13.3307 10.0013H6.66406M9.9974 18.3346C14.5998 18.3346 18.3307 14.6037 18.3307 10.0013C18.3307 5.39893 14.5998 1.66797 9.9974 1.66797C5.39502 1.66797 1.66406 5.39893 1.66406 10.0013C1.66406 14.6037 5.39502 18.3346 9.9974 18.3346Z"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                Add New
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    {addressData.map((data) => (

                                        <div className="col-lg-6">
                                            <div className="shopping-cart-address-one">
                                                <div className="shopping-cart-address-one-item">
                                                    <div className="text">
                                                        <h4>
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                defaultValue={1}
                                                                id="flexCheckDefault"
                                                                name="address_id"
                                                            />
                                                            Address #1
                                                        </h4>
                                                    </div>
                                                    <div className="delet-btn">
                                                        <a
                                                            href="javascript:;"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal1"
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
                                                                        d="M5 8V18C5 20.2091 6.79086 22 9 22H15C17.2091 22 19 20.2091 19 18V8M14 11V17M10 11L10 17M16 5L14.5937 2.8906C14.2228 2.3342 13.5983 2 12.9296 2H11.0704C10.4017 2 9.7772 2.3342 9.40627 2.8906L8 5M16 5H8M16 5H21M8 5H3"
                                                                        stroke="#F01543"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <address>
                                                    First Name &amp; Last Name :<b>David Warner</b>
                                                    <br />
                                                    Email :
                                                    <a href="mailto:user@gmail.com">
                                                        <b>user@gmail.com</b>
                                                    </a>
                                                    <br />
                                                    Phone :
                                                    <a href="tel:123-343-4444">
                                                        <b>123-343-4444</b>
                                                    </a>
                                                    <br />
                                                    Delivery Area :
                                                    <a href="javascript:;">
                                                        <b>Reach 11 Recreation Area</b>
                                                    </a>
                                                    <br />
                                                    Address :
                                                    <a href="javascript:;">
                                                        <b>Mirpur 11, Dhaka</b>
                                                    </a>
                                                </address>
                                            </div>
                                        </div>


                                    ))}



                                </div>
                                <div className="row mt-30px">
                                    <div className="col-lg-12">
                                        <div className="delivery-time">
                                            <div className="delivery-from">
                                                <div className="delivery-text pb-3">
                                                    <h4>Perfect Time for Delivery</h4>
                                                </div>
                                                <div className="delivery-from-item pb-4 d-none">
                                                    <label
                                                        htmlFor="exampleFormControlInput1"
                                                        className="form-label"
                                                    >
                                                        Select Branch
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        required=""
                                                        name="branch"
                                                    >
                                                        <option value={1}>John Doe</option>
                                                    </select>
                                                </div>
                                                <div className="delivery-from-item">
                                                    <label
                                                        htmlFor="exampleFormControlInput1"
                                                        className="form-label"
                                                    >
                                                        Select Day
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        required=""
                                                        name="delevery_day"
                                                    >
                                                        <option value="today" selected="">
                                                            Today
                                                        </option>
                                                        <option value="tomorrow">Tomorrow</option>
                                                    </select>
                                                </div>
                                                <div className="delivery-from-item delivery-from-item-two ">
                                                    <label
                                                        htmlFor="exampleFormControlInput1"
                                                        className="form-label"
                                                    >
                                                        Select Time Schedule
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        required=""
                                                        name="delevery_time"
                                                    >
                                                        <option disabled="">Select</option>
                                                        <option value={1}>12:00 PM - 12:30 PM</option>
                                                        <option value={2}>12:30 PM - 01:30 AM</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 pl-27px">
                                <div className="cart-summary-box">
                                    <div className="cart-summary-box-text">
                                        <h3>Cart Summary</h3>
                                    </div>
                                    <div className="cart-summary-box-top-btn">
                                        <ul>
                                            <li className="active">
                                                <a
                                                    href="https://reservq.minionionbd.com/checkout"
                                                    className="top-btn-two"
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
                                                                d="M14 19V7M14 19H16M14 19H9M14 7C14 4.79086 12.2091 3 10 3H6C3.79086 3 2 4.79086 2 7V15C2 16.8652 3.27667 18.4323 5.00384 18.875M14 7H17.2091C17.7172 7 18.2063 7.1934 18.577 7.54093L21.3679 10.1574C21.7712 10.5355 22 11.0636 22 11.6165V17C22 18.1046 21.1046 19 20 19M20 19C20 20.1046 19.1046 21 18 21C16.8954 21 16 20.1046 16 19M20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19M9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 18.958 5.00129 18.9163 5.00384 18.875M9 19C9 17.8954 8.10457 17 7 17C5.93742 17 5.06838 17.8286 5.00384 18.875"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M10 8L8 8"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M10 12L6 12"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    Delivery
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://reservq.minionionbd.com/pickUp"
                                                    className="top-btn-two"
                                                >
                                                    <span>
                                                        <svg
                                                            width={24}
                                                            height={22}
                                                            viewBox="0 0 24 22"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M14.1176 7.85603C14.1176 9.01319 13.0232 9.95126 11.6732 9.95126C10.3231 9.95126 9.22873 9.01319 9.22873 7.85603C9.22873 6.69886 10.3231 5.76079 11.6732 5.76079C13.0232 5.76079 14.1176 6.69886 14.1176 7.85603Z"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M19.0065 7.85603C19.0065 11.3275 14.1176 16.237 11.6732 16.237C9.22873 16.237 4.33984 11.3275 4.33984 7.85603C4.33984 4.38452 7.62309 1.57031 11.6732 1.57031C15.7233 1.57031 19.0065 4.38452 19.0065 7.85603Z"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M15.3412 14.1406H16.7181C18.169 14.1406 19.545 14.693 20.4738 15.6484L21.7779 16.9898C23.1047 18.3544 21.9725 20.4263 19.9 20.4263H3.44912C1.37662 20.4263 0.244465 18.3544 1.57124 16.9898L2.87532 15.6484C3.80418 14.693 5.18015 14.1406 6.63107 14.1406H8.0079"
                                                                strokeWidth="1.5"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    Pickup
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://reservq.minionionbd.com/inResturent"
                                                    className="top-btn-two"
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
                                                                d="M7.81965 22H16.1804C18.4891 22 20.3607 20.214 20.3607 18.0108V13.133C20.3607 12.4248 20.6555 11.7456 21.1803 11.2448C22.3962 10.0845 22.2381 8.16205 20.8475 7.19691L14.4588 2.763C12.9929 1.74567 11.0071 1.74567 9.54124 2.763L3.15251 7.19692C1.76187 8.16205 1.60381 10.0845 2.81969 11.2448C3.34447 11.7456 3.6393 12.4248 3.6393 13.133V18.0108C3.6393 20.214 5.5109 22 7.81965 22Z"
                                                                strokeWidth="1.5"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M16.3047 15.6052C16.3047 17.8875 14.1524 21.8039 12 21.8039C9.84766 21.8039 7.69531 17.8875 7.69531 15.6052C7.69531 13.3228 9.62259 11.4727 12 11.4727C14.3774 11.4727 16.3047 13.3228 16.3047 15.6052Z"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M13.2914 15.3469C13.2914 16.0601 12.7132 16.6383 12 16.6383C11.2868 16.6383 10.7086 16.0601 10.7086 15.3469C10.7086 14.6337 11.2868 14.0555 12 14.0555C12.7132 14.0555 13.2914 14.6337 13.2914 15.3469Z"
                                                                strokeWidth="1.5"
                                                            />
                                                        </svg>
                                                    </span>
                                                    In Restaurant
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-summary-box-item-top">
                                        <div className="cart-summary-box-item">
                                            <a href="javascript:;">
                                                <div className="cart-summary-box-inner">
                                                    <div className="cart-summary-box-img">
                                                        <img
                                                            src="https://reservq.minionionbd.com/uploads/custom-images/pork-chop-with-apple-chutney-2024-01-25-10-49-09-4461.jpg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="cart-summary-box-text-two">
                                                        <h4>Pork Chop with Apple Chutney</h4>
                                                        <h5>
                                                            <span>Size :</span>
                                                            Small
                                                        </h5>
                                                        <p></p>
                                                        <h5>
                                                            <div className="tabel-text">
                                                                <h6>
                                                                    <strong>$30</strong>
                                                                </h6>
                                                            </div>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="apply-coupon">
                                        <div className="apply-coupon-box">
                                            <div className="shopping-cart-list">
                                                <div className="shopping-cart-list-text">
                                                    <h4>Sub Total</h4>
                                                    <a href="javascript:;">$30</a>
                                                </div>
                                                <input type="hidden" name="total" defaultValue={30} />
                                                <div className="shopping-cart-list-text">
                                                    <h4>Discount</h4>
                                                    <a href="javascript:;">-$0</a>
                                                </div>
                                                <input
                                                    type="hidden"
                                                    name="discount_amount"
                                                    defaultValue={0}
                                                />
                                                <div className="shopping-cart-list-text">
                                                    <h4>Delivery Charge</h4>
                                                    <a href="javascript:;">+$0</a>
                                                </div>
                                                <div className="shopping-cart-list-text">
                                                    <h4>Vat</h4>
                                                    <a href="javascript:;">+$1.5</a>
                                                </div>
                                                <input
                                                    type="hidden"
                                                    name="delevery_charge"
                                                    defaultValue={0}
                                                />
                                                <input type="hidden" name="vat_charge" defaultValue="1.5" />
                                                <input type="hidden" name="type" defaultValue="delivery" />
                                            </div>
                                            <div className="shopping-cart-list shopping-cart-list-btm ">
                                                <div className="shopping-cart-list-text">
                                                    <h4>Grand Total</h4>
                                                    <a href="javascript:;">$31.5</a>
                                                </div>
                                                <input type="hidden" name="grand_total" defaultValue="31.5" />
                                            </div>
                                            <div className="shopping-cart-list-btn">
                                                <button type="submit" className="main-btn-six">
                                                    Process Order
                                                    <span>
                                                        <svg
                                                            width={14}
                                                            height={10}
                                                            viewBox="0 0 14 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9 9L13 5M13 5L9 1M13 5L1 5"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div
                    className="modal fade"
                    id="exampleModal1"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="modal-img-text">
                                    <h3>Are you sure want to delete it?</h3>
                                </div>
                                <div className="modal-btn">
                                    <button type="button" className="no-btn" data-bs-dismiss="modal">
                                        No
                                    </button>
                                    <a href="https://reservq.minionionbd.com/user/remove/address/2">
                                        <button type="button" className="no-btn yes-btn">
                                            Yes, Delete
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="exampleModal2"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="modal-img-text">
                                    <h3>Are you sure want to delete it?</h3>
                                </div>
                                <div className="modal-btn">
                                    <button type="button" className="no-btn" data-bs-dismiss="modal">
                                        No
                                    </button>
                                    <a href="https://reservq.minionionbd.com/user/remove/address/2">
                                        <button type="button" className="no-btn yes-btn">
                                            Yes, Delete
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
                <div
                    className={`modal fade ${address ? 'show' : ''}`}
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{ display: `${address ? 'block' : ''}`, paddingRight: `${address ? 23 : ''}` }}
                >
                    <div className="modal-dialog modal-dialog-five ">
                        <div className="modal-content">
                            <div className="modal-body modal-body-five ">
                                <form
                                    action="https://reservq.minionionbd.com/user/add/new/address"
                                    method="POST"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        defaultValue="fWyjlQbNEZ8pIcUaJ0fNt4MgZjUHTDlQ7xAmJxDk"
                                    />
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="shopping-cart-new-address-top-item">
                                                <div className="shopping-cart-new-address-taitel">
                                                    <h4>Add new Address</h4>
                                                </div>
                                                <div className="shopping-cart-new-address-top-btn">
                                                    <a href='#' onClick={handleAddress}>
                                                        <span>

                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                        </span>
                                                        Close
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="shopping-cart-new-address-from">
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label className="form-label">Delivery Area</label>
                                                        <select
                                                            className="form-select"
                                                            name="area_id"
                                                            id="country"
                                                            aria-label="Default select example"
                                                        >
                                                            <option value="" aria-readonly="true">
                                                                Select Delivery Area
                                                            </option>
                                                            <option value={2}>Turf Soaring School</option>
                                                            <option value={3}>Cave Creek Regional Park</option>
                                                            <option value={4}>Deer Valley Rock Art Center</option>
                                                            <option value={5}>Reach 11 Recreation Area</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label className="form-label">First Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="exampleFormControlInput7"
                                                            name="fname"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="exampleFormControlInput1"
                                                            className="form-label"
                                                        >
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="exampleFormControlInput8"
                                                            name="lname"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="exampleFormControlInput1"
                                                            className="form-label"
                                                        >
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="exampleFormControlInput9"
                                                            name="phone"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="exampleFormControlInput1"
                                                            className="form-label"
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="exampleFormControlInput10"
                                                            name="email"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="exampleFormControlInput1"
                                                            className="form-label"
                                                        >
                                                            Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="exampleFormControlInput11"
                                                            name="address"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-btn">
                                                    <div className="check-btn">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                id="flexCheckDefault"
                                                                name="address_type"
                                                                defaultValue="home"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault"
                                                            >
                                                                Home
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                id="flexCheckDefault1"
                                                                defaultValue="office"
                                                                name="address_type"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="flexCheckDefault1"
                                                            >
                                                                Office
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="check-btn-two">
                                                        <button type="submit" className="main-btn-four">
                                                            Save Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Resturent />
        </main>
    )
}

export default CheckOut