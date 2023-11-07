import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <>
      <div class='container body contact-us'>
            <div class='container-fluid'>
                 <section class="contact_us">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <div class="contact_inner">
                                        <div class="row">
                                            <div class="col-md-10">
                                                <div class="contact_form_inner">
                                                    <div class="contact_field">
                                                        <h3 class="gh1">Contact Us</h3>
                                                        <form action="https://formsubmit.co/sgurjot0001@yahoo.com" method="POST">
                                                        <input type="text" class="form-control form-group" placeholder="Name" required/>
                                                        <input type="email" class="form-control form-group" placeholder="Email" required/>
                                                        <input type="number" class="form-control form-group" placeholder="Phone Number" required/>
                                                        <textarea style={{height:"8rem"}} class="form-control form-group" placeholder="Message" required></textarea>
                                                        <button class="contact_form_submit" type='submit'>Send</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="right_conatct_social_icon d-flex align-items-end">
                                                <div class="socil_item_inner d-flex">
                                                    <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="contact_info_sec">
                                            <h4>Contact Info</h4>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-headset"></i>
                                                <span>Guru Nanak dev University</span>
                                            </div>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-headset"></i>
                                                <span>+91 9999 99999</span>
                                            </div>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-envelope-open-text"></i>
                                                <span>sgurjot0001@yahoo.com</span>
                                            </div>
                                            <div class="d-flex info_single align-items-center">
                                                <i class="fas fa-map-marked-alt"></i>
                                                <span>For any inquiries or feedback regarding our products or services, please don't hesitate to contact Us. Our dedicated customer service team is available to assist you with any questions you may have. You can reach us by phone, email, or through the contact form on our website.</span>
                                            </div>
                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <div/> 

                </div>

      </div>
    </>
  )
}

export default Contact