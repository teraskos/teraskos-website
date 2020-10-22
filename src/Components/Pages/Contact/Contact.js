import React, { Fragment, useEffect } from 'react'
import Header from './Components/Header'
import Bitcoin from './../../../Assets/Images/icon/bitcoin.svg'
import Email from './../../../Assets/Images/icon/Email.svg'
import Location from './../../../Assets/Images/icon/location.svg'

function Contact() {
    useEffect(() => {
        window.feather.replace();
    }, [])

    return (
        <Fragment>
            <Header />

            <section class="section pb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card contact-detail text-center border-0">
                                <div class="card-body p-0">
                                    <div class="icon">
                                        <img src={Bitcoin} class="avatar avatar-small" alt="" />
                                    </div>
                                    <div class="content mt-3">
                                        <h4 class="title font-weight-bold">Phone</h4>
                                        <p class="text-muted">Start working with Landrick that can provide everything</p>
                                        <a href="tel:+152534-468-854" class="text-primary">+152 534-468-854</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="card contact-detail text-center border-0">
                                <div class="card-body p-0">
                                    <div class="icon">
                                        <img src={Email} class="avatar avatar-small" alt="" />
                                    </div>
                                    <div class="content mt-3">
                                        <h4 class="title font-weight-bold">Email</h4>
                                        <p class="text-muted">Start working with Landrick that can provide everything</p>
                                        <a href="mailto:contact@example.com" class="text-primary">contact@example.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="card contact-detail text-center border-0">
                                <div class="card-body p-0">
                                    <div class="icon">
                                        <img src={Location} class="avatar avatar-small" alt="" />
                                    </div>
                                    <div class="content mt-3">
                                        <h4 class="title font-weight-bold">Location</h4>
                                        <p class="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" class="video-play-icon h6 text-primary">View on Google map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-100 mt-60">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                            <div class="card shadow rounded border-0">
                                <div class="card-body py-5">
                                    <h4 class="card-title">Get In Touch !</h4>
                                    <div class="custom-form mt-4">
                                        <div id="message"></div>
                                        <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                        <label>Your Name <span class="text-danger">*</span></label>
                                                        <i data-feather="user" class="fea icon-sm icons"></i>
                                                        <input name="name" id="name" type="text" class="form-control pl-5" placeholder="First Name :" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                        <label>Your Email <span class="text-danger">*</span></label>
                                                        <i data-feather="mail" class="fea icon-sm icons"></i>
                                                        <input name="email" id="email" type="email" class="form-control pl-5" placeholder="Your email :" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group position-relative">
                                                        <label>Subject</label>
                                                        <i data-feather="book" class="fea icon-sm icons"></i>
                                                        <input name="subject" id="subject" type="text" class="form-control pl-5" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group position-relative">
                                                        <label>Comments</label>
                                                        <i data-feather="message-circle" class="fea icon-sm icons"></i>
                                                        <textarea name="comments" id="comments" rows="4" class="form-control pl-5" placeholder="Your Message :"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12 text-center">
                                                    <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary btn-block" value="Send Message" />
                                                    <div id="simple-msg"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7 col-md-6 order-1 order-md-2">
                            <div class="card border-0">
                                <div class="card-body p-0">
                                    <img src="images/contact.svg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid mt-100 mt-60">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="card map border-0">
                                <div class="card-body p-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15804.854399118894!2d112.659016!3d-7.976862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6c889ac7452dc3a!2sSMK%20Telkom%20Malang!5e0!3m2!1sen!2sid!4v1599972003334!5m2!1sen!2sid" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact