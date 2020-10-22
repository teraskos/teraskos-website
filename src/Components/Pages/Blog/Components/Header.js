import React, { Fragment } from 'react'

function Header() {
    return (
        <Fragment>
            <section class="bg-half bg-light d-table w-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 text-center">
                            <div class="page-next-level">
                                <h4 class="title"> Blog </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="position-relative">
            <div class="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        </Fragment>
    )
}

export default Header