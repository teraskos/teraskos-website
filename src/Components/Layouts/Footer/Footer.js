import React, { Fragment, useEffect } from 'react'
import LogoLight from './../../../Assets/Images/logo-light.png';
import AmericanEx from './../../../Assets/Images/payments/american-ex.png';
import Discover from './../../../Assets/Images/payments/discover.png'
import MasterCard from './../../../Assets/Images/payments/master-card.png';
import Paypal2 from './../../../Assets/Images/payments/paypal.png';
import Visa from './../../../Assets/Images/payments/visa.png';

function Footer() {
    useEffect(() => {
        window.$(window).scroll(function () {
            if (window.$(this).scrollTop() > 100) {
                window.$('.back-to-top').fadeIn();
            } else {
                window.$('.back-to-top').fadeOut();
            }
        });
        
        window.$('.back-to-top').click(function () {
            window.$("html, body").animate({ scrollTop: 0 }, 3000);
            return false;
        });
    }, [])

    return (
        <Fragment>
            <a href="#" class="btn btn-icon btn-soft-primary back-to-top"><i data-feather="arrow-up" class="icons"></i></a>

            {/* <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                            <a href="#" class="logo-footer">
                                <img src={LogoLight} height="24" alt="" />
                            </a>
                            <p class="mt-4">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <ul class="list-unstyled social-icon social mb-0 mt-4">
                                <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h4 class="text-light footer-head">Company</h4>
                            <ul class="list-unstyled footer-list mt-4">
                                <li><a href="page-aboutus.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> About us</a></li>
                                <li><a href="page-services.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Services</a></li>
                                <li><a href="page-team.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Team</a></li>
                                <li><a href="page-pricing.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Pricing</a></li>
                                <li><a href="page-work-modern.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Project</a></li>
                                <li><a href="page-jobs.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Careers</a></li>
                                <li><a href="page-blog-grid.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Blog</a></li>
                                <li><a href="auth-cover-login.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Login</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h4 class="text-light footer-head">Usefull Links</h4>
                            <ul class="list-unstyled footer-list mt-4">
                                <li><a href="page-terms.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Terms of Services</a></li>
                                <li><a href="page-privacy.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Privacy Policy</a></li>
                                <li><a href="documentation.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Documentation</a></li>
                                <li><a href="changelog.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Changelog</a></li>
                                <li><a href="components.html" class="text-foot"><i class="mdi mdi-chevron-right mr-1"></i> Components</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h4 class="text-light footer-head">Newsletter</h4>
                            <p class="mt-4">Sign up and receive the latest tips via email.</p>
                            <form>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="foot-subscribe form-group position-relative">
                                            <label>Write your email <span class="text-danger">*</span></label>
                                            <i data-feather="mail" class="fea icon-sm icons"></i>
                                            <input type="email" name="email" id="emailsubscribe" class="form-control pl-5 rounded" placeholder="Your email : " required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="submit" id="submitsubscribe" name="send" class="btn btn-soft-primary btn-block" value="Subscribe" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer> */}
            <footer class="footer footer-bar">
                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <div class="text-sm-left">
                                <p class="mb-0">© 2020 Teraskos. Design with <i class="mdi mdi-heart text-danger"></i> by <a href="http://www.shreethemes.in/" target="_blank" class="text-reset">Terask</a>.</p>
                            </div>
                        </div>

                        <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul class="list-unstyled text-sm-right mb-0">
                                <li class="list-inline-item"><a href="javascript:void(0)"><img src={AmericanEx} class="avatar avatar-ex-sm" title="American Express" alt="" /></a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)"><img src={Discover} class="avatar avatar-ex-sm" title="Discover" alt="" /></a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)"><img src={MasterCard} class="avatar avatar-ex-sm" title="Master Card" alt="" /></a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)"><img src={Paypal2} class="avatar avatar-ex-sm" title="Paypal" alt="" /></a></li>
                                <li class="list-inline-item"><a href="javascript:void(0)"><img src={Visa} class="avatar avatar-ex-sm" title="Visa" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;