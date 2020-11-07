import React, { Fragment, useEffect } from "react";
import Footer from "./Footer/Footer";
import Loader from "./Loader/Loader";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
    return (
        <Fragment>
            <Loader />

            <Navbar />

            {children}

            <Footer />
        </Fragment>
    );
}

export default Layout;
