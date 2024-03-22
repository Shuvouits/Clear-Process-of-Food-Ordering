import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

function EditTime() {

    const { user } = useSelector((state) => ({ ...state }))
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const [time, setTime] = useState({})
    const specificTime = async () => {

        try {
            const res = await fetch(`http://localhost:8000/edit-time/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
            });


            const data = await res.json();
            setTime(data);

        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificTime();
    }, []);

    const [formData, setFormData] = useState({})

    useEffect(() => {
        setFormData({
            slot: time.slot || '',
            status: time.status || ''
        });
    }, [time]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)


        try {

            // Make the API request with updated formData
            const res = await fetch(`http://localhost:8000/update-time/${time._id}`, {
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


                navigate('/admin/timeslot')


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
                                            <h2 className="sherah-breadcrumb__title">Edit Time Slot</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <Link to="/admin/dashboard">
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#">Edit Time Slot</Link>
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
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Slot Name *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                       
                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        id="slot"
                                                                        onChange={handleChange}
                                                                        value={formData.slot}
                                                                    />
                                                                </div>
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

export default EditTime