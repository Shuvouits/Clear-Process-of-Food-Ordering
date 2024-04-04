import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

function Cart({cartModal, handleCart, productId }) {
  const { customer } = useSelector((state) => ({ ...state }))
  const [product, setProduct] = useState({})

  

  const allProduct = async () => {

    try {
      const res = await fetch(`http://localhost:8000/all-product`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const data = await res.json();

      setProduct(data);

    } catch (error) {
      return (error)

    }

  };

  useEffect(() => {
    allProduct();
  }, []);

  const [optional, setOptional] = useState({})


  const allOptional = async () => {

    try {
      const res = await fetch(`http://localhost:8000/all-optional`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      const data = await res.json();

      setOptional(data);

    } catch (error) {
      return (error)

    }

  };

  useEffect(() => {
    allOptional();
  }, []);


  const [productSize, setProductSize] = useState([])

  const handleProductSize = (e) => {
    const selectedSize = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {

      setProductSize(prevSizes => [...prevSizes, selectedSize]);
    } else {

      setProductSize(prevSizes => prevSizes.filter(size => size !== selectedSize));
    }
  };

  const [optData, setOptData] = useState([])

  const handleOptional = (e) => {
    const selectedOption = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      // Add the selected option to the array
      setOptData(prevOption => [...prevOption, selectedOption]);
    } else {
      // Remove the unselected option from the array
      setOptData(prevOption => prevOption.filter(option => option !== selectedOption));
    }
  };


  const [formData, setFormData] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault();
   

    const updatedFormData = {
      ...formData,
      productSize : productSize,
      optData : optData
    }

    console.log(updatedFormData)
    handleCart();


  }


  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        handleCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);






  return (
    <>
      <section className='shopping-cart' ref={cartRef}>

        {cartModal && product.filter(item => item._id === productId).map((item) => (


          <div
            className={`modal ${cartModal ? 'fade show' : ''}`}
            id="exampleModal6"
            tabIndex={-1}
            style={{ display: cartModal ? 'block' : '', paddingRight: 17 }}
            aria-modal="true"
            role="dialog"

           

          >
            <div className="modal-dialog" ref={cartRef}>
              <div className="modal-content" style={{ border: '1px solid gainsboro' }}>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCart}
                >

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <form onSubmit={handleSubmit}>


                  <div className="modal-body">
                    <div className="modal-body-text">
                      <h3> {item.productName}</h3>
                    </div>
                    <div className="modal-body-item-box">
                      <div className="together-box-text">
                        <h5>Select Size</h5>
                      </div>


                      {item.productSize.map((data, index) => (
                        <div className="together-box-item" key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`size_${index}`}
                              value={data.id} // Ensure data.id is unique for each size
                              checked={productSize.includes(data.id)} // Check if the size is included in the selected sizes array
                              onChange={handleProductSize}
                            />
                            <label className="form-check-label" htmlFor={`size_${index}`}>
                              {data.size}
                            </label>
                          </div>
                          <div className="form-check-btn">
                            <div className="grid">{data.price} Tk.</div>
                          </div>
                        </div>
                      ))}










                      <div className="modal-body-item-box-text">
                        <h5>Select Addon (Optional)</h5>
                      </div>


                      {optional.filter(option => option.status === 'Active').map((option, index) => (
                        <div className="together-box-item" key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`option_${index}`}
                              value={option._id}
                              checked={optData.includes(option._id)} // Check if the option is included in the selected options array
                              onChange={handleOptional}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`option_${index}`}
                            >
                              {option.name}
                            </label>
                          </div>
                          <div className="form-check-btn">
                            <div className="form-check-btn">
                              <div className="grid">{option.price} Tk.</div>
                            </div>
                          </div>
                        </div>
                      ))}




                      <div className="together-box-inner-btn-btm">
                        <button type="submit" className="main-btn-six" tabIndex={-1}>
                          <span>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M14 8L14 13"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M16.5 10.5L11.5 10.5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}













      </section>

    </>

  )
}

export default Cart