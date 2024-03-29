import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Popular() {

  //Product Data
  const [product, setProduct] = useState([])
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



  return (
    <>

      <section className="popular s-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="popular-head">
                <h2>
                  Most Popular Items
                </h2>
              </div>
            </div>
          </div>

          <div className="row gap-30 popular-item-box-mt">

            {product.filter( item=> item.populer === 'Yes').map((item) => (
              
              <div className="col-lg-4 res-popular-mt-30px" data-aos="fade-up">
                <div className="popular-item-box row-card">
                  <div className="popular-item-box-img">
                    <img src={item.avatar} alt="thumb" />
                    <div className="popular-item-box-img-overlay">
                    </div>
                  </div>
                  <div className="popular-inner-box">
                    <div className="popular-item-box-text">
                      <Link to="#">
                        <h3 className="line-clamp-1">
                          {item.productName}
                        </h3>
                      </Link>
                    </div>

                    {item.specification.map((data) => (

                      <div className="popular-inner-item">
                        <div className="icon">
                          <span>
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_304_21999)">
                                <path d="M6.66699 10.0013L8.77923 11.9023C9.13881 12.2259 9.69748 12.1764 9.99449 11.7945L13.3337 7.5013M10.0003 18.3346C14.6027 18.3346 18.3337 14.6037 18.3337 10.0013C18.3337 5.39893 14.6027 1.66797 10.0003 1.66797C5.39795 1.66797 1.66699 5.39893 1.66699 10.0013C1.66699 14.6037 5.39795 18.3346 10.0003 18.3346Z" stroke="#FE724C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="text">
                          <h5>
                            {data.sname}
                          </h5>
                        </div>
                      </div>


                    ))}






                    <div className="popular-inner-item-btm">
                      <div className="text">
                        <h3>
                          $ {item.price}
                        </h3>
                      </div>
                      <div className="popular-inner-item-btn">
                        <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" className="main-btn-five">
                          <span>
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              </path>
                              <path d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z" strokeWidth="1.5">
                              </path>
                              <path d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" strokeWidth="1.5">
                              </path>
                              <path d="M14 8L14 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              </path>
                              <path d="M16.5 10.5L11.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              </path>
                            </svg>
                          </span>
                          Add
                        </a>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            ))}




          </div>
        </div>
      </section>

    </>
  )
}

export default Popular