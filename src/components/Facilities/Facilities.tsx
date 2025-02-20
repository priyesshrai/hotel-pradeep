import React from 'react'

export default function Facilities() {
    return (
        <section className="facilities2 bg-lightbrown">
            <div className="border-bottom">
                <div className="container">
                    <ul className="tab-buttons">
                        <li data-tab="#restaurant" className="tab-btn active-btn"><span>Restaurant</span></li>
                        <li data-tab="#banquet" className="tab-btn"><span>Banquet</span></li>
                        <li data-tab="#conference" className="tab-btn"><span>Conference</span></li>
                        <li data-tab="#roofTop" className="tab-btn"><span>Roof Top Restaurant</span></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="tabs-content">

                    <div className="tab active-tab" id="restaurant">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="img/offers/05.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                <div className="section-subtitle">FLAVORS OF PRADEEP</div>
                                <div className="section-title">RESTAURANT</div>
                                <p className="mb-25">A multi-cuisine dining experience that brings together rich flavors and warm hospitality.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Breakfast: 7.00 am – 11.00 am (daily)</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Lunch: 12.00 pm – 2.00 pm (daily)</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Dinne: 6.30 pm – 10.00 pm (daily)</p>
                                        </div>
                                    </li>
                                </ul>
                                {/* <a href="#" className="button-3"><i className="fa-solid fa-user-chef"></i> Book Now</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="banquet">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="img/offers/06.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                {/* <div className="section-subtitle">So Many Ways to Unwind</div> */}
                                <div className="section-title">BANQUET HALL</div>
                                <p className="mb-25">A grand venue for weddings, celebrations, and corporate events with elegant decor.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Capacity: Up to 300 guests</p>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Wedding spa packages</p>
                                        </div>
                                    </li> */}
                                </ul>
                                {/* <a href="#" className="button-3"><i className="fa-solid fa-spa"></i> View details</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="conference">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="img/offers/07.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                {/* <div className="section-subtitle">Indoor & Outdoor</div> */}
                                <div className="section-title">CONFERENCE HALL</div>
                                <p className="mb-25">A well-equipped space designed for business meetings and seminars.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Available: 9:00 AM – 9:00 PM (daily)</p>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Outdoor pool swimming</p>
                                        </div>
                                    </li> */}
                                </ul>
                                <a href="#" className="button-3"><i className="fa-solid fa-person-swimming"></i>Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="roofTop">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="img/offers/08.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                {/* <div className="section-subtitle">Training Spaces</div> */}
                                <div className="section-title">ROOFTOP RESTAURANT</div>
                                <p className="mb-25">Dine under the open sky with authentic Indian cuisine and a scenic garden view.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Open: 6:30 PM – 11:00 PM (daily)</p>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Some dumbells for weight lifting</p>
                                        </div>
                                    </li> */}
                                </ul>
                                {/* <a href="#" className="button-3"><i className="fa-solid fa-dumbbell"></i> View details</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
