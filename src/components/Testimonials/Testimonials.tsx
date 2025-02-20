import React from 'react'

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="bg-img bg-fixed section-padding" data-overlay-dark="5" data-background="/img/bg-image/testimonials.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <div className="owl-carousel owl-theme">
                                <div className="item"> <span>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                </span>
                                    <h5>This hotel in Varanasi is a great place to stay. When it came to recommending restaurants and providing directions to the most popular tourist destinations and how to get there, the service members were accommodating and considerate of our demands. The room we stayed in was always spotless and well-maintained.</h5>
                                    <div className="info">
                                        <div className="cont">
                                            <h6>Pragya Sharma <i>|</i> <span><a href="#">View on Google </a></span></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="item"> <span>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                </span>
                                    <h5>"Location was excellent. The staff was incredible. Hotel was great. A great experience all around!"</h5>
                                    <div className="info">
                                        <div className="cont">
                                            <h6>Emily F. <i>|</i> <span><a href="#">View on Tripadvisor</a></span></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="item"> <span>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                    <i className="star-rating"></i>
                                </span>
                                    <h5>"A great experience all around! Hotel was great. Location was excellent. The staff was incredible."</h5>
                                    <div className="info">
                                        <div className="cont">
                                            <h6>Enrico T. <i>|</i> <span><a href="#">View on Tripadvisor</a></span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
