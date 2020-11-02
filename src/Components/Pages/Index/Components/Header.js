import React, { Fragment } from 'react'
import ImageHeader from './../../../../Assets/Images/illustrator/Startup_SVG.svg';

function Header() {
    return (
        <Fragment>
            <section class="bg-half-170  d-table w-100" id="home">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-md-7">
                            <div class="title-heading mt-4">
                                <h1 class="heading mb-3">Temukan Segala Kebutuhan Ngekosmu dengan <span class="text-primary">Mudah </span>dan <span class="text-primary">Murah</span>! </h1>
                                <p class="para-desc text-muted">
                                    Teraskos merupakan platform dimana pengguna dapat melihat, menghubungi, membayar, dan 
                                    menyelesaikan segala permasalahan kos-kosan yang dialaminya. Selain itu, Teraskos juga membantu para pemilik kos mendapatkan 
                                    lebih dari 75% <i>occupancy rate </i>keseluruhan kamar kos dan meningkatkan kualitas layanan kos yang dimilikinya.
                                </p>
                                <div class="mt-4">
                                    <a href="page-contact-one.html" class="btn btn-primary mt-2 mr-2">Cari Kos</a>
                                    <a href="documentation.html" class="btn btn-outline-primary mt-2">Gabung Sebagai Mitra Kos</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <img src={ImageHeader} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Header