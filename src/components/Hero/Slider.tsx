import React from 'react'

export default function Slider() {
    return (
        <header className="header slider-fade">
            <div className="owl-carousel owl-theme">
                <div className="item bg-img" data-overlay-dark="5" data-background="img/rooms/03.jpg">
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 text-center">
                                    <h5>Rixos Luxury Hotel</h5>
                                    <h1>Enjoy a Luxury Experience</h1>
                                    <a href="#" className="button-2">Rooms & Suites</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item bg-img" data-overlay-dark="5" data-background="img/rooms/02.jpg">
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 text-center">
                                    <h5>Unique Place to Relax & Enjoy</h5>
                                    <h1>Enjoy The Best Moments</h1>
                                    <a href="#" className="button-2">Rooms & Suites</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item bg-img" data-overlay-dark="5" data-background="img/rooms/01.jpg">
                    <div className="v-middle caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-12 text-center">
                                    <h5>Resort & Luxury Hotel</h5>
                                    <h1>The Perfect Base For You</h1>
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
