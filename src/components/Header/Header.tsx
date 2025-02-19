import React from 'react'

export default function Header() {
    return (
        <>
            <div className="navbar-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="widget mr-30"><a href="tel:+12345678910"><i className="fa-solid fa-phone"></i>+1 234 567 8910</a></div>
                            <div className="widget"><a href="mailto:hi@rixoshotel.com"><i className="fa-solid fa-envelope"></i>hi@rixoshotel.com</a></div>
                        </div>
                        <div className="col-md-6 text-end">
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="logo-wrapper">
                        <a className="logo" href="index.html"> <img src="/img/logo.png" className="logo-img" alt="" /> </a>
                        {/* <div className="logo"><h2>Rixos</h2></div> */}
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i className="fa-light fa-bars"></i></span> </button>
                    {/* <!-- Menu --> */}
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown"> <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Rooms <i className="fa-light fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="rooms1.html" className="dropdown-item"><span>Rooms 01</span></a></li>
                                    <li><a href="rooms2.html" className="dropdown-item"><span>Rooms 02</span></a></li>
                                    <li className="dropdown-submenu dropdown"> <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Room Details <i className="fa-light fa-angle-right"></i></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="room-details1.html" className="dropdown-item"><span>Details 01</span></a></li>
                                            <li><a href="room-details2.html" className="dropdown-item"><span>Details 02</span></a></li>
                                            <li><a href="room-details3.html" className="dropdown-item"><span>Details 03</span></a></li>
                                            <li><a href="room-details4.html" className="dropdown-item"><span>Details 04</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Services <i className="fa-light fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="facilities.html" className="dropdown-item"><span>Facilities</span></a></li>

                                    <li><a href="amenities.html" className="dropdown-item"><span>Amenities</span></a></li>
                                    <li><a href="offers.html" className="dropdown-item"><span>Offers</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages <i className="fa-light fa-angle-down"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a href="restaurant.html" className="dropdown-item"><span>Restaurant</span></a></li>
                                    <li><a href="spa.html" className="dropdown-item"><span>Spa & Wellness</span></a></li>
                                    <li><a href="pricing.html" className="dropdown-item"><span>Pricing</span></a></li>
                                    <li><a href="team.html" className="dropdown-item"><span>Team</span></a></li>
                                    <li><a href="team-single.html" className="dropdown-item"><span>Team Single</span></a></li>
                                    <li><a href="faq.html" className="dropdown-item"><span>FAQs</span></a></li>
                                    <li><a href="gallery-image.html" className="dropdown-item"><span>Image Gallery</span></a></li>
                                    <li><a href="gallery-video.html" className="dropdown-item"><span>Video Gallery</span></a></li>
                                    <li><a href="404.html" className="dropdown-item"><span>404 Page</span></a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                        <div className="navbar-right">
                            <a className="button" href="#"><i className="fa-solid fa-calendar-check"></i> Book Now</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
