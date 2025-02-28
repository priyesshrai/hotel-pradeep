import React from 'react'
import Menu from './Menu'
import Gallery from '@/components/Gallery/Gallery'

export default function page() {
    const galleryData = [
        "img/restaurant/1.jpg",
        "img/restaurant/2.jpg",
        "img/restaurant/3.jpg",
        "img/restaurant/4.jpg",
        "img/restaurant/5.jpg",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle text-light">Address of taste</div> */}
                            <div className="title mb-0">About Poonam Restaurant</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-subtitle">Address of taste</div>
                            <div className="section-title">Poonam Restaurant – A Taste of Banaras
                            </div>
                        </div>
                    </div>
                    <div className="row mb-30">
                        <div className="col-md-12">
                            <p>Welcome to Poonam Restaurant, where we serve delicious food with the warmth of Banarasi hospitality. Our menu includes a variety of dishes, from traditional Banarasi flavors to popular Indian and international meals. Every dish is prepared with fresh ingredients to give you the best taste and quality. Whether you are craving local favorites or looking to try something new, we have something for everyone.</p>
                            <p>With a cozy and elegant setting, Poonam Restaurant is the perfect place to enjoy a relaxing meal with family and friends. Our friendly staff ensures you have a comfortable and enjoyable dining experience. Visit us and savor the rich flavors of Banaras in every bite!</p>
                        </div>
                    </div>
                    <div className="row mb-30">
                        <div className="col-md-12">
                            <h5>Hours</h5>
                            <ul className="list-unstyled page-list">
                                <li>
                                    <div className="page-list-icon"> <span className="ti-time"></span> </div>
                                    <div className="page-list-text">
                                        <p>Breakfast: 7.00 am – 11.00 am (daily)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon"> <span className="ti-time"></span> </div>
                                    <div className="page-list-text">
                                        <p>Lunch: 12.00 noon – 2.00 pm (daily)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon"> <span className="ti-time"></span> </div>
                                    <div className="page-list-text">
                                        <p>Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Menu />
            <Gallery imageData={galleryData} title="Restaurant Gallery" />
        </>
    )
}
