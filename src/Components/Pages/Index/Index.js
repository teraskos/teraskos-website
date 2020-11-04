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
                                <h4 class="title mb-4">Apa Itu Teraskos?</h4>
                                <p class="text-muted para-desc mb-0 mx-auto">
                                    Teraskos merupakan platform dimana pengguna dapat melihat, menghubungi, membayar, dan 
                                    menyelesaikan segala permasalahan kos-kosan yang dialaminya. Selain itu, Teraskos juga membantu para pemilik kos mendapatkan 
                                    lebih dari 75% <i>occupancy rate </i>keseluruhan kamar kos dan meningkatkan kualitas layanan kos yang dimilikinya.</p>
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
                                <h4 class="title mb-4">Para Penghuni Kos Menunggu Layanan <br />Kos Anda Hadir di <span class="text-primary">Teraskos</span>!</h4>
                                <p class="text-muted">Dapatkan peluang yang lebih besar bersama Teraskos dengan mendekatkan kos-kosan anda ke para penghuni kos dari seluruh Indonesia.
                                                      Adapun keuntungan yang akan anda dapatkan apabila bekerjasama dengan Teraskos adalah: </p>
                                <ul class="list-unstyled text-muted">
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Tidak Repot dalam Mengurus Kos</li>
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Occupancy rate up to 100%</li>
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Memudahkan Pemilik Kos Melayani Penghuni Kos</li>
                                    <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uim uim-check-circle"></i></span>Meningkatkan Profit dan Kualitas Layanan Kos</li>
                                </ul>
                                <div class="mt-4">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4W4pvH43yohJdXSBFUlKX_M8VEZAUyxOeedf6HkDXtQYv0Q/viewform" class="btn btn-outline-primary mt-2">Gabung Sebagai Mitra Kos</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-6 order-1 order-md-2">
                            <div class="card rounded border-0 shadow ml-lg-5">
                                <div class="card-body">
                                    <img src={Mobile_notification_SVG} alt="" />

                                    {/* <div class="content mt-4 pt-2">
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
                                    </div> */}
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
                                    <h5 class="mt-0"> Apa saja layanan yang diberikan <span class="text-primary">Teraskos</span>?</h5>
                                    <p class="answer text-muted mb-0">
                                    Kami memberikan layanan kos-kosan yang terstandardisasi dengan harga terjangkau 
                                    dan fasilitas yang lengkap. Sehingga, calon penghuni kos tidak akan merasa dirugikan, karena kami berusaha untuk 
                                    mengerti dan menyelesaikan masalah yang dialami para penghuni kos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="media">
                                <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                                <div class="media-body">
                                    <h5 class="mt-0"> Apa fasilitas yang diberikan oleh <span class="text-primary">Teraskos</span>?</h5>
                                    <p class="answer text-muted mb-0">
                                        Daftar fasilitas yang kami berikan dapat dilihat di katalog kami atau bisa 
                                        <a href="https://www.instagram.com/teraskos.info/" class="mt-3 h6 text-primary"> klik disini</a>
                                        . Dan fasilitas yang kami berikan merupakan hasil dari riset kami 
                                        untuk memberikan pengalaman yang nyaman dan menyenangkan bagi para penghuni kos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12 mt-4 pt-2">
                            <div class="media">
                                <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                                <div class="media-body">
                                    <h5 class="mt-0"> Berapa biaya kos yang tergabung dalam <span class="text-primary">Teraskos</span>?</h5>
                                    <p class="answer text-muted mb-0">
                                        Untuk biaya kos kami pastikan harganya sudah terjangkau. 
                                        Sebagai contoh, kami memiliki mitra yang menawarkan harga kos mulai dari 
                                        Rp.55.000,-/hari, Rp.140.000,-/3 hari, hingga Rp.180.000,-/minggu. Adapun untuk info biaya kos 
                                        pada mitra lainnya bisa 
                                        <a href="https://www.instagram.com/teraskos.info/" class="mt-3 h6 text-primary"> klik disini</a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-12 mt-4 pt-2">
                            <div class="media">
                                <i data-feather="help-circle" class="fea icon-ex-md text-primary mr-2 mt-1"></i>
                                <div class="media-body">
                                    <h5 class="mt-0">Bagaimana prosedur untuk melakukan pembayaran kos?</h5>
                                    <p class="answer text-muted mb-0">
                                    Untuk kos harian dan mingguan dibayarkan di awal transaksi. Adapun kos bulanan, 
                                    penghuni kos wajib membayar rutin di setiap tanggal 1 s/d 5. Jika pembayaran baru 
                                    dilakukan pada tanggal 5 s/d 10, maka akan dikenakan denda sebesar 20%. Apabila 
                                    penghuni kos tidak memberikan kabar hingga melewati tanggal 10, maka kos yang dihuni
                                    akan dapat disewakan ke orang lain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center">
                        <div class="col-12 text-center">
                            <div class="section-title">
                                <h4 class="title mb-4">Masih memiliki pertanyaan?</h4>
                                <p class="text-muted para-desc mx-auto">
                                    Segera hubungi kami untuk menjawab pertanyaan yang kamu miliki saat ini. Kami akan berusaha untuk menjawabnya.
                                    </p>
                                <a href="https://api.whatsapp.com/send?phone=6285704368756" class="btn btn-primary mt-4"><i class="mdi mdi-phone"></i> Contact us</a>
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