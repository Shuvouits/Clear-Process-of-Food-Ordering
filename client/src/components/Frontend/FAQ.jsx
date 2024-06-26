import React, { useState } from 'react'

function FAQ() {

  const [faqs, setFaqs] = useState([
    {
      question: "Can I make a reservation online?",
      answer: "Yes, you can make a reservation online through our website.",
      isOpen: false
    },
    {
      question: "What type of cuisine does your restaurant offer?",
      answer: "We offer a variety of cuisines including Italian, Asian fusion, and Mediterranean.",
      isOpen: false
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Yes, we have a wide range of vegetarian dishes available on our menu.",
      isOpen: false
    }
  ]);

  const toggleFaq = index => {
    setFaqs(prevFaqs => (
      prevFaqs.map((faq, i) => (
        i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
      ))
    ));
  };




  return (
    <>
    
    <section class="faq s-padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12" data-aos="fade-left">
              <div class="faq-head">
                <h2>
                  Foodie FAQ: Your Culinary Queries Answered
                </h2>
              </div>

             {/* <div class="faq-main">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1">
                      <button class="accordion-button " type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        Can I make a reservation online?
                      </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse show" aria-labelledby="heading1"
                    data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>
                          We offer [insert type of cuisine, e.g., Italian, Asian fusion, Mediterranean]
                          cuisine that combines traditional flavors with modern twists
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        What type of cuisine does your restaurant offer?
                      </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
                    data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>
                          We offer [insert type of cuisine, e.g., Italian, Asian fusion, Mediterranean]
                          cuisine that combines traditional flavors with modern twists
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  </div>  */}  


<div className="faq-main">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button className={`accordion-button${faq.isOpen ? '' : ' collapsed'}`} type="button" onClick={() => toggleFaq(index)} aria-expanded={faq.isOpen ? 'true' : 'false'}>
              {faq.question}
            </button>
          </h2>
          <div id={`collapse${index}`} className={`accordion-collapse${faq.isOpen ? ' show' : ' collapse'}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>


            </div>
            <div class="col-lg-6 ">
              <div class="row">
                <div class="col-lg-8">
                  <div class="faq-img  ">
                    <img src="https://reservq.minionionbd.com/uploads/website-images/image1-2023-10-22-07-47-33-8080.png"
                    class="w-100" alt="thumb"/>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="faq-img">
                    <div class="faq-img-two">
                      <img src="https://reservq.minionionbd.com/uploads/website-images/image3-2024-01-22-05-48-54-6673.png"
                      alt="thumb" />
                      <div class="faq-img-overlay">
                        <div class="faq-img-overlay-text">
                          <h2>
                            <span>
                              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 26.1844C10.3275 26.1844 8.9625 27.4919 8.9625 29.0922C8.9625 30.6926 10.3275 32 12 32C13.6725 32 15.0375 30.6926 15.0375 29.0922C15.0375 27.499 13.6725 26.1844 12 26.1844ZM3.0375 0C1.365 0 0 1.30743 0 2.90779C0 4.50815 1.365 5.81558 3.0375 5.81558C4.71 5.81558 6.075 4.50815 6.075 2.90779C6.075 1.30743 4.71 0 3.0375 0ZM3.0375 8.73052C1.365 8.73052 0 10.038 0 11.6383C0 13.2387 1.365 14.5461 3.0375 14.5461C4.71 14.5461 6.075 13.2387 6.075 11.6383C6.075 10.038 4.71 8.73052 3.0375 8.73052ZM3.0375 17.461C1.365 17.461 0 18.7685 0 20.3688C0 21.9692 1.365 23.2766 3.0375 23.2766C4.71 23.2766 6.075 21.9692 6.075 20.3688C6.075 18.7685 4.71 17.461 3.0375 17.461ZM20.9625 5.82273C22.635 5.82273 24 4.51529 24 2.91494C24 1.31458 22.635 0 20.9625 0C19.29 0 17.925 1.30743 17.925 2.90779C17.925 4.50815 19.29 5.82273 20.9625 5.82273ZM12 17.461C10.3275 17.461 8.9625 18.7685 8.9625 20.3688C8.9625 21.9692 10.3275 23.2766 12 23.2766C13.6725 23.2766 15.0375 21.9692 15.0375 20.3688C15.0375 18.7685 13.6725 17.461 12 17.461ZM20.9625 17.461C19.29 17.461 17.925 18.7685 17.925 20.3688C17.925 21.9692 19.29 23.2766 20.9625 23.2766C22.635 23.2766 24 21.9692 24 20.3688C24 18.7685 22.635 17.461 20.9625 17.461ZM20.9625 8.73052C19.29 8.73052 17.925 10.038 17.925 11.6383C17.925 13.2387 19.29 14.5461 20.9625 14.5461C22.635 14.5461 24 13.2387 24 11.6383C24 10.038 22.635 8.73052 20.9625 8.73052ZM12 8.73052C10.3275 8.73052 8.9625 10.038 8.9625 11.6383C8.9625 13.2387 10.3275 14.5461 12 14.5461C13.6725 14.5461 15.0375 13.2387 15.0375 11.6383C15.0375 10.038 13.6725 8.73052 12 8.73052ZM12 0C10.3275 0 8.9625 1.30743 8.9625 2.90779C8.9625 4.50815 10.3275 5.81558 12 5.81558C13.6725 5.81558 15.0375 4.50815 15.0375 2.90779C15.0375 1.30743 13.6725 0 12 0Z"
                                fill="white" />
                              </svg>
                            </span>
                            235+
                          </h2>
                          <h4>
                            Success
                            <br></br>
                            Event
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="faq-img img-mt">
                    <div class="faq-img-two">
                      <img src="https://reservq.minionionbd.com/uploads/website-images/image4-2024-01-22-05-51-26-7978.png"
                      alt="thumb" />
                      <div class="faq-img-overlay faq-img-overlay-two ">
                        <div class="faq-img-overlay-text">
                          <h2>
                            <span>
                              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 26.1844C10.3275 26.1844 8.9625 27.4919 8.9625 29.0922C8.9625 30.6926 10.3275 32 12 32C13.6725 32 15.0375 30.6926 15.0375 29.0922C15.0375 27.499 13.6725 26.1844 12 26.1844ZM3.0375 0C1.365 0 0 1.30743 0 2.90779C0 4.50815 1.365 5.81558 3.0375 5.81558C4.71 5.81558 6.075 4.50815 6.075 2.90779C6.075 1.30743 4.71 0 3.0375 0ZM3.0375 8.73052C1.365 8.73052 0 10.038 0 11.6383C0 13.2387 1.365 14.5461 3.0375 14.5461C4.71 14.5461 6.075 13.2387 6.075 11.6383C6.075 10.038 4.71 8.73052 3.0375 8.73052ZM3.0375 17.461C1.365 17.461 0 18.7685 0 20.3688C0 21.9692 1.365 23.2766 3.0375 23.2766C4.71 23.2766 6.075 21.9692 6.075 20.3688C6.075 18.7685 4.71 17.461 3.0375 17.461ZM20.9625 5.82273C22.635 5.82273 24 4.51529 24 2.91494C24 1.31458 22.635 0 20.9625 0C19.29 0 17.925 1.30743 17.925 2.90779C17.925 4.50815 19.29 5.82273 20.9625 5.82273ZM12 17.461C10.3275 17.461 8.9625 18.7685 8.9625 20.3688C8.9625 21.9692 10.3275 23.2766 12 23.2766C13.6725 23.2766 15.0375 21.9692 15.0375 20.3688C15.0375 18.7685 13.6725 17.461 12 17.461ZM20.9625 17.461C19.29 17.461 17.925 18.7685 17.925 20.3688C17.925 21.9692 19.29 23.2766 20.9625 23.2766C22.635 23.2766 24 21.9692 24 20.3688C24 18.7685 22.635 17.461 20.9625 17.461ZM20.9625 8.73052C19.29 8.73052 17.925 10.038 17.925 11.6383C17.925 13.2387 19.29 14.5461 20.9625 14.5461C22.635 14.5461 24 13.2387 24 11.6383C24 10.038 22.635 8.73052 20.9625 8.73052ZM12 8.73052C10.3275 8.73052 8.9625 10.038 8.9625 11.6383C8.9625 13.2387 10.3275 14.5461 12 14.5461C13.6725 14.5461 15.0375 13.2387 15.0375 11.6383C15.0375 10.038 13.6725 8.73052 12 8.73052ZM12 0C10.3275 0 8.9625 1.30743 8.9625 2.90779C8.9625 4.50815 10.3275 5.81558 12 5.81558C13.6725 5.81558 15.0375 4.50815 15.0375 2.90779C15.0375 1.30743 13.6725 0 12 0Z"
                                fill="white" />
                              </svg>
                            </span>
                            365+
                          </h2>
                          <h4>
                            Success
                            <br></br>
                            Event
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="faq-img  ">
                    <div class="img-animetion">
                      <img src="https://reservq.minionionbd.com/uploads/website-images/image2-2023-10-22-07-47-33-1651.png"
                      alt="thumb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </>
  )
}

export default FAQ