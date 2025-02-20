import React from 'react'

export default function Rooms() {
    return (
        <section className="rooms3 section-padding bg-darkgray">
            <div className="row">
                <div className="col-md-12 mb-25 text-center">
                    <div className="section-subtitle">Luxury Hotel Pradeep</div>
                    <div className="section-title white">Rooms <span>&</span> Suites</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="img"><img src="/img/rooms/room-01.jpg" className="img-fluid" alt="" /></div> <span className="discount"><i className="fa-light fa-badge-percent"></i> Get 25% Off</span>
                            <div className="cont">
                                <div className="title"><a href="#">Deluxe</a></div>
                                <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 1 Bed</span> <span><i className="fa-thin fa-bath"></i> 1 Attached Bathroom </span> <span><i className="fa-thin fa-expand"></i> Television</span> </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img"><img src="/img/rooms/room-03.jpg" className="img-fluid" alt="" /></div>
                            <div className="cont">
                                <div className="title"><a href="#">Super Deluxe </a></div>
                                <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 2 Bed</span> <span><i className="fa-thin fa-bath"></i> 1 Attached Bathroom </span> <span><i className="fa-thin fa-expand"></i> Television</span> </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img"><img src="/img/rooms/room-02.jpg" className="img-fluid" alt="" /></div> <span className="discount"><i className="fa-light fa-badge-percent"></i> Get 30% Off</span>
                            <div className="cont">
                                <div className="title"><a href="#">Executives rooms</a></div>
                                <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 4 Bed</span> <span><i className="fa-thin fa-bath"></i>2 Attached Bathroom </span> <span><i className="fa-thin fa-expand"></i> Television</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
