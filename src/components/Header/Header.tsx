import React from 'react'

export default function Header() {
    return (
        <>
            <div className="navbar-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="widget mr-30"><a href="tel:+9105422204963"><i className="fa-solid fa-phone">
                            </i>+91 0542-2204963, 2207231 </a></div>
                            <div className="widget"><a href="mailto:info@hotelpradeep.com"><i className="fa-solid fa-envelope"></i>info@hotelpradeep.com</a></div>
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
                                {/* <p>Best Hotel of Varanasi</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="logo-wrapper">
                        <a className="logo" href="/"> <img src="/img/logo/logo_trans.png" className="logo-img" alt="" /></a>
                        {/* <div className="logo"><h2>Rixos</h2></div> */}
                        <div className='hotel-name'>
                            <span className='fir'>HOTEL</span>
                            <span>PRADEEP</span>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i className="fa-light fa-bars"></i></span> </button>
                    {/* <!-- Menu --> */}
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown"> <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="about">About</a></li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="rooms" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Rooms </a>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="services" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Facilities</a>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Restaurant <i className="fa-light fa-angle-down"></i></a>
                                {/* <ul className="dropdown-menu">
                                    <li><a href="dinning/poonam" className="dropdown-item"><span>Poonam</span></a></li>
                                    <li><a href="dinning/eden" className="dropdown-item"><span>Eden</span></a></li>
                                </ul> */}
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
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
