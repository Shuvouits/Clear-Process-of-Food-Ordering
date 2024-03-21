import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

function EditCoupon() {

    const { user } = useSelector((state) => ({ ...state }))
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const [coupon, setCoupon] = useState({})
    const specificCoupon = async () => {

        try {
            const res = await fetch(`http://localhost:8000/edit-coupon/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
            });


            const data = await res.json();
            setCoupon(data);

        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificCoupon();
    }, []);

    const [formData, setFormData] = useState({})

    useEffect(() => {
        setFormData({
            name: coupon.name || '',
            code: coupon.code || '',
            expireDate: coupon.expireDate || '',
            discount: coupon.discount || '',
            status: coupon.status || ''
        });
    }, [coupon]);

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
            const res = await fetch(`http://localhost:8000/update-coupon/${coupon._id}`, {
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
                    text: `Data Updated Successfully`,
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


                navigate('/admin/coupon')


            }



        } catch (error) {
            console.log(error)
        }
    };

    console.log(formData)


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
                                            <h2 className="sherah-breadcrumb__title">Edit Coupon</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <Link to="/admin/admin-dashboard">
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li className="active">
                                                    <Link href="#">
                                                        Edit Coupon
                                                    </Link>
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
                                                {/* Product Info */}
                                                <div className="product-form-box sherah-border mg-top-30">
                                                    <h4 className="form-title m-0">Basic Information</h4>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Name *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"

                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        id="name"
                                                                        value={formData.name}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Code *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"

                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        id="code"
                                                                        value={formData.code}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Expired Date *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        defaultValue=""
                                                                        placeholder="Type here"
                                                                        type="date"

                                                                        id="expireDate"
                                                                        value={formData.expireDate}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Discount*
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        placeholder="Type here"
                                                                        type='number'
                                                                        id="discount"
                                                                        value={formData.discount}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                                <div className="form-group">
                                                                    <label className="sherah-wc__form-label">
                                                                        Status *
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

export default EditCoupon