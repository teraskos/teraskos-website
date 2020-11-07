import React, { Fragment } from "react";
import Header from "./Components/Header";

function FAQ() {
    return (
        <Fragment>
            <Header />

            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-5 col-12 d-none d-md-block">
                            <div class="rounded shadow p-4 sticky-bar">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a
                                            href="#tech"
                                            class="mouse-down h6 text-dark"
                                        >
                                            Buying Questions
                                        </a>
                                    </li>
                                    <li class="mt-4">
                                        <a
                                            href="#general"
                                            class="mouse-down h6 text-dark"
                                        >
                                            General Questions
                                        </a>
                                    </li>
                                    <li class="mt-4">
                                        <a
                                            href="#payment"
                                            class="mouse-down h6 text-dark"
                                        >
                                            Payments Questions
                                        </a>
                                    </li>
                                    <li class="mt-4">
                                        <a
                                            href="#support"
                                            class="mouse-down h6 text-dark"
                                        >
                                            Support Questions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-8 col-md-7 col-12">
                            <div class="section-title" id="tech">
                                <h4>Buying Product</h4>
                            </div>
                            <div class="faq-content mt-4 pt-2">
                                <div class="accordion" id="accordionExampleone">
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseone"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapseone"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfifone"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How our{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    work ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseone"
                                            class="collapse show"
                                            aria-labelledby="headingfifone"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsetwo"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsetwo"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingtwo"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    What is the main process
                                                    open account ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsetwo"
                                            class="collapse"
                                            aria-labelledby="headingtwo"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsethree"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsethree"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingthree"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How to make unlimited data
                                                    entry ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsethree"
                                            class="collapse"
                                            aria-labelledby="headingthree"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefour"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsefour"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfour"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Is{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    safer to use with my account
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefour"
                                            class="collapse"
                                            aria-labelledby="headingfour"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefive2"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsefive2"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfive2"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How can i contact your
                                                    technical team ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefive2"
                                            class="collapse"
                                            aria-labelledby="headingfive2"
                                            data-parent="#accordionExampleone"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="section-title mt-5" id="general">
                                <h4>General Questions</h4>
                            </div>

                            <div class="faq-content mt-4 pt-3">
                                <div class="accordion" id="accordionExampletwo">
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefive"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapsefive"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfive"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How our{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    work ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefive"
                                            class="collapse show"
                                            aria-labelledby="headingfive"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsesix"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsesix"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingsix"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    What is the main process
                                                    open account ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsesix"
                                            class="collapse"
                                            aria-labelledby="headingsix"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseseven"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseseven"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingseven"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How to make unlimited data
                                                    entry ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseseven"
                                            class="collapse"
                                            aria-labelledby="headingseven"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseeight"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseeight"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingeight"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Is{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    safer to use with my account
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseeight"
                                            class="collapse"
                                            aria-labelledby="headingeight"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsenine"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsenine"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingnine"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How can i contact your
                                                    technical team ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsenine"
                                            class="collapse"
                                            aria-labelledby="headingnine"
                                            data-parent="#accordionExampletwo"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="section-title mt-5" id="payment">
                                <h4>Payments Questions</h4>
                            </div>

                            <div class="faq-content mt-4 pt-3">
                                <div
                                    class="accordion"
                                    id="accordionExamplethree"
                                >
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseten"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapseten"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingten"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How our{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    work ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseten"
                                            class="collapse show"
                                            aria-labelledby="headingten"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseeleven"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseeleven"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingeleven"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    What is the main process
                                                    open account ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseeleven"
                                            class="collapse"
                                            aria-labelledby="headingeleven"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsetwelve"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsetwelve"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingtwelve"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How to make unlimited data
                                                    entry ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsetwelve"
                                            class="collapse"
                                            aria-labelledby="headingtwelve"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsethirteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsethirteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingthirteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Is{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    safer to use with my account
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsethirteen"
                                            class="collapse"
                                            aria-labelledby="headingthirteen"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefourteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsefourteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfourteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How can i contact your
                                                    technical team ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefourteen"
                                            class="collapse"
                                            aria-labelledby="headingfourteen"
                                            data-parent="#accordionExamplethree"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="section-title mt-5" id="support">
                                <h4>Support Questions</h4>
                            </div>

                            <div class="faq-content mt-4 pt-3">
                                <div
                                    class="accordion"
                                    id="accordionExamplefour"
                                >
                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsefifthenn"
                                            class="faq position-relative"
                                            aria-expanded="true"
                                            aria-controls="collapsefifthenn"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingfiftheen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How our{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    work ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsefifthenn"
                                            class="collapse show"
                                            aria-labelledby="headingfiftheen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsesixteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsesixteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingsixteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    What is the main process
                                                    open account ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsesixteen"
                                            class="collapse"
                                            aria-labelledby="headingsixteen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseseventeen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseseventeen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingseventeen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How to make unlimited data
                                                    entry ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseseventeen"
                                            class="collapse"
                                            aria-labelledby="headingseventeen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded mb-2">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapseeigheteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapseeigheteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingeighteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    Is{" "}
                                                    <span class="text-primary">
                                                        Landrick
                                                    </span>{" "}
                                                    safer to use with my account
                                                    ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapseeigheteen"
                                            class="collapse"
                                            aria-labelledby="headingeighteen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 rounded">
                                        <a
                                            data-toggle="collapse"
                                            href="#collapsenineteen"
                                            class="faq position-relative collapsed"
                                            aria-expanded="false"
                                            aria-controls="collapsenineteen"
                                        >
                                            <div
                                                class="card-header border-0 bg-light p-3 pr-5"
                                                id="headingnineteen"
                                            >
                                                <h6 class="title mb-0">
                                                    {" "}
                                                    How can i contact your
                                                    technical team ?{" "}
                                                </h6>
                                            </div>
                                        </a>
                                        <div
                                            id="collapsenineteen"
                                            class="collapse"
                                            aria-labelledby="headingnineteen"
                                            data-parent="#accordionExamplefour"
                                        >
                                            <div class="card-body px-2 py-4">
                                                <p class="text-muted mb-0 faq-ans">
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-100 mt-60">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="media align-items-center shadow rounded p-4 features">
                                <div class="icons m-0 rounded h2 text-primary text-center px-3">
                                    <i class="uil uil-envelope-check"></i>
                                </div>
                                <div class="content ml-4">
                                    <h5 class="mb-1">
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark"
                                        >
                                            Get in Touch !
                                        </a>
                                    </h5>
                                    <p class="text-muted mb-0">
                                        This is required when, for text is not
                                        yet available.
                                    </p>
                                    <div class="mt-2">
                                        <a
                                            href="javascript:void(0)"
                                            class="btn btn-sm btn-soft-primary"
                                        >
                                            Submit a Request
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="media align-items-center shadow rounded p-4 features">
                                <div class="icons m-0 rounded h2 text-primary text-center px-3">
                                    <i class="uil uil-webcam"></i>
                                </div>
                                <div class="content ml-4">
                                    <h5 class="mb-1">
                                        <a
                                            href="javascript:void(0)"
                                            class="text-dark"
                                        >
                                            Start a Meeting
                                        </a>
                                    </h5>
                                    <p class="text-muted mb-0">
                                        This is required when, for text is not
                                        yet available.
                                    </p>
                                    <div class="mt-2">
                                        <a
                                            href="javascript:void(0)"
                                            class="btn btn-sm btn-soft-primary"
                                        >
                                            Start Video Chat
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default FAQ;
