import React from 'react'

function AddTimeSlot() {
    return (
        <section className="sherah-adashboard sherah-show">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sherah-body">
                            {/* Dashboard Inner */}
                            <div className="sherah-dsinner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sherah-breadcrumb mg-top-30">
                                            <h2 className="sherah-breadcrumb__title">Create Time Slot</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <a href="https://reservq.minionionbd.com/admin-dashboard">
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li className="active">
                                                    <a href="">Create Time Slot</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sherah-page-inner sherah-border sherah-basic-page sherah-default-bg mg-top-25 p-0">
                                    <form
                                        className="sherah-wc__form-main"
                                        action="https://reservq.minionionbd.com/timeslot"
                                        method="POST"
                                        encType="m"
                                        ultipart=""
                                        form-data=""
                                    >
                                        <input
                                            type="hidden"
                                            name="_token"
                                            defaultValue="QbunGZqg8VhXTZvm9qzI00RWf9a7wExq9aRuc4zP"
                                        />
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Product Info */}
                                                <div className="product-form-box sherah-border mg-top-30">
                                                    <h4 className="form-title m-0">Basic Information</h4>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Slot Name *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        defaultValue=""
                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        id="slot"
                                                                        name="slot"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Product Info */}
                                            </div>
                                        </div>
                                        <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                                            <button
                                                type="submit"
                                                className="sherah-btn sherah-btn__primary"
                                            >
                                                Submit
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

    )
}

export default AddTimeSlot