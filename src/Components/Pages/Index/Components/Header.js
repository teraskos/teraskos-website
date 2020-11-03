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
                                {/* <p class="para-desc text-muted">
                                    
                                </p> */}
                                <div class="mt-4">
                                    <a href="page-contact-one.html" class="btn btn-primary mt-2 mr-2">Cari Kos</a>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4W4pvH43yohJdXSBFUlKX_M8VEZAUyxOeedf6HkDXtQYv0Q/viewform" class="btn btn-outline-primary mt-2">Gabung Sebagai Mitra Kos</a>
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