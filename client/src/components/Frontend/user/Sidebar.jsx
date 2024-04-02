import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Cookies from "js-cookie"
import { useDispatch, useSelector } from 'react-redux'

function Sidebar() {
    const [visible ,setVisible] = useState(false)

    const handleLogOut = () => {
        setVisible(!visible);
    } 

    const { customer } = useSelector((state) => ({ ...state }))
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = async () => {
        
        try {

            const result = await Swal.fire({
                toast: false,
                title: 'Are You Logged Out?',
                icon: 'warning',
                position: 'center',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                customClass: {
                    container: 'custom-toast-container',
                    popup: 'custom-toast-popup',
                    title: 'custom-toast-title',
                    icon: 'custom-toast-icon',
                },
            });

            if (result.isConfirmed) {

                const res = await fetch('http://localhost:8000/customer-logout', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${customer.token}`,
                    }
                });
    
                const data = await res.json();
    
                if (res.status === 200) {
                    dispatch({ type: "CLOGOUT", payload: null });
                    Cookies.set("customer", null);
    
                    Swal.fire({
                        toast: false,
                        animation: true,
                        text: 'You Have Successfully Logged Out',
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
    
    
                    navigate('/login')
                }

            }

           

        } catch (error) {
            console.log(error)

        }

    }

    return (
        <>
            <div className="col-lg-3 col-md-4 ">
                <div className="dashboard-menu">
                    <div className="dashboard-menu-profile-main">
                        <div className="dashboard-menu-profile">
                            <div className="dashboard-menu-profile-img">
                                <img
                                    src="https://reservq.minionionbd.com/uploads/custom-images/user-images-2024-01-13-05-07-44-2624.png"
                                    alt="img"
                                />
                            </div>
                            <div className="dashboard-menu-profile-text">
                                <h4>John Doe</h4>
                                <p>User id #70</p>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-menu-main">
                        <ul>
                            <li>
                                <Link
                                    to="/user/dashboard"
                                    className="active"
                                >
                                    <span>
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
                                                fill="#FEC3D0"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10 4.25C10.4142 4.25 10.75 4.58579 10.75 5V15C10.75 15.4142 10.4142 15.75 10 15.75C9.5858 15.75 9.25 15.4142 9.25 15V5C9.25 4.58579 9.5858 4.25 10 4.25Z"
                                                fill="#F01543"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15 6.25C15.4142 6.25 15.75 6.58579 15.75 7V13C15.75 13.4142 15.4142 13.75 15 13.75C14.5858 13.75 14.25 13.4142 14.25 13V7C14.25 6.58579 14.5858 6.25 15 6.25Z"
                                                fill="#F01543"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5 6.25C5.41421 6.25 5.75 6.58579 5.75 7V13C5.75 13.4142 5.41421 13.75 5 13.75C4.58579 13.75 4.25 13.4142 4.25 13V7C4.25 6.58579 4.58579 6.25 5 6.25Z"
                                                fill="#F01543"
                                            />
                                        </svg>
                                    </span>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/edit-profile"
                                    className=""
                                >
                                    <span>
                                        <svg
                                            width={12}
                                            height={16}
                                            viewBox="0 0 12 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <ellipse
                                                opacity="0.4"
                                                cx="6.00033"
                                                cy="12.1654"
                                                rx="5.83333"
                                                ry="3.33333"
                                            />
                                            <circle cx="6.00033" cy="3.83333" r="3.33333" />
                                        </svg>
                                    </span>
                                    Edit Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/address"
                                    className=""
                                >
                                    <span>
                                        <svg
                                            width={14}
                                            height={16}
                                            viewBox="0 0 14 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7 12.1667C8.66667 12.1667 12 8.26142 12 5.5C12 2.73858 9.76142 0.5 7 0.5C4.23858 0.5 2 2.73858 2 5.5C2 8.26142 5.33333 12.1667 7 12.1667ZM7 7.16667C7.92047 7.16667 8.66667 6.42047 8.66667 5.5C8.66667 4.57953 7.92047 3.83333 7 3.83333C6.07953 3.83333 5.33333 4.57953 5.33333 5.5C5.33333 6.42047 6.07953 7.16667 7 7.16667Z"
                                            />
                                            <path
                                                opacity="0.4"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.87972 10.625C2.07393 10.8317 1.34383 11.287 0.80063 11.9389L0.566988 12.2192C-0.518557 13.5219 0.407759 15.4996 2.10343 15.4996H11.8966C13.5923 15.4996 14.5186 13.5219 13.433 12.2192L13.1994 11.9389C12.6562 11.287 11.9261 10.8317 11.1203 10.625C11.1158 10.6308 11.1112 10.6365 11.1067 10.6423C10.5336 11.3694 9.88488 12.0261 9.23335 12.5137C8.63104 12.9645 7.83517 13.4163 7.00001 13.4163C6.16486 13.4163 5.36899 12.9645 4.76669 12.5137C4.11515 12.0261 3.46647 11.3694 2.89333 10.6423C2.88879 10.6365 2.88426 10.6308 2.87972 10.625Z"
                                            />
                                        </svg>
                                    </span>
                                    Address
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/order"
                                    className=""
                                >
                                    <span>
                                        <svg
                                            width={16}
                                            height={18}
                                            viewBox="0 0 16 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M13.8333 0.667969H2.16667C1.24619 0.667969 0.5 1.41416 0.5 2.33464V14.9633C0.5 16.1176 1.6451 16.9224 2.7312 16.5314L4.03267 16.0629C4.43934 15.9165 4.88699 15.9338 5.28115 16.1111L7.31606 17.0269C7.75101 17.2226 8.24899 17.2226 8.68394 17.0269L10.7189 16.1111C11.113 15.9338 11.5607 15.9165 11.9673 16.0629L13.2688 16.5314C14.3549 16.9224 15.5 16.1176 15.5 14.9633V2.33464C15.5 1.41416 14.7538 0.667969 13.8333 0.667969Z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.792 4.83594C12.792 5.18112 12.5122 5.46094 12.167 5.46094L3.83366 5.46094C3.48848 5.46094 3.20866 5.18111 3.20866 4.83594C3.20866 4.49076 3.48848 4.21094 3.83366 4.21094L12.167 4.21094C12.5122 4.21094 12.792 4.49076 12.792 4.83594Z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.792 8.16797C12.792 8.51315 12.5122 8.79297 12.167 8.79297L3.83366 8.79297C3.48848 8.79297 3.20866 8.51315 3.20866 8.16797C3.20866 7.82279 3.48848 7.54297 3.83366 7.54297L12.167 7.54297C12.5122 7.54297 12.792 7.82279 12.792 8.16797Z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.625 11.5C8.625 11.8452 8.34518 12.125 8 12.125L3.83333 12.125C3.48816 12.125 3.20833 11.8452 3.20833 11.5C3.20833 11.1548 3.48816 10.875 3.83333 10.875L8 10.875C8.34518 10.875 8.625 11.1548 8.625 11.5Z"
                                            />
                                        </svg>
                                    </span>
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/wishlist"
                                    className=""
                                >
                                    <span>
                                        <svg
                                            width={18}
                                            height={15}
                                            viewBox="0 0 18 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M9.57121 2.1666L9.00033 2.75204L8.42946 2.16661C6.65369 0.345536 3.7746 0.345534 1.99882 2.16661C0.270742 3.93878 0.217645 6.79479 1.8786 8.63322L6.65054 13.9151C7.91827 15.3183 10.0824 15.3183 11.3501 13.9151L16.1221 8.6332C17.783 6.79476 17.7299 3.93876 16.0018 2.1666C14.2261 0.345523 11.347 0.345525 9.57121 2.1666Z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.542 3.41797C12.542 3.07279 12.8218 2.79297 13.167 2.79297C14.4326 2.79297 15.4587 3.81898 15.4587 5.08464C15.4587 5.42981 15.1788 5.70964 14.8337 5.70964C14.4885 5.70964 14.2087 5.42981 14.2087 5.08464C14.2087 4.50934 13.7423 4.04297 13.167 4.04297C12.8218 4.04297 12.542 3.76315 12.542 3.41797Z"
                                            />
                                        </svg>
                                    </span>
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className=""
                                >
                                    <span>
                                        <svg
                                            width={18}
                                            height={18}
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M7.361 1.72748C8.03157 0.314801 9.96907 0.314798 10.6396 1.72748L11.7986 4.16895C12.0649 4.72993 12.5796 5.11875 13.175 5.2087L15.7664 5.60021C17.2659 5.82675 17.8646 7.74259 16.7796 8.8422L14.9044 10.7426C14.4736 11.1793 14.277 11.8084 14.3787 12.425L14.8213 15.1084C15.0775 16.6611 13.51 17.8452 12.1689 17.1121L9.85101 15.8451C9.31845 15.554 8.6822 15.554 8.14963 15.8451L5.83179 17.1121C4.49065 17.8452 2.92318 16.6611 3.17931 15.1084L3.62198 12.425C3.72369 11.8084 3.52708 11.1793 3.09623 10.7426L1.22105 8.84221C0.136047 7.74259 0.734766 5.82675 2.23421 5.60021L4.82564 5.2087C5.42107 5.11875 5.9358 4.72993 6.20208 4.16895L7.361 1.72748Z"
                                            />
                                        </svg>
                                    </span>
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/change-password"
                                    className=""
                                >
                                    <span>
                                        <svg
                                            width={14}
                                            height={18}
                                            viewBox="0 0 14 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.65341 2.64759C5.12264 1.83644 5.99812 1.29297 6.9998 1.29297C8.49557 1.29297 9.70813 2.50553 9.70813 4.0013V5.66797H10.333C10.5467 5.66797 10.7556 5.68807 10.9581 5.72649V4.0013C10.9581 1.81518 9.18593 0.0429688 6.9998 0.0429688C5.53387 0.0429688 4.25488 0.840164 3.5714 2.02168C3.39857 2.32047 3.50067 2.7028 3.79945 2.87564C4.09824 3.04848 4.48057 2.94638 4.65341 2.64759Z"
                                            />
                                            <path
                                                opacity="0.4"
                                                d="M0.333008 9.0013C0.333008 7.16035 1.82539 5.66797 3.66634 5.66797H10.333C12.174 5.66797 13.6663 7.16035 13.6663 9.0013V14.0013C13.6663 15.8423 12.174 17.3346 10.333 17.3346H3.66634C1.82539 17.3346 0.333008 15.8423 0.333008 14.0013V9.0013Z"
                                            />
                                            <circle cx="6.99967" cy="11.5026" r="1.66667" />
                                        </svg>
                                    </span>
                                    Change Password
                                </Link>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="logout-btn "
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={handleClick}
                                >
                                    <span>
                                        <svg
                                            width={17}
                                            height={16}
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M3.83333 0.5H7.16667C9.00762 0.5 10.5 1.99238 10.5 3.83333V12.1667C10.5 14.0076 9.00762 15.5 7.16667 15.5H3.83333C1.99238 15.5 0.5 14.0076 0.5 12.1667V3.83333C0.5 1.99238 1.99238 0.5 3.83333 0.5Z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.5581 5.05806C12.8021 4.81398 13.1979 4.81398 13.4419 5.05806L15.9419 7.55806C16.186 7.80214 16.186 8.19786 15.9419 8.44194L13.4419 10.9419C13.1979 11.186 12.8021 11.186 12.5581 10.9419C12.314 10.6979 12.314 10.3021 12.5581 10.0581L13.9911 8.625H5.5C5.15482 8.625 4.875 8.34518 4.875 8C4.875 7.65482 5.15482 7.375 5.5 7.375H13.9911L12.5581 5.94194C12.314 5.69786 12.314 5.30214 12.5581 5.05806Z"
                                            />
                                        </svg>
                                    </span>
                                    Logout
                                </button>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div></>
    )
}

export default Sidebar