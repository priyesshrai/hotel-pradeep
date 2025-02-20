import React from 'react'

export default function Slider() {
    return (
        <header className="header slider-fade">
            <div className="owl-carousel owl-theme">
                <div className="item bg-img" data-overlay-dark="5" data-background="/img/bg-image/varanasi.jpg">
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 text-center">
                                    <h5>HOTEL PRADEEP</h5>
                                    <h1>Best 3-Star Hotel in Varanasi for a Perfect Stay</h1>
                                    {/* <a href="#" className="button-2">Rooms & Suites</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item bg-img" data-overlay-dark="5" data-background="/img/rooms/banner-03.jpg">
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 text-center">
                                    <h5> HOTEL PRADEEP</h5>
                                    <h1>Where Luxury Meets Perfection</h1>
                                    <a href="#" className="button-2">Rooms & Suites</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item bg-img" data-overlay-dark="5" data-background="/img/rooms/banner-02.jpg">
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 text-center">
                                    <h5>HOTEL PRADEEP</h5>
                                    <h1>A Perfect Stay in the Heart of Varanasi</h1>
                                    <a href="#" className="button-2">Rooms & Suites</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item bg-img" data-overlay-dark="5" data-background="/img/rooms/banner-01.jpg">
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 text-center">
                                    <h5>HOTEL PRADEEP</h5>
                                    <h1>Experience Comfort & Elegance</h1>
                                    <a href="#" className="button-2">Rooms & Suites</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
