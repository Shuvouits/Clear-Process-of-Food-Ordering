import React, { useState } from 'react'

function MobileHeader({handleClick, sidebar}) {
   
    return (
        <>

            <header className="mobile-header">
                <div className="container-full">
                    <div className="mobile-header__container">
                        <div className="p-left">
                            <div className="logo">
                                <a href="/">
                                    <img src="https://reservq.minionionbd.com/uploads/website-images/stiky-logo-2023-10-29-09-42-50-6269.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="p-right">
                            <button id="nav-opn-btn" onClick={handleClick}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <aside id="offcanvas-nav" className={sidebar ? 'open' : ''}>
                <nav className="m-nav">
                    <button id="nav-cls-btn" onClick={handleClick}>
                       
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="logo">
                        <a href="https://reservq.minionionbd.com">
                            <img src="https://reservq.minionionbd.com/uploads/website-images/stiky-logo-2023-10-29-09-42-50-6269.png" alt="logo" />
                        </a>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="https://reservq.minionionbd.com">
                                Home
                            </a>
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

export default MobileHeader