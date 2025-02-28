'use client'
import React from 'react'

export default function OurFacilities() {
    const facilities = [
        {
            icon: 'fa-thin fa-bed-front',
            title: '24-Hour Room Service',
            description: 'Enjoy round-the-clock in-room dining.'
        },
        {
            icon: 'fa-thin fa-refrigerator',
            title: 'Refrigerator',
            description: 'Keep your drinks and snacks chilled anytime.'
        },
        {
            icon: 'fa-thin fa-wifi',
            title: 'WiFi',
            description: 'Stay connected with high-speed internet access.'
        },
        {
            icon: 'fa-thin fa-champagne-glasses',
            title: 'Bar',
            description: 'Relax with a drink at our in-house bar.'
        },
        {
            icon: 'fa-light fa-elevator',
            title: 'Lift',
            description: 'Easy access to all floors with our elevator service.'
        },
        {
            icon: 'fa-thin fa-plate-utensils',
            title: 'Vegetarian Restaurant',
            description: 'Enjoy delicious vegetarian meals at our restaurant.'
        },
        {
            icon: 'fa-thin fa-air-conditioner',
            title: 'Air Conditioning',
            description: 'Stay cool and comfortable with air-conditioned rooms.'
        },
        {
            icon: 'fa-thin fa-phone-office',
            title: 'Telephone',
            description: 'Stay connected with in-room calling service.'
        },
        {
            icon: 'fa-thin fa-print',
            title: 'Xerox and Fax Facilities',
            description: 'Convenient document copying and fax services.'
        },
        {
            icon: 'fa-thin fa-washing-machine',
            title: 'Laundry Service',
            description: 'Quick and professional garment cleaning service.'
        },
        {
            icon: 'fa-thin fa-stethoscope',
            title: 'Doctor on Call',
            description: 'Medical assistance available anytime for emergencies.'
        },
        {
            icon: 'fa-thin fa-car',
            title: 'Parking Facilities',
            description: 'Secure parking for your vehicle.'
        },
    ]
    return (
        <section className="amenities section-padding bg-lightbrown">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="row">
                            {
                                facilities.map((facility, index) => (
                                    <div key={index} className="col-lg-3 col-md-4 col-12 mb-30">
                                        <div className="item hover-box">
                                            <div className="cont up">
                                                <div className="icon"> <i className={facility.icon}></i> </div>
                                                <div className="text">
                                                    <h5>{facility.title}</h5>
                                                    <p>{facility.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
