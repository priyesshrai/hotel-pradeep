import React from 'react'

export default function Video() {
    return (
        <section className="video-wrapper " data-overlay-dark="4" data-background="/img/banner/01.jpg">
            <video preload="none" autoPlay loop muted playsInline className='w-100'>
                <source src="/img/about/vdo.mp4" type="video/mp4" />
            </video>
        </section>
    )
}
