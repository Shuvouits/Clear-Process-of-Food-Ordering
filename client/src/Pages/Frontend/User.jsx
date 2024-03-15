import React from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import Sidebar from '../../components/Frontend/user/Sidebar'
import Dashboard from '../../components/Frontend/user/Dashboard'

function User() {
    return (
        <main>
            <InnerBanner />
            <section className="dashboard">
                <div className="container">
                    <div className="row">

                       <Sidebar />

                        <Dashboard />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default User