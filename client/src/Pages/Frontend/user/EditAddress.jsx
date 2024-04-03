import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Loader from '../../../components/loader/Loader';

function EditAddress() {
    const { customer } = useSelector((state) => ({ ...state }))
    const [value, setValue] = useState([])
    const { id } = useParams()
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const specificValue = async () => {

        try {
            const res = await fetch(`http://localhost:8000/edit-address/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
            });


            const data = await res.json();
            setValue(data);

        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificValue();
    }, []);


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



    useEffect(() => {
        setFormData({
            fname: value.fname || '',
            lname: value.lname || '',
            phone: value.phone || '',
            email: value.email || '',
            selectedOption: value.selectedOption || '',
            darea: value.darea || '',
            address: value.address || ''

        });
    }, [value]);




    const handleRadio = (event) => {
        const value = event.target.value;

        setFormData({
            ...formData,
            selectedOption: value
        });

    };




    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });

    }

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {


            // Make the API request with updated formData
            const res = await fetch(`http://localhost:8000/update-user-address/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setLoading(false)

            if (res.status === 200) {

                Swal.fire({
                    toast: false,
                    animation: true,
                    text: `Data Updated Successfully `,
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


                navigate('/user/address')


            }



        } catch (error) {

            console.log(error)
            setLoading(false)
        }
    };







    return (

       <>
       
       {loading ? (

<div className='loader'>
            <Loader />
        </div>

) : (

<div className="col-lg-9  col-md-8" style={{ opacity: loading ? '0.1' : '' }}>
<div className="row">
    <div className="col-lg-6 col-md-6">
        <div className="dashboard-item-taitel">
            <h4>Dashboard</h4>
            <p>Edit Address</p>
        </div>
    </div>
    <div className="col-lg-6 col-md-6 text-end">
        <a
            href="https://reservq.minionionbd.com/user/address"
            className="main-btn-four"
        >
            Back
        </a>
    </div>
</div>
<div className="row">
    <div className="col-lg-12">
        <form
            onSubmit={handleSubmit}
        >

            <div className="shopping-cart-new-address-from">
                <div className="shopping-cart-new-address-from-item">
                    <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label">Delivery Area</label>
                        <select
                            className="form-select"
                            name="area_id"
                            id="darea"
                            aria-label="Default select example"
                            onChange={handleChange}
                        >
                            <option value="" aria-readonly="true" disabled>
                                Select Delivery Area
                            </option>

                            {delivery.map((item) => (
                                <option value={item._id} selected={item._id === formData.darea}>{item.name}</option>

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
                            value={formData.fname}
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
                            value={formData.lname}
                        />
                    </div>
                </div>


                <div className="shopping-cart-new-address-from-item">
                    <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label"> Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="shopping-cart-new-address-from-inner">
                        <label className="form-label"> Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="shopping-cart-new-address-from-item">
                    <div className="shopping-cart-new-address-from-inner">
                        <label htmlFor="address" className="form-label">
                            {" "}
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            onChange={handleChange}
                            value={formData.address}
                        />
                    </div>
                </div>
                <div className="shopping-cart-new-address-from-btn">
                    <div className="check-btn">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id='home'
                                checked={formData.selectedOption === 'home'} // Check if selectedOption is 'home'
                                onChange={handleRadio}
                                value='home'
                            />
                            <label className="form-check-label" htmlFor="home">
                                Home
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="office"
                                checked={formData.selectedOption === 'office'} // Check if selectedOption is 'office'
                                onChange={handleRadio}
                                value='office'
                            />
                            <label className="form-check-label" htmlFor="office">
                                Office
                            </label>
                        </div>
                    </div>
                    <div className="check-btn-two">
                        <button type="submit" className="main-btn-four">
                            {" "}
                            Update{" "}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</div>

)}
       
       </>
       



    )
}

export default EditAddress