import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app, storage } from '../../firebase.js'

function ProductGallery() {

    const { user } = useSelector((state) => ({ ...state }))
    const { id } = useParams();
    const [formData, setFormData] = useState({})
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const [product, setProduct] = useState([])
    const specificProduct = async () => {


        try {
            const res = await fetch(`http://localhost:8000/edit-product/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
            });


            const data = await res.json();
            setProduct(data);



        } catch (error) {
            return (error)

        }

    };
    useEffect(() => {
        specificProduct();
    }, []);





    //delete Image

    const handleClick = async (imageId) => {

        try {

            const result = await Swal.fire({
                toast: false,
                title: 'Delete Image?',
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
                const res = await fetch(`http://localhost:8000/delete-product/${id}/image/${imageId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                });

                const data = await res.json();
                console.log(data);


                if (res.status === 200) {
                    Swal.fire({
                        toast: false,
                        animation: true,
                        text: `Data Deleted Successfully`,
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
                    specificProduct();
                }
            }


        } catch (error) {
            console.log(error)
        }


    }





    const columns = [

        {
            name: 'SN',
            selector: row => row.index
        },


        {
            name: 'Image',
            selector: row => (

                <td className="sherah-table__column-1 sherah-table__data-6">
                    <div className="">
                        <img
                            className="product_list_thumb"
                            src={row.image}
                            alt="#"
                            style={{ width: '100px', height: '60px' }}
                        />
                    </div>
                </td>

            )
        },



        {
            name: 'Action',
            selector: row => (
                <div className="sherah-table__status__group">

                    <Link
                        to='#'
                        onClick={() => handleClick(row.id)}
                        className="sherah-table__action sherah-color2 sherah-color2__bg--offset blog_comment_delete"
                    >
                        <svg
                            className="sherah-color2__fill"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.247"
                            height="18.252"
                            viewBox="0 0 16.247 18.252"
                        >
                            <g id="Icon" transform="translate(-160.007 -18.718)">
                                <path
                                    id="Path_484"
                                    data-name="Path 484"
                                    d="M185.344,88.136c0,1.393,0,2.786,0,4.179-.006,1.909-1.523,3.244-3.694,3.248q-3.623.007-7.246,0c-2.15,0-3.682-1.338-3.687-3.216q-.01-4.349,0-8.7a.828.828,0,0,1,.822-.926.871.871,0,0,1,1,.737c.016.162.006.326.006.489q0,4.161,0,8.321c0,1.061.711,1.689,1.912,1.69q3.58,0,7.161,0c1.2,0,1.906-.631,1.906-1.695q0-4.311,0-8.622a.841.841,0,0,1,.708-.907.871.871,0,0,1,1.113.844C185.349,85.1,185.343,86.618,185.344,88.136Z"
                                    transform="translate(-9.898 -58.597)"
                                />
                                <path
                                    id="Path_485"
                                    data-name="Path 485"
                                    d="M164.512,21.131c0-.517,0-.98,0-1.443.006-.675.327-.966,1.08-.967q2.537,0,5.074,0c.755,0,1.074.291,1.082.966.005.439.005.878.009,1.317a.615.615,0,0,0,.047.126h.428c1,0,2,0,3,0,.621,0,1.013.313,1.019.788s-.4.812-1.04.813q-7.083,0-14.165,0c-.635,0-1.046-.327-1.041-.811s.4-.786,1.018-.789C162.165,21.127,163.3,21.131,164.512,21.131Zm1.839-.021H169.9v-.764h-3.551Z"
                                    transform="translate(0 0)"
                                />
                                <path
                                    id="Path_486"
                                    data-name="Path 486"
                                    d="M225.582,107.622c0,.9,0,1.806,0,2.709a.806.806,0,0,1-.787.908.818.818,0,0,1-.814-.924q0-2.69,0-5.38a.82.82,0,0,1,.81-.927.805.805,0,0,1,.79.9C225.585,105.816,225.582,106.719,225.582,107.622Z"
                                    transform="translate(-58.483 -78.508)"
                                />
                                <path
                                    id="Path_487"
                                    data-name="Path 487"
                                    d="M266.724,107.63c0-.9,0-1.806,0-2.709a.806.806,0,0,1,.782-.912.818.818,0,0,1,.818.919q0,2.69,0,5.38a.822.822,0,0,1-.806.931c-.488,0-.792-.356-.794-.938C266.721,109.411,266.724,108.521,266.724,107.63Z"
                                    transform="translate(-97.561 -78.509)"
                                />
                            </g>
                        </svg>
                    </Link>

                </div>

            )
        },

    ]


    const [mavatar, setMavatar] = useState([]);

    useEffect(() => {
        if (product.multipleImage) {
            setMavatar(product.multipleImage);
        }
    }, [product]);

    console.log(mavatar)

    const [record, setRecord] = useState([])

    useEffect(() => {
        const data = mavatar.map((item, index) => ({
            index: index + 1,
            image: item.link,
            id: item.id
        }));
        setRecord(data);
    }, [mavatar]);


    //multiple file
    const [imageLoading, setImageLoading] = useState(false)
    const [fileUploadErrors, setFileUploadErrors] = useState([]);
    const [mimagePreview, setMimagePreview] = useState([]);
    const [mfiles, setMfiles] = useState([]);
    const [filePerc, setFilePerc] = useState(0);

    const [multipleImage, setMultipleImage] = useState([]);




    const mhandleFileUpload = (mfile) => {
        setImageLoading(true);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + mfile.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, mfile);
        


        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Handle progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                // Handle errors
                setFileUploadErrors([...fileUploadErrors, error]);
            },
            async () => {
                // Handle successful upload
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    // Update formData with the new download URL
                    /*setFormData((prevData) => ({
                        ...prevData,
                        productavatar: [...(prevData.productavatar || []), downloadURL], // Initialize as an empty array if undefined
                    }))*/

                    setMultipleImage((prevMultipleImage) => [...prevMultipleImage, downloadURL]);

                    // Update mimagePreview with the new download URL
                    setMimagePreview((prevPreview) => [...prevPreview, downloadURL]);
                    setImageLoading(false);
                } catch (error) {
                    console.error('Error retrieving download URL:', error);
                    setFileUploadErrors([...fileUploadErrors, error]);
                    setImageLoading(false);
                }
            }
        );
    };


   const handleFilesChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setMfiles([...mfiles, ...selectedFiles]);
    };

    useEffect(() => {
        mfiles.forEach((mfile) => mhandleFileUpload(mfile));
    }, [mfiles]);  

    console.log(multipleImage);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedFormData = {
            ...formData,
            multipleImage
        }

        try {

            setMultipleImage([]);

            // Make the API request with updated formData
            const res = await fetch(`http://localhost:8000/update-product-image/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify(updatedFormData),
            });

            const data = await res.json();
            console.log(data)


            if (res.status === 200) {

                Swal.fire({
                    toast: false,
                    animation: true,
                    text: `Image updated successfully`,
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

                specificProduct();

                fileInputRef.current.value = '';
                navigate('/admin/product-list-show')
                


            }





        } catch (error) {

            console.log(error)
        }



    }















    return (
        <section className="sherah-adashboard sherah-show">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sherah-body">
                            <div className="sherah-dsinner">
                                <div className="row mg-top-30">
                                    <div className="col-12 sherah-flex-between">
                                        <div className="sherah-breadcrumb">
                                            <h2 className="sherah-breadcrumb__title">Product Gallery</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <Link to="/admin/dashboard">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className="active">
                                                    <a href="#">Product List</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Sherah Breadcrumb */}

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
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">

                                                                <span style={{ fontWeight: 'bold', color: 'red', fontSize: '30px' }}>

                                                                    {
                                                                        imageLoading && (

                                                                            <span>{filePerc}% </span>

                                                                        )
                                                                    }
                                                                </span>



                                                                <label className="sherah-wc__form-label">
                                                                    Image (Select Multiple)
                                                                </label>
                                                                <input class="sherah-wc__form-input" ref={fileInputRef} type="file" id="productavatar" onChange={handleFilesChange} multiple accept="image/*" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Product Info */}
                                            </div>
                                        </div>
                                        <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                                            <button type="submit" className="sherah-btn sherah-btn__primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>



                                <div className="sherah-table sherah-page-inner sherah-border sherah-default-bg mg-top-25">



                                    <DataTable columns={columns} data={record} pagination>

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

export default ProductGallery