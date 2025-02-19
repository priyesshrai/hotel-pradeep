import React from 'react'

export default function Facilities() {
    return (
        <section className="facilities2 bg-lightbrown">
            <div className="border-bottom">
                <div className="container">
                    <ul className="tab-buttons">
                        <li data-tab="#restaurant" className="tab-btn active-btn"><span>Restaurant</span></li>
                        <li data-tab="#spa" className="tab-btn"><span>Spa & Wellness</span></li>
                        <li data-tab="#pool" className="tab-btn"><span>Pool Swimming</span></li>
                        <li data-tab="#fitness" className="tab-btn"><span>Fitness Center</span></li>
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
                                <div className="section-subtitle">Addres of taste</div>
                                <div className="section-title">Restaurant</div>
                                <p className="mb-25">Restaurant quisue sodale intion varius estibum miss arman ortiton telus euismod nis the massa fermen.</p>
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
                                <a href="#" className="button-3"><i className="fa-solid fa-user-chef"></i> View menu</a>
                            </div>
                        </div>
                    </div>


                    <div className="tab" id="spa">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="img/offers/06.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                <div className="section-subtitle">So Many Ways to Unwind</div>
                                <div className="section-title">Spa & Wellness</div>
                                <p className="mb-25">Wellness quisque sodales intioni varius estibum miss arman ortiton telus euismod nis the massa nutodio farmention lorem pretium ametis velen fermen.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Overnight de-stress retreat</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Wedding spa packages</p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="button-3"><i className="fa-solid fa-spa"></i> View details</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="pool">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="img/offers/07.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                <div className="section-subtitle">Indoor & Outdoor</div>
                                <div className="section-title">Pool Swimming</div>
                                <p className="mb-25">Swimming quisque sodales intioni varius estibum miss arman ortiton telus euismod nis the massa nutodio farmention lorem pretium ametis velen fermen.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Indoor pool swimming</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Outdoor pool swimming</p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="button-3"><i className="fa-solid fa-person-swimming"></i> View details</a>
                            </div>
                        </div>
                    </div>

                    <div className="tab" id="fitness">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src="img/offers/08.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-md-12">
                                <div className="section-subtitle">Training Spaces</div>
                                <div className="section-title">Fitness Center</div>
                                <p className="mb-25">Fitness quisque sodales intioni varius estibum miss arman ortiton telus euismod nis the massa nutodio farmention lorem pretium ametis velen fermen.</p>
                                <ul className="list-unstyled list mb-30">
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Cardiovascular equipment</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon"> <span className="fa-regular fa-check"></span> </div>
                                        <div className="list-text">
                                            <p>Some dumbells for weight lifting</p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="button-3"><i className="fa-solid fa-dumbbell"></i> View details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
