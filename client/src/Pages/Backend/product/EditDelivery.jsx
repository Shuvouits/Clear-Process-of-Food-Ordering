import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

function EditDelivery() {

    const { user } = useSelector((state) => ({ ...state }))
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const [delivery, setDelivery] = useState({})
    const specificDelivery = async () => {

        try {
            const res = await fetch(`https://food-order-rest-api.onrender.com/edit-delivery/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
            });


            const data = await res.json();
            setDelivery(data);

        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificDelivery();
    }, []);


    const [formData, setFormData] = useState({})

    useEffect(() => {
        setFormData({
            name: delivery.name || '',
            minTime: delivery.minTime || '',
            maxTime: delivery.maxTime || '',
            dfee: delivery.dfee || '',
            status: delivery.status || ''
        });
    }, [delivery]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(formData)

        try {

            // Make the API request with updated formData
            const res = await fetch(`https://food-order-rest-api.onrender.com/update-delivery/${delivery._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setLoading(false)

            if (res.status === 200) {

                Swal.fire({
                    toast: false,
                    animation: true,
                    text: `Data Inserted Successfully`,
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


                navigate('/admin/delivery-area')


            }



        } catch (error) {
            console.log(error)
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
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sherah-breadcrumb mg-top-30">
                                            <h2 className="sherah-breadcrumb__title"> Edit Delivery Area</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <a href="/admin-dashboard">
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li className="active">
                                                    <a href=""> Edit Delivery Area</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sherah-page-inner sherah-border sherah-basic-page sherah-default-bg mg-top-25 p-0">
                                    <form
                                        className="sherah-wc__form-main"
                                        onSubmit={handleSubmit}
                                    >
                                       
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="product-form-box sherah-border mg-top-30">
                                                    <h4 className="form-title m-0">Basic Information</h4>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Area Name *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        
                                                                        type="text"
                                                                        id="name"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={formData.name}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Minimum delivery time (Minutes) *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        
                                                                        type="number"
                                                                        id="minTime"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={formData.minTime}
                                                                        
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Maximum delivery time (Minutes) *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        defaultValue=""
                                                                        type="number"
                                                                        id="maxTime"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={formData.maxTime}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Delivery Fee *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        defaultValue=""
                                                                        type="number"
                                                                        onChange={handleChange}
                                                                        id="dfee"
                                                                        required
                                                                        value={formData.dfee}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Status*
                                                                </label>
                                                                <select
                                                                    className="form-group__input"
                                                                    aria-label="Default select example"
                                                                    id="status"
                                                                    onChange={handleChange}
                                                                >
                                                                     <option value="Active" selected={formData.status === 'Active'} >Active</option>
                                                                        <option value="Inactive" selected={formData.status === 'Inactive'}>Inactive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Product Info */}
                                            </div>
                                        </div>
                                        <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                                            <button
                                                type="submit"
                                                className="sherah-btn sherah-btn__primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default EditDelivery