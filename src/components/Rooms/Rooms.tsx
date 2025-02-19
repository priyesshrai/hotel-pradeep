import React from 'react'

export default function Rooms() {
  return (
    <section className="rooms3 section-padding bg-darkgray">
        <div className="row">
            <div className="col-md-12 mb-25 text-center">
                <div className="section-subtitle">Luxury Rixos Hotel</div>
                <div className="section-title white">Rooms <span>&</span> Suites</div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="img"><img src="img/rooms/01.jpg" className="img-fluid" alt="" /></div> <span className="discount"><i className="fa-light fa-badge-percent"></i> Get 25% Off</span>
                        <div className="cont">
                            <div className="title"><a href="#">Deluxe Room</a></div>
                            <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 2 Bed</span> <span><i className="fa-thin fa-bath"></i>1 Bathroom</span> <span><i className="fa-thin fa-expand"></i> 15 Sqm</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="img/rooms/02.jpg" className="img-fluid" alt="" /></div>
                        <div className="cont">
                            <div className="title"><a href="#">Family Room</a></div>
                            <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 2-4 Bed</span> <span><i className="fa-thin fa-mug-saucer"></i>Breakfast</span> <span><i className="fa-thin fa-expand"></i> 20 Sqm</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="img/rooms/03.jpg" className="img-fluid" alt="" /></div> <span className="discount"><i className="fa-light fa-badge-percent"></i> Get 30% Off</span>
                        <div className="cont">
                            <div className="title"><a href="#">Double Room</a></div>
                            <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 4 Bed</span> <span><i className="fa-thin fa-bath"></i>2 Bathroom</span> <span><i className="fa-thin fa-expand"></i> 25 Sqm</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="img/rooms/04.jpg" className="img-fluid" alt="" /></div>
                        <div className="cont">
                            <div className="title"><a href="#">Superior Room</a></div>
                            <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 3 Bed</span> <span><i className="fa-thin fa-bath"></i>1 Bathroom</span> <span><i className="fa-thin fa-expand"></i> 30 Sqm</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="img/rooms/05.jpg" className="img-fluid" alt="" /></div> <span className="discount"><i className="fa-light fa-badge-percent"></i> Get 40% Off</span>
                        <div className="cont">
                            <div className="title"><a href="#">Wellness Room</a></div>
                            <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 4 Bed</span> <span><i className="fa-thin fa-mug-saucer"></i>Breakfast</span> <span><i className="fa-thin fa-expand"></i> 30 Sqm</span> </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img"><img src="img/rooms/06.jpg" className="img-fluid" alt="" /></div>
                        <div className="cont">
                            <div className="title"><a href="#">King Room</a></div>
                            <div className="details"> <span><i className="fa-thin fa-bed-front"></i> 4 Bed</span> <span><i className="fa-thin fa-bath"></i>2 Bathroom</span> <span><i className="fa-thin fa-expand"></i> 40 Sqm</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
