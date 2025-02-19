import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-30">
                            <div className="item">
                                <div className="logo"><img src="img/logo-light.png" alt="" /></div>
                                <p>Lorem ipsum is simply dummy text of the printe and type setting industry in the fermen.</p>
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
                                <p>0665 Broadway st.
                                    <br />10234 NY, USA
                                </p>
                                <div className="phone"><a href="tel:+410315520900">+1 123 567 8910</a></div>
                                <div className="mail"><a href="mailto:hi@rixoshotel.com">hi@rixoshotel.com</a></div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-30">
                            <div className="item">
                                <h3>Subscribe</h3>
                                <p>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
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
                        <div className="col-lg-8 col-md-12">
                            <div className="links">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="blog1.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 text-end">
                            <p>Copyright 2025 by <a href="#">DuruThemes</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
