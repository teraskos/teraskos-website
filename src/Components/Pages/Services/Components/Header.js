import React, { Fragment } from "react";
import Classic01 from "./../../../../Assets/Images/app/classic01.png";
import Calendar from "./../../../../Assets/Images/app/calender.png";

function Header() {
    return (
        <Fragment>
            <section
                class="bg-half-170 d-table w-100 overflow-hidden"
                id="home"
            >
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-md-7">
                            <div class="title-heading mt-4">
                                <h1 class="heading mb-3">
                                    We build best apps that users love
                                </h1>
                                <p class="para-desc text-muted">
                                    Launch your campaign and benefit from our
                                    expertise on designing and managing
                                    conversion centered bootstrap4 html page.
                                </p>
                                <div class="watch-video mt-4 pt-2">
                                    <a
                                        href="javascript:void(0)"
                                        class="btn btn-primary mb-2 mr-2"
                                    >
                                        Baca Selengkapnya
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div class="classic-app-image position-relative">
                                <div class="bg-app-shape position-relative">
                                    <img
                                        src={Classic01}
                                        class="img-fluid mover mx-auto d-block "
                                        alt=""
                                    />
                                </div>
                                <div class="app-images d-none d-md-block">
                                    <img
                                        src={Calendar}
                                        class="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Header;
