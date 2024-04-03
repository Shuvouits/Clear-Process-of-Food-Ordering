import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';

function ChangePasswordPage() {

  const { customer } = useSelector((state) => ({ ...state }))
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {

      // Make the API request with updated formData
      const res = await fetch('http://localhost:8000/customer-password-change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${customer.token}`,
        },
        body: JSON.stringify(formData),
      });

      console.log(res.status);

      const data = await res.json();



      if (res.status === 400) {

        Swal.fire({
          toast: false,
          animation: true,
          text: `${data.message}`,
          icon: 'error',
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


      }

      if (res.status === 200) {

        Swal.fire({
          toast: false,
          animation: true,
          text: `Your Password Updated Successfully`,
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

        navigate('/user/dashboard')


      }



    } catch (error) {

      console.log(error)

    }

  }


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
             onSubmit={handleSubmit}
            >
             
              <div className="shopping-cart-new-address-from">
                <div className="shopping-cart-new-address-from-item">
                  <div className="shopping-cart-new-address-from-inner">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      onChange={handleChange}
                      required="required"
                      
                    />
                  </div>
                </div>
                <div className="shopping-cart-new-address-from-item">
                  <div className="shopping-cart-new-address-from-inner">
                    <label className="form-label"> New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="shopping-cart-new-address-from-inner">
                    <label className="form-label"> Confirm Password </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      onChange={handleChange}
                      required="required"
                      
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