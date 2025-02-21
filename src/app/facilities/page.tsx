import Facilities from '@/components/Facilities/Facilities'
import React from 'react'

export default function page() {
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" data-overlay-dark="5" data-background="img/banner/08.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="subtitle">Our Services</div>
                            <div className="title">Hotel Facilities</div>
                        </div>
                    </div>
                </div>
            </section>
            <Facilities />
        </>
    )
}
