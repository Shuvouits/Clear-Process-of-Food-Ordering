import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

function Address() {
    const { customer } = useSelector((state) => ({ ...state }))
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
        setVisible(!visible)
    }

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



    const [address, setAddress] = useState([])
    console.log(address)
    const allAddress = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-address/${customer.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
            });


            const data = await res.json();
            setAddress(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allAddress();
    }, []);




    const [selectedOption, setSelectedOption] = useState(null);
    const handleRadio = (event) => {
        const value = event.target.value;
        setSelectedOption(value === selectedOption ? null : value); // Uncheck if already checked
    };





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

                allAddress();

                setVisible(!visible)


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
                    allAddress();
                }
            }


        } catch (error) {
            console.log(error)
        }


    }


    return (

        <>
            <div className="col-lg-9  col-md-8">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard-item-taitel">
                            <h4>Dashboard</h4>


                            {address.length < 1 ? (
                                <>

                                    <br></br>
                                    <h2>No Address Add Yet</h2>

                                </>

                            ) : (
                                <>
                                    <br></br>
                                    <p>Address</p>
                                </>

                            )}




                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-end">
                        <button
                            type="button"
                            className="main-btn-four"
                            data-bs-toggle="modal"
                            data-bs-target="#addNewAddress"
                            onClick={handleClick}
                        >
                            Add New Address
                        </button>
                    </div>
                </div>
                <div className="row">

                    {address.map((item, index) => (

                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="dashboard-address-item">

                                <div className="shopping-cart-address-one">
                                    <div className="shopping-cart-address-one-item">
                                        <div className="text">
                                            <h4>Address #{index + 1}</h4>
                                        </div>
                                        <div className="delet-btn">
                                            <Link
                                                to={`/user/address/edit/${item._id}`}
                                                className="delet-btn-two"
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
                                                            d="M22 12V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2H12M15.6864 4.02275C15.6864 4.02275 15.6864 5.45305 17.1167 6.88334C18.547 8.31364 19.9773 8.31364 19.9773 8.31364M9.15467 15.9896L12.1583 15.5605C12.5916 15.4986 12.9931 15.2978 13.3025 14.9884L21.4076 6.88334C22.1975 6.09341 22.1975 4.81268 21.4076 4.02275L19.9773 2.59245C19.1873 1.80252 17.9066 1.80252 17.1167 2.59245L9.01164 10.6975C8.70217 11.0069 8.50142 11.4084 8.43952 11.8417L8.01044 14.8453C7.91508 15.5128 8.4872 16.0849 9.15467 15.9896Z"
                                                            stroke="#000929"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <Link onClick={() => handleDelete(item._id)} data-bs-toggle="modal" data-bs-target="#exampleModal1">
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
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <address>
                                        Name : <b>{item.fname} {item.lname}</b>
                                        <br />
                                        Email :
                                        <a href="mailto:user@gmail.com" style={{ marginLeft: '10px' }}>
                                            <b>{item.email}</b>
                                        </a>
                                        <br />
                                        Phone
                                        <a href="tel:123-343-4444" style={{ marginLeft: '10px' }}>
                                            <b>{item.phone}</b>
                                        </a>
                                        <br />
                                        Delivery Area :
                                        <a href="javascript:;" style={{ marginLeft: '10px' }}>
                                            <b>{item.darea.name}</b>
                                        </a>
                                        <br />
                                        Address :
                                        <a href="javascript:;" style={{ marginLeft: '10px' }}>
                                            <b>{item.address}</b>
                                        </a>
                                    </address>
                                </div>
                            </div>
                        </div>

                    ))}






                </div>
            </div>

            <div
                className={`modal ${visible ? 'fade show' : ''} `}
                id="addNewAddress"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-modal="true"
                role="dialog"
                style={{ paddingRight: 17, display: visible ? 'block' : 'none' }}

            >
                <div className="modal-dialog modal-dialog-five ">
                    <div className="modal-content">
                        <div className="modal-body modal-body-five customAddress">
                            <form
                                onSubmit={handleSubmit}
                            >

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="shopping-cart-new-address-top-item">
                                            <div className="shopping-cart-new-address-taitel">
                                                <h4>Add New Address</h4>
                                            </div>
                                            <div className="shopping-cart-new-address-top-btn" onClick={handleClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Link to="#">
                                                    <span style={{ marginRight: '15px' }}>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                    </span>
                                                    Close
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="shopping-cart-new-address-from">
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


        </>




    )
}

export default Address