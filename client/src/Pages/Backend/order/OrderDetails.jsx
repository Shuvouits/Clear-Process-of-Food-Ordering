import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { format } from 'date-fns';
import Swal from 'sweetalert2'

function OrderDetails() {

    const { user } = useSelector((state) => ({ ...state }))
    const { id } = useParams()
    const navigate = useNavigate()

    //Order Data
    const [orderDetails, setOrderDetails] = useState([])
    const specificOrderDetails = async () => {

        try {
            const res = await fetch(`http://localhost:8000/order-details/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
               
            });


            const data = await res.json();
            setOrderDetails(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        specificOrderDetails();
    }, []);

    const formattedCreatedAt = orderDetails.createdAt ? format(new Date(orderDetails.createdAt), 'MMMM-yyyy-dd') : '';

    //Address Data
    const [address, setAddress] = useState([])
    const allAddress = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-customer-address`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
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

    //Address Data
    const [customer, setCustomer] = useState([])
    const allCustomer = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-customer`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
            });


            const data = await res.json();
            setCustomer(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allCustomer();
    }, []);

    const [formData, setFormData] = useState([])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }




    const handleSubmit = async(e) => {
        e.preventDefault()
        
        try {
            const res = await fetch(`http://localhost:8000/order-status/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(formData),
            });


            const data = await res.json();

            Swal.fire({
                toast: false,
                animation: true,
                text: `Order Status Updated`,
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

            if(formData.orderStatus === 'Pending'){
                navigate('/admin/all-order')

            }

            if(formData.orderStatus === 'Deliverd'){
                navigate('/admin/delivery/order')

            }

            if(formData.orderStatus === 'Confirmed'){
                navigate('/admin/pickup/order')

            }


           
            

        } catch (error) {
            return (error)

        }

    }


    return (
        <section className="sherah-adashboard sherah-show">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sherah-body">
                            {/* Dashboard Inner */}
                            <div className="sherah-dsinner">
                                <div className="row mg-top-30">
                                    <div className="col-12 sherah-flex-between">
                                        {/* Sherah Breadcrumb */}
                                        <div className="sherah-breadcrumb">
                                            <h2 className="sherah-breadcrumb__title">Order Detils</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="active">
                                                    <a href="">Order Detils</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Sherah Breadcrumb */}
                                    </div>
                                </div>
                                <div className="sherah-page-inner sherah-border sherah-default-bg mg-top-25">
                                    <div className="sherah-table__head sherah-table__main ">
                                        <h4 className="sherah-order-title">Items from Order #{orderDetails._id}</h4>
                                        <div>
                                            OrderType:
                                            <strong>delivery</strong>
                                        </div>
                                        <div className="sherah-order-right">
                                            <p className="sherah-order-text">
                                                {formattedCreatedAt} / Total {orderDetails.grandTotal}
                                            </p>
                                            <div className="sherah-table-status">
                                                <div className="sherah-table__status sherah-color3 sherah-color3__bg--opactity">
                                                    Unpaid
                                                </div>
                                                <a
                                                    href="https://reservq.minionionbd.com/invoice/21"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <button className="btn btn-success btn-icon icon-left print_btn">
                                                        <i className="fas fa-print"></i>
                                                        Invoice
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12 mg-top-30">
                                            <div className="sherah-table-order">
                                                <table
                                                    id="sherah-table__orderv1"
                                                    className="sherah-table__main sherah-table__main--orderv1"
                                                >
                                                    <thead className="sherah-table__head">
                                                        <tr>
                                                            <th className="sherah-table__column-1 sherah-table__h1">
                                                                Product
                                                            </th>
                                                            <th className="sherah-table__column-2 sherah-table__h2">
                                                                Products name
                                                            </th>
                                                            <th className="sherah-table__column-3 sherah-table__h3"></th>
                                                            <th className="sherah-table__column-3 sherah-table__h3">
                                                                Price
                                                            </th>
                                                            <th className="sherah-table__column-4 sherah-table__h4">
                                                                Total Amount
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="sherah-table__body">

                                                        {orderDetails.cartData && orderDetails.cartData.length > 0 && orderDetails.cartData.map((data, index) => (
                                                            <tr key={index}>
                                                                <td className="sherah-table__column-1 sherah-table__data-1">
                                                                    <div className="">
                                                                        <img
                                                                            className="order_product"
                                                                            src={data.avatar}
                                                                            alt="Product"
                                                                        />
                                                                    </div>
                                                                </td>
                                                                <td className="sherah-table__column-2 sherah-table__data-2">
                                                                    <div className="sherah-table__product-name">
                                                                        <h4 className="sherah-table__product-name--title">
                                                                            {data.productName}
                                                                        </h4>
                                                                        <p className="sherah-table__product-name--text">
                                                                            <span>Size :</span>(<strong>{data.productSizeName}</strong>)
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td></td>
                                                                <td className="sherah-table__column-3 sherah-table__data-3">
                                                                    <div className="sherah-table__product-content">
                                                                        <p className="sherah-table__product-desc">
                                                                            Tk {data.productSizePrice} x {data.productQty}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className="sherah-table__column-4 sherah-table__data-4">
                                                                    <div className="sherah-table__product-content">
                                                                        <p className="sherah-table__product-desc">Tk {data.subTotal}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}




                                                    </tbody>
                                                </table>
                                                <div className="order-totals">
                                                    <ul className="order-totals__list">

                                                        <li>
                                                            <span>Discount</span>
                                                            <span className="order-totals__amount">$0</span>
                                                        </li>
                                                        <li>
                                                            <span>Shipping</span>
                                                            <span className="order-totals__amount">Tk {orderDetails.deliveryFee}</span>
                                                        </li>
                                                        <li>
                                                            <span>Vat Tax</span>
                                                            <span className="order-totals__amount">Tk 10</span>
                                                        </li>
                                                        <li className="order-totals__bottom">
                                                            <span>Total</span>
                                                            <span className="order-totals__amount">{orderDetails.grandTotal} Tk</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="sherah-contact-card sherah-default-bg sherah-border mg-top-30">
                                            <h4 className="sherah-contact-card__title">User Contact</h4>
                                            <div className="sherah-vcard__body">
                                                <div className="sherah-vcard__img">
                                                    <img
                                                        className="order_user_avatar"
                                                        src="https://reservq.minionionbd.com/uploads/custom-images/user-images-2024-01-13-05-07-44-2624.png"
                                                        alt="img"
                                                    />
                                                </div>

                                                {customer.filter(item => item._id === orderDetails.customerId).map((item) => (

                                                    <div className="sherah-vcard__content">
                                                        <h4 className="sherah-vcard__title">{item.name}</h4>
                                                        <ul className="sherah-vcard__contact">
                                                            <li>
                                                                <a href="tel:123-343-4444">
                                                                    <svg
                                                                        className="sherah-color1__fill"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="13.983"
                                                                        height="13.981"
                                                                        viewBox="0 0 13.983 13.981"
                                                                    >
                                                                        <path
                                                                            id="Path_468"
                                                                            data-name="Path 468"
                                                                            d="M243.018,85.567c0,.4,0,.8,0,1.2a1.111,1.111,0,0,1-1.184,1.18,12.682,12.682,0,0,1-11.3-6.853,12.1,12.1,0,0,1-1.5-5.83,1.144,1.144,0,0,1,1.262-1.3q1.16,0,2.32,0a1.129,1.129,0,0,1,1.227,1.2,8.25,8.25,0,0,0,.362,2.282,1.287,1.287,0,0,1-.255,1.32c-.358.423-.668.886-1.009,1.323a.281.281,0,0,0-.028.36,8.757,8.757,0,0,0,3.635,3.627.263.263,0,0,0,.337-.029c.474-.368.958-.724,1.432-1.091a1.118,1.118,0,0,1,1.052-.211,9.653,9.653,0,0,0,2.55.406,1.1,1.1,0,0,1,1.094,1.131C243.026,84.712,243.018,85.139,243.018,85.567Z"
                                                                            transform="translate(-229.038 -73.968)"
                                                                        ></path>
                                                                    </svg>
                                                                    {item.phone}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="mailto:user@gmail.com">
                                                                    <svg
                                                                        className="sherah-color1__fill"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="13.98"
                                                                        height="14.033"
                                                                        viewBox="0 0 13.98 14.033"
                                                                    >
                                                                        <g
                                                                            id="Group_131"
                                                                            data-name="Group 131"
                                                                            transform="translate(-219.859 -62.544)"
                                                                        >
                                                                            <path
                                                                                id="Path_472"
                                                                                data-name="Path 472"
                                                                                d="M271.363,95.475h3.71c.626,0,.7.079.7.716,0,1.447,0,2.894,0,4.342a.459.459,0,0,1-.2.413c-.844.645-1.677,1.3-2.522,1.948a.71.71,0,0,1-.393.137q-1.291.018-2.583,0a.664.664,0,0,1-.371-.122q-1.289-.983-2.558-1.991a.523.523,0,0,1-.172-.359c-.012-1.493-.008-2.986-.007-4.479,0-.486.116-.6.594-.605Zm.637,5.474a3.893,3.893,0,0,0,.7.341,1.257,1.257,0,0,0,1.345-.694,2.636,2.636,0,0,0,.269-1.913,3.02,3.02,0,1,0-3.112,3.8c.349.016.57-.177.522-.467-.044-.264-.23-.339-.476-.359a2.2,2.2,0,0,1-1.7-3.381,2.155,2.155,0,0,1,2.948-.685.478.478,0,0,0-.623.271,1.437,1.437,0,0,0-1.921.8A2.33,2.33,0,0,0,269.8,99.7,1.44,1.44,0,0,0,272,100.949Z"
                                                                                transform="translate(-44.527 -31.12)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_473"
                                                                                data-name="Path 473"
                                                                                d="M243.053,251.784H230.261c.094-.08.151-.133.213-.181q2.254-1.754,4.512-3.5a.749.749,0,0,1,.418-.145c.86-.013,1.721-.01,2.582,0a.571.571,0,0,1,.325.1q2.348,1.812,4.686,3.636a.367.367,0,0,0,.1.038Z"
                                                                                transform="translate(-9.83 -175.207)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_474"
                                                                                data-name="Path 474"
                                                                                d="M219.859,174.433l4.671,3.633-4.671,3.633Z"
                                                                                transform="translate(0 -105.737)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_475"
                                                                                data-name="Path 475"
                                                                                d="M389.225,178.113l4.667-3.63v7.26Z"
                                                                                transform="translate(-160.053 -105.784)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_476"
                                                                                data-name="Path 476"
                                                                                d="M325.243,63.516h-2.686c.416-.344.766-.661,1.148-.931a.487.487,0,0,1,.446.032C324.512,62.877,324.843,63.18,325.243,63.516Z"
                                                                                transform="translate(-97.051 0)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_477"
                                                                                data-name="Path 477"
                                                                                d="M442.145,142.025v-2.23l1.378,1.157Z"
                                                                                transform="translate(-210.063 -73.003)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_478"
                                                                                data-name="Path 478"
                                                                                d="M228.2,139.874v2.218l-1.369-1.064Z"
                                                                                transform="translate(-6.59 -73.078)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_479"
                                                                                data-name="Path 479"
                                                                                d="M334.105,152.656a3.655,3.655,0,0,1-.262.637.469.469,0,0,1-.756.075,1.118,1.118,0,0,1-.1-1.389.55.55,0,0,1,.984.143A4.005,4.005,0,0,1,334.105,152.656Z"
                                                                                transform="translate(-106.725 -84.286)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_480"
                                                                                data-name="Path 480"
                                                                                d="M370.08,135.548a1.9,1.9,0,0,1,.681,2.51.7.7,0,0,1-.225.232c-.245.152-.407.061-.408-.227,0-.649.006-1.3,0-1.947C370.128,135.922,370.1,135.727,370.08,135.548Z"
                                                                                transform="translate(-141.961 -68.99)"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                    {item.email}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <svg
                                                                        className="sherah-color1__fill"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="10.757"
                                                                        height="14.39"
                                                                        viewBox="0 0 10.757 14.39"
                                                                    >
                                                                        <path
                                                                            id="Path_1021"
                                                                            data-name="Path 1021"
                                                                            d="M-348.264,473.154a5.264,5.264,0,0,1,5.147,6.731,14.587,14.587,0,0,1-2.221,4.257c-.77,1.062-1.616,2.073-2.443,3.1-.334.413-.615.4-.968,0a26.151,26.151,0,0,1-4.067-5.839,7.8,7.8,0,0,1-.8-2.588,5.171,5.171,0,0,1,3.35-5.249,6.189,6.189,0,0,1,.942-.271C-348.977,473.221-348.619,473.2-348.264,473.154Zm0,7.83a2.662,2.662,0,0,0,2.714-2.618,2.678,2.678,0,0,0-2.7-2.605,2.677,2.677,0,0,0-2.713,2.625A2.662,2.662,0,0,0-348.268,480.984Z"
                                                                            transform="translate(353.642 -473.154)"
                                                                        />
                                                                    </svg>
                                                                    {item.address}
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>

                                                ))}


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="sherah-contact-card sherah-default-bg  sherah-border mg-top-30">
                                            <h4 className="sherah-contact-card__title">
                                                Shipping Address
                                            </h4>

                                            <div className="sherah-vcard__body">

                                                {address.filter(item => item.customer === orderDetails.customerId).map((item) => (

                                                    <div className="sherah-vcard__content">
                                                        <h4 className="sherah-vcard__title">{item.fname} {item.lname}</h4>
                                                        <ul className="sherah-vcard__contact">
                                                            <li>
                                                                <a href="tel:123-343-4444">
                                                                    <svg
                                                                        className="sherah-color1__fill"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="13.983"
                                                                        height="13.981"
                                                                        viewBox="0 0 13.983 13.981"
                                                                    >
                                                                        <path
                                                                            id="Path_468"
                                                                            data-name="Path 468"
                                                                            d="M243.018,85.567c0,.4,0,.8,0,1.2a1.111,1.111,0,0,1-1.184,1.18,12.682,12.682,0,0,1-11.3-6.853,12.1,12.1,0,0,1-1.5-5.83,1.144,1.144,0,0,1,1.262-1.3q1.16,0,2.32,0a1.129,1.129,0,0,1,1.227,1.2,8.25,8.25,0,0,0,.362,2.282,1.287,1.287,0,0,1-.255,1.32c-.358.423-.668.886-1.009,1.323a.281.281,0,0,0-.028.36,8.757,8.757,0,0,0,3.635,3.627.263.263,0,0,0,.337-.029c.474-.368.958-.724,1.432-1.091a1.118,1.118,0,0,1,1.052-.211,9.653,9.653,0,0,0,2.55.406,1.1,1.1,0,0,1,1.094,1.131C243.026,84.712,243.018,85.139,243.018,85.567Z"
                                                                            transform="translate(-229.038 -73.968)"
                                                                        ></path>
                                                                    </svg>
                                                                    {item.phone}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="mailto:user@gmail.com">
                                                                    <svg
                                                                        className="sherah-color1__fill"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="13.98"
                                                                        height="14.033"
                                                                        viewBox="0 0 13.98 14.033"
                                                                    >
                                                                        <g
                                                                            id="Group_131"
                                                                            data-name="Group 131"
                                                                            transform="translate(-219.859 -62.544)"
                                                                        >
                                                                            <path
                                                                                id="Path_472"
                                                                                data-name="Path 472"
                                                                                d="M271.363,95.475h3.71c.626,0,.7.079.7.716,0,1.447,0,2.894,0,4.342a.459.459,0,0,1-.2.413c-.844.645-1.677,1.3-2.522,1.948a.71.71,0,0,1-.393.137q-1.291.018-2.583,0a.664.664,0,0,1-.371-.122q-1.289-.983-2.558-1.991a.523.523,0,0,1-.172-.359c-.012-1.493-.008-2.986-.007-4.479,0-.486.116-.6.594-.605Zm.637,5.474a3.893,3.893,0,0,0,.7.341,1.257,1.257,0,0,0,1.345-.694,2.636,2.636,0,0,0,.269-1.913,3.02,3.02,0,1,0-3.112,3.8c.349.016.57-.177.522-.467-.044-.264-.23-.339-.476-.359a2.2,2.2,0,0,1-1.7-3.381,2.155,2.155,0,0,1,2.948-.685.478.478,0,0,0-.623.271,1.437,1.437,0,0,0-1.921.8A2.33,2.33,0,0,0,269.8,99.7,1.44,1.44,0,0,0,272,100.949Z"
                                                                                transform="translate(-44.527 -31.12)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_473"
                                                                                data-name="Path 473"
                                                                                d="M243.053,251.784H230.261c.094-.08.151-.133.213-.181q2.254-1.754,4.512-3.5a.749.749,0,0,1,.418-.145c.86-.013,1.721-.01,2.582,0a.571.571,0,0,1,.325.1q2.348,1.812,4.686,3.636a.367.367,0,0,0,.1.038Z"
                                                                                transform="translate(-9.83 -175.207)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_474"
                                                                                data-name="Path 474"
                                                                                d="M219.859,174.433l4.671,3.633-4.671,3.633Z"
                                                                                transform="translate(0 -105.737)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_475"
                                                                                data-name="Path 475"
                                                                                d="M389.225,178.113l4.667-3.63v7.26Z"
                                                                                transform="translate(-160.053 -105.784)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_476"
                                                                                data-name="Path 476"
                                                                                d="M325.243,63.516h-2.686c.416-.344.766-.661,1.148-.931a.487.487,0,0,1,.446.032C324.512,62.877,324.843,63.18,325.243,63.516Z"
                                                                                transform="translate(-97.051 0)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_477"
                                                                                data-name="Path 477"
                                                                                d="M442.145,142.025v-2.23l1.378,1.157Z"
                                                                                transform="translate(-210.063 -73.003)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_478"
                                                                                data-name="Path 478"
                                                                                d="M228.2,139.874v2.218l-1.369-1.064Z"
                                                                                transform="translate(-6.59 -73.078)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_479"
                                                                                data-name="Path 479"
                                                                                d="M334.105,152.656a3.655,3.655,0,0,1-.262.637.469.469,0,0,1-.756.075,1.118,1.118,0,0,1-.1-1.389.55.55,0,0,1,.984.143A4.005,4.005,0,0,1,334.105,152.656Z"
                                                                                transform="translate(-106.725 -84.286)"
                                                                            ></path>
                                                                            <path
                                                                                id="Path_480"
                                                                                data-name="Path 480"
                                                                                d="M370.08,135.548a1.9,1.9,0,0,1,.681,2.51.7.7,0,0,1-.225.232c-.245.152-.407.061-.408-.227,0-.649.006-1.3,0-1.947C370.128,135.922,370.1,135.727,370.08,135.548Z"
                                                                                transform="translate(-141.961 -68.99)"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                    {item.email}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <svg
                                                                        className="sherah-color1__fill"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="10.757"
                                                                        height="14.39"
                                                                        viewBox="0 0 10.757 14.39"
                                                                    >
                                                                        <path
                                                                            id="Path_1021"
                                                                            data-name="Path 1021"
                                                                            d="M-348.264,473.154a5.264,5.264,0,0,1,5.147,6.731,14.587,14.587,0,0,1-2.221,4.257c-.77,1.062-1.616,2.073-2.443,3.1-.334.413-.615.4-.968,0a26.151,26.151,0,0,1-4.067-5.839,7.8,7.8,0,0,1-.8-2.588,5.171,5.171,0,0,1,3.35-5.249,6.189,6.189,0,0,1,.942-.271C-348.977,473.221-348.619,473.2-348.264,473.154Zm0,7.83a2.662,2.662,0,0,0,2.714-2.618,2.678,2.678,0,0,0-2.7-2.605,2.677,2.677,0,0,0-2.713,2.625A2.662,2.662,0,0,0-348.268,480.984Z"
                                                                            transform="translate(353.642 -473.154)"
                                                                        />
                                                                    </svg>
                                                                    {item.address}
                                                                </a>
                                                            </li>




                                                        </ul>
                                                    </div>

                                                ))}



                                            </div>






                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="sherah-default-bg  sherah-border mg-top-30">
                                            <div className="sherah-vcard__body">
                                                <div className="sherah-vcard__content p-3">
                                                    <h4 className="sherah-vcard__title">
                                                        Order Delivery Day : today
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className=" sherah-default-bg  sherah-border mg-top-30">
                                            <div className="sherah-vcard__body">
                                                <div className="sherah-vcard__content p-3">
                                                    <h4 className="sherah-vcard__title">
                                                        Order Delivery Time : 12:00 PM - 12:30 PM
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />


                                <form onSubmit={handleSubmit}

                                >

                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-12">
                                            <div className="form-group">
                                                <label className="sherah-wc__form-label">
                                                    Payment Status
                                                </label>
                                                <select
                                                    className="form-group__input"
                                                    aria-label="Default select example"
                                                    name="payment_status"
                                                >
                                                    <option readOnly="">Payment Status</option>
                                                    <option selected="" value="pending">
                                                        Pending
                                                    </option>
                                                    <option value="success" selected>Success</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-12">
                                            <div className="form-group">
                                                <label className="sherah-wc__form-label">
                                                    Order Status
                                                </label>
                                                <select
                                                    className="form-group__input"
                                                    aria-label="Default select example"
                                                    id="orderStatus"
                                                    onChange={handleChange}
                                                >
                                                    <option readOnly="">Order Status</option>
                                                    <option value="Pending"  selected={orderDetails.orderStatus === 'Pending' ? 'selected' : ''} >
                                                        Pending
                                                    </option>
                                                    <option value="Confirmed"  selected={orderDetails.orderStatus === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                                                    <option value="Deliverd" selected={orderDetails.orderStatus === 'Deliverd' ? 'selected' : ''}>Deliverd</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-12 pt-3">
                                            <button
                                                type="submit"
                                                className="sherah-btn sherah-btn__primary"
                                            >
                                                Update Order
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                            </div>
                            {/* End Dashboard Inner */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OrderDetails