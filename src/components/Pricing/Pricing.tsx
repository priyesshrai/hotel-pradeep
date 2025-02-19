import React from 'react'

export default function Pricing() {
  return (
    <section className="pricing1 section-padding bg-lightbrown">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center mb-20">
                    <div className="section-subtitle">Pricing Plan</div>
                    <div className="section-title">Extra Prices</div>
                </div>
            </div>
            <div className="row justify-content-center g-0">
                <div className="col-12 pricing">
                    <div className="item">
                        <div className="img"> <img src="img/pricing/01.jpg" className="img-fluid" alt="" />
                            <div className="title">Beverage</div>
                            <div className="overlay"></div>
                        </div>
                        <div className="flex-column cont">
                            <div className="cont-hover">
                                <div className="icon"> <i className="fa-thin fa-martini-glass"></i> </div>
                                <p>In-room beverage lorem ipsum simply drana print typesettin induren.</p>
                                <div className="price">$49 <span>per night</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="item active">
                        <div className="img"> <img src="img/pricing/02.jpg" className="img-fluid" alt="" />
                            <div className="title">Cleaning</div>
                            <div className="overlay"></div>
                        </div>
                        <div className="flex-column cont">
                            <div className="cont-hover">
                                <div className="icon"> <i className="fa-thin fa-vacuum"></i> </div>
                                <p>Cleaning lorem in ipsum simply the drana print typesettin induren.</p>
                                <div className="price">$29 <span>daily</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"> <img src="img/pricing/03.jpg" className="img-fluid" alt="" />
                            <div className="title">Breakfast</div>
                            <div className="overlay"></div>
                        </div>
                        <div className="flex-column cont">
                            <div className="cont-hover">
                                <div className="icon"> <i className="fa-thin fa-mug-saucer"></i> </div>
                                <p>Room breakfast lorem ipsum simply drana print typesettin induren.</p>
                                <div className="price">$69 <span>daily</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-30">
                    <div className="section-info">
                        <div className="tag">Questions</div>
                        <div className="desc">You can send your questions to the mail address: <a href="mailto:info@hotels.com" className="text-decoration-line-bottom">info@hotels.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
