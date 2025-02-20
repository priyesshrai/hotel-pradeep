import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-30">
                            <div className="item">
                                <div className="logo-with-name-container">
                                    <a className="logo" href="/"> <img src="/img/logo/logo_trans.png" className="logo-img" alt="" /></a>
                                    <div className='hotel-name'>
                                        <span className='fir'>HOTEL</span>
                                        <span>PRADEEP</span>
                                    </div>
                                </div>
                                <p>Hotel Pradeep offers a comfortable stay with warm hospitality in the heart of Varanasi. Enjoy delicious dining at Poonam and a scenic rooftop experience at Eden.</p>
                                <div className="social-icons">
                                    <ul className="list-inline">
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 offset-md-1 mb-30">
                            <div className="item">
                                <h3>Contact us</h3>
                                <p>Jagatganj, Varanasi-221002
                                    <br />(U.P.) India
                                </p>
                                <div className="phone"><a href="tel:+9105422204963"> +91 0542-2204963, 2207231   </a></div>
                                <div className="mail"><a href="mailto:info@hotelpradeep.com">info@hotelpradeep.com</a></div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-30">
                            <div className="item">
                                <h3>Join Us</h3>
                                <p>Receive exclusive updates about our services directly in your email.</p>
                                <div className="newsletter">
                                    <form action="#">
                                        <input type="email" placeholder="Email Address" required />
                                        <button type="submit"><i className="fa-light fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="links">
                                <ul>
{/*                                     <li><a href="/">Home</a></li> */}
                                    <li><a href="about">About</a></li>
                                    <li><a href="rooms">Rooms</a></li>
                                    <li><a href="facilities">Facilities</a></li>
                                    <li><a href="restaurant">Restaurant</a></li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-end">
                            <p>Copyright {new Date().getFullYear()} Hotel Pradeep. Developed by <a href="https://wizards.co.in/">Wizards.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
