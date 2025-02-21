import About from '@/components/About/About'
import React from 'react'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" data-overlay-dark="5" data-background="/img/about/about-banner-02.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="subtitle">Hotel Pradeep</div>
                            <div className="title">About Hotel</div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <section className="team section-padding bg-lightbrown">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center mb-20">
                            <div className="section-subtitle">Our Experts</div>
                            <div className="section-title">Meet The Team</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="img"> <img src="img/team/b.jpg" alt="" className="img-cover" />
                                        <div className="social-icons">
                                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                                            <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h5><a href="team-single.html">Jesica Brown</a></h5>
                                        <p>Front Office</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img"> <img src="img/team/c.jpg" alt="" className="img-cover" />
                                        <div className="social-icons">
                                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                                            <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h5><a href="team-single.html">Eleanor Arya</a></h5>
                                        <p>Administrator</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img src="img/team/d.jpg" alt="" className="img-cover" />
                                        <div className="social-icons">
                                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                                            <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h5><a href="team-single.html">Sophia Mia</a></h5>
                                        <p>Receptionist</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img"> <img src="img/team/e.jpg" alt="" className="img-cover" />
                                        <div className="social-icons">
                                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                                            <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h5><a href="team-single.html">Jason Lucas</a></h5>
                                        <p>Floor Clerk</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img"> <img src="img/team/f.jpg" alt="" className="img-cover" />
                                        <div className="social-icons">
                                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                                            <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h5><a href="team-single.html">Dorothy Nancy</a></h5>
                                        <p>Executive Assistant</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="img">
                                        <img src="img/team/a.jpg" alt="" className="img-cover" />
                                        <div className="social-icons">
                                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                                            <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h5><a href="team-single.html">Daniel Martin</a></h5>
                                        <p>Hotel Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clients bg-lightbrown">
                <div className="container">
                    <div className="row wrap">
                        <div className="col-md-12">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <a href="#"><img src="img/clients/1.png" alt="" /></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img src="img/clients/2.png" alt="" /></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img src="img/clients/3.png" alt="" /></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img src="img/clients/4.png" alt="" /></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img src="img/clients/5.png" alt="" /></a>
                                </div>
                                <div className="item">
                                    <a href="#"><img src="img/clients/6.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
