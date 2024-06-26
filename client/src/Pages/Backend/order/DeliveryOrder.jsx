import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { format } from 'date-fns';
import Swal from 'sweetalert2'


function DeliveryOrder() {

    const { user } = useSelector((state) => ({ ...state }))

    //Order Data
    const [order, setOrder] = useState([])
    const allOrder = async () => {

        try {
            const res = await fetch(`https://food-order-rest-api.onrender.com/all-order`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
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

    
     //Delete Data

     const handleClick = async (id) => {


        try {

            const result = await Swal.fire({
                toast: false,
                title: 'Delete Order?',
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
                const res = await fetch(`https://food-order-rest-api.onrender.com/delete-order/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                });

                const data = await res.json();


                if (res.status === 200) {
                    allOrder();

                    Swal.fire({
                        toast: false,
                        animation: true,
                        text: `Order Deleted Successfully`,
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
                    
                } 


            }


        } catch (error) {
            console.log(error)
        }


    }






    const columns = [

        {
            name : 'ID',
            selector : row => row.id,
            sortable : true
        }, 

        {
            name: 'Order Id',
            selector: row => row.order_id
        },

        {
            name: 'Type',
            selector: row => row.type
        },

        {
            name: 'Customer Name',
            selector: row => row.customer_name
        },

        {
            name: 'Date',
            selector: row => row.date
        },

        {
            name: 'Payment Status',
            selector: row => (<div className='payment-status' >{row.payment_status}</div>)
        },

        {
            name: 'Payment Method',
            selector: row => row.payment_method
        },

        {
            name: 'Total',
            selector: row => row.total
        },

        {
            name: 'Order Status',
            selector: row => (<div className='order_status'>{row.order_status}</div>)
        },

        {
            name: 'Action',
            selector: row => (
                <div class="sherah-table__status__group">
                    <Link to={`/admin/order/details/${row.order_id}`} class="sherah-table__action sherah-color2 sherah-color3__bg--opactity bg-view">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6084 11.7904C18.5748 10.7737 18.5748 9.22894 17.6084 8.21222C15.9786 6.49741 13.1794 4.16797 9.99984 4.16797C6.82024 4.16797 4.02108 6.49741 2.39126 8.21222C1.42492 9.22894 1.42492 10.7737 2.39126 11.7904C4.02108 13.5052 6.82024 15.8346 9.99984 15.8346C13.1794 15.8346 15.9786 13.5052 17.6084 11.7904ZM9.99984 12.5013C11.3805 12.5013 12.4998 11.382 12.4998 10.0013C12.4998 8.62059 11.3805 7.5013 9.99984 7.5013C8.61913 7.5013 7.49984 8.62059 7.49984 10.0013C7.49984 11.382 8.61913 12.5013 9.99984 12.5013Z"
                                fill="white" />
                        </svg>
                    </Link>
                    <Link to="#" onClick={() => handleClick(row.order_id)}
                        class="sherah-table__action sherah-color2 sherah-color2__bg--offset blog_comment_delete">
                        <svg class="sherah-color2__fill" xmlns="http://www.w3.org/2000/svg" width="16.247"
                            height="18.252" viewBox="0 0 16.247 18.252">
                            <g id="Icon" transform="translate(-160.007 -18.718)">
                                <path id="Path_484" data-name="Path 484" d="M185.344,88.136c0,1.393,0,2.786,0,4.179-.006,1.909-1.523,3.244-3.694,3.248q-3.623.007-7.246,0c-2.15,0-3.682-1.338-3.687-3.216q-.01-4.349,0-8.7a.828.828,0,0,1,.822-.926.871.871,0,0,1,1,.737c.016.162.006.326.006.489q0,4.161,0,8.321c0,1.061.711,1.689,1.912,1.69q3.58,0,7.161,0c1.2,0,1.906-.631,1.906-1.695q0-4.311,0-8.622a.841.841,0,0,1,.708-.907.871.871,0,0,1,1.113.844C185.349,85.1,185.343,86.618,185.344,88.136Z"
                                    transform="translate(-9.898 -58.597)" />
                                <path id="Path_485" data-name="Path 485" d="M164.512,21.131c0-.517,0-.98,0-1.443.006-.675.327-.966,1.08-.967q2.537,0,5.074,0c.755,0,1.074.291,1.082.966.005.439.005.878.009,1.317a.615.615,0,0,0,.047.126h.428c1,0,2,0,3,0,.621,0,1.013.313,1.019.788s-.4.812-1.04.813q-7.083,0-14.165,0c-.635,0-1.046-.327-1.041-.811s.4-.786,1.018-.789C162.165,21.127,163.3,21.131,164.512,21.131Zm1.839-.021H169.9v-.764h-3.551Z"
                                    transform="translate(0 0)" />
                                <path id="Path_486" data-name="Path 486" d="M225.582,107.622c0,.9,0,1.806,0,2.709a.806.806,0,0,1-.787.908.818.818,0,0,1-.814-.924q0-2.69,0-5.38a.82.82,0,0,1,.81-.927.805.805,0,0,1,.79.9C225.585,105.816,225.582,106.719,225.582,107.622Z"
                                    transform="translate(-58.483 -78.508)" />
                                <path id="Path_487" data-name="Path 487" d="M266.724,107.63c0-.9,0-1.806,0-2.709a.806.806,0,0,1,.782-.912.818.818,0,0,1,.818.919q0,2.69,0,5.38a.822.822,0,0,1-.806.931c-.488,0-.792-.356-.794-.938C266.721,109.411,266.724,108.521,266.724,107.63Z"
                                    transform="translate(-97.561 -78.509)" />
                            </g>
                        </svg>
                    </Link>
                </div>
            )
        },






    ]

    /*const data = [
        {
            order_id: '#21',
            type: 'delivery',
            customer_name: 'Shuvo Bhowmik',
            date: 'jan 27,2024 12:09PM',
            payment_status: 'Pending',
            payment_method: 'Bank Payment',
            total: '$515',
            order_status: 'Pending',
            action: 'action'

        }
    ]  */

    const [record, setRecord] = useState([])

    useEffect(() => {
        const data = order.filter(item=> item.orderStatus === 'Deliverd').map((item, index) => ({
            id: index + 1,
            order_id: item._id,
            type: 'delivery',
            customer_name: item.customerId.name,
            date: format(item.createdAt, 'MMM-dd-yyyy'),
            payment_status: 'Stripe',
            payment_method: 'Bank Payment',
            total: `${item.grandTotal} Tk`, 
            order_status: item.orderStatus,
            
        
        }));
        setRecord(data);
    }, [order]);



    const handleFilter = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        const newData = order.filter(row => {
            return row.name.toLowerCase().includes(searchQuery);
        });

        // Update the record state if search query is present, else reset it to display all data
        if (searchQuery) {
            setRecord(newData);
        } else {
            setRecord(order);
        }
    };

    


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
                                            <h2 className="sherah-breadcrumb__title">Delivery Order</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="active">
                                                    <a href="">Order List</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="sherah-table sherah-page-inner sherah-border sherah-default-bg mg-top-25">
                                    <div className='form-group col-md-3 offset-md-9'>
                                        <input type='text' placeholder='search..' className='form-control' onChange={handleFilter} />
                                    </div>
                                    <div className="row mg-top-40"></div>

                                    <DataTable columns={columns} data={record} pagination >

                                    </DataTable>
                                </div>
                            </div>
                            {/* End Dashboard Inner */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DeliveryOrder