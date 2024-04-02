import React from 'react'
import InnerBanner from '../../../components/Frontend/InnerBanner'
import Sidebar from '../../../components/Frontend/user/Sidebar'
import Resturent from '../../../components/Frontend/Resturent'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Frontend/Header'
import Footer from '../../../components/Frontend/Footer'



function UserLayout() {
    return (

        <>
            
            <Header />

            <main>
                <InnerBanner />

                <section className="dashboard">
                    <div className="container">
                        <div className="row">


                            <Sidebar />

                            <Outlet />
                        </div>
                    </div>
                </section>
                
                <Resturent />

            </main>
            <Footer />
        </>

    )
}

export default UserLayout