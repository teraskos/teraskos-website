import React, { Fragment } from "react";
// import ImageHeader from './../../../../Assets/Images/illustrator/Startup_SVG.svg';
import logo from "../../../../logo.svg";
import "./style.scss";

function Header() {
    return (
        <Fragment>
            <header
                class="header-bg bg-half-170 d-table w-100 align-items-center justify-content-center"
                id="home"
            >
                <div class="title text-center text-white">
                    <img src={logo} alt="Logo Teraskos" />
                    <h1>
                        Temukan Segala Kebutuhan Ngekosmu <br /> Dengan Mudah dan
                        Murah!
                    </h1>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
