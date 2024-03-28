import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app, storage } from '../../firebase.js'
import Swal from 'sweetalert2'
import Loader from '../../../components/loader/Loader.jsx';

function EditBlogCategory() {

    const { user } = useSelector((state) => ({ ...state }))
    const { id } = useParams()
    const [formData, setFormData] = useState({})

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const [category, setCategory] = useState({})
    const specificCategory = async () => {

        try {
            const res = await fetch(`http://localhost:8000/edit-blog-category/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
            });


            const data = await res.json();
            setCategory(data);

        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificCategory();
    }, []);

    console.log(category)

    useEffect(() => {
        setFormData({
            name: category.name || '',
            slug: category.slug || '',
            status: category.status || ''
        });
    }, [category]);


   /* const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })

    }  */ 

    const handleChange = (e) => {
        const { id, value } = e.target;
        const updatedFormData = {
            ...formData,
            [id]: value,
        };

        // Generate slug if productName field changes
        if (id === 'name') {
            const slugValue = value.toLowerCase().replace(/\s+/g, '-');
            updatedFormData.slug = slugValue;
        }

        setFormData(updatedFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(formData)

        try {


            // Make the API request with updated formData
            const res = await fetch(`http://localhost:8000/update-blog-category/${id}`, {
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
                    text: `Updated New Category `,
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


                navigate('/admin/blog-categories')


            }



        } catch (error) {

            console.log(error)
        }
    };



    return (

        <>

            <div>
                {loading && (

                    <div className='loader'>
                        <Loader />
                    </div>

                )}
            </div>

            <section className="sherah-adashboard sherah-show sherah-close">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sherah-body">
                                {/* Dashboard Inner */}
                                <div className="sherah-dsinner">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="sherah-breadcrumb mg-top-30">
                                                <h2 className="sherah-breadcrumb__title">
                                                    Edit Blog-Category
                                                </h2>
                                                <ul className="sherah-breadcrumb__list">
                                                    <li>
                                                        <a href="https://reservq.minionionbd.com/admin-dashboard">
                                                            Dashboard
                                                        </a>
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
                                                        <h4 className="form-title m-0">
                                                            Update Blog-Category Information
                                                        </h4>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label className="sherah-wc__form-label">
                                                                        Blog Category Name
                                                                    </label>
                                                                    <div className="form-group__input">
                                                                        <input
                                                                            className="sherah-wc__form-input"
                                                                            placeholder="Type here"
                                                                            type="text"
                                                                            id="name"
                                                                            onChange={handleChange}
                                                                            value={formData.name}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label className="sherah-wc__form-label">
                                                                        Slug
                                                                    </label>
                                                                    <div className="form-group__input">
                                                                        <input
                                                                            className="sherah-wc__form-input"
                                                                            placeholder="Type here"
                                                                            type="text"
                                                                            id='slug'
                                                                            onChange={handleChange}
                                                                            value={formData.slug}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
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
                                                </div>
                                            </div>
                                            <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                                                <button
                                                    type="submit"
                                                    className="sherah-btn sherah-btn__primary"
                                                >
                                                    Update Blog-Category
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

        </>


    )
}

export default EditBlogCategory