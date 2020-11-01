import React, { Fragment } from 'react'
import TeraskosLogo from './../../../Assets/Images/teraskos_logo.png';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Fragment>
            <header id="topnav" class="defaultscroll sticky">
                <div class="container">
                    <div>
                        <a class="logo" href="index.html">
                            <img src={TeraskosLogo} height="55" alt="" />
                        </a>
                    </div>
                    <div class="buy-button">
                        <a href="#join" class="btn btn-primary">Join Now</a>
                    </div>

                    <div class="menu-extras">
                        <div class="menu-item">
                            <a class="navbar-toggle">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div id="navigation">
                        <ul class="navigation-menu">
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About Us</Link>
                            </li>
                            <li>
                                <Link to={"/services"}>Services</Link>
                            </li>
                            <li>
                                <Link to={"/blog"}>Blog</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                            <li>
                                <Link to={"/faq"}>FAQ</Link>
                            </li>
                        </ul>
                        <div class="buy-menu-btn d-none">
                            <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header