import React, { Fragment, useEffect } from 'react'
import Header from './Components/Header'
import Blog01 from './../../../Assets/Images/blog/01.jpg'
import { Link } from 'react-router-dom'

function Blog() {
    useEffect(() => {
        window.feather.replace()
    }, [])
    
    return (
        <Fragment>
            <Header />

            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4 pb-2">
                            <div class="card blog rounded border-0 shadow overflow-hidden">
                                <div class="position-relative">
                                    <img src={Blog01} class="card-img-top" alt="..." />
                                    <div class="overlay rounded-top bg-dark"></div>
                                </div>
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">Design your apps in your own way</a></h5>
                                    <div class="post-meta d-flex justify-content-between mt-3">
                                        <ul class="list-unstyled mb-0">
                                            <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                        </ul>
                                        <Link to={"/detail-blog"} class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                </div>
                                <div class="author">
                                    <small class="text-light user d-block"><i class="mdi mdi-account"></i> Calvin Carlo</small>
                                    <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                </div>
                            </div>
                        </div>


                        <div class="col-12">
                            <ul class="pagination justify-content-center mb-0">
                                <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Previous">Prev</a></li>
                                <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0)" aria-label="Next">Next</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Blog