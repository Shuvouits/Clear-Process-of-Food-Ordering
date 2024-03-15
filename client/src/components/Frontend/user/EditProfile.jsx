import React from 'react'

function EditProfile() {
    return (
        <div className="col-lg-9  col-md-8">
            <div className="dashboard-item-taitel">
                <h4>Dashboard</h4>
                <p>Edit Profile</p>
            </div>
            <form
                action="https://reservq.minionionbd.com/user/profile/update/70"
                method="POST"
                encType="multipart/form-data"
            >
                <input
                    type="hidden"
                    name="_token"
                    defaultValue="fWyjlQbNEZ8pIcUaJ0fNt4MgZjUHTDlQ7xAmJxDk"
                />
                <div className="dashboard-edit-profile-from">
                    <div className="shopping-cart-new-address-from">
                        <div className="shopping-cart-new-address-from-item">
                            <div className="shopping-cart-new-address-from-inner">
                                <label className="form-label">New Avatar</label>
                                <input
                                    type="file"
                                    name="image"
                                    id="default"
                                    className="border p-2"
                                />
                            </div>
                        </div>
                        <div className="shopping-cart-new-address-from-item">
                            <div className="shopping-cart-new-address-from-inner">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue="John Doe"
                                    className="form-control"
                                    id="exampleFormControlInput11"
                                />
                            </div>
                        </div>
                        <div className="shopping-cart-new-address-from-item">
                            <div className="shopping-cart-new-address-from-inner">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue="user@gmail.com"
                                    readOnly=""
                                    className="form-control"
                                    id="exampleFormControlInput8"
                                />
                            </div>
                            <div className="shopping-cart-new-address-from-inner">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    defaultValue="123-343-4444"
                                    className="form-control"
                                    id="exampleFormControlInput12"
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
                                    id="exampleFormControlInput13"
                                    cols={30}
                                    rows={10}
                                    defaultValue={
                                        "                          California, USA\n                        "
                                    }
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