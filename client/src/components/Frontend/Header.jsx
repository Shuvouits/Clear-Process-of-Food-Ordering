import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Cookies from "js-cookie"


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { wishlist } = useSelector((state) => ({ ...state }))

  const [cart, setCart] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { customer } = useSelector((state) => ({ ...state }))

  const handleCartClick = () => {
    setCart(!cart)
  }



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [formData, setFormData] = useState({})

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })

  }

  const profileRef = useRef(null);
  const [profile, setProfile] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);



  const handleProfile = () => {
    setProfile(!profile)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/menu/search/${formData.menuFilter}`)
  }

  //log out functionality


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



   //Wishlist Data
   const [wishlistData, setWishlistData] = useState([])
   const allWishlist = async () => {

       try {
           const res = await fetch(`http://localhost:8000/all-wishlist`, {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${customer.token}`,
               },
           });


           const data = await res.json();
           setWishlistData(data);

           dispatch({ type: "WISHLIST", payload: data });
          Cookies.set("wishlist", JSON.stringify(data));

       } catch (error) {
           return (error)

       }

   };

   useEffect(() => {
       allWishlist();
   }, []); 



  return (

    <>

      <header className="header  header-two  ">

        {/* menu part start */} <div className="container">
          <div className="header-main">
            <div className="header-left-center">
              <a href="https://reservq.minionionbd.com/menu">
                It's the last day to save. The skills for now — now on sale.
              </a>
            </div>
            <div className="header-right">
              <div className="header-right-item">
                <div className="header-right-inner">
                  <div className="icon">
                    <span>
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 14.25V13.0155C15.75 12.4022 15.3766 11.8506 14.8071 11.6228L13.2815 11.0126C12.5571 10.7229 11.7316 11.0367 11.3828 11.7345L11.25 12C11.25 12 9.375 11.625 7.875 10.125C6.375 8.625 6 6.75 6 6.75L6.26551 6.61724C6.96328 6.26836 7.27714 5.44285 6.98741 4.71852L6.37717 3.19291C6.14937 2.62343 5.59781 2.25 4.98445 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75C2.25 10.3774 7.62258 15.75 14.25 15.75C15.0784 15.75 15.75 15.0784 15.75 14.25Z" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="text">
                    <a href="tel:+1 707 797 0462">
                      +1 707 797 0462
                    </a>
                  </div>
                </div>
                <div className="header-right-inner">
                  <div className="icon">
                    <span>
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66699 10V5.83333C1.66699 3.99238 3.15938 2.5 5.00033 2.5H15.0003C16.8413 2.5 18.3337 3.99238 18.3337 5.83333V14.1667C18.3337 16.0076 16.8413 17.5 15.0003 17.5H6.66699M5.00033 6.66667L8.15133 8.76733C9.27099 9.51378 10.7297 9.51378 11.8493 8.76733L15.0003 6.66667M1.66699 12.5H6.66699M1.66699 15H6.66699" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="text">
                    <a href="mailto:Quomodosoft@gmail.com">
                      shuvo21.xpertseoservice@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="location-btn">
                  <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      English
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="https://reservq.minionionbd.com/lang/en">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="https://reservq.minionionbd.com/lang/bn">
                          Bangla
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="https://reservq.minionionbd.com/lang/hi">
                          Hindi
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="location-btn-icon">
                    <span>
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.83301 8.33203L9.99967 11.6654L14.1663 8.33203" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className={`menu-bg ${isScrolled ? 'nav-bg' : ''}`}  >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="nav-main">
                  <div className="nav-main">
                    <div className="logo">
                      <Link to="/">
                        <h1 style={{ color: '#fe724c', fontWeight: 'bold' }}>FoodOrder</h1>
                      </Link>
                    </div>
                    <div className="menu">
                      <ul>
                        <li>
                          <Link to={'/'} >
                            Home
                          </Link>

                        </li>
                        <li>
                          <Link to={'/menu'} >
                            Menu
                          </Link>
                        </li>
                        <li>
                          <Link to='/about'>
                            About Us
                          </Link>



                        </li>
                        <li>

                          <Link to='/contact' >
                            Contact Us
                          </Link>


                        </li>
                        <li>
                          <Link to='/blog' >
                            Blog
                          </Link>


                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="nav-btn-main">
                    <form onSubmit={handleSubmit}>
                      <div className="nav-btn-one">
                        <input type="text" className="form-control" id="menuFilter" onChange={handleChange} placeholder="Search here" />
                        <input type="hidden" name="category" />
                        <div className="nav-search">
                          <button type="submit">
                            <span>
                              <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.25 10.5C19.25 15.3325 15.3325 19.25 10.5 19.25C5.66751 19.25 1.75 15.3325 1.75 10.5C1.75 5.66751 5.66751 1.75 10.5 1.75C15.3325 1.75 19.25 5.66751 19.25 10.5ZM10.5 20.75C16.1609 20.75 20.75 16.1609 20.75 10.5C20.75 4.83908 16.1609 0.25 10.5 0.25C4.83908 0.25 0.25 4.83908 0.25 10.5C0.25 16.1609 4.83908 20.75 10.5 20.75ZM19.5303 18.4697C19.2374 18.1768 18.7626 18.1768 18.4697 18.4697C18.1768 18.7626 18.1768 19.2374 18.4697 19.5303L20.4696 21.5303C20.7625 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7625 21.5303 20.4696L19.5303 18.4697Z" fill="#4D5461" />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="nav-btn-two">
                      <Link to="/user/wishlist">
                       
                        <div className='love' >
                         
                          <span >
                            
                            <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.833 7.584C21.1216 7.584 22.1663 8.62867 22.1663 9.91733M13.9997 6.65363L14.7989 5.834C17.285 3.2845 21.3157 3.2845 23.8018 5.834C26.2211 8.31503 26.2954 12.3134 23.9701 14.8872L17.2893 22.2819C15.5145 24.2463 12.4848 24.2463 10.71 22.2819L4.02926 14.8873C1.70392 12.3135 1.77826 8.31506 4.19757 5.83402C6.68365 3.28451 10.7144 3.28452 13.2005 5.83402L13.9997 6.65363Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                           
                          </span>

                        
                          

                          <span className='count'>{wishlist ? wishlist.length : '0'}</span>
                          
                        </div>
                      </Link>


                      <div className="love cart">
                        <div className="click" data-name="cart-dropdown" onClick={handleCartClick}>
                        </div>
                        <span>
                          <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99967 4.66536H20.9997C23.577 4.66536 25.6663 6.7547 25.6663 9.33203V15.1654C25.6663 17.7427 23.577 19.832 20.9997 19.832H11.6663C9.08901 19.832 6.99967 17.7427 6.99967 15.1654V4.66536ZM6.99967 4.66536C6.99967 3.3767 5.95501 2.33203 4.66634 2.33203H2.33301" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.833 23.918C12.833 24.8845 12.0495 25.668 11.083 25.668C10.1165 25.668 9.33301 24.8845 9.33301 23.918C9.33301 22.9515 10.1165 22.168 11.083 22.168C12.0495 22.168 12.833 22.9515 12.833 23.918Z" strokeWidth="1.5" />
                            <path d="M23.333 23.918C23.333 24.8845 22.5495 25.668 21.583 25.668C20.6165 25.668 19.833 24.8845 19.833 23.918C19.833 22.9515 20.6165 22.168 21.583 22.168C22.5495 22.168 23.333 22.9515 23.333 23.918Z" strokeWidth="1.5" />
                            <path d="M16.333 9.33203L16.333 15.1654" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.2503 12.25L13.417 12.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>

                        {/* Shopping Cart */}

                        <div className={`cart-dropdown header-dropdown ${cart ? 'active-dropdown' : ''}`} id="cart-dropdown">
                          <div className="cart-dropdown-text">
                            <div className="text">
                              <h3>My Cart</h3>
                            </div>
                            <div className="cart-dropdown-btn">
                              <button type="button" className="close-btn" aria-label="Close" onClick={handleCartClick}>
                                <span>
                                  <svg
                                    width={10}
                                    height={10}
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.24309 0.757865L0.757812 9.24315M9.24309 9.24309L0.757812 0.757812"
                                      stroke="#9EA3AE"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="cart-dropdown-item-box">
                            <div className="cart-dropdown-item">
                              <div className="cart-dropdown-item-img">
                                <img
                                  src="https://reservq.minionionbd.com/uploads/custom-images/fish-tacos-2024-01-31-11-19-33-7126.png"
                                  alt="img"
                                />
                              </div>
                              <div className="cart-dropdown-item-text">
                                <a href="https://reservq.minionionbd.com/menu/fish-tacos">
                                  <h3>Fish Tacos</h3>
                                </a>
                                <p>$75</p>
                              </div>
                            </div>
                            <div className="cart-dropdown-inner">
                              <div className="cart-dropdown-inner-btn">
                                <a href="https://reservq.minionionbd.com/cart/remove/13">
                                  <span>
                                    <svg
                                      width={18}
                                      height={18}
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M3.75 6V13.5C3.75 15.1569 5.09315 16.5 6.75 16.5H11.25C12.9069 16.5 14.25 15.1569 14.25 13.5V6M10.5 8.25V12.75M7.5 8.25L7.5 12.75M12 3.75L10.9453 2.16795C10.6671 1.75065 10.1988 1.5 9.69722 1.5H8.30278C7.80125 1.5 7.3329 1.75065 7.0547 2.16795L6 3.75M12 3.75H6M12 3.75H15.75M6 3.75H2.25"
                                        stroke="#F01543"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="cart-dropdown-sub-total">
                            <div className="cart-dropdown-sub-total-item">
                              <div className="text">
                                <h3>Sub Total</h3>
                              </div>
                              <div className="text">
                                <h3>
                                  <a href="javascript:;">$75</a>
                                </h3>
                              </div>
                            </div>
                            <div className="cart-dropdown-sub-total-btn" onClick={handleCartClick}>
                              <Link
                                to="cartlist"
                                className="main-btn-four"
                              >
                                Go to Cart
                              </Link>
                            </div>
                          </div>
                        </div>





                      </div>
                      {/* login korar por aita show hobe */}

                      {customer && (

                        <div className="love user" style={{ marginLeft: '15px' }} onClick={handleProfile} ref={profileRef}>
                          <div
                            className="click"
                            data-name="profile-dropdown"
                          >
                          </div>



                          <span style={{ background: 'white' }}>
                            <img
                              alt="img"
                              src={customer.avatar}

                            />
                          </span>


                          <div
                            className={`profile-dropdown header-dropdown ${profile ? 'active-dropdown' : ''} `}
                            id="profile-dropdown"
                            style={{ border: '1px solid gainsboro' }}
                          >
                            <div className="profile-dropdown-img">
                              <img
                                alt="img"
                                src={customer.avatar}
                              />
                            </div>
                            <div className="profile-dropdown-text">
                              <h4>
                                {customer.name}
                              </h4>
                              <p>
                                User Id #{customer.id}
                              </p>
                            </div>
                            <div className="profile-dropdown-menu">
                              <ul>
                                <li>
                                  <Link to="/user/dashboard">
                                    <span>
                                      <svg
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <ellipse
                                          cx="12"
                                          cy="17.5"
                                          rx="7"
                                          ry="3.5"
                                          strokeLinejoin="round"
                                          strokeWidth="1.5"
                                        />
                                        <circle
                                          cx="12"
                                          cy="7"
                                          r="4"
                                          strokeLinejoin="round"
                                          strokeWidth="1.5"
                                        />
                                      </svg>
                                    </span>
                                    Dashboard
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="profile-dropdown-menu profile-dropdown-menu-two " onClick={handleClick}>
                              <ul>
                                <li>
                                  <Link to="#" >
                                    <span>
                                      <svg
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M20 14L21.2929 12.7071C21.6834 12.3166 21.6834 11.6834 21.2929 11.2929L20 10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1.5"
                                        />
                                        <path
                                          d="M21 12H13M6 20C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4M6 20C8.20914 20 10 18.2091 10 16V8C10 5.79086 8.20914 4 6 4M6 20H14C16.2091 20 18 18.2091 18 16M6 4H14C16.2091 4 18 5.79086 18 8"
                                          strokeLinecap="round"
                                          strokeWidth="1.5"
                                        />
                                      </svg>
                                    </span>
                                    Logout
                                  </Link>
                                </li>
                              </ul>
                            </div>



                          </div>
                        </div>




                      )}





                    </div>
                  </div>


                  {!customer && (

                    <div className="nav-login-btn-main">
                      <Link to="/login" className="main-btn-four custom-btn">
                        Sign In
                      </Link>
                      <a href="https://reservq.minionionbd.com/register" className="main-btn">
                        Sign Up
                      </a>
                    </div>


                  )}










                </div>
              </div>
            </div>
          </div>
        </nav>

      </header>



      <aside id="offcanvas-nav" className=''>
        <nav class="m-nav">
          <button id="nav-cls-btn">


            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="logo">
            <a href="https://reservq.minionionbd.com">
              <img src="https://reservq.minionionbd.com/uploads/website-images/stiky-logo-2023-10-29-09-42-50-6269.png"
                alt="logo" />
            </a>
          </div>
          <ul class="nav-links">
            <li>
              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <a href="https://reservq.minionionbd.com/menu">
                Menu
              </a>
            </li>
            <li>
              <a href="https://reservq.minionionbd.com/about-us">
                About Us
              </a>
            </li>
            <li>
              <a href="https://reservq.minionionbd.com/contact-us">
                Contact
              </a>
            </li>
            <li>
              <a href="https://reservq.minionionbd.com/blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </aside>

    </>




  )
}

export default Header