import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
    const location = useLocation();
    const [order, setOrder] = useState(false)
    const [product, setProduct] = useState(false)
    const [blog, setBlog] = useState(false)

    const handleProduct = () => {
        
        setProduct(!product)
        
    }

    const handleOrder = () => {
        
        setOrder(!order)
        
    }

    const handleBlog = () => {
        
        setBlog(!blog)
        
    }

    return (
        <div className="sherah-smenu">
            {/* Admin Menu */}
            <div className="admin-menu">
                {/* Logo */}
                <div className="logo sherah-sidebar-padding">
                    <Link href="/admin/dashboard" style={{fontWeight: 'bold', fontSize: '30px'}}>
                        Food Order
                    </Link>
                    <div className="sherah__sicon close-icon d-xl-none">
                        <svg
                            width={9}
                            height={15}
                            viewBox="0 0 9 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6.19855 7.41927C4.22908 5.52503 2.34913 3.72698 0.487273 1.90989C0.274898 1.70227 0.0977597 1.40419 0.026333 1.11848C-0.0746168 0.717537 0.122521 0.36707 0.483464 0.154695C0.856788 -0.0643475 1.24249 -0.0519669 1.60248 0.199455C1.73105 0.289929 1.84438 0.404212 1.95771 0.514685C4.00528 2.48321 6.05189 4.45173 8.09755 6.4212C8.82896 7.12499 8.83372 7.6145 8.11565 8.30687C6.05856 10.2878 4.00052 12.2677 1.94152 14.2467C1.82724 14.3562 1.71391 14.4696 1.58439 14.5591C1.17773 14.841 0.615842 14.781 0.27966 14.4324C-0.056522 14.0829 -0.0946163 13.5191 0.202519 13.1248C0.296802 12.9991 0.415847 12.8915 0.530129 12.781C2.29104 11.0868 4.05194 9.39351 5.81571 7.70212C5.91761 7.60593 6.04332 7.53355 6.19855 7.41927Z"></path>
                        </svg>
                    </div>
                </div>
                {/* Main Menu */}
                <div className="admin-menu__one sherah-sidebar-padding">
                    <div className="menu-bar">
                        <div id="sherahMenu">
                            <div>
                                <p className="menu-bar-subtaitel">Dashboard</p>
                            </div>
                            <ul className="menu-bar__one sherah-dashboard-menu">
                                <li>
                                    <Link
                                        className={location.pathname === '/admin/dashboard' ? 'custom-active' : 'custom'}
                                        to="/admin/dashboard"
                                    >
                                        <span className="menu-bar__text">
                                            <span className="sherah-menu-icon sherah-svg-icon__v1">
                                                <svg
                                                    className="sherah-svg-icon"
                                                    width={19}
                                                    height={19}
                                                    viewBox="0 0 19 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6.966 6.025H1.318C0.968526 6.02474 0.633441 5.88579 0.386326 5.63867C0.13921 5.39156 0.000264854 5.05647 0 4.707L0 1.318C0.000264854 0.968526 0.13921 0.633441 0.386326 0.386326C0.633441 0.13921 0.968526 0.000264854 1.318 0L6.966 0C7.31547 0.000264854 7.65056 0.13921 7.89767 0.386326C8.14479 0.633441 8.28374 0.968526 8.284 1.318V4.707C8.28374 5.05647 8.14479 5.39156 7.89767 5.63867C7.65056 5.88579 7.31547 6.02474 6.966 6.025ZM1.318 1.13C1.26814 1.13 1.22032 1.14981 1.18506 1.18506C1.14981 1.22032 1.13 1.26814 1.13 1.318V4.707C1.13 4.75686 1.14981 4.80468 1.18506 4.83994C1.22032 4.87519 1.26814 4.895 1.318 4.895H6.966C7.01586 4.895 7.06368 4.87519 7.09894 4.83994C7.13419 4.80468 7.154 4.75686 7.154 4.707V1.318C7.154 1.26814 7.13419 1.22032 7.09894 1.18506C7.06368 1.14981 7.01586 1.13 6.966 1.13H1.318Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M6.966 18.0753H1.318C0.968526 18.075 0.633441 17.936 0.386326 17.6889C0.13921 17.4418 0.000264854 17.1067 0 16.7572L0 8.84924C0.000264854 8.49977 0.13921 8.16469 0.386326 7.91757C0.633441 7.67046 0.968526 7.53151 1.318 7.53125H6.966C7.31547 7.53151 7.65056 7.67046 7.89767 7.91757C8.14479 8.16469 8.28374 8.49977 8.284 8.84924V16.7572C8.28374 17.1067 8.14479 17.4418 7.89767 17.6889C7.65056 17.936 7.31547 18.075 6.966 18.0753ZM1.318 8.66125C1.26814 8.66125 1.22032 8.68105 1.18506 8.71631C1.14981 8.75157 1.13 8.79938 1.13 8.84924V16.7572C1.13 16.8071 1.14981 16.8549 1.18506 16.8902C1.22032 16.9254 1.26814 16.9453 1.318 16.9453H6.966C7.01586 16.9453 7.06368 16.9254 7.09894 16.8902C7.13419 16.8549 7.154 16.8071 7.154 16.7572V8.84924C7.154 8.79938 7.13419 8.75157 7.09894 8.71631C7.06368 8.68105 7.01586 8.66125 6.966 8.66125H1.318Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M16.757 18.0758H11.1071C10.7576 18.0755 10.4225 17.9366 10.1754 17.6895C9.92827 17.4423 9.78933 17.1073 9.78906 16.7578V13.3688C9.78933 13.0193 9.92827 12.6842 10.1754 12.4371C10.4225 12.19 10.7576 12.051 11.1071 12.0508H16.757C17.1065 12.051 17.4416 12.19 17.6888 12.4371C17.9359 12.6842 18.0748 13.0193 18.0751 13.3688V16.7578C18.0748 17.1073 17.9359 17.4423 17.6888 17.6895C17.4416 17.9366 17.1065 18.0755 16.757 18.0758ZM11.1091 13.1758C11.0592 13.1758 11.0114 13.1956 10.9761 13.2308C10.9409 13.2661 10.9211 13.3139 10.9211 13.3638V16.7528C10.9211 16.8026 10.9409 16.8505 10.9761 16.8857C11.0114 16.921 11.0592 16.9408 11.1091 16.9408H16.757C16.8069 16.9408 16.8547 16.921 16.89 16.8857C16.9252 16.8505 16.9451 16.8026 16.9451 16.7528V13.3688C16.9451 13.3189 16.9252 13.2711 16.89 13.2358C16.8547 13.2006 16.8069 13.1808 16.757 13.1808L11.1091 13.1758Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M16.757 10.544H11.1071C10.7576 10.5437 10.4225 10.4048 10.1754 10.1577C9.92827 9.91056 9.78933 9.57547 9.78906 9.226V1.318C9.78933 0.968526 9.92827 0.633441 10.1754 0.386326C10.4225 0.13921 10.7576 0.000264854 11.1071 0L16.757 0C17.1065 0.000264854 17.4416 0.13921 17.6888 0.386326C17.9359 0.633441 18.0748 0.968526 18.0751 1.318V9.226C18.0748 9.57547 17.9359 9.91056 17.6888 10.1577C17.4416 10.4048 17.1065 10.5437 16.757 10.544ZM11.1071 1.13C11.0572 1.13 11.0094 1.14981 10.9741 1.18506C10.9389 1.22032 10.9191 1.26814 10.9191 1.318V9.226C10.9191 9.27586 10.9389 9.32368 10.9741 9.35894C11.0094 9.39419 11.0572 9.414 11.1071 9.414H16.757C16.8069 9.414 16.8547 9.39419 16.89 9.35894C16.9252 9.32368 16.9451 9.27586 16.9451 9.226V1.318C16.9451 1.26814 16.9252 1.22032 16.89 1.18506C16.8547 1.14981 16.8069 1.13 16.757 1.13H11.1071Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="menu-bar__name">Dashboard</span>
                                        </span>
                                    </Link>
                                </li>
                                {/* ************ Order ************ */}
                                <li className={`${order ? 'active' : ''}`}>
                                    <a
                                        href="#!"
                                        className=''
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-item__orders"
                                        onClick={handleOrder}
                                    >
                                        <span className="menu-bar__text">
                                            <span className="sherah-menu-icon sherah-svg-icon__v1">
                                                <svg
                                                    className="sherah-svg-icon"
                                                    width={22}
                                                    height={18}
                                                    viewBox="0 0 22 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.75 7.5H1.75C1.28603 7.49947 0.841222 7.31493 0.513148 6.98685C0.185074 6.65878 0.00052934 6.21397 0 5.75V1.75C0.00052934 1.28603 0.185074 0.841222 0.513148 0.513148C0.841222 0.185074 1.28603 0.00052934 1.75 0H5.75C6.21397 0.00052934 6.65878 0.185074 6.98685 0.513148C7.31493 0.841222 7.49947 1.28603 7.5 1.75V5.75C7.49947 6.21397 7.31493 6.65878 6.98685 6.98685C6.65878 7.31493 6.21397 7.49947 5.75 7.5ZM1.75 1.5C1.6837 1.5 1.62011 1.52634 1.57322 1.57322C1.52634 1.62011 1.5 1.6837 1.5 1.75V5.75C1.5 5.8163 1.52634 5.87989 1.57322 5.92678C1.62011 5.97366 1.6837 6 1.75 6H5.75C5.8163 6 5.87989 5.97366 5.92678 5.92678C5.97366 5.87989 6 5.8163 6 5.75V1.75C6 1.6837 5.97366 1.62011 5.92678 1.57322C5.87989 1.52634 5.8163 1.5 5.75 1.5H1.75Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M5.75 17.5H1.75C1.28603 17.4995 0.841222 17.3149 0.513148 16.9869C0.185074 16.6588 0.00052934 16.214 0 15.75V11.75C0.00052934 11.286 0.185074 10.8412 0.513148 10.5131C0.841222 10.1851 1.28603 10.0005 1.75 10H5.75C6.21397 10.0005 6.65878 10.1851 6.98685 10.5131C7.31493 10.8412 7.49947 11.286 7.5 11.75V15.75C7.49947 16.214 7.31493 16.6588 6.98685 16.9869C6.65878 17.3149 6.21397 17.4995 5.75 17.5ZM1.75 11.5C1.6837 11.5 1.62011 11.5263 1.57322 11.5732C1.52634 11.6201 1.5 11.6837 1.5 11.75V15.75C1.5 15.8163 1.52634 15.8799 1.57322 15.9268C1.62011 15.9737 1.6837 16 1.75 16H5.75C5.8163 16 5.87989 15.9737 5.92678 15.9268C5.97366 15.8799 6 15.8163 6 15.75V11.75C6 11.6837 5.97366 11.6201 5.92678 11.5732C5.87989 11.5263 5.8163 11.5 5.75 11.5H1.75Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M20.75 2.5H10.75C10.5511 2.5 10.3603 2.42098 10.2197 2.28033C10.079 2.13968 10 1.94891 10 1.75C10 1.55109 10.079 1.36032 10.2197 1.21967C10.3603 1.07902 10.5511 1 10.75 1H20.75C20.9489 1 21.1397 1.07902 21.2803 1.21967C21.421 1.36032 21.5 1.55109 21.5 1.75C21.5 1.94891 21.421 2.13968 21.2803 2.28033C21.1397 2.42098 20.9489 2.5 20.75 2.5Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M16.75 6.5H10.75C10.5511 6.5 10.3603 6.42098 10.2197 6.28033C10.079 6.13968 10 5.94891 10 5.75C10 5.55109 10.079 5.36032 10.2197 5.21967C10.3603 5.07902 10.5511 5 10.75 5H16.75C16.9489 5 17.1397 5.07902 17.2803 5.21967C17.421 5.36032 17.5 5.55109 17.5 5.75C17.5 5.94891 17.421 6.13968 17.2803 6.28033C17.1397 6.42098 16.9489 6.5 16.75 6.5Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M20.75 12.5H10.75C10.5511 12.5 10.3603 12.421 10.2197 12.2803C10.079 12.1397 10 11.9489 10 11.75C10 11.5511 10.079 11.3603 10.2197 11.2197C10.3603 11.079 10.5511 11 10.75 11H20.75C20.9489 11 21.1397 11.079 21.2803 11.2197C21.421 11.3603 21.5 11.5511 21.5 11.75C21.5 11.9489 21.421 12.1397 21.2803 12.2803C21.1397 12.421 20.9489 12.5 20.75 12.5Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M16.75 16.5H10.75C10.5511 16.5 10.3603 16.421 10.2197 16.2803C10.079 16.1397 10 15.9489 10 15.75C10 15.5511 10.079 15.3603 10.2197 15.2197C10.3603 15.079 10.5511 15 10.75 15H16.75C16.9489 15 17.1397 15.079 17.2803 15.2197C17.421 15.3603 17.5 15.5511 17.5 15.75C17.5 15.9489 17.421 16.1397 17.2803 16.2803C17.1397 16.421 16.9489 16.5 16.75 16.5Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="menu-bar__name">Orders</span>
                                        </span>
                                        <span className="sherah__toggle"></span>
                                    </a>
                                    {/* Dropdown Menu */}
                                    <div
                                        className={`collapse sherah__dropdown ${order ? 'collapse show' : ''}`}
                                        id="menu-item__orders"
                                        data-bs-parent="#sherahMenu"
                                    >
                                        <ul className="menu-bar__one-dropdown">
                                            <li className="">
                                                <Link to="/admin/all-order">
                                                    <span className="menu-bar__text">
                                                        <span className="menu-bar__name">All Order</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/admin/delivery/order">
                                                    <span className="menu-bar__text">
                                                        <span className="menu-bar__name">Delivery Order</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/admin/pickup/order">
                                                    <span className="menu-bar__text">
                                                        <span className="menu-bar__name">PickUp Order</span>
                                                    </span>
                                                </Link>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </li>

                               


                                {/* ************** Product Manage ************* */}
                                <li className={`${product ? 'active' : ''}`}>
                                    <a
                                        href="#!"
                                        className=""
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-item_page_setup"
                                        onClick={handleProduct}
                                    >
                                        <span className="menu-bar__text">
                                            <span className="sherah-menu-icon sherah-svg-icon__v1">
                                                <svg
                                                    className="sherah-svg-icon"
                                                    width={23}
                                                    height={21}
                                                    viewBox="0 0 23 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M22.3259 14.8239H21.2895C21.4966 14.4668 21.6247 14.0583 21.648 13.6222C21.854 13.607 22.0883 13.5361 22.3478 13.3755C22.6607 13.1821 22.8716 12.8775 22.9576 12.4946C23.155 11.6157 22.6256 10.3429 22.149 9.43326H22.3259C22.6981 9.43326 22.9997 9.13161 22.9997 8.7596C22.9997 3.92944 19.0501 0 14.1953 0H8.80471C3.94998 0 0.000359516 3.92944 0.000359516 8.7596C0.000359516 9.13161 0.302003 9.43326 0.674189 9.43326H0.851069C0.374475 10.3429 -0.155113 11.6157 0.0424738 12.4946C0.128457 12.8775 0.33938 13.1821 0.652254 13.3755C0.911784 13.5361 1.14604 13.6068 1.35205 13.6221C1.37539 14.0581 1.50349 14.4666 1.71055 14.8239H0.674189C0.302003 14.8239 0.000359516 15.1255 0.000359516 15.4977C0.000359516 18.0985 2.11625 20.2144 4.71699 20.2144H18.2831C20.8838 20.2144 22.9997 18.0985 22.9997 15.4977C22.9997 15.1255 22.6981 14.8239 22.3259 14.8239ZM8.80471 1.34766H14.1953C18.0786 1.34766 21.2781 4.31321 21.6215 8.08578H1.37855C1.72196 4.31321 4.92142 1.34766 8.80471 1.34766ZM1.58526 11.9692C1.52876 12.0558 1.4512 12.1749 1.39224 12.2477C1.38452 12.2435 1.37609 12.2386 1.36715 12.2332C1.31924 12.1358 1.30046 11.656 1.78618 10.5951C1.99746 10.1334 2.23733 9.70665 2.39912 9.43326H20.6011C20.7611 9.70349 20.9975 10.1239 21.2083 10.5828C21.6996 11.6518 21.6812 12.1352 21.6329 12.2332C21.624 12.2386 21.6155 12.2435 21.6078 12.2477C21.5489 12.1749 21.4711 12.0558 21.4148 11.9692C21.1249 11.5248 20.6397 10.7809 19.6307 10.7809C18.6777 10.7809 18.1743 11.2845 17.8067 11.6522C17.4762 11.9826 17.3143 12.1286 16.9354 12.1286C16.5513 12.1286 16.3718 11.9713 16.034 11.6444C15.6574 11.28 15.1417 10.7809 14.1953 10.7809C13.2423 10.7809 12.7389 11.2845 12.3713 11.6522C12.0408 11.9826 11.8789 12.1286 11.5 12.1286C11.1212 12.1286 10.9592 11.9826 10.6288 11.6522C10.2612 11.2845 9.75772 10.7809 8.80471 10.7809C7.85837 10.7809 7.34264 11.28 6.96607 11.6444C6.62828 11.9713 6.44877 12.1286 6.06465 12.1286C5.68579 12.1286 5.52383 11.9826 5.19341 11.6522C4.82578 11.2845 4.32234 10.7809 3.36933 10.7809C2.36034 10.7811 1.87515 11.5249 1.58526 11.9692ZM20.3046 13.4762C20.3046 14.2194 19.6999 14.8239 18.9569 14.8239H4.04316C3.30019 14.8239 2.6955 14.2194 2.6955 13.4762C2.6955 12.8626 3.10419 12.3355 3.68396 12.1768C3.87154 12.2439 4.01789 12.3825 4.24057 12.605C4.60819 12.9726 5.11164 13.4762 6.06465 13.4762C7.01117 13.4762 7.52672 12.9772 7.90329 12.6127C8.24108 12.2858 8.42059 12.1286 8.80471 12.1286C9.18356 12.1286 9.34553 12.2747 9.67595 12.605C10.0436 12.9726 10.5472 13.4762 11.5 13.4762C12.4529 13.4762 12.9565 12.9726 13.3241 12.605C13.6545 12.2747 13.8165 12.1286 14.1953 12.1286C14.5795 12.1286 14.7588 12.2858 15.0968 12.6127C15.4733 12.9772 15.9889 13.4762 16.9354 13.4762C17.8884 13.4762 18.3919 12.9726 18.7595 12.605C18.9822 12.3825 19.1285 12.2439 19.3161 12.1768C19.8959 12.3355 20.3046 12.8626 20.3046 13.4762ZM4.71699 18.8667C3.08997 18.8667 1.72863 17.7073 1.41558 16.1716H8.5801L12.1739 18.8667H4.71699ZM10.8262 16.1716H17.5957L14.1969 18.6995L10.8262 16.1716ZM18.2831 18.8667H16.2302L19.8538 16.1624H21.5845C21.2714 17.6984 19.9101 18.8667 18.2831 18.8667Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M9.47834 3.37305C9.47834 3.74506 9.1767 4.04688 8.80451 4.04688C8.4325 4.04688 8.13086 3.74506 8.13086 3.37305C8.13086 3.00086 8.4325 2.69922 8.80451 2.69922C9.1767 2.69922 9.47834 3.00086 9.47834 3.37305Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M16.2617 4.71662C16.2617 5.08881 15.9601 5.39045 15.5879 5.39045C15.2159 5.39045 14.9141 5.08881 14.9141 4.71662C14.9141 4.34461 15.2159 4.04297 15.5879 4.04297C15.9601 4.04297 16.2617 4.34461 16.2617 4.71662Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M6.73828 4.71662C6.73828 5.08881 6.43664 5.39045 6.06445 5.39045C5.69227 5.39045 5.39062 5.08881 5.39062 4.71662C5.39062 4.34461 5.69227 4.04297 6.06445 4.04297C6.43664 4.04297 6.73828 4.34461 6.73828 4.71662Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M13.5215 3.37305C13.5215 3.74506 13.2197 4.04688 12.8477 4.04688C12.4755 4.04688 12.1738 3.74506 12.1738 3.37305C12.1738 3.00086 12.4755 2.69922 12.8477 2.69922C13.2197 2.69922 13.5215 3.00086 13.5215 3.37305Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M12.1738 6.06445C12.1738 6.43664 11.8722 6.73828 11.5 6.73828C11.1278 6.73828 10.8262 6.43664 10.8262 6.06445C10.8262 5.69244 11.1278 5.39062 11.5 5.39062C11.8722 5.39062 12.1738 5.69244 12.1738 6.06445Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="menu-bar__name">Product Manage</span>
                                        </span>
                                        <span className="sherah__toggle"></span>
                                    </a>
                                    {/* Dropdown Menu */}
                                    <div
                                        className={`collapse sherah__dropdown ${product ? 'collapse show' : ''}`}
                                        id="menu-item_page_setup"
                                        data-bs-parent="#sherahMenu"
                                    >
                                        <ul className='menu-bar__one-dropdown'>
                                            <li>
                                                <Link to="/admin/product-create">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/product-create' ? 'menu-bar__name subactive' : 'menu-bar__name'}>Create Product</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/admin/product-list-show">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/product-list-show' ? 'menu-bar__name subactive' : 'menu-bar__name'}>Product</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/admin/category-list">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/category-list' || location.pathname === '/admin/category-create' ? 'menu-bar__name subactive' : 'menu-bar__name'}>Categories</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/admin/optional-item-list">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/optional-item-list' || location.pathname === '/admin/optional-item-create' ? 'menu-bar__name subactive' : 'menu-bar__name'}>Optional Items</span>
                                                    </span>
                                                </Link>
                                            </li>
                                           
                                            <li className="">
                                                <Link to="/admin/coupon">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/coupon' || location.pathname === '/admin/coupon/create' ? 'menu-bar__name subactive' : 'menu-bar__name'}>Coupon</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/admin/delivery-area">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/delivery-area' || location.pathname === '/admin/create/delivery' ? 'menu-bar__name subactive' : 'menu-bar__name'}>Delivery Area</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/admin/timeslot">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/timeslot' || location.pathname === '/admin/create/timeslot' ? 'menu-bar__name subactive' : 'menu-bar__name'}>Time Slots</span>
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* ************ Customer List *************** */}
                                <li>
                                    <Link
                                        className=""
                                        to="/admin/customer-list"
                                    >
                                        <span className="menu-bar__text">
                                            <span className="sherah-menu-icon sherah-svg-icon__v1">
                                                <svg
                                                    className="sherah-svg-icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22.038"
                                                    height="17.943"
                                                    viewBox="0 0 22.038 17.943"
                                                >
                                                    <g id="Icon" transform="translate(-325.516 -274.72)">
                                                        <path
                                                            id="Path_221"
                                                            data-name="Path 221"
                                                            d="M340.751,385.008c.034.446.08.824.088,1.2a.755.755,0,0,1-.86.88q-6.792.005-13.585,0c-.619,0-.88-.279-.878-.907a7.668,7.668,0,0,1,12.323-5.909c.071.054.145.1.241.172a5.8,5.8,0,0,1,2.906-1.574,5.524,5.524,0,0,1,6.566,5.177c.016.69-.23.954-.916.956-1.775,0-3.549,0-5.324,0Zm-1.467.59a6.1,6.1,0,0,0-6.281-5.43c-3.108.1-6.1,2.872-5.9,5.43Zm-.127-4.139c.349.615.686,1.16.97,1.731a.524.524,0,0,0,.55.351c1.649-.013,3.3-.006,4.947-.008.117,0,.234-.019.394-.034a4.053,4.053,0,0,0-6.861-2.042Z"
                                                            transform="translate(0 -94.43)"
                                                        />
                                                        <path
                                                            id="Path_222"
                                                            data-name="Path 222"
                                                            d="M363.308,278.9a4.192,4.192,0,1,1,4.144,4.208A4.177,4.177,0,0,1,363.308,278.9Zm1.472-.009a2.721,2.721,0,1,0,2.718-2.7A2.717,2.717,0,0,0,364.779,278.892Z"
                                                            transform="translate(-34.322)"
                                                        />
                                                        <path
                                                            id="Path_223"
                                                            data-name="Path 223"
                                                            d="M474.686,302.114a3.121,3.121,0,1,1-3.123,3.119A3.121,3.121,0,0,1,474.686,302.114Zm1.649,3.123a1.651,1.651,0,1,0-1.665,1.648A1.652,1.652,0,0,0,476.335,305.237Z"
                                                            transform="translate(-132.638 -24.879)"
                                                        />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span className={location.pathname === '/admin/customer-list'  ? 'menu-bar__name subactive' : 'menu-bar__name'}>Customer List</span>
                                        </span>
                                    </Link>
                                </li>
                                {/* ************ Product Reviews ************ */}

                                <li className={`${blog ? 'active' : ''}`}>
                                    <a
                                        
                                        href="#!"
                                        className=""
                                        data-bs-toggle="collapse"
                                        data-bs-target="#menu-item__blogs"
                                        onClick={handleBlog}
                                    >
                                        <span className="menu-bar__text">
                                            <span className="sherah-menu-icon sherah-svg-icon__v1">
                                                <svg
                                                    className="sherah-svg-icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22.029"
                                                    height="20.972"
                                                    viewBox="0 0 22.029 20.972"
                                                >
                                                    <g id="Icon" transform="translate(-451.809 -436.251)">
                                                        <path
                                                            id="Path_234"
                                                            data-name="Path 234"
                                                            d="M467.255,446.744q0,4.038,0,8.077c0,1.587-.776,2.4-2.294,2.4-2.7,0-5.39-.01-8.085.005a1.466,1.466,0,0,1-1.172-.506q-1.723-1.84-3.5-3.629a1.259,1.259,0,0,1-.381-.945c0-.907-.017-1.814-.017-2.722q0-5.4.007-10.8a2.082,2.082,0,0,1,2.28-2.37q5.44,0,10.881,0a2.076,2.076,0,0,1,2.278,2.369Q467.259,442.683,467.255,446.744Zm-10.039,9.007h7.751c.691,0,.864-.179.864-.893q0-8.119,0-16.237c0-.719-.169-.895-.859-.895H454.1c-.678,0-.846.167-.846.857q0,6.29,0,12.58c0,.144.014.288.024.474,1.017,0,2,0,2.988,0,.725,0,.953.234.955.981C457.218,453.641,457.217,454.665,457.217,455.75Zm-2.774-2.636,1.3,1.408v-1.408Z"
                                                            transform="translate(0 0)"
                                                        />
                                                        <path
                                                            id="Path_235"
                                                            data-name="Path 235"
                                                            d="M640.677,446.844c0,2.765.005,5.531,0,8.3a2.052,2.052,0,0,1-1.852,2.175.733.733,0,1,1-.177-1.452.635.635,0,0,0,.6-.721q0-8.3,0-16.592a.632.632,0,0,0-.6-.721.734.734,0,1,1,.174-1.454,2.054,2.054,0,0,1,1.853,2.174C640.682,441.313,640.677,444.079,640.677,446.844Z"
                                                            transform="translate(-170.125 -0.109)"
                                                        />
                                                        <path
                                                            id="Path_236"
                                                            data-name="Path 236"
                                                            d="M678.986,446.8c0,2.78.005,5.56,0,8.339a2.04,2.04,0,0,1-1.845,2.13.725.725,0,0,1-.862-.655.736.736,0,0,1,.689-.8c.464-.088.595-.253.6-.81q.006-2.876,0-5.753,0-5.262,0-10.524c0-.722-.044-.777-.728-.953a.744.744,0,0,1-.558-.791.712.712,0,0,1,.735-.66,2.033,2.033,0,0,1,1.97,2.1c.013,2.021,0,4.043,0,6.065Q678.986,445.64,678.986,446.8Z"
                                                            transform="translate(-205.15 -0.063)"
                                                        />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span className="menu-bar__name">Blog</span>
                                        </span>
                                        <span className="sherah__toggle"></span>
                                    </a>
                                    {/* Dropdown Menu */}
                                    <div
                                        className={`collapse sherah__dropdown ${blog ? 'collapse show' : ''}`}
                                        id="menu-item__blogs"
                                        data-bs-parent="#sherahMenu"
                                    >
                                        <ul className="menu-bar__one-dropdown">
                                            <li>
                                                <Link to="/admin/blogs">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/blogs'  ? 'menu-bar__name subactive' : 'menu-bar__name'}>Blogs</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/admin/blog-categories">
                                                    <span className="menu-bar__text">
                                                        <span className={location.pathname === '/admin/blog-categories' || location.pathname === '/admin/blog-category-create'  ? 'menu-bar__name subactive' : 'menu-bar__name'}>Blog Categories</span>
                                                    </span>
                                                </Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </li>
                               
                                
                            </ul>
                           
                           
                           
                            
                        </div>
                    </div>
                    {/* End Nav Menu */}
                </div>
            </div>
            {/* End Admin Menu */}
        </div>

    )
}

export default Sidebar