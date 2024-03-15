import React from 'react'

function ChangePasswordPage() {
  return (
    <>
    <div className="col-lg-9  col-md-8">
  <div className="dashboard-item-taitel">
    <h4>Dashboard</h4>
    <p>Change Password</p>
  </div>
  <div className="col-lg-12">
    <div className="dashboard-edit-profile-from">
      <form
        action="https://reservq.minionionbd.com/user/password/update"
        method="POST"
      >
        <input
          type="hidden"
          name="_token"
          defaultValue="fWyjlQbNEZ8pIcUaJ0fNt4MgZjUHTDlQ7xAmJxDk"
        />{" "}
        <div className="shopping-cart-new-address-from">
          <div className="shopping-cart-new-address-from-item">
            <div className="shopping-cart-new-address-from-inner">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput06"
                name="old_password"
              />
            </div>
          </div>
          <div className="shopping-cart-new-address-from-item">
            <div className="shopping-cart-new-address-from-inner">
              <label className="form-label"> New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="exampleFormControlInput14"
              />
            </div>
            <div className="shopping-cart-new-address-from-inner">
              <label className="form-label"> Confirm Password </label>
              <input
                type="password"
                className="form-control"
                name="password_confirmation"
                id="exampleFormControlInput08"
              />
            </div>
          </div>
          <div className="change-passowerd-btn  ">
            <button type="submit" className="main-btn-four">
              {" "}
              Save Now
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default ChangePasswordPage