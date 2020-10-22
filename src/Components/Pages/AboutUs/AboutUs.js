import React, { Fragment, useEffect } from 'react'
import Header from './Components/Header'
import ArtAndDesign from './../../../Assets/Images/icon/art-and-design.svg';
import SmartPhone from './../../../Assets/Images/icon/smartphone.svg';
import Clock from './../../../Assets/Images/icon/clock.svg';
import Ab01 from './../../../Assets/Images/course/online/ab01.jpg';
import Ab02 from './../../../Assets/Images/course/online/ab02.jpg';
import Ab03 from './../../../Assets/Images/course/online/ab03.jpg';
import Client01 from './../../../Assets/Images/client/01.jpg';

function AboutUs() {

    useEffect(() => {
        window.feather.replace()
    }, [])
    
    return (
        <Fragment>
            <Header />

            <section class="section overflow-hidden bg-light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <div class="section-title mb-4 pb-2">
                                <h4 class="title mb-4">Principle</h4>
                                <p class="text-muted para-desc mx-auto mb-0">Ada beberapa prinsip yang <span class="text-primary font-weight-bold">Teraskos</span> pegang untuk menjaga kualitas dari produk kami sebagai berikut.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-12 mt-4 pt-2">
                            <div class="card text-center rounded border-0">
                                <div class="card-body">
                                    <div class="p-3 bg-light rounded shadow d-inline-block">
                                        <img src={ArtAndDesign} class="avatar avatar-small" alt="" />
                                    </div>
                                    <div class="mt-4">
                                        <h5><a href="javascript:void(0)" class="text-dark">Innovation</a></h5>
                                        <p class="text-muted mt-3 mb-0">Kami akan bekerja keras untuk membuat layanan kami mudah digunakan oleh para user dan memberikan dampak positif dalam kehidupannya. It’s because creative R&D and technology is our DNA.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-12 mt-4 pt-2">
                            <div class="card text-center rounded border-0">
                                <div class="card-body">
                                    <div class="p-3 bg-light rounded shadow d-inline-block">
                                        <img src={Clock} class="avatar avatar-small" alt="" />
                                    </div>
                                    <div class="mt-4">
                                        <h5><a href="javascript:void(0)" class="text-dark">Cozy</a></h5>
                                        <p class="text-muted mt-3 mb-0">Memberikan pengalaman dan perasaan yang nyaman dan relax kepada user adalah kualitas layanan yang kami prioritaskan. Fast and friendly services are our main priority to be given to our valuable customers and partners.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-12 mt-4 pt-2">
                            <div class="card text-center rounded border-0">
                                <div class="card-body">
                                    <div class="p-3 bg-light rounded shadow d-inline-block">
                                        <img src={Clock} class="avatar avatar-small" alt="" />
                                    </div>
                                    <div class="mt-4">
                                        <h5><a href="javascript:void(0)" class="text-dark">Impact</a></h5>
                                        <p class="text-muted mt-3 mb-0">Social & Business Impact adalah tujuan utama kami. Kami berkomitmen menciptakan dampak positif yang signifikan bagi para user dan mitra kami. That’s why we’re creating more positive impacts, means that we’re close to our dream to be the biggest property management platform in Indonesia and beyond.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container mt-100 mt-60">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                    <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                        <div class="card-body p-0">
                                            <img src={Ab01} class="img-fluid" alt="work-image" />
                                            <div class="overlay-work bg-dark"></div>
                                            <div class="content">
                                                <a href="javascript:void(0)" class="title text-white d-block font-weight-bold">Web Development</a>
                                                <small class="text-light">IT & Software</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-6">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                                <div class="card-body p-0">
                                                    <img src={Ab02} class="img-fluid" alt="work-image" />
                                                    <div class="overlay-work bg-dark"></div>
                                                    <div class="content">
                                                        <a href="javascript:void(0)" class="title text-white d-block font-weight-bold">Michanical Engineer</a>
                                                        <small class="text-light">Engineering</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                            <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                                <div class="card-body p-0">
                                                    <img src={Ab03} class="img-fluid" alt="work-image" />
                                                    <div class="overlay-work bg-dark"></div>
                                                    <div class="content">
                                                        <a href="javascript:void(0)" class="title text-white d-block font-weight-bold">Chartered Accountant</a>
                                                        <small class="text-light">C.A.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                            <div class="ml-lg-4">
                                <div class="section-title mb-4 pb-2">
                                    <h4 class="title mb-4">Services</h4>
                                    <p class="text-muted para-desc text-indent"><span class="text-primary font-weight-bold">Teraskos</span> adalah property management platform, dimana user bisa mencari dan menikmati layanan kos-kosan dengan harga yang terjangkau. Selain itu <span class="text-primary font-weight-bold">Teraskos</span> juga berupaya mengatasi masalah-masalah yang dihadapi oleh anak-anak kos diseluruh indonesia. Contohnya layanan Terascare untuk membantu user untuk melakukan proses checking, packing, dan delivering barang-barangnya ke tempat yang aman atau dikirim ke tempat yang diinginkan oleh user. Serta layanan TerasTalks sebagai langkah konkret kami untuk mencerdaskan kehidupan bangsa melalui webinar dan acara Talks yang mempertemukan peserta dengan para influencer dan public speaker inspiratif di Indonesia.</p>
                                </div>

                                <ul class="list-unstyled text-muted">
                                    <li class="mb-0"><span class="text-primary h4 mr-2"><i class="uim uim-check-circle"></i></span>Teraskos</li>
                                    <li class="mb-0"><span class="text-primary h4 mr-2"><i class="uim uim-check-circle"></i></span>Terascare</li>
                                    <li class="mb-0"><span class="text-primary h4 mr-2"><i class="uim uim-check-circle"></i></span>Terastalk</li>
                                </ul>

                                <div class="watch-video mt-4 pt-2">
                                    <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary mb-2">Baca Selengkapnya <i data-feather="chevron-right" class="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="section-title mb-4 pb-2">
                                <h4 class="title">Our Team</h4>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Ronny Jofra</a></h5>
                                    <small class="designation text-muted">C.E.O</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Micheal Carlo</a></h5>
                                    <small class="designation text-muted">Director</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Aliana Rosy</a></h5>
                                    <small class="designation text-muted">Manager</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Sofia Razaq</a></h5>
                                    <small class="designation text-muted">Developer</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Calvin Carlo</a></h5>
                                    <small class="designation text-muted">C.E.O</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Juhi Chawla</a></h5>
                                    <small class="designation text-muted">Director</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Arlo Walker</a></h5>
                                    <small class="designation text-muted">Manager</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mt-4 pt-2">
                            <div class="card team text-center border-0">
                                <div class="position-relative">
                                    <img src={Client01} class="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul>
                                </div>
                                <div class="card-body py-3 px-0 content">
                                    <h5 class="mb-0"><a href="javascript:void(0)" class="name text-dark">Randeep Huda</a></h5>
                                    <small class="designation text-muted">Developer</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutUs