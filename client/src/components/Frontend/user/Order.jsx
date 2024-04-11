import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Swal from 'sweetalert2'

function Order() {

    const { customer } = useSelector((state) => ({ ...state }))

    //Category Data
    const [order, setOrder] = useState([])

    const allOrder = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-order`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
            });


            const data = await res.json();
            setOrder(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allOrder();
    }, []);

    console.log(order)




    return (
        <>
            <div className="col-lg-9  col-md-8">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="dashboard-item-taitel">
                            <h4>Dashboard </h4>
                            <p>My Orders</p>
                        </div>
                    </div>
                </div>
                <div className="order-reorderingmain-box">
                    <div className="order-reorderingmain-box-item">
                        <div className="text">
                            <h4>My Orders</h4>
                        </div>
                    </div>
                    <div className="order-reorderingmain-box-tabel">
                        <table className=" table w-100 ">
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {order.map((item, index) => (

                                    <tr>
                                        <td>
                                            <Link to="#">
                                                {" "}
                                                #{item._id}
                                            </Link>
                                        </td>
                                        <td>{format(item.createdAt, 'MMMM-yyyy-dd')}</td>
                                        <td>{item.grandTotal} Tk</td>
                                        <td>
                                            <div className="delete-action ">
                                                <a href="javascript:;" className="cancel">
                                                    {item.orderStatus}
                                                </a>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="delete-action ">
                                                <a href="#">
                                                    <button className="view-btn">
                                                        <span>
                                                            <svg
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M17.6084 11.7904C18.5748 10.7737 18.5748 9.22894 17.6084 8.21222C15.9786 6.49741 13.1794 4.16797 9.99984 4.16797C6.82024 4.16797 4.02108 6.49741 2.39126 8.21222C1.42492 9.22894 1.42492 10.7737 2.39126 11.7904C4.02108 13.5052 6.82024 15.8346 9.99984 15.8346C13.1794 15.8346 15.9786 13.5052 17.6084 11.7904ZM9.99984 12.5013C11.3805 12.5013 12.4998 11.382 12.4998 10.0013C12.4998 8.62059 11.3805 7.5013 9.99984 7.5013C8.61913 7.5013 7.49984 8.62059 7.49984 10.0013C7.49984 11.382 8.61913 12.5013 9.99984 12.5013Z"
                                                                    fill="white"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>

                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Order