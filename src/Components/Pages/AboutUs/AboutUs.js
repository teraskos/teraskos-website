import React, { Fragment, useEffect } from "react";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import ArtAndDesign from "./../../../Assets/Images/icon/art-and-design.svg";
import Clock from "./../../../Assets/Images/icon/clock.svg";
import Teraskos from "./../../../Assets/Images/course/online/Teraskos.png";
import Terascare from "./../../../Assets/Images/course/online/Terascare.png";
import Terastalks from "./../../../Assets/Images/course/online/Terastalks.png";
import OurTeam from "./Components/OurTeam";

function AboutUs() {
    useEffect(() => {
        window.feather.replace();
    }, []);

    return (
        <Fragment>
            <Header />

            <section class="section overflow-hidden bg-light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <div class="section-title mb-4 pb-2">
                                <h4 class="title mb-4">Principle</h4>
                                <p class="text-muted para-desc mx-auto mb-0">
                                    Ada beberapa prinsip yang{" "}
                                    <span class="text-primary font-weight-bold">
                                        Teraskos
                                    </span>{" "}
                                    pegang untuk menjaga kualitas dari produk
                                    kami sebagai berikut.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-12 mt-4 pt-2">
                            <div class="card text-center rounded border-0">
                                <div class="card-body">
                                    <div class="p-3 bg-light rounded shadow d-inline-block">
                                        <img
                                            src={ArtAndDesign}
                                            class="avatar avatar-small"
                                            alt=""
                                        />
                                    </div>
                                    <div class="mt-4">
                                        <h5>
                                            <a
                                                href="javascript:void(0)"
                                                class="text-dark"
                                            >
                                                Innovation
                                            </a>
                                        </h5>
                                        <p class="text-muted mt-3 mb-0">
                                            Kami akan bekerja keras untuk
                                            membuat layanan kami mudah digunakan
                                            oleh para user dan memberikan dampak
                                            positif dalam kehidupannya. It’s
                                            because creative R&D and technology
                                            is our DNA.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-12 mt-4 pt-2">
                            <div class="card text-center rounded border-0">
                                <div class="card-body">
                                    <div class="p-3 bg-light rounded shadow d-inline-block">
                                        <img
                                            src={Clock}
                                            class="avatar avatar-small"
                                            alt=""
                                        />
                                    </div>
                                    <div class="mt-4">
                                        <h5>
                                            <a
                                                href="javascript:void(0)"
                                                class="text-dark"
                                            >
                                                Cozy
                                            </a>
                                        </h5>
                                        <p class="text-muted mt-3 mb-0">
                                            Memberikan pengalaman dan perasaan
                                            yang nyaman dan relax kepada user
                                            adalah kualitas layanan yang kami
                                            prioritaskan. Fast and friendly
                                            services are our main priority to be
                                            given to our valuable customers and
                                            partners.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-12 mt-4 pt-2">
                            <div class="card text-center rounded border-0">
                                <div class="card-body">
                                    <div class="p-3 bg-light rounded shadow d-inline-block">
                                        <img
                                            src={Clock}
                                            class="avatar avatar-small"
                                            alt=""
                                        />
                                    </div>
                                    <div class="mt-4">
                                        <h5>
                                            <a
                                                href="javascript:void(0)"
                                                class="text-dark"
                                            >
                                                Impact
                                            </a>
                                        </h5>
                                        <p class="text-muted mt-3 mb-0">
                                            Social & Business Impact adalah
                                            tujuan utama kami. Kami berkomitmen
                                            menciptakan dampak positif yang
                                            signifikan bagi para user dan mitra
                                            kami. That’s why we’re creating more
                                            positive impacts, means that we’re
                                            close to our dream to be the biggest
                                            property management platform in
                                            Indonesia and beyond.
                                        </p>
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
                                            <img
                                                src={Teraskos}
                                                class="img-fluid"
                                                alt="work-image"
                                            />
                                            <div class="overlay-work bg-dark"></div>
                                            <div class="content">
                                                <a
                                                    href="javascript:void(0)"
                                                    class="title text-white d-block font-weight-bold"
                                                >
                                                    Teraskos
                                                </a>
                                                <small class="text-light">
                                                    Layanan penyedia kos
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-6">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                                <div class="card-body p-0">
                                                    <img
                                                        src={Terascare}
                                                        class="img-fluid"
                                                        alt="work-image"
                                                    />
                                                    <div class="overlay-work bg-dark"></div>
                                                    <div class="content">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="title text-white d-block font-weight-bold"
                                                        >
                                                            Terascare
                                                        </a>
                                                        <small class="text-light">
                                                            Layanan penitipan
                                                            barang
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                            <div class="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                                                <div class="card-body p-0">
                                                    <img
                                                        src={Terastalks}
                                                        class="img-fluid"
                                                        alt="work-image"
                                                    />
                                                    <div class="overlay-work bg-dark"></div>
                                                    <div class="content">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="title text-white d-block font-weight-bold"
                                                        >
                                                            Terastalks
                                                        </a>
                                                        <small class="text-light">
                                                            Layanan webinar
                                                            inspiratif
                                                        </small>
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
                                    <p class="text-muted para-desc text-indent">
                                        <span class="text-primary font-weight-bold">
                                            Teraskos
                                        </span>{" "}
                                        adalah property management platform,
                                        dimana user bisa mencari dan menikmati
                                        layanan kos-kosan dengan harga yang
                                        terjangkau. Selain itu{" "}
                                        <span class="text-primary font-weight-bold">
                                            Teraskos
                                        </span>{" "}
                                        juga berupaya mengatasi masalah-masalah
                                        yang dihadapi oleh anak-anak kos
                                        diseluruh indonesia. Contohnya layanan{" "}
                                        <span class="text-primary font-weight-bold">
                                            Terascare
                                        </span>{" "}
                                        untuk membantu user untuk melakukan
                                        proses checking, packing, dan delivering
                                        barang-barangnya ke tempat yang aman
                                        atau dikirim ke tempat yang diinginkan
                                        oleh user. Serta layanan{" "}
                                        <span class="text-primary font-weight-bold">
                                            Terastalks
                                        </span>{" "}
                                        sebagai langkah konkret kami untuk
                                        mencerdaskan kehidupan bangsa melalui
                                        webinar dan acara Talks yang
                                        mempertemukan peserta dengan para
                                        influencer dan public speaker inspiratif
                                        di Indonesia.
                                    </p>
                                </div>

                                {/* <ul class="list-unstyled text-muted">
                                    <li class="mb-0">
                                        <span class="text-primary h4 mr-2">
                                            <i class="uim uim-check-circle"></i>
                                        </span>
                                        Teraskos
                                    </li>
                                    <li class="mb-0">
                                        <span class="text-primary h4 mr-2">
                                            <i class="uim uim-check-circle"></i>
                                        </span>
                                        Terascare
                                    </li>
                                    <li class="mb-0">
                                        <span class="text-primary h4 mr-2">
                                            <i class="uim uim-check-circle"></i>
                                        </span>
                                        Terastalk
                                    </li>
                                </ul> */}

                                <div class="watch-video mt-4 pt-2">
                                    <Link
                                        to={"/services"}
                                        className="btn btn-primary mb-2"
                                    >
                                        Baca Selengkapnya{" "}
                                        <i
                                            data-feather="chevron-right"
                                            class="fea icon-sm"
                                        ></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OurTeam />
        </Fragment>
    );
}

export default AboutUs;
