import React, { useState, useEffect } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app, storage } from '../../firebase.js'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

function ProfileModal({ handleProfile }) {

    const { user } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [file, setFile] = useState(undefined)
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false)
    const [imagePreview, setImagePreview] = useState(null);
    const [imageLoading, setImageLoading] = useState(false)
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        fullName: user.fullName || '',
        email: user.email || '',
        avatar: user.avatar || ''
      })


      console.log(formData)




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

            if (file) {

                const storageRef = ref(storage, `/files/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                // Wait for both upload and download URL retrieval
                const [snapshot] = await Promise.all([
                    new Promise((resolve, reject) => {
                        uploadTask.on(
                            "state_changed",
                            (snapshot) => {
                                // Handle upload state changes if needed
                            },
                            (err) => {
                                console.log(err);
                                reject(err);
                            },
                            () => {
                                resolve(uploadTask.snapshot);
                            }
                        );
                    }),
                ]);

                // Get the download URL
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                // Update formData with the download URL
                setFormData((prevData) => ({
                    ...prevData,
                    avatar: downloadURL,
                }));

            }


            // Make the API request with updated formData
            const res = await fetch('http://localhost:8000/profile-update', {
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
                    text: `Profile Updated Successfully `,
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

                dispatch({ type: "UPDATE", payload: data });
                Cookies.set("user", JSON.stringify(data));
                navigate('/admin/dashboard')


            }

            if (res.status === 400) {
                setError(data.message)
                console.log(error)
            }


        } catch (error) {
            // Handle error appropriately
            //console.log(error);
            setLoading(false)
        }
    };


    return (
        <div
            className="modal fade bd-example-modal-lg show "
            id="ProfileEditTable"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            style={{ display: "block", paddingLeft: 0 }}
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-lg profile-modal" role="document">
                <div className="modal-content custom-profile-modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Update Profile
                        </h5>
                        <button
                            type="button"
                            className="btn btn-primary admin_update_close_btn"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleProfile}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body" id="Variant">
                        <form
                            className="sherah-wc__form-main"
                            onSubmit={handleSubmit}

                        >

                            <div className="variant">
                                <div className="row">
                                    <div className="col-12">
                                        {" "}
                                        {/* Product Info */}
                                        <div className="product-form-box">
                                            <div className="row">
                                                <div className="col-12" id="variant_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">Image *</label>
                                                        <div className="form-group__input">

                                                            {
                                                                imagePreview ? (
                                                                    <img className='admin_avatar' src={imagePreview}  />

                                                                ) : (
                                                                    <img className='admin_avatar' src={formData.avatar}  />

                                                                )
                                                            }

                                                            <span style={{fontWeight: 'bold', color: 'red', fontSize: '30px'}}>

                                                                {
                                                                    imageLoading && (

                                                                        <span>{filePerc}% </span>

                                                                    )
                                                                }
                                                            </span>


                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-12" id="variant_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">
                                                            New Image *
                                                        </label>
                                                        <div className="form-group__input">
                                                            <input
                                                                onchange="previewThumnailImage(event)"
                                                                type="file"

                                                                id="avatar"
                                                                onChange={(e) => setFile(e.target.files[0])}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12" id="item_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">Name *</label>
                                                       
                                                        <div className="form-group__input">
                                                            <input
                                                                className="sherah-wc__form-input"
                                                                type="text"
                                                                id='fullName'
                                                                required=""
                                                                value={formData.fullName}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12" id="item_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">Email *</label>
                                                        <div className="form-group__input">
                                                            <input
                                                                className="sherah-wc__form-input"
                                                                type="text"
                                                                id='email'
                                                                onChange={handleChange}
                                                                required=""
                                                                value={formData.email}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12" id="CreateItemButton">
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="sherah-btn sherah-btn__primary"
                                                        >
                                                            Update
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Product Info */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileModal