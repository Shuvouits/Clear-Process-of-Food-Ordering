import React, { useEffect, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import Resturent from '../../components/Frontend/Resturent'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function CheckOut() {

    const [address, setAddress] = useState(false)
    const [visible, setVisible] = useState(false)
    console.log(address)
    const { customer } = useSelector((state) => ({ ...state }))

    const { cart } = useSelector((state) => ({ ...state }))


    const [delivery, setDelivery] = useState([])
    const allDelivery = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-delivery`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = await res.json();
            setDelivery(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allDelivery();
    }, []);


    const [selectedOption, setSelectedOption] = useState(null);
    const handleRadio = (event) => {
        const value = event.target.value;
        setSelectedOption(value === selectedOption ? null : value); // Uncheck if already checked
    };

    const handleAddress = () => {
        setAddress(!address)

    }

    //address Data fetch

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


    const [formData, setFormData] = useState({})

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
            selectedOption,
            customer: customer.id
        }


        try {

            // Make the API request with updated formData
            const res = await fetch('http://localhost:8000/add-address', {
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
                    text: `New Record Inserted Successfully`,
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

                allAddressData();

                setAddress(false)


            }


        } catch (error) {
            console.log(error)
        }
    };


    //Delete Data

    const handleDelete = async (id) => {

        try {

            const result = await Swal.fire({
                toast: false,
                title: 'Delete Address?',
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
                const res = await fetch(`http://localhost:8000/delete-address/${id}`, {
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
                        text: `Address Deleted Successfully`,
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
                    allAddressData();
                }
            }


        } catch (error) {
            console.log(error)
        }


    }


    let totalSubTotal = 0;
    let deliveryFee = 0;


    cart.forEach(item => {
        totalSubTotal += item.subTotal;

    });

    addressData.forEach(item => {
        deliveryFee = item.darea.dfee

    })

    const grandTotal = parseInt(deliveryFee) + parseInt(totalSubTotal) + 10;


    const handleCheck = async () => {

        const checkFormData = {
            ...formData,
            cart: cart,
            customer: customer,
            grandTotal: grandTotal,
            subTotal: totalSubTotal,
            deliveryFee: deliveryFee
        }

        if(checkFormData.address){

            try {

                // Make the API request with updated formData
                const res = await fetch('http://localhost:8000/process-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${customer.token}`,
                    },
                    body: JSON.stringify(checkFormData),
                });
    
                const data = await res.json();
    
                if(data.session.url){
                    window.location.href = data.session.url
                }
    
                dispatch({ type: "STORE", payload: null });
                Cookies.set("cart", null);
    
    
    
    
            } catch (error) {
                console.log(error)
            }
            

        }else{
            alert("Please Fill Out The Address Data")
        }

       

       

       

       




    }




    return (
        <main>
            <InnerBanner />

            <section className="shopping-cart-two shopping-cart-address ">
                <div className="container">

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

                                {addressData.map((data, index) => (

                                    <div className="col-lg-6">
                                        <div className="shopping-cart-address-one">
                                            <div className="shopping-cart-address-one-item">
                                                <div className="text">
                                                    <h4>
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id="address"
                                                            value={data._id}
                                                            onChange={handleChange}
                                                            required

                                                        />
                                                        Address #{index + 1}
                                                    </h4>
                                                </div>
                                                <div className="delet-btn">
                                                    <Link
                                                        href="javascript:;"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal1"
                                                        onClick={() => handleDelete(data._id)}
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
                                                    </Link>


                                                </div>
                                            </div>
                                            <address>
                                                First Name &amp; Last Name :<b>{data.fname} {data.lname}</b>
                                                <br />
                                                Email :
                                                <a href="mailto:user@gmail.com">
                                                    <b>{data.email}</b>
                                                </a>
                                                <br />
                                                Phone :
                                                <a href="tel:123-343-4444">
                                                    <b>{data.phone}</b>
                                                </a>
                                                <br />
                                                Delivery Area :
                                                <a href="javascript:;">
                                                    <b>{data.darea.name}</b>
                                                </a>
                                                <br />
                                                Address :
                                                <a href="javascript:;">
                                                    <b>{data.address}</b>
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
                                                    htmlFor="selectedDay"
                                                    className="form-label"
                                                >
                                                    Select Day
                                                </label>
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    required=""
                                                    id='selectedDay'
                                                    onChange={handleChange}
                                                >
                                                    <option value="today" selected>
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

                                <div className="cart-summary-box-item-top">

                                    {cart.map((item, index) => (

                                        <div className="cart-summary-box-item">
                                            <a href="javascript:;">
                                                <div className="cart-summary-box-inner">
                                                    <div className="cart-summary-box-img">
                                                        <img
                                                            src={item.avatar}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="cart-summary-box-text-two">
                                                        <h4>{item.productName}</h4>
                                                        <h5>
                                                            <span>Size :</span>
                                                            {item.productSizeName}
                                                        </h5>
                                                        <p></p>
                                                        <h5>
                                                            <div className="tabel-text">
                                                                <h6>
                                                                    <strong>{item.productSizePrice} Tk.</strong>
                                                                </h6>
                                                            </div>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    ))}

                                </div>

                                <div className="apply-coupon">
                                    <div className="apply-coupon-box">
                                        <div className="shopping-cart-list">
                                            <div className="shopping-cart-list-text">
                                                <h4>Sub Total</h4>
                                                {totalSubTotal} Tk

                                            </div>


                                            <div className="shopping-cart-list-text">
                                                <h4>Delivery Charge</h4>
                                                <a href="javascript:;">+ {deliveryFee} Tk</a>
                                            </div>
                                            <div className="shopping-cart-list-text">
                                                <h4>Vat</h4>
                                                <a href="javascript:;">+ 10 Tk</a>
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
                                                <a href="javascript:;">{grandTotal} Tk.</a>
                                            </div>
                                            <input type="hidden" name="grand_total" defaultValue="31.5" />
                                        </div>
                                        <div className="shopping-cart-list-btn">
                                            <button onClick={handleCheck} className="main-btn-six">
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
                        <div className="modal-content" style={{ border: "1px solid gainsboro" }}>
                            <div className="modal-body modal-body-five ">
                                <form onSubmit={handleSubmit}>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="shopping-cart-new-address-top-item" >
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

                                            <div className="shopping-cart-new-address-from" >
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label htmlFor="darea" className="form-label">Delivery Area</label>
                                                        <select
                                                            className="form-select"
                                                            name="area_id"
                                                            id="darea"
                                                            aria-label="Default select example"
                                                            onChange={handleChange}
                                                        >
                                                            <option value="" aria-readonly="true">
                                                                Select Delivery Area
                                                            </option>
                                                            {delivery.map((item) => (
                                                                <option value={item._id}>{item.name}</option>

                                                            ))}


                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label htmlFor="fname" className="form-label">First Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id='fname'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="lname"
                                                            className="form-label"
                                                        >
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="lname"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="phone"
                                                            className="form-label"
                                                        >
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="phone"
                                                            onChange={handleChange}

                                                        />
                                                    </div>
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="email"
                                                            className="form-label"
                                                        >
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-item">
                                                    <div className="shopping-cart-new-address-from-inner">
                                                        <label
                                                            htmlFor="address"
                                                            className="form-label"
                                                        >
                                                            Address
                                                        </label>
                                                        <textarea

                                                            className="form-control"
                                                            id="address"
                                                            cols={30}
                                                            rows={10}
                                                            defaultValue={""}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="shopping-cart-new-address-from-btn">
                                                    <div className="check-btn">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                id="home"

                                                                checked={selectedOption === 'home'}
                                                                onChange={handleRadio}

                                                                value={'home'}

                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="home"
                                                            >
                                                                Home
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                id="office"
                                                                checked={selectedOption === 'office'}
                                                                onChange={handleRadio}
                                                                value={'office'}

                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="office"
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