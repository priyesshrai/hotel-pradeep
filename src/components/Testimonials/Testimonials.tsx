import React from 'react'

export default function Testimonials() {
  return (
    <section className="testimonials">
        <div className="bg-img bg-fixed section-padding" data-overlay-dark="5" data-background="img/banner/02.jpg">
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
                                <h5>"Hotel was great. Location was excellent. The staff was incredible. A great experience all around!"</h5>
                                <div className="info">
                                    <div className="cont">
                                        <h6>Frank E. <i>|</i> <span><a href="#">View on Tripadvisor</a></span></h6>
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
