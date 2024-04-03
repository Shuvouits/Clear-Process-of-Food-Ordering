import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import Swal from 'sweetalert2'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app, storage } from '../../../Pages/firebase.js'

function EditProfile() {

    const { customer } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [file, setFile] = useState(undefined)
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false)
    const [imagePreview, setImagePreview] = useState(null);
    const [imageLoading, setImageLoading] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleFileUpload = (file) => {
        setImageLoading(true)
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFilePerc(Math.round(progress));
        }, (error) => {
            setFileUploadError(true);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFormData({ ...formData, avatar: downloadURL });
                setImagePreview(downloadURL);
                setImageLoading(false)
            });
        });
    };

    useEffect(() => {

        if (file) {
            handleFileUpload(file)
        }

    }, [file]);

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



    const [formData, setFormData] = useState({
        name: customer.name || '',
        email: customer.email || '',
        avatar: customer.avatar || '',
        address: customer.address || '',
        phone: customer.phone || ''
    })


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       

        try {


            // Make the API request with updated formData
            const res = await fetch(`http://localhost:8000/update-customer-profile/${customer.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${customer.token}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
          

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

                dispatch({ type: "CUPDATE", payload: data });
                Cookies.set("customer", JSON.stringify(data));
                


                navigate('/user/dashboard')


            }



        } catch (error) {

            console.log(error)
        }
    };

    console.log(customer)


    return (
        <div className="col-lg-9  col-md-8">
            <div className="dashboard-item-taitel">
                <h4>Dashboard</h4>
                <p>Edit Profile</p>
            </div>
            <form
               onSubmit={handleSubmit}
            >
               
                <div className="dashboard-edit-profile-from">
                    <div className="shopping-cart-new-address-from">
                        <div className="shopping-cart-new-address-from-item">
                            <div className="shopping-cart-new-address-from-inner">
                                <label className="form-label">New Avatar</label>
                                <input
                                    type="file"
                                    id="avatar"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="border p-2"
                                />
                            </div>
                        </div>
                       

                        <div className="shopping-cart-new-address-from-item">
                    <div className="shopping-cart-new-address-from-inner">
                        <label htmlFor="fname" className="form-label">FUll Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                  
                </div>


                        <div className="shopping-cart-new-address-from-item">
                            <div className="shopping-cart-new-address-from-inner">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    
                                />
                            </div>
                            <div className="shopping-cart-new-address-from-inner">
                                <label className="form-label">Phone</label>
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
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Address
                                </label>
                                <textarea
                                    name="address"
                                    className="form-control"

                                    id='address'
                                    value={formData.address}
                                    onChange={handleChange}


                                    cols={30}
                                    rows={10}
                                  
                                />
                            </div>
                        </div>
                        <div className="change-passowerd-btn ">
                            <button className="main-btn-four" type="submit">
                                Save Now
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default EditProfile