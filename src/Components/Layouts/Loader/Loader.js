import React, { Fragment, useEffect } from "react";

function Loader() {
    return (
        <Fragment>
            <div id="preloader">
                <div id="status">
                    <div class="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Loader;
