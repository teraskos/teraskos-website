import React, { Fragment, useEffect } from "react";
import Background from "./../../../Assets/Images/1.jpg";
import BlogBg1 from "./../../../Assets/Images/blog/bg1.jpg";

function DetailBlog() {
    useEffect(() => {
        window.feather.replace();
    }, []);

    return (
        <Fragment>
            <section
                class="bg-half d-table w-100"
                style={{
                    background: `url(${Background}) center center`
                }}
            >
                <div class="bg-overlay"></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 text-center">
                            <div class="page-next-level">
                                <h4 class="title text-white title-dark">
                                    {" "}
                                    Smartest Applications for <br />
                                    Your Business{" "}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <ul class="list-unstyled text-center sticky-bar social-icon mb-0">
                                        <li class="mb-3 h6">Share</li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i
                                                    data-feather="facebook"
                                                    class="fea icon-sm fea-social"
                                                ></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i
                                                    data-feather="instagram"
                                                    class="fea icon-sm fea-social"
                                                ></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i
                                                    data-feather="twitter"
                                                    class="fea icon-sm fea-social"
                                                ></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i
                                                    data-feather="linkedin"
                                                    class="fea icon-sm fea-social"
                                                ></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-md-10">
                                    <ul class="list-unstyled d-flex justify-content-between mt-4">
                                        <li class="list-inline-item user mr-2">
                                            <a
                                                href="javascript:void(0)"
                                                class="text-muted"
                                            >
                                                <i class="mdi mdi-account text-dark"></i>{" "}
                                                Calvin Carlo
                                            </a>
                                        </li>
                                        <li class="list-inline-item date text-muted">
                                            <i class="mdi mdi-calendar-check text-dark"></i>{" "}
                                            13th August, 2019
                                        </li>
                                    </ul>

                                    <img
                                        src={BlogBg1}
                                        class="img-fluid rounded-md shadow"
                                        alt=""
                                    />

                                    <h5 class="mt-4">
                                        Mornings contain the secret to an
                                        extraordinarily successful life
                                    </h5>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>

                                    <p class="text-muted">
                                        Due to its widespread use as filler text
                                        for layouts, non-readability is of great
                                        importance: human perception is tuned to
                                        recognize certain patterns and
                                        repetitions in texts. If the
                                        distribution of letters and 'words' is
                                        random, the reader will not be
                                        distracted from making a neutral
                                        judgement on the visual impact and
                                        readability of the typefaces
                                        (typography), or the distribution of
                                        text on the page (layout or type area).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default DetailBlog;
