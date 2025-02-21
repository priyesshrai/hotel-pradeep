import About from '@/components/About/About'
import React from 'react'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" data-overlay-dark="5" data-background="/img/about/about-banner-03.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="subtitle">Hotel Pradeep</div>
                            <div className="title">About Hotel</div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-20 "> <img className="rounded-2 animation-float1" src="/img/about/about-banner-03.jpg" alt="" /> </div>
                        <div className="col-lg-7 col-md-12 mb-15 offset-lg-1">
                            <div className="section-subtitle">ABOUT PRADEEP HOTEL</div>
                            <div className="section-title">A Place of Light & Comfort</div>
                            <p>
                                The quiet and tranquility of the ancient city on the banks of the Ganga, combined with the luxury and comfort of a world class hotel.
                            </p>

                            <p>It is not a dream we are talking about, but the quality of The Hotel Pradeep, Varanasi.</p>

                            <p>A paragon look luxury Hotel located in the heart of Varanasi, the Eternal City, The Hotel Pradeep is a four-star modern amenity Hotel with a most affordable tariff. The biggest quality of the Hotel is: Even though all the important places and spots of tourist interest of Varanasi are located in close vicinity, even then The Pradeep is far from the madding crowd and the din of it all.</p>

                            <p className="mb-40">At <strong>Pradeep Hotel</strong>, we offer more than just a stay—we offer an experience of comfort, taste, and beauty.</p>

                            <a href="#" className="button-3 mb-15">Book Now</a>
                            <div className="phone"><a href="tel:+917408423503"><i className="fa-light fa-phone"></i>+917408423503</a></div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 mb-15">
                            <div className="section-subtitle">ABOUT PRADEEP HOTEL</div>
                            <div className="section-title">What we offer</div>
                            <p><strong> The Hotel Pradeep offers the best in the hospitality and tourism facilities. The facilities include :</strong></p>

                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i> A range of elegant rooms with oriental decorations.
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i>  Cosy dinning facilities with a wide range of Continental, Indian and Chinese cuisine.
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i>  A roof-top lush green open air restaurant "Eden" with Mexican cuisine.
                                </strong>
                            </p>
                            <p>
                                <strong>
                                    <i className="fa-solid fa-arrow-right"></i>   Exclusive banquet facilities and Board Room for select gathering, a Travel Desk and everything a traveler requires to feel comfortable, at home and at ease.
                                </strong>
                            </p>

                            <a href="#" className="button-3 mb-15">Book Now</a>
                            <div className="phone"><a href="tel:+917408423503"><i className="fa-light fa-phone"></i>+917408423503</a></div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-6 mb-20 mt-45"> <img className="rounded-2 animation-float1" src="/img/about/about-03.jpg" alt="" /> </div>
                        <div className="col-lg-3 col-md-6 mb-20"> <img className="rounded-2 animation-float2" src="/img/about/about-02.jpg" alt="" /> </div>
                    </div>
                </div>
            </section>


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
