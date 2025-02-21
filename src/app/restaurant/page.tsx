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
        "img/restaurant/6.jpg",
    ]
    return (
        <>
            <section className="banner-header full-height valign bg-img" data-overlay-dark="4" data-background="img/banner/11.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div className="subtitle">Address of taste</div>
                            <div className="title mb-0">Hotel Restaurant</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-subtitle">Address of taste</div>
                            <div className="section-title">About Restaurant</div>
                        </div>
                    </div>
                    <div className="row mb-30">
                        <div className="col-md-12">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo sequi quisquam eos enim provident incidunt repellendus sit totam minus! Doloribus praesentium, officiis fugit, deleniti rem natus recusandae autem animi architecto alias aspernatur? Doloremque in, quae cum perspiciatis mollitia vero?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo tempora quia, cumque enim possimus ad atque accusamus, quam praesentium ipsam fugit quibusdam consectetur iure a maiores eum fugiat pariatur.</p>
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
