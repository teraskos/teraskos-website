import React, { Fragment, useEffect } from 'react'
import Header from './Components/Header'

import SEO_SVG from './../../../Assets/Images/illustrator/SEO_SVG.svg';
import Mobile_notification_SVG from './../../../Assets/Images/illustrator/Mobile_notification_SVG.svg';
import Amazon from './../../../Assets/Images/client/amazon.svg';
import Google from './../../../Assets/Images/client/google.svg';
import Lenovo from './../../../Assets/Images/client/lenovo.svg';
import Paypal from './../../../Assets/Images/client/paypal.svg';
import Shopify from './../../../Assets/Images/client/shopify.svg';
import Spotify from './../../../Assets/Images/client/spotify.svg';

function Index() {
    
    useEffect(() => {
        window.feather.replace()
        
        window.$('#customer-testi').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }, [])
    
    return (
        <Fragment>
            <Header />

            {/* How It Works */}
            <section class="section bg-light border-bottom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <div class="section-title mb-4 pb-2">
                                <h4 class="title mb-4">How It Work ?</h4>
                                <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6 mt-4 pt-2">
                            <img src={SEO_SVG} alt="" />
                        </div>

                        <div class="col-lg-7 col-md-6 mt-4 pt-2">
                            <div class="section-title ml-lg-5">
                                <h4 class="title mb-4">Change the way you build websites</h4>
                                <p class="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                <ul class="list-unstyled text-muted">
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Our Talented & Experienced Marketing Agency</li>
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <a href="javascript:void(0)" class="mt-3 h6 text-primary">Find Out More <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-100 mt-60">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="section-title">
                                <h4 class="title mb-4">Speed up your development <br /> with <span class="text-primary">Landrick.</span></h4>
                                <p class="text-muted">Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>
                                <ul class="list-unstyled text-muted">
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Our Talented & Experienced Marketing Agency</li>
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Create your own skin to match your brand</li>
                                </ul>
                                <a href="javascript:void(0)" class="mt-3 h6 text-primary">Find Out More <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-6 order-1 order-md-2">
                            <div class="card rounded border-0 shadow ml-lg-5">
                                <div class="card-body">
                                    <img src={Mobile_notification_SVG} alt="" />

                                    <div class="content mt-4 pt-2">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Name : <span class="text-danger">*</span></label>
                                                        <i data-feather="user" class="fea icon-sm icons"></i>
                                                        <input type="text" class="form-control pl-5" placeholder="Name" name="name" required="" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Email : <span class="text-danger">*</span></label>
                                                        <i data-feather="mail" class="fea icon-sm icons"></i>
                                                        <input type="email" class="form-control pl-5" placeholder="Email" name="email" required="" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Password : <span class="text-danger">*</span></label>
                                                        <i data-feather="key" class="fea icon-sm icons"></i>
                                                        <input type="password" class="form-control pl-5" placeholder="Password" required="" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-12 mt-2 mb-0">
                                                    <button class="btn btn-primary btn-block">Download</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimoni */}
            <section class="section pb-0">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <div class="section-title mb-4 pb-2">
                                <h6>We believe in building each other and hence</h6>
                                <h4 class="title mb-4">Work with some amazing partners</h4>
                                <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 mt-4 pt-2">
                            <div id="customer-testi" class="owl-carousel owl-theme">
                                <div class="card customer-testi text-center border rounded mx-2">
                                    <div class="card-body">
                                        <img src={Amazon} class="img-fluid avatar avatar-ex-sm mx-auto" alt="" />
                                        <p class="text-muted mt-4">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</p>
                                        <h6 class="text-primary">- Thomas Israel</h6>
                                    </div>
                                </div>
                                <div class="card customer-testi text-center border rounded mx-2">
                                    <div class="card-body">
                                        <img src={Google} class="img-fluid avatar avatar-ex-sm mx-auto" alt="" />
                                        <p class="text-muted mt-4">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                        <h6 class="text-primary">- Carl Oliver</h6>
                                    </div>
                                </div>
                                <div class="card customer-testi text-center border rounded mx-2">
                                    <div class="card-body">
                                        <img src={Lenovo} class="img-fluid avatar avatar-ex-sm mx-auto" alt="" />
                                        <p class="text-muted mt-4">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
                                        <h6 class="text-primary">- Barbara McIntosh</h6>
                                    </div>
                                </div>
                                <div class="card customer-testi text-center border rounded mx-2">
                                    <div class="card-body">
                                        <img src={Paypal} class="img-fluid avatar avatar-ex-sm mx-auto" alt="" />
                                        <p class="text-muted mt-4">" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "</p>
                                        <h6 class="text-primary">- Jill Webb</h6>
                                    </div>
                                </div>
                                <div class="card customer-testi text-center border rounded mx-2">
                                    <div class="card-body">
                                        <img src={Shopify} class="img-fluid avatar avatar-ex-sm mx-auto" alt="" />
                                        <p class="text-muted mt-4">" There is now an abundance of readable dummy texts. These are usually used when a text is required. "</p>
                                        <h6 class="text-primary">- Dean Tolle</h6>
                                    </div>
                                </div>
                                <div class="card customer-testi text-center border rounded mx-2">
                                    <div class="card-body">
                                        <img src={Spotify} class="img-fluid avatar avatar-ex-sm mx-auto" alt="" />
                                        <p class="text-muted mt-4">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "</p>
                                        <h6 class="text-primary">- Christa Smith</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="position-relative">
                <div class="shape overflow-hidden text-light">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* FAQ */}
            <section class="section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="media">
                                <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                                <div class="media-body">
                                    <h5 class="mt-0">How our <span class="text-primary">Landrick</span> work ?</h5>
                                    <p class="answer text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="media">
                                <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                                <div class="media-body">
                                    <h5 class="mt-0"> What is the main process open account ?</h5>
                                    <p class="answer text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12 mt-4 pt-2">
                            <div class="media">
                                <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                                <div class="media-body">
                                    <h5 class="mt-0"> How to make unlimited data entry ?</h5>
                                    <p class="answer text-muted mb-0">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12 mt-4 pt-2">
                            <div class="media">
                                <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                                <div class="media-body">
                                    <h5 class="mt-0"> Is <span class="text-primary">Landrick</span> safer to use with my account ?</h5>
                                    <p class="answer text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center">
                        <div class="col-12 text-center">
                            <div class="section-title">
                                <h4 class="title mb-4">Have Question ? Get in touch!</h4>
                                <p class="text-muted para-desc mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <a href="page-contact-two.html" class="btn btn-primary mt-4"><i class="mdi mdi-phone"></i> Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="position-relative">
                <div class="shape overflow-hidden text-footer">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </Fragment>
    )
}

export default Index